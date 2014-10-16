(defproject websyll "0.1.0-SNAPSHOT"
  :description "FIXME: write this!"
  :url "http://example.com/FIXME"
  :dependencies [
                 [org.clojure/clojure "1.6.0"]
                 [org.clojure/data.json "0.2.5"]
                 [org.clojure/data.csv "0.1.2"]
                 [org.clojure/data.xml "0.0.8"]
                 [org.clojure/data.zip "0.1.1"]
                 ]
  :source-paths ["target/classes/clj" "src/clj"]
  :test-paths ["test/clj" "target/test-classes/clj"]
  :main main
  :aot :all
  :profiles { 
             :dev {
                   :dependencies [
                                  ;[org.clojure/clojurescript "0.0-2268"]
                                  ; [domina "1.0.2"]
                                  ;[compojure "1.1.6"]
                                  ]
                   :plugins [[com.keminglabs/cljx "0.4.0" :exclusions [org.clojure/clojure]]]
                   :hooks [cljx.hooks]
                   :ring {:handler rooter/handler}
                   }

             :cljs {
                    :source-paths ["src/misc/"]
                    :ring {:handler rooter/handler}
                    :dependencies [
                                   [org.clojure/clojurescript "0.0-2268"]
                                   [compojure "1.1.6"]
                                   [domina "1.0.2"]
                                   ]
                    :test-paths ["test/cljs" "target/test-classes/cljs"]
                    :plugins [ [com.cemerick/clojurescript.test "0.3.1"][lein-cljsbuild "1.0.3"][lein-ring "0.8.8"]]
                    }
             }

  :aliases {  "clj-test" ["with-profile","clj", "test"]
            "clj-build" ["with-profile","clj", "uberjar"]
            "cljs-build" ["with-profile","cljs", "cljsbuild","auto"]
            "cljs-test" ["with-profile","cljs", "cljsbuild","test"]
            "cljs-serve" ["with-profile","cljs", "ring","server"]
            }


  :cljsbuild {
              :builds [{:id "syll-app"
                        :source-paths ["src/cljs" "target/classes/cljs" ]
                        :compiler {
                                   :output-to "syll-app.js"
                                   :output-dir "static/syllable/out"
                                   :optimizations :simple
                                   :source-map "syll-app.js.map"}
                        }
                       {:source-paths ["target/test-classes/cljs/"]
                        :compiler {:output-to "target/cljs/simple.js"
                                   :optimizations :simple
                                   :pretty-print true}}
                       ]

              :test-commands {"unittests" ["phantomjs" :runner
                                           "this.literal_js_was_evaluated=true"
                                           "target/cljs/simple.js"
                                           ]
                              }
              }


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
