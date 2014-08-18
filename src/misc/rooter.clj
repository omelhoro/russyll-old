(ns rooter
  (:use [compojure.core :only [GET defroutes]])
  (:require [compojure.handler :as handler]
            [compojure.route :as route]
            [ring.util.response :as resp])
 ; (:use [compojure.core :all])
  )
  (defroutes app-routes
  ; to serve document root address
  (GET "/" [] (resp/redirect "index.html"))
  ; to serve static pages saved in resources/public directory
  (route/resources "/")
  ; if page is not found
  (route/not-found "Page not found"))

;; site function creates a handler suitable for a standard website,
;; adding a bunch of standard ring middleware to app-route:
(def handler
  (handler/site app-routes)) 
