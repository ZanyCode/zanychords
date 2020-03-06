(ns zanychords.views
  (:require
   [re-frame.core :as rf]
   [reagent.core :as r]
   [zanychords.subs :as subs]
   [zanychords.events :as events]
   ["@material-ui/core/AppBar" :default AppBar]
   ["@material-ui/core/Tabs" :default Tabs]
   ["@material-ui/core/Tab" :default Tab]
   ["@material-ui/core/Fab" :default Fab]
   ["@material-ui/core/Dialog" :default Dialog]
   ["@material-ui/core/DialogTitle" :default DialogTitle]
   ["@material-ui/core/List" :default List]
   ["@material-ui/core/ListItem" :default ListItem]
   ["@material-ui/core/Paper" :default Paper]
   ["@material-ui/core/Card" :default Card]
   ["@material-ui/core/TextField" :default TextField]
   ["@material-ui/core/Button" :default Button]
   ["@material-ui/core/Grid" :default Grid]
   ["@material-ui/icons/Add" :default AddIcon]
   [kee-frame.core :as k]))

(defn progressions []
  (let [
        add-dlg-open (r/atom false)
        progression (r/atom {:title "" :chords ""})]
    (fn []
      [:div 
       [:> List
        [:> ListItem [:> Card "yoo"]]
      
        ]
       [:> Dialog {:open @add-dlg-open :on-close #(reset! add-dlg-open false) :full-width true}
        [:> DialogTitle "Add Progression"]
        [:> TextField {:label "Progression Title" :style {:margin-left "20px" :margin-right "20px"} 
                       :on-change #(swap! progression assoc :title (-> % .-target .-value))
                       :value (:title @progression)}]
        
        [:> TextField {:label "Progression Content (Comma Separated)" :style {:margin-left "20px" :margin-right "20px"}
                       :on-change #(swap! progression assoc :chords (-> % .-target .-value))
                       :value (:chords @progression)}]
        
        [:> Grid {:container true :direction "row" :justify "flex-end" :align-items "center"}
         [:> Button {:color "primary" :class "rbmargin"
                     :on-click (fn []
                                 (reset! add-dlg-open false)
                                 (rf/dispatch [::events/add-progression @progression])
                                 (reset! progression {:title "" :chords ""}))}
          "OK"]
         
         
         [:> Button {:color "default" :class "rbmargin" 
                     :on-click (fn []
                                 (reset! add-dlg-open false)
                                 (reset! progression {:title "" :chords ""}))}
          "Cancel"]]]
       
       [:> Fab {:color :primary :on-click #(reset! add-dlg-open true) :class "floatrightbottom"}
        [:> AddIcon]]])))

(defn main-panel []
  (let [name (rf/subscribe [::subs/name])]
    [:div
     [:> AppBar {:position "static"}
      [:> Tabs {:value
                (k/switch-route (fn [route] (-> route :data :name))
                                nil 0 :main 0 :progressions 0 :sessions 1 :practice 2)}

       [:> Tab {:label "Progressions" :component :a :href "progressions"}]
       [:> Tab {:label "Sessions" :component :a :href "sessions"}]
       [:> Tab {:label "Practice" :component :a :href "practice"}]]]

     [k/switch-route (fn [route] (-> route :data :name))
      nil [:span "INVALID ROUTE"]
      :main [:span "main"]
      :progressions [progressions]
      :sessions [:span "Sessions"]
      :practice [:span "Practice"]]]))
