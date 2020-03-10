goog.provide('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx');
goog.require('cljs.core');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.events');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers');
goog.require('day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace');
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind) : day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.kinds.call(null,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind)))){
} else {
throw (new Error("Assert failed: (re-frame.registrar/kinds kind)"));
}
/**
 * Register the given effect `handler` for the given `id`.
 * 
 *   `id` is keyword, often namespaced.
 *   `handler` is a side-effecting function which takes a single argument and whose return
 *   value is ignored.
 * 
 *   Example Use
 *   -----------
 * 
 *   First, registration ... associate `:effect2` with a handler.
 * 
 *   (reg-fx
 *   :effect2
 *   (fn [value]
 *      ... do something side-effect-y))
 * 
 *   Then, later, if an event handler were to return this effects map ...
 * 
 *   {...
 * :effect2  [1 2]}
 * 
 * ... then the `handler` `fn` we registered previously, using `reg-fx`, will be
 * called with an argument of `[1 2]`.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx = (function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$fx$reg_fx(id,handler){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.register_handler(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,id,handler);
});
/**
 * An interceptor whose `:after` actions the contents of `:effects`. As a result,
 *   this interceptor is Domino 3.
 * 
 *   This interceptor is silently added (by reg-event-db etc) to the front of
 *   interceptor chains for all events.
 * 
 *   For each key in `:effects` (a map), it calls the registered `effects handler`
 *   (see `reg-fx` for registration of effect handlers).
 * 
 *   So, if `:effects` was:
 *    {:dispatch  [:hello 42]
 *     :db        {...}
 *     :undo      "set flag"}
 * 
 *   it will call the registered effect handlers for each of the map's keys:
 *   `:dispatch`, `:undo` and `:db`. When calling each handler, provides the map
 *   value for that key - so in the example above the effect handler for :dispatch
 *   will be given one arg `[:hello 42]`.
 * 
 *   You cannot rely on the ordering in which effects are executed.
 */
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.do_fx = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function day8$re_frame_10x$inlined_deps$re_frame$v0v11v0$re_frame$fx$do_fx_after(context){
if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__44961 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__44962 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__44962);

try{try{var seq__44963 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__44964 = null;
var count__44965 = (0);
var i__44966 = (0);
while(true){
if((i__44966 < count__44965)){
var vec__44973 = chunk__44964.cljs$core$IIndexed$_nth$arity$2(null,i__44966);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44973,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44973,(1),null);
var temp__5733__auto___45041 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___45041)){
var effect_fn_45042 = temp__5733__auto___45041;
(effect_fn_45042.cljs$core$IFn$_invoke$arity$1 ? effect_fn_45042.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_45042.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__45043 = seq__44963;
var G__45044 = chunk__44964;
var G__45045 = count__44965;
var G__45046 = (i__44966 + (1));
seq__44963 = G__45043;
chunk__44964 = G__45044;
count__44965 = G__45045;
i__44966 = G__45046;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44963);
if(temp__5735__auto__){
var seq__44963__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44963__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__44963__$1);
var G__45047 = cljs.core.chunk_rest(seq__44963__$1);
var G__45048 = c__4609__auto__;
var G__45049 = cljs.core.count(c__4609__auto__);
var G__45050 = (0);
seq__44963 = G__45047;
chunk__44964 = G__45048;
count__44965 = G__45049;
i__44966 = G__45050;
continue;
} else {
var vec__44976 = cljs.core.first(seq__44963__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44976,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44976,(1),null);
var temp__5733__auto___45051 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___45051)){
var effect_fn_45052 = temp__5733__auto___45051;
(effect_fn_45052.cljs$core$IFn$_invoke$arity$1 ? effect_fn_45052.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_45052.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__45053 = cljs.core.next(seq__44963__$1);
var G__45054 = null;
var G__45055 = (0);
var G__45056 = (0);
seq__44963 = G__45053;
chunk__44964 = G__45054;
count__44965 = G__45055;
i__44966 = G__45056;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__44694__auto___45057 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now();
var duration__44695__auto___45058 = (end__44694__auto___45057 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__44695__auto___45058,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.run_tracing_callbacks_BANG_(end__44694__auto___45057);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__44961);
}} else {
var seq__44979 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__44980 = null;
var count__44981 = (0);
var i__44982 = (0);
while(true){
if((i__44982 < count__44981)){
var vec__44990 = chunk__44980.cljs$core$IIndexed$_nth$arity$2(null,i__44982);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44990,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44990,(1),null);
var temp__5733__auto___45059 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___45059)){
var effect_fn_45060 = temp__5733__auto___45059;
(effect_fn_45060.cljs$core$IFn$_invoke$arity$1 ? effect_fn_45060.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_45060.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__45061 = seq__44979;
var G__45062 = chunk__44980;
var G__45063 = count__44981;
var G__45064 = (i__44982 + (1));
seq__44979 = G__45061;
chunk__44980 = G__45062;
count__44981 = G__45063;
i__44982 = G__45064;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44979);
if(temp__5735__auto__){
var seq__44979__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44979__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__44979__$1);
var G__45065 = cljs.core.chunk_rest(seq__44979__$1);
var G__45066 = c__4609__auto__;
var G__45067 = cljs.core.count(c__4609__auto__);
var G__45068 = (0);
seq__44979 = G__45065;
chunk__44980 = G__45066;
count__44981 = G__45067;
i__44982 = G__45068;
continue;
} else {
var vec__44993 = cljs.core.first(seq__44979__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44993,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44993,(1),null);
var temp__5733__auto___45069 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___45069)){
var effect_fn_45070 = temp__5733__auto___45069;
(effect_fn_45070.cljs$core$IFn$_invoke$arity$1 ? effect_fn_45070.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_45070.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__45071 = cljs.core.next(seq__44979__$1);
var G__45072 = null;
var G__45073 = (0);
var G__45074 = (0);
seq__44979 = G__45071;
chunk__44980 = G__45072;
count__44981 = G__45073;
i__44982 = G__45074;
continue;
}
} else {
return null;
}
}
break;
}
}
})], 0));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__44996 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__44997 = null;
var count__44998 = (0);
var i__44999 = (0);
while(true){
if((i__44999 < count__44998)){
var map__45007 = chunk__44997.cljs$core$IIndexed$_nth$arity$2(null,i__44999);
var map__45007__$1 = (((((!((map__45007 == null))))?(((((map__45007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45007):map__45007);
var effect = map__45007__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45007__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45007__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__44996,chunk__44997,count__44998,i__44999,map__45007,map__45007__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__44996,chunk__44997,count__44998,i__44999,map__45007,map__45007__$1,effect,ms,dispatch))
,ms);
}


var G__45075 = seq__44996;
var G__45076 = chunk__44997;
var G__45077 = count__44998;
var G__45078 = (i__44999 + (1));
seq__44996 = G__45075;
chunk__44997 = G__45076;
count__44998 = G__45077;
i__44999 = G__45078;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__44996);
if(temp__5735__auto__){
var seq__44996__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__44996__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__44996__$1);
var G__45079 = cljs.core.chunk_rest(seq__44996__$1);
var G__45080 = c__4609__auto__;
var G__45081 = cljs.core.count(c__4609__auto__);
var G__45082 = (0);
seq__44996 = G__45079;
chunk__44997 = G__45080;
count__44998 = G__45081;
i__44999 = G__45082;
continue;
} else {
var map__45010 = cljs.core.first(seq__44996__$1);
var map__45010__$1 = (((((!((map__45010 == null))))?(((((map__45010.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__45010.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__45010):map__45010);
var effect = map__45010__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45010__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45010__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__44996,chunk__44997,count__44998,i__44999,map__45010,map__45010__$1,effect,ms,dispatch,seq__44996__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__44996,chunk__44997,count__44998,i__44999,map__45010,map__45010__$1,effect,ms,dispatch,seq__44996__$1,temp__5735__auto__))
,ms);
}


var G__45083 = cljs.core.next(seq__44996__$1);
var G__45084 = null;
var G__45085 = (0);
var G__45086 = (0);
seq__44996 = G__45083;
chunk__44997 = G__45084;
count__44998 = G__45085;
i__44999 = G__45086;
continue;
}
} else {
return null;
}
}
break;
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(value);
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__45012 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__45013 = null;
var count__45014 = (0);
var i__45015 = (0);
while(true){
if((i__45015 < count__45014)){
var event = chunk__45013.cljs$core$IIndexed$_nth$arity$2(null,i__45015);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__45087 = seq__45012;
var G__45088 = chunk__45013;
var G__45089 = count__45014;
var G__45090 = (i__45015 + (1));
seq__45012 = G__45087;
chunk__45013 = G__45088;
count__45014 = G__45089;
i__45015 = G__45090;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45012);
if(temp__5735__auto__){
var seq__45012__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45012__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45012__$1);
var G__45091 = cljs.core.chunk_rest(seq__45012__$1);
var G__45092 = c__4609__auto__;
var G__45093 = cljs.core.count(c__4609__auto__);
var G__45094 = (0);
seq__45012 = G__45091;
chunk__45013 = G__45092;
count__45014 = G__45093;
i__45015 = G__45094;
continue;
} else {
var event = cljs.core.first(seq__45012__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__45095 = cljs.core.next(seq__45012__$1);
var G__45096 = null;
var G__45097 = (0);
var G__45098 = (0);
seq__45012 = G__45095;
chunk__45013 = G__45096;
count__45014 = G__45097;
i__45015 = G__45098;
continue;
}
} else {
return null;
}
}
break;
}
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.clear_handlers,day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__45016 = cljs.core.seq(value);
var chunk__45017 = null;
var count__45018 = (0);
var i__45019 = (0);
while(true){
if((i__45019 < count__45018)){
var event = chunk__45017.cljs$core$IIndexed$_nth$arity$2(null,i__45019);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__45101 = seq__45016;
var G__45102 = chunk__45017;
var G__45103 = count__45018;
var G__45104 = (i__45019 + (1));
seq__45016 = G__45101;
chunk__45017 = G__45102;
count__45018 = G__45103;
i__45019 = G__45104;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__45016);
if(temp__5735__auto__){
var seq__45016__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__45016__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__45016__$1);
var G__45105 = cljs.core.chunk_rest(seq__45016__$1);
var G__45106 = c__4609__auto__;
var G__45107 = cljs.core.count(c__4609__auto__);
var G__45108 = (0);
seq__45016 = G__45105;
chunk__45017 = G__45106;
count__45018 = G__45107;
i__45019 = G__45108;
continue;
} else {
var event = cljs.core.first(seq__45016__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__45110 = cljs.core.next(seq__45016__$1);
var G__45111 = null;
var G__45112 = (0);
var G__45113 = (0);
seq__45016 = G__45110;
chunk__45017 = G__45111;
count__45018 = G__45112;
i__45019 = G__45113;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return (clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(value) : clear_event.call(null,value));
}
}));
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.js.map
