goog.provide('re_frame_fx.dispatch');
goog.require('cljs.core');
goog.require('re_frame.core');
re_frame_fx.dispatch.deferred_actions = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
re_frame_fx.dispatch.dispatch_debounce = (function re_frame_fx$dispatch$dispatch_debounce(dispatch_map_or_seq){
var cancel_timeout = (function (id){
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto__)){
var deferred = temp__5735__auto__;
clearTimeout(new cljs.core.Keyword(null,"timer","timer",-1266967739).cljs$core$IFn$_invoke$arity$1(deferred));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(re_frame_fx.dispatch.deferred_actions,cljs.core.dissoc,id);
} else {
return null;
}
});
var run_action = (function (action,event){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),action)){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(event) : re_frame.core.dispatch.call(null,event));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),action)){
var seq__53607 = cljs.core.seq(event);
var chunk__53608 = null;
var count__53609 = (0);
var i__53610 = (0);
while(true){
if((i__53610 < count__53609)){
var e = chunk__53608.cljs$core$IIndexed$_nth$arity$2(null,i__53610);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(e) : re_frame.core.dispatch.call(null,e));


var G__53648 = seq__53607;
var G__53649 = chunk__53608;
var G__53650 = count__53609;
var G__53651 = (i__53610 + (1));
seq__53607 = G__53648;
chunk__53608 = G__53649;
count__53609 = G__53650;
i__53610 = G__53651;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53607);
if(temp__5735__auto__){
var seq__53607__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53607__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__53607__$1);
var G__53652 = cljs.core.chunk_rest(seq__53607__$1);
var G__53653 = c__4609__auto__;
var G__53654 = cljs.core.count(c__4609__auto__);
var G__53655 = (0);
seq__53607 = G__53652;
chunk__53608 = G__53653;
count__53609 = G__53654;
i__53610 = G__53655;
continue;
} else {
var e = cljs.core.first(seq__53607__$1);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(e) : re_frame.core.dispatch.call(null,e));


var G__53656 = cljs.core.next(seq__53607__$1);
var G__53657 = null;
var G__53658 = (0);
var G__53659 = (0);
seq__53607 = G__53656;
chunk__53608 = G__53657;
count__53609 = G__53658;
i__53610 = G__53659;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});
var seq__53613 = cljs.core.seq((function (){var G__53635 = dispatch_map_or_seq;
if((!(cljs.core.sequential_QMARK_(dispatch_map_or_seq)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__53635],null));
} else {
return G__53635;
}
})());
var chunk__53614 = null;
var count__53615 = (0);
var i__53616 = (0);
while(true){
if((i__53616 < count__53615)){
var map__53636 = chunk__53614.cljs$core$IIndexed$_nth$arity$2(null,i__53616);
var map__53636__$1 = (((((!((map__53636 == null))))?(((((map__53636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53636):map__53636);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53636__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53636__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53636__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53636__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__53638 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__53638.cljs$core$IFn$_invoke$arity$1 ? fexpr__53638.cljs$core$IFn$_invoke$arity$1(action) : fexpr__53638.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__53613,chunk__53614,count__53615,i__53616,map__53636,map__53636__$1,id,timeout,action,event,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__53613,chunk__53614,count__53615,i__53616,map__53636,map__53636__$1,id,timeout,action,event,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___53660 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___53660)){
var map__53639_53661 = temp__5735__auto___53660;
var map__53639_53662__$1 = (((((!((map__53639_53661 == null))))?(((((map__53639_53661.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53639_53661.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53639_53661):map__53639_53661);
var action_53663__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53639_53662__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_53664__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53639_53662__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_53663__$1,event_53664__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__53673 = seq__53613;
var G__53674 = chunk__53614;
var G__53675 = count__53615;
var G__53676 = (i__53616 + (1));
seq__53613 = G__53673;
chunk__53614 = G__53674;
count__53615 = G__53675;
i__53616 = G__53676;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53613);
if(temp__5735__auto__){
var seq__53613__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53613__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__53613__$1);
var G__53677 = cljs.core.chunk_rest(seq__53613__$1);
var G__53678 = c__4609__auto__;
var G__53679 = cljs.core.count(c__4609__auto__);
var G__53680 = (0);
seq__53613 = G__53677;
chunk__53614 = G__53678;
count__53615 = G__53679;
i__53616 = G__53680;
continue;
} else {
var map__53641 = cljs.core.first(seq__53613__$1);
var map__53641__$1 = (((((!((map__53641 == null))))?(((((map__53641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53641.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53641):map__53641);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53641__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53641__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53641__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53641__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__53643 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__53643.cljs$core$IFn$_invoke$arity$1 ? fexpr__53643.cljs$core$IFn$_invoke$arity$1(action) : fexpr__53643.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__53613,chunk__53614,count__53615,i__53616,map__53641,map__53641__$1,id,timeout,action,event,seq__53613__$1,temp__5735__auto__,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__53613,chunk__53614,count__53615,i__53616,map__53641,map__53641__$1,id,timeout,action,event,seq__53613__$1,temp__5735__auto__,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___53684__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___53684__$1)){
var map__53644_53685 = temp__5735__auto___53684__$1;
var map__53644_53686__$1 = (((((!((map__53644_53685 == null))))?(((((map__53644_53685.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53644_53685.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53644_53685):map__53644_53685);
var action_53687__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53644_53686__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_53688__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53644_53686__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_53687__$1,event_53688__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__53689 = cljs.core.next(seq__53613__$1);
var G__53690 = null;
var G__53691 = (0);
var G__53692 = (0);
seq__53613 = G__53689;
chunk__53614 = G__53690;
count__53615 = G__53691;
i__53616 = G__53692;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__53646_53693 = new cljs.core.Keyword(null,"dispatch-debounce","dispatch-debounce",-2065179020);
var G__53647_53694 = re_frame_fx.dispatch.dispatch_debounce;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__53646_53693,G__53647_53694) : re_frame.core.reg_fx.call(null,G__53646_53693,G__53647_53694));

//# sourceMappingURL=re_frame_fx.dispatch.js.map
