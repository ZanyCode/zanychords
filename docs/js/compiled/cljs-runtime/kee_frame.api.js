goog.provide('kee_frame.api');
goog.require('cljs.core');

/**
 * @interface
 */
kee_frame.api.Navigator = function(){};

kee_frame.api.dispatch_current_BANG_ = (function kee_frame$api$dispatch_current_BANG_(_){
if((((!((_ == null)))) && ((!((_.kee_frame$api$Navigator$dispatch_current_BANG_$arity$1 == null)))))){
return _.kee_frame$api$Navigator$dispatch_current_BANG_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (kee_frame.api.dispatch_current_BANG_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (kee_frame.api.dispatch_current_BANG_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Navigator.dispatch-current!",_);
}
}
}
});

kee_frame.api.navigate_BANG_ = (function kee_frame$api$navigate_BANG_(_,url){
if((((!((_ == null)))) && ((!((_.kee_frame$api$Navigator$navigate_BANG_$arity$2 == null)))))){
return _.kee_frame$api$Navigator$navigate_BANG_$arity$2(_,url);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (kee_frame.api.navigate_BANG_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(_,url) : m__4488__auto__.call(null,_,url));
} else {
var m__4485__auto__ = (kee_frame.api.navigate_BANG_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(_,url) : m__4485__auto__.call(null,_,url));
} else {
throw cljs.core.missing_protocol("Navigator.navigate!",_);
}
}
}
});


/**
 * @interface
 */
kee_frame.api.Router = function(){};

kee_frame.api.data__GT_url = (function kee_frame$api$data__GT_url(_,data){
if((((!((_ == null)))) && ((!((_.kee_frame$api$Router$data__GT_url$arity$2 == null)))))){
return _.kee_frame$api$Router$data__GT_url$arity$2(_,data);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (kee_frame.api.data__GT_url[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(_,data) : m__4488__auto__.call(null,_,data));
} else {
var m__4485__auto__ = (kee_frame.api.data__GT_url["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(_,data) : m__4485__auto__.call(null,_,data));
} else {
throw cljs.core.missing_protocol("Router.data->url",_);
}
}
}
});

kee_frame.api.url__GT_data = (function kee_frame$api$url__GT_data(_,url){
if((((!((_ == null)))) && ((!((_.kee_frame$api$Router$url__GT_data$arity$2 == null)))))){
return _.kee_frame$api$Router$url__GT_data$arity$2(_,url);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (kee_frame.api.url__GT_data[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(_,url) : m__4488__auto__.call(null,_,url));
} else {
var m__4485__auto__ = (kee_frame.api.url__GT_data["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(_,url) : m__4485__auto__.call(null,_,url));
} else {
throw cljs.core.missing_protocol("Router.url->data",_);
}
}
}
});


//# sourceMappingURL=kee_frame.api.js.map
