goog.provide('day8.re_frame_10x.subs');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core');
goog.require('day8.re_frame_10x.metamorphic');
goog.require('day8.re_frame_10x.utils.utils');
goog.require('clojure.string');
goog.require('cljs.spec.alpha');
goog.require('zprint.core');
var G__77180_77711 = new cljs.core.Keyword("settings","root","settings/root",-1329120290);
var G__77181_77712 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"settings","settings",1556144875));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__77180_77711,G__77181_77712) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77180_77711,G__77181_77712));
var G__77182_77716 = new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808);
var G__77183_77717 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77184_77718 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__77185_77719 = (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"panel-width%","panel-width%",-110515341));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77182_77716,G__77183_77717,G__77184_77718,G__77185_77719) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77182_77716,G__77183_77717,G__77184_77718,G__77185_77719));
var G__77188_77720 = new cljs.core.Keyword("settings","panel-width%-rounded","settings/panel-width%-rounded",1475049191);
var G__77189_77721 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77190_77722 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","panel-width%","settings/panel-width%",-1897072808)], null);
var G__77191_77723 = (function (panel_width_PERCENT_,p__77193){
var vec__77194 = p__77193;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77194,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77194,(1),null);
return (((function (){var G__77197 = ((panel_width_PERCENT_ * (100)) / n);
return Math.ceil(G__77197);
})() * n) / 100.0);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77188_77720,G__77189_77721,G__77190_77722,G__77191_77723) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77188_77720,G__77189_77721,G__77190_77722,G__77191_77723));
var G__77198_77724 = new cljs.core.Keyword("settings","window-width","settings/window-width",640332180);
var G__77199_77725 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77200_77726 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__77201_77727 = (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"window-width","window-width",2057825599));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77198_77724,G__77199_77725,G__77200_77726,G__77201_77727) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77198_77724,G__77199_77725,G__77200_77726,G__77201_77727));
var G__77203_77728 = new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629);
var G__77204_77729 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77205_77730 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width","settings/window-width",640332180)], null);
var G__77206_77731 = (function (width,p__77209){
var vec__77210 = p__77209;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77210,(0),null);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77210,(1),null);
return ((function (){var G__77213 = (width / n);
return Math.ceil(G__77213);
})() * n);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77203_77728,G__77204_77729,G__77205_77730,G__77206_77731) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77203_77728,G__77204_77729,G__77205_77730,G__77206_77731));
var G__77214_77732 = new cljs.core.Keyword("settings","show-panel?","settings/show-panel?",-194286945);
var G__77215_77733 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77216_77734 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__77217_77735 = (function (settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"show-panel?","show-panel?",1475128892));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77214_77732,G__77215_77733,G__77216_77734,G__77217_77735) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77214_77732,G__77215_77733,G__77216_77734,G__77217_77735));
var G__77218_77736 = new cljs.core.Keyword("settings","selected-tab","settings/selected-tab",-124010089);
var G__77219_77737 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77220_77738 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__77221_77739 = (function (settings,_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"showing-settings?","showing-settings?",-140540878).cljs$core$IFn$_invoke$arity$1(settings))){
return new cljs.core.Keyword(null,"settings","settings",1556144875);
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(settings,new cljs.core.Keyword(null,"selected-tab","selected-tab",-1558510156));
}
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77218_77736,G__77219_77737,G__77220_77738,G__77221_77739) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77218_77736,G__77219_77737,G__77220_77738,G__77221_77739));
var G__77222_77740 = new cljs.core.Keyword("settings","number-of-retained-epochs","settings/number-of-retained-epochs",347300150);
var G__77223_77741 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77224_77742 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__77225_77743 = (function (settings){
return new cljs.core.Keyword(null,"number-of-epochs","number-of-epochs",57769252).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77222_77740,G__77223_77741,G__77224_77742,G__77225_77743) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77222_77740,G__77223_77741,G__77224_77742,G__77225_77743));
var G__77228_77744 = new cljs.core.Keyword("settings","ignored-events","settings/ignored-events",1377799632);
var G__77229_77745 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77230_77746 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__77231_77747 = (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"ignored-events","ignored-events",1738756589).cljs$core$IFn$_invoke$arity$1(settings)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77228_77744,G__77229_77745,G__77230_77746,G__77231_77747) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77228_77744,G__77229_77745,G__77230_77746,G__77231_77747));
var G__77234_77748 = new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350);
var G__77235_77749 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77236_77750 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__77237_77751 = (function (settings){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"sort","sort",953465918),cljs.core.vals(new cljs.core.Keyword(null,"filtered-view-trace","filtered-view-trace",-901876599).cljs$core$IFn$_invoke$arity$1(settings)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77234_77748,G__77235_77749,G__77236_77750,G__77237_77751) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77234_77748,G__77235_77749,G__77236_77750,G__77237_77751));
var G__77240_77752 = new cljs.core.Keyword("settings","low-level-trace","settings/low-level-trace",191054289);
var G__77241_77753 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77242_77754 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__77243_77755 = (function (settings){
return new cljs.core.Keyword(null,"low-level-trace","low-level-trace",638447092).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77240_77752,G__77241_77753,G__77242_77754,G__77243_77755) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77240_77752,G__77241_77753,G__77242_77754,G__77243_77755));
var G__77245_77756 = new cljs.core.Keyword("settings","debug?","settings/debug?",-128490920);
var G__77246_77757 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77247_77758 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__77248_77759 = (function (settings){
return new cljs.core.Keyword(null,"debug?","debug?",-1831756173).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77245_77756,G__77246_77757,G__77247_77758,G__77248_77759) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77245_77756,G__77246_77757,G__77247_77758,G__77248_77759));
var G__77249_77760 = new cljs.core.Keyword("settings","app-db-follows-events?","settings/app-db-follows-events?",-115495889);
var G__77250_77761 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77251_77762 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","root","settings/root",-1329120290)], null);
var G__77252_77763 = (function (settings){
return new cljs.core.Keyword(null,"app-db-follows-events?","app-db-follows-events?",-1566738462).cljs$core$IFn$_invoke$arity$1(settings);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77249_77760,G__77250_77761,G__77251_77762,G__77252_77763) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77249_77760,G__77250_77761,G__77251_77762,G__77252_77763));
var G__77253_77764 = new cljs.core.Keyword("app-db","root","app-db/root",-1721368731);
var G__77254_77765 = (function (db,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.Keyword(null,"app-db","app-db",865606302));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__77253_77764,G__77254_77765) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77253_77764,G__77254_77765));
var G__77255_77766 = new cljs.core.Keyword("app-db","current-epoch-app-db-after","app-db/current-epoch-app-db-after",-1412128095);
var G__77256_77767 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77257_77768 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__77258_77769 = (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-after","app-db-after",1477492964)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77255_77766,G__77256_77767,G__77257_77768,G__77258_77769) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77255_77766,G__77256_77767,G__77257_77768,G__77258_77769));
var G__77261_77770 = new cljs.core.Keyword("app-db","current-epoch-app-db-before","app-db/current-epoch-app-db-before",-615465288);
var G__77262_77771 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77263_77772 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__77264_77773 = (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"app-db-before","app-db-before",-1442902645)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77261_77770,G__77262_77771,G__77263_77772,G__77264_77773) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77261_77770,G__77262_77771,G__77263_77772,G__77264_77773));
var G__77269_77774 = new cljs.core.Keyword("app-db","paths","app-db/paths",-1600032730);
var G__77270_77775 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77271_77776 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__77272_77777 = (function (app_db_settings,_){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__77268_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.val(p1__77268_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(p1__77268_SHARP_));
}),cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"paths","paths",-1807389588)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77269_77774,G__77270_77775,G__77271_77776,G__77272_77777) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77269_77774,G__77270_77775,G__77271_77776,G__77272_77777));
var G__77273_77778 = new cljs.core.Keyword("app-db","search-string","app-db/search-string",939397656);
var G__77274_77779 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77275_77780 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__77276_77781 = (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"search-string","search-string",68818394));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77273_77778,G__77274_77779,G__77275_77780,G__77276_77781) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77273_77778,G__77274_77779,G__77275_77780,G__77276_77781));
var G__77279_77782 = new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845);
var G__77280_77783 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77281_77784 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__77282_77785 = (function (app_db_settings,_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app_db_settings,new cljs.core.Keyword(null,"json-ml-expansions","json-ml-expansions",1112306261));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77279_77782,G__77280_77783,G__77281_77784,G__77282_77785) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77279_77782,G__77280_77783,G__77281_77784,G__77282_77785));
var G__77283_77786 = new cljs.core.Keyword("app-db","node-expanded?","app-db/node-expanded?",-1032853540);
var G__77284_77787 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77285_77788 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","expansions","app-db/expansions",-1814314845)], null);
var G__77286_77789 = (function (expansions,p__77288){
var vec__77290 = p__77288;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77290,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77290,(1),null);
return cljs.core.contains_QMARK_(expansions,path);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77283_77786,G__77284_77787,G__77285_77788,G__77286_77789) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77283_77786,G__77284_77787,G__77285_77788,G__77286_77789));
var G__77293_77790 = new cljs.core.Keyword("app-db","reagent-id","app-db/reagent-id",916858371);
var G__77294_77791 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77295_77792 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app-db","root","app-db/root",-1721368731)], null);
var G__77296_77793 = (function (root,_){
return new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415).cljs$core$IFn$_invoke$arity$1(root);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77293_77790,G__77294_77791,G__77295_77792,G__77296_77793) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77293_77790,G__77294_77791,G__77295_77792,G__77296_77793));
var G__77297_77794 = new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946);
var G__77298_77795 = (function (db,_){
return new cljs.core.Keyword(null,"traces","traces",-1301138004).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__77297_77794,G__77298_77795) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77297_77794,G__77298_77795));
var G__77299_77796 = new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647);
var G__77300_77797 = (function (db,_){
return new cljs.core.Keyword(null,"trace-panel","trace-panel",-645338665).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__77299_77796,G__77300_77797) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77299_77796,G__77300_77797));
var G__77301_77798 = new cljs.core.Keyword("traces","filter-items","traces/filter-items",977390347);
var G__77302_77799 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"filter-items","filter-items",232493909)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__77301_77798,G__77302_77799) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77301_77798,G__77302_77799));
var G__77303_77800 = new cljs.core.Keyword("traces","expansions","traces/expansions",1935277191);
var G__77304_77801 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"expansions","expansions",533713877)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__77303_77800,G__77304_77801) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77303_77800,G__77304_77801));
var G__77305_77802 = new cljs.core.Keyword("traces","categories","traces/categories",-821318016);
var G__77306_77803 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"traces","traces",-1301138004),new cljs.core.Keyword(null,"categories","categories",178386610)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__77305_77802,G__77306_77803) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77305_77802,G__77306_77803));
var G__77307_77804 = new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523);
var G__77308_77805 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77309_77806 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","trace-root","traces/trace-root",-1794329946)], null);
var G__77310_77807 = (function (traces,_){
return new cljs.core.Keyword(null,"all-traces","all-traces",-1494241641).cljs$core$IFn$_invoke$arity$1(traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77307_77804,G__77308_77805,G__77309_77806,G__77310_77807) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77307_77804,G__77308_77805,G__77309_77806,G__77310_77807));
var G__77311_77808 = new cljs.core.Keyword("traces","number-of-traces","traces/number-of-traces",-1195045241);
var G__77312_77809 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77313_77810 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__77314_77811 = (function (traces,_){
return cljs.core.count(traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77311_77808,G__77312_77809,G__77313_77810,G__77314_77811) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77311_77808,G__77312_77809,G__77313_77810,G__77314_77811));
var G__77315_77812 = new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769);
var G__77316_77813 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77317_77814 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__77318_77815 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77319_77816 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887)], null);
var G__77320_77817 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77321_77818 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579)], null);
var G__77322_77819 = (function (p__77324,_){
var vec__77325 = p__77324;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77325,(0),null);
var beginning = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77325,(1),null);
var ending = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77325,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.utils.utils.id_between_xf(beginning,ending),traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$8(G__77315_77812,G__77316_77813,G__77317_77814,G__77318_77815,G__77319_77816,G__77320_77817,G__77321_77818,G__77322_77819) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77315_77812,G__77316_77813,G__77317_77814,G__77318_77815,G__77319_77816,G__77320_77817,G__77321_77818,G__77322_77819));
day8.re_frame_10x.subs.filter_ignored_views = (function day8$re_frame_10x$subs$filter_ignored_views(p__77329,_){
var vec__77330 = p__77329;
var traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77330,(0),null);
var filtered_views = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77330,(1),null);
var munged_ns = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.munge,new cljs.core.Keyword(null,"ns-str","ns-str",-2062616499)),filtered_views));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (trace){
return ((day8.re_frame_10x.metamorphic.render_QMARK_(trace)) && (cljs.core.contains_QMARK_(munged_ns,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),(0),clojure.string.last_index_of.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"operation","operation",-1267664310).cljs$core$IFn$_invoke$arity$1(trace),".")))));
})),traces);
});
var G__77334_77820 = new cljs.core.Keyword("traces","current-event-visible-traces","traces/current-event-visible-traces",-133224585);
var G__77335_77821 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77336_77822 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__77337_77823 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77338_77824 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__77339_77825 = day8.re_frame_10x.subs.filter_ignored_views;
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__77334_77820,G__77335_77821,G__77336_77822,G__77337_77823,G__77338_77824,G__77339_77825) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77334_77820,G__77335_77821,G__77336_77822,G__77337_77823,G__77338_77824,G__77339_77825));
var G__77340_77826 = new cljs.core.Keyword("traces","all-visible-traces","traces/all-visible-traces",-1694272071);
var G__77341_77827 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77342_77828 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","all-traces","traces/all-traces",-755374523)], null);
var G__77343_77829 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77344_77830 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","filtered-view-trace","settings/filtered-view-trace",818098350)], null);
var G__77345_77831 = day8.re_frame_10x.subs.filter_ignored_views;
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__77340_77826,G__77341_77827,G__77342_77828,G__77343_77829,G__77344_77830,G__77345_77831) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77340_77826,G__77341_77827,G__77342_77828,G__77343_77829,G__77344_77830,G__77345_77831));
var G__77346_77832 = new cljs.core.Keyword("trace-panel","show-epoch-traces?","trace-panel/show-epoch-traces?",-826345951);
var G__77347_77833 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77348_77834 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("trace-panel","root","trace-panel/root",974242647)], null);
var G__77349_77835 = (function (trace_root){
return new cljs.core.Keyword(null,"show-epoch-traces?","show-epoch-traces?",-2096255323).cljs$core$IFn$_invoke$arity$1(trace_root);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77346_77832,G__77347_77833,G__77348_77834,G__77349_77835) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77346_77832,G__77347_77833,G__77348_77834,G__77349_77835));
var G__77350_77836 = new cljs.core.Keyword("global","unloading?","global/unloading?",-351325001);
var G__77351_77837 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"global","global",93595047),new cljs.core.Keyword(null,"unloading?","unloading?",621163286)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__77350_77836,G__77351_77837) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77350_77836,G__77351_77837));
var G__77352_77838 = new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517);
var G__77353_77839 = (function (db,_){
return new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__77352_77838,G__77353_77839) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77352_77838,G__77353_77839));
var G__77354_77840 = new cljs.core.Keyword("snapshot","snapshot-ready?","snapshot/snapshot-ready?",-1152726072);
var G__77355_77841 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77356_77842 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("snapshot","snapshot-root","snapshot/snapshot-root",466086517)], null);
var G__77357_77843 = (function (snapshot,_){
return cljs.core.contains_QMARK_(snapshot,new cljs.core.Keyword(null,"current-snapshot","current-snapshot",1368356222));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77354_77840,G__77355_77841,G__77356_77842,G__77357_77843) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77354_77840,G__77355_77841,G__77356_77842,G__77357_77843));
var G__77358_77844 = new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597);
var G__77359_77845 = (function (db,_){
return new cljs.core.Keyword(null,"epochs","epochs",1796936425).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__77358_77844,G__77359_77845) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77358_77844,G__77359_77845));
var G__77360_77846 = new cljs.core.Keyword("epochs","all-events-by-id","epochs/all-events-by-id",-1225664812);
var G__77361_77847 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77362_77848 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__77363_77849 = (function (epochs,_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(cljs.core.first,cljs.core._GT_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.key,cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.Keyword(null,"tags","tags",1771418977),day8.re_frame_10x.metamorphic.matched_event,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"match-info","match-info",666319879),cljs.core.val], 0))),new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77360_77846,G__77361_77847,G__77362_77848,G__77363_77849) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77360_77846,G__77361_77847,G__77362_77848,G__77363_77849));
var G__77364_77850 = new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281);
var G__77365_77851 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77366_77852 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__77367_77853 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77368_77854 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__77369_77855 = (function (p__77370,_){
var vec__77371 = p__77370;
var epochs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77371,(0),null);
var match_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77371,(1),null);
var current_id = new cljs.core.Keyword(null,"current-epoch-id","current-epoch-id",-1357591568).cljs$core$IFn$_invoke$arity$1(epochs);
var match = (((current_id == null))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id < cljs.core.first(match_ids)))?cljs.core.first(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):(((current_id > cljs.core.last(match_ids)))?cljs.core.last(new cljs.core.Keyword(null,"matches","matches",635497998).cljs$core$IFn$_invoke$arity$1(epochs)):cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"matches-by-id","matches-by-id",1749529562).cljs$core$IFn$_invoke$arity$1(epochs),current_id)
)));
return match;
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__77364_77850,G__77365_77851,G__77366_77852,G__77367_77853,G__77368_77854,G__77369_77855) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77364_77850,G__77365_77851,G__77366_77852,G__77367_77853,G__77368_77854,G__77369_77855));
var G__77375_77856 = new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087);
var G__77376_77857 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77377_77858 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__77378_77859 = (function (match_state,_){
return new cljs.core.Keyword(null,"match-info","match-info",666319879).cljs$core$IFn$_invoke$arity$1(match_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77375_77856,G__77376_77857,G__77377_77858,G__77378_77859) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77375_77856,G__77376_77857,G__77377_77858,G__77378_77859));
var G__77379_77860 = new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851);
var G__77380_77861 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77381_77862 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__77382_77863 = (function (match,_){
return day8.re_frame_10x.metamorphic.matched_event(match);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77379_77860,G__77380_77861,G__77381_77862,G__77382_77863) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77379_77860,G__77380_77861,G__77381_77862,G__77382_77863));
var G__77384_77864 = new cljs.core.Keyword("epochs","current-event","epochs/current-event",10990104);
var G__77385_77865 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77386_77866 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-event-trace","epochs/current-event-trace",-1911057851)], null);
var G__77387_77867 = (function (trace,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"event","event",301435442)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77384_77864,G__77385_77865,G__77386_77866,G__77387_77867) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77384_77864,G__77385_77865,G__77386_77866,G__77387_77867));
var G__77388_77868 = new cljs.core.Keyword("epochs","number-of-matches","epochs/number-of-matches",1018247531);
var G__77389_77869 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77390_77870 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__77391_77871 = (function (epochs,_){
return cljs.core.count(cljs.core.get.cljs$core$IFn$_invoke$arity$2(epochs,new cljs.core.Keyword(null,"matches","matches",635497998)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77388_77868,G__77389_77869,G__77390_77870,G__77391_77871) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77388_77868,G__77389_77869,G__77390_77870,G__77391_77871));
var G__77392_77872 = new cljs.core.Keyword("epochs","current-event-index","epochs/current-event-index",-2026503803);
var G__77393_77873 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77394_77874 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__77395_77875 = (function (epochs,_){
return new cljs.core.Keyword(null,"current-epoch-index","current-epoch-index",-903378376).cljs$core$IFn$_invoke$arity$1(epochs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77392_77872,G__77393_77873,G__77394_77874,G__77395_77875) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77392_77872,G__77393_77873,G__77394_77874,G__77395_77875));
var G__77396_77876 = new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682);
var G__77397_77877 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77398_77878 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__77399_77879 = (function (epochs,_){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(epochs));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77396_77876,G__77397_77877,G__77398_77878,G__77399_77879) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77396_77876,G__77397_77877,G__77398_77878,G__77399_77879));
var G__77400_77880 = new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057);
var G__77401_77881 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77402_77882 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__77403_77883 = (function (epochs){
return new cljs.core.Keyword(null,"match-ids","match-ids",752973161).cljs$core$IFn$_invoke$arity$1(epochs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77400_77880,G__77401_77881,G__77402_77882,G__77403_77883) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77400_77880,G__77401_77881,G__77402_77882,G__77403_77883));
var G__77404_77884 = new cljs.core.Keyword("epochs","beginning-trace-id","epochs/beginning-trace-id",-1340593887);
var G__77405_77885 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77406_77886 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__77407_77887 = (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(match));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77404_77884,G__77405_77885,G__77406_77886,G__77407_77887) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77404_77884,G__77405_77885,G__77406_77886,G__77407_77887));
var G__77408_77888 = new cljs.core.Keyword("epochs","ending-trace-id","epochs/ending-trace-id",-1920901579);
var G__77409_77889 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77410_77890 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match","epochs/current-match",-1687592087)], null);
var G__77411_77891 = (function (match){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.last(match));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77408_77888,G__77409_77889,G__77410_77890,G__77411_77891) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77408_77888,G__77409_77889,G__77410_77890,G__77411_77891));
var G__77412_77892 = new cljs.core.Keyword("epochs","older-epochs-available?","epochs/older-epochs-available?",366051335);
var G__77413_77893 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77414_77894 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__77415_77895 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77416_77896 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__77417_77897 = (function (p__77418){
var vec__77419 = p__77418;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77419,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77419,(1),null);
return ((((1) < cljs.core.count(ids))) && ((((current == null)) || ((current > cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ids,(0)))))));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__77412_77892,G__77413_77893,G__77414_77894,G__77415_77895,G__77416_77896,G__77417_77897) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77412_77892,G__77413_77893,G__77414_77894,G__77415_77895,G__77416_77896,G__77417_77897));
var G__77422_77898 = new cljs.core.Keyword("epochs","newer-epochs-available?","epochs/newer-epochs-available?",-1411103953);
var G__77423_77899 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77424_77900 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-epoch-id","epochs/current-epoch-id",-482598682)], null);
var G__77425_77901 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77426_77902 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","match-ids","epochs/match-ids",-669448057)], null);
var G__77427_77903 = (function (p__77428){
var vec__77429 = p__77428;
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77429,(0),null);
var ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77429,(1),null);
return ((((1) < cljs.core.count(ids))) && ((!((current == null)))) && ((current < day8.re_frame_10x.utils.utils.last_in_vec(ids))));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__77422_77898,G__77423_77899,G__77424_77900,G__77425_77901,G__77426_77902,G__77427_77903) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77422_77898,G__77423_77899,G__77424_77900,G__77425_77901,G__77426_77902,G__77427_77903));
var G__77432_77904 = new cljs.core.Keyword("timing","total-epoch-time","timing/total-epoch-time",-912032018);
var G__77433_77905 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77434_77906 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__77435_77907 = (function (traces){
var start_of_epoch = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(traces,(0));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_epoch,end_of_epoch);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77432_77904,G__77433_77905,G__77434_77906,G__77435_77907) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77432_77904,G__77433_77905,G__77434_77906,G__77435_77907));
var G__77437_77908 = new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473);
var G__77438_77909 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77439_77910 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__77440_77911 = (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__77436_SHARP_){
return ((day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_(p1__77436_SHARP_)) || (day8.re_frame_10x.metamorphic.request_animation_frame_end_QMARK_(p1__77436_SHARP_)));
}),traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77437_77908,G__77438_77909,G__77439_77910,G__77440_77911) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77437_77908,G__77438_77909,G__77439_77910,G__77440_77911));
var G__77441_77912 = new cljs.core.Keyword("timing","animation-frame-count","timing/animation-frame-count",-281075152);
var G__77442_77913 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77443_77914 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__77444_77915 = (function (frame_traces){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,frame_traces));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77441_77912,G__77442_77913,G__77443_77914,G__77444_77915) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77441_77912,G__77442_77913,G__77443_77914,G__77444_77915));
/**
 * Returns the sum of nums. (+) returns nil (not 0 like in cljs.core).
 */
day8.re_frame_10x.subs._PLUS_nil = (function day8$re_frame_10x$subs$_PLUS_nil(var_args){
var G__77449 = arguments.length;
switch (G__77449) {
case 0:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__4810__auto__ = [];
var len__4789__auto___77917 = arguments.length;
var i__4790__auto___77918 = (0);
while(true){
if((i__4790__auto___77918 < len__4789__auto___77917)){
args_arr__4810__auto__.push((arguments[i__4790__auto___77918]));

var G__77919 = (i__4790__auto___77918 + (1));
i__4790__auto___77918 = G__77919;
continue;
} else {
}
break;
}

var argseq__4811__auto__ = (new cljs.core.IndexedSeq(args_arr__4810__auto__.slice((2)),(0),null));
return day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4811__auto__);

}
});

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$0 = (function (){
return null;
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$1 = (function (x){
return x;
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$2 = (function (x,y){
return (x + y);
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$core$IFn$_invoke$arity$variadic = (function (x,y,more){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._PLUS_,(x + y),more);
}));

/** @this {Function} */
(day8.re_frame_10x.subs._PLUS_nil.cljs$lang$applyTo = (function (seq77446){
var G__77447 = cljs.core.first(seq77446);
var seq77446__$1 = cljs.core.next(seq77446);
var G__77448 = cljs.core.first(seq77446__$1);
var seq77446__$2 = cljs.core.next(seq77446__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__77447,G__77448,seq77446__$2);
}));

(day8.re_frame_10x.subs._PLUS_nil.cljs$lang$maxFixedArity = (2));

var G__77450_77920 = new cljs.core.Keyword("timing","animation-frame-time","timing/animation-frame-time",1905393593);
var G__77451_77921 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77452_77922 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("timing","animation-frame-traces","timing/animation-frame-traces",394987473)], null);
var G__77453_77923 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77454_77924 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__77455_77925 = (function (p__77456,p__77457){
var vec__77458 = p__77456;
var af_start_end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77458,(0),null);
var epoch_traces = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77458,(1),null);
var vec__77461 = p__77457;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77461,(0),null);
var frame_number = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77461,(1),null);
var frame_pairs = cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),af_start_end);
var vec__77464 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(frame_pairs,(frame_number - (1)));
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77464,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77464,(1),null);
var af_traces = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,day8.re_frame_10x.metamorphic.id_between_xf(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(start),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(end)),epoch_traces);
var total_time = day8.re_frame_10x.metamorphic.elapsed_time(start,end);
var subs_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.subscription_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
var render_time = cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.metamorphic.render_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"duration","duration",1444101068))),day8.re_frame_10x.subs._PLUS_nil,af_traces);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("timing","animation-frame-total","timing/animation-frame-total",-1923627693),total_time,new cljs.core.Keyword("timing","animation-frame-subs","timing/animation-frame-subs",128098226),subs_time,new cljs.core.Keyword("timing","animation-frame-render","timing/animation-frame-render",1587090151),render_time,new cljs.core.Keyword("timing","animation-frame-misc","timing/animation-frame-misc",1250948573),((total_time - subs_time) - render_time)], null);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__77450_77920,G__77451_77921,G__77452_77922,G__77453_77923,G__77454_77924,G__77455_77925) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77450_77920,G__77451_77921,G__77452_77922,G__77453_77923,G__77454_77924,G__77455_77925));
var G__77467_77926 = new cljs.core.Keyword("timing","event-processing-time","timing/event-processing-time",-178806297);
var G__77468_77927 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77469_77928 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__77470_77929 = (function (match){
var map__77471 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(match,new cljs.core.Keyword(null,"timing","timing",-1849225195));
var map__77471__$1 = (((((!((map__77471 == null))))?(((((map__77471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77471.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77471):map__77471);
var event_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77471__$1,new cljs.core.Keyword("re-frame","event-time","re-frame/event-time",-1349372188));
var event_handler_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77471__$1,new cljs.core.Keyword("re-frame","event-handler-time","re-frame/event-handler-time",1278050644));
var event_dofx_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77471__$1,new cljs.core.Keyword("re-frame","event-dofx-time","re-frame/event-dofx-time",650880716));
var event_run_time = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77471__$1,new cljs.core.Keyword("re-frame","event-run-time","re-frame/event-run-time",1941554897));
var remaining_interceptors = ((event_time - event_handler_time) - event_dofx_time);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("timing","event-total","timing/event-total",127009054),event_run_time,new cljs.core.Keyword("timing","event-handler","timing/event-handler",383979787),event_handler_time,new cljs.core.Keyword("timing","event-effects","timing/event-effects",-1312815404),event_dofx_time,new cljs.core.Keyword("timing","event-interceptors","timing/event-interceptors",-113832767),remaining_interceptors,new cljs.core.Keyword("timing","event-misc","timing/event-misc",1534165210),((event_run_time - event_handler_time) - event_dofx_time)], null);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77467_77926,G__77468_77927,G__77469_77928,G__77470_77929) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77467_77926,G__77468_77927,G__77469_77928,G__77470_77929));
var G__77475_77930 = new cljs.core.Keyword("timing","render-time","timing/render-time",-2042272059);
var G__77476_77931 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77477_77932 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__77478_77933 = (function (traces){
var start_of_render = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.request_animation_frame_QMARK_,traces));
var end_of_epoch = day8.re_frame_10x.utils.utils.last_in_vec(traces);
return day8.re_frame_10x.metamorphic.elapsed_time(start_of_render,end_of_epoch);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77475_77930,G__77476_77931,G__77477_77932,G__77478_77933) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77475_77930,G__77476_77931,G__77477_77932,G__77478_77933));
var G__77481_77934 = new cljs.core.Keyword("timing","data-available?","timing/data-available?",544526662);
var G__77482_77935 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77483_77936 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__77484_77937 = (function (traces){
return (!(cljs.core.empty_QMARK_(traces)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77481_77934,G__77482_77935,G__77483_77936,G__77484_77937) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77481_77934,G__77482_77935,G__77483_77936,G__77484_77937));
var G__77485_77939 = new cljs.core.Keyword("subs","root","subs/root",-432796018);
var G__77486_77940 = (function (db,_){
return new cljs.core.Keyword(null,"subs","subs",-186681991).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__77485_77939,G__77486_77940) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77485_77939,G__77486_77940));
var G__77487_77942 = new cljs.core.Keyword("subs","all-sub-traces","subs/all-sub-traces",1860573308);
var G__77488_77943 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77489_77944 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__77490_77945 = (function (traces){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.subscription_QMARK_,traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77487_77942,G__77488_77943,G__77489_77944,G__77490_77945) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77487_77942,G__77488_77943,G__77489_77944,G__77490_77945));
var G__77491_77946 = new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687);
var G__77492_77947 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77493_77948 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__77494_77949 = (function (epoch){
return new cljs.core.Keyword(null,"subscription-info","subscription-info",-1785424092).cljs$core$IFn$_invoke$arity$1(epoch);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77491_77946,G__77492_77947,G__77493_77948,G__77494_77949) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77491_77946,G__77492_77947,G__77493_77948,G__77494_77949));
var G__77495_77950 = new cljs.core.Keyword("subs","sub-state","subs/sub-state",-2134091240);
var G__77496_77951 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77497_77952 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","epoch-root","epochs/epoch-root",-2097634597)], null);
var G__77498_77953 = (function (epochs){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(epochs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77495_77950,G__77496_77951,G__77497_77952,G__77498_77953) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77495_77950,G__77496_77951,G__77497_77952,G__77498_77953));
var G__77499_77954 = new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884);
var G__77500_77955 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77501_77956 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("epochs","current-match-state","epochs/current-match-state",-1577612281)], null);
var G__77502_77957 = (function (match_state){
return new cljs.core.Keyword(null,"sub-state","sub-state",-2129237981).cljs$core$IFn$_invoke$arity$1(match_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77499_77954,G__77500_77955,G__77501_77956,G__77502_77957) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77499_77954,G__77500_77955,G__77501_77956,G__77502_77957));
day8.re_frame_10x.subs.string_BANG_ = cljs.spec.alpha.and_spec_impl(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","not","cljs.core/not",100665144,null),cljs.core.list(new cljs.core.Symbol("cljs.core","empty?","cljs.core/empty?",1866613644,null),new cljs.core.Symbol(null,"%","%",-950237169,null))))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.string_QMARK_,(function (p1__77503_SHARP_){
return (!(cljs.core.empty_QMARK_(p1__77503_SHARP_)));
})], null),null);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),"null",new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),"null",new cljs.core.Keyword("sub","create","sub/create",-1301317560),"null",new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("sub","run","sub/run",-1821315581),null,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),null,new cljs.core.Keyword("sub","create","sub/create",-1301317560),null,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","order","sub/order",-1254825160),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))),cljs.spec.alpha.nilable_impl(cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__77505){
return cljs.core.coll_QMARK_(G__77505);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("sub","run-types","sub/run-types",-1599499164))], null),null),null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","nilable","cljs.spec.alpha/nilable",1628308748,null),new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null)),cljs.spec.alpha.nilable_impl(new cljs.core.Symbol("cljs.core","pos-int?","cljs.core/pos-int?",-2115888030,null),cljs.core.pos_int_QMARK_,null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","path","sub/path",-188044288),new cljs.core.Symbol("day8.re-frame-10x.subs","string!","day8.re-frame-10x.subs/string!",1827585601,null),day8.re_frame_10x.subs.string_BANG_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429),new cljs.core.Symbol("cljs.core","any?","cljs.core/any?",-2068111842,null),cljs.core.any_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),null,new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__77506){
return cljs.core.map_QMARK_(G__77506);
}),(function (G__77506){
return cljs.core.contains_QMARK_(G__77506,new cljs.core.Keyword(null,"id","id",-1388402092));
}),(function (G__77506){
return cljs.core.contains_QMARK_(G__77506,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415));
}),(function (G__77506){
return cljs.core.contains_QMARK_(G__77506,new cljs.core.Keyword(null,"order","order",-1254677256));
}),(function (G__77506){
return cljs.core.contains_QMARK_(G__77506,new cljs.core.Keyword(null,"layer","layer",-1601820589));
}),(function (G__77506){
return cljs.core.contains_QMARK_(G__77506,new cljs.core.Keyword(null,"path-data","path-data",1441254047));
}),(function (G__77506){
return cljs.core.contains_QMARK_(G__77506,new cljs.core.Keyword(null,"path","path",-188191168));
})], null),(function (G__77506){
return ((cljs.core.map_QMARK_(G__77506)) && (cljs.core.contains_QMARK_(G__77506,new cljs.core.Keyword(null,"id","id",-1388402092))) && (cljs.core.contains_QMARK_(G__77506,new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))) && (cljs.core.contains_QMARK_(G__77506,new cljs.core.Keyword(null,"order","order",-1254677256))) && (cljs.core.contains_QMARK_(G__77506,new cljs.core.Keyword(null,"layer","layer",-1601820589))) && (cljs.core.contains_QMARK_(G__77506,new cljs.core.Keyword(null,"path-data","path-data",1441254047))) && (cljs.core.contains_QMARK_(G__77506,new cljs.core.Keyword(null,"path","path",-188191168))));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","id","sub/id",-1388418028),new cljs.core.Keyword("sub","reagent-id","sub/reagent-id",-767008039),new cljs.core.Keyword("sub","order","sub/order",-1254825160),new cljs.core.Keyword("sub","layer","sub/layer",-1601935853),new cljs.core.Keyword("sub","path-data","sub/path-data",1442158815),new cljs.core.Keyword("sub","path","sub/path",-188044288)], null),null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),new cljs.core.Keyword(null,"order","order",-1254677256),new cljs.core.Keyword(null,"layer","layer",-1601820589),new cljs.core.Keyword(null,"path-data","path-data",1441254047),new cljs.core.Keyword(null,"path","path",-188191168)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","value","sub/value",307444137),new cljs.core.Keyword("sub","previous-value","sub/previous-value",-1638946429)], null),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"id","id",-1388402092))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"order","order",-1254677256))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"layer","layer",-1601820589))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path-data","path-data",1441254047))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"path","path",-188191168)))], null),null])));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("subs","view-subs","subs/view-subs",253084832),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057)),cljs.spec.alpha.every_impl.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec.alpha","kind-form","cljs.spec.alpha/kind-form",-1047104697),null,new cljs.core.Keyword("cljs.spec.alpha","cpred","cljs.spec.alpha/cpred",-693471218),(function (G__77544){
return cljs.core.coll_QMARK_(G__77544);
}),new cljs.core.Keyword("cljs.spec.alpha","conform-all","cljs.spec.alpha/conform-all",45201917),true,new cljs.core.Keyword("cljs.spec.alpha","describe","cljs.spec.alpha/describe",1883026911),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","coll-of","cljs.spec.alpha/coll-of",1019430407,null),new cljs.core.Keyword("subs","view-panel-sub","subs/view-panel-sub",-1872730057))], null),null));
day8.re_frame_10x.subs.sub_type_value = (function day8$re_frame_10x$subs$sub_type_value(sub_type){
var G__77545 = sub_type;
var G__77545__$1 = (((G__77545 instanceof cljs.core.Keyword))?G__77545.fqn:null);
switch (G__77545__$1) {
case "sub/create":
return (5);

break;
case "sub/run":
return (4);

break;
case "sub/dispose":
return (3);

break;
case "sub/not-run":
return (2);

break;
default:
return (1);

}
});
/**
 * Calculate a sorting value for a series of subscription trace types.
 */
day8.re_frame_10x.subs.accumulate_sub_value = (function day8$re_frame_10x$subs$accumulate_sub_value(order){
var exp = (3);
var total = (0);
var order__$1 = order;
while(true){
var temp__5733__auto__ = cljs.core.first(order__$1);
if(cljs.core.truth_(temp__5733__auto__)){
var sub_type = temp__5733__auto__;
var G__77967 = (exp - (1));
var G__77968 = (total + (day8.re_frame_10x.subs.sub_type_value(sub_type) * Math.pow((10),exp)));
var G__77969 = cljs.core.rest(order__$1);
exp = G__77967;
total = G__77968;
order__$1 = G__77969;
continue;
} else {
return total;
}
break;
}
});
day8.re_frame_10x.subs.accumulate_sub_value_memoized = cljs.core.memoize(day8.re_frame_10x.subs.accumulate_sub_value);
day8.re_frame_10x.subs.sub_sort_val = (function day8$re_frame_10x$subs$sub_sort_val(order_x,order_y){
return cljs.core.compare((day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_y) : day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_y)),(day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.subs.accumulate_sub_value_memoized.cljs$core$IFn$_invoke$arity$1(order_x) : day8.re_frame_10x.subs.accumulate_sub_value_memoized.call(null,order_x)));
});
day8.re_frame_10x.subs.sub_op_type__GT_type = (function day8$re_frame_10x$subs$sub_op_type__GT_type(t){
var G__77551 = new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(t);
var G__77551__$1 = (((G__77551 instanceof cljs.core.Keyword))?G__77551.fqn:null);
switch (G__77551__$1) {
case "sub/create":
return new cljs.core.Keyword(null,"created","created",-704993748);

break;
case "sub/run":
return new cljs.core.Keyword(null,"re-run","re-run",-1300247905);

break;
case "sub/dispose":
return new cljs.core.Keyword(null,"destroyed","destroyed",-427566535);

break;
default:
return new cljs.core.Keyword(null,"not-run","not-run",-848069371);

}
});
/**
 * Returns sub info prepared for rendering in pods
 */
day8.re_frame_10x.subs.prepare_pod_info = (function day8$re_frame_10x$subs$prepare_pod_info(p__77552,p__77553){
var vec__77554 = p__77552;
var sub_info = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77554,(0),null);
var sub_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77554,(1),null);
var vec__77557 = p__77553;
var subscription = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77557,(0),null);
var remove_fn = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription,new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944)))?(function (me){
return (new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(cljs.core.val(me)) == null);
}):cljs.core.constantly(false));
var subx = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"order","order",-1254677256),day8.re_frame_10x.subs.sub_sort_val,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (me){
var state = cljs.core.val(me);
var subscription__$1 = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(state);
var sub = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.key(me),new cljs.core.Keyword(null,"reagent-id","reagent-id",-766893415),cljs.core.key(me),new cljs.core.Keyword(null,"layer","layer",-1601820589),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(sub_info,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(subscription__$1),new cljs.core.Keyword(null,"layer","layer",-1601820589)], null)),new cljs.core.Keyword(null,"path-data","path-data",1441254047),subscription__$1,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subscription__$1], 0)),new cljs.core.Keyword(null,"order","order",-1254677256),(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"order","order",-1254677256).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451)], null);
}
})(),new cljs.core.Keyword("sub","traits","sub/traits",1778340671),new cljs.core.Keyword("sub","traits","sub/traits",1778340671).cljs$core$IFn$_invoke$arity$1(state)], null);
var sub__$1 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"value","value",305978217)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub,new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(state)):sub);
var sub__$2 = ((cljs.core.contains_QMARK_(state,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(sub__$1,new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677),new cljs.core.Keyword(null,"previous-value","previous-value",-1638799677).cljs$core$IFn$_invoke$arity$1(state)):sub__$1);
return sub__$2;
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(remove_fn,sub_state)));
return subx;
});
var G__77560_77973 = new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033);
var G__77561_77974 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77562_77975 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__77563_77976 = (function (sub_state){
return new cljs.core.Keyword(null,"pre-epoch-state","pre-epoch-state",834094164).cljs$core$IFn$_invoke$arity$1(sub_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77560_77973,G__77561_77974,G__77562_77975,G__77563_77976) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77560_77973,G__77561_77974,G__77562_77975,G__77563_77976));
var G__77568_77978 = new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938);
var G__77569_77979 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77570_77980 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","current-epoch-sub-state","subs/current-epoch-sub-state",-1337816884)], null);
var G__77571_77981 = (function (sub_state){
return new cljs.core.Keyword(null,"reaction-state","reaction-state",958292039).cljs$core$IFn$_invoke$arity$1(sub_state);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77568_77978,G__77569_77979,G__77570_77980,G__77571_77981) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77568_77978,G__77569_77979,G__77570_77980,G__77571_77981));
var G__77572_77982 = new cljs.core.Keyword("subs","intra-epoch-subs","subs/intra-epoch-subs",-1298574944);
var G__77573_77983 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77574_77984 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__77575_77985 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77576_77986 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","pre-epoch-state","subs/pre-epoch-state",836844033)], null);
var G__77577_77987 = day8.re_frame_10x.subs.prepare_pod_info;
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__77572_77982,G__77573_77983,G__77574_77984,G__77575_77985,G__77576_77986,G__77577_77987) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77572_77982,G__77573_77983,G__77574_77984,G__77575_77985,G__77576_77986,G__77577_77987));
var G__77578_77992 = new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325);
var G__77579_77993 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77580_77994 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","subscription-info","subs/subscription-info",-1799592687)], null);
var G__77581_77995 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77582_77996 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","reaction-state","subs/reaction-state",955533938)], null);
var G__77583_77997 = day8.re_frame_10x.subs.prepare_pod_info;
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__77578_77992,G__77579_77993,G__77580_77994,G__77581_77995,G__77582_77996,G__77583_77997) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77578_77992,G__77579_77993,G__77580_77994,G__77581_77995,G__77582_77996,G__77583_77997));
var G__77584_77998 = new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754);
var G__77585_77999 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77586_78000 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__77587_78001 = (function (root,_){
return new cljs.core.Keyword(null,"filter-str","filter-str",1974484789).cljs$core$IFn$_invoke$arity$1(root);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77584_77998,G__77585_77999,G__77586_78000,G__77587_78001) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77584_77998,G__77585_77999,G__77586_78000,G__77587_78001));
var G__77588_78003 = new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862);
var G__77589_78004 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77590_78005 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__77591_78006 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77592_78007 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704)], null);
var G__77593_78008 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77594_78009 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","filter-str","subs/filter-str",1975403754)], null);
var G__77595_78010 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77596_78011 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647)], null);
var G__77597_78012 = (function (p__77598){
var vec__77599 = p__77598;
var all_subs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77599,(0),null);
var ignore_unchanged_l2_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77599,(1),null);
var filter_str = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77599,(2),null);
var pins = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77599,(3),null);
var compare_fn = (function (s1,s2){
var p1 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
var p2 = cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(s2),new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null)));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1,p2)){
return cljs.core.compare(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s1),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(s2));
} else {
return p1;
}
});
var G__77602 = cljs.core.sort.cljs$core$IFn$_invoke$arity$2(compare_fn,all_subs);
var G__77602__$1 = (cljs.core.truth_(ignore_unchanged_l2_QMARK_)?cljs.core.remove.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,G__77602):G__77602);
if(cljs.core.truth_(cljs.core.not_empty(filter_str))){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__77603){
var map__77604 = p__77603;
var map__77604__$1 = (((((!((map__77604 == null))))?(((((map__77604.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77604.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77604):map__77604);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77604__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77604__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var or__4185__auto__ = clojure.string.includes_QMARK_(path,filter_str);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(pins,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"pin?","pin?",-1347894609)], null));
}
}),G__77602__$1);
} else {
return G__77602__$1;
}
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$10(G__77588_78003,G__77589_78004,G__77590_78005,G__77591_78006,G__77592_78007,G__77593_78008,G__77594_78009,G__77595_78010,G__77596_78011,G__77597_78012) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77588_78003,G__77589_78004,G__77590_78005,G__77591_78006,G__77592_78007,G__77593_78008,G__77594_78009,G__77595_78010,G__77596_78011,G__77597_78012));
var G__77608_78018 = new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284);
var G__77609_78019 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77610_78020 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","visible-subs","subs/visible-subs",-1536647862)], null);
var G__77611_78021 = (function (subs,_){
return cljs.core.frequencies(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"order","order",-1254677256),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subs], 0)));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77608_78018,G__77609_78019,G__77610_78020,G__77611_78021) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77608_78018,G__77609_78019,G__77610_78020,G__77611_78021));
var G__77612_78023 = new cljs.core.Keyword("subs","created-count","subs/created-count",-1738545579);
var G__77613_78024 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77614_78025 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__77615_78026 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","create","sub/create",-1301317560),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77612_78023,G__77613_78024,G__77614_78025,G__77615_78026) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77612_78023,G__77613_78024,G__77614_78025,G__77615_78026));
var G__77617_78027 = new cljs.core.Keyword("subs","re-run-count","subs/re-run-count",603750522);
var G__77618_78028 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77619_78029 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__77620_78030 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","run","sub/run",-1821315581),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77617_78027,G__77618_78028,G__77619_78029,G__77620_78030) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77617_78027,G__77618_78028,G__77619_78029,G__77620_78030));
var G__77621_78032 = new cljs.core.Keyword("subs","destroyed-count","subs/destroyed-count",-218890338);
var G__77622_78033 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77623_78034 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__77624_78035 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","dispose","sub/dispose",365440536),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77621_78032,G__77622_78033,G__77623_78034,G__77624_78035) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77621_78032,G__77622_78033,G__77623_78034,G__77624_78035));
var G__77625_78036 = new cljs.core.Keyword("subs","not-run-count","subs/not-run-count",-133338676);
var G__77626_78037 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77627_78038 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","sub-counts","subs/sub-counts",289359284)], null);
var G__77628_78039 = (function (counts){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(counts,new cljs.core.Keyword("sub","not-run","sub/not-run",-848603451),(0));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77625_78036,G__77626_78037,G__77627_78038,G__77628_78039) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77625_78036,G__77626_78037,G__77627_78038,G__77628_78039));
var G__77629_78040 = new cljs.core.Keyword("subs","unchanged-l2-subs-count","subs/unchanged-l2-subs-count",-1997261328);
var G__77630_78041 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77631_78042 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","all-subs","subs/all-subs",1599770325)], null);
var G__77632_78043 = (function (subs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.metamorphic.unchanged_l2_subscription_QMARK_,subs));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77629_78040,G__77630_78041,G__77631_78042,G__77632_78043) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77629_78040,G__77630_78041,G__77631_78042,G__77632_78043));
var G__77633_78046 = new cljs.core.Keyword("subs","ignore-unchanged-l2-subs?","subs/ignore-unchanged-l2-subs?",-1438622704);
var G__77634_78047 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77635_78048 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__77636_78049 = (function (subs,_){
return new cljs.core.Keyword(null,"ignore-unchanged-subs?","ignore-unchanged-subs?",125806160).cljs$core$IFn$_invoke$arity$2(subs,true);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77633_78046,G__77634_78047,G__77635_78048,G__77636_78049) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77633_78046,G__77634_78047,G__77635_78048,G__77636_78049));
var G__77637_78055 = new cljs.core.Keyword("subs","sub-expansions","subs/sub-expansions",-547974030);
var G__77638_78056 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77639_78057 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__77640_78058 = (function (subs,_){
return new cljs.core.Keyword(null,"expansions","expansions",533713877).cljs$core$IFn$_invoke$arity$1(subs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77637_78055,G__77638_78056,G__77639_78057,G__77640_78058) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77637_78055,G__77638_78056,G__77639_78057,G__77640_78058));
var G__77643_78059 = new cljs.core.Keyword("subs","sub-pins","subs/sub-pins",1713411647);
var G__77644_78060 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77645_78061 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("subs","root","subs/root",-432796018)], null);
var G__77646_78062 = (function (subs,_){
return new cljs.core.Keyword(null,"pinned","pinned",-1216085339).cljs$core$IFn$_invoke$arity$1(subs);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77643_78059,G__77644_78060,G__77645_78061,G__77646_78062) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77643_78059,G__77644_78060,G__77645_78061,G__77646_78062));
var G__77647_78063 = new cljs.core.Keyword("code","root","code/root",-432838104);
var G__77648_78064 = (function (db,_){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__77647_78063,G__77648_78064) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77647_78063,G__77648_78064));
var G__77650_78065 = new cljs.core.Keyword("code","current-code","code/current-code",17389180);
var G__77651_78066 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77652_78067 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("traces","current-event-traces","traces/current-event-traces",1386605769)], null);
var G__77653_78068 = (function (traces,_){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,trace){
var temp__5739__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"code","code",1586293142)], null));
if((temp__5739__auto__ == null)){
return null;
} else {
var code = temp__5739__auto__;
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),i,new cljs.core.Keyword(null,"trace-id","trace-id",681947249),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(trace),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"op-type","op-type",-1636141668).cljs$core$IFn$_invoke$arity$1(trace)], 0)),new cljs.core.Keyword(null,"code","code",1586293142),cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i__$1,code__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(code__$1,new cljs.core.Keyword(null,"id","id",-1388402092),i__$1);
}),code)),new cljs.core.Keyword(null,"form","form",-1624062471),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(trace,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"form","form",-1624062471)], null))], null);
}
}),traces);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77650_78065,G__77651_78066,G__77652_78067,G__77653_78068) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77650_78065,G__77651_78066,G__77652_78067,G__77653_78068));
var G__77654_78069 = new cljs.core.Keyword("code","current-form","code/current-form",1888662531);
var G__77655_78070 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77656_78071 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-code","code/current-code",17389180)], null);
var G__77657_78072 = (function (code,_){
return new cljs.core.Keyword(null,"form","form",-1624062471).cljs$core$IFn$_invoke$arity$1(cljs.core.first(code));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77654_78069,G__77655_78070,G__77656_78071,G__77657_78072) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77654_78069,G__77655_78070,G__77656_78071,G__77657_78072));
var G__77658_78073 = new cljs.core.Keyword("code","current-zprint-form","code/current-zprint-form",-1297458353);
var G__77659_78074 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77660_78075 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","current-form","code/current-form",1888662531)], null);
var G__77661_78076 = (function (form,_){
return zprint.core.zprint_str(form);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77658_78073,G__77659_78074,G__77660_78075,G__77661_78076) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77658_78073,G__77659_78074,G__77660_78075,G__77661_78076));
var G__77664_78077 = new cljs.core.Keyword("code","code-open?","code/code-open?",1212488779);
var G__77665_78078 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77666_78079 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__77667_78080 = (function (code,_){
return new cljs.core.Keyword(null,"code-open?","code-open?",1228336744).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77664_78077,G__77665_78078,G__77666_78079,G__77667_78080) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77664_78077,G__77665_78078,G__77666_78079,G__77667_78080));
var G__77669_78081 = new cljs.core.Keyword("code","highlighted-form","code/highlighted-form",-1258376614);
var G__77670_78082 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77671_78083 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__77672_78084 = (function (code,_){
return new cljs.core.Keyword(null,"highlighted-form","highlighted-form",-1255288753).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77669_78081,G__77670_78082,G__77671_78083,G__77672_78084) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77669_78081,G__77670_78082,G__77671_78083,G__77672_78084));
var G__77673_78085 = new cljs.core.Keyword("code","show-all-code?","code/show-all-code?",162236201);
var G__77674_78086 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77675_78087 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__77676_78088 = (function (code,_){
return new cljs.core.Keyword(null,"show-all-code?","show-all-code?",159571286).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77673_78085,G__77674_78086,G__77675_78087,G__77676_78088) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77673_78085,G__77674_78086,G__77675_78087,G__77676_78088));
var G__77677_78089 = new cljs.core.Keyword("code","repl-msg-state","code/repl-msg-state",-519328495);
var G__77678_78090 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77679_78091 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","root","code/root",-432838104)], null);
var G__77680_78092 = (function (code,_){
return new cljs.core.Keyword(null,"repl-msg-state","repl-msg-state",-522274040).cljs$core$IFn$_invoke$arity$1(code);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77677_78089,G__77678_78090,G__77679_78091,G__77680_78092) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77677_78089,G__77678_78090,G__77679_78091,G__77680_78092));
day8.re_frame_10x.subs.canvas = document.createElement("canvas");
var G__77684_78124 = new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647);
var G__77685_78125 = (function (_,___$1){
var context = day8.re_frame_10x.subs.canvas.getContext("2d");
(context.font = "monospace 1em");

return context.measureText("T").width;
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__77684_78124,G__77685_78125) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77684_78124,G__77685_78125));
var G__77686_78129 = new cljs.core.Keyword("code","max-column-width","code/max-column-width",1552872919);
var G__77687_78130 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77688_78131 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("settings","window-width-rounded","settings/window-width-rounded",-924202629),(100)], null);
var G__77689_78132 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77690_78133 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("code","single-character-width","code/single-character-width",-207718647)], null);
var G__77691_78134 = (function (p__77692,_){
var vec__77693 = p__77692;
var window_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77693,(0),null);
var char_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77693,(1),null);
var G__77696 = (window_width / char_width);
return Math.ceil(G__77696);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__77686_78129,G__77687_78130,G__77688_78131,G__77689_78132,G__77690_78133,G__77691_78134) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77686_78129,G__77687_78130,G__77688_78131,G__77689_78132,G__77690_78133,G__77691_78134));
var G__77697_78142 = new cljs.core.Keyword("component","root","component/root",-1714299688);
var G__77698_78143 = (function (db,_){
return new cljs.core.Keyword(null,"component","component",1555936782).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__77697_78142,G__77698_78143) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77697_78142,G__77698_78143));
var G__77699_78146 = new cljs.core.Keyword("component","direction","component/direction",785553634);
var G__77700_78147 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77701_78149 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("component","root","component/root",-1714299688)], null);
var G__77702_78150 = (function (component,_){
return new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(component);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77699_78146,G__77700_78147,G__77701_78149,G__77702_78150) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77699_78146,G__77700_78147,G__77701_78149,G__77702_78150));
var G__77703_78154 = new cljs.core.Keyword("errors","root","errors/root",-1902924890);
var G__77704_78155 = (function (db,_){
return new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(db);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__77703_78154,G__77704_78155) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77703_78154,G__77704_78155));
var G__77705_78158 = new cljs.core.Keyword("errors","popup-failed?","errors/popup-failed?",-600155433);
var G__77706_78159 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__77707_78160 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("errors","root","errors/root",-1902924890)], null);
var G__77708_78161 = (function (errors,_){
return new cljs.core.Keyword(null,"popup-failed?","popup-failed?",-345183682).cljs$core$IFn$_invoke$arity$1(errors);
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__77705_78158,G__77706_78159,G__77707_78160,G__77708_78161) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77705_78158,G__77706_78159,G__77707_78160,G__77708_78161));
var G__77709_78163 = new cljs.core.Keyword("history","showing-history?","history/showing-history?",896856376);
var G__77710_78164 = (function (db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"history","history",-247395220),new cljs.core.Keyword(null,"showing-history?","showing-history?",2100610492)], null));
});
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__77709_78163,G__77710_78164) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.core.reg_sub.call(null,G__77709_78163,G__77710_78164));

//# sourceMappingURL=day8.re_frame_10x.subs.js.map
