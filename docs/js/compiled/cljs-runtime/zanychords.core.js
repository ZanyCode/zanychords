goog.provide('zanychords.core');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('zanychords.events');
goog.require('zanychords.views');
goog.require('zanychords.config');
goog.require('kee_frame.core');
zanychords.core.dev_setup = (function zanychords$core$dev_setup(){
if(zanychords.config.debug_QMARK_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["dev mode"], 0));
} else {
return null;
}
});
zanychords.core.init = (function zanychords$core$init(){
var base_url = ((zanychords.config.debug_QMARK_)?"/":"/docs/");
return kee_frame.core.start_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"routes","routes",457900162),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [base_url,new cljs.core.Keyword(null,"progressions","progressions",-1495103424)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[base_url,"sessions"].join(''),new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[base_url,"practice"].join(''),new cljs.core.Keyword(null,"practice","practice",-1441219048)], null)], null),new cljs.core.Keyword(null,"initial-db","initial-db",1939835102),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"progressions","progressions",-1495103424),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"sessions","sessions",-699316392),cljs.core.PersistentVector.EMPTY], null),new cljs.core.Keyword(null,"root-component","root-component",-1807026475),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zanychords.views.main_panel], null),new cljs.core.Keyword(null,"debug?","debug?",-1831756173),true], null));
});
goog.exportSymbol('zanychords.core.init', zanychords.core.init);
var G__43572_43573 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zanychords.events","initialize-db","zanychords.events/initialize-db",1124617918)], null);
(re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__43572_43573) : re_frame.core.dispatch_sync.call(null,G__43572_43573));

//# sourceMappingURL=zanychords.core.js.map
