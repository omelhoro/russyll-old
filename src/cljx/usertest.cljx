(ns usertest
  (:require [text])
  ;;(:require [usertest-db :refer [test-db]])
  )

(def new-words [
            "сх*одство"
            "горш*ок"
            "родств*о"
            "морск*ой"
            "ст*арший"
            "тр*анспорт"
            "маршр*ут"
            "ц*арство"
            "б*уйство"
            "т*олстый"
            "ск*орбно"
            "г*алстук"
            "св*ойство"
            "ч*истка"
            "р*абство"

            ])

(defn eval-user-input [model-db a dk]
  (let [user (val dk)
        models (model-db (key dk))]
    (reduce-kv
     (fn [a i v] 
       (let [newv (if (= (.toLowerCase v) user) 1 0)]
         (update-in a [i]
                    (fn [oldv] (+ oldv newv)))))
     a
     models)))

(defn calc-stats [stats]
  (let [model-syls (text/set-of-vals (keys stats))
        res (reduce (partial eval-user-input model-syls) [0 0 0 0 0] stats)
        ]
    ;[stats model-syls res] 
    res
    ))

(defn serve-words-rand []
  (let [randi (rand-int (count new-words))]
    (new-words randi)))  
