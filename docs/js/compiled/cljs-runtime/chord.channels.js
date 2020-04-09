goog.provide('chord.channels');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
chord.channels.read_from_ws_BANG_ = (function chord$channels$read_from_ws_BANG_(ws,ch){
return (ws.onmessage = (function (ev){
var message = ev.data;
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(ch,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),message], null));
}));
});
chord.channels.write_to_ws_BANG_ = (function chord$channels$write_to_ws_BANG_(ws,ch){
var c__41748__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41749__auto__ = (function (){var switch__41725__auto__ = (function (state_83490){
var state_val_83491 = (state_83490[(1)]);
if((state_val_83491 === (1))){
var state_83490__$1 = state_83490;
var statearr_83492_83527 = state_83490__$1;
(statearr_83492_83527[(2)] = null);

(statearr_83492_83527[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83491 === (2))){
var state_83490__$1 = state_83490;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_83490__$1,(4),ch);
} else {
if((state_val_83491 === (3))){
var inst_83488 = (state_83490[(2)]);
var state_83490__$1 = state_83490;
return cljs.core.async.impl.ioc_helpers.return_chan(state_83490__$1,inst_83488);
} else {
if((state_val_83491 === (4))){
var inst_83480 = (state_83490[(7)]);
var inst_83480__$1 = (state_83490[(2)]);
var state_83490__$1 = (function (){var statearr_83493 = state_83490;
(statearr_83493[(7)] = inst_83480__$1);

return statearr_83493;
})();
if(cljs.core.truth_(inst_83480__$1)){
var statearr_83494_83533 = state_83490__$1;
(statearr_83494_83533[(1)] = (5));

} else {
var statearr_83495_83534 = state_83490__$1;
(statearr_83495_83534[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83491 === (5))){
var inst_83480 = (state_83490[(7)]);
var inst_83482 = ws.send(inst_83480);
var state_83490__$1 = (function (){var statearr_83498 = state_83490;
(statearr_83498[(8)] = inst_83482);

return statearr_83498;
})();
var statearr_83499_83535 = state_83490__$1;
(statearr_83499_83535[(2)] = null);

(statearr_83499_83535[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83491 === (6))){
var state_83490__$1 = state_83490;
var statearr_83500_83536 = state_83490__$1;
(statearr_83500_83536[(2)] = null);

(statearr_83500_83536[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_83491 === (7))){
var inst_83486 = (state_83490[(2)]);
var state_83490__$1 = state_83490;
var statearr_83501_83537 = state_83490__$1;
(statearr_83501_83537[(2)] = inst_83486);

(statearr_83501_83537[(1)] = (3));


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
});
return (function() {
var chord$channels$write_to_ws_BANG__$_state_machine__41726__auto__ = null;
var chord$channels$write_to_ws_BANG__$_state_machine__41726__auto____0 = (function (){
var statearr_83502 = [null,null,null,null,null,null,null,null,null];
(statearr_83502[(0)] = chord$channels$write_to_ws_BANG__$_state_machine__41726__auto__);

(statearr_83502[(1)] = (1));

return statearr_83502;
});
var chord$channels$write_to_ws_BANG__$_state_machine__41726__auto____1 = (function (state_83490){
while(true){
var ret_value__41727__auto__ = (function (){try{while(true){
var result__41728__auto__ = switch__41725__auto__(state_83490);
if(cljs.core.keyword_identical_QMARK_(result__41728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41728__auto__;
}
break;
}
}catch (e83503){if((e83503 instanceof Object)){
var ex__41729__auto__ = e83503;
var statearr_83504_83539 = state_83490;
(statearr_83504_83539[(5)] = ex__41729__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_83490);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e83503;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__83541 = state_83490;
state_83490 = G__83541;
continue;
} else {
return ret_value__41727__auto__;
}
break;
}
});
chord$channels$write_to_ws_BANG__$_state_machine__41726__auto__ = function(state_83490){
switch(arguments.length){
case 0:
return chord$channels$write_to_ws_BANG__$_state_machine__41726__auto____0.call(this);
case 1:
return chord$channels$write_to_ws_BANG__$_state_machine__41726__auto____1.call(this,state_83490);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$channels$write_to_ws_BANG__$_state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$0 = chord$channels$write_to_ws_BANG__$_state_machine__41726__auto____0;
chord$channels$write_to_ws_BANG__$_state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$1 = chord$channels$write_to_ws_BANG__$_state_machine__41726__auto____1;
return chord$channels$write_to_ws_BANG__$_state_machine__41726__auto__;
})()
})();
var state__41750__auto__ = (function (){var statearr_83505 = (f__41749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41749__auto__.cljs$core$IFn$_invoke$arity$0() : f__41749__auto__.call(null));
(statearr_83505[(6)] = c__41748__auto__);

return statearr_83505;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41750__auto__);
}));

return c__41748__auto__;
});
chord.channels.bidi_ch = (function chord$channels$bidi_ch(var_args){
var args__4795__auto__ = [];
var len__4789__auto___83542 = arguments.length;
var i__4790__auto___83543 = (0);
while(true){
if((i__4790__auto___83543 < len__4789__auto___83542)){
args__4795__auto__.push((arguments[i__4790__auto___83543]));

var G__83547 = (i__4790__auto___83543 + (1));
i__4790__auto___83543 = G__83547;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,write_ch,p__83511){
var vec__83512 = p__83511;
var map__83515 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83512,(0),null);
var map__83515__$1 = (((((!((map__83515 == null))))?(((((map__83515.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83515.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83515):map__83515);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83515__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
if((typeof chord !== 'undefined') && (typeof chord.channels !== 'undefined') && (typeof chord.channels.t_chord$channels83517 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
chord.channels.t_chord$channels83517 = (function (read_ch,write_ch,p__83511,vec__83512,map__83515,on_close,meta83518){
this.read_ch = read_ch;
this.write_ch = write_ch;
this.p__83511 = p__83511;
this.vec__83512 = vec__83512;
this.map__83515 = map__83515;
this.on_close = on_close;
this.meta83518 = meta83518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.channels.t_chord$channels83517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_83519,meta83518__$1){
var self__ = this;
var _83519__$1 = this;
return (new chord.channels.t_chord$channels83517(self__.read_ch,self__.write_ch,self__.p__83511,self__.vec__83512,self__.map__83515,self__.on_close,meta83518__$1));
}));

(chord.channels.t_chord$channels83517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_83519){
var self__ = this;
var _83519__$1 = this;
return self__.meta83518;
}));

(chord.channels.t_chord$channels83517.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(chord.channels.t_chord$channels83517.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.read_ch,handler);
}));

(chord.channels.t_chord$channels83517.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(chord.channels.t_chord$channels83517.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,msg,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.write_ch,msg,handler);
}));

(chord.channels.t_chord$channels83517.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(chord.channels.t_chord$channels83517.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.close_BANG_(self__.read_ch);

cljs.core.async.impl.protocols.close_BANG_(self__.write_ch);

if(cljs.core.truth_(self__.on_close)){
return (self__.on_close.cljs$core$IFn$_invoke$arity$0 ? self__.on_close.cljs$core$IFn$_invoke$arity$0() : self__.on_close.call(null));
} else {
return null;
}
}));

(chord.channels.t_chord$channels83517.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read-ch","read-ch",1602045113,null),new cljs.core.Symbol(null,"write-ch","write-ch",-126054072,null),new cljs.core.Symbol(null,"p__83511","p__83511",341902080,null),new cljs.core.Symbol(null,"vec__83512","vec__83512",1807554091,null),new cljs.core.Symbol(null,"map__83515","map__83515",-1861502153,null),new cljs.core.Symbol(null,"on-close","on-close",879353133,null),new cljs.core.Symbol(null,"meta83518","meta83518",-1646827628,null)], null);
}));

(chord.channels.t_chord$channels83517.cljs$lang$type = true);

(chord.channels.t_chord$channels83517.cljs$lang$ctorStr = "chord.channels/t_chord$channels83517");

(chord.channels.t_chord$channels83517.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"chord.channels/t_chord$channels83517");
}));

/**
 * Positional factory function for chord.channels/t_chord$channels83517.
 */
chord.channels.__GT_t_chord$channels83517 = (function chord$channels$__GT_t_chord$channels83517(read_ch__$1,write_ch__$1,p__83511__$1,vec__83512__$1,map__83515__$2,on_close__$1,meta83518){
return (new chord.channels.t_chord$channels83517(read_ch__$1,write_ch__$1,p__83511__$1,vec__83512__$1,map__83515__$2,on_close__$1,meta83518));
});

}

return (new chord.channels.t_chord$channels83517(read_ch,write_ch,p__83511,vec__83512,map__83515__$1,on_close,cljs.core.PersistentArrayMap.EMPTY));
}));

(chord.channels.bidi_ch.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(chord.channels.bidi_ch.cljs$lang$applyTo = (function (seq83506){
var G__83507 = cljs.core.first(seq83506);
var seq83506__$1 = cljs.core.next(seq83506);
var G__83508 = cljs.core.first(seq83506__$1);
var seq83506__$2 = cljs.core.next(seq83506__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__83507,G__83508,seq83506__$2);
}));


//# sourceMappingURL=chord.channels.js.map
