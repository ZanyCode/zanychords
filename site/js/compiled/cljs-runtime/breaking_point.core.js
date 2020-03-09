goog.provide('breaking_point.core');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_frame_fx.dispatch');
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),(function (_,p__53720){
var vec__53721 = p__53720;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53721,(0),null);
var map__53724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53721,(1),null);
var map__53724__$1 = (((((!((map__53724 == null))))?(((((map__53724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53724.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53724):map__53724);
var opts = map__53724__$1;
var breakpoints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53724__$1,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739));
var debounce_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53724__$1,new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),opts], null);
}));
var G__53726_53809 = new cljs.core.Keyword("breaking-point.core","screen-dimensions","breaking-point.core/screen-dimensions",407195814);
var G__53727_53810 = (function (coeffect){
var screen_width = (function (){var or__4185__auto__ = (function (){var G__53729 = window;
if((G__53729 == null)){
return null;
} else {
return G__53729.innerWidth;
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = (function (){var G__53731 = document;
var G__53731__$1 = (((G__53731 == null))?null:G__53731.documentElement);
if((G__53731__$1 == null)){
return null;
} else {
return G__53731__$1.clientWidth;
}
})();
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var G__53732 = document;
var G__53732__$1 = (((G__53732 == null))?null:G__53732.body);
if((G__53732__$1 == null)){
return null;
} else {
return G__53732__$1.clientWidth;
}
}
}
})();
var screen_height = (function (){var or__4185__auto__ = (function (){var G__53734 = window;
if((G__53734 == null)){
return null;
} else {
return G__53734.innerHeight;
}
})();
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = (function (){var G__53736 = document;
var G__53736__$1 = (((G__53736 == null))?null:G__53736.documentElement);
if((G__53736__$1 == null)){
return null;
} else {
return G__53736__$1.clientHeight;
}
})();
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
var G__53737 = document;
var G__53737__$1 = (((G__53737 == null))?null:G__53737.body);
if((G__53737__$1 == null)){
return null;
} else {
return G__53737__$1.clientHeight;
}
}
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(coeffect,new cljs.core.Keyword(null,"screen-width","screen-width",1557963263),screen_width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"screen-height","screen-height",141363033),screen_height], 0));
});
(re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_cofx.cljs$core$IFn$_invoke$arity$2(G__53726_53809,G__53727_53810) : re_frame.core.reg_cofx.call(null,G__53726_53809,G__53727_53810));
breaking_point.core.set_screen_dimensions = (function breaking_point$core$set_screen_dimensions(p__53738,_){
var map__53739 = p__53738;
var map__53739__$1 = (((((!((map__53739 == null))))?(((((map__53739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53739):map__53739);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53739__$1,new cljs.core.Keyword(null,"db","db",993250759));
var screen_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53739__$1,new cljs.core.Keyword(null,"screen-width","screen-width",1557963263));
var screen_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53739__$1,new cljs.core.Keyword(null,"screen-height","screen-height",141363033));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),cljs.core.assoc_in(cljs.core.assoc_in(db,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-width","screen-width",1557963263)], null),screen_width),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","breakpoints","breaking-point.core/breakpoints",1759036980),new cljs.core.Keyword(null,"screen-height","screen-height",141363033)], null),screen_height)], null);
});
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__53741 = new cljs.core.Keyword("breaking-point.core","screen-dimensions","breaking-point.core/screen-dimensions",407195814);
return (re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.inject_cofx.cljs$core$IFn$_invoke$arity$1(G__53741) : re_frame.core.inject_cofx.call(null,G__53741));
})()], null),breaking_point.core.set_screen_dimensions);
re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("breaking-point.core","set-screen-dimensions-debounced","breaking-point.core/set-screen-dimensions-debounced",807683602),(function (_,p__53742){
var vec__53743 = p__53742;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53743,(0),null);
var debounce_ms = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53743,(1),null);
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
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (prev_breakpoint,p__53746){
var vec__53747 = p__53746;
var screen_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53747,(0),null);
var breakpoint = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53747,(1),null);
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
breaking_point.core.get_orientation = (function breaking_point$core$get_orientation(p__53750,_){
var vec__53751 = p__53750;
var screen_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53751,(0),null);
var screen_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53751,(1),null);
if((screen_height > screen_width)){
return new cljs.core.Keyword(null,"portrait","portrait",-9810007);
} else {
return new cljs.core.Keyword(null,"landscape","landscape",1519839253);
}
});
breaking_point.core.register_subs = (function breaking_point$core$register_subs(breakpoints){
var G__53754_53821 = new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360);
var G__53755_53822 = breaking_point.core.get_screen_width;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53754_53821,G__53755_53822) : re_frame.core.reg_sub.call(null,G__53754_53821,G__53755_53822));

var G__53756_53823 = new cljs.core.Keyword("breaking-point.core","screen-height","breaking-point.core/screen-height",1145919666);
var G__53757_53824 = breaking_point.core.get_screen_height;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$2(G__53756_53823,G__53757_53824) : re_frame.core.reg_sub.call(null,G__53756_53823,G__53757_53824));

var G__53758_53825 = new cljs.core.Keyword("breaking-point.core","screen","breaking-point.core/screen",834517405);
var G__53759_53826 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53760_53827 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360)], null);
var G__53761_53828 = breaking_point.core.__GT_get_screen(breakpoints);
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53758_53825,G__53759_53826,G__53760_53827,G__53761_53828) : re_frame.core.reg_sub.call(null,G__53758_53825,G__53759_53826,G__53760_53827,G__53761_53828));

var G__53762_53829 = new cljs.core.Keyword("breaking-point.core","orientation","breaking-point.core/orientation",1892289812);
var G__53763_53830 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53764_53831 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen-width","breaking-point.core/screen-width",-2005106360)], null);
var G__53765_53832 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53766_53833 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen-height","breaking-point.core/screen-height",1145919666)], null);
var G__53767_53834 = breaking_point.core.get_orientation;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$6(G__53762_53829,G__53763_53830,G__53764_53831,G__53765_53832,G__53766_53833,G__53767_53834) : re_frame.core.reg_sub.call(null,G__53762_53829,G__53763_53830,G__53764_53831,G__53765_53832,G__53766_53833,G__53767_53834));

var G__53768_53835 = new cljs.core.Keyword("breaking-point.core","portrait?","breaking-point.core/portrait?",-1731575960);
var G__53769_53836 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53770_53837 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","orientation","breaking-point.core/orientation",1892289812)], null);
var G__53771_53838 = (function (orientation,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orientation,new cljs.core.Keyword(null,"portrait","portrait",-9810007));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53768_53835,G__53769_53836,G__53770_53837,G__53771_53838) : re_frame.core.reg_sub.call(null,G__53768_53835,G__53769_53836,G__53770_53837,G__53771_53838));

var G__53772_53839 = new cljs.core.Keyword("breaking-point.core","landscape?","breaking-point.core/landscape?",1510790059);
var G__53773_53840 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53774_53841 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","orientation","breaking-point.core/orientation",1892289812)], null);
var G__53775_53842 = (function (orientation,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orientation,new cljs.core.Keyword(null,"landscape","landscape",1519839253));
});
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53772_53839,G__53773_53840,G__53774_53841,G__53775_53842) : re_frame.core.reg_sub.call(null,G__53772_53839,G__53773_53840,G__53774_53841,G__53775_53842));

var screen_keys = (function (){var G__53776 = breakpoints;
var G__53776__$1 = (((G__53776 == null))?null:cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,G__53776));
var G__53776__$2 = (((G__53776__$1 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__53777){
var vec__53778 = p__53777;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53778,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53778,(1),null);
return cljs.core.even_QMARK_(i);
}),G__53776__$1));
if((G__53776__$2 == null)){
return null;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,G__53776__$2);
}
})();
var seq__53781 = cljs.core.seq(screen_keys);
var chunk__53782 = null;
var count__53783 = (0);
var i__53784 = (0);
while(true){
if((i__53784 < count__53783)){
var screen_key = chunk__53782.cljs$core$IIndexed$_nth$arity$2(null,i__53784);
var G__53793_53844 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("breaking-point.core",[cljs.core.name(screen_key),"?"].join(''));
var G__53794_53845 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53795_53846 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen","breaking-point.core/screen",834517405)], null);
var G__53796_53847 = ((function (seq__53781,chunk__53782,count__53783,i__53784,G__53793_53844,G__53794_53845,G__53795_53846,screen_key,screen_keys){
return (function (screen,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(screen,screen_key);
});})(seq__53781,chunk__53782,count__53783,i__53784,G__53793_53844,G__53794_53845,G__53795_53846,screen_key,screen_keys))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53793_53844,G__53794_53845,G__53795_53846,G__53796_53847) : re_frame.core.reg_sub.call(null,G__53793_53844,G__53794_53845,G__53795_53846,G__53796_53847));


var G__53848 = seq__53781;
var G__53849 = chunk__53782;
var G__53850 = count__53783;
var G__53851 = (i__53784 + (1));
seq__53781 = G__53848;
chunk__53782 = G__53849;
count__53783 = G__53850;
i__53784 = G__53851;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53781);
if(temp__5735__auto__){
var seq__53781__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53781__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__53781__$1);
var G__53852 = cljs.core.chunk_rest(seq__53781__$1);
var G__53853 = c__4609__auto__;
var G__53854 = cljs.core.count(c__4609__auto__);
var G__53855 = (0);
seq__53781 = G__53852;
chunk__53782 = G__53853;
count__53783 = G__53854;
i__53784 = G__53855;
continue;
} else {
var screen_key = cljs.core.first(seq__53781__$1);
var G__53797_53856 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("breaking-point.core",[cljs.core.name(screen_key),"?"].join(''));
var G__53798_53857 = new cljs.core.Keyword(null,"<-","<-",760412998);
var G__53799_53858 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","screen","breaking-point.core/screen",834517405)], null);
var G__53800_53859 = ((function (seq__53781,chunk__53782,count__53783,i__53784,G__53797_53856,G__53798_53857,G__53799_53858,screen_key,seq__53781__$1,temp__5735__auto__,screen_keys){
return (function (screen,_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(screen,screen_key);
});})(seq__53781,chunk__53782,count__53783,i__53784,G__53797_53856,G__53798_53857,G__53799_53858,screen_key,seq__53781__$1,temp__5735__auto__,screen_keys))
;
(re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4 ? re_frame.core.reg_sub.cljs$core$IFn$_invoke$arity$4(G__53797_53856,G__53798_53857,G__53799_53858,G__53800_53859) : re_frame.core.reg_sub.call(null,G__53797_53856,G__53798_53857,G__53799_53858,G__53800_53859));


var G__53863 = cljs.core.next(seq__53781__$1);
var G__53864 = null;
var G__53865 = (0);
var G__53866 = (0);
seq__53781 = G__53863;
chunk__53782 = G__53864;
count__53783 = G__53865;
i__53784 = G__53866;
continue;
}
} else {
return null;
}
}
break;
}
});
breaking_point.core.set_breakpoints = (function breaking_point$core$set_breakpoints(p__53801){
var map__53802 = p__53801;
var map__53802__$1 = (((((!((map__53802 == null))))?(((((map__53802.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53802.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53802):map__53802);
var opts = map__53802__$1;
var breakpoints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53802__$1,new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739));
var debounce_ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53802__$1,new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167));
breaking_point.core.register_subs(breakpoints);

var G__53804_53867 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691)], null);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__53804_53867) : re_frame.core.dispatch.call(null,G__53804_53867));

return window.addEventListener("resize",(function (){
if(cljs.core.truth_(debounce_ms)){
var G__53805 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions-debounced","breaking-point.core/set-screen-dimensions-debounced",807683602),debounce_ms], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__53805) : re_frame.core.dispatch.call(null,G__53805));
} else {
var G__53806 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-screen-dimensions","breaking-point.core/set-screen-dimensions",1622393691)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__53806) : re_frame.core.dispatch.call(null,G__53806));
}
}),true);
});
var G__53807_53868 = new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013);
var G__53808_53869 = breaking_point.core.set_breakpoints;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__53807_53868,G__53808_53869) : re_frame.core.reg_fx.call(null,G__53807_53868,G__53808_53869));

//# sourceMappingURL=breaking_point.core.js.map
