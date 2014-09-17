(ns sample_test
  #+clj (:require [clojure.test :as t
                   :refer (is deftest with-test run-tests testing)])
  #+cljs (:require-macros [cemerick.cljs.test
                           :refer (is deftest with-test run-tests testing test-var)])
  #+cljs (:require [syllab][cemerick.cljs.test :as t])
  (:use 
    [test-data :only [orphoep-test]]
    ))

#+cljs (enable-console-print!)
; (println orphoep-test)

(defn every-true [v f]
  (every? true? (map 
                  (fn [[start end]] 
                    (is (= (f start) end))) v)))

; (deftest e-t
;   (testing "The unpaled e"
;        (every-true (orphoep "unpale_test") unpal-e)))
#+cljs
(deftest somewhat-less-wat
  (is (= "{}[]" (+ {} []))))

#+cljs
(deftest javascript-allows-div0
  (is (= js/Infinity (/ 1 0) (/ (int 1) (int 0)))))

(with-test
  (defn pennies->dollar-string
    [pennies]
    {:pre [(integer? pennies)]}
    (str "$" (int (/ pennies 100)) "." (mod pennies 100)))
  (testing "assertions are nice"
    (is (thrown-with-msg? #+cljs js/Error #+clj Error #"integer?"
          (pennies->dollar-string 564.2)))))
