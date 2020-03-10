goog.provide('kee_frame.controller');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('cljs.core.match');
goog.require('kee_frame.state');
goog.require('kee_frame.spec');
goog.require('cljs.spec.alpha');
goog.require('expound.alpha');
kee_frame.controller.process_params = (function kee_frame$controller$process_params(params,route){
if(cljs.core.vector_QMARK_(params)){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route,params);
} else {
if(cljs.core.ifn_QMARK_(params)){
return (params.cljs$core$IFn$_invoke$arity$1 ? params.cljs$core$IFn$_invoke$arity$1(route) : params.call(null,route));
} else {
return null;
}
}
});
kee_frame.controller.validate_and_dispatch_BANG_ = (function kee_frame$controller$validate_and_dispatch_BANG_(dispatch){
if(cljs.core.truth_(dispatch)){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("kee-frame.spec","event-vector","kee-frame.spec/event-vector",-1240954896),dispatch)){
} else {
expound.alpha.expound(new cljs.core.Keyword("kee-frame.spec","event-vector","kee-frame.spec/event-vector",-1240954896),dispatch);

throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid dispatch value",cljs.spec.alpha.explain_data(new cljs.core.Keyword("kee-frame.spec","event-vector","kee-frame.spec/event-vector",-1240954896),dispatch));
}

return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(dispatch) : re_frame.core.dispatch.call(null,dispatch));
} else {
return null;
}
});
kee_frame.controller.debug_enabled_QMARK_ = (function kee_frame$controller$debug_enabled_QMARK_(){
var map__56144 = cljs.core.deref(kee_frame.state.debug_config);
var map__56144__$1 = (((((!((map__56144 == null))))?(((((map__56144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56144):map__56144);
var controllers_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__56144__$1,new cljs.core.Keyword(null,"controllers?","controllers?",-2009030071),true);
var and__4174__auto__ = cljs.core.deref(kee_frame.state.debug_QMARK_);
if(cljs.core.truth_(and__4174__auto__)){
return controllers_QMARK_;
} else {
return and__4174__auto__;
}
});
kee_frame.controller.start_BANG_ = (function kee_frame$controller$start_BANG_(id,ctx,start,params){
if(cljs.core.truth_(start)){
if(cljs.core.truth_(kee_frame.controller.debug_enabled_QMARK_())){
var G__56146_56216 = new cljs.core.Keyword(null,"log","log",-1595516004);
var G__56147_56217 = "Starting controller ";
var G__56148_56218 = id;
var G__56149_56219 = " with params ";
var G__56150_56220 = params;
(re_frame.core.console.cljs$core$IFn$_invoke$arity$5 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$5(G__56146_56216,G__56147_56217,G__56148_56218,G__56149_56219,G__56150_56220) : re_frame.core.console.call(null,G__56146_56216,G__56147_56217,G__56148_56218,G__56149_56219,G__56150_56220));
} else {
}

if(cljs.core.vector_QMARK_(start)){
var G__56151 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(start,params);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__56151) : re_frame.core.dispatch.call(null,G__56151));
} else {
if(cljs.core.ifn_QMARK_(start)){
return kee_frame.controller.validate_and_dispatch_BANG_((start.cljs$core$IFn$_invoke$arity$2 ? start.cljs$core$IFn$_invoke$arity$2(ctx,params) : start.call(null,ctx,params)));
} else {
return null;
}
}
} else {
return null;
}
});
kee_frame.controller.stop_BANG_ = (function kee_frame$controller$stop_BANG_(id,ctx,stop){
if(cljs.core.truth_(stop)){
if(cljs.core.truth_(kee_frame.controller.debug_enabled_QMARK_())){
var G__56152_56221 = new cljs.core.Keyword(null,"log","log",-1595516004);
var G__56153_56222 = "Stopping controller ";
var G__56154_56223 = id;
(re_frame.core.console.cljs$core$IFn$_invoke$arity$3 ? re_frame.core.console.cljs$core$IFn$_invoke$arity$3(G__56152_56221,G__56153_56222,G__56154_56223) : re_frame.core.console.call(null,G__56152_56221,G__56153_56222,G__56154_56223));
} else {
}

if(cljs.core.vector_QMARK_(stop)){
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(stop) : re_frame.core.dispatch.call(null,stop));
} else {
if(cljs.core.ifn_QMARK_(stop)){
return kee_frame.controller.validate_and_dispatch_BANG_((stop.cljs$core$IFn$_invoke$arity$1 ? stop.cljs$core$IFn$_invoke$arity$1(ctx) : stop.call(null,ctx)));
} else {
return null;
}
}
} else {
return null;
}
});
kee_frame.controller.process_controller = (function kee_frame$controller$process_controller(id,p__56155,ctx,route){
var map__56156 = p__56155;
var map__56156__$1 = (((((!((map__56156 == null))))?(((((map__56156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56156.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56156):map__56156);
var last_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56156__$1,new cljs.core.Keyword(null,"last-params","last-params",1293824707));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56156__$1,new cljs.core.Keyword(null,"params","params",710516235));
var start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56156__$1,new cljs.core.Keyword(null,"start","start",-355208981));
var stop = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56156__$1,new cljs.core.Keyword(null,"stop","stop",-2140911342));
var current_params = kee_frame.controller.process_params(params,route);
var last_params_56225__$1 = last_params;
var current_params_56226__$1 = current_params;
var ocr_56161_56227 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_params_56225__$1,current_params_56226__$1);
try{if((ocr_56161_56227 === true)){
} else {
throw cljs.core.match.backtrack;

}
}catch (e56195){if((e56195 instanceof Error)){
var e__54855__auto___56228 = e56195;
if((e__54855__auto___56228 === cljs.core.match.backtrack)){
try{if((ocr_56161_56227 === false)){
try{if((last_params_56225__$1 === null)){
kee_frame.controller.start_BANG_(id,ctx,start,current_params_56226__$1);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56200){if((e56200 instanceof Error)){
var e__54855__auto___56229__$1 = e56200;
if((e__54855__auto___56229__$1 === cljs.core.match.backtrack)){
try{if((current_params_56226__$1 === null)){
kee_frame.controller.stop_BANG_(id,ctx,stop);
} else {
throw cljs.core.match.backtrack;

}
}catch (e56201){if((e56201 instanceof Error)){
var e__54855__auto___56230__$2 = e56201;
if((e__54855__auto___56230__$2 === cljs.core.match.backtrack)){
kee_frame.controller.stop_BANG_(id,ctx,stop);

kee_frame.controller.start_BANG_(id,ctx,start,current_params_56226__$1);
} else {
throw e__54855__auto___56230__$2;
}
} else {
throw e56201;

}
}} else {
throw e__54855__auto___56229__$1;
}
} else {
throw e56200;

}
}} else {
throw cljs.core.match.backtrack;

}
}catch (e56196){if((e56196 instanceof Error)){
var e__54855__auto___56231__$1 = e56196;
if((e__54855__auto___56231__$1 === cljs.core.match.backtrack)){
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(last_params_56225__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_params_56226__$1)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ocr_56161_56227)].join('')));
} else {
throw e__54855__auto___56231__$1;
}
} else {
throw e56196;

}
}} else {
throw e__54855__auto___56228;
}
} else {
throw e56195;

}
}
return current_params;
});
kee_frame.controller.apply_route = (function kee_frame$controller$apply_route(controllers,ctx,route){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56207){
var vec__56208 = p__56207;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56208,(0),null);
var controller = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56208,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(controller,new cljs.core.Keyword(null,"last-params","last-params",1293824707),kee_frame.controller.process_controller(id,controller,ctx,route))], null);
}),controllers));
});

//# sourceMappingURL=kee_frame.controller.js.map
