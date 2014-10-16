(ns syllab
  (:require [clojure.string :as str] 
           #+clj [clojure.data.json :as json])
  (:use [ling-data :only [onset-sm4 onset-index]]
        [orphoep :only [++ -- orpho-single]] 
        [globals :only [sformat]]
        [translit :only [translit]]))
#+cljs (enable-console-print!)

(def concluster-pat (let 
                      [
                       vow-bef-with (sformat "(\\**[%s])" (++ globals/all-vows)) 
                       non-vows (sformat "([^%s*-]+)"  (++ globals/all-vows))
                       vow-after (sformat "(?=[%s*-])" (++ globals/all-vows))
                       merged (++ [vow-bef-with non-vows vow-after])
                       ]
(do   
                        [merged (re-pattern merged) ])))

(def vowcluster-pat (let [
                 vow   (sformat "[%s]" (++ globals/all-vows))
                vow-aft (sformat "(?=\\*?[%s])" (++ globals/all-vows))
                merged (++ [vow vow-aft])
                ]
                      (do 
  (re-pattern merged ))))

#+clj  (def sm4-dict (with-open [in-file (clojure.java.io/reader (clojure.java.io/resource "data/kemp_data_on_rep.json"))]
                      (doall
                        (json/read in-file)))) 

#+cljs (def sm4-dict  {:a {:b 1}})     
         ; (let [url "/static/kemp_data_on_rep.json"
         ;   callback (fn [reply] (let [v (js->clj (.getResponseJson (.-target reply)))] ;v is a Clojure data structure
         ;                            (do (def sm4-dict v) sm4-dict)))]
         ;   (.send goog.net.XhrIo url callback)))

(defn sm1 [comp-m [v c]]
  (let [is-stressed (= \* (first v))]
  (if (or (not is-stressed)
          (and (= 2 (count c)) is-stressed (contains? (set "рРлЛй") (second c))))
    [v "-" c]
    [v (first c) "-" (++ (rest c))])))

(defn sm2 [comp-m [v c]]
      (cond 
        (and (= 2 (count c)) (= c "рш")) [v c \-]
        (every? #(contains? globals/rus-sons  %) c) [v \- c] 
        (and (contains? globals/rus-sons (first c))
                        (not (contains? globals/rus-sons (second c)))) [v (str (first c)) \- (++ (rest c))]
        :else [v \- c]))

(defn sm3 [comp-m [v c]]
    [v "-" c])
 
(defn sm4-check-concl [c o]
  (let [last-let (str (last c))
        prelast (++ (butlast c))
        value (onset-sm4 prelast)
        isreg (if (vector? value)(= 2 (get value (onset-index last-let 99) 0)) false)]
    (do ;(println last-let prelast value isreg (vector? value) (nth value (onset-index last-let))) 
  (if (or (= (count c) 1) isreg)
    [(++ o) \- (++ c)]
  ( sm4-check-concl (rest c) (conj o (first c)))))))

(defn sm4 [comp-m [v c]]
      [v (++ (sm4-check-concl c []))])

(def son-scale
  (apply merge (map-indexed #(into {} (for [c %2] [c %1])) ["птк" "бдг" "чц" "сфшщх" "звж" "мн"  "л" "р" "й"])))

(defn sm5 [comp-m [v c]]
  (let [son-vals (mapv #(son-scale %1 %1) (.toLowerCase c)) 
        min-ix (.indexOf #+cljs (into-array son-vals) #+clj son-vals (apply min son-vals))]
   [v (++ (take min-ix c)) \- (++ (drop min-ix c))]))

(defn js-replace [fm v c &rest]
  (++ [\~ (++ \| [v c]) \~]))

(defn cluster-find [w]
  (-- w (second concluster-pat) #+cljs js-replace #+clj #(++ [\~ (++ \| (rest %1)) \~])))

(defn divide-cluster [w]
  (str/split w #"~"))

(defn vow-clusters-sep [word]
  (-- word vowcluster-pat #(do  (++ [%1 \-]))))

(defn syll-s [models w]
  (let [phonw (reduce #(%2 %1) (.toLowerCase w)  [orpho-single translit])]
  (map 
  #(if 
     (not= (.indexOf % "|") -1) 
     (let [[v c] (str/split % #"\|") comp-m (++ [v c])]
       (if 
         (= 1 (count c))
         (++ [v \- c])
         (reduce 
           (fn [a f] (conj a (++ (f comp-m [v c])))) 
           [] 
           models)))
     %)
  (divide-cluster (cluster-find (vow-clusters-sep phonw))))))

(defn ^:export syll-single-sys [sys word]
  "A test function to call specific models"
	(++ (map #(if (vector? %) (% 0) %) (syll-s [sys] word))))
  
(defn ^:export  syll-single [word]
  (mapv 
    (fn [i] 
      (++ (mapv
            #(if (vector? %) (% i) %) 
            (syll-s [sm1 sm2 sm3 sm4 sm5] word)))) 
    (range 5)))
