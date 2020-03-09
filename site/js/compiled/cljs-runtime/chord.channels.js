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
var c__46136__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46137__auto__ = (function (){var switch__46033__auto__ = (function (state_53366){
var state_val_53367 = (state_53366[(1)]);
if((state_val_53367 === (1))){
var state_53366__$1 = state_53366;
var statearr_53368_53402 = state_53366__$1;
(statearr_53368_53402[(2)] = null);

(statearr_53368_53402[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53367 === (2))){
var state_53366__$1 = state_53366;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_53366__$1,(4),ch);
} else {
if((state_val_53367 === (3))){
var inst_53364 = (state_53366[(2)]);
var state_53366__$1 = state_53366;
return cljs.core.async.impl.ioc_helpers.return_chan(state_53366__$1,inst_53364);
} else {
if((state_val_53367 === (4))){
var inst_53356 = (state_53366[(7)]);
var inst_53356__$1 = (state_53366[(2)]);
var state_53366__$1 = (function (){var statearr_53371 = state_53366;
(statearr_53371[(7)] = inst_53356__$1);

return statearr_53371;
})();
if(cljs.core.truth_(inst_53356__$1)){
var statearr_53372_53405 = state_53366__$1;
(statearr_53372_53405[(1)] = (5));

} else {
var statearr_53373_53406 = state_53366__$1;
(statearr_53373_53406[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53367 === (5))){
var inst_53356 = (state_53366[(7)]);
var inst_53358 = ws.send(inst_53356);
var state_53366__$1 = (function (){var statearr_53374 = state_53366;
(statearr_53374[(8)] = inst_53358);

return statearr_53374;
})();
var statearr_53375_53407 = state_53366__$1;
(statearr_53375_53407[(2)] = null);

(statearr_53375_53407[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53367 === (6))){
var state_53366__$1 = state_53366;
var statearr_53376_53408 = state_53366__$1;
(statearr_53376_53408[(2)] = null);

(statearr_53376_53408[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_53367 === (7))){
var inst_53362 = (state_53366[(2)]);
var state_53366__$1 = state_53366;
var statearr_53377_53409 = state_53366__$1;
(statearr_53377_53409[(2)] = inst_53362);

(statearr_53377_53409[(1)] = (3));


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
var chord$channels$write_to_ws_BANG__$_state_machine__46034__auto__ = null;
var chord$channels$write_to_ws_BANG__$_state_machine__46034__auto____0 = (function (){
var statearr_53380 = [null,null,null,null,null,null,null,null,null];
(statearr_53380[(0)] = chord$channels$write_to_ws_BANG__$_state_machine__46034__auto__);

(statearr_53380[(1)] = (1));

return statearr_53380;
});
var chord$channels$write_to_ws_BANG__$_state_machine__46034__auto____1 = (function (state_53366){
while(true){
var ret_value__46035__auto__ = (function (){try{while(true){
var result__46036__auto__ = switch__46033__auto__(state_53366);
if(cljs.core.keyword_identical_QMARK_(result__46036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46036__auto__;
}
break;
}
}catch (e53381){if((e53381 instanceof Object)){
var ex__46037__auto__ = e53381;
var statearr_53382_53412 = state_53366;
(statearr_53382_53412[(5)] = ex__46037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_53366);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e53381;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__53413 = state_53366;
state_53366 = G__53413;
continue;
} else {
return ret_value__46035__auto__;
}
break;
}
});
chord$channels$write_to_ws_BANG__$_state_machine__46034__auto__ = function(state_53366){
switch(arguments.length){
case 0:
return chord$channels$write_to_ws_BANG__$_state_machine__46034__auto____0.call(this);
case 1:
return chord$channels$write_to_ws_BANG__$_state_machine__46034__auto____1.call(this,state_53366);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chord$channels$write_to_ws_BANG__$_state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$0 = chord$channels$write_to_ws_BANG__$_state_machine__46034__auto____0;
chord$channels$write_to_ws_BANG__$_state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$1 = chord$channels$write_to_ws_BANG__$_state_machine__46034__auto____1;
return chord$channels$write_to_ws_BANG__$_state_machine__46034__auto__;
})()
})();
var state__46138__auto__ = (function (){var statearr_53383 = (f__46137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46137__auto__.cljs$core$IFn$_invoke$arity$0() : f__46137__auto__.call(null));
(statearr_53383[(6)] = c__46136__auto__);

return statearr_53383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46138__auto__);
}));

return c__46136__auto__;
});
chord.channels.bidi_ch = (function chord$channels$bidi_ch(var_args){
var args__4795__auto__ = [];
var len__4789__auto___53414 = arguments.length;
var i__4790__auto___53415 = (0);
while(true){
if((i__4790__auto___53415 < len__4789__auto___53414)){
args__4795__auto__.push((arguments[i__4790__auto___53415]));

var G__53416 = (i__4790__auto___53415 + (1));
i__4790__auto___53415 = G__53416;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((2) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((2)),(0),null)):null);
return chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__4796__auto__);
});

(chord.channels.bidi_ch.cljs$core$IFn$_invoke$arity$variadic = (function (read_ch,write_ch,p__53389){
var vec__53390 = p__53389;
var map__53393 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53390,(0),null);
var map__53393__$1 = (((((!((map__53393 == null))))?(((((map__53393.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53393.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53393):map__53393);
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53393__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
if((typeof chord !== 'undefined') && (typeof chord.channels !== 'undefined') && (typeof chord.channels.t_chord$channels53395 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
chord.channels.t_chord$channels53395 = (function (read_ch,write_ch,p__53389,vec__53390,map__53393,on_close,meta53396){
this.read_ch = read_ch;
this.write_ch = write_ch;
this.p__53389 = p__53389;
this.vec__53390 = vec__53390;
this.map__53393 = map__53393;
this.on_close = on_close;
this.meta53396 = meta53396;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.channels.t_chord$channels53395.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53397,meta53396__$1){
var self__ = this;
var _53397__$1 = this;
return (new chord.channels.t_chord$channels53395(self__.read_ch,self__.write_ch,self__.p__53389,self__.vec__53390,self__.map__53393,self__.on_close,meta53396__$1));
}));

(chord.channels.t_chord$channels53395.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53397){
var self__ = this;
var _53397__$1 = this;
return self__.meta53396;
}));

(chord.channels.t_chord$channels53395.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(chord.channels.t_chord$channels53395.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.read_ch,handler);
}));

(chord.channels.t_chord$channels53395.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(chord.channels.t_chord$channels53395.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,msg,handler){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.write_ch,msg,handler);
}));

(chord.channels.t_chord$channels53395.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(chord.channels.t_chord$channels53395.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
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

(chord.channels.t_chord$channels53395.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read-ch","read-ch",1602045113,null),new cljs.core.Symbol(null,"write-ch","write-ch",-126054072,null),new cljs.core.Symbol(null,"p__53389","p__53389",458467564,null),new cljs.core.Symbol(null,"vec__53390","vec__53390",-333005565,null),new cljs.core.Symbol(null,"map__53393","map__53393",-1268112212,null),new cljs.core.Symbol(null,"on-close","on-close",879353133,null),new cljs.core.Symbol(null,"meta53396","meta53396",124057262,null)], null);
}));

(chord.channels.t_chord$channels53395.cljs$lang$type = true);

(chord.channels.t_chord$channels53395.cljs$lang$ctorStr = "chord.channels/t_chord$channels53395");

(chord.channels.t_chord$channels53395.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"chord.channels/t_chord$channels53395");
}));

/**
 * Positional factory function for chord.channels/t_chord$channels53395.
 */
chord.channels.__GT_t_chord$channels53395 = (function chord$channels$__GT_t_chord$channels53395(read_ch__$1,write_ch__$1,p__53389__$1,vec__53390__$1,map__53393__$2,on_close__$1,meta53396){
return (new chord.channels.t_chord$channels53395(read_ch__$1,write_ch__$1,p__53389__$1,vec__53390__$1,map__53393__$2,on_close__$1,meta53396));
});

}

return (new chord.channels.t_chord$channels53395(read_ch,write_ch,p__53389,vec__53390,map__53393__$1,on_close,cljs.core.PersistentArrayMap.EMPTY));
}));

(chord.channels.bidi_ch.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(chord.channels.bidi_ch.cljs$lang$applyTo = (function (seq53384){
var G__53385 = cljs.core.first(seq53384);
var seq53384__$1 = cljs.core.next(seq53384);
var G__53386 = cljs.core.first(seq53384__$1);
var seq53384__$2 = cljs.core.next(seq53384__$1);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53385,G__53386,seq53384__$2);
}));


//# sourceMappingURL=chord.channels.js.map
