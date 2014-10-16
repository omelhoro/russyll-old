(ns analysis
  (:require [clojure.data.xml :refer [parse]]))

(require '[clojure.java.io :as io])
(require '[clojure.xml :as xml])
(require '[clojure.zip :as zip])
(require '[clojure.data.zip.xml :as zip-xml])
(def root (-> "/home/igor/tmp/4652.xhtml" io/file xml/parse zip/xml-zip))

(def fl (parse (java.io.StringReader. (slurp (clojure.java.io/file "/home/igor/tmp/4652.xhtml")))))
(def zfl (zip/xml-zip fl))
(vector (zip-xml/xml-> zfl :body :p :se :w))

(dorun (map #(vector %1) (zip-xml/xml-> root :body :p :se :w)))

(map #(second (:content %1))  (zip-xml/xml1-> root :body :p :se :w))

(def dir (clojure.java.io/file "/home/igor/Data/ruscorpora_1M/texts"))
(def files (file-seq dir))
(def record (parse (java.io.StringReader. (slurp (last files)))))
(:content (first (:content (second (:content record)))))
