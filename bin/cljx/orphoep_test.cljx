(ns orphoep_test
  (:require [clojure.test :refer :all]
            [clojure.data.csv :as csv]
            [clojure.java.io :as io])
  (:use [orphoep :only [unpal-e hard-pron cluster-assim 
                        end-assim reg-assim-repl reg-pal
                        ogo-ovo chto-trans dash-rep dubcon orpho-single --]]))
(defn testset [name]
  (with-open [in-file (io/reader (io/resource (format "test/orphoep/%s.txt" name)))]
     (csv/read-csv (slurp  in-file))))

(defn every-true [v f]
  (every? true? (map 
                  (fn [[start end]] 
                    (is (= (f start) end))) v)))

(deftest e-t
  (let [d (testset "unpale_test")]
  (testing "The unpaled e"
       (every-true d unpal-e))))

(deftest hp-t
  (let [d (testset "hard_pron_test")]
  (testing "Hard pronunciation"
       (every-true d hard-pron))))

(deftest endassim-t
  (let [d (testset "endassim_test")]
  (testing "Assimilation at the end"
       (every-true d end-assim))))

(deftest regassim-t
  (let [d (testset "reg_assim_test")]
  (testing "Voice assimilation of clusters"
       (every-true d reg-assim-repl))))

(deftest regpal-t
  (let [d (testset "reg_pal_test")]
  (testing "Regressive palatalalization assimilation of clusters"
       (every-true d reg-pal))))

(deftest ogoovo-t
  (let [d (testset "ogo_ovo_test")]
  (testing "Ogo to ovo"
       (every-true d ogo-ovo))))

(deftest chto-t
  (let [d (testset "chto_test")]
  (testing "Chto to Shto replace"
       (every-true d chto-trans))))

(deftest dubcon-t
  (let [d (testset "doubcon_test")]
  (testing "Double consonants algorithm"
       (every-true d dubcon))))

(deftest all-t
  (let [d (testset "all_orpho_test")]
  (testing "Test all together"
       (every-true d orpho-single))))

;(run-tests)
