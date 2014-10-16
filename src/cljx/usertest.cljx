(ns usertest
  (:require [text])
  ;;(:require [usertest-db :refer [test-db]])
  )

(def stack-word)
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

(def stack-of-words)
(def stats {})

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

(defn calc-stats []
  (let [model-syls (text/set-of-vals (keys stats))
        res (reduce (partial eval-user-input model-syls) [0 0 0 0 0] stats)
        ]
    ;[stats model-syls res] 
    res
    ))

(defn serve-words [inp]
  (if (= inp "") 
    (do
      (def stack-word (first stack-of-words))
      (def stack-of-words (rest stack-of-words))
      stack-word)
    (let [w (if (empty? stack-of-words) (calc-stats) (first stack-of-words))]
      (do
        (def stats (assoc stats stack-word inp))
        (def stack-word w)
        (def stack-of-words (rest stack-of-words))
        stack-word))))

(defn setup-usertest [n]
  (do
    (def stack-of-words (take n (shuffle (set new-words))))
    serve-words)) 

(defn setup-inputs [ws]
  (do (def stats ws)))



