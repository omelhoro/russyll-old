(ns syllab
  (:require 
           #+clj [clojure.data.json :as json])
  (:use [orphoep :only [++ -- orpho-single]] 
        [globals :only [sformat]]
        [translit :only [translit]]))
#+cljs (enable-console-print!)

#+clj  (def sm4-dict (with-open [in-file (clojure.java.io/reader (clojure.java.io/resource "data/kemp_data_on_rep.json"))]
                      (doall
                        (json/read in-file)))) 
#+cljs (def sm4-dict ; {:a {:b 1}})     
         (let [url "/static/kemp_data_on_rep.json"
           callback (fn [reply] (let [v (js->clj (.getResponseJson (.-target reply)))] ;v is a Clojure data structure
                                    (do (def sm4-dict v) sm4-dict)))]
           (.send goog.net.XhrIo url callback)))

(defn sm1 [vm cm] 
  (if (or (= 1 (count cm)) 
          (or (not= (first vm) \*) 
          (and (= 2 (count cm)) (= (first vm) \*) (contains? (set "рРлЛй") (second cm)))))
    [vm "-" cm]
    [vm (first cm) "-" (++ (rest cm))]))

(defn sm2 [vm cm] 
    (if (= (count cm) 1)
      [vm "-" cm]
      (cond 
        (and (= 2 (count cm)) (= cm "рш")) [vm cm \-]
        (every? #(contains? globals/rus-sons  %) cm) [vm \- cm] 
        (and (contains? globals/rus-sons (first cm))
                        (not (contains? globals/rus-sons (second cm)))) [vm (str (first cm)) \- (++ (rest cm))]
        :else [vm \- cm])))

(defn sm3 [vm cm]
    [vm "-" cm])
 
(defn sm4-check-concl [c o]
  (let [last-let (str (last c))
        prelast (++ (butlast c))
        isreg (= "R" (get (get sm4-dict prelast "") last-let ""))]
    (do  
  (if (or (= (count c) 1) isreg)
    [(++ o) \- (++ c)]
  ( sm4-check-concl (rest c) (conj o (first c)))))))
  
(defn sm4 [vm cm]
    (if (= (count cm) 1) 
      [vm \- cm]
      [vm (++ (sm4-check-concl cm []))]))

(def son-scale
  (apply merge (map-indexed #(into {} (for [c %2] [c %1])) ["птк" "бдг" "чц" "сфшщх" "звж" "мн"  "л" "р" "й"])))

(defn sm5 [vm cm]
  (let [ 
        son-vals (mapv #(get son-scale  %1 %1) (.toLowerCase (++ cm))) 
        min-ix (.indexOf #+cljs (into-array son-vals) #+clj son-vals (apply min son-vals))]
   [vm (++ (take min-ix cm)) \- (++ (drop min-ix cm))]))

(defn cluster-update [models cl]
  (let [[vm  cm] (map ++ (split-with #(or (globals/all-vows %) (= % \*) (= % \-)) cl))]
      (cond  (or (empty? vm) (empty? cm))
         (++ cl)
    :else (if (> (count cm) 1)  (reduce #(conj %1 (++ (%2 vm cm))) [] models) (++ [vm \- cm])))
    ))

(def cluster-update-memo (memoize cluster-update))

(def all-vows-stress (clojure.set/union globals/all-vows #{\*}))
(defn syll-s [models w]
  (let [lw (.toLowerCase  w)
        orpho-word (++ [(reduce #(%2 %1) (.toLowerCase  w) [orpho-single translit]) \N])]
  (reduce 
    (fn [coll c] 
      (let [
            vow-or-stress (all-vows-stress c)
            last-let (last (last coll))
            coll (if (and vow-or-stress (globals/all-vows last-let)) (conj (update-in coll [(dec (count coll))] ++) \-) coll)
            ] 
        (do  (cond 
               (and (globals/all-vows c) (= (last coll) [\*])) (update-in coll  [(dec (count coll))] #(conj % c)) 
               vow-or-stress
               (conj (if (= (last coll) \-) 
                       coll 
                       (update-in coll [(dec (count coll))] #(cluster-update-memo models %)))
                     [c])
               (= (count coll) 0) (conj coll [c])
               (= \N  c) (update-in coll [(dec (count coll))] ++)
               :else (update-in coll [(dec (count coll))] #(conj % c))
                       ))))
          [[]] (seq orpho-word))))


(defn syll-single-sys [sys word]
  "A test function to call specific models"
	(++ (map #(if (vector? %) (% 0) %) (syll-s [sys] word))))
  
(defn ^:export  syll-single [word]
  (map (fn [i] (++ (map #(if (vector? %) (% i) %) 	(syll-s [sm1 sm2 sm3 sm4 sm5] word)))) (range 5)))

(partition-by #(all-vows-stress %) "*обм*орок")
(split-with #(all-vows-stress %) "*обм*орок")
(syll-single-sys sm3 "*обморок")
(syll-single-sys sm3 "воНЗ*иТ")
(syll-single-sys sm3 "пРиехала")
(syll-single "мужск*ая")
(syll-single "никол*аевской")
