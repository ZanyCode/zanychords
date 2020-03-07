(ns zanychords.events
  (:require
   [re-frame.core :as rf]
   [zanychords.db :as db]
   [clojure.string :as str]
   [akiroz.re-frame.storage :refer [persist-db]]
   ))

(defn reg-event-db-localstorage
  [event-id handler]
  (rf/reg-event-fx
   event-id
   [(persist-db :zanychords :progressions)]
   (fn [{:keys [db]} event-vec]
     {:db (handler db event-vec)})))

(reg-event-db-localstorage
 ::initialize-db
 (fn [db _]
   db))

(reg-event-db-localstorage
 ::add-progression
 (fn [db [_ progression]]
   (def progression-updated (update progression :chords #(str/split % #",")))
   (update db :progressions #(conj % progression-updated))))

(reg-event-db-localstorage
 ::delete-progression
 (fn [db [_ title]]   
   (update db :progressions #(filter (fn [p] (not= (:title p) title)) %))))
