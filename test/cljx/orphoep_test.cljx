(ns orphoep_test
  #+clj (:require [clojure.test :as t
                   :refer (is deftest with-test run-tests testing)]
            )
  #+cljs (:require-macros [cemerick.cljs.test
                           :refer (is deftest with-test run-tests testing test-var)])
  #+cljs (:require #+cljs [cemerick.cljs.test :as t])
  (:use [test-data :only [orphoep-test]] [orphoep :only [unpal-e hard-pron cluster-assim 
                        end-assim reg-assim-repl reg-pal
                        ogo-ovo chto-trans dash-rep dubcon orpho-single --]]))

(defn every-true [v f]
  (every? true? (map 
                  (fn [[start end]] 
                    (is (= (f start) end))) v)))

(deftest e-t
  (testing "The unpaled e"
       (every-true (orphoep-test "unpale_test") unpal-e)))

(deftest hp-t
  (testing "Hard pronunciation"
       (every-true (orphoep-test "hard_pron_test") hard-pron)))

(deftest endassim-t
  (testing "Assimilation at the end"
       (every-true (orphoep-test "endassim_test") end-assim)))

(deftest regassim-t
  (testing "Voice assimilation of clusters"
       (every-true (orphoep-test "reg_assim_test") reg-assim-repl)))

(deftest regpal-t
  (testing "Regressive palatalalization assimilation of clusters"
       (every-true (orphoep-test "reg_pal_test") reg-pal)))

(deftest ogoovo-t
  (testing "Ogo to ovo"
       (every-true (orphoep-test "ogo_ovo_test") ogo-ovo)))

(deftest chto-t
  (testing "Chto to Shto replace"
       (every-true (orphoep-test "chto_test") chto-trans)))

(deftest dubcon-t
  (testing "Double consonants algorithm"
       (every-true (orphoep-test "doubcon_test") dubcon)))

(deftest all-t
  (testing "Test all together"
       (every-true (orphoep-test "all_orpho_test" ) orpho-single)))
