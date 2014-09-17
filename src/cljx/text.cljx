(ns text
  (:require [clojure.string :as str])
  (:use 
    [globals :only [sformat]]
    [syllab :only [syll-single]]
    [orphoep :only [orpho-single ++ --]]
    [translit :only [translit]]
            ))

(def bef "б`ублики`> <!(декабр`я,) !+_)всегд`а!@#$%^&*()_[при`ятно]; пол`учит н`овый автомоб`иль хоть и нанед`елю ун`ового.")

#+clj (def tok-pat #"(?U)(?<=\W)(?=\w)|(?=\W)")
; #+cljs (def tok-pat  (js/RegExp. "([\u2000-\u206F\u2E00-\u2E7F\\'!\"#\\$%&\\(\\)\\*\\+,\\-\\.\\/:;<=>\\?@\\[\\]\\^_`\\{\\|\\}~ ])"))
#+cljs (def tok-pat #"([\u2000-\u206F\u2E00-\u2E7F\'!\"#\$%&\(\)\*\+,\-\.\/:;<=>\?@\[\]\^_`\{\|\}~ ])")
(defn tokenize [t stress]
  (let [
        temp-stress "å"
        splitted-text (str/split (-- t stress temp-stress) tok-pat)
        ]
   (map 
     #(-- % temp-stress "*") 
     (filter #(not= % "") splitted-text)) ;filter to accustom for JS-regexes with returns also Zero(Epsilon)-character
   )) 
(tokenize bef "`")

(def ru-vows #"(?i)[иеаоуяюыёэ]")
; #+cljs (def ru-vows (js/RegExp. "[иеаоуяюыёэ]" "i"))

(defn set-of-vals [t]
  (into {}
        (map 
          #(vector % (syll-single %)) 
          (filter 
            #(let [ar (take 1 (re-seq ru-vows %))] (do (> (count ar) 0)))
            (set t)))))

(defn text-by-model [t s m]
  (map 
    #(let [map-models (s % %)] (if (vector? map-models) (map-models m) map-models)) 
    t)) 

(defn update-map-r [d i s n]
       (update-in d [s] 
                  (fn [a] 
                    (if 
                      (nil? a)
                      (update-in [0 0 0 0 0] [i] #(+ % n)) 
                      (update-in a [i] #(+ % n))))))

(defn text-stats [t s]
  (let [freq-map (frequencies t)
        ]
    (reduce ; reduce the set
      (fn [d [k v]] 
        (let [freq (freq-map k)]
          (reduce-kv (fn [a i w] ;reduce the value of an entry [five models]
                       (reduce 
                         #(update-map-r %1 i %2 freq) a (str/split w #"-")))
                       d 
                       v)))
          {} s)))
(def test-text ["a" "a" "b" "b"])
(def test-set {"a" ["a-c" "b-e" "a-a"]})
(text-stats test-text test-set)
; (def t (tokenize bef "`"))
; (text-stats t (set-of-vals t))