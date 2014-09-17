(ns translit
  (:require [globals :as globals])
  (:use [orphoep :only [++ --]] )
  )

#+cljs (enable-console-print!)

(def palat-pat 
  (re-pattern (globals/sformat "[%s](?=\\**[%s])"  (++ (clojure.set/difference globals/rus-cons (set "жцшчщ"))) (++ globals/pals-vows))))

(def j-extract-pat (re-pattern (globals/sformat "([%s])([ъь])([%s])?" (++ globals/rus-cons) (++ globals/all-vows))))
(def j-test ["объявить" "нью" "объем"])

(defn j-extract-fn [m]
  (let [ #+clj [comp cm sg vm] #+cljs [cm sg vm] m
        j (if (nil? vm) "" "й")]
    (do 
    (cond (and (= (count m) 2) (= \ь (last m))) (.toUpperCase (first m))
          (= sg "ь") (++ [(.toUpperCase cm) j vm])
      :else (++ [cm j vm])))))
      
(defn j-extract [word]
  (-- word j-extract-pat  #(j-extract-fn %)))
(map j-extract j-test)

(defn palat-extract [word]
  (-- word palat-pat #(.toUpperCase %)))

(defn  ^:export translit [word]
  (reduce #(%2 %1) word [j-extract palat-extract]))
  
