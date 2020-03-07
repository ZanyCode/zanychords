(ns zanychords.css
  (:require [garden.def :refer [defstyles]]))

(defstyles screen
  [:body {:margin "0px"}]
  [:.rbmargin {:margin-right "20px !important" :margin-bottom "10px !important"}]
  [:.floatrightbottom {:position "fixed !important" :right "20px" :bottom "20px"}]
  [:.fullwidth {:width "100% !important"}]
  [:.margin10 {:margin "10px"}]
  [:.hideoverflow {:overflow "hidden"}]
  )
