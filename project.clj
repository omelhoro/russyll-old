(defproject websyll "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :dependencies [[org.clojure/clojure "1.6.0"]
                 [org.clojure/clojurescript "0.0-2268"]
                 [domina "1.0.2"]
                 [org.clojure/data.json "0.2.5"]
                 [org.clojure/data.csv "0.1.2"]
                 ]

  :plugins [[com.keminglabs/cljx "0.4.0"] [lein-cljsbuild "1.0.4-SNAPSHOT"]]
  ;:source-paths ["src"]
  ;:test-paths ["target/test-classes"]
  :hooks [cljx.hooks]
  :profiles { 
             :clj {
                   :source-paths ["target/classes/clj" "src/clj"]
                   :test-paths ["test/clj" "target/test-classes/clj"]
                     :main main
                     :aot :all
                   }

             :cljs {
                    :source-paths ["src/cljs" "src/cljs"]
                    :test-paths ["test/cljs" "target/test-classes/cljs"]
                    }
             }

  :aliases {  "clj-test" ["with-profile","clj", "test"]
            "clj-build" ["with-profile","clj", "uberjar"]
         }


  :cljsbuild {
    :builds [{:id "syll-app"
              :source-paths ["src/cljs" "target/classes/cljs" ]
              :compiler {
                :output-to "static/syllable/syll-app.js"
                :output-dir "static/syllable/out"
                :optimizations :whitespace
                :source-map "static/syllable/syll-app.js.map"}
              }]}

  :cljx {:builds [{:source-paths ["src/cljx"]
                 :output-path "target/classes/clj"
                 :rules :clj}

                {:source-paths ["src/cljx"]
                 :output-path "target/classes/cljs"
                 :rules :cljs}

                {:source-paths ["test/cljx"]
                   :output-path "target/test-classes/clj"
                   :rules :clj}

                  {:source-paths ["test/cljx"]
                   :output-path "target/test-classes/cljs"
                   :rules :cljs}]}
  
  )
