(ns zanychords.views
  (:require
   [re-frame.core :as rf]
   [reagent.core :as r]
   [zanychords.subs :as subs]
   [zanychords.events :as events]
   [clojure.string :as str]
   ["@material-ui/core/AppBar" :default AppBar]
   ["@material-ui/core/ToolBar" :default ToolBar]
   ["@material-ui/core/Tabs" :default Tabs]
   ["@material-ui/core/Tab" :default Tab]
   ["@material-ui/core/Fab" :default Fab]
   ["@material-ui/core/Dialog" :default Dialog]
   ["@material-ui/core/DialogTitle" :default DialogTitle]
   ["@material-ui/core/List" :default List]
   ["@material-ui/core/ListItem" :default ListItem]
   ["@material-ui/core/ListItemText" :default ListItemText]
   ["@material-ui/core/Divider" :default Divider]
   ["@material-ui/core/Paper" :default Paper]
   ["@material-ui/core/Card" :default Card]
   ["@material-ui/core/CardContent" :default CardContent]
   ["@material-ui/core/TextField" :default TextField]
   ["@material-ui/core/Button" :default Button]
   ["@material-ui/core/MenuItem" :default MenuItem]
   ["@material-ui/lab/ToggleButton" :default ToggleButton]
   ["@material-ui/core/Grid" :default Grid]
   ["@material-ui/core/IconButton" :default IconButton]
   ["@material-ui/icons/Add" :default AddIcon]
   ["@material-ui/icons/Delete" :default DeleteIcon]
   ["@material-ui/icons/Shuffle" :default ShuffleIcon]
   ["@material-ui/icons/PlayArrow" :default PlayIcon]
   ["@material-ui/icons/Close" :default CloseIcon]
   ["@material-ui/icons/Pause" :default PauseIcon]
   ["react-select" :default Select]
   [kee-frame.core :as k]))

;There seems to be a bug where using the :> shortcut for react components causes a weird error ("Cannot convert a Symbol value to a string") so we just create our own shortcut with blackjack and... you know.
(def arc r/adapt-react-class)

(defn add-progression-dlg [is-open on-close on-progression-added]
  (let [progression (r/atom {:title "" :chords ""})]
    (fn [is-open on-close on-progression-added]
      [:> Dialog {:open is-open :on-close on-close :full-width true}
       [:> DialogTitle "Add Progression"]
       [:> Grid {:container true :spacing 2 :style {:width "100%" :flex-grow 1 :margin "0px"}}
        [:> Grid {:item true :xs 12}
         [:> TextField {:label "Progression Title"
                        :class "gridchild"
                        :on-change #(swap! progression assoc :title (-> % .-target .-value))
                        :value (:title @progression)}]]
        [:> Grid {:item true :xs 12}
         [:> TextField {:label "Chords (Comma Separated)"
                        :class "gridchild"
                        :on-change #(swap! progression assoc :chords (-> % .-target .-value))
                        :value (:chords @progression)}]]
        [:> Grid {:item true :xs 4 :sm 8}]
        [:> Grid {:item true :xs 4 :sm 2}
         [:> Button {:color "primary" :class "gridchild"
                     :on-click (fn []
                                 (on-close)
                                 (on-progression-added @progression)
                                 (reset! progression {:title "" :chords ""}))}
          "OK"]]
        [:> Grid {:item true :xs 4 :sm 2}
         [:> Button {:color "default" :class "gridchild"
                     :on-click (fn []
                                 (on-close)
                                 (reset! progression {:title "" :chords ""}))}
          "Cancel"]]]])))

(defn add-session-dlg [is-open on-close on-progression-added]
  (let [session-title (r/atom "")
        selected-progression-titles (r/atom [])
        progressions (rf/subscribe [::subs/progressions])]

    (fn [is-open on-close on-session-added]
      [:> Dialog {:open is-open :on-close on-close :full-width true}
       [:> DialogTitle "Add Session"]
       [:> Grid {:container true :spacing 2 :style {:width "100%" :flex-grow 1 :margin "0px"}}
        [:> Grid {:item true :xs 12}
         [:> TextField {:label "Session Title"
                        :class "gridchild"
                        :on-change #(reset! session-title (-> % .-target .-value))
                        :value @session-title}]]
        [:> Grid {:item true :xs 12}
         [:> Select {:menu-portal-target (.-body js/document)
                     :menu-position "fixed"
                     :menu-placement "auto"
                     :is-multi true
                     :class "gridchild"
                     :placeholder "Select Progressions"
                     :value @selected-progression-titles
                     :on-change #(reset! selected-progression-titles %)
                     :styles {:menu-portal #(-> % js->clj (assoc :zIndex 9999) clj->js)}
                     :options (map (fn [p] {:label (:title p) :value p}) @progressions)}]]

        [:> Grid {:item true :xs 4 :sm 8}]
        [:> Grid {:item true :xs 4 :sm 2}
         [:> Button {:color "primary"
                     :class "gridchild"
                     :on-click (fn []
                                 (on-close)
                                 (on-progression-added {:title @session-title
                                                        :progressions (map #(-> % .-value (js->clj :keywordize-keys true)) @selected-progression-titles)})
                                 (reset! selected-progression-titles [])
                                 (reset! session-title ""))}
          "OK"]]

        [:> Grid {:item true :xs 4 :sm 2}
         [:> Button {:color "default"
                     :class "gridchild"
                     :on-click (fn []
                                 (on-close)
                                 (reset! selected-progression-titles [])
                                 (reset! session-title ""))}
          "Cancel"]]]])))

(defn progressions []
  (let [add-dlg-open (r/atom false)
        progressions (rf/subscribe [::subs/progressions])]
    (fn []
      [:div {:class "hideoverflow"}
       ; Main list with existing progressions
       [:> Grid {:container true :spacing 3 :justify "center"}
        [:> Grid {:item true :xs 12 :sm 6}
         [:> Card {:class "margin10"}
          [:> CardContent
           [:> List
            (for [[i, progression] (map-indexed vector @progressions)]
              [(arc ListItem) {:key i}
               [(arc ListItemText) {:primary (:title progression) :secondary (str/join "," (:chords progression))}]
               [(arc Button) {:on-click #(rf/dispatch [::events/delete-progression (:title progression)])} [(arc DeleteIcon)]]])]]]]]

       ; Floating Action Button to add new progression
       [:> Fab {:color :primary :on-click #(reset! add-dlg-open true) :class "floatrightbottom"}
        [:> AddIcon]]

       ; Dialog for adding new Progression
       [add-progression-dlg @add-dlg-open
        #(reset! add-dlg-open false)
        #(rf/dispatch [::events/add-progression %])]])))

(defn sesssions []
  (let [add-dlg-open (r/atom false)
        sessions (rf/subscribe [::subs/sessions])]
    (fn []
      [:div {:class "hideoverflow"}
       ; Main list with existing session
       [:> Grid {:container true :spacing 3 :justify "center"}
        [:> Grid {:item true :xs 12 :sm 6}
         [:> Card {:class "margin10"}
          [:> CardContent
           [:> List
            (for [[i, session] (map-indexed vector @sessions)]
              [(arc ListItem) {:key i}
               [(arc ListItemText) {:primary (:title session)
                                    :secondary (as-> session x
                                                 (:progressions x)
                                                 (map #(:title %) x)
                                                 (str/join "," x))}]

               [(arc Button) {:on-click #(rf/dispatch [::events/delete-session (:title session)])} [(arc DeleteIcon)]]])]]]]]

       ; Floating Action Button to add new progression
       [:> Fab {:color :primary :on-click #(reset! add-dlg-open true) :class "floatrightbottom"}
        [:> AddIcon]]

       ; Dialog for adding new Progression
       [add-session-dlg @add-dlg-open
        #(reset! add-dlg-open false)
        #(rf/dispatch [::events/add-session %])]])))

(defn pratice-progressions-dialog [is-open on-close]
  (fn [is-open on-close]
    [:> Dialog {:full-screen true :open is-open :classes {:paper "dlgpaper"}}
     [:> AppBar
      [:> ToolBar
       [:> IconButton {:on-click on-close}
        [:> CloseIcon]]]]]))

(defn practice []
  (let [sessions (rf/subscribe [::subs/sessions])
        selected-session (r/atom (first @sessions))
        practice-dlg-open (r/atom false)]
    (fn []
      [:div {:class "hideoverflow"}
       [:> Grid {:container true :spacing 3 :justify "center"}
        [:> Grid {:item true :xs 12 :sm 6}
         [:> Card {:class "margin10"}
          [:> CardContent
           [:> Grid {:container true :class "gridchild" :spacing 3}
            [:> Grid {:item true :class "gridchild" :xs 10}
             [:> Select {:options (map (fn [s] {:label (:title s) :value s}) @sessions)
                         :menu-portal-target (.-body js/document)
                         :menu-position "fixed"
                         :menu-placement "auto"
                         :value {:label (:title @selected-session) :value @selected-session}
                         :on-change #(reset! selected-session (-> % .-value (js->clj :keywordize-keys true)))}]]
            [:> Grid {:item true :class "gridchild" :xs 2}
             [:> ToggleButton {:class "gridchild"}
              [:> ShuffleIcon]]]
            [:> Grid {:item true :xs 12 :class "gridchild"}
             [:> List
              (for [[i, progression] (map-indexed vector (:progressions @selected-session))]
                [(arc ListItem) {:key i}
                 [(arc ListItemText) {:primary (:title progression) :secondary (str/join "," (:chords progression))}]
                 [(arc ToggleButton)
                  [(arc ShuffleIcon)]]])]]]]]]

        ; Practice progression dialog
        [pratice-progressions-dialog @practice-dlg-open #(reset! practice-dlg-open false)]

        ; Floating Action Button to start practice
        [:> Fab {:color :primary :class "floatrightbottom" :on-click #(reset! practice-dlg-open true)}
         [:> PlayIcon]]]])))

(defn main-panel []
  (let []
    [:div
     [:> AppBar {:position "static"}
      [:> Tabs {:value
                (k/switch-route (fn [route] (-> route :data :name))
                                nil 0 :main 0 :progressions 0 :sessions 1 :practice 2)
                :centered true}

       [:> Tab {:label "Progressions" :component :a :href (k/path-for [:progressions])}]
       [:> Tab {:label "Sessions" :component :a :href (k/path-for [:sessions])}]
       [:> Tab {:label "Practice" :component :a :href (k/path-for [:practice])}]]]

     [k/switch-route (fn [route] (-> route :data :name))
      nil [:span "INVALID ROUTE"]
      :main [:span "main"]
      :progressions [progressions]
      :sessions [sesssions]
      :practice [practice]]]))
