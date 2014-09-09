(ns syllab-test
  (:require [clojure.test :refer :all]
            [clojure.data.csv :as csv]
            [clojure.java.io :as io])
  (:use [syllab :only [sm1 sm2 sm3 sm4 sm5 syll-single-sys]]))

(defn testset [name]
  (with-open [in-file (io/reader (io/resource (format "test/syllabs/%s.txt" name)))]
     (csv/read-csv (slurp  in-file))))

(defn every-true [v f]
  (every? true? (map 
                  (fn [[start end]] 
                    (is (= (f start) end))) (filter (fn [[st e]] (not= \% (first st))) v))))

(deftest sm1-t
  (let [d (testset "sm1_test")]
  (testing "The Vinogradov model (SM 1)"
       (every-true d (partial syll-single-sys sm1)))))

(deftest sm2-t
  (let [d (testset "sm2_test")]
  (testing "The Avanesov model (SM 2)"
       (every-true d (partial syll-single-sys sm2)))))

(deftest sm3-t
  (let [d (testset "sm3_test")]
  (testing "The Bondarko model (SM 3)"
       (every-true d (partial syll-single-sys sm3)))))

(deftest sm4-t
  (let [d (testset "sm4_test")]
  (testing "The Kempgen model (SM 4)"
       (every-true d (partial syll-single-sys sm4)))))

(deftest sm5-t
  (let [d (testset "sm5_test")]
  (testing "The SSP model (SM 5)"
       (every-true d (partial syll-single-sys sm5)))))
