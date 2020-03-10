goog.provide('day8.re_frame.http_fx');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('re_frame.core');
goog.require('ajax.core');
/**
 * ajax-request only provides a single handler for success and errors
 */
day8.re_frame.http_fx.ajax_xhrio_handler = (function day8$re_frame$http_fx$ajax_xhrio_handler(on_success,on_failure,xhrio,p__53429){
var vec__53430 = p__53429;
var success_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53430,(0),null);
var response = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53430,(1),null);
if(cljs.core.truth_(success_QMARK_)){
return (on_success.cljs$core$IFn$_invoke$arity$1 ? on_success.cljs$core$IFn$_invoke$arity$1(response) : on_success.call(null,response));
} else {
var details = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"uri","uri",-774711847),xhrio.getLastUri(),new cljs.core.Keyword(null,"last-method","last-method",-563909920),xhrio.lastMethod_,new cljs.core.Keyword(null,"last-error","last-error",1848699973),xhrio.getLastError(),new cljs.core.Keyword(null,"last-error-code","last-error-code",276598110),xhrio.getLastErrorCode(),new cljs.core.Keyword(null,"debug-message","debug-message",-502855302),(function (){var G__53433 = xhrio.getLastErrorCode();
return goog.net.ErrorCode.getDebugMessage(G__53433);
})()], null),response], 0));
return (on_failure.cljs$core$IFn$_invoke$arity$1 ? on_failure.cljs$core$IFn$_invoke$arity$1(details) : on_failure.call(null,details));
}
});
day8.re_frame.http_fx.request__GT_xhrio_options = (function day8$re_frame$http_fx$request__GT_xhrio_options(p__53436){
var map__53437 = p__53436;
var map__53437__$1 = (((((!((map__53437 == null))))?(((((map__53437.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53437.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53437):map__53437);
var request = map__53437__$1;
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53437__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-success","http-no-on-success",-1593227158)], null));
var on_failure = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53437__$1,new cljs.core.Keyword(null,"on-failure","on-failure",842888245),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"http-no-on-failure","http-no-on-failure",962976084)], null));
var api = (new goog.net.XhrIo());
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"api","api",-899839580),api,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"handler","handler",-195596612),cljs.core.partial.cljs$core$IFn$_invoke$arity$4(day8.re_frame.http_fx.ajax_xhrio_handler,(function (p1__53434_SHARP_){
var G__53442 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_success,p1__53434_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__53442) : re_frame.core.dispatch.call(null,G__53442));
}),(function (p1__53435_SHARP_){
var G__53443 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(on_failure,p1__53435_SHARP_);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__53443) : re_frame.core.dispatch.call(null,G__53443));
}),api)], 0)),new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-failure","on-failure",842888245)], 0));
});
day8.re_frame.http_fx.http_effect = (function day8$re_frame$http_fx$http_effect(request){
var seq_request_maps = ((cljs.core.sequential_QMARK_(request))?request:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [request], null));
var seq__53447 = cljs.core.seq(seq_request_maps);
var chunk__53448 = null;
var count__53449 = (0);
var i__53450 = (0);
while(true){
if((i__53450 < count__53449)){
var request__$1 = chunk__53448.cljs$core$IIndexed$_nth$arity$2(null,i__53450);
var G__53456_53473 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__53456_53473) : ajax.core.ajax_request.call(null,G__53456_53473));


var G__53474 = seq__53447;
var G__53475 = chunk__53448;
var G__53476 = count__53449;
var G__53477 = (i__53450 + (1));
seq__53447 = G__53474;
chunk__53448 = G__53475;
count__53449 = G__53476;
i__53450 = G__53477;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__53447);
if(temp__5735__auto__){
var seq__53447__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__53447__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__53447__$1);
var G__53478 = cljs.core.chunk_rest(seq__53447__$1);
var G__53479 = c__4609__auto__;
var G__53480 = cljs.core.count(c__4609__auto__);
var G__53481 = (0);
seq__53447 = G__53478;
chunk__53448 = G__53479;
count__53449 = G__53480;
i__53450 = G__53481;
continue;
} else {
var request__$1 = cljs.core.first(seq__53447__$1);
var G__53467_53482 = day8.re_frame.http_fx.request__GT_xhrio_options(request__$1);
(ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1 ? ajax.core.ajax_request.cljs$core$IFn$_invoke$arity$1(G__53467_53482) : ajax.core.ajax_request.call(null,G__53467_53482));


var G__53483 = cljs.core.next(seq__53447__$1);
var G__53484 = null;
var G__53485 = (0);
var G__53486 = (0);
seq__53447 = G__53483;
chunk__53448 = G__53484;
count__53449 = G__53485;
i__53450 = G__53486;
continue;
}
} else {
return null;
}
}
break;
}
});
var G__53468_53488 = new cljs.core.Keyword(null,"http-xhrio","http-xhrio",1846166714);
var G__53469_53489 = day8.re_frame.http_fx.http_effect;
(re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2 ? re_frame.core.reg_fx.cljs$core$IFn$_invoke$arity$2(G__53468_53488,G__53469_53489) : re_frame.core.reg_fx.call(null,G__53468_53488,G__53469_53489));

//# sourceMappingURL=day8.re_frame.http_fx.js.map
