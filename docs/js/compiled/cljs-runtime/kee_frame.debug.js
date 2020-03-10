goog.provide('kee_frame.debug');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('re_frame.interceptor');
goog.require('clojure.data');
goog.require('kee_frame.state');
kee_frame.debug.debug_enabled_QMARK_ = (function kee_frame$debug$debug_enabled_QMARK_(p__56465){
var vec__56466 = p__56465;
var event_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56466,(0),null);
var map__56469 = cljs.core.deref(kee_frame.state.debug_config);
var map__56469__$1 = (((((!((map__56469 == null))))?(((((map__56469.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56469.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56469):map__56469);
var blacklist = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56469__$1,new cljs.core.Keyword(null,"blacklist","blacklist",1248093170));
var events_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56469__$1,new cljs.core.Keyword(null,"events?","events?",-780512682),true);
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
var G__56473_56500 = new cljs.core.Keyword(null,"log","log",-1595516004);
var G__56474_56501 = "Handling event ";
var G__56475_56502 = event;
(re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__56473_56500,G__56474_56501,G__56475_56502) : re_frame.core.console.call(null,G__56473_56500,G__56474_56501,G__56475_56502));
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
var G__56476_56503 = new cljs.core.Keyword(null,"log","log",-1595516004);
var G__56477_56504 = "Side effects caused by event ";
var G__56478_56505 = cljs.core.first(event);
var G__56479_56506 = ": ";
var G__56480_56507 = effects;
(re_frame.core.console.cljs$core$IFn$_invoke$arity$5 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$5(G__56476_56503,G__56477_56504,G__56478_56505,G__56479_56506,G__56480_56507) : re_frame.core.console.call(null,G__56476_56503,G__56477_56504,G__56478_56505,G__56479_56506,G__56480_56507));
} else {
}

if(cljs.core.truth_((function (){var and__4174__auto__ = kee_frame.debug.debug_enabled_QMARK_(event);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_db,new cljs.core.Keyword("kee-frame.debug","not-found","kee-frame.debug/not-found",-1447708124));
} else {
return and__4174__auto__;
}
})())){
var vec__56481_56509 = clojure.data.diff(orig_db,new_db);
var only_before_56510 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56481_56509,(0),null);
var only_after_56511 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56481_56509,(1),null);
var db_changed_QMARK__56512 = (((!((only_before_56510 == null)))) || ((!((only_after_56511 == null)))));
if(db_changed_QMARK__56512){
var G__56485_56513 = new cljs.core.Keyword(null,"group","group",582596132);
var G__56486_56514 = "db clojure.data/diff for:";
var G__56487_56515 = cljs.core.first(event);
(re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__56485_56513,G__56486_56514,G__56487_56515) : re_frame.core.console.call(null,G__56485_56513,G__56486_56514,G__56487_56515));

var G__56488_56517 = new cljs.core.Keyword(null,"log","log",-1595516004);
var G__56489_56518 = "only before:";
var G__56490_56519 = only_before_56510;
(re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__56488_56517,G__56489_56518,G__56490_56519) : re_frame.core.console.call(null,G__56488_56517,G__56489_56518,G__56490_56519));

var G__56491_56523 = new cljs.core.Keyword(null,"log","log",-1595516004);
var G__56492_56524 = "only after :";
var G__56493_56525 = only_after_56511;
(re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__56491_56523,G__56492_56524,G__56493_56525) : re_frame.core.console.call(null,G__56491_56523,G__56492_56524,G__56493_56525));

var G__56498_56526 = new cljs.core.Keyword(null,"groupEnd","groupEnd",-337721382);
(re_frame.core.console.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$1(G__56498_56526) : re_frame.core.console.call(null,G__56498_56526));
} else {
}
} else {
}

return context;
})], 0));
});

//# sourceMappingURL=kee_frame.debug.js.map
