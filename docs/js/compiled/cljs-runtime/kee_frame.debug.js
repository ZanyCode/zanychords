goog.provide('kee_frame.debug');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_frame.interceptor');
goog.require('clojure.data');
goog.require('kee_frame.state');
kee_frame.debug.debug_enabled_QMARK_ = (function kee_frame$debug$debug_enabled_QMARK_(p__84917){
var vec__84918 = p__84917;
var event_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84918,(0),null);
var map__84921 = cljs.core.deref(kee_frame.state.debug_config);
var map__84921__$1 = (((((!((map__84921 == null))))?(((((map__84921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84921):map__84921);
var blacklist = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84921__$1,new cljs.core.Keyword(null,"blacklist","blacklist",1248093170));
var events_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__84921__$1,new cljs.core.Keyword(null,"events?","events?",-780512682),true);
var and__4174__auto__ = cljs.core.deref(kee_frame.state.debug_QMARK_);
if(cljs.core.truth_(and__4174__auto__)){
var and__4174__auto____$1 = events_QMARK_;
if(cljs.core.truth_(and__4174__auto____$1)){
return cljs.core.not((function (){var and__4174__auto____$2 = blacklist;
if(cljs.core.truth_(and__4174__auto____$2)){
return (blacklist.cljs$core$IFn$_invoke$arity$1 ? blacklist.cljs$core$IFn$_invoke$arity$1(event_key) : blacklist.call(null,event_key));
} else {
return and__4174__auto____$2;
}
})());
} else {
return and__4174__auto____$1;
}
} else {
return and__4174__auto__;
}
});
kee_frame.debug.debug_interceptor = (function kee_frame$debug$debug_interceptor(debug_QMARK_){
return re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"before","before",-1633692388),(function kee_frame$debug$debug_interceptor_$_debug_before(context){
var event = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_(kee_frame.debug.debug_enabled_QMARK_(event))){
var G__84931_84966 = new cljs.core.Keyword(null,"log","log",-1595516004);
var G__84932_84967 = "Handling event ";
var G__84933_84968 = event;
(re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__84931_84966,G__84932_84967,G__84933_84968) : re_frame.core.console.call(null,G__84931_84966,G__84932_84967,G__84933_84968));
} else {
}

return context;
}),new cljs.core.Keyword(null,"after","after",594996914),(function kee_frame$debug$debug_interceptor_$_debug_after(context){
var event = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"event","event",301435442));
var orig_db = re_frame.interceptor.get_coeffect.cljs$core$IFn$_invoke$arity$2(context,new cljs.core.Keyword(null,"db","db",993250759));
var new_db = re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$3(context,new cljs.core.Keyword(null,"db","db",993250759),new cljs.core.Keyword("kee-frame.debug","not-found","kee-frame.debug/not-found",-1447708124));
var effects = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(re_frame.interceptor.get_effect.cljs$core$IFn$_invoke$arity$1(context),new cljs.core.Keyword(null,"db","db",993250759));
if(cljs.core.truth_((function (){var and__4174__auto__ = kee_frame.debug.debug_enabled_QMARK_(event);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.seq(effects);
} else {
return and__4174__auto__;
}
})())){
var G__84938_84970 = new cljs.core.Keyword(null,"log","log",-1595516004);
var G__84939_84971 = "Side effects caused by event ";
var G__84940_84972 = cljs.core.first(event);
var G__84941_84973 = ": ";
var G__84942_84974 = effects;
(re_frame.core.console.cljs$core$IFn$_invoke$arity$5 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$5(G__84938_84970,G__84939_84971,G__84940_84972,G__84941_84973,G__84942_84974) : re_frame.core.console.call(null,G__84938_84970,G__84939_84971,G__84940_84972,G__84941_84973,G__84942_84974));
} else {
}

if(cljs.core.truth_((function (){var and__4174__auto__ = kee_frame.debug.debug_enabled_QMARK_(event);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_db,new cljs.core.Keyword("kee-frame.debug","not-found","kee-frame.debug/not-found",-1447708124));
} else {
return and__4174__auto__;
}
})())){
var vec__84943_84975 = clojure.data.diff(orig_db,new_db);
var only_before_84976 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84943_84975,(0),null);
var only_after_84977 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84943_84975,(1),null);
var db_changed_QMARK__84978 = (((!((only_before_84976 == null)))) || ((!((only_after_84977 == null)))));
if(db_changed_QMARK__84978){
var G__84947_84979 = new cljs.core.Keyword(null,"group","group",582596132);
var G__84948_84980 = "db clojure.data/diff for:";
var G__84949_84981 = cljs.core.first(event);
(re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__84947_84979,G__84948_84980,G__84949_84981) : re_frame.core.console.call(null,G__84947_84979,G__84948_84980,G__84949_84981));

var G__84953_84982 = new cljs.core.Keyword(null,"log","log",-1595516004);
var G__84954_84983 = "only before:";
var G__84955_84984 = only_before_84976;
(re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__84953_84982,G__84954_84983,G__84955_84984) : re_frame.core.console.call(null,G__84953_84982,G__84954_84983,G__84955_84984));

var G__84956_84992 = new cljs.core.Keyword(null,"log","log",-1595516004);
var G__84957_84993 = "only after :";
var G__84958_84994 = only_after_84977;
(re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__84956_84992,G__84957_84993,G__84958_84994) : re_frame.core.console.call(null,G__84956_84992,G__84957_84993,G__84958_84994));

var G__84959_84995 = new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382);
(re_frame.core.console.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$1(G__84959_84995) : re_frame.core.console.call(null,G__84959_84995));
} else {
}
} else {
}

return context;
})], 0));
});

//# sourceMappingURL=kee_frame.debug.js.map
