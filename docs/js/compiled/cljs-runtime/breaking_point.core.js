goog.provide('breaking_point.core');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_frame_fx.dispatch');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),(function (_,p__83833){
var vec__83834 = p__83833;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83834,(0),null);
var map__83837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83834,(1),null);
var map__83837__$1 = (((((!((map__83837 == null))))?(((((map__83837.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83837.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83837):map__83837);
var opts = map__83837__$1;
var breakpoints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83837__$1,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739));
var debounce_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83837__$1,new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),opts], null);
}));
var G__83844_83933 = new cljs.core.Keyword("breaking-point.core","screen-dimensions","breaking-point.core/screen-dimensions",407195814);
var G__83845_83934 = (function (coeffect){
var screen_width = (function (){var or__4185__auto__ = (function (){var G__83853 = window;
if((G__83853 == null)){
return null;
} else {
return G__83853.innerWidth;
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = (function (){var G__83855 = document;
var G__83855__$1 = (((G__83855 == null))?null:G__83855.documentElement);
if((G__83855__$1 == null)){
return null;
} else {
return G__83855__$1.clientWidth;
}
})();
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var G__83856 = document;
var G__83856__$1 = (((G__83856 == null))?null:G__83856.body);
if((G__83856__$1 == null)){
return null;
} else {
return G__83856__$1.clientWidth;
}
}
}
})();
var screen_height = (function (){var or__4185__auto__ = (function (){var G__83858 = window;
if((G__83858 == null)){
return null;
} else {
return G__83858.innerHeight;
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = (function (){var G__83860 = document;
var G__83860__$1 = (((G__83860 == null))?null:G__83860.documentElement);
if((G__83860__$1 == null)){
return null;
} else {
return G__83860__$1.clientHeight;
}
})();
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var G__83861 = document;
var G__83861__$1 = (((G__83861 == null))?null:G__83861.body);
if((G__83861__$1 == null)){
return null;
} else {
return G__83861__$1.clientHeight;
}
}
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(coeffect,new cljs.core.Keyword(null,"screen-width","screen-width",1557963263),screen_width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen-height","screen-height",141363033),screen_height], 0));
});
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__83844_83933,G__83845_83934) : re_frame.core.reg_cofx.call(null,G__83844_83933,G__83845_83934));
breaking_point.core.set_screen_dimensions = (function breaking_point$core$set_screen_dimensions(p__83862,_){
var map__83863 = p__83862;
var map__83863__$1 = (((((!((map__83863 == null))))?(((((map__83863.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83863.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83863):map__83863);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83863__$1,new cljs.core.Keyword(null,"db","db",993250759));
var screen_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83863__$1,new cljs.core.Keyword(null,"screen-width","screen-width",1557963263));
var screen_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83863__$1,new cljs.core.Keyword(null,"screen-height","screen-height",141363033));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-width","screen-width",1557963263)], null),screen_width),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-height","screen-height",141363033)], null),screen_height)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__83865 = new cljs.core.Keyword("breaking-point.core","screen-dimensions","breaking-point.core/screen-dimensions",407195814);
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__83865) : re_frame.core.inject_cofx.call(null,G__83865));
})()], null),breaking_point.core.set_screen_dimensions);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("breaking-point.core","set-screen-dimensions-debounced","breaking-point.core/set-screen-dimensions-debounced",807683602),(function (_,p__83866){
var vec__83867 = p__83866;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83867,(0),null);
var debounce_ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83867,(1),null);
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"dispatch-debounce","dispatch-debounce",-2065179020),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("breaking-point.core","calcaulate-width-after-resize","breaking-point.core/calcaulate-width-after-resize",1288445004),new cljs.core.Keyword(null,"timeout","timeout",-318625318),debounce_ms,new cljs.core.Keyword(null,"action","action",-811238024),new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"event","event",301435442),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691)], null)], null)], null)], null);
}));
breaking_point.core.get_screen_width = (function breaking_point$core$get_screen_width(db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-width","screen-width",1557963263)], null));
});
breaking_point.core.get_screen_height = (function breaking_point$core$get_screen_height(db,_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-height","screen-height",141363033)], null));
});
breaking_point.core.__GT_get_screen = (function breaking_point$core$__GT_get_screen(breakpoints){
return (function breaking_point$core$__GT_get_screen_$_get_screen(screen_width,_){
if(cljs.core.truth_(screen_width)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (prev_breakpoint,p__83870){
var vec__83871 = p__83870;
var screen_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83871,(0),null);
var breakpoint = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83871,(1),null);
if((((breakpoint == null)) || ((((screen_width < breakpoint)) && ((screen_width >= prev_breakpoint)))))){
return cljs.core.reduced(screen_key);
} else {
return breakpoint;
}
}),(0),cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2((2),breakpoints));
} else {
return null;
}
});
});
breaking_point.core.get_orientation = (function breaking_point$core$get_orientation(p__83874,_){
var vec__83875 = p__83874;
var screen_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83875,(0),null);
var screen_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83875,(1),null);
if((screen_height > screen_width)){
return new cljs.core.Keyword(null,"portrait","portrait",-9810007);
} else {
return new cljs.core.Keyword(null,"landscape","landscape",1519839253);
}
});
breaking_point.core.register_subs = (function breaking_point$core$register_subs(breakpoints){
var G__83878_83935 = new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360);
var G__83879_83936 = breaking_point.core.get_screen_width;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__83878_83935,G__83879_83936) : re_frame.core.reg_sub.call(null,G__83878_83935,G__83879_83936));

var G__83880_83937 = new cljs.core.Keyword("breaking-point.core","screen-height","breaking-point.core/screen-height",1145919666);
var G__83881_83938 = breaking_point.core.get_screen_height;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__83880_83937,G__83881_83938) : re_frame.core.reg_sub.call(null,G__83880_83937,G__83881_83938));

var G__83882_83939 = new cljs.core.Keyword("breaking-point.core","screen","breaking-point.core/screen",834517405);
var G__83883_83940 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__83884_83941 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360)], null);
var G__83885_83942 = breaking_point.core.__GT_get_screen(breakpoints);
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__83882_83939,G__83883_83940,G__83884_83941,G__83885_83942) : re_frame.core.reg_sub.call(null,G__83882_83939,G__83883_83940,G__83884_83941,G__83885_83942));

var G__83886_83943 = new cljs.core.Keyword("breaking-point.core","orientation","breaking-point.core/orientation",1892289812);
var G__83887_83944 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__83888_83945 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360)], null);
var G__83889_83946 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__83890_83947 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen-height","breaking-point.core/screen-height",1145919666)], null);
var G__83891_83948 = breaking_point.core.get_orientation;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__83886_83943,G__83887_83944,G__83888_83945,G__83889_83946,G__83890_83947,G__83891_83948) : re_frame.core.reg_sub.call(null,G__83886_83943,G__83887_83944,G__83888_83945,G__83889_83946,G__83890_83947,G__83891_83948));

var G__83892_83949 = new cljs.core.Keyword("breaking-point.core","portrait?","breaking-point.core/portrait?",-1731575960);
var G__83893_83950 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__83894_83951 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","orientation","breaking-point.core/orientation",1892289812)], null);
var G__83895_83952 = (function (orientation,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orientation,new cljs.core.Keyword(null,"portrait","portrait",-9810007));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__83892_83949,G__83893_83950,G__83894_83951,G__83895_83952) : re_frame.core.reg_sub.call(null,G__83892_83949,G__83893_83950,G__83894_83951,G__83895_83952));

var G__83896_83953 = new cljs.core.Keyword("breaking-point.core","landscape?","breaking-point.core/landscape?",1510790059);
var G__83897_83954 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__83898_83955 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","orientation","breaking-point.core/orientation",1892289812)], null);
var G__83899_83956 = (function (orientation,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orientation,new cljs.core.Keyword(null,"landscape","landscape",1519839253));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__83896_83953,G__83897_83954,G__83898_83955,G__83899_83956) : re_frame.core.reg_sub.call(null,G__83896_83953,G__83897_83954,G__83898_83955,G__83899_83956));

var screen_keys = (function (){var G__83900 = breakpoints;
var G__83900__$1 = (((G__83900 == null))?null:cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,G__83900));
var G__83900__$2 = (((G__83900__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__83901){
var vec__83902 = p__83901;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83902,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83902,(1),null);
return cljs.core.even_QMARK_(i);
}),G__83900__$1));
if((G__83900__$2 == null)){
return null;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,G__83900__$2);
}
})();
var seq__83905 = cljs.core.seq(screen_keys);
var chunk__83906 = null;
var count__83907 = (0);
var i__83908 = (0);
while(true){
if((i__83908 < count__83907)){
var screen_key = chunk__83906.cljs$core$IIndexed$_nth$arity$2(null,i__83908);
var G__83917_83957 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("breaking-point.core",[cljs.core.name(screen_key),"?"].join(''));
var G__83918_83958 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__83919_83959 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen","breaking-point.core/screen",834517405)], null);
var G__83920_83960 = ((function (seq__83905,chunk__83906,count__83907,i__83908,G__83917_83957,G__83918_83958,G__83919_83959,screen_key,screen_keys){
return (function (screen,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(screen,screen_key);
});})(seq__83905,chunk__83906,count__83907,i__83908,G__83917_83957,G__83918_83958,G__83919_83959,screen_key,screen_keys))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__83917_83957,G__83918_83958,G__83919_83959,G__83920_83960) : re_frame.core.reg_sub.call(null,G__83917_83957,G__83918_83958,G__83919_83959,G__83920_83960));


var G__83961 = seq__83905;
var G__83962 = chunk__83906;
var G__83963 = count__83907;
var G__83964 = (i__83908 + (1));
seq__83905 = G__83961;
chunk__83906 = G__83962;
count__83907 = G__83963;
i__83908 = G__83964;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__83905);
if(temp__5735__auto__){
var seq__83905__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__83905__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__83905__$1);
var G__83965 = cljs.core.chunk_rest(seq__83905__$1);
var G__83966 = c__4609__auto__;
var G__83967 = cljs.core.count(c__4609__auto__);
var G__83968 = (0);
seq__83905 = G__83965;
chunk__83906 = G__83966;
count__83907 = G__83967;
i__83908 = G__83968;
continue;
} else {
var screen_key = cljs.core.first(seq__83905__$1);
var G__83921_83969 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("breaking-point.core",[cljs.core.name(screen_key),"?"].join(''));
var G__83922_83970 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__83923_83971 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen","breaking-point.core/screen",834517405)], null);
var G__83924_83972 = ((function (seq__83905,chunk__83906,count__83907,i__83908,G__83921_83969,G__83922_83970,G__83923_83971,screen_key,seq__83905__$1,temp__5735__auto__,screen_keys){
return (function (screen,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(screen,screen_key);
});})(seq__83905,chunk__83906,count__83907,i__83908,G__83921_83969,G__83922_83970,G__83923_83971,screen_key,seq__83905__$1,temp__5735__auto__,screen_keys))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__83921_83969,G__83922_83970,G__83923_83971,G__83924_83972) : re_frame.core.reg_sub.call(null,G__83921_83969,G__83922_83970,G__83923_83971,G__83924_83972));


var G__83973 = cljs.core.next(seq__83905__$1);
var G__83974 = null;
var G__83975 = (0);
var G__83976 = (0);
seq__83905 = G__83973;
chunk__83906 = G__83974;
count__83907 = G__83975;
i__83908 = G__83976;
continue;
}
} else {
return null;
}
}
break;
}
});
breaking_point.core.set_breakpoints = (function breaking_point$core$set_breakpoints(p__83925){
var map__83926 = p__83925;
var map__83926__$1 = (((((!((map__83926 == null))))?(((((map__83926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83926.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83926):map__83926);
var opts = map__83926__$1;
var breakpoints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83926__$1,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739));
var debounce_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83926__$1,new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167));
breaking_point.core.register_subs(breakpoints);

var G__83928_83977 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__83928_83977) : re_frame.core.dispatch.call(null,G__83928_83977));

return window.addEventListener("resize",(function (){
if(cljs.core.truth_(debounce_ms)){
var G__83929 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions-debounced","breaking-point.core/set-screen-dimensions-debounced",807683602),debounce_ms], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__83929) : re_frame.core.dispatch.call(null,G__83929));
} else {
var G__83930 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__83930) : re_frame.core.dispatch.call(null,G__83930));
}
}),true);
});
var G__83931_83978 = new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013);
var G__83932_83979 = breaking_point.core.set_breakpoints;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__83931_83978,G__83932_83979) : re_frame.core.reg_fx.call(null,G__83931_83978,G__83932_83979));

//# sourceMappingURL=breaking_point.core.js.map
