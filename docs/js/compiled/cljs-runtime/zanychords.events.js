goog.provide('zanychords.events');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('zanychords.db');
goog.require('clojure.string');
goog.require('akiroz.re_frame.storage');
zanychords.events.reg_event_db_localstorage = (function zanychords$events$reg_event_db_localstorage(event_id,handler){
return re_frame.core.reg_event_fx.cljs$core$IFn$_invoke$arity$3(event_id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [akiroz.re_frame.storage.persist_db_keys(new cljs.core.Keyword(null,"zanychords","zanychords",1010344094),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progressions","progressions",-1495103424),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null))], null),(function (p__41879,event_vec){
var map__41880 = p__41879;
var map__41880__$1 = (((((!((map__41880 == null))))?(((((map__41880.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41880.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41880):map__41880);
var db = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41880__$1,new cljs.core.Keyword(null,"db","db",993250759));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"db","db",993250759),(handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(db,event_vec) : handler.call(null,db,event_vec))], null);
}));
});
zanychords.events.reg_event_db_localstorage(new cljs.core.Keyword("zanychords.events","initialize-db","zanychords.events/initialize-db",1124617918),(function (db,_){
return db;
}));
zanychords.events.reg_event_db_localstorage(new cljs.core.Keyword("zanychords.events","add-progression","zanychords.events/add-progression",-531465776),(function (db,p__41936){
var vec__41937 = p__41936;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41937,(0),null);
var progression = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41937,(1),null);
zanychords.events.progression_updated = cljs.core.update.cljs$core$IFn$_invoke$arity$3(progression,new cljs.core.Keyword(null,"chords","chords",234981817),(function (p1__41934_SHARP_){
return clojure.string.split.cljs$core$IFn$_invoke$arity$2(p1__41934_SHARP_,/,/);
}));

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"progressions","progressions",-1495103424),(function (p1__41935_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__41935_SHARP_,zanychords.events.progression_updated);
}));
}));
zanychords.events.reg_event_db_localstorage(new cljs.core.Keyword("zanychords.events","add-session","zanychords.events/add-session",-79915587),(function (db,p__41941){
var vec__41942 = p__41941;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41942,(0),null);
var session = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41942,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sessions","sessions",-699316392),(function (p1__41940_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__41940_SHARP_,session);
}));
}));
zanychords.events.reg_event_db_localstorage(new cljs.core.Keyword("zanychords.events","delete-progression","zanychords.events/delete-progression",-1672731664),(function (db,p__41946){
var vec__41947 = p__41946;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41947,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41947,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"progressions","progressions",-1495103424),(function (p1__41945_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p),title);
}),p1__41945_SHARP_);
}));
}));
zanychords.events.reg_event_db_localstorage(new cljs.core.Keyword("zanychords.events","delete-session","zanychords.events/delete-session",30737953),(function (db,p__41951){
var vec__41952 = p__41951;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41952,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__41952,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(db,new cljs.core.Keyword(null,"sessions","sessions",-699316392),(function (p1__41950_SHARP_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p),title);
}),p1__41950_SHARP_);
}));
}));

//# sourceMappingURL=zanychords.events.js.map
