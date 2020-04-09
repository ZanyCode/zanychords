goog.provide('shadow.cljs.devtools.client.hud');
goog.require('cljs.core');
goog.require('shadow.dom');
goog.require('shadow.xhr');
goog.require('shadow.animate');
goog.require('shadow.cljs.devtools.client.env');
goog.require('cljs.core.async');
goog.require('goog.string.format');
goog.require('goog.string');
goog.require('clojure.string');
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.hud.show_progress = goog.define("shadow.cljs.devtools.client.hud.show_progress",true);
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.hud.show_warnings = goog.define("shadow.cljs.devtools.client.hud.show_warnings",true);
/**
 * @define {boolean}
 */
shadow.cljs.devtools.client.hud.show_errors = goog.define("shadow.cljs.devtools.client.hud.show_errors",true);
shadow.cljs.devtools.client.hud.open_file = (function shadow$cljs$devtools$client$hud$open_file(file,line,column){
console.log("opening file",file,line,column);

var req = shadow.xhr.chan.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"POST","POST",110456857),[shadow.cljs.devtools.client.env.get_url_base(),"/api/open-file"].join(''),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false,new cljs.core.Keyword(null,"body-only","body-only",-698120682),true], null));
var c__41748__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41749__auto__ = (function (){var switch__41725__auto__ = (function (state_82211){
var state_val_82212 = (state_82211[(1)]);
if((state_val_82212 === (7))){
var state_82211__$1 = state_82211;
var statearr_82213_82357 = state_82211__$1;
(statearr_82213_82357[(2)] = false);

(statearr_82213_82357[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82212 === (1))){
var state_82211__$1 = state_82211;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82211__$1,(2),req);
} else {
if((state_val_82212 === (4))){
var inst_82175 = (state_82211[(7)]);
var inst_82181 = (inst_82175 == null);
var inst_82182 = cljs.core.not(inst_82181);
var state_82211__$1 = state_82211;
if(inst_82182){
var statearr_82214_82358 = state_82211__$1;
(statearr_82214_82358[(1)] = (6));

} else {
var statearr_82215_82359 = state_82211__$1;
(statearr_82215_82359[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82212 === (15))){
var state_82211__$1 = state_82211;
var statearr_82216_82360 = state_82211__$1;
(statearr_82216_82360[(2)] = null);

(statearr_82216_82360[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82212 === (13))){
var inst_82175 = (state_82211[(7)]);
var state_82211__$1 = state_82211;
var statearr_82217_82361 = state_82211__$1;
(statearr_82217_82361[(2)] = inst_82175);

(statearr_82217_82361[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82212 === (6))){
var inst_82175 = (state_82211[(7)]);
var inst_82184 = inst_82175.cljs$lang$protocol_mask$partition0$;
var inst_82185 = (inst_82184 & (64));
var inst_82186 = inst_82175.cljs$core$ISeq$;
var inst_82187 = (cljs.core.PROTOCOL_SENTINEL === inst_82186);
var inst_82188 = ((inst_82185) || (inst_82187));
var state_82211__$1 = state_82211;
if(cljs.core.truth_(inst_82188)){
var statearr_82218_82362 = state_82211__$1;
(statearr_82218_82362[(1)] = (9));

} else {
var statearr_82219_82363 = state_82211__$1;
(statearr_82219_82363[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82212 === (17))){
var inst_82207 = (state_82211[(2)]);
var state_82211__$1 = state_82211;
var statearr_82220_82364 = state_82211__$1;
(statearr_82220_82364[(2)] = inst_82207);

(statearr_82220_82364[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82212 === (3))){
var state_82211__$1 = state_82211;
var statearr_82221_82365 = state_82211__$1;
(statearr_82221_82365[(2)] = null);

(statearr_82221_82365[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82212 === (12))){
var inst_82175 = (state_82211[(7)]);
var inst_82197 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_82175);
var state_82211__$1 = state_82211;
var statearr_82222_82366 = state_82211__$1;
(statearr_82222_82366[(2)] = inst_82197);

(statearr_82222_82366[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82212 === (2))){
var inst_82175 = (state_82211[(7)]);
var inst_82175__$1 = (state_82211[(2)]);
var inst_82176 = (inst_82175__$1 == null);
var state_82211__$1 = (function (){var statearr_82223 = state_82211;
(statearr_82223[(7)] = inst_82175__$1);

return statearr_82223;
})();
if(cljs.core.truth_(inst_82176)){
var statearr_82224_82374 = state_82211__$1;
(statearr_82224_82374[(1)] = (3));

} else {
var statearr_82225_82375 = state_82211__$1;
(statearr_82225_82375[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82212 === (11))){
var inst_82192 = (state_82211[(2)]);
var state_82211__$1 = state_82211;
var statearr_82226_82377 = state_82211__$1;
(statearr_82226_82377[(2)] = inst_82192);

(statearr_82226_82377[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82212 === (9))){
var state_82211__$1 = state_82211;
var statearr_82227_82379 = state_82211__$1;
(statearr_82227_82379[(2)] = true);

(statearr_82227_82379[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82212 === (5))){
var inst_82209 = (state_82211[(2)]);
var state_82211__$1 = state_82211;
return cljs.core.async.impl.ioc_helpers.return_chan(state_82211__$1,inst_82209);
} else {
if((state_val_82212 === (14))){
var inst_82200 = (state_82211[(8)]);
var inst_82200__$1 = (state_82211[(2)]);
var inst_82201 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_82200__$1,new cljs.core.Keyword(null,"exit","exit",351849638));
var inst_82202 = (inst_82201 === (0));
var state_82211__$1 = (function (){var statearr_82228 = state_82211;
(statearr_82228[(8)] = inst_82200__$1);

return statearr_82228;
})();
if(cljs.core.truth_(inst_82202)){
var statearr_82229_82380 = state_82211__$1;
(statearr_82229_82380[(1)] = (15));

} else {
var statearr_82230_82382 = state_82211__$1;
(statearr_82230_82382[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82212 === (16))){
var inst_82200 = (state_82211[(8)]);
var inst_82205 = console.warn("file open failed",inst_82200);
var state_82211__$1 = state_82211;
var statearr_82231_82383 = state_82211__$1;
(statearr_82231_82383[(2)] = inst_82205);

(statearr_82231_82383[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82212 === (10))){
var state_82211__$1 = state_82211;
var statearr_82232_82385 = state_82211__$1;
(statearr_82232_82385[(2)] = false);

(statearr_82232_82385[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_82212 === (8))){
var inst_82195 = (state_82211[(2)]);
var state_82211__$1 = state_82211;
if(cljs.core.truth_(inst_82195)){
var statearr_82233_82388 = state_82211__$1;
(statearr_82233_82388[(1)] = (12));

} else {
var statearr_82234_82389 = state_82211__$1;
(statearr_82234_82389[(1)] = (13));

}

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
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__41726__auto__ = null;
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__41726__auto____0 = (function (){
var statearr_82235 = [null,null,null,null,null,null,null,null,null];
(statearr_82235[(0)] = shadow$cljs$devtools$client$hud$open_file_$_state_machine__41726__auto__);

(statearr_82235[(1)] = (1));

return statearr_82235;
});
var shadow$cljs$devtools$client$hud$open_file_$_state_machine__41726__auto____1 = (function (state_82211){
while(true){
var ret_value__41727__auto__ = (function (){try{while(true){
var result__41728__auto__ = switch__41725__auto__(state_82211);
if(cljs.core.keyword_identical_QMARK_(result__41728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41728__auto__;
}
break;
}
}catch (e82236){if((e82236 instanceof Object)){
var ex__41729__auto__ = e82236;
var statearr_82237_82391 = state_82211;
(statearr_82237_82391[(5)] = ex__41729__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_82211);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82236;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82393 = state_82211;
state_82211 = G__82393;
continue;
} else {
return ret_value__41727__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$open_file_$_state_machine__41726__auto__ = function(state_82211){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__41726__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__41726__auto____1.call(this,state_82211);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$open_file_$_state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__41726__auto____0;
shadow$cljs$devtools$client$hud$open_file_$_state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$open_file_$_state_machine__41726__auto____1;
return shadow$cljs$devtools$client$hud$open_file_$_state_machine__41726__auto__;
})()
})();
var state__41750__auto__ = (function (){var statearr_82239 = (f__41749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41749__auto__.cljs$core$IFn$_invoke$arity$0() : f__41749__auto__.call(null));
(statearr_82239[(6)] = c__41748__auto__);

return statearr_82239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41750__auto__);
}));

return c__41748__auto__;
});
shadow.cljs.devtools.client.hud.dom_insert = (function shadow$cljs$devtools$client$hud$dom_insert(var_args){
var G__82241 = arguments.length;
switch (G__82241) {
case 1:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1 = (function (node){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2(document.body,node);
}));

(shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$2 = (function (where,node){
var el = shadow.dom.dom_node(node);
var id = el.id;
if(cljs.core.seq(id)){
} else {
throw (new Error("Assert failed: (seq id)"));
}

var temp__5739__auto___82401 = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(id);
if((temp__5739__auto___82401 == null)){
} else {
var x_82402 = temp__5739__auto___82401;
shadow.dom.remove(x_82402);
}

return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(where,el);
}));

(shadow.cljs.devtools.client.hud.dom_insert.cljs$lang$maxFixedArity = 2);

shadow.cljs.devtools.client.hud.hud_id = "shadow-hud-container";
shadow.cljs.devtools.client.hud.load_id = "shadow-hud-loading-container";
shadow.cljs.devtools.client.hud.logo_svg = (new cljs.core.Delay((function (){
var s_path = "M247.183941,141.416413 C247.183941,74.7839971 148.383423,78.9723529 148.383423,141.416413 C148.383423,203.860473 265.090698,171.864644 265.090698,248.900057 C265.090698,325.93547 135,325.851749 135,251.708304";
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"shadow-cljs-logo",new cljs.core.Keyword(null,"version","version",425292698),"1.1",new cljs.core.Keyword(null,"viewBox","viewBox",-469489477),"0 0 400 400",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"display","display",242065432),"block"], null),new cljs.core.Keyword(null,"height","height",1025178622),"60px",new cljs.core.Keyword(null,"width","width",-384071477),"60px"], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),"shadow-cljs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"defs","defs",1398449717),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mask#shadow-cljs-logo-mask","mask#shadow-cljs-logo-mask",1690487509),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),"#fff"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"fill-rule","fill-rule",-1824841598),"evenodd",new cljs.core.Keyword(null,"fill","fill",883462889),"none",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"0",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"none",new cljs.core.Keyword(null,"mask","mask",-585748447),"url(#shadow-cljs-logo-mask)"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g.circles","g.circles",374463200),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.blue","circle.blue",1902916291),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"200",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"200",new cljs.core.Keyword(null,"fill","fill",883462889),"#4F80DF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-blue","circle.light-blue",438137342),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"71.5",new cljs.core.Keyword(null,"cy","cy",755331060),"200",new cljs.core.Keyword(null,"cx","cx",1272694324),"370",new cljs.core.Keyword(null,"fill","fill",883462889),"#89B4FF"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.dark-green","circle.dark-green",608465767),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"180",new cljs.core.Keyword(null,"cy","cy",755331060),"360",new cljs.core.Keyword(null,"cx","cx",1272694324),"60",new cljs.core.Keyword(null,"fill","fill",883462889),"#40B400"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"circle.light-green","circle.light-green",-1663041285),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r","r",-471384190),"129",new cljs.core.Keyword(null,"cy","cy",755331060),"320",new cljs.core.Keyword(null,"cx","cx",1272694324),"280",new cljs.core.Keyword(null,"fill","fill",883462889),"#76E013"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"animateTransform","animateTransform",759329815),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"attributeType","attributeType",1055561918),"xml",new cljs.core.Keyword(null,"attributeName","attributeName",-400177890),"transform",new cljs.core.Keyword(null,"type","type",1174270348),"rotate",new cljs.core.Keyword(null,"from","from",1815293044),"0 200 200",new cljs.core.Keyword(null,"to","to",192099007),"360 200 200",new cljs.core.Keyword(null,"dur","dur",1464522452),"3s",new cljs.core.Keyword(null,"repeatCount","repeatCount",1447663848),"indefinite"], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"g","g",1738089905),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"transform","transform",1381301764),"translate(10,10)"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#aaa",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"stroke-linecap","stroke-linecap",-1201103248),"square",new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),"16",new cljs.core.Keyword(null,"stroke","stroke",1741823555),"#FFFFFF",new cljs.core.Keyword(null,"d","d",1972142424),s_path], null)], null)], null)], 0));
}),null));
shadow.cljs.devtools.client.hud.load_start = (function shadow$cljs$devtools$client$hud$load_start(){
if(shadow.cljs.devtools.client.hud.show_progress){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.load_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"#eee",new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),"40px",new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),"40px",new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),"2px 2px 10px #aaa",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px"], null)], null),cljs.core.deref(shadow.cljs.devtools.client.hud.logo_svg)], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_end_success = (function shadow$cljs$devtools$client$hud$load_end_success(){
if(shadow.cljs.devtools.client.hud.show_progress){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var container_el = temp__5739__auto__;
var el = container_el.firstChild;
shadow.animate.start((500),cljs.core.PersistentArrayMap.createAsIfByAssoc([el,shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"background","background",-863952629),"#eee","#40B400","ease-out")]));

var c__41748__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41749__auto__ = (function (){var switch__41725__auto__ = (function (state_82257){
var state_val_82258 = (state_82257[(1)]);
if((state_val_82258 === (1))){
var inst_82245 = cljs.core.async.timeout((250));
var state_82257__$1 = state_82257;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82257__$1,(2),inst_82245);
} else {
if((state_val_82258 === (2))){
var inst_82247 = (state_82257[(2)]);
var inst_82248 = [el];
var inst_82249 = shadow.animate.transition.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"opacity","opacity",397153780),"1","0","ease-in");
var inst_82250 = [inst_82249];
var inst_82251 = cljs.core.PersistentHashMap.fromArrays(inst_82248,inst_82250);
var inst_82252 = shadow.animate.start((250),inst_82251);
var state_82257__$1 = (function (){var statearr_82259 = state_82257;
(statearr_82259[(7)] = inst_82247);

return statearr_82259;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_82257__$1,(3),inst_82252);
} else {
if((state_val_82258 === (3))){
var inst_82254 = (state_82257[(2)]);
var inst_82255 = shadow.dom.remove(container_el);
var state_82257__$1 = (function (){var statearr_82260 = state_82257;
(statearr_82260[(8)] = inst_82254);

return statearr_82260;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_82257__$1,inst_82255);
} else {
return null;
}
}
}
});
return (function() {
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__41726__auto__ = null;
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__41726__auto____0 = (function (){
var statearr_82261 = [null,null,null,null,null,null,null,null,null];
(statearr_82261[(0)] = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__41726__auto__);

(statearr_82261[(1)] = (1));

return statearr_82261;
});
var shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__41726__auto____1 = (function (state_82257){
while(true){
var ret_value__41727__auto__ = (function (){try{while(true){
var result__41728__auto__ = switch__41725__auto__(state_82257);
if(cljs.core.keyword_identical_QMARK_(result__41728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41728__auto__;
}
break;
}
}catch (e82262){if((e82262 instanceof Object)){
var ex__41729__auto__ = e82262;
var statearr_82263_82435 = state_82257;
(statearr_82263_82435[(5)] = ex__41729__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_82257);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e82262;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__82436 = state_82257;
state_82257 = G__82436;
continue;
} else {
return ret_value__41727__auto__;
}
break;
}
});
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__41726__auto__ = function(state_82257){
switch(arguments.length){
case 0:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__41726__auto____0.call(this);
case 1:
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__41726__auto____1.call(this,state_82257);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__41726__auto____0;
shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__41726__auto____1;
return shadow$cljs$devtools$client$hud$load_end_success_$_state_machine__41726__auto__;
})()
})();
var state__41750__auto__ = (function (){var statearr_82264 = (f__41749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41749__auto__.cljs$core$IFn$_invoke$arity$0() : f__41749__auto__.call(null));
(statearr_82264[(6)] = c__41748__auto__);

return statearr_82264;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41750__auto__);
}));

return c__41748__auto__;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_end = (function shadow$cljs$devtools$client$hud$load_end(){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.load_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var el = temp__5739__auto__;
return shadow.dom.remove(el);
}
});
shadow.cljs.devtools.client.hud.hud_hide = (function shadow$cljs$devtools$client$hud$hud_hide(){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.hud_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var d = temp__5739__auto__;
return shadow.dom.remove(d);
}
});
shadow.cljs.devtools.client.hud.source_line_styles = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"padding","padding",1660304693),"0",new cljs.core.Keyword(null,"margin","margin",-995903681),"0"], null);
shadow.cljs.devtools.client.hud.source_highlight_styles = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow.cljs.devtools.client.hud.source_line_styles,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold");
shadow.cljs.devtools.client.hud.source_line_html = (function shadow$cljs$devtools$client$hud$source_line_html(start_idx,lines,styles){
var iter__4582__auto__ = (function shadow$cljs$devtools$client$hud$source_line_html_$_iter__82266(s__82267){
return (new cljs.core.LazySeq(null,(function (){
var s__82267__$1 = s__82267;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__82267__$1);
if(temp__5735__auto__){
var s__82267__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__82267__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__82267__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__82269 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__82268 = (0);
while(true){
if((i__82268 < size__4581__auto__)){
var vec__82270 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__82268);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82270,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82270,(1),null);
cljs.core.chunk_append(b__82269,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__82273 = "%4d | %s";
var G__82274 = (((1) + idx) + start_idx);
var G__82275 = text;
return goog.string.format(G__82273,G__82274,G__82275);
})()], null));

var G__82466 = (i__82268 + (1));
i__82268 = G__82466;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82269),shadow$cljs$devtools$client$hud$source_line_html_$_iter__82266(cljs.core.chunk_rest(s__82267__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82269),null);
}
} else {
var vec__82276 = cljs.core.first(s__82267__$2);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82276,(0),null);
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82276,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),styles], null),(function (){var G__82282 = "%4d | %s";
var G__82283 = (((1) + idx) + start_idx);
var G__82284 = text;
return goog.string.format(G__82282,G__82283,G__82284);
})()], null),shadow$cljs$devtools$client$hud$source_line_html_$_iter__82266(cljs.core.rest(s__82267__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,lines));
});
shadow.cljs.devtools.client.hud.sep_length = (80);
shadow.cljs.devtools.client.hud.sep_line = (function shadow$cljs$devtools$client$hud$sep_line(var_args){
var G__82292 = arguments.length;
switch (G__82292) {
case 0:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0();

break;
case 2:
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0 = (function (){
return shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("",(0));
}));

(shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2 = (function (label,offset){
var sep_len = Math.max(shadow.cljs.devtools.client.hud.sep_length,offset);
var len = cljs.core.count(label);
var sep = (function (c){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("",cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(c,"-"));
});
return [sep(offset),cljs.core.str.cljs$core$IFn$_invoke$arity$1(label),sep((sep_len - (offset + len)))].join('');
}));

(shadow.cljs.devtools.client.hud.sep_line.cljs$lang$maxFixedArity = 2);

shadow.cljs.devtools.client.hud.file_link = (function shadow$cljs$devtools$client$hud$file_link(p__82293){
var map__82294 = p__82293;
var map__82294__$1 = (((((!((map__82294 == null))))?(((((map__82294.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82294.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82294):map__82294);
var warning = map__82294__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82294__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82294__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82294__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82294__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.not(file)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),resource_name], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline",new cljs.core.Keyword(null,"color","color",1011675173),"blue",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),(function (e){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return shadow.cljs.devtools.client.hud.open_file(file,line,column);
})], null)], null),resource_name], null);
}
});
shadow.cljs.devtools.client.hud.html_for_warning = (function shadow$cljs$devtools$client$hud$html_for_warning(p__82299){
var map__82300 = p__82299;
var map__82300__$1 = (((((!((map__82300 == null))))?(((((map__82300.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82300.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82300):map__82300);
var warning = map__82300__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82300__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var msg = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82300__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82300__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82300__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82300__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var source_excerpt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82300__$1,new cljs.core.Keyword(null,"source-excerpt","source-excerpt",5665576));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"10px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),"16px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fadb64",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"WARNING in "], null),shadow.cljs.devtools.client.hud.file_link(warning)], null),(cljs.core.truth_(source_excerpt)?(function (){var map__82307 = source_excerpt;
var map__82307__$1 = (((((!((map__82307 == null))))?(((((map__82307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82307.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82307):map__82307);
var start_idx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82307__$1,new cljs.core.Keyword(null,"start-idx","start-idx",-1600773745));
var before = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82307__$1,new cljs.core.Keyword(null,"before","before",-1633692388));
var line__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82307__$1,new cljs.core.Keyword(null,"line","line",212345235));
var after = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82307__$1,new cljs.core.Keyword(null,"after","after",594996914));
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px",new cljs.core.Keyword(null,"background-color","background-color",570434026),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc"], null)], null),shadow.cljs.devtools.client.hud.source_line_html(start_idx,before,shadow.cljs.devtools.client.hud.source_line_styles),shadow.cljs.devtools.client.hud.source_line_html((start_idx + cljs.core.count(before)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [line__$1], null),shadow.cljs.devtools.client.hud.source_highlight_styles),(function (){var arrow_idx = ((6) + (function (){var or__4185__auto__ = column;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})());
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$2("^",arrow_idx)], null);
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),"bold",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),"1.2em",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 0"], null)], null),msg], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),shadow.cljs.devtools.client.hud.source_highlight_styles], null),shadow.cljs.devtools.client.hud.sep_line.cljs$core$IFn$_invoke$arity$0()], null),shadow.cljs.devtools.client.hud.source_line_html(((start_idx + cljs.core.count(before)) + (1)),after,shadow.cljs.devtools.client.hud.source_line_styles)], null);
})():null)], null);
});
shadow.cljs.devtools.client.hud.hud_warnings = (function shadow$cljs$devtools$client$hud$hud_warnings(p__82312){
var map__82313 = p__82312;
var map__82313__$1 = (((((!((map__82313 == null))))?(((((map__82313.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82313.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82313):map__82313);
var msg = map__82313__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82313__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82313__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var map__82319 = info;
var map__82319__$1 = (((((!((map__82319 == null))))?(((((map__82319.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82319.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82319):map__82319);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82319__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var sources_with_warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__82311_SHARP_){
return cljs.core.seq(new cljs.core.Keyword(null,"warnings","warnings",-735437651).cljs$core$IFn$_invoke$arity$1(p1__82311_SHARP_));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827),sources)));
if(cljs.core.seq(sources_with_warnings)){
shadow.cljs.devtools.client.hud.load_end();

if(shadow.cljs.devtools.client.hud.show_warnings){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","10000","0px","flex","fixed","monospace","column","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),"flex-end",new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border","border",1444987323),"2px solid #ccc",new cljs.core.Keyword(null,"border-bottom","border-bottom",2110948415),"0px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"padding","padding",1660304693),"6px",new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"-2px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null),new cljs.core.Keyword(null,"on","on",173873944),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"click","click",1912301393),shadow.cljs.devtools.client.hud.hud_hide], null)], null),"Close"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#fff",new cljs.core.Keyword(null,"border-top","border-top",-158897573),"2px solid #ccc",new cljs.core.Keyword(null,"flex","flex",-1425124628),"1",new cljs.core.Keyword(null,"max-height","max-height",-612563804),"300px",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px 0",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"auto"], null)], null),(function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__82326(s__82327){
return (new cljs.core.LazySeq(null,(function (){
var s__82327__$1 = s__82327;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__82327__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__82338 = cljs.core.first(xs__6292__auto__);
var map__82338__$1 = (((((!((map__82338 == null))))?(((((map__82338.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82338.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82338):map__82338);
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82338__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
var iterys__4578__auto__ = ((function (s__82327__$1,map__82338,map__82338__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__82319,map__82319__$1,sources,sources_with_warnings,map__82313,map__82313__$1,msg,type,info){
return (function shadow$cljs$devtools$client$hud$hud_warnings_$_iter__82326_$_iter__82328(s__82329){
return (new cljs.core.LazySeq(null,((function (s__82327__$1,map__82338,map__82338__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__82319,map__82319__$1,sources,sources_with_warnings,map__82313,map__82313__$1,msg,type,info){
return (function (){
var s__82329__$1 = s__82329;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__82329__$1);
if(temp__5735__auto____$1){
var s__82329__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__82329__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__82329__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__82331 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__82330 = (0);
while(true){
if((i__82330 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__82330);
cljs.core.chunk_append(b__82331,shadow.cljs.devtools.client.hud.html_for_warning(warning));

var G__82553 = (i__82330 + (1));
i__82330 = G__82553;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82331),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__82326_$_iter__82328(cljs.core.chunk_rest(s__82329__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82331),null);
}
} else {
var warning = cljs.core.first(s__82329__$2);
return cljs.core.cons(shadow.cljs.devtools.client.hud.html_for_warning(warning),shadow$cljs$devtools$client$hud$hud_warnings_$_iter__82326_$_iter__82328(cljs.core.rest(s__82329__$2)));
}
} else {
return null;
}
break;
}
});})(s__82327__$1,map__82338,map__82338__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__82319,map__82319__$1,sources,sources_with_warnings,map__82313,map__82313__$1,msg,type,info))
,null,null));
});})(s__82327__$1,map__82338,map__82338__$1,warnings,xs__6292__auto__,temp__5735__auto__,map__82319,map__82319__$1,sources,sources_with_warnings,map__82313,map__82313__$1,msg,type,info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$hud$hud_warnings_$_iter__82326(cljs.core.rest(s__82327__$1)));
} else {
var G__82565 = cljs.core.rest(s__82327__$1);
s__82327__$1 = G__82565;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources_with_warnings);
})()], null)], null));
} else {
return null;
}
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.hud_error = (function shadow$cljs$devtools$client$hud$hud_error(p__82350){
var map__82351 = p__82350;
var map__82351__$1 = (((((!((map__82351 == null))))?(((((map__82351.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82351.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82351):map__82351);
var msg = map__82351__$1;
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82351__$1,new cljs.core.Keyword(null,"report","report",1394055010));
if(shadow.cljs.devtools.client.hud.show_errors){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.hud_id,new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"left","left",-399115937)],["#000","0px","12px","0px","auto","#fff","10000","20px","0px","fixed","5px solid red","monospace","0px"])], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),"color: red; margin-bottom: 10px; font-size: 2em;"], null),"Compilation failed!"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pre","pre",2118456869),report], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.connection_error_id = "shadow-connection-error";
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_ = (function shadow$cljs$devtools$client$hud$connection_error_clear_BANG_(){
var temp__5739__auto__ = shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.hud.connection_error_id);
if((temp__5739__auto__ == null)){
return null;
} else {
var x = temp__5739__auto__;
return shadow.dom.remove(x);
}
});
shadow.cljs.devtools.client.hud.connection_error = (function shadow$cljs$devtools$client$hud$connection_error(msg){
if(shadow.cljs.devtools.client.hud.show_errors){
return shadow.cljs.devtools.client.hud.dom_insert.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),shadow.cljs.devtools.client.hud.connection_error_id,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"pointer-events","pointer-events",-1053858853),"none",new cljs.core.Keyword(null,"left","left",-399115937),"0px",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"20px",new cljs.core.Keyword(null,"z-index","z-index",1892827090),"10000"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"border-top-right-radius","border-top-right-radius",1678770792),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"border-bottom-right-radius","border-bottom-right-radius",414899772),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["2px 2px 10px #aaa","#fff","14px","bold","40px","#c00","10px","40px","monospace"])], null),["shadow-cljs - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null)], null));
} else {
return null;
}
});
shadow.cljs.devtools.client.hud.load_failure = (function shadow$cljs$devtools$client$hud$load_failure(error,task,remaining){
shadow.cljs.devtools.client.hud.load_end();

console.error("reload-failed",error);

return shadow.cljs.devtools.client.hud.connection_error(["[reload failed] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(error.message)].join(''));
});

//# sourceMappingURL=shadow.cljs.devtools.client.hud.js.map
