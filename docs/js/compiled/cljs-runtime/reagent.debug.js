goog.provide('reagent.debug');
goog.require('cljs.core');
reagent.debug.has_console = (typeof console !== 'undefined');
reagent.debug.tracking = false;
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.warnings !== 'undefined')){
} else {
reagent.debug.warnings = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof reagent !== 'undefined') && (typeof reagent.debug !== 'undefined') && (typeof reagent.debug.track_console !== 'undefined')){
} else {
reagent.debug.track_console = (function (){var o = ({});
(o.warn = (function() { 
var G__76071__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"warn","warn",-436710552)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__76071 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76072__i = 0, G__76072__a = new Array(arguments.length -  0);
while (G__76072__i < G__76072__a.length) {G__76072__a[G__76072__i] = arguments[G__76072__i + 0]; ++G__76072__i;}
  args = new cljs.core.IndexedSeq(G__76072__a,0,null);
} 
return G__76071__delegate.call(this,args);};
G__76071.cljs$lang$maxFixedArity = 0;
G__76071.cljs$lang$applyTo = (function (arglist__76073){
var args = cljs.core.seq(arglist__76073);
return G__76071__delegate(args);
});
G__76071.cljs$core$IFn$_invoke$arity$variadic = G__76071__delegate;
return G__76071;
})()
);

(o.error = (function() { 
var G__76074__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032)], null),cljs.core.conj,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__76074 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__76075__i = 0, G__76075__a = new Array(arguments.length -  0);
while (G__76075__i < G__76075__a.length) {G__76075__a[G__76075__i] = arguments[G__76075__i + 0]; ++G__76075__i;}
  args = new cljs.core.IndexedSeq(G__76075__a,0,null);
} 
return G__76074__delegate.call(this,args);};
G__76074.cljs$lang$maxFixedArity = 0;
G__76074.cljs$lang$applyTo = (function (arglist__76076){
var args = cljs.core.seq(arglist__76076);
return G__76074__delegate(args);
});
G__76074.cljs$core$IFn$_invoke$arity$variadic = G__76074__delegate;
return G__76074;
})()
);

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
(reagent.debug.tracking = true);

cljs.core.reset_BANG_(reagent.debug.warnings,null);

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = cljs.core.deref(reagent.debug.warnings);
cljs.core.reset_BANG_(reagent.debug.warnings,null);

(reagent.debug.tracking = false);

return warns;
});

//# sourceMappingURL=reagent.debug.js.map
