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
   ["@material-ui/core/Input" :default Input]
   ["@material-ui/lab/ToggleButton" :default ToggleButton]
   ["@material-ui/core/Grid" :default Grid]
   ["@material-ui/core/IconButton" :default IconButton]
   ["@material-ui/icons/Add" :default AddIcon]
   ["@material-ui/icons/Delete" :default DeleteIcon]
   ["@material-ui/icons/Shuffle" :default ShuffleIcon]
   ["@material-ui/icons/PlayArrow" :default PlayIcon]
   ["@material-ui/icons/Close" :default CloseIcon]
   ["@material-ui/icons/Pause" :default PauseIcon]
   ["@material-ui/icons/Restore" :default FasterIcon]
   ["@material-ui/icons/Update" :default SlowerIcon]
   ["react-select" :default Select]
   [kee-frame.core :as k]))

;There seems to be a bug where using the :> shortcut for react components causes a weird error ("Cannot convert a Symbol value to a string") so we just create our own shortcut with blackjack and... you know.
(def arc r/adapt-react-class)

(def session {:title "Fette Session" :shuffle true :progressions [{:title "p1" :chords ["A1" "B1" "C1"] :shuffle false :reps 1}
                                                                  {:title "p2" :chords ["A2" "B2" "C2"] :shuffle false :reps 1}
                                                                  {:title "p3" :chords ["A3" "B3" "C3"] :shuffle false :reps 1}
                                                                  {:title "p4" :chords ["A4" "B4" "C4"] :shuffle false :reps 1}]})

; Takes a session and returns a lazy sequence containing a
; sliding window of size 3 with a sequence of chords
(defn get-chord-seq [session]
  (->> (repeatedly
         (fn [] (->> session
                     (#(update % :progressions shuffle))
                     :progressions
                     (map #(update % :chords (if (:shuffle %) shuffle identity)))
                     (map #(update % :chords (fn [c] (flatten (repeat (:reps %) c)))))
                     (map #(map (fn [c] [c (:title %)]) (:chords %)))
                     (apply concat))
           ))
       (apply concat)
       (partition 3 1)
       ))

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

(defn add-session-dlg [is-open on-close on-session-added]
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
         [:> Button {:color    "primary"
                     :class    "gridchild"
                     :on-click (fn []
                                 (on-close)
                                 (on-session-added {:title        @session-title
                                                    :shuffle      false
                                                    :progressions (vec (map #(assoc
                                                                               (-> % .-value (js->clj :keywordize-keys true))
                                                                               :shuffle false
                                                                               :reps 1)
                                                                            @selected-progression-titles))})
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

(defn chord-triplet [c1 c2 c3 beat]
  (fn [c1 c2 c3 beat]
    [:> Grid {:container true :spacing 3 :align-items "center " :justify "center" :style {:height "100%" :margin-top "50px" :overflow "hidden"}}
     [:> Grid {:item true :xs 12 :style {:height "20%"}}
      [:> Card {:style {:height "100%" :display "flex" :justify-content "center" :align-items "center":text-align "center" :font-size "7em"} }
       [:span (-> c2 second str)]]]
      [:> Grid {:item true :xs 4 :style {:height "20%"}}
      [:> Card {:style {:height "100%" :display "flex" :justify-content "center" :align-items "center":text-align "center" :font-size "3em"} }
       [:span (-> c3 first str)]]]
     [:> Grid {:item true :xs 4 :style {:height "30%"}}
      [:> Card {:style {:height "100%" :display "flex"
                        :justify-content "center" :align-items "center"
                        :text-align "center" :font-size "5em"
                        :color (if (-> beat (mod 2) (= 0)) "red" "black")} }
       [:span (-> c2 first str)]]]
     [:> Grid {:item true :xs 4 :style {:height "20%"}}
      [:> Card {:style {:height "100%" :display "flex" :justify-content "center" :align-items "center":text-align "center" ::font-size "3em"} }
       [:span (-> c1 first str)]]]]))

(defn pratice-progressions-dialog [chord-seq is-open on-close ]
  (let [beat (r/atom 1)
        bpm (r/atom 120)
        timeout-silent (r/atom true)]
    (fn [chord-seq is-open on-close]
      (if (and is-open @timeout-silent) (do
                    (reset! timeout-silent false)
                    (js/setTimeout (fn []
                                     (reset! timeout-silent true)
                                     (swap! beat inc)
                                     )
                                   (-> 60 (/ @bpm) (* 1000)))))
      (if (not is-open)
        (reset! beat 0))

      (let [[c1 c2 c3] (nth chord-seq (quot @beat 4))]
        [:> Dialog {:full-screen true :open is-open :classes {:paper "dlgpaper"}}
         [:> AppBar
          [:> ToolBar
           [:> IconButton {:on-click on-close}
            [:> CloseIcon]]]]
         [:> Grid {:container true :justify "center" :style {:height "100%"}}
          [:> Grid {:item true :xs 12  :style {:height "80%"}}
           [chord-triplet c1 c2 c3 @beat]]
          [:> Grid {:item true :xs 2}
           [:> Button {:style {:width "100%"} :on-click #(swap! bpm (fn [x] (- x 10)))}
            [:> SlowerIcon]]]
          [:> Grid {:item true :xs 2}
           [:> Input {:type "number" :value @bpm :on-change #(reset! bpm (-> % .-target .-value))}]]
          [:> Grid {:item true :xs 2}
           [:> Button {:style {:width "100%"} :on-click #(swap! bpm (fn [x] (+ x 10)))}
            [:> FasterIcon]]]]]))))

(defn practice []
  (let [sessions (rf/subscribe [::subs/sessions])
        selected-session (r/atom (first @sessions))
        practice-dlg-open (r/atom false)]
    (fn []
      [:div {:class "hideoverflow"}
       [:> Dialog {:full-screen true}]
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
             [:> ToggleButton {:class "gridchild"
                               :value "shuffleProgressions"
                               :selected (:shuffle @selected-session)
                               :on-change (fn [] (swap! selected-session #(update % :shuffle not)))}
              [:> ShuffleIcon]]]
            [:> Grid {:item true :xs 12 :class "gridchild"}

             [:> List
              (for [[i, progression] (map-indexed vector (:progressions @selected-session))]
                [(arc ListItem) {:key i}
                 [(arc ListItemText) {:primary (:title progression) :secondary (str/join "," (:chords progression))}]
                 [(arc Input) {:type :number :placeholder "Repetitions"
                               :on-change #(reset! selected-session
                                                   (assoc-in @selected-session
                                                             [:progressions i :reps] (-> % .-target .-value)))
                               :value (-> @selected-session :progressions (nth i) :reps)}]
                 [(arc ToggleButton) {:value    true
                                      :selected (:shuffle progression)
                                      :on-change #(swap! selected-session
                                                         (fn [s] (update-in s [:progressions i :shuffle] not)))
                                      }
                  [(arc ShuffleIcon)]]
                 ])]
             ]]]]]

        ; Practice progression dialog
        [pratice-progressions-dialog (get-chord-seq @selected-session) @practice-dlg-open #(reset! practice-dlg-open false)]

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
      :practice [practice]]
     ]))
