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
var _STAR_current_trace_STAR__orig_val__72254 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__72255 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__72255);

try{try{var seq__72256 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__72257 = null;
var count__72258 = (0);
var i__72259 = (0);
while(true){
if((i__72259 < count__72258)){
var vec__72267 = chunk__72257.cljs$core$IIndexed$_nth$arity$2(null,i__72259);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72267,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72267,(1),null);
var temp__5733__auto___72342 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___72342)){
var effect_fn_72343 = temp__5733__auto___72342;
(effect_fn_72343.cljs$core$IFn$_invoke$arity$1 ? effect_fn_72343.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_72343.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__72344 = seq__72256;
var G__72345 = chunk__72257;
var G__72346 = count__72258;
var G__72347 = (i__72259 + (1));
seq__72256 = G__72344;
chunk__72257 = G__72345;
count__72258 = G__72346;
i__72259 = G__72347;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__72256);
if(temp__5735__auto__){
var seq__72256__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72256__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__72256__$1);
var G__72348 = cljs.core.chunk_rest(seq__72256__$1);
var G__72349 = c__4609__auto__;
var G__72350 = cljs.core.count(c__4609__auto__);
var G__72351 = (0);
seq__72256 = G__72348;
chunk__72257 = G__72349;
count__72258 = G__72350;
i__72259 = G__72351;
continue;
} else {
var vec__72272 = cljs.core.first(seq__72256__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72272,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72272,(1),null);
var temp__5733__auto___72352 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___72352)){
var effect_fn_72353 = temp__5733__auto___72352;
(effect_fn_72353.cljs$core$IFn$_invoke$arity$1 ? effect_fn_72353.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_72353.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__72354 = cljs.core.next(seq__72256__$1);
var G__72355 = null;
var G__72356 = (0);
var G__72357 = (0);
seq__72256 = G__72354;
chunk__72257 = G__72355;
count__72258 = G__72356;
i__72259 = G__72357;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.is_trace_enabled_QMARK_()){
var end__40205__auto___72358 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now();
var duration__40206__auto___72359 = (end__40205__auto___72358 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__40206__auto___72359,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.now()], 0)));

day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace.run_tracing_callbacks_BANG_(end__40205__auto___72358);
} else {
}
}}finally {(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__72254);
}} else {
var seq__72275 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__72276 = null;
var count__72277 = (0);
var i__72278 = (0);
while(true){
if((i__72278 < count__72277)){
var vec__72285 = chunk__72276.cljs$core$IIndexed$_nth$arity$2(null,i__72278);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72285,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72285,(1),null);
var temp__5733__auto___72362 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___72362)){
var effect_fn_72363 = temp__5733__auto___72362;
(effect_fn_72363.cljs$core$IFn$_invoke$arity$1 ? effect_fn_72363.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_72363.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__72367 = seq__72275;
var G__72368 = chunk__72276;
var G__72369 = count__72277;
var G__72370 = (i__72278 + (1));
seq__72275 = G__72367;
chunk__72276 = G__72368;
count__72277 = G__72369;
i__72278 = G__72370;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__72275);
if(temp__5735__auto__){
var seq__72275__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72275__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__72275__$1);
var G__72371 = cljs.core.chunk_rest(seq__72275__$1);
var G__72372 = c__4609__auto__;
var G__72373 = cljs.core.count(c__4609__auto__);
var G__72374 = (0);
seq__72275 = G__72371;
chunk__72276 = G__72372;
count__72277 = G__72373;
i__72278 = G__72374;
continue;
} else {
var vec__72289 = cljs.core.first(seq__72275__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72289,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72289,(1),null);
var temp__5733__auto___72375 = day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___72375)){
var effect_fn_72376 = temp__5733__auto___72375;
(effect_fn_72376.cljs$core$IFn$_invoke$arity$1 ? effect_fn_72376.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_72376.call(null,effect_value));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__72377 = cljs.core.next(seq__72275__$1);
var G__72378 = null;
var G__72379 = (0);
var G__72380 = (0);
seq__72275 = G__72377;
chunk__72276 = G__72378;
count__72277 = G__72379;
i__72278 = G__72380;
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
var seq__72295 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__72296 = null;
var count__72297 = (0);
var i__72298 = (0);
while(true){
if((i__72298 < count__72297)){
var map__72315 = chunk__72296.cljs$core$IIndexed$_nth$arity$2(null,i__72298);
var map__72315__$1 = (((((!((map__72315 == null))))?(((((map__72315.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72315.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72315):map__72315);
var effect = map__72315__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72315__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72315__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__72295,chunk__72296,count__72297,i__72298,map__72315,map__72315__$1,effect,ms,dispatch){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__72295,chunk__72296,count__72297,i__72298,map__72315,map__72315__$1,effect,ms,dispatch))
,ms);
}


var G__72381 = seq__72295;
var G__72382 = chunk__72296;
var G__72383 = count__72297;
var G__72384 = (i__72298 + (1));
seq__72295 = G__72381;
chunk__72296 = G__72382;
count__72297 = G__72383;
i__72298 = G__72384;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__72295);
if(temp__5735__auto__){
var seq__72295__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72295__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__72295__$1);
var G__72385 = cljs.core.chunk_rest(seq__72295__$1);
var G__72386 = c__4609__auto__;
var G__72387 = cljs.core.count(c__4609__auto__);
var G__72388 = (0);
seq__72295 = G__72385;
chunk__72296 = G__72386;
count__72297 = G__72387;
i__72298 = G__72388;
continue;
} else {
var map__72323 = cljs.core.first(seq__72295__$1);
var map__72323__$1 = (((((!((map__72323 == null))))?(((((map__72323.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__72323.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__72323):map__72323);
var effect = map__72323__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72323__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72323__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.interop.set_timeout_BANG_(((function (seq__72295,chunk__72296,count__72297,i__72298,map__72323,map__72323__$1,effect,ms,dispatch,seq__72295__$1,temp__5735__auto__){
return (function (){
return day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(dispatch);
});})(seq__72295,chunk__72296,count__72297,i__72298,map__72323,map__72323__$1,effect,ms,dispatch,seq__72295__$1,temp__5735__auto__))
,ms);
}


var G__72389 = cljs.core.next(seq__72295__$1);
var G__72390 = null;
var G__72391 = (0);
var G__72392 = (0);
seq__72295 = G__72389;
chunk__72296 = G__72390;
count__72297 = G__72391;
i__72298 = G__72392;
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
var seq__72329 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__72330 = null;
var count__72331 = (0);
var i__72332 = (0);
while(true){
if((i__72332 < count__72331)){
var event = chunk__72330.cljs$core$IIndexed$_nth$arity$2(null,i__72332);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__72397 = seq__72329;
var G__72398 = chunk__72330;
var G__72399 = count__72331;
var G__72400 = (i__72332 + (1));
seq__72329 = G__72397;
chunk__72330 = G__72398;
count__72331 = G__72399;
i__72332 = G__72400;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__72329);
if(temp__5735__auto__){
var seq__72329__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72329__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__72329__$1);
var G__72401 = cljs.core.chunk_rest(seq__72329__$1);
var G__72402 = c__4609__auto__;
var G__72403 = cljs.core.count(c__4609__auto__);
var G__72404 = (0);
seq__72329 = G__72401;
chunk__72330 = G__72402;
count__72331 = G__72403;
i__72332 = G__72404;
continue;
} else {
var event = cljs.core.first(seq__72329__$1);
day8.re_frame_10x.inlined_deps.re_frame.v0v11v0.re_frame.router.dispatch(event);


var G__72405 = cljs.core.next(seq__72329__$1);
var G__72406 = null;
var G__72407 = (0);
var G__72408 = (0);
seq__72329 = G__72405;
chunk__72330 = G__72406;
count__72331 = G__72407;
i__72332 = G__72408;
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
var seq__72337 = cljs.core.seq(value);
var chunk__72338 = null;
var count__72339 = (0);
var i__72340 = (0);
while(true){
if((i__72340 < count__72339)){
var event = chunk__72338.cljs$core$IIndexed$_nth$arity$2(null,i__72340);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__72409 = seq__72337;
var G__72410 = chunk__72338;
var G__72411 = count__72339;
var G__72412 = (i__72340 + (1));
seq__72337 = G__72409;
chunk__72338 = G__72410;
count__72339 = G__72411;
i__72340 = G__72412;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__72337);
if(temp__5735__auto__){
var seq__72337__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__72337__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__72337__$1);
var G__72413 = cljs.core.chunk_rest(seq__72337__$1);
var G__72414 = c__4609__auto__;
var G__72415 = cljs.core.count(c__4609__auto__);
var G__72416 = (0);
seq__72337 = G__72413;
chunk__72338 = G__72414;
count__72339 = G__72415;
i__72340 = G__72416;
continue;
} else {
var event = cljs.core.first(seq__72337__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__72419 = cljs.core.next(seq__72337__$1);
var G__72420 = null;
var G__72421 = (0);
var G__72422 = (0);
seq__72337 = G__72419;
chunk__72338 = G__72420;
count__72339 = G__72421;
i__72340 = G__72422;
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
