goog.provide('re_frame.trace');
goog.require('cljs.core');
goog.require('re_frame.interop');
goog.require('re_frame.loggers');
goog.require('goog.functions');
re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
re_frame.trace._STAR_current_trace_STAR_ = null;
re_frame.trace.reset_tracing_BANG_ = (function re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
re_frame.trace.trace_enabled_QMARK_ = goog.define("re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
re_frame.trace.is_trace_enabled_QMARK_ = (function re_frame$trace$is_trace_enabled_QMARK_(){
return re_frame.trace.trace_enabled_QMARK_;
});
re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.traces !== 'undefined')){
} else {
re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof re_frame !== 'undefined') && (typeof re_frame.trace !== 'undefined') && (typeof re_frame.trace.next_delivery !== 'undefined')){
} else {
re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
re_frame.trace.register_trace_cb = (function re_frame$trace$register_trace_cb(key,f){
if(re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
re_frame.trace.remove_trace_cb = (function re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
re_frame.trace.next_id = (function re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(re_frame.trace.id,cljs.core.inc);
});
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__52256){
var map__52257 = p__52256;
var map__52257__$1 = (((((!((map__52257 == null))))?(((((map__52257.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52257.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52257):map__52257);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52257__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52257__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52257__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52257__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),re_frame.interop.now()], null);
});
re_frame.trace.debounce_time = (50);
re_frame.trace.debounce = (function re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
re_frame.trace.schedule_debounce = re_frame.trace.debounce((function re_frame$trace$tracing_cb_debounced(){
var seq__52259_52299 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__52260_52300 = null;
var count__52261_52301 = (0);
var i__52262_52302 = (0);
while(true){
if((i__52262_52302 < count__52261_52301)){
var vec__52273_52303 = chunk__52260_52300.cljs$core$IIndexed$_nth$arity$2(null,i__52262_52302);
var k_52304 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52273_52303,(0),null);
var cb_52305 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52273_52303,(1),null);
try{var G__52277_52306 = cljs.core.deref(re_frame.trace.traces);
(cb_52305.cljs$core$IFn$_invoke$arity$1 ? cb_52305.cljs$core$IFn$_invoke$arity$1(G__52277_52306) : cb_52305.call(null,G__52277_52306));
}catch (e52276){var e_52310 = e52276;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_52304,"while storing",cljs.core.deref(re_frame.trace.traces),e_52310], 0));
}

var G__52311 = seq__52259_52299;
var G__52312 = chunk__52260_52300;
var G__52313 = count__52261_52301;
var G__52314 = (i__52262_52302 + (1));
seq__52259_52299 = G__52311;
chunk__52260_52300 = G__52312;
count__52261_52301 = G__52313;
i__52262_52302 = G__52314;
continue;
} else {
var temp__5735__auto___52315 = cljs.core.seq(seq__52259_52299);
if(temp__5735__auto___52315){
var seq__52259_52316__$1 = temp__5735__auto___52315;
if(cljs.core.chunked_seq_QMARK_(seq__52259_52316__$1)){
var c__4609__auto___52317 = cljs.core.chunk_first(seq__52259_52316__$1);
var G__52318 = cljs.core.chunk_rest(seq__52259_52316__$1);
var G__52319 = c__4609__auto___52317;
var G__52320 = cljs.core.count(c__4609__auto___52317);
var G__52321 = (0);
seq__52259_52299 = G__52318;
chunk__52260_52300 = G__52319;
count__52261_52301 = G__52320;
i__52262_52302 = G__52321;
continue;
} else {
var vec__52278_52322 = cljs.core.first(seq__52259_52316__$1);
var k_52323 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52278_52322,(0),null);
var cb_52324 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52278_52322,(1),null);
try{var G__52282_52325 = cljs.core.deref(re_frame.trace.traces);
(cb_52324.cljs$core$IFn$_invoke$arity$1 ? cb_52324.cljs$core$IFn$_invoke$arity$1(G__52282_52325) : cb_52324.call(null,G__52282_52325));
}catch (e52281){var e_52326 = e52281;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_52323,"while storing",cljs.core.deref(re_frame.trace.traces),e_52326], 0));
}

var G__52327 = cljs.core.next(seq__52259_52316__$1);
var G__52328 = null;
var G__52329 = (0);
var G__52330 = (0);
seq__52259_52299 = G__52327;
chunk__52260_52300 = G__52328;
count__52261_52301 = G__52329;
i__52262_52302 = G__52330;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),re_frame.trace.debounce_time);
re_frame.trace.run_tracing_callbacks_BANG_ = (function re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(re_frame.trace.next_delivery) - (25)) < now)){
(re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(re_frame.trace.next_delivery,(now + re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=re_frame.trace.js.map
