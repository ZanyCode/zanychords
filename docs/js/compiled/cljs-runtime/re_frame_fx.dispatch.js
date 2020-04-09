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
var seq__83767 = cljs.core.seq(event);
var chunk__83768 = null;
var count__83769 = (0);
var i__83770 = (0);
while(true){
if((i__83770 < count__83769)){
var e = chunk__83768.cljs$core$IIndexed$_nth$arity$2(null,i__83770);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(e) : re_frame.core.dispatch.call(null,e));


var G__83808 = seq__83767;
var G__83809 = chunk__83768;
var G__83810 = count__83769;
var G__83811 = (i__83770 + (1));
seq__83767 = G__83808;
chunk__83768 = G__83809;
count__83769 = G__83810;
i__83770 = G__83811;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__83767);
if(temp__5735__auto__){
var seq__83767__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__83767__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__83767__$1);
var G__83812 = cljs.core.chunk_rest(seq__83767__$1);
var G__83813 = c__4609__auto__;
var G__83814 = cljs.core.count(c__4609__auto__);
var G__83815 = (0);
seq__83767 = G__83812;
chunk__83768 = G__83813;
count__83769 = G__83814;
i__83770 = G__83815;
continue;
} else {
var e = cljs.core.first(seq__83767__$1);
(re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(e) : re_frame.core.dispatch.call(null,e));


var G__83816 = cljs.core.next(seq__83767__$1);
var G__83817 = null;
var G__83818 = (0);
var G__83819 = (0);
seq__83767 = G__83816;
chunk__83768 = G__83817;
count__83769 = G__83818;
i__83770 = G__83819;
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
var seq__83774 = cljs.core.seq((function (){var G__83795 = dispatch_map_or_seq;
if((!(cljs.core.sequential_QMARK_(dispatch_map_or_seq)))){
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[G__83795],null));
} else {
return G__83795;
}
})());
var chunk__83775 = null;
var count__83776 = (0);
var i__83777 = (0);
while(true){
if((i__83777 < count__83776)){
var map__83796 = chunk__83775.cljs$core$IIndexed$_nth$arity$2(null,i__83777);
var map__83796__$1 = (((((!((map__83796 == null))))?(((((map__83796.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83796.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83796):map__83796);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83796__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83796__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83796__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83796__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__83798 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__83798.cljs$core$IFn$_invoke$arity$1 ? fexpr__83798.cljs$core$IFn$_invoke$arity$1(action) : fexpr__83798.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__83774,chunk__83775,count__83776,i__83777,map__83796,map__83796__$1,id,timeout,action,event,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__83774,chunk__83775,count__83776,i__83777,map__83796,map__83796__$1,id,timeout,action,event,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___83820 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___83820)){
var map__83799_83821 = temp__5735__auto___83820;
var map__83799_83822__$1 = (((((!((map__83799_83821 == null))))?(((((map__83799_83821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83799_83821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83799_83821):map__83799_83821);
var action_83823__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83799_83822__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_83824__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83799_83822__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_83823__$1,event_83824__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__83825 = seq__83774;
var G__83826 = chunk__83775;
var G__83827 = count__83776;
var G__83828 = (i__83777 + (1));
seq__83774 = G__83825;
chunk__83775 = G__83826;
count__83776 = G__83827;
i__83777 = G__83828;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__83774);
if(temp__5735__auto__){
var seq__83774__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__83774__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__83774__$1);
var G__83829 = cljs.core.chunk_rest(seq__83774__$1);
var G__83830 = c__4609__auto__;
var G__83831 = cljs.core.count(c__4609__auto__);
var G__83832 = (0);
seq__83774 = G__83829;
chunk__83775 = G__83830;
count__83776 = G__83831;
i__83777 = G__83832;
continue;
} else {
var map__83801 = cljs.core.first(seq__83774__$1);
var map__83801__$1 = (((((!((map__83801 == null))))?(((((map__83801.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83801.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83801):map__83801);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83801__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83801__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83801__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83801__$1,new cljs.core.Keyword(null,"event","event",301435442));
if(cljs.core.truth_((function (){var fexpr__83803 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dispatch-n","dispatch-n",-504469236),null,new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),null], null), null);
return (fexpr__83803.cljs$core$IFn$_invoke$arity$1 ? fexpr__83803.cljs$core$IFn$_invoke$arity$1(action) : fexpr__83803.call(null,action));
})())){
cancel_timeout(id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(re_frame_fx.dispatch.deferred_actions,cljs.core.assoc,id,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"action","action",-811238024),action,new cljs.core.Keyword(null,"event","event",301435442),event,new cljs.core.Keyword(null,"timer","timer",-1266967739),setTimeout(((function (seq__83774,chunk__83775,count__83776,i__83777,map__83801,map__83801__$1,id,timeout,action,event,seq__83774__$1,temp__5735__auto__,cancel_timeout,run_action){
return (function (){
cancel_timeout(id);

return run_action(action,event);
});})(seq__83774,chunk__83775,count__83776,i__83777,map__83801,map__83801__$1,id,timeout,action,event,seq__83774__$1,temp__5735__auto__,cancel_timeout,run_action))
,timeout)], null));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"cancel","cancel",-1964088360),action)){
cancel_timeout(id);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flush","flush",-1138711199),action)){
var temp__5735__auto___83839__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(re_frame_fx.dispatch.deferred_actions),id);
if(cljs.core.truth_(temp__5735__auto___83839__$1)){
var map__83804_83840 = temp__5735__auto___83839__$1;
var map__83804_83841__$1 = (((((!((map__83804_83840 == null))))?(((((map__83804_83840.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83804_83840.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83804_83840):map__83804_83840);
var action_83842__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83804_83841__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var event_83843__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83804_83841__$1,new cljs.core.Keyword(null,"event","event",301435442));
cancel_timeout(id);

run_action(action_83842__$1,event_83843__$1);
} else {
}
} else {
throw Error([":dispatch-debounce invalid action ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(action)].join(''));

}
}
}


var G__83847 = cljs.core.next(seq__83774__$1);
var G__83848 = null;
var G__83849 = (0);
var G__83850 = (0);
seq__83774 = G__83847;
chunk__83775 = G__83848;
count__83776 = G__83849;
i__83777 = G__83850;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__83806_83851 = new cljs.core.Keyword(null,"dispatch-debounce","dispatch-debounce",-2065179020);
var G__83807_83852 = re_frame_fx.dispatch.dispatch_debounce;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__83806_83851,G__83807_83852) : re_frame.core.reg_fx.call(null,G__83806_83851,G__83807_83852));

//# sourceMappingURL=re_frame_fx.dispatch.js.map
