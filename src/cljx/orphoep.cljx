(ns orphoep
 (:require [clojure.string] 
           #+clj [clojure.data.json :as json] 
           #+cljs [goog.net.XhrIo]
           )
  )
(def stress-sign "*")
(def -- clojure.string/replace)
(def ++ clojure.string/join)
#+cljs (enable-console-print!)

(defn replace-patt [val [pat rep]] 
  (if (list? pat) 
    (reduce #(-- %1 %2 rep) val pat)
  (-- val pat rep)))

(def unpal-e-test '("шт*ейгер" "брет*елька" "модерн" "денди"  "дельта"))    
#+clj (def e-dict (with-open [in-file (clojure.java.io/reader (clojure.java.io/resource "data/e_rep.json"))]
                   (doall
                     (json/read in-file))))    
#+cljs (def e-dict ;{:a \e}) 
         (let [url "/static/syllable/e_rep.json"
          callback (fn [reply] (let [v (js->clj (.getResponseJson (.-target reply))) ] ;v is a Clojure data structure
                                 (do (def e-dict v) e-dict)))]
          (.send goog.net.XhrIo url callback)))

(defn unpal-e [word & [lemma]] 
  (let [
        strd-ix (.indexOf word stress-sign) 
        word-unstrd (-- word stress-sign "")  
        lemma (if (= lemma nil ) word-unstrd lemma) 
        patts (get e-dict lemma [])
        repld (reduce replace-patt word-unstrd patts)
        ]
    (if (>= strd-ix 0) (str (.substring repld 0 strd-ix) stress-sign (.substring repld strd-ix)) repld
)))
 
(def hp-test '("солнце" "сердце" "раздница" "честный"))
(def hard-pron-patts 
        '(("стн" "сн")
         ("здн" "зн")
         ("стл" "сл")
         (("стц" "здц") "сц")
         (("нтск" "ндск") "нск")
        ("рдц" "рц")
        ("лнц" "нц")
        ("стск" "сск")
        (("ться" "тся") "тса")
        ("шься" "шса")
        ("шь" "ш")
        ("вств" "ств")
        ("кон*ечно" "кон*ешно")
        ( "ск*учн" "ск*ушн")
        ("ндш" "нш")
        ("ргск" "рск")))

(defn hard-pron [word]
  (reduce 
    replace-patt word hard-pron-patts ))

(def cluster-assim-test '("легко" "мягко" "считать"))
(def cluster-assim-patts
        '((("сш" "зш") "шш")
         (("сж" "зж") "жж") 
         (("сч" "зч" "сщ" "жч") "щ") 
         (("тч" "дч") "чч")
         (("тщ" "дщ") "чщ")
         (("гки") "хьки")
         (("гк") "хк")
         (("хг") "г")
       ))
(defn cluster-assim [word] (reduce replace-patt word cluster-assim-patts))
(def reg-assim {
                           "к" "г"
                           "г" "к"
                           "ш" "ж"
                           "з" "с"
                           "в" "ф"
                           "п" "б"
                           "д" "т"
                           "ж" "ш"
                           "с" "з"
                           "т" "д"
                           "б" "п"
                           })

(def cons-2  "лмнрцкгзвпджчшстбьъ")
(def vd-cons (set  "бдгжвз")) 
(def neutral-cons (set "рнмл"))
(def vl-cons (set "пткшфс")) 

(defn devoice [word islast]  
  (let [pos (if islast (dec (count word)) (- (count word) 2))]
    (assoc word pos (get reg-assim (str (nth word pos)))))
  )
  
(def end-assim-test (mapv (fn [x] (mapv char x)) ["поезд" "вновь"]))
(defn end-assim [word] 
  (let [word (mapv char word) 
        lt (last word) 
        plt (last (butlast word))] 
    (if (or (vd-cons  lt) 
            (and (vd-cons  plt) (contains? (set "ьъ")  lt)))
    (++ (devoice word (vd-cons  lt)))
    (++ word))))

;(map clojure.string/join (map end-assim end-assim-test))


(def reg-assim-pat (re-pattern (++ ["[" cons-2 "]{2,}" ])))
(defn deassim-con [con modus] 
  (let [new-modus (if (= modus "") 
                    (cond (vl-cons con) "vl" (vd-cons con) "vd" :else "") 
                    modus)]
  (if (contains? neutral-cons con)
    [con ""]
    (if (or (and (vl-cons con) (= new-modus "vd" )) (and (vd-cons con) (= new-modus "vl")))
      [(get reg-assim (str con) con ) new-modus]
      [con new-modus]))))

(defn deassim [cons modus]
  (if (not-empty cons)
  (let [[cc nmodus] (deassim-con (first cons) modus)]
    (concat [cc] (deassim (rest cons) nmodus)))
    []))

(defn reg-assim-repl [word]
    (-- word reg-assim-pat  
                             #(let [revd (reverse %1)] 
                               (if (= (first revd) \в) 
                                 %1
		                               (++ (reverse (deassim revd "")))))))

(def reg-assim-test ["мужской" "отдых" "сбоку" "все" "творец" "сделать"])
(map reg-assim-repl reg-assim-test)

(def reg-pal-test ["здесь," "зонтик" "истинный" "все" "творец"])
(def reg-pal-pat (re-pattern "(ст|зд|сд|нд|нч|нт|нс|нз)\\**[юеяьиё]"))
(defn reg-pal [word]
  (-- word reg-pal-pat #(str (first(first %1)) \ь (.substring (first %1) 1 ))))
;(map reg-pal reg-pal-test)



(def excp-ogo (set ["дорого" "много" "строго"]))
(def ogo-pat (re-pattern "[ео]г\\**о$"))

(def ogo-ovo-test ["дорого," "дорогого" "большого" "никого" "строго"])

(defn ogo-ovo [word]
  (let [lenght (count word)
        repfn (fn [word] (-- word ogo-pat #(-- %1 "г" "в")))
        ]
  (if (contains? excp-ogo word ) 
    ;(if (and (> lenght 5) (= (.substring word (- lenght 5)) "орого"))
    ;  (repfn word)
    ;  word)
    word
    (repfn word)))) 
;(map ogo-ovo ogo-ovo-test)

(defn chto-trans [word] 
  (let [isstressed (not= -1 (.indexOf word "*"))]
  (if (or (= word "что") (= word "чт*о")) 
    (if isstressed "шт*о" "што") word)))

(defn dash-rep [word] (-- word "-" ""))

(def rus-cons (set "лмнрцкгзвпджчшстбфщ"))
(def dubcon-pat (re-pattern (++ ["([" (++ rus-cons) "])\\1"])))
(defn dubcon-alg [w [m m1]]
  (let [ix (.indexOf w m) first-l (first m) first-s (str first-l)]
    (if (= ix 0) m
      (if (= (count w) (+ ix 2)) 
        first-s
        (cond
          (contains? rus-cons (nth w (+ ix 2))) first-s
          (contains? (set "бвфрлг") first-l) first-s
          (contains? (set "жтдзс") first-l) m
          (and (>= (- ix 2) 0) (= (nth w (- ix 2)) \*) (contains? (set "кнмп") first-l)) m 
          :else first-s
                     )))))

(defn dubcon [word]
  (-- word dubcon-pat (partial dubcon-alg word))) 
;(dubcon "аккуратный")

(def dubcon-test ["грамм" "русский" "аккуратный" "коммунист" "рассада"])
;(map dubcon dubcon-test)

(def fns [hard-pron unpal-e cluster-assim end-assim reg-assim-repl reg-pal ogo-ovo chto-trans dash-rep dubcon])

(defn ^:export orpho-single [word]
  (reduce #(%2 %1) word fns))

