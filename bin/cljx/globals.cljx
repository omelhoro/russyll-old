(ns globals
  #+cljs (:require  [goog.string :as gstring] [goog.string.format]) 
  (:use [clojure.set :only [union]]))

(def ^:export sformat #+clj format  #+cljs gstring/format)
(def ^:export rus-cons (set "лмнрцкгзвпджчшстбфщ"))
(def ^:export pals-vows  (set "еяюиё"))
(def ^:export hard-vows (set "эыауо"))
(def ^:export rus-sons (set "лмнрЛМНР")) 
(def ^:export all-vows (union pals-vows hard-vows)) 