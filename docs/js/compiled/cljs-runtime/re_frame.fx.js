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
var _STAR_current_trace_STAR__orig_val__76954 = re_frame.trace._STAR_current_trace_STAR_;
var _STAR_current_trace_STAR__temp_val__76955 = re_frame.trace.start_trace(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op-type","op-type",-1636141668),new cljs.core.Keyword("event","do-fx","event/do-fx",1357330452)], null));
(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__temp_val__76955);

try{try{var seq__76956 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__76957 = null;
var count__76958 = (0);
var i__76959 = (0);
while(true){
if((i__76959 < count__76958)){
var vec__76968 = chunk__76957.cljs$core$IIndexed$_nth$arity$2(null,i__76959);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76968,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76968,(1),null);
var temp__5733__auto___77033 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___77033)){
var effect_fn_77034 = temp__5733__auto___77033;
(effect_fn_77034.cljs$core$IFn$_invoke$arity$1 ? effect_fn_77034.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_77034.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__77035 = seq__76956;
var G__77036 = chunk__76957;
var G__77037 = count__76958;
var G__77038 = (i__76959 + (1));
seq__76956 = G__77035;
chunk__76957 = G__77036;
count__76958 = G__77037;
i__76959 = G__77038;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__76956);
if(temp__5735__auto__){
var seq__76956__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__76956__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__76956__$1);
var G__77039 = cljs.core.chunk_rest(seq__76956__$1);
var G__77040 = c__4609__auto__;
var G__77041 = cljs.core.count(c__4609__auto__);
var G__77042 = (0);
seq__76956 = G__77039;
chunk__76957 = G__77040;
count__76958 = G__77041;
i__76959 = G__77042;
continue;
} else {
var vec__76974 = cljs.core.first(seq__76956__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76974,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76974,(1),null);
var temp__5733__auto___77043 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___77043)){
var effect_fn_77044 = temp__5733__auto___77043;
(effect_fn_77044.cljs$core$IFn$_invoke$arity$1 ? effect_fn_77044.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_77044.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__77045 = cljs.core.next(seq__76956__$1);
var G__77046 = null;
var G__77047 = (0);
var G__77048 = (0);
seq__76956 = G__77045;
chunk__76957 = G__77046;
count__76958 = G__77047;
i__76959 = G__77048;
continue;
}
} else {
return null;
}
}
break;
}
}finally {if(re_frame.trace.is_trace_enabled_QMARK_()){
var end__40412__auto___77049 = re_frame.interop.now();
var duration__40413__auto___77050 = (end__40412__auto___77049 - new cljs.core.Keyword(null,"start","start",-355208981).cljs$core$IFn$_invoke$arity$1(re_frame.trace._STAR_current_trace_STAR_));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame.trace.traces,cljs.core.conj,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(re_frame.trace._STAR_current_trace_STAR_,new cljs.core.Keyword(null,"duration","duration",1444101068),duration__40413__auto___77050,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"end","end",-268185958),re_frame.interop.now()], 0)));

re_frame.trace.run_tracing_callbacks_BANG_(end__40412__auto___77049);
} else {
}
}}finally {(re_frame.trace._STAR_current_trace_STAR_ = _STAR_current_trace_STAR__orig_val__76954);
}} else {
var seq__76977 = cljs.core.seq(new cljs.core.Keyword(null,"effects","effects",-282369292).cljs$core$IFn$_invoke$arity$1(context));
var chunk__76978 = null;
var count__76979 = (0);
var i__76980 = (0);
while(true){
if((i__76980 < count__76979)){
var vec__76990 = chunk__76978.cljs$core$IIndexed$_nth$arity$2(null,i__76980);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76990,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76990,(1),null);
var temp__5733__auto___77051 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___77051)){
var effect_fn_77052 = temp__5733__auto___77051;
(effect_fn_77052.cljs$core$IFn$_invoke$arity$1 ? effect_fn_77052.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_77052.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__77053 = seq__76977;
var G__77054 = chunk__76978;
var G__77055 = count__76979;
var G__77056 = (i__76980 + (1));
seq__76977 = G__77053;
chunk__76978 = G__77054;
count__76979 = G__77055;
i__76980 = G__77056;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__76977);
if(temp__5735__auto__){
var seq__76977__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__76977__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__76977__$1);
var G__77057 = cljs.core.chunk_rest(seq__76977__$1);
var G__77058 = c__4609__auto__;
var G__77059 = cljs.core.count(c__4609__auto__);
var G__77060 = (0);
seq__76977 = G__77057;
chunk__76978 = G__77058;
count__76979 = G__77059;
i__76980 = G__77060;
continue;
} else {
var vec__76995 = cljs.core.first(seq__76977__$1);
var effect_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76995,(0),null);
var effect_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__76995,(1),null);
var temp__5733__auto___77061 = re_frame.registrar.get_handler.cljs$core$IFn$_invoke$arity$3(re_frame.fx.kind,effect_key,false);
if(cljs.core.truth_(temp__5733__auto___77061)){
var effect_fn_77062 = temp__5733__auto___77061;
(effect_fn_77062.cljs$core$IFn$_invoke$arity$1 ? effect_fn_77062.cljs$core$IFn$_invoke$arity$1(effect_value) : effect_fn_77062.call(null,effect_value));
} else {
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: no handler registered for effect:",effect_key,". Ignoring."], 0));
}


var G__77063 = cljs.core.next(seq__76977__$1);
var G__77064 = null;
var G__77065 = (0);
var G__77066 = (0);
seq__76977 = G__77063;
chunk__76978 = G__77064;
count__76979 = G__77065;
i__76980 = G__77066;
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
var seq__77000 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__77001 = null;
var count__77002 = (0);
var i__77003 = (0);
while(true){
if((i__77003 < count__77002)){
var map__77008 = chunk__77001.cljs$core$IIndexed$_nth$arity$2(null,i__77003);
var map__77008__$1 = (((((!((map__77008 == null))))?(((((map__77008.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77008.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77008):map__77008);
var effect = map__77008__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77008__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77008__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__77000,chunk__77001,count__77002,i__77003,map__77008,map__77008__$1,effect,ms,dispatch){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__77000,chunk__77001,count__77002,i__77003,map__77008,map__77008__$1,effect,ms,dispatch))
,ms);
}


var G__77067 = seq__77000;
var G__77068 = chunk__77001;
var G__77069 = count__77002;
var G__77070 = (i__77003 + (1));
seq__77000 = G__77067;
chunk__77001 = G__77068;
count__77002 = G__77069;
i__77003 = G__77070;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__77000);
if(temp__5735__auto__){
var seq__77000__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77000__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__77000__$1);
var G__77071 = cljs.core.chunk_rest(seq__77000__$1);
var G__77072 = c__4609__auto__;
var G__77073 = cljs.core.count(c__4609__auto__);
var G__77074 = (0);
seq__77000 = G__77071;
chunk__77001 = G__77072;
count__77002 = G__77073;
i__77003 = G__77074;
continue;
} else {
var map__77011 = cljs.core.first(seq__77000__$1);
var map__77011__$1 = (((((!((map__77011 == null))))?(((((map__77011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__77011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__77011):map__77011);
var effect = map__77011__$1;
var ms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77011__$1,new cljs.core.Keyword(null,"ms","ms",-1152709733));
var dispatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77011__$1,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009));
if(((cljs.core.empty_QMARK_(dispatch)) || ((!(typeof ms === 'number'))))){
re_frame.loggers.console.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["re-frame: ignoring bad :dispatch-later value:",effect], 0));
} else {
re_frame.interop.set_timeout_BANG_(((function (seq__77000,chunk__77001,count__77002,i__77003,map__77011,map__77011__$1,effect,ms,dispatch,seq__77000__$1,temp__5735__auto__){
return (function (){
return re_frame.router.dispatch(dispatch);
});})(seq__77000,chunk__77001,count__77002,i__77003,map__77011,map__77011__$1,effect,ms,dispatch,seq__77000__$1,temp__5735__auto__))
,ms);
}


var G__77075 = cljs.core.next(seq__77000__$1);
var G__77076 = null;
var G__77077 = (0);
var G__77078 = (0);
seq__77000 = G__77075;
chunk__77001 = G__77076;
count__77002 = G__77077;
i__77003 = G__77078;
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
var seq__77013 = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,value));
var chunk__77014 = null;
var count__77015 = (0);
var i__77016 = (0);
while(true){
if((i__77016 < count__77015)){
var event = chunk__77014.cljs$core$IIndexed$_nth$arity$2(null,i__77016);
re_frame.router.dispatch(event);


var G__77079 = seq__77013;
var G__77080 = chunk__77014;
var G__77081 = count__77015;
var G__77082 = (i__77016 + (1));
seq__77013 = G__77079;
chunk__77014 = G__77080;
count__77015 = G__77081;
i__77016 = G__77082;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__77013);
if(temp__5735__auto__){
var seq__77013__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77013__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__77013__$1);
var G__77083 = cljs.core.chunk_rest(seq__77013__$1);
var G__77084 = c__4609__auto__;
var G__77085 = cljs.core.count(c__4609__auto__);
var G__77086 = (0);
seq__77013 = G__77083;
chunk__77014 = G__77084;
count__77015 = G__77085;
i__77016 = G__77086;
continue;
} else {
var event = cljs.core.first(seq__77013__$1);
re_frame.router.dispatch(event);


var G__77087 = cljs.core.next(seq__77013__$1);
var G__77088 = null;
var G__77089 = (0);
var G__77090 = (0);
seq__77013 = G__77087;
chunk__77014 = G__77088;
count__77015 = G__77089;
i__77016 = G__77090;
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
var seq__77029 = cljs.core.seq(value);
var chunk__77030 = null;
var count__77031 = (0);
var i__77032 = (0);
while(true){
if((i__77032 < count__77031)){
var event = chunk__77030.cljs$core$IIndexed$_nth$arity$2(null,i__77032);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__77091 = seq__77029;
var G__77092 = chunk__77030;
var G__77093 = count__77031;
var G__77094 = (i__77032 + (1));
seq__77029 = G__77091;
chunk__77030 = G__77092;
count__77031 = G__77093;
i__77032 = G__77094;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__77029);
if(temp__5735__auto__){
var seq__77029__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77029__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__77029__$1);
var G__77095 = cljs.core.chunk_rest(seq__77029__$1);
var G__77096 = c__4609__auto__;
var G__77097 = cljs.core.count(c__4609__auto__);
var G__77098 = (0);
seq__77029 = G__77095;
chunk__77030 = G__77096;
count__77031 = G__77097;
i__77032 = G__77098;
continue;
} else {
var event = cljs.core.first(seq__77029__$1);
(clear_event.cljs$core$IFn$_invoke$arity$1 ? clear_event.cljs$core$IFn$_invoke$arity$1(event) : clear_event.call(null,event));


var G__77103 = cljs.core.next(seq__77029__$1);
var G__77104 = null;
var G__77105 = (0);
var G__77106 = (0);
seq__77029 = G__77103;
chunk__77030 = G__77104;
count__77031 = G__77105;
i__77032 = G__77106;
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
