goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__83585){
var vec__83586 = p__83585;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83586,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83586,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),(function (){var G__83589 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__83589);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__83594){
var map__83595 = p__83594;
var map__83595__$1 = (((((!((map__83595 == null))))?(((((map__83595.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83595.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83595):map__83595);
var request = map__83595__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83595__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83595__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__83591_SHARP_){
var G__83603 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__83591_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__83603) : re_frame.core.dispatch.call(null,G__83603));
}),(function (p1__83592_SHARP_){
var G__83604 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__83592_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__83604) : re_frame.core.dispatch.call(null,G__83604));
}),api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245)], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__83609 = cljs.core.seq(seq_request_maps);
var chunk__83610 = null;
var count__83611 = (0);
var i__83612 = (0);
while(true){
if((i__83612 < count__83611)){
var request__$1 = chunk__83610.cljs$core$IIndexed$_nth$arity$2(null,i__83612);
var G__83615_83619 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__83615_83619) : ajax.core.ajax_request.call(null,G__83615_83619));


var G__83620 = seq__83609;
var G__83621 = chunk__83610;
var G__83622 = count__83611;
var G__83623 = (i__83612 + (1));
seq__83609 = G__83620;
chunk__83610 = G__83621;
count__83611 = G__83622;
i__83612 = G__83623;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__83609);
if(temp__5735__auto__){
var seq__83609__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__83609__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__83609__$1);
var G__83624 = cljs.core.chunk_rest(seq__83609__$1);
var G__83625 = c__4609__auto__;
var G__83626 = cljs.core.count(c__4609__auto__);
var G__83627 = (0);
seq__83609 = G__83624;
chunk__83610 = G__83625;
count__83611 = G__83626;
i__83612 = G__83627;
continue;
} else {
var request__$1 = cljs.core.first(seq__83609__$1);
var G__83616_83628 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__83616_83628) : ajax.core.ajax_request.call(null,G__83616_83628));


var G__83629 = cljs.core.next(seq__83609__$1);
var G__83630 = null;
var G__83631 = (0);
var G__83632 = (0);
seq__83609 = G__83629;
chunk__83610 = G__83630;
count__83611 = G__83631;
i__83612 = G__83632;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__83617_83633 = new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714);
var G__83618_83634 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__83617_83633,G__83618_83634) : re_frame.core.reg_fx.call(null,G__83617_83633,G__83618_83634));

//# sourceMappingURL=day8.re_frame.http_fx.js.map
