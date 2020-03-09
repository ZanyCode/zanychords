goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
goog.require('goog.string');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
var G__53293 = e.target.readyState;
var fexpr__53292 = new cljs.core.PersistentArrayMap(null, 6, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276),new cljs.core.Keyword("cljs.analyzer","analyzed","cljs.analyzer/analyzed",-735094162),true], null);
return (fexpr__53292.cljs$core$IFn$_invoke$arity$1 ? fexpr__53292.cljs$core$IFn$_invoke$arity$1(G__53293) : fexpr__53292.call(null,G__53293));
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

(ajax.xml_http_request.xmlhttprequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__53297,handler){
var map__53298 = p__53297;
var map__53298__$1 = (((((!((map__53298 == null))))?(((((map__53298.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53298.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53298):map__53298);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53298__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53298__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53298__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53298__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53298__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53298__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53298__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
(this$__$1.withCredentials = with_credentials);

(this$__$1.onreadystatechange = (function (p1__53296_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state(p1__53296_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
}));

this$__$1.open(method,uri,true);

(this$__$1.timeout = timeout);

var temp__5735__auto___53322 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__5735__auto___53322)){
var response_type_53323 = temp__5735__auto___53322;
(this$__$1.responseType = cljs.core.name(response_type_53323));
} else {
}

var seq__53300_53324 = cljs.core.seq(headers);
var chunk__53301_53325 = null;
var count__53302_53326 = (0);
var i__53303_53327 = (0);
while(true){
if((i__53303_53327 < count__53302_53326)){
var vec__53310_53328 = chunk__53301_53325.cljs$core$IIndexed$_nth$arity$2(null,i__53303_53327);
var k_53329 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53310_53328,(0),null);
var v_53330 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53310_53328,(1),null);
this$__$1.setRequestHeader(k_53329,v_53330);


var G__53331 = seq__53300_53324;
var G__53332 = chunk__53301_53325;
var G__53333 = count__53302_53326;
var G__53334 = (i__53303_53327 + (1));
seq__53300_53324 = G__53331;
chunk__53301_53325 = G__53332;
count__53302_53326 = G__53333;
i__53303_53327 = G__53334;
continue;
} else {
var temp__5735__auto___53335 = cljs.core.seq(seq__53300_53324);
if(temp__5735__auto___53335){
var seq__53300_53336__$1 = temp__5735__auto___53335;
if(cljs.core.chunked_seq_QMARK_(seq__53300_53336__$1)){
var c__4609__auto___53337 = cljs.core.chunk_first(seq__53300_53336__$1);
var G__53338 = cljs.core.chunk_rest(seq__53300_53336__$1);
var G__53339 = c__4609__auto___53337;
var G__53340 = cljs.core.count(c__4609__auto___53337);
var G__53341 = (0);
seq__53300_53324 = G__53338;
chunk__53301_53325 = G__53339;
count__53302_53326 = G__53340;
i__53303_53327 = G__53341;
continue;
} else {
var vec__53315_53342 = cljs.core.first(seq__53300_53336__$1);
var k_53343 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53315_53342,(0),null);
var v_53344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53315_53342,(1),null);
this$__$1.setRequestHeader(k_53343,v_53344);


var G__53345 = cljs.core.next(seq__53300_53336__$1);
var G__53346 = null;
var G__53347 = (0);
var G__53348 = (0);
seq__53300_53324 = G__53345;
chunk__53301_53325 = G__53346;
count__53302_53326 = G__53347;
i__53303_53327 = G__53348;
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
