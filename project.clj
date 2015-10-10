(defproject
  russyll
  "0.1.0-SNAPSHOT"
  :description
  "FIXME: write this!"
  :url
  "http://example.com/FIXME"
  :dependencies
  [[org.clojure/clojure "1.7.0"]
   [org.clojure/data.json "0.2.5"]
   [org.clojure/data.csv "0.1.2"]
   [org.clojure/data.xml "0.0.8"]
   [compojure "1.1.6"]
   [ring/ring-jetty-adapter "1.4.0"]
   [org.clojure/data.zip "0.1.1"]]
  :source-paths
  ["target/classes/clj" "src/misc"]
  :test-paths
  ["test/clj" "target/test-classes/clj"]
  :main
  rooter
  :aot
  :all
  :profiles
  {:dev
   {:dependencies
             [;[org.clojure/clojurescript \"0.0-2268\"]
              ; [domina \"1.0.2\"]
              ;[compojure \"1.1.6\"]
              ],
    :plugins [[com.keminglabs/cljx "0.4.0" :exclusions [org.clojure/clojure]] [lein-ring "0.8.8"]],
    :hooks   [cljx.hooks],
    :ring    {:handler rooter/handler :port 5000}}
   ,
   :cljs
   {:source-paths ["src/misc/"],
    :ring         {:handler rooter :port 5000},
    :dependencies [[org.clojure/clojurescript "1.7.48"] [compojure "1.1.6"] [domina "1.0.2"] [reagent "0.5.1-rc3"]],
    :test-paths    ["test/cljs" "target/test-classes/cljs"],
    :plugins      [[com.cemerick/clojurescript.test "0.3.1"] [lein-cljsbuild "1.1.0"] [lein-ring "0.8.8"]]}}
  :aliases
  {"clj-test"   ["with-profile" "clj" "test"],
   "clj-build"  ["with-profile" "clj" "uberjar"],
   "cljs-build" ["with-profile" "cljs" "cljsbuild" "auto"],
   "cljs-test"  ["with-profile" "cljs" "cljsbuild" "test"],
   "cljs-serve" ["ring" "server-headless"]}
  :cljsbuild
  {:builds
                  [{:id           "syll-app",
                    :source-paths ["src/cljs" "target/classes/cljs"],
                    :compiler
                                  {:output-to     "resources/public/js/russyll.js",
                                   :optimizations :none,
                                   :source-map    "syll-app.js.map"}}
                   ; {:source-paths ["target/test-classes/cljs/"],
                   ;  :compiler {:output-to "target/cljs/simple.js", :optimizations :simple, :pretty-print true}}
                   ],
   :test-commands {"unittests" ["phantomjs" :runner "this.literal_js_was_evaluated=true" "target/cljs/simple.js"]}}
  :cljx
  {:builds
   [{:source-paths ["src/cljx"], :output-path "target/classes/clj", :rules :clj}
    {:source-paths ["src/cljx"], :output-path "target/classes/cljs", :rules :cljs}
    {:source-paths ["test/cljx"], :output-path "target/test-classes/clj", :rules :clj}
    {:source-paths ["test/cljx"], :output-path "target/test-classes/cljs", :rules :cljs}]})
