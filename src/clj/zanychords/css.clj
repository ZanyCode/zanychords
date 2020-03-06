(ns zanychords.css
  (:require [garden.def :refer [defstyles]]))

(defstyles screen
  [:body {:color "red"}]
  [:.rbmargin {:margin-right "20px !important" :margin-bottom "10px !important"}]
  [:.floatrightbottom {:position "fixed !important" :right "20px" :bottom "20px"}]
)
