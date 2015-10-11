(ns orphoep
   (:require [clojure.string]
             ;#+clj [clojure.data.json :as json]
             ;#+cljs [goog.net.XhrIo]
             )
   (:use [ling-data :only [e-rep-map]]))

(def stress-sign "*")
(def -- clojure.string/replace)
(def ++ clojure.string/join)
       (enable-console-print!)

(defn replace-patt [val [pat rep]]
  (if (list? pat)
    (reduce #(-- %1 %2 rep) val pat)
    (-- val pat rep)))

;; #+clj (def e-dict (with-open [in-file (clojure.java.io/reader (clojure.java.io/resource "data/e_rep.json"))]
;;                     (doall
;;                      (json/read in-file))))
;; #+cljs (def e-dict {:a \e})
                                        ; (let [url "./static/e_rep.json"
                                        ;  callback (fn [reply] (let [v (js->clj (.getResponseJson (.-target reply))) ] ;v is a Clojure data structure
                                        ;                         (do (def e-dict v) e-dict)))]
                                        ;  (.send goog.net.XhrIo url callback)))

(defn unpal-e
  "Cases like [шт*ейгер брет*елька модерн денди дельта]"
  [word & [lemma]]
  (let [
        strd-ix (.indexOf word stress-sign)
        word-unstrd (-- word stress-sign "")
        lemma (if (= lemma nil ) word-unstrd lemma)
        patts (get e-rep-map lemma [])
        repld (reduce replace-patt word-unstrd patts)
        ]
    (if (>= strd-ix 0) (str (.substring repld 0 strd-ix) stress-sign (.substring repld strd-ix)) repld)))

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

(defn hard-pron
  "Cases like [солнце сердце поздно честный]"
  [word]
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
    (("хг") "г")))

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
    (assoc word pos (get reg-assim (str (nth word pos))))))

(defn end-assim [word]
  "Cases like [поезд вновь]"
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
      #(let [
             revd (reverse %1)
             [v without-v] (if (= (first revd) \в) [(first revd) (rest revd)] ["" revd])
             ]
         (if (and (= 2 (count revd)) (= (first revd) \в))
           %1
           (do
             ;(println v without-v (++ [v (++ (deassim without-v ""))]))
             (++ (reverse (++ [v (++ (deassim without-v ""))]))))))))

(def reg-pal-pat (re-pattern "(ст|зд|сд|нд|нч|нт|нс|нз)(?=\\**[юеяьиё])"))
(defn reg-pal
  "Words like [здесь, зонтик истинный все творец]"
  [word]
  (-- word reg-pal-pat (fn [match]
                         (let [res                            match]
                           (do
                             (++ \ь res))))))

(def excp-ogo (set ["дорого" "много" "строго"]))
(def ogo-pat (re-pattern "[ео]г\\**о$"))
(defn ogo-ovo
  "Cases like [дорого, дорогого большого никого строго]. But exceptions like [дорого много строго]"
  [word]
  (let [lenght (count word)
        repfn (fn [word] (-- word ogo-pat #(-- %1 "г" "в")))
        ]
    (if (contains? excp-ogo word ) ;(if (and (> lenght 5) (= (.substring word (- lenght 5)) "орого")) ;  (repfn word)
                                        ;  word)
            word
            (repfn word))))
                                        ;(map ogo-ovo ogo-ovo-test)

(defn chto-trans [word]
  (let [isstressed (not= -1 (.indexOf word "*"))]
    (if (or (= word "что") (= word "чт*о"))
      (if isstressed "шт*о" "што") word)))

(defn dash-rep [word] (-- word #"[-’]" ""))

(def rus-cons (set "лмнрцкгзвпджчшстбфщ"))
(def dubcon-pat (re-pattern (++ ["([" (++ rus-cons) "])\\1"])))
(defn dubcon-alg [w [m m1]]
  (let [
        m        (++ [m m1])        
        ix (.indexOf w m)
        first-l (first m)
        first-s (str first-l)]
    (if (= ix 0) m
        (if (= (count w) (+ ix 2))
          first-s
          (cond
           (rus-cons (nth w (+ ix 2))) first-s
           ((set "бвфрлг") first-l) first-s
           ((set "жтдзс") first-l) m
           (and (>= (- ix 2) 0) (= (nth w (- ix 2)) \*) ((set "кнмп") first-l)) m
           :else first-s
           )))))

(defn dubcon
  "Cases like [грамм русский аккуратный коммунист рассада]"
  [word]
  (-- word dubcon-pat (partial dubcon-alg word)))

(def fns [hard-pron unpal-e cluster-assim end-assim reg-assim-repl reg-pal ogo-ovo chto-trans dash-rep dubcon])

(defn ^:export orpho-single [word]
  (reduce #(%2 %1) word fns))

;;;;;;;;;;;; This file autogenerated from src/cljx/orphoep.cljx
