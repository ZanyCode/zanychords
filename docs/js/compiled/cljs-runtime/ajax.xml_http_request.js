goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__83425 = e.target.readyState;
var fexpr__83424 = new cljs.core.PersistentArrayMap(null, 6, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276),new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162),true], null);
return (fexpr__83424.cljs$core$IFn$_invoke$arity$1 ? fexpr__83424.cljs$core$IFn$_invoke$arity$1(G__83425) : fexpr__83424.call(null,G__83425));
});
ajax.xml_http_request.append = (function ajax$xml_http_request$append(current,next){
if(cljs.core.truth_(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(next)].join('');
} else {
return next;
}
});
ajax.xml_http_request.process_headers = (function ajax$xml_http_request$process_headers(header_str){
if(cljs.core.truth_(header_str)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (headers,header_line){
if(cljs.core.truth_(goog.string.isEmptyOrWhitespace(header_line))){
return headers;
} else {
var key_value = goog.string.splitLimit(header_line,": ",(2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(headers,(key_value[(0)]),ajax.xml_http_request.append,(key_value[(1)]));
}
}),cljs.core.PersistentArrayMap.EMPTY,header_str.split("\r\n"));
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
});
ajax.xml_http_request.xmlhttprequest = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core._STAR_target_STAR_,"nodejs"))?(function (){var xmlhttprequest = require("xmlhttprequest").XMLHttpRequest;
goog.object.set(global,"XMLHttpRequest",xmlhttprequest);

return xmlhttprequest;
})():XMLHttpRequest);
(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__83427,handler){
var map__83428 = p__83427;
var map__83428__$1 = (((((!((map__83428 == null))))?(((((map__83428.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83428.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83428):map__83428);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83428__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83428__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83428__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83428__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83428__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__83428__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83428__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__83426_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__83426_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___83446 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___83446)){
var response_type_83447 = temp__5735__auto___83446;
(this$__$1.responseType = cljs.core.name(response_type_83447));
} else {
}

var seq__83430_83448 = cljs.core.seq(headers);
var chunk__83431_83449 = null;
var count__83432_83450 = (0);
var i__83433_83451 = (0);
while(true){
if((i__83433_83451 < count__83432_83450)){
var vec__83440_83452 = chunk__83431_83449.cljs$core$IIndexed$_nth$arity$2(null,i__83433_83451);
var k_83453 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83440_83452,(0),null);
var v_83454 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83440_83452,(1),null);
this$__$1.setRequestHeader(k_83453,v_83454);


var G__83455 = seq__83430_83448;
var G__83456 = chunk__83431_83449;
var G__83457 = count__83432_83450;
var G__83458 = (i__83433_83451 + (1));
seq__83430_83448 = G__83455;
chunk__83431_83449 = G__83456;
count__83432_83450 = G__83457;
i__83433_83451 = G__83458;
continue;
} else {
var temp__5735__auto___83459 = cljs.core.seq(seq__83430_83448);
if(temp__5735__auto___83459){
var seq__83430_83460__$1 = temp__5735__auto___83459;
if(cljs.core.chunked_seq_QMARK_(seq__83430_83460__$1)){
var c__4609__auto___83461 = cljs.core.chunk_first(seq__83430_83460__$1);
var G__83462 = cljs.core.chunk_rest(seq__83430_83460__$1);
var G__83463 = c__4609__auto___83461;
var G__83464 = cljs.core.count(c__4609__auto___83461);
var G__83465 = (0);
seq__83430_83448 = G__83462;
chunk__83431_83449 = G__83463;
count__83432_83450 = G__83464;
i__83433_83451 = G__83465;
continue;
} else {
var vec__83443_83466 = cljs.core.first(seq__83430_83460__$1);
var k_83467 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83443_83466,(0),null);
var v_83468 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83443_83466,(1),null);
this$__$1.setRequestHeader(k_83467,v_83468);


var G__83469 = cljs.core.next(seq__83430_83460__$1);
var G__83470 = null;
var G__83471 = (0);
var G__83472 = (0);
seq__83430_83448 = G__83469;
chunk__83431_83449 = G__83470;
count__83432_83450 = G__83471;
i__83433_83451 = G__83472;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__4185__auto__ = body;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());

return this$__$1;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_all_headers$arity$1 = (function (this$){
var this$__$1 = this;
return ajax.xml_http_request.process_headers(this$__$1.getAllResponseHeaders());
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
}));

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
}));

//# sourceMappingURL=ajax.xml_http_request.js.map
