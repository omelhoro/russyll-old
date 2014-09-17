(ns syllab-test
  #+clj (:require [clojure.test :as t
                   :refer (is deftest with-test run-tests testing)]
            )
  #+cljs (:require-macros [cemerick.cljs.test
                           :refer (is deftest with-test run-tests testing test-var)])
  #+cljs (:require [cemerick.cljs.test :as t])
  (:use [test-data :only [syllabs-test]] [syllab :only [sm1 sm2 sm3 sm4 sm5 syll-single-sys]]))

(defn every-true [v f]
  (every? true? (map 
                  (fn [[start end]] 
                    (is (= (f start) end))) v)))

(deftest sm1-t
  (testing "The Vinogradov model (SM 1)"
       (every-true (syllabs-test "sm1_test") (partial syll-single-sys sm1))))

(deftest sm2-t
  (testing "The Avanesov model (SM 2)"
       (every-true (syllabs-test "sm2_test") (partial syll-single-sys sm2))))

(deftest sm3-t
  (testing "The Bondarko model (SM 3)"
       (every-true (syllabs-test "sm3_test") (partial syll-single-sys sm3))))

(deftest sm4-t
  (testing "The Kempgen model (SM 4)"
       (every-true (syllabs-test "sm4_test") (partial syll-single-sys sm4))))

(deftest sm5-t
  (testing "The SSP model (SM 5)"
       (every-true (syllabs-test "sm5_test") (partial syll-single-sys sm5))))
