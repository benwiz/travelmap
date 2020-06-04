(ns io.benwiz.travelmap
  (:require [oz.core :as oz]))

(defn play-data [& names]
  (for [n names
        i (range 20)]
    {:time i :item n :quantity (+ (Math/pow (* i (count n)) 0.8) (rand-int (count n)))}))

(def line-plot
  {:data     {:values (play-data "monkey" "slipper" "broom")}
   :encoding {:x     {:field "time" :type "quantitative"}
              :y     {:field "quantity" :type "quantitative"}
              :color {:field "item" :type "nominal"}}
   :mark     "line"})

(def world
  {:description "An interactive world map supporting pan and zoom.",
   :autosize "none",
   :width 900,
   :marks
   [{:type "shape",
     :from {:data "graticule"},
     :encode
     {:enter
      {:strokeWidth {:value 1}, :stroke {:value "#ddd"}, :fill {:value nil}}},
     :transform [{:type "geoshape", :projection "projection"}]}
    {:type "shape",
     :from {:data "world"},
     :encode
     {:enter
      {:strokeWidth {:value 0.5},
       :stroke {:value "#bbb"},
       :fill {:value "#e5e8d3"}}},
     :transform [{:type "geoshape", :projection "projection"}]}],
   :$schema "https://vega.github.io/schema/vega/v5.json",
   :projections
   [{:name "projection",
     :type "mercator",
     :scale {:signal "scale"},
     :rotate [{:signal "rotateX"} 0 0],
     :center [0 {:signal "centerY"}],
     :translate [{:signal "tx"} {:signal "ty"}]}],
   :signals
   [{:name "tx", :update "width / 2"}
    {:name "ty", :update "height / 2"}
    {:name "scale",
     :value 150,
     :on
     [{:events {:type "wheel", :consume true},
       :update
       "clamp(scale * pow(1.0005 -event.deltaY * pow(16 event.deltaMode)) 150 3000)"}]}
    {:name "angles",
     :value [0 0],
     :on [{:events "mousedown", :update "[rotateX centerY]"}]}
    {:name "cloned",
     :value nil,
     :on [{:events "mousedown", :update "copy('projection')"}]}
    {:name "start",
     :value nil,
     :on [{:events "mousedown", :update "invert(cloned xy())"}]}
    {:name "drag",
     :value nil,
     :on
     [{:events "[mousedown window:mouseup] > window:mousemove",
       :update "invert(cloned xy())"}]}
    {:name "delta",
     :value nil,
     :on
     [{:events {:signal "drag"},
       :update "[drag[0] - start[0] start[1] - drag[1]]"}]}
    {:name "rotateX",
     :value 0,
     :on [{:events {:signal "delta"}, :update "angles[0] + delta[0]"}]}
    {:name "centerY",
     :value 0,
     :on
     [{:events {:signal "delta"},
       :update "clamp(angles[1] + delta[1] -60 60)"}]}],
   :height 500,
   :data
   [{:name "world",
     :url "data/world-110m.json",
     :format {:type "topojson", :feature "countries"}}
    {:name "graticule", :transform [{:type "graticule", :step [15 15]}]}]})

(comment

  (oz/start-server!)
  (oz/view! line-plot)
  (oz/export! line-plot "index.html")

  (oz/view! world)

  )
