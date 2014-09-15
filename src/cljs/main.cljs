(ns main
 (:require [goog.net.XhrIo] [clojure.browser.repl :as repl] [domina :as dom])
  (:use 
    [globals :only [sformat]]
    [syllab :only [syll-single]]
    [orphoep :only [orpho-single ++ --]]
    [translit :only [translit]]
    [domina.css :only [sel]] 
    [domina.events :only [dispatch! current-target listen!]] 
    [domina :only [attr add-class! set-text! text html-to-dom append! value children text destroy-children!]]))


; Use of "localhost" will only work for local development.
; Change the port to match the :repl-listen-port.
;(repl/connect "http://localhost:9000/repl")

(enable-console-print!)
(defn render-tablerow [word paradigm]
  (let [row (html-to-dom (sformat "<tr class='syll-row'><td class='lemma'>%s</td></tr>" word))]
    (do (dorun (map-indexed (fn [i w] 
                   (let [td (html-to-dom (sformat "<td class='sm%d'></td>" i))] 
                     (append! row (set-text! td w)))) paradigm)) row)))

(def ru-vows (re-pattern "[`иеаоуяюыёэ]"))
;TODO: implement warnings (stress, lemmas)
;TODO: options like auto stress, sampa,palat
;TODO: google stats

(def word-field (sel ".syll-word"))
(def tab-field (sel ".syll-content"))
(def inp-stress-sign (sel ".stress-sign"))
(def sample-text (sel ".sample-text"))

(defn add-to-table [tr] (append! tab-field  tr))
(defn set-of-vals [t]
  (into {} (map #(vector % (syll-single %)) (set t))))

(defn syllaby-words [evt]
  (let [stress-sign (value inp-stress-sign)
        regex-s (re-pattern (-- "([.,;:'\"!? ])" stress-sign ""))
        single-word (-- (value word-field) stress-sign "*")
        splitted-t (.split (-- (value sample-text) stress-sign "*") regex-s)
        map-words (set-of-vals splitted-t)
        text-fn (fn [evt]
                  (let [model (value (sel "select[name='syl-model']"))]
                  (dom/set-text! (sel "#text-of-syls") (++ (map 
                                                             #(let [r (map-words % %)] (if (seq? r) (nth r (int model)) r)) 
                                                             splitted-t)))))
        model-select (sel "select[name='syl-model']") 
        ]
  (if (= "" single-word)
    (do (dorun (map 
             #(add-to-table (render-tablerow (key %) (val %))) 
             map-words))
        (listen! model-select  :click text-fn)
        (dispatch! model-select :click {}))
    (add-to-table (render-tablerow single-word (syll-single single-word))))))

(defn reset [evt]
  (let [childs (sel ".syll-content")]
  ( destroy-children! childs)))

(js/setTimeout #(dispatch! (sel ".syllab") :click {}) 1500 )

;tabs
(def tabs (sel "li > a"))
(def tabs-div (dom/nodes (sel ".tab-content > div")))

(defn tab-change [evt]
  (let [href (dom/attr (current-target evt) "href")]
  (do (dorun (map #(dom/remove-class! (.-parentNode %) "active") (dom/nodes tabs)))
  (dom/add-class! (.-parentNode (current-target evt)) "active")
  (dorun (map #(do  (dom/remove-class! % "active")) tabs-div))
  (dom/add-class! (sel href) "active"))))

(defn -main []
  (do 
    (listen! (sel ".syllab") :click syllaby-words))
    (listen! (sel ".reset") :click reset)
    (listen! tabs :click tab-change)
  )

(-main)

;(println (.split foos (re-pattern " ")))
;(dorun (map #(add-to-table (syllaby %)) (filter not-empty (.split foos #"[.,;:'\"!?\n ]"))))
;(js/setTimeout #(-main) 150)
;(println (str (syll-single "лондонский"))) 
;(def t (text (sel "button"))) 
;(defn xhr-connection 
;  "Returns an XhrIo connection"
;  []
;  (goog.net.XhrIo.))
;(println sm4-dict)
;(println (.send (goog.net.XhrIo.))) 
;(def xhr (xhr-connection)) 

;(defn my [reply] 
;   reply)
 
;(defn ajax-json [url]
;   (.send net url my))    

;(def url "https://github.com/omelhoro/myFlaskSite/blob/master/static/data/excsApp.json")
;(def url "http://ip.jsontest.com/")
;(defn callback [reply]
;    (let [v (js->clj (.getResponseJson (.-target reply)))] ;v is a Clojure data structure
;        (println v)))

;(.send goog.net.XhrIo url callback)
;(ajax-json url) 
;(println "Hello world, du Duselkopf!")   
