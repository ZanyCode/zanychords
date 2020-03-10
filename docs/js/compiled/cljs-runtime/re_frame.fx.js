goog.provide('re_frame.fx');
goog.require('cljs.core');
goog.require('re_frame.router');
goog.require('re_frame.db');
goog.require('re_frame.interceptor');
goog.require('re_frame.interop');
goog.require('re_frame.events');
goog.require('re_frame.registrar');
goog.require('re_frame.loggers');
goog.require('re_frame.trace');
re_frame.fx.kind = new cljs.core.Keyword(null,"fx","fx",-1237829572);
if(cljs.core.truth_((re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1 ? re_frame.registrar.kinds.cljs$core$IFn$_invoke$arity$1(re_frame.fx.kind) : re_frame.registrar.kinds.call(null,re_frame.fx.kind)))){
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
re_frame.fx.reg_fx = (function re_frame$fx$reg_fx(id,handler){
return re_frame.registrar.register_handler(re_frame.fx.kind,id,handler);
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
re_frame.fx.do_fx = re_frame.interceptor.__GT_interceptor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"do-fx","do-fx",1194163050),new cljs.core.Keyword(null,"after","after",594996914),(function re_frame$fx$do_fx_after(context){
if(re_frame.trace.is_trace_enabled_QMARK_()){
var _STAR_current_trace_STAR__orig_val__52533 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__52534 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__52534);

try{try{var seq__52535 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52536 = null;
var count__52537 = (0);
var i__52538 = (0);
while(true){
if((i__52538 < count__52537)){
var vec__52545 = chunk__52536.cljs$core$IIndexed$_nth$arity$2(null,i__52538);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52545,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52545,(1),null);
var temp__5733__auto___52616 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52616)){
var effect_fn_52617 = temp__5733__auto___52616;
(effect_fn_52617.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52617.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52617.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52618 = seq__52535;
var G__52619 = chunk__52536;
var G__52620 = count__52537;
var G__52621 = (i__52538 + (1));
seq__52535 = G__52618;
chunk__52536 = G__52619;
count__52537 = G__52620;
i__52538 = G__52621;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52535);
if(temp__5735__auto__){
var seq__52535__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52535__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52535__$1);
var G__52622 = cljs.core.chunk_rest(seq__52535__$1);
var G__52623 = c__4609__auto__;
var G__52624 = cljs.core.count(c__4609__auto__);
var G__52625 = (0);
seq__52535 = G__52622;
chunk__52536 = G__52623;
count__52537 = G__52624;
i__52538 = G__52625;
continue;
} else {
var vec__52551 = cljs.core.first(seq__52535__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52551,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52551,(1),null);
var temp__5733__auto___52626 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52626)){
var effect_fn_52627 = temp__5733__auto___52626;
(effect_fn_52627.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52627.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52627.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52628 = cljs.core.next(seq__52535__$1);
var G__52629 = null;
var G__52630 = (0);
var G__52631 = (0);
seq__52535 = G__52628;
chunk__52536 = G__52629;
count__52537 = G__52630;
i__52538 = G__52631;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__52236__auto___52632 = re_frame.interop.now();
var duration__52237__auto___52633 = (end__52236__auto___52632 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__52237__auto___52633,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__52236__auto___52632);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__52533);
}} else {
var seq__52554 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__52555 = null;
var count__52556 = (0);
var i__52557 = (0);
while(true){
if((i__52557 < count__52556)){
var vec__52567 = chunk__52555.cljs$core$IIndexed$_nth$arity$2(null,i__52557);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52567,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52567,(1),null);
var temp__5733__auto___52634 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52634)){
var effect_fn_52635 = temp__5733__auto___52634;
(effect_fn_52635.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52635.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52635.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52636 = seq__52554;
var G__52637 = chunk__52555;
var G__52638 = count__52556;
var G__52639 = (i__52557 + (1));
seq__52554 = G__52636;
chunk__52555 = G__52637;
count__52556 = G__52638;
i__52557 = G__52639;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52554);
if(temp__5735__auto__){
var seq__52554__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52554__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52554__$1);
var G__52640 = cljs.core.chunk_rest(seq__52554__$1);
var G__52641 = c__4609__auto__;
var G__52642 = cljs.core.count(c__4609__auto__);
var G__52643 = (0);
seq__52554 = G__52640;
chunk__52555 = G__52641;
count__52556 = G__52642;
i__52557 = G__52643;
continue;
} else {
var vec__52571 = cljs.core.first(seq__52554__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52571,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52571,(1),null);
var temp__5733__auto___52644 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___52644)){
var effect_fn_52645 = temp__5733__auto___52644;
(effect_fn_52645.cljs$core$IFn$_invoke$arity$1 ? effect_fn_52645.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_52645.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__52646 = cljs.core.next(seq__52554__$1);
var G__52647 = null;
var G__52648 = (0);
var G__52649 = (0);
seq__52554 = G__52646;
chunk__52555 = G__52647;
count__52556 = G__52648;
i__52557 = G__52649;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-later","dispatch-later",291951390),(function (value){
var seq__52578 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52579 = null;
var count__52580 = (0);
var i__52581 = (0);
while(true){
if((i__52581 < count__52580)){
var map__52588 = chunk__52579.cljs$core$IIndexed$_nth$arity$2(null,i__52581);
var map__52588__$1 = (((((!((map__52588 == null))))?(((((map__52588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52588):map__52588);
var effect = map__52588__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52588__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52588__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52578,chunk__52579,count__52580,i__52581,map__52588,map__52588__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52578,chunk__52579,count__52580,i__52581,map__52588,map__52588__$1,effect,ms,dispatch))
,ms);
}


var G__52650 = seq__52578;
var G__52651 = chunk__52579;
var G__52652 = count__52580;
var G__52653 = (i__52581 + (1));
seq__52578 = G__52650;
chunk__52579 = G__52651;
count__52580 = G__52652;
i__52581 = G__52653;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52578);
if(temp__5735__auto__){
var seq__52578__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52578__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52578__$1);
var G__52654 = cljs.core.chunk_rest(seq__52578__$1);
var G__52655 = c__4609__auto__;
var G__52656 = cljs.core.count(c__4609__auto__);
var G__52657 = (0);
seq__52578 = G__52654;
chunk__52579 = G__52655;
count__52580 = G__52656;
i__52581 = G__52657;
continue;
} else {
var map__52591 = cljs.core.first(seq__52578__$1);
var map__52591__$1 = (((((!((map__52591 == null))))?(((((map__52591.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52591.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52591):map__52591);
var effect = map__52591__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52591__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52591__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__52578,chunk__52579,count__52580,i__52581,map__52591,map__52591__$1,effect,ms,dispatch,seq__52578__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__52578,chunk__52579,count__52580,i__52581,map__52591,map__52591__$1,effect,ms,dispatch,seq__52578__$1,temp__5735__auto__))
,ms);
}


var G__52658 = cljs.core.next(seq__52578__$1);
var G__52659 = null;
var G__52660 = (0);
var G__52661 = (0);
seq__52578 = G__52658;
chunk__52579 = G__52659;
count__52580 = G__52660;
i__52581 = G__52661;
continue;
}
} else {
return null;
}
}
break;
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),(function (value){
if((!(cljs.core.vector_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch value. Expected a vector, but got:",value], 0));
} else {
return re_frame.router.dispatch(value);
}
}));
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),(function (value){
if((!(cljs.core.sequential_QMARK_(value)))){
return re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-n value. Expected a collection, but got:",value], 0));
} else {
var seq__52596 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__52597 = null;
var count__52598 = (0);
var i__52599 = (0);
while(true){
if((i__52599 < count__52598)){
var event = chunk__52597.cljs$core$IIndexed$_nth$arity$2(null,i__52599);
re_frame.router.dispatch(event);


var G__52662 = seq__52596;
var G__52663 = chunk__52597;
var G__52664 = count__52598;
var G__52665 = (i__52599 + (1));
seq__52596 = G__52662;
chunk__52597 = G__52663;
count__52598 = G__52664;
i__52599 = G__52665;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52596);
if(temp__5735__auto__){
var seq__52596__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52596__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52596__$1);
var G__52666 = cljs.core.chunk_rest(seq__52596__$1);
var G__52667 = c__4609__auto__;
var G__52668 = cljs.core.count(c__4609__auto__);
var G__52669 = (0);
seq__52596 = G__52666;
chunk__52597 = G__52667;
count__52598 = G__52668;
i__52599 = G__52669;
continue;
} else {
var event = cljs.core.first(seq__52596__$1);
re_frame.router.dispatch(event);


var G__52670 = cljs.core.next(seq__52596__$1);
var G__52671 = null;
var G__52672 = (0);
var G__52673 = (0);
seq__52596 = G__52670;
chunk__52597 = G__52671;
count__52598 = G__52672;
i__52599 = G__52673;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"deregister-event-handler","deregister-event-handler",-1096518994),(function (value){
var clear_event = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(re_frame.registrar.clear_handlers,re_frame.events.kind);
if(cljs.core.sequential_QMARK_(value)){
var seq__52608 = cljs.core.seq(value);
var chunk__52609 = null;
var count__52610 = (0);
var i__52611 = (0);
while(true){
if((i__52611 < count__52610)){
var event = chunk__52609.cljs$core$IIndexed$_nth$arity$2(null,i__52611);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52674 = seq__52608;
var G__52675 = chunk__52609;
var G__52676 = count__52610;
var G__52677 = (i__52611 + (1));
seq__52608 = G__52674;
chunk__52609 = G__52675;
count__52610 = G__52676;
i__52611 = G__52677;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__52608);
if(temp__5735__auto__){
var seq__52608__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__52608__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__52608__$1);
var G__52678 = cljs.core.chunk_rest(seq__52608__$1);
var G__52679 = c__4609__auto__;
var G__52680 = cljs.core.count(c__4609__auto__);
var G__52681 = (0);
seq__52608 = G__52678;
chunk__52609 = G__52679;
count__52610 = G__52680;
i__52611 = G__52681;
continue;
} else {
var event = cljs.core.first(seq__52608__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__52682 = cljs.core.next(seq__52608__$1);
var G__52683 = null;
var G__52684 = (0);
var G__52685 = (0);
seq__52608 = G__52682;
chunk__52609 = G__52683;
count__52610 = G__52684;
i__52611 = G__52685;
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
re_frame.fx.reg_fx(new cljs.core.Keyword(null,"db","db",993250759),(function (value){
if((!((cljs.core.deref(re_frame.db.app_db) === value)))){
return cljs.core.reset_BANG_(re_frame.db.app_db,value);
} else {
return null;
}
}));

//# sourceMappingURL=re_frame.fx.js.map
