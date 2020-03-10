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
  (let [base-url (if config/debug? "/" "/zanychords/")]
    (k/start!  {:routes         
                [[base-url :progressions]
                 [(str base-url "sessions") :sessions]
                 [(str base-url "practice") :practice]]
                :initial-db     {:progressions [] :sessions []}
                :root-component [views/main-panel]
                :debug?         true})))
  (re-frame/dispatch-sync [::events/initialize-db])
