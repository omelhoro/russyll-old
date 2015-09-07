(ns main
  (:require [clojure.data.json :as json])
  (:use [syllab :only [syll-single]] [orphoep :only [orpho-single]])
  (:gen-class))

(defn syll-json [string]
  (let [d (json/read-str string)
        syll-single (memoize syll-single)]
    (println (json/write-str (into {} (for [k d] [k (syll-single k)]))))))

(defn orpho-json [string]
  (let [d (json/read-str string)]
    (println (json/write-str (into {} (for [k d] [k (orpho-single k)]))))))

(defn -main  []
  (doseq [line (line-seq (java.io.BufferedReader. *in*))]
    (try (syll-json line) (catch Exception e (println (syll-single line))))))
