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
re_frame.trace.trace_enabled_QMARK_ = true;
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
re_frame.trace.start_trace = (function re_frame$trace$start_trace(p__76715){
var map__76716 = p__76715;
var map__76716__$1 = (((((!((map__76716 == null))))?(((((map__76716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__76716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__76716):map__76716);
var operation = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76716__$1,new cljs.core.Keyword(null,"operation","operation",-1267664310));
var op_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76716__$1,new cljs.core.Keyword(null,"op-type","op-type",-1636141668));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76716__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var child_of = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__76716__$1,new cljs.core.Keyword(null,"child-of","child-of",-903376662));
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
var seq__76718_76745 = cljs.core.seq(cljs.core.deref(re_frame.trace.trace_cbs));
var chunk__76719_76746 = null;
var count__76720_76747 = (0);
var i__76721_76748 = (0);
while(true){
if((i__76721_76748 < count__76720_76747)){
var vec__76732_76749 = chunk__76719_76746.cljs$core$IIndexed$_nth$arity$2(null,i__76721_76748);
var k_76750 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76732_76749,(0),null);
var cb_76751 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76732_76749,(1),null);
try{var G__76736_76752 = cljs.core.deref(re_frame.trace.traces);
(cb_76751.cljs$core$IFn$_invoke$arity$1 ? cb_76751.cljs$core$IFn$_invoke$arity$1(G__76736_76752) : cb_76751.call(null,G__76736_76752));
}catch (e76735){var e_76753 = e76735;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_76750,"while storing",cljs.core.deref(re_frame.trace.traces),e_76753], 0));
}

var G__76754 = seq__76718_76745;
var G__76755 = chunk__76719_76746;
var G__76756 = count__76720_76747;
var G__76757 = (i__76721_76748 + (1));
seq__76718_76745 = G__76754;
chunk__76719_76746 = G__76755;
count__76720_76747 = G__76756;
i__76721_76748 = G__76757;
continue;
} else {
var temp__5735__auto___76758 = cljs.core.seq(seq__76718_76745);
if(temp__5735__auto___76758){
var seq__76718_76759__$1 = temp__5735__auto___76758;
if(cljs.core.chunked_seq_QMARK_(seq__76718_76759__$1)){
var c__4609__auto___76760 = cljs.core.chunk_first(seq__76718_76759__$1);
var G__76761 = cljs.core.chunk_rest(seq__76718_76759__$1);
var G__76762 = c__4609__auto___76760;
var G__76763 = cljs.core.count(c__4609__auto___76760);
var G__76764 = (0);
seq__76718_76745 = G__76761;
chunk__76719_76746 = G__76762;
count__76720_76747 = G__76763;
i__76721_76748 = G__76764;
continue;
} else {
var vec__76737_76765 = cljs.core.first(seq__76718_76759__$1);
var k_76766 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76737_76765,(0),null);
var cb_76767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76737_76765,(1),null);
try{var G__76741_76768 = cljs.core.deref(re_frame.trace.traces);
(cb_76767.cljs$core$IFn$_invoke$arity$1 ? cb_76767.cljs$core$IFn$_invoke$arity$1(G__76741_76768) : cb_76767.call(null,G__76741_76768));
}catch (e76740){var e_76769 = e76740;
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Error thrown from trace cb",k_76766,"while storing",cljs.core.deref(re_frame.trace.traces),e_76769], 0));
}

var G__76770 = cljs.core.next(seq__76718_76759__$1);
var G__76771 = null;
var G__76772 = (0);
var G__76773 = (0);
seq__76718_76745 = G__76770;
chunk__76719_76746 = G__76771;
count__76720_76747 = G__76772;
i__76721_76748 = G__76773;
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
