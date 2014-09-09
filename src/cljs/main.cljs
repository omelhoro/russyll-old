(ns main
 ;(:require [goog.net.XhrIo :as net] )
 (:require [goog.net.XhrIo] [clojure.browser.repl :as repl])
  (:use 
    [globals :only [sformat]]
    [syllab :only [syll-single]]
    [orphoep :only [orpho-single ++ --]]
    [translit :only [translit]]
    [domina.css :only [sel]] 
    [domina.events :only [dispatch! listen!]] 
    [domina :only [set-text! text html-to-dom append! value children text destroy-children!]]))

; Use of "localhost" will only work for local development.
; Change the port to match the :repl-listen-port.
;(repl/connect "http://localhost:9000/repl")

(enable-console-print!)
(defn syllaby [word]
  (let [
        sylls (syll-single word)
        row (html-to-dom (sformat "<tr class='syll-row'><td class='lemma'>%s</td></tr>" word))]
    (do (dorun (map-indexed (fn [i w] 
                   (let [td (html-to-dom (sformat "<td class='sm%d'></td>" i))] 
                     (append! row (set-text! td w)))) sylls)) row)))


(def word-field (sel ".syll-word"))
(def tab-field (sel ".syll-content"))
(def inp-stress-sign (sel ".stress-sign"))
(def sample-text (sel ".sample-text"))

(defn add-to-table [tr] (append! tab-field  tr))

(defn syllaby-words [evt]
  (let [stress-sign (value inp-stress-sign)
        regex-s (re-pattern (-- "[.,;:'\"!? ]" stress-sign ""))
        single-word (value word-field)
        syllaby (memoize syllaby)
        ]
  (if (= "" single-word)
    (dorun (map #(add-to-table (syllaby (-- % stress-sign "*"))) (filter not-empty (.split (value sample-text) regex-s))))
    (add-to-table (syllaby (-- single-word stress-sign "*"))))))

(defn reset [evt]
  (let [childs (sel ".syll-content")]
  ( destroy-children! childs)))

(js/setTimeout #(dispatch! (sel ".syllab") :click {}) 1500 )
  
(defn -main []
  (do 
    (listen! (sel ".syllab") :click syllaby-words))
    (listen! (sel ".reset") :click reset)
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
