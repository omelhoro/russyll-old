(ns syllab
  (:require 
           #+clj [clojure.data.json :as json])
  (:use [orphoep :only [++ -- orpho-single]] 
        [globals :only [sformat]]
        [translit :only [translit]]))
#+cljs (enable-console-print!)

(def concluster-pat (let 
                      [
                       vow-bef-with (sformat "(\\**[%s])" (++ globals/all-vows)) 
                       non-vows (sformat "([^%s*-]+)"  (++ globals/all-vows))
                       vow-after (sformat "(?=[%s*-])" (++ globals/all-vows))
                       ]
(do   
                        (re-pattern  (++ [vow-bef-with non-vows vow-after])))))

(def vowcluster-pat (let [
                 vow   (sformat "[%s]" (++ globals/all-vows))
                vow-aft (sformat "(?=\\*?[%s])" (++ globals/all-vows))
                ]
                      (do (println (++ [vow vow-aft]))
  (re-pattern (++ [vow vow-aft])))))

;(def vowcluster-pat (re-pattern (sformat "(?<=[%s])\\**[%s]" (++ globals/all-vows) (++ globals/all-vows)))) 
#+clj  (def sm4-dict (with-open [in-file (clojure.java.io/reader (clojure.java.io/resource "data/kemp_data_on_rep.json"))]
                      (doall
                        (json/read in-file)))) 
#+cljs (def sm4-dict ; {:a {:b 1}})     
         (let [url "/static/syllable/kemp_data_on_rep.json"
           callback (fn [reply] (let [v (js->clj (.getResponseJson (.-target reply)))] ;v is a Clojure data structure
                                    (do (def sm4-dict v) sm4-dict)))]
           (.send goog.net.XhrIo url callback)))

(defn sm1 [m] 
  (let [ [comp-m vm & cm] m
                cm (++ cm)]
  (if (or (= 1 (count cm)) 
          (or (not= (first vm) \*) 
          (and (= 2 (count cm)) (= (first vm) \*) (contains? (set "рРлЛй") (second cm)))))
    [vm "-" cm]
    [vm (first cm) "-" (++ (rest cm))])))

(defn sm2 [m] 
  (let [ [comp-m vm & cm]m 
                cm (++ cm)]
    (if (= (count cm) 1)
      [vm "-" cm]
      (cond 
        (and (= 2 (count cm)) (= cm "рш")) [vm cm \-]
        (every? #(contains? globals/rus-sons  %) cm) [vm \- cm] 
        (and (contains? globals/rus-sons (first cm))
                        (not (contains? globals/rus-sons (second cm)))) [vm (str (first cm)) \- (++ (rest cm))]
        :else [vm \- cm]))))

(defn sm3 [m]
  (let [[comp-m vm & cm] m
                cm (++ cm)]
    [vm "-" cm]))
 
(defn sm4-check-concl [c o]
  (let [last-let (str (last c))
        prelast (++ (butlast c))
        isreg (= "R" (get (get sm4-dict prelast "") last-let ""))]
    (do  
  (if (or (= (count c) 1) isreg)
    [(++ o) \- (++ c)]
  ( sm4-check-concl (rest c) (conj o (first c)))))))
  
(defn sm4 [m]
  (let [[comp-m vm & cm]m
                cm (++ cm)]
    (do  
    (if (= (count cm) 1) 
      [vm \- cm]
      [vm (++ (sm4-check-concl cm []))]))))


(def son-scale
  (apply merge (map-indexed #(into {} (for [c %2] [c %1])) ["птк" "бдг" "чц" "сфшщх" "звж" "мн"  "л" "р" "й"])))

(defn sm5 [m]
  (let [ [comp-m vm & cm] m 
        cm (++ cm)
        son-vals (mapv #(get son-scale  %1 %1) (.toLowerCase (++ cm))) 
        min-ix (.indexOf #+cljs (into-array son-vals) #+clj son-vals (apply min son-vals))]
   [vm (++ (take min-ix cm)) \- (++ (drop min-ix cm))]))

(defn cluster-find [mod word]
  (-- word concluster-pat #(do (++  (mod #+clj % #+cljs  [%1 %2 %3])))))

(defn vow-clusters-sep [word]
  (-- word vowcluster-pat #(do  (++ [%1 \-]))))

(defn syll-single-sys [sys word]
  "A test function to call specific models"
  (reduce #(%2 %1) word [orpho-single translit (partial cluster-find sys) vow-clusters-sep]))

(defn ^:export  syll-single [word]
  (map 
    (fn [m] (reduce #(%2 %1) 
                    (.toLowerCase  word) 
                    [orpho-single translit (partial cluster-find m) vow-clusters-sep])) 
       [sm1 sm2 sm3 sm4 sm5]))
;(map syll-single cluster-find-test)

