(ns zanychords.events
  (:require
   [re-frame.core :as rf]
   [zanychords.db :as db]
   [clojure.string :as str]
   ))

(rf/reg-event-db
 ::initialize-db
 (fn [_ _]
   db/default-db))

(rf/reg-event-db
 ::add-progression
 (fn [db [_ progression]]
   (def progression-updated (update progression :chords #(str/split % #",")))
   (update db :progressions #(conj % progression-updated))))
