(ns main
  (:require [goog.net.XhrIo ]
            [text ]
            [goog.storage.mechanism.HTML5SessionStorage :as html5ss]
            ;[clojure.browser.repl :as repl]
 [domina :as dom])
  (:use [globals :only [sformat]]
        [syllab :only [syll-single]]
        [orphoep :only [orpho-single ++ --]]
        ; [translit :only [translit]]
 [usertest :only [setup-usertest serve-words-rand calc-stats]]
        [domina.css :only [sel]]
        [domina.events :only [dispatch! current-target listen!]]
        [domina :only [attr add-class! set-text! text html-to-dom append! value children text destroy-children!]]))

(enable-console-print!)

(defn render-tablerow [word paradigm]
  (let [row (html-to-dom (sformat "<tr class='syll-row'><td class='lemma'>%s</td></tr>" word))]
    (do
      (dorun
        (map-indexed
          (fn [i w] (let [td (html-to-dom (sformat "<td class='sm%d'></td>" i))] (append! row (set-text! td w))))
          paradigm))
      row)))

; (def ru-vows (re-pattern \"[`иеаоуяюыёэ]\"))
(def ru-vows (js/RegExp. "[иеаоуяюыёэ]" "i"))

;TODO: implement warnings (stress, lemmas)
;TODO: options like auto stress, sampa,palat
;TODO: google stats
(def word-field (sel ".syll-word"))

(def tab-field (sel ".syll-content"))

(def inp-stress-sign (sel ".stress-sign"))

(def sample-text (sel ".sample-text"))

(defn add-to-table [tr] (append! tab-field tr))

(defn syllaby-words [evt]
  (let [stress-sign (value inp-stress-sign)
        single-word (-- (value word-field) stress-sign "*")
        splitted-t (text/tokenize (value sample-text) stress-sign)
        map-words (text/set-of-vals splitted-t)
        text-fn (fn [evt]
                  (let [model (int (value (sel "select[name='syl-model']")))]
                    (dom/set-value! (sel "#text-of-syls") (++ (text/text-by-model splitted-t map-words model)))))
        model-select (sel "select[name='syl-model']")]
    (if (= "" single-word)
      (do
        ;(println (text/text-stats splitted-t map-words))
        (dorun (map #(add-to-table (render-tablerow (key %) (val %))) map-words))
        (listen! model-select :click text-fn)
        (dispatch! model-select :click {}))
      (add-to-table (render-tablerow single-word (syll-single single-word))))))

(defn reset [evt] (let [childs (sel ".syll-content")] (destroy-children! childs)))

;usertest
;(def storage (goog.storage.mechanism.HTML5SessionStorage.))
;(.clear storage)
;(.set storage \"a\" \"b\")
;(println (for [[k v] storage] v))
;(println (keys (.get storage :usertest)))
;(println (cljs.reader/read-string (.get storage :usertest)))
(def udb {})

(defn usertest-wrap [is-sess-store n-test]
  (let [pg-bar (sel "#usertest-progress")
        user-input-field (sel "input.usertest")
        usert-tab (sel ".syll-of-user")
        usert-but (sel "button.usertest")
        multipl (/ 100 n-test)
        user-input-db (if is-sess-store
                        (let [db (goog.storage.mechanism.HTML5SessionStorage.)] (do (.clear db) db))
                        [])
        word-is-avaible (fn [w] (if is-sess-store (nil? (.get user-input-db w)) (nil? (udb w))))
        len-db (fn [] (if is-sess-store (.getCount user-input-db) (count udb)))
        update-storage! (fn [v]
                          (let [k (clojure.string/replace v "-" "")]
                            (if is-sess-store (.set user-input-db k v))
                            (def udb (assoc udb k v))))
        modify-progress-bar (fn [i]
                              (let [newval (+ (* multipl (inc i)))]
                                (do
                                  (dom/set-attr! pg-bar "aria-valuenow" newval)
                                  (dom/set-style! pg-bar "width" (str newval "%")))))
        usertest-proceed (fn [user-input]
                           (let [next-input (first (filter word-is-avaible (repeatedly serve-words-rand)))
                                 n-hist (len-db)]
                             (if (= n-hist n-test)
                               ;means end stats
                               (do
                                 (println udb)
                                 (append!
                                   usert-tab
                                   (++
                                     ["<tr>"
                                      (map
                                        #(++ ["<td>" % "-" (int (* 100 (/ % n-test))) "%" "</td>"])
                                        (calc-stats udb))
                                      "</tr>"]))
                                 (dom/set-attr! usert-but "disabled" "true"))
                               (do
                                 (println (serve-words-rand) n-hist next-input user-input)
                                 (modify-progress-bar n-hist)
                                 (dom/set-value! user-input-field next-input)))))
        usertest-error (fn [a] (println a))
        usertest-val-input (fn [evt]
                             (let [user-inp (dom/value user-input-field)]
                               (if (or (= user-inp "") (= 1 (count (filter #(= \- %) user-inp))))
                                 (do (update-storage! user-inp) (usertest-proceed user-inp))
                                 (usertest-error user-inp))))]
    (do (usertest-proceed "") usertest-val-input)))

;; (defn usertest [ev]
;;   (let [user-input (value (sel \"input.usertest\"))
;;         next-input (serve-words user-input)
;;         history (.get storage :usertest)
;;         n-hist (count history)]
;;     (if (= n-hist n-test) ;means end stats
;;       (do (append! (sel \".syll-of-user\")
;;                    (++ [\"<tr>\"
;;                         (map
;;                          #(++ [\"<td>\" %1 \"-\" (int (* 100(/ %1 n-test))) \"%\" \"</td>\"])
;;                          next-input)
;;                         \"</tr>\"]))
;;           (dom/set-attr! (sel \"button.usertest\") \"disabled\" \"true\"))
;;       (do
;;         (modify-progress-bar! n-hist pg-bar)
;;         (dom/set-value! (sel \"input.usertest\") next-input)))
;;     )
;;   )
;; (defn modify-progress-bar! []
;;   (let [curval (js/parseInt (dom/attr pg-bar \"aria-valuenow\"))
;;         newval (+ curval (/ 100 n-test))]
;;     (do
;;       (dom/set-attr! pg-bar \"aria-valuenow\" newval)
;;       (dom/set-style! pg-bar \"width\" (str newval \"%\"))
;;       )
;;     )
;;   )
;; (defn usertest [evt]
;;   (let [user-input (value (sel \"input.usertest\"))
;;         next-input (serve-words user-input)
;; ]
;;     (if (vector? next-input) ;means end stats
;;       (do (append! (sel \".syll-of-user\")
;;                    (++ [\"<tr>\"
;;                         (map
;;                          #(++ [\"<td>\" %1 \"-\" (int (* 100(/ %1 n-test))) \"%\" \"</td>\"])
;;                          next-input)
;;                         \"</tr>\"]))
;;           (dom/set-attr! (sel \"button.usertest\") \"disabled\" \"true\"))
;;       (do
;;         (modify-progress-bar!)
;;         (dom/set-value! (sel \"input.usertest\") next-input)))
;;     )
;;   )
;tabs
(def tabs (sel "li > a"))

(def tabs-div (dom/nodes (sel ".tab-content > div")))

(defn tab-change [evt]
  (let [href (dom/attr (current-target evt) "href")]
    (do
      (dorun (map #(dom/remove-class! (.-parentNode %) "active") (dom/nodes tabs)))
      (dom/add-class! (.-parentNode (current-target evt)) "active")
      (dorun (map #(do (dom/remove-class! % "active")) tabs-div))
      (dom/add-class! (sel href) "active"))))

(def gl (atom nil))

(println @gl)

(reset! gl 10)

(println @gl)

(defn -main []
  (listen! (sel ".syllab") :click syllaby-words)
  (listen! (sel ".reset") :click reset)
  (listen! (sel "button.usertest") :click (usertest-wrap false 10))
  (js/setTimeout #(dispatch! (sel ".syllab") :click {}) 500)
  (listen! tabs :click tab-change))

(-main)

;(println (.split foos (re-pattern \" \")))
;(dorun (map #(add-to-table (syllaby %)) (filter not-empty (.split foos #\"[.,;:'\\\"!?\\n ]\"))))
;(js/setTimeout #(-main) 150)
;(println (str (syll-single \"лондонский\")))
;(def t (text (sel \"button\")))
;(defn xhr-connection
;  \"Returns an XhrIo connection\"
;  []
;  (goog.net.XhrIo.))
;(println sm4-dict)
;(println (.send (goog.net.XhrIo.)))
;(def xhr (xhr-connection))
;(defn my [reply]
;   reply)
;(defn ajax-json [url]
;   (.send net url my))
;(def url \"https://github.com/omelhoro/myFlaskSite/blob/master/static/data/excsApp.json\")
;(def url \"http://ip.jsontest.com/\")
;(defn callback [reply]
;    (let [v (js->clj (.getResponseJson (.-target reply)))] ;v is a Clojure data structure
;        (println v)))
;(.send goog.net.XhrIo url callback)
;(ajax-json url)
;(println \"Hello world, du Duselkopf!\")
