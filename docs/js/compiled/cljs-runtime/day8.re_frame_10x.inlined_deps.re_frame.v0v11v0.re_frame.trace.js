goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers');
goog.require('goog.functions');
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.id = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = null;
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.reset_tracing_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$trace$reset_tracing_BANG_(){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.id,(0));
});
/**
 * @define {boolean}
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.trace_enabled_QMARK_ = goog.define("day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.trace_enabled_QMARK_",false);
/**
 * See https://groups.google.com/d/msg/clojurescript/jk43kmYiMhA/IHglVr_TPdgJ for more details
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$trace$is_trace_enabled_QMARK_(){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.trace_enabled_QMARK_;
});
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.trace_cbs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v11v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v11v0 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.next_delivery !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.next_delivery = cljs.core.atom.cljs$core$IFn$_invoke$arity$1((0));
}
/**
 * Registers a tracing callback function which will receive a collection of one or more traces.
 *   Will replace an existing callback function if it shares the same key.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.register_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$trace$register_trace_cb(key,f){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.trace_enabled_QMARK_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.trace_cbs,cljs.core.assoc,key,f);
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"warn","warn",-436710552),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Tracing is not enabled. Please set {\"re_frame.trace.trace_enabled_QMARK_\" true} in :closure-defines. See: https://github.com/day8/re-frame-10x#installation."], 0));
}
});
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.remove_trace_cb = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$trace$remove_trace_cb(key){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.trace_cbs,cljs.core.dissoc,key);

return null;
});
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.next_id = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$trace$next_id(){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.id,cljs.core.inc);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.start_trace = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$trace$start_trace(p__72004){
var map__72005 = p__72004;
var map__72005__$1 = (((((!((map__72005 == null))))?(((((map__72005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72005.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72005):map__72005);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72005__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72005__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72005__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72005__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.next_id(),new cljs.core.Keyword(null,"operation","operation",-1267664310),operation,new cljs.core.Keyword(null,"op-type","op-type",-1636141668),op_type,new cljs.core.Keyword(null,"tags","tags",1771418977),tags,new cljs.core.Keyword(null,"child-of","child-of",-903376662),(function (){var or__4185__auto__ = child_of;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_);
}
})(),new cljs.core.Keyword(null,"start","start",-355208981),day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now()], null);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.debounce_time = (50);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.debounce = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$trace$debounce(f,interval){
return goog.functions.debounce(f,interval);
});
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.schedule_debounce = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.debounce((function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$trace$tracing_cb_debounced(){
var seq__72008_72037 = cljs.core.seq(cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.trace_cbs));
var chunk__72009_72038 = null;
var count__72010_72039 = (0);
var i__72011_72040 = (0);
while(true){
if((i__72011_72040 < count__72010_72039)){
var vec__72023_72041 = chunk__72009_72038.cljs$core$IIndexed$_nth$arity$2(null,i__72011_72040);
var k_72042 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72023_72041,(0),null);
var cb_72043 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72023_72041,(1),null);
try{var G__72027_72044 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces);
(cb_72043.cljs$core$IFn$_invoke$arity$1 ? cb_72043.cljs$core$IFn$_invoke$arity$1(G__72027_72044) : cb_72043.call(null,G__72027_72044));
}catch (e72026){var e_72046 = e72026;
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_72042,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces),e_72046], 0));
}

var G__72049 = seq__72008_72037;
var G__72050 = chunk__72009_72038;
var G__72051 = count__72010_72039;
var G__72052 = (i__72011_72040 + (1));
seq__72008_72037 = G__72049;
chunk__72009_72038 = G__72050;
count__72010_72039 = G__72051;
i__72011_72040 = G__72052;
continue;
} else {
var temp__5735__auto___72053 = cljs.core.seq(seq__72008_72037);
if(temp__5735__auto___72053){
var seq__72008_72054__$1 = temp__5735__auto___72053;
if(cljs.core.chunked_seq_QMARK_(seq__72008_72054__$1)){
var c__4609__auto___72055 = cljs.core.chunk_first(seq__72008_72054__$1);
var G__72056 = cljs.core.chunk_rest(seq__72008_72054__$1);
var G__72057 = c__4609__auto___72055;
var G__72058 = cljs.core.count(c__4609__auto___72055);
var G__72059 = (0);
seq__72008_72037 = G__72056;
chunk__72009_72038 = G__72057;
count__72010_72039 = G__72058;
i__72011_72040 = G__72059;
continue;
} else {
var vec__72028_72060 = cljs.core.first(seq__72008_72054__$1);
var k_72061 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72028_72060,(0),null);
var cb_72062 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72028_72060,(1),null);
try{var G__72032_72063 = cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces);
(cb_72062.cljs$core$IFn$_invoke$arity$1 ? cb_72062.cljs$core$IFn$_invoke$arity$1(G__72032_72063) : cb_72062.call(null,G__72032_72063));
}catch (e72031){var e_72064 = e72031;
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_72061,"while storing",cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces),e_72064], 0));
}

var G__72065 = cljs.core.next(seq__72008_72054__$1);
var G__72066 = null;
var G__72067 = (0);
var G__72068 = (0);
seq__72008_72037 = G__72065;
chunk__72009_72038 = G__72066;
count__72010_72039 = G__72067;
i__72011_72040 = G__72068;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces,cljs.core.PersistentVector.EMPTY);
}),day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.debounce_time);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.run_tracing_callbacks_BANG_ = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$trace$run_tracing_callbacks_BANG_(now){
if(((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.next_delivery) - (25)) < now)){
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.schedule_debounce.cljs$core$IFn$_invoke$arity$0() : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.schedule_debounce.call(null));

return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.next_delivery,(now + day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.debounce_time));
} else {
return null;
}
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.js.map
