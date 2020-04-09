goog.provide('zanychords.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('zanychords.db');
goog.require('clojure.string');
goog.require('akiroz.re_frame.storage');
zanychords.events.reg_event_db_localstorage = (function zanychords$events$reg_event_db_localstorage(event_id,handler){
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(event_id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiroz.re_frame.storage.persist_db_keys(new cljs.core.Keyword(null,"zanychords","zanychords",1010344094),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progressions","progressions",-1495103424),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null))], null),(function (p__83073,event_vec){
var map__83074 = p__83073;
var map__83074__$1 = (((((!((map__83074 == null))))?(((((map__83074.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83074.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83074):map__83074);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83074__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(db,event_vec) : handler.call(null,db,event_vec))], null);
}));
});
zanychords.events.reg_event_db_localstorage(new cljs.core.Keyword("zanychords.events","initialize-db","zanychords.events/initialize-db",1124617918),(function (db,_){
return db;
}));
zanychords.events.reg_event_db_localstorage(new cljs.core.Keyword("zanychords.events","add-progression","zanychords.events/add-progression",-531465776),(function (db,p__83079){
var vec__83080 = p__83079;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83080,(0),null);
var progression = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83080,(1),null);
zanychords.events.progression_updated = cljs.core.update.cljs$core$IFn$_invoke$arity$3(progression,new cljs.core.Keyword(null,"chords","chords",234981817),(function (p1__83077_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__83077_SHARP_,/,/);
}));

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"progressions","progressions",-1495103424),(function (p1__83078_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__83078_SHARP_,zanychords.events.progression_updated);
}));
}));
zanychords.events.reg_event_db_localstorage(new cljs.core.Keyword("zanychords.events","add-session","zanychords.events/add-session",-79915587),(function (db,p__83084){
var vec__83085 = p__83084;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83085,(0),null);
var session = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83085,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sessions","sessions",-699316392),(function (p1__83083_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__83083_SHARP_,session);
}));
}));
zanychords.events.reg_event_db_localstorage(new cljs.core.Keyword("zanychords.events","delete-progression","zanychords.events/delete-progression",-1672731664),(function (db,p__83089){
var vec__83090 = p__83089;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83090,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83090,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"progressions","progressions",-1495103424),(function (p1__83088_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p),title);
}),p1__83088_SHARP_);
}));
}));
zanychords.events.reg_event_db_localstorage(new cljs.core.Keyword("zanychords.events","delete-session","zanychords.events/delete-session",30737953),(function (db,p__83095){
var vec__83096 = p__83095;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83096,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83096,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sessions","sessions",-699316392),(function (p1__83094_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p),title);
}),p1__83094_SHARP_);
}));
}));

//# sourceMappingURL=zanychords.events.js.map
