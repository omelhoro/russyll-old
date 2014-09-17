#This script should convert the the txt files to a clojure namespace to faciliate testing, especially web-testing
import os
import csv
import json

warning=";This file is machine made\n;It contains data needed for tests and other operations\n;Main purpose: replace ajax calls -> easier testing\n"
fl_header="(ns %s-data #+clj (:require [clojure.data.json :as json]))\n"
parser ="(defn parser [d] #+clj (json/read-str d) #+cljs(js->clj (.parse js/JSON d)))\n"
format=lambda n,r: '(def %s (parser "%s"))\n' %(n, json.dumps(r).replace('"','\\"'))
def parse_dir(p,n):
    def parse_file(fl):
        with open(os.path.join(p,fl)) as f:
            print fl
            d={k:v for k,v in csv.reader(f) if not k.startswith("%")}
        return d
    r={os.path.splitext(fl)[0]: parse_file(fl) for fl in  os.listdir(p)}
    return format(n+"-test",r)

with open("test/test_data.cljx","w+") as f:
    f.write(warning)
    f.write(fl_header %"test")
    f.write(parser)
    path="test/"
    for fl in filter(lambda x: os.path.isdir(os.path.join(path,x)),os.listdir(path)):
        if fl=="text":
            pass
        else:
            f.write(parse_dir(os.path.join(path,fl),fl))

def parse_replacement(r):
    return filter(bool,map(lambda x: x.split("->"),r.split("&")))
with open("data/e_rep.csv") as f:
    d={k:parse_replacement(v) for k,v in csv.reader(f)}


import pandas as pd
mapping={"0":0,"M":"1","R":2}
df=pd.read_json("data/kemp_data_on_rep.json")
rows={k:map(lambda x: mapping.get(x),tuple(v)) for k,v in df.T.iterrows()}
heads={v:i for i,v in enumerate(df.index)}

with open("data/ling_data.cljx","w+") as f:
    f.write(warning)
    f.write(fl_header %"ling")
    f.write(parser)
    f.write(format("e-rep-map",d))
    f.write(format("onset-sm4",rows))
    f.write(format("onset-index",heads))
