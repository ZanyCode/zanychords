goog.provide('chord.client');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('chord.channels');
goog.require('chord.format');
chord.client.close_event__GT_maybe_error = (function chord$client$close_event__GT_maybe_error(ev){
if(cljs.core.truth_(ev.wasClean)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reason","reason",-2070751759),ev.reason,new cljs.core.Keyword(null,"code","code",1586293142),ev.code], null);
}
});
chord.client.create_ws = (function chord$client$create_ws(url,opts){
if(cljs.core.truth_((((typeof require !== 'undefined'))?(function (){try{return require("ws");
}catch (e53512){var e = e53512;
return false;
}})():false))){
var ws = require("ws");
if(cljs.core.truth_(opts)){
return (new ws(url,cljs.core.clj__GT_js(opts)));
} else {
return (new ws(url));
}
} else {
return (new WebSocket(url));

}
});
/**
 * Creates websockets connection and returns a 2-sided channel when the websocket is opened.
 * Arguments:
 *  ws-url           - (required) link to websocket service
 *  opts             - (optional) map to configure reading/writing channels
 *    :read-ch       - (optional) (possibly buffered) channel to use for reading the websocket
 *    :write-ch      - (optional) (possibly buffered) channel to use for writing to the websocket
 *    :format        - (optional) data format to use on the channel, (at the moment)
 *                                either :edn (default), :json, :json-kw or :str.
 *    :ws-opts       - (optional) Other options to be passed to the websocket constructor (NodeJS only)
 *                                see https://github.com/websockets/ws/blob/master/doc/ws.md#new-websocketaddress-protocols-options
 * 
 * Usage:
 *  (:require [cljs.core.async :as a])
 * 
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437"))
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))}))
 * 
 *  (a/<! (ws-ch "ws://127.0.0.1:6437" {:read-ch (a/chan (a/sliding-buffer 10))
 *                                        :write-ch (a/chan (a/dropping-buffer 10))}))
 */
chord.client.ws_ch = (function chord$client$ws_ch(var_args){
var args__4795__auto__ = [];
var len__4789__auto___53681 = arguments.length;
var i__4790__auto___53682 = (0);
while(true){
if((i__4790__auto___53682 < len__4789__auto___53681)){
args__4795__auto__.push((arguments[i__4790__auto___53682]));

var G__53683 = (i__4790__auto___53682 + (1));
i__4790__auto___53682 = G__53683;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic = (function (ws_url,p__53517){
var vec__53518 = p__53517;
var map__53521 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53518,(0),null);
var map__53521__$1 = (((((!((map__53521 == null))))?(((((map__53521.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53521.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53521):map__53521);
var opts = map__53521__$1;
var read_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53521__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53521__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53521__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var ws_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53521__$1,new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643));
var web_socket = chord.client.create_ws(ws_url,ws_opts);
var map__53523 = chord.format.wrap_format(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),(function (){var or__4185__auto__ = read_ch;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
})(),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),(function (){var or__4185__auto__ = write_ch;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
}
})()], null),opts);
var map__53523__$1 = (((((!((map__53523 == null))))?(((((map__53523.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53523.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53523):map__53523);
var read_ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53523__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53523__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var open_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var close_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
(web_socket.binaryType = "arraybuffer");

chord.channels.read_from_ws_BANG_(web_socket,read_ch__$1);

chord.channels.write_to_ws_BANG_(web_socket,write_ch__$1);

(web_socket.onopen = (function (p1__53513_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(open_ch,p1__53513_SHARP_);
}));

(web_socket.onclose = (function (p1__53514_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(close_ch,p1__53514_SHARP_);
}));

var ws_chan = chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic(read_ch__$1,write_ch__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (){
return web_socket.close();
})], null)], 0));
var initial_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__46136__auto___53695 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46137__auto__ = (function (){var switch__46033__auto__ = (function (state_53590){
var state_val_53591 = (state_53590[(1)]);
if((state_val_53591 === (7))){
var inst_53586 = (state_53590[(2)]);
var state_53590__$1 = state_53590;
var statearr_53592_53696 = state_53590__$1;
(statearr_53592_53696[(2)] = inst_53586);

(statearr_53592_53696[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (20))){
var state_53590__$1 = state_53590;
var statearr_53593_53697 = state_53590__$1;
(statearr_53593_53697[(2)] = null);

(statearr_53593_53697[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (1))){
var inst_53525 = false;
var state_53590__$1 = (function (){var statearr_53594 = state_53590;
(statearr_53594[(7)] = inst_53525);

return statearr_53594;
})();
var statearr_53595_53698 = state_53590__$1;
(statearr_53595_53698[(2)] = null);

(statearr_53595_53698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (4))){
var inst_53538 = (state_53590[(8)]);
var inst_53540 = (state_53590[(9)]);
var inst_53538__$1 = (state_53590[(2)]);
var inst_53539 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53538__$1,(0),null);
var inst_53540__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53538__$1,(1),null);
var inst_53541 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53540__$1,open_ch);
var state_53590__$1 = (function (){var statearr_53596 = state_53590;
(statearr_53596[(10)] = inst_53539);

(statearr_53596[(8)] = inst_53538__$1);

(statearr_53596[(9)] = inst_53540__$1);

return statearr_53596;
})();
if(inst_53541){
var statearr_53597_53699 = state_53590__$1;
(statearr_53597_53699[(1)] = (5));

} else {
var statearr_53598_53700 = state_53590__$1;
(statearr_53598_53700[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (15))){
var inst_53571 = (state_53590[(2)]);
var state_53590__$1 = state_53590;
var statearr_53599_53701 = state_53590__$1;
(statearr_53599_53701[(2)] = inst_53571);

(statearr_53599_53701[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (21))){
var inst_53582 = (state_53590[(2)]);
var state_53590__$1 = state_53590;
var statearr_53600_53702 = state_53590__$1;
(statearr_53600_53702[(2)] = inst_53582);

(statearr_53600_53702[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (13))){
var state_53590__$1 = state_53590;
var statearr_53601_53703 = state_53590__$1;
(statearr_53601_53703[(2)] = null);

(statearr_53601_53703[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (6))){
var inst_53540 = (state_53590[(9)]);
var inst_53555 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53540,close_ch);
var state_53590__$1 = state_53590;
if(inst_53555){
var statearr_53602_53704 = state_53590__$1;
(statearr_53602_53704[(1)] = (9));

} else {
var statearr_53603_53705 = state_53590__$1;
(statearr_53603_53705[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (17))){
var state_53590__$1 = state_53590;
var statearr_53604_53706 = state_53590__$1;
(statearr_53604_53706[(2)] = initial_ch);

(statearr_53604_53706[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (3))){
var inst_53588 = (state_53590[(2)]);
var state_53590__$1 = state_53590;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53590__$1,inst_53588);
} else {
if((state_val_53591 === (12))){
var inst_53525 = (state_53590[(7)]);
var state_53590__$1 = state_53590;
if(cljs.core.truth_(inst_53525)){
var statearr_53605_53707 = state_53590__$1;
(statearr_53605_53707[(1)] = (16));

} else {
var statearr_53606_53708 = state_53590__$1;
(statearr_53606_53708[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (2))){
var inst_53534 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_53535 = [open_ch,close_ch];
var inst_53536 = (new cljs.core.PersistentVector(null,2,(5),inst_53534,inst_53535,null));
var state_53590__$1 = state_53590;
return cljs.core.async.ioc_alts_BANG_(state_53590__$1,(4),inst_53536);
} else {
if((state_val_53591 === (19))){
var inst_53539 = (state_53590[(10)]);
var state_53590__$1 = state_53590;
var statearr_53611_53709 = state_53590__$1;
(statearr_53611_53709[(2)] = inst_53539);

(statearr_53611_53709[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (11))){
var inst_53584 = (state_53590[(2)]);
var state_53590__$1 = state_53590;
var statearr_53612_53710 = state_53590__$1;
(statearr_53612_53710[(2)] = inst_53584);

(statearr_53612_53710[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (9))){
var inst_53538 = (state_53590[(8)]);
var inst_53561 = (state_53590[(11)]);
var inst_53560 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53538,(0),null);
var inst_53561__$1 = chord.client.close_event__GT_maybe_error(inst_53560);
var state_53590__$1 = (function (){var statearr_53617 = state_53590;
(statearr_53617[(11)] = inst_53561__$1);

return statearr_53617;
})();
if(cljs.core.truth_(inst_53561__$1)){
var statearr_53619_53711 = state_53590__$1;
(statearr_53619_53711[(1)] = (12));

} else {
var statearr_53620_53712 = state_53590__$1;
(statearr_53620_53712[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (5))){
var inst_53538 = (state_53590[(8)]);
var inst_53546 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_53538,(0),null);
var inst_53547 = [new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174)];
var inst_53548 = [ws_chan];
var inst_53549 = cljs.core.PersistentHashMap.fromArrays(inst_53547,inst_53548);
var state_53590__$1 = (function (){var statearr_53623 = state_53590;
(statearr_53623[(12)] = inst_53546);

return statearr_53623;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53590__$1,(8),initial_ch,inst_53549);
} else {
if((state_val_53591 === (14))){
var inst_53574 = (state_53590[(2)]);
var inst_53575 = cljs.core.async.close_BANG_(ws_chan);
var inst_53576 = cljs.core.async.close_BANG_(initial_ch);
var state_53590__$1 = (function (){var statearr_53624 = state_53590;
(statearr_53624[(13)] = inst_53575);

(statearr_53624[(14)] = inst_53574);

return statearr_53624;
})();
var statearr_53625_53713 = state_53590__$1;
(statearr_53625_53713[(2)] = inst_53576);

(statearr_53625_53713[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (16))){
var state_53590__$1 = state_53590;
var statearr_53626_53714 = state_53590__$1;
(statearr_53626_53714[(2)] = read_ch__$1);

(statearr_53626_53714[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (10))){
var inst_53540 = (state_53590[(9)]);
var inst_53578 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_53540,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_53590__$1 = state_53590;
if(inst_53578){
var statearr_53665_53715 = state_53590__$1;
(statearr_53665_53715[(1)] = (19));

} else {
var statearr_53666_53716 = state_53590__$1;
(statearr_53666_53716[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53591 === (18))){
var inst_53561 = (state_53590[(11)]);
var inst_53566 = (state_53590[(2)]);
var inst_53567 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_53568 = [inst_53561];
var inst_53569 = cljs.core.PersistentHashMap.fromArrays(inst_53567,inst_53568);
var state_53590__$1 = state_53590;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_53590__$1,(15),inst_53566,inst_53569);
} else {
if((state_val_53591 === (8))){
var inst_53551 = (state_53590[(2)]);
var inst_53552 = cljs.core.async.close_BANG_(initial_ch);
var inst_53525 = true;
var state_53590__$1 = (function (){var statearr_53667 = state_53590;
(statearr_53667[(15)] = inst_53552);

(statearr_53667[(7)] = inst_53525);

(statearr_53667[(16)] = inst_53551);

return statearr_53667;
})();
var statearr_53668_53717 = state_53590__$1;
(statearr_53668_53717[(2)] = null);

(statearr_53668_53717[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var chord$client$state_machine__46034__auto__ = null;
var chord$client$state_machine__46034__auto____0 = (function (){
var statearr_53669 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_53669[(0)] = chord$client$state_machine__46034__auto__);

(statearr_53669[(1)] = (1));

return statearr_53669;
});
var chord$client$state_machine__46034__auto____1 = (function (state_53590){
while(true){
var ret_value__46035__auto__ = (function (){try{while(true){
var result__46036__auto__ = switch__46033__auto__(state_53590);
if(cljs.core.keyword_identical_QMARK_(result__46036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46036__auto__;
}
break;
}
}catch (e53670){if((e53670 instanceof Object)){
var ex__46037__auto__ = e53670;
var statearr_53671_53718 = state_53590;
(statearr_53671_53718[(5)] = ex__46037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53590);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53670;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53719 = state_53590;
state_53590 = G__53719;
continue;
} else {
return ret_value__46035__auto__;
}
break;
}
});
chord$client$state_machine__46034__auto__ = function(state_53590){
switch(arguments.length){
case 0:
return chord$client$state_machine__46034__auto____0.call(this);
case 1:
return chord$client$state_machine__46034__auto____1.call(this,state_53590);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$client$state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$state_machine__46034__auto____0;
chord$client$state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$state_machine__46034__auto____1;
return chord$client$state_machine__46034__auto__;
})()
})();
var state__46138__auto__ = (function (){var statearr_53672 = (f__46137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46137__auto__.cljs$core$IFn$_invoke$arity$0() : f__46137__auto__.call(null));
(statearr_53672[(6)] = c__46136__auto___53695);

return statearr_53672;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46138__auto__);
}));


return initial_ch;
}));

(chord.client.ws_ch.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(chord.client.ws_ch.cljs$lang$applyTo = (function (seq53515){
var G__53516 = cljs.core.first(seq53515);
var seq53515__$1 = cljs.core.next(seq53515);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53516,seq53515__$1);
}));


//# sourceMappingURL=chord.client.js.map
