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
}catch (e83636){var e = e83636;
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
var len__4789__auto___83748 = arguments.length;
var i__4790__auto___83749 = (0);
while(true){
if((i__4790__auto___83749 < len__4789__auto___83748)){
args__4795__auto__.push((arguments[i__4790__auto___83749]));

var G__83750 = (i__4790__auto___83749 + (1));
i__4790__auto___83749 = G__83750;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(chord.client.ws_ch.cljs$core$IFn$_invoke$arity$variadic = (function (ws_url,p__83641){
var vec__83642 = p__83641;
var map__83645 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83642,(0),null);
var map__83645__$1 = (((((!((map__83645 == null))))?(((((map__83645.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83645.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83645):map__83645);
var opts = map__83645__$1;
var read_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83645__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83645__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83645__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var ws_opts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83645__$1,new cljs.core.Keyword(null,"ws-opts","ws-opts",1487801643));
var web_socket = chord.client.create_ws(ws_url,ws_opts);
var map__83647 = chord.format.wrap_format(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),(function (){var or__4185__auto__ = read_ch;
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
var map__83647__$1 = (((((!((map__83647 == null))))?(((((map__83647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83647.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83647):map__83647);
var read_ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83647__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83647__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var open_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var close_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
(web_socket.binaryType = "arraybuffer");

chord.channels.read_from_ws_BANG_(web_socket,read_ch__$1);

chord.channels.write_to_ws_BANG_(web_socket,write_ch__$1);

(web_socket.onopen = (function (p1__83637_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(open_ch,p1__83637_SHARP_);
}));

(web_socket.onclose = (function (p1__83638_SHARP_){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(close_ch,p1__83638_SHARP_);
}));

var ws_chan = chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic(read_ch__$1,write_ch__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-close","on-close",-761178394),(function (){
return web_socket.close();
})], null)], 0));
var initial_ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__41748__auto___83751 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41749__auto__ = (function (){var switch__41725__auto__ = (function (state_83714){
var state_val_83715 = (state_83714[(1)]);
if((state_val_83715 === (7))){
var inst_83710 = (state_83714[(2)]);
var state_83714__$1 = state_83714;
var statearr_83716_83752 = state_83714__$1;
(statearr_83716_83752[(2)] = inst_83710);

(statearr_83716_83752[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83715 === (20))){
var state_83714__$1 = state_83714;
var statearr_83717_83753 = state_83714__$1;
(statearr_83717_83753[(2)] = null);

(statearr_83717_83753[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83715 === (1))){
var inst_83649 = false;
var state_83714__$1 = (function (){var statearr_83718 = state_83714;
(statearr_83718[(7)] = inst_83649);

return statearr_83718;
})();
var statearr_83719_83754 = state_83714__$1;
(statearr_83719_83754[(2)] = null);

(statearr_83719_83754[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83715 === (4))){
var inst_83664 = (state_83714[(8)]);
var inst_83662 = (state_83714[(9)]);
var inst_83662__$1 = (state_83714[(2)]);
var inst_83663 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_83662__$1,(0),null);
var inst_83664__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_83662__$1,(1),null);
var inst_83665 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_83664__$1,open_ch);
var state_83714__$1 = (function (){var statearr_83720 = state_83714;
(statearr_83720[(10)] = inst_83663);

(statearr_83720[(8)] = inst_83664__$1);

(statearr_83720[(9)] = inst_83662__$1);

return statearr_83720;
})();
if(inst_83665){
var statearr_83721_83755 = state_83714__$1;
(statearr_83721_83755[(1)] = (5));

} else {
var statearr_83722_83756 = state_83714__$1;
(statearr_83722_83756[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83715 === (15))){
var inst_83695 = (state_83714[(2)]);
var state_83714__$1 = state_83714;
var statearr_83723_83757 = state_83714__$1;
(statearr_83723_83757[(2)] = inst_83695);

(statearr_83723_83757[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83715 === (21))){
var inst_83706 = (state_83714[(2)]);
var state_83714__$1 = state_83714;
var statearr_83724_83758 = state_83714__$1;
(statearr_83724_83758[(2)] = inst_83706);

(statearr_83724_83758[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83715 === (13))){
var state_83714__$1 = state_83714;
var statearr_83725_83759 = state_83714__$1;
(statearr_83725_83759[(2)] = null);

(statearr_83725_83759[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83715 === (6))){
var inst_83664 = (state_83714[(8)]);
var inst_83679 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_83664,close_ch);
var state_83714__$1 = state_83714;
if(inst_83679){
var statearr_83726_83760 = state_83714__$1;
(statearr_83726_83760[(1)] = (9));

} else {
var statearr_83727_83761 = state_83714__$1;
(statearr_83727_83761[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83715 === (17))){
var state_83714__$1 = state_83714;
var statearr_83728_83762 = state_83714__$1;
(statearr_83728_83762[(2)] = initial_ch);

(statearr_83728_83762[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83715 === (3))){
var inst_83712 = (state_83714[(2)]);
var state_83714__$1 = state_83714;
return cljs.core.async.impl.ioc_helpers.return_chan(state_83714__$1,inst_83712);
} else {
if((state_val_83715 === (12))){
var inst_83649 = (state_83714[(7)]);
var state_83714__$1 = state_83714;
if(cljs.core.truth_(inst_83649)){
var statearr_83729_83763 = state_83714__$1;
(statearr_83729_83763[(1)] = (16));

} else {
var statearr_83730_83764 = state_83714__$1;
(statearr_83730_83764[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83715 === (2))){
var inst_83658 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_83659 = [open_ch,close_ch];
var inst_83660 = (new cljs.core.PersistentVector(null,2,(5),inst_83658,inst_83659,null));
var state_83714__$1 = state_83714;
return cljs.core.async.ioc_alts_BANG_(state_83714__$1,(4),inst_83660);
} else {
if((state_val_83715 === (19))){
var inst_83663 = (state_83714[(10)]);
var state_83714__$1 = state_83714;
var statearr_83731_83765 = state_83714__$1;
(statearr_83731_83765[(2)] = inst_83663);

(statearr_83731_83765[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83715 === (11))){
var inst_83708 = (state_83714[(2)]);
var state_83714__$1 = state_83714;
var statearr_83732_83766 = state_83714__$1;
(statearr_83732_83766[(2)] = inst_83708);

(statearr_83732_83766[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83715 === (9))){
var inst_83685 = (state_83714[(11)]);
var inst_83662 = (state_83714[(9)]);
var inst_83684 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_83662,(0),null);
var inst_83685__$1 = chord.client.close_event__GT_maybe_error(inst_83684);
var state_83714__$1 = (function (){var statearr_83733 = state_83714;
(statearr_83733[(11)] = inst_83685__$1);

return statearr_83733;
})();
if(cljs.core.truth_(inst_83685__$1)){
var statearr_83734_83771 = state_83714__$1;
(statearr_83734_83771[(1)] = (12));

} else {
var statearr_83735_83772 = state_83714__$1;
(statearr_83735_83772[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83715 === (5))){
var inst_83662 = (state_83714[(9)]);
var inst_83670 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_83662,(0),null);
var inst_83671 = [new cljs.core.Keyword(null,"ws-channel","ws-channel",1643892174)];
var inst_83672 = [ws_chan];
var inst_83673 = cljs.core.PersistentHashMap.fromArrays(inst_83671,inst_83672);
var state_83714__$1 = (function (){var statearr_83736 = state_83714;
(statearr_83736[(12)] = inst_83670);

return statearr_83736;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_83714__$1,(8),initial_ch,inst_83673);
} else {
if((state_val_83715 === (14))){
var inst_83698 = (state_83714[(2)]);
var inst_83699 = cljs.core.async.close_BANG_(ws_chan);
var inst_83700 = cljs.core.async.close_BANG_(initial_ch);
var state_83714__$1 = (function (){var statearr_83737 = state_83714;
(statearr_83737[(13)] = inst_83698);

(statearr_83737[(14)] = inst_83699);

return statearr_83737;
})();
var statearr_83738_83773 = state_83714__$1;
(statearr_83738_83773[(2)] = inst_83700);

(statearr_83738_83773[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83715 === (16))){
var state_83714__$1 = state_83714;
var statearr_83739_83778 = state_83714__$1;
(statearr_83739_83778[(2)] = read_ch__$1);

(statearr_83739_83778[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83715 === (10))){
var inst_83664 = (state_83714[(8)]);
var inst_83702 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_83664,new cljs.core.Keyword(null,"default","default",-1987822328));
var state_83714__$1 = state_83714;
if(inst_83702){
var statearr_83740_83780 = state_83714__$1;
(statearr_83740_83780[(1)] = (19));

} else {
var statearr_83741_83781 = state_83714__$1;
(statearr_83741_83781[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83715 === (18))){
var inst_83685 = (state_83714[(11)]);
var inst_83690 = (state_83714[(2)]);
var inst_83691 = [new cljs.core.Keyword(null,"error","error",-978969032)];
var inst_83692 = [inst_83685];
var inst_83693 = cljs.core.PersistentHashMap.fromArrays(inst_83691,inst_83692);
var state_83714__$1 = state_83714;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_83714__$1,(15),inst_83690,inst_83693);
} else {
if((state_val_83715 === (8))){
var inst_83675 = (state_83714[(2)]);
var inst_83676 = cljs.core.async.close_BANG_(initial_ch);
var inst_83649 = true;
var state_83714__$1 = (function (){var statearr_83742 = state_83714;
(statearr_83742[(15)] = inst_83675);

(statearr_83742[(16)] = inst_83676);

(statearr_83742[(7)] = inst_83649);

return statearr_83742;
})();
var statearr_83743_83785 = state_83714__$1;
(statearr_83743_83785[(2)] = null);

(statearr_83743_83785[(1)] = (2));


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
var chord$client$state_machine__41726__auto__ = null;
var chord$client$state_machine__41726__auto____0 = (function (){
var statearr_83744 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_83744[(0)] = chord$client$state_machine__41726__auto__);

(statearr_83744[(1)] = (1));

return statearr_83744;
});
var chord$client$state_machine__41726__auto____1 = (function (state_83714){
while(true){
var ret_value__41727__auto__ = (function (){try{while(true){
var result__41728__auto__ = switch__41725__auto__(state_83714);
if(cljs.core.keyword_identical_QMARK_(result__41728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41728__auto__;
}
break;
}
}catch (e83745){if((e83745 instanceof Object)){
var ex__41729__auto__ = e83745;
var statearr_83746_83788 = state_83714;
(statearr_83746_83788[(5)] = ex__41729__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_83714);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e83745;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83789 = state_83714;
state_83714 = G__83789;
continue;
} else {
return ret_value__41727__auto__;
}
break;
}
});
chord$client$state_machine__41726__auto__ = function(state_83714){
switch(arguments.length){
case 0:
return chord$client$state_machine__41726__auto____0.call(this);
case 1:
return chord$client$state_machine__41726__auto____1.call(this,state_83714);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$client$state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$0 = chord$client$state_machine__41726__auto____0;
chord$client$state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$1 = chord$client$state_machine__41726__auto____1;
return chord$client$state_machine__41726__auto__;
})()
})();
var state__41750__auto__ = (function (){var statearr_83747 = (f__41749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41749__auto__.cljs$core$IFn$_invoke$arity$0() : f__41749__auto__.call(null));
(statearr_83747[(6)] = c__41748__auto___83751);

return statearr_83747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41750__auto__);
}));


return initial_ch;
}));

(chord.client.ws_ch.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(chord.client.ws_ch.cljs$lang$applyTo = (function (seq83639){
var G__83640 = cljs.core.first(seq83639);
var seq83639__$1 = cljs.core.next(seq83639);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__83640,seq83639__$1);
}));


//# sourceMappingURL=chord.client.js.map
