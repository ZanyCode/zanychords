(ns zanychords.core
  (:require
   [reagent.core :as reagent]
   [re-frame.core :as re-frame]
   [zanychords.events :as events]
   [zanychords.views :as views]
   [zanychords.config :as config]
   [kee-frame.core :as k]
   ))


(defn dev-setup []
  (when config/debug?
    (println "dev mode")))

(defn ^:export init []
  (k/start!  {:routes         [["/" :main]
                               ["/progressions" :progressions]
                               ["/sessions" :sessions]
                               ["/practice" :practice]]
              :initial-db     {:progressions []}
              :root-component [views/main-panel]
              :debug?         true}))
  (re-frame/dispatch-sync [::events/initialize-db])
