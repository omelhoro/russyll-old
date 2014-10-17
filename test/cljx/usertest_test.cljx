(ns usertest_test
  #+clj (:require [clojure.test :as t
                   :refer (is deftest with-test run-tests testing)]
                  )
  #+cljs (:require-macros [cemerick.cljs.test
                           :refer (is deftest with-test run-tests testing test-var)])
  #+cljs (:require #+cljs [cemerick.cljs.test :as t])
  (:use 
   [usertest :only [calc-stats]
    ]
   ;; [orphoep :only [unpal-e hard-pron cluster-assim 
   ;; end-assim reg-assim-repl reg-pal
   ;; ogo-ovo chto-trans dash-rep dubcon
   ;; orpho-single --]]
   ))

(def words {"подмоск*овный" "по-дмо-ск*о-вный" ;[0 1 1 0 0]
            "волш*ебный" "вол-ш*еб-ный" ;[0 0 0 1 0] 
            "контр*актный" "кон-тр*акт-ный" ;[0 0 0 1 0]
            "карт*ошка"  "кар-т*ош-ка" ;[0 0 0 0 1]
            "конц*епция" "кон-ц*еп-ци-я" ;[0 0 0 1 0]
            "к*арточка" "к*ар-точ-ка" ;[0 0 0 0 1]
            "комф*ортно" "ком-ф*орт-но" ;[0 0 0 1 0]
            "нарком*анка" "на-рко-м*ан-ка" ;[1 0 0 0 1]
            }
  )
(deftest stats-t
  (testing "The correctness of stats"
    (do (is (= [1 1 1 4 2] (calc-stats words))))
    ))
