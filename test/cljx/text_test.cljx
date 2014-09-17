(ns text-test
  #+clj (:require [clojure.test :as t
                   :refer (is deftest with-test run-tests testing)])
  #+cljs (:require-macros [cemerick.cljs.test
                           :refer (is deftest with-test run-tests testing test-var)])
  #+cljs (:require [cemerick.cljs.test :as t])
  (:use [text :only [tokenize set-of-vals text-by-model]]
        [orphoep :only [++ --]]
    ))

(def bef "`Игорь.б`ублики`> <!(декабр`я,) !+_)всегд`а!@#$%^&*()_[при`ятно]; пол`учит н`овый автомоб`иль хоть и нанед`елю ун`ового.")
(def aft "*Игорь,.,б*ублики*,>, ,<,!,(,декабр*я,,,), ,!,+,_,),всегд*а,!,@,#,$,%,^,&,*,(,),_,[,при*ятно,],;, ,пол*учит, ,н*овый, ,автомоб*иль, ,хоть, ,и, ,нанед*елю, ,ун*ового,.")
(def aft-sm3 "*и-гоР.б*у-бЛи-Ки> <!(Де-ка-бР*я,) !+_)фСе-гд*а!@#$%^&*()_[пРи-*я-тно]; по-л*у-чит н*о-вый а-фто-мо-Б*иЛ хоТ и на-Не-Д*е-Лю у-н*о-во-во.")
(def aft-set #{"*Игорь" "б*ублики*" "хоть" "декабр*я" "всегд*а" "при*ятно" "пол*учит" "н*овый" "автомоб*иль" "нанед*елю" "ун*ового"})

(deftest find-tokens
(testing "Regex find all tokens"
  (let [res (++ "," (tokenize bef "`"))] 
    (do (println res)
        (is (= res aft))
    (dorun (map #(is (= %1 %2)) res aft))
    ))))

(deftest set-of-text
  (testing "Test if fn builds properly a set of words with more than two vowels"
    (dorun (map #(is (contains? (set-of-vals (tokenize bef "`")) %)) aft-set))))

(deftest text-model
  (testing "Test if text is syllabized according to a model and put together properly"
    (let [t (tokenize bef "`")
          s (set-of-vals t)]
    (dorun (map #(is (= %1 %2)) aft-sm3 (++ (text-by-model t s 2)))))))

#+cljs (enable-console-print!)

(defn every-true [v f]
  (every? true? (map 
                  (fn [[start end]] 
                    (is (= (f start) end))) v)))

