goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__80353 = coll;
var G__80354 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__80353,G__80354) : shadow.dom.lazy_native_coll_seq.call(null,G__80353,G__80354));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__80383 = arguments.length;
switch (G__80383) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__80388 = arguments.length;
switch (G__80388) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__80394 = arguments.length;
switch (G__80394) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__80402 = arguments.length;
switch (G__80402) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__80416 = arguments.length;
switch (G__80416) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__80417 = document;
var G__80418 = shadow.dom.dom_node(el);
return goog.dom.contains(G__80417,G__80418);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__80421 = shadow.dom.dom_node(parent);
var G__80422 = shadow.dom.dom_node(el);
return goog.dom.contains(G__80421,G__80422);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__80424 = shadow.dom.dom_node(el);
var G__80425 = cls;
return goog.dom.classlist.add(G__80424,G__80425);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__80427 = shadow.dom.dom_node(el);
var G__80428 = cls;
return goog.dom.classlist.remove(G__80427,G__80428);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__80435 = arguments.length;
switch (G__80435) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__80437 = shadow.dom.dom_node(el);
var G__80438 = cls;
return goog.dom.classlist.toggle(G__80437,G__80438);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e80444){if((e80444 instanceof Object)){
var e = e80444;
return console.log("didnt support attachEvent",el,e);
} else {
throw e80444;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__80448 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__80449 = null;
var count__80450 = (0);
var i__80451 = (0);
while(true){
if((i__80451 < count__80450)){
var el = chunk__80449.cljs$core$IIndexed$_nth$arity$2(null,i__80451);
var handler_81062__$1 = ((function (seq__80448,chunk__80449,count__80450,i__80451,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__80448,chunk__80449,count__80450,i__80451,el))
;
var G__80463_81063 = el;
var G__80464_81064 = cljs.core.name(ev);
var G__80465_81065 = handler_81062__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__80463_81063,G__80464_81064,G__80465_81065) : shadow.dom.dom_listen.call(null,G__80463_81063,G__80464_81064,G__80465_81065));


var G__81067 = seq__80448;
var G__81068 = chunk__80449;
var G__81069 = count__80450;
var G__81070 = (i__80451 + (1));
seq__80448 = G__81067;
chunk__80449 = G__81068;
count__80450 = G__81069;
i__80451 = G__81070;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__80448);
if(temp__5735__auto__){
var seq__80448__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__80448__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__80448__$1);
var G__81072 = cljs.core.chunk_rest(seq__80448__$1);
var G__81073 = c__4609__auto__;
var G__81074 = cljs.core.count(c__4609__auto__);
var G__81075 = (0);
seq__80448 = G__81072;
chunk__80449 = G__81073;
count__80450 = G__81074;
i__80451 = G__81075;
continue;
} else {
var el = cljs.core.first(seq__80448__$1);
var handler_81077__$1 = ((function (seq__80448,chunk__80449,count__80450,i__80451,el,seq__80448__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__80448,chunk__80449,count__80450,i__80451,el,seq__80448__$1,temp__5735__auto__))
;
var G__80469_81079 = el;
var G__80470_81080 = cljs.core.name(ev);
var G__80471_81081 = handler_81077__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__80469_81079,G__80470_81080,G__80471_81081) : shadow.dom.dom_listen.call(null,G__80469_81079,G__80470_81080,G__80471_81081));


var G__81084 = cljs.core.next(seq__80448__$1);
var G__81085 = null;
var G__81086 = (0);
var G__81087 = (0);
seq__80448 = G__81084;
chunk__80449 = G__81085;
count__80450 = G__81086;
i__80451 = G__81087;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__80475 = arguments.length;
switch (G__80475) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__80481 = shadow.dom.dom_node(el);
var G__80482 = cljs.core.name(ev);
var G__80483 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__80481,G__80482,G__80483) : shadow.dom.dom_listen.call(null,G__80481,G__80482,G__80483));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__80488 = shadow.dom.dom_node(el);
var G__80489 = cljs.core.name(ev);
var G__80490 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__80488,G__80489,G__80490) : shadow.dom.dom_listen_remove.call(null,G__80488,G__80489,G__80490));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__80493 = cljs.core.seq(events);
var chunk__80494 = null;
var count__80495 = (0);
var i__80496 = (0);
while(true){
if((i__80496 < count__80495)){
var vec__80505 = chunk__80494.cljs$core$IIndexed$_nth$arity$2(null,i__80496);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80505,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80505,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__81095 = seq__80493;
var G__81096 = chunk__80494;
var G__81097 = count__80495;
var G__81098 = (i__80496 + (1));
seq__80493 = G__81095;
chunk__80494 = G__81096;
count__80495 = G__81097;
i__80496 = G__81098;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__80493);
if(temp__5735__auto__){
var seq__80493__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__80493__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__80493__$1);
var G__81099 = cljs.core.chunk_rest(seq__80493__$1);
var G__81100 = c__4609__auto__;
var G__81101 = cljs.core.count(c__4609__auto__);
var G__81102 = (0);
seq__80493 = G__81099;
chunk__80494 = G__81100;
count__80495 = G__81101;
i__80496 = G__81102;
continue;
} else {
var vec__80510 = cljs.core.first(seq__80493__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80510,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80510,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__81105 = cljs.core.next(seq__80493__$1);
var G__81106 = null;
var G__81107 = (0);
var G__81108 = (0);
seq__80493 = G__81105;
chunk__80494 = G__81106;
count__80495 = G__81107;
i__80496 = G__81108;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__80514 = cljs.core.seq(styles);
var chunk__80515 = null;
var count__80516 = (0);
var i__80517 = (0);
while(true){
if((i__80517 < count__80516)){
var vec__80531 = chunk__80515.cljs$core$IIndexed$_nth$arity$2(null,i__80517);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80531,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80531,(1),null);
var G__80534_81110 = dom;
var G__80535_81111 = cljs.core.name(k);
var G__80536_81112 = (((v == null))?"":v);
goog.style.setStyle(G__80534_81110,G__80535_81111,G__80536_81112);


var G__81113 = seq__80514;
var G__81114 = chunk__80515;
var G__81115 = count__80516;
var G__81116 = (i__80517 + (1));
seq__80514 = G__81113;
chunk__80515 = G__81114;
count__80516 = G__81115;
i__80517 = G__81116;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__80514);
if(temp__5735__auto__){
var seq__80514__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__80514__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__80514__$1);
var G__81118 = cljs.core.chunk_rest(seq__80514__$1);
var G__81119 = c__4609__auto__;
var G__81120 = cljs.core.count(c__4609__auto__);
var G__81121 = (0);
seq__80514 = G__81118;
chunk__80515 = G__81119;
count__80516 = G__81120;
i__80517 = G__81121;
continue;
} else {
var vec__80538 = cljs.core.first(seq__80514__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80538,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80538,(1),null);
var G__80541_81122 = dom;
var G__80542_81123 = cljs.core.name(k);
var G__80543_81124 = (((v == null))?"":v);
goog.style.setStyle(G__80541_81122,G__80542_81123,G__80543_81124);


var G__81125 = cljs.core.next(seq__80514__$1);
var G__81126 = null;
var G__81127 = (0);
var G__81128 = (0);
seq__80514 = G__81125;
chunk__80515 = G__81126;
count__80516 = G__81127;
i__80517 = G__81128;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__80551_81130 = key;
var G__80551_81131__$1 = (((G__80551_81130 instanceof cljs.core.Keyword))?G__80551_81130.fqn:null);
switch (G__80551_81131__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_81138 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_81138,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_81138,"aria-");
}
})())){
el.setAttribute(ks_81138,value);
} else {
(el[ks_81138] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__80562 = shadow.dom.dom_node(el);
var G__80563 = cls;
return goog.dom.classlist.contains(G__80562,G__80563);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__80571){
var map__80572 = p__80571;
var map__80572__$1 = (((((!((map__80572 == null))))?(((((map__80572.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__80572.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__80572):map__80572);
var props = map__80572__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__80572__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__80576 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80576,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80576,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80576,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__80580 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__80580,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__80580;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__80584 = arguments.length;
switch (G__80584) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__80587){
var vec__80588 = p__80587;
var seq__80589 = cljs.core.seq(vec__80588);
var first__80590 = cljs.core.first(seq__80589);
var seq__80589__$1 = cljs.core.next(seq__80589);
var nn = first__80590;
var first__80590__$1 = cljs.core.first(seq__80589__$1);
var seq__80589__$2 = cljs.core.next(seq__80589__$1);
var np = first__80590__$1;
var nc = seq__80589__$2;
var node = vec__80588;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__80592 = nn;
var G__80593 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__80592,G__80593) : create_fn.call(null,G__80592,G__80593));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__80594 = nn;
var G__80595 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__80594,G__80595) : create_fn.call(null,G__80594,G__80595));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__80598 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80598,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80598,(1),null);
var seq__80601_81158 = cljs.core.seq(node_children);
var chunk__80602_81159 = null;
var count__80603_81160 = (0);
var i__80604_81161 = (0);
while(true){
if((i__80604_81161 < count__80603_81160)){
var child_struct_81162 = chunk__80602_81159.cljs$core$IIndexed$_nth$arity$2(null,i__80604_81161);
var children_81163 = shadow.dom.dom_node(child_struct_81162);
if(cljs.core.seq_QMARK_(children_81163)){
var seq__80631_81164 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_81163));
var chunk__80633_81165 = null;
var count__80634_81166 = (0);
var i__80635_81167 = (0);
while(true){
if((i__80635_81167 < count__80634_81166)){
var child_81170 = chunk__80633_81165.cljs$core$IIndexed$_nth$arity$2(null,i__80635_81167);
if(cljs.core.truth_(child_81170)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_81170);


var G__81171 = seq__80631_81164;
var G__81172 = chunk__80633_81165;
var G__81173 = count__80634_81166;
var G__81174 = (i__80635_81167 + (1));
seq__80631_81164 = G__81171;
chunk__80633_81165 = G__81172;
count__80634_81166 = G__81173;
i__80635_81167 = G__81174;
continue;
} else {
var G__81176 = seq__80631_81164;
var G__81177 = chunk__80633_81165;
var G__81178 = count__80634_81166;
var G__81179 = (i__80635_81167 + (1));
seq__80631_81164 = G__81176;
chunk__80633_81165 = G__81177;
count__80634_81166 = G__81178;
i__80635_81167 = G__81179;
continue;
}
} else {
var temp__5735__auto___81181 = cljs.core.seq(seq__80631_81164);
if(temp__5735__auto___81181){
var seq__80631_81182__$1 = temp__5735__auto___81181;
if(cljs.core.chunked_seq_QMARK_(seq__80631_81182__$1)){
var c__4609__auto___81183 = cljs.core.chunk_first(seq__80631_81182__$1);
var G__81184 = cljs.core.chunk_rest(seq__80631_81182__$1);
var G__81185 = c__4609__auto___81183;
var G__81186 = cljs.core.count(c__4609__auto___81183);
var G__81187 = (0);
seq__80631_81164 = G__81184;
chunk__80633_81165 = G__81185;
count__80634_81166 = G__81186;
i__80635_81167 = G__81187;
continue;
} else {
var child_81189 = cljs.core.first(seq__80631_81182__$1);
if(cljs.core.truth_(child_81189)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_81189);


var G__81191 = cljs.core.next(seq__80631_81182__$1);
var G__81192 = null;
var G__81193 = (0);
var G__81194 = (0);
seq__80631_81164 = G__81191;
chunk__80633_81165 = G__81192;
count__80634_81166 = G__81193;
i__80635_81167 = G__81194;
continue;
} else {
var G__81195 = cljs.core.next(seq__80631_81182__$1);
var G__81196 = null;
var G__81197 = (0);
var G__81198 = (0);
seq__80631_81164 = G__81195;
chunk__80633_81165 = G__81196;
count__80634_81166 = G__81197;
i__80635_81167 = G__81198;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_81163);
}


var G__81199 = seq__80601_81158;
var G__81200 = chunk__80602_81159;
var G__81201 = count__80603_81160;
var G__81202 = (i__80604_81161 + (1));
seq__80601_81158 = G__81199;
chunk__80602_81159 = G__81200;
count__80603_81160 = G__81201;
i__80604_81161 = G__81202;
continue;
} else {
var temp__5735__auto___81203 = cljs.core.seq(seq__80601_81158);
if(temp__5735__auto___81203){
var seq__80601_81205__$1 = temp__5735__auto___81203;
if(cljs.core.chunked_seq_QMARK_(seq__80601_81205__$1)){
var c__4609__auto___81206 = cljs.core.chunk_first(seq__80601_81205__$1);
var G__81207 = cljs.core.chunk_rest(seq__80601_81205__$1);
var G__81208 = c__4609__auto___81206;
var G__81209 = cljs.core.count(c__4609__auto___81206);
var G__81210 = (0);
seq__80601_81158 = G__81207;
chunk__80602_81159 = G__81208;
count__80603_81160 = G__81209;
i__80604_81161 = G__81210;
continue;
} else {
var child_struct_81211 = cljs.core.first(seq__80601_81205__$1);
var children_81213 = shadow.dom.dom_node(child_struct_81211);
if(cljs.core.seq_QMARK_(children_81213)){
var seq__80637_81214 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_81213));
var chunk__80639_81215 = null;
var count__80640_81216 = (0);
var i__80641_81217 = (0);
while(true){
if((i__80641_81217 < count__80640_81216)){
var child_81218 = chunk__80639_81215.cljs$core$IIndexed$_nth$arity$2(null,i__80641_81217);
if(cljs.core.truth_(child_81218)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_81218);


var G__81219 = seq__80637_81214;
var G__81220 = chunk__80639_81215;
var G__81221 = count__80640_81216;
var G__81222 = (i__80641_81217 + (1));
seq__80637_81214 = G__81219;
chunk__80639_81215 = G__81220;
count__80640_81216 = G__81221;
i__80641_81217 = G__81222;
continue;
} else {
var G__81224 = seq__80637_81214;
var G__81225 = chunk__80639_81215;
var G__81226 = count__80640_81216;
var G__81227 = (i__80641_81217 + (1));
seq__80637_81214 = G__81224;
chunk__80639_81215 = G__81225;
count__80640_81216 = G__81226;
i__80641_81217 = G__81227;
continue;
}
} else {
var temp__5735__auto___81229__$1 = cljs.core.seq(seq__80637_81214);
if(temp__5735__auto___81229__$1){
var seq__80637_81231__$1 = temp__5735__auto___81229__$1;
if(cljs.core.chunked_seq_QMARK_(seq__80637_81231__$1)){
var c__4609__auto___81233 = cljs.core.chunk_first(seq__80637_81231__$1);
var G__81234 = cljs.core.chunk_rest(seq__80637_81231__$1);
var G__81235 = c__4609__auto___81233;
var G__81236 = cljs.core.count(c__4609__auto___81233);
var G__81237 = (0);
seq__80637_81214 = G__81234;
chunk__80639_81215 = G__81235;
count__80640_81216 = G__81236;
i__80641_81217 = G__81237;
continue;
} else {
var child_81238 = cljs.core.first(seq__80637_81231__$1);
if(cljs.core.truth_(child_81238)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_81238);


var G__81240 = cljs.core.next(seq__80637_81231__$1);
var G__81241 = null;
var G__81242 = (0);
var G__81243 = (0);
seq__80637_81214 = G__81240;
chunk__80639_81215 = G__81241;
count__80640_81216 = G__81242;
i__80641_81217 = G__81243;
continue;
} else {
var G__81244 = cljs.core.next(seq__80637_81231__$1);
var G__81245 = null;
var G__81246 = (0);
var G__81247 = (0);
seq__80637_81214 = G__81244;
chunk__80639_81215 = G__81245;
count__80640_81216 = G__81246;
i__80641_81217 = G__81247;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_81213);
}


var G__81249 = cljs.core.next(seq__80601_81205__$1);
var G__81250 = null;
var G__81251 = (0);
var G__81252 = (0);
seq__80601_81158 = G__81249;
chunk__80602_81159 = G__81250;
count__80603_81160 = G__81251;
i__80604_81161 = G__81252;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__80654 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__80654);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__80659 = cljs.core.seq(node);
var chunk__80660 = null;
var count__80661 = (0);
var i__80662 = (0);
while(true){
if((i__80662 < count__80661)){
var n = chunk__80660.cljs$core$IIndexed$_nth$arity$2(null,i__80662);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__81261 = seq__80659;
var G__81262 = chunk__80660;
var G__81263 = count__80661;
var G__81264 = (i__80662 + (1));
seq__80659 = G__81261;
chunk__80660 = G__81262;
count__80661 = G__81263;
i__80662 = G__81264;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__80659);
if(temp__5735__auto__){
var seq__80659__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__80659__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__80659__$1);
var G__81266 = cljs.core.chunk_rest(seq__80659__$1);
var G__81267 = c__4609__auto__;
var G__81268 = cljs.core.count(c__4609__auto__);
var G__81269 = (0);
seq__80659 = G__81266;
chunk__80660 = G__81267;
count__80661 = G__81268;
i__80662 = G__81269;
continue;
} else {
var n = cljs.core.first(seq__80659__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__81272 = cljs.core.next(seq__80659__$1);
var G__81273 = null;
var G__81274 = (0);
var G__81275 = (0);
seq__80659 = G__81272;
chunk__80660 = G__81273;
count__80661 = G__81274;
i__80662 = G__81275;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__80669 = shadow.dom.dom_node(new$);
var G__80670 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__80669,G__80670);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__80674 = arguments.length;
switch (G__80674) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__80679 = arguments.length;
switch (G__80679) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__80691 = arguments.length;
switch (G__80691) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___81296 = arguments.length;
var i__4790__auto___81297 = (0);
while(true){
if((i__4790__auto___81297 < len__4789__auto___81296)){
args__4795__auto__.push((arguments[i__4790__auto___81297]));

var G__81299 = (i__4790__auto___81297 + (1));
i__4790__auto___81297 = G__81299;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__80709_81301 = cljs.core.seq(nodes);
var chunk__80710_81302 = null;
var count__80711_81303 = (0);
var i__80712_81304 = (0);
while(true){
if((i__80712_81304 < count__80711_81303)){
var node_81306 = chunk__80710_81302.cljs$core$IIndexed$_nth$arity$2(null,i__80712_81304);
fragment.appendChild(shadow.dom._to_dom(node_81306));


var G__81308 = seq__80709_81301;
var G__81309 = chunk__80710_81302;
var G__81310 = count__80711_81303;
var G__81311 = (i__80712_81304 + (1));
seq__80709_81301 = G__81308;
chunk__80710_81302 = G__81309;
count__80711_81303 = G__81310;
i__80712_81304 = G__81311;
continue;
} else {
var temp__5735__auto___81312 = cljs.core.seq(seq__80709_81301);
if(temp__5735__auto___81312){
var seq__80709_81313__$1 = temp__5735__auto___81312;
if(cljs.core.chunked_seq_QMARK_(seq__80709_81313__$1)){
var c__4609__auto___81314 = cljs.core.chunk_first(seq__80709_81313__$1);
var G__81315 = cljs.core.chunk_rest(seq__80709_81313__$1);
var G__81316 = c__4609__auto___81314;
var G__81317 = cljs.core.count(c__4609__auto___81314);
var G__81318 = (0);
seq__80709_81301 = G__81315;
chunk__80710_81302 = G__81316;
count__80711_81303 = G__81317;
i__80712_81304 = G__81318;
continue;
} else {
var node_81320 = cljs.core.first(seq__80709_81313__$1);
fragment.appendChild(shadow.dom._to_dom(node_81320));


var G__81321 = cljs.core.next(seq__80709_81313__$1);
var G__81322 = null;
var G__81323 = (0);
var G__81324 = (0);
seq__80709_81301 = G__81321;
chunk__80710_81302 = G__81322;
count__80711_81303 = G__81323;
i__80712_81304 = G__81324;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq80705){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq80705));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__80720_81325 = cljs.core.seq(scripts);
var chunk__80721_81326 = null;
var count__80722_81327 = (0);
var i__80723_81328 = (0);
while(true){
if((i__80723_81328 < count__80722_81327)){
var vec__80730_81330 = chunk__80721_81326.cljs$core$IIndexed$_nth$arity$2(null,i__80723_81328);
var script_tag_81331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80730_81330,(0),null);
var script_body_81332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80730_81330,(1),null);
eval(script_body_81332);


var G__81334 = seq__80720_81325;
var G__81335 = chunk__80721_81326;
var G__81336 = count__80722_81327;
var G__81337 = (i__80723_81328 + (1));
seq__80720_81325 = G__81334;
chunk__80721_81326 = G__81335;
count__80722_81327 = G__81336;
i__80723_81328 = G__81337;
continue;
} else {
var temp__5735__auto___81338 = cljs.core.seq(seq__80720_81325);
if(temp__5735__auto___81338){
var seq__80720_81339__$1 = temp__5735__auto___81338;
if(cljs.core.chunked_seq_QMARK_(seq__80720_81339__$1)){
var c__4609__auto___81340 = cljs.core.chunk_first(seq__80720_81339__$1);
var G__81341 = cljs.core.chunk_rest(seq__80720_81339__$1);
var G__81342 = c__4609__auto___81340;
var G__81343 = cljs.core.count(c__4609__auto___81340);
var G__81344 = (0);
seq__80720_81325 = G__81341;
chunk__80721_81326 = G__81342;
count__80722_81327 = G__81343;
i__80723_81328 = G__81344;
continue;
} else {
var vec__80733_81349 = cljs.core.first(seq__80720_81339__$1);
var script_tag_81350 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80733_81349,(0),null);
var script_body_81351 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80733_81349,(1),null);
eval(script_body_81351);


var G__81352 = cljs.core.next(seq__80720_81339__$1);
var G__81353 = null;
var G__81354 = (0);
var G__81355 = (0);
seq__80720_81325 = G__81352;
chunk__80721_81326 = G__81353;
count__80722_81327 = G__81354;
i__80723_81328 = G__81355;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__80736){
var vec__80737 = p__80736;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80737,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80737,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__80742 = shadow.dom.dom_node(el);
var G__80743 = cls;
return goog.dom.getAncestorByClass(G__80742,G__80743);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__80746 = arguments.length;
switch (G__80746) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__80750 = shadow.dom.dom_node(el);
var G__80751 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__80750,G__80751);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__80752 = shadow.dom.dom_node(el);
var G__80753 = cljs.core.name(tag);
var G__80754 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__80752,G__80753,G__80754);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__80755 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__80755);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__80756 = shadow.dom.dom_node(dom);
var G__80757 = value;
return goog.dom.forms.setValue(G__80756,G__80757);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__80758 = cljs.core.seq(style_keys);
var chunk__80759 = null;
var count__80760 = (0);
var i__80761 = (0);
while(true){
if((i__80761 < count__80760)){
var it = chunk__80759.cljs$core$IIndexed$_nth$arity$2(null,i__80761);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__81360 = seq__80758;
var G__81361 = chunk__80759;
var G__81362 = count__80760;
var G__81363 = (i__80761 + (1));
seq__80758 = G__81360;
chunk__80759 = G__81361;
count__80760 = G__81362;
i__80761 = G__81363;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__80758);
if(temp__5735__auto__){
var seq__80758__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__80758__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__80758__$1);
var G__81364 = cljs.core.chunk_rest(seq__80758__$1);
var G__81365 = c__4609__auto__;
var G__81366 = cljs.core.count(c__4609__auto__);
var G__81367 = (0);
seq__80758 = G__81364;
chunk__80759 = G__81365;
count__80760 = G__81366;
i__80761 = G__81367;
continue;
} else {
var it = cljs.core.first(seq__80758__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__81368 = cljs.core.next(seq__80758__$1);
var G__81369 = null;
var G__81370 = (0);
var G__81371 = (0);
seq__80758 = G__81368;
chunk__80759 = G__81369;
count__80760 = G__81370;
i__80761 = G__81371;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k80763,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__80772 = k80763;
var G__80772__$1 = (((G__80772 instanceof cljs.core.Keyword))?G__80772.fqn:null);
switch (G__80772__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k80763,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__80776){
var vec__80779 = p__80776;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80779,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80779,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__80762){
var self__ = this;
var G__80762__$1 = this;
return (new cljs.core.RecordIter((0),G__80762__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__80789 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__80789(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this80764,other80765){
var self__ = this;
var this80764__$1 = this;
return (((!((other80765 == null)))) && ((this80764__$1.constructor === other80765.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this80764__$1.x,other80765.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this80764__$1.y,other80765.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this80764__$1.__extmap,other80765.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__80762){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__80797 = cljs.core.keyword_identical_QMARK_;
var expr__80798 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__80801 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__80802 = expr__80798;
return (pred__80797.cljs$core$IFn$_invoke$arity$2 ? pred__80797.cljs$core$IFn$_invoke$arity$2(G__80801,G__80802) : pred__80797.call(null,G__80801,G__80802));
})())){
return (new shadow.dom.Coordinate(G__80762,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__80804 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__80805 = expr__80798;
return (pred__80797.cljs$core$IFn$_invoke$arity$2 ? pred__80797.cljs$core$IFn$_invoke$arity$2(G__80804,G__80805) : pred__80797.call(null,G__80804,G__80805));
})())){
return (new shadow.dom.Coordinate(self__.x,G__80762,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__80762),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__80762){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__80762,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__80767){
var extmap__4478__auto__ = (function (){var G__80819 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__80767,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__80767)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__80819);
} else {
return G__80819;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__80767),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__80767),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__80823 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__80823);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__80825 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__80825);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__80827 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__80827);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k80831,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__80838 = k80831;
var G__80838__$1 = (((G__80838 instanceof cljs.core.Keyword))?G__80838.fqn:null);
switch (G__80838__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k80831,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__80839){
var vec__80840 = p__80839;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80840,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80840,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__80830){
var self__ = this;
var G__80830__$1 = this;
return (new cljs.core.RecordIter((0),G__80830__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__80844 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__80844(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this80832,other80833){
var self__ = this;
var this80832__$1 = this;
return (((!((other80833 == null)))) && ((this80832__$1.constructor === other80833.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this80832__$1.w,other80833.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this80832__$1.h,other80833.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this80832__$1.__extmap,other80833.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__80830){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__80846 = cljs.core.keyword_identical_QMARK_;
var expr__80847 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__80849 = new cljs.core.Keyword(null,"w","w",354169001);
var G__80850 = expr__80847;
return (pred__80846.cljs$core$IFn$_invoke$arity$2 ? pred__80846.cljs$core$IFn$_invoke$arity$2(G__80849,G__80850) : pred__80846.call(null,G__80849,G__80850));
})())){
return (new shadow.dom.Size(G__80830,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__80851 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__80852 = expr__80847;
return (pred__80846.cljs$core$IFn$_invoke$arity$2 ? pred__80846.cljs$core$IFn$_invoke$arity$2(G__80851,G__80852) : pred__80846.call(null,G__80851,G__80852));
})())){
return (new shadow.dom.Size(self__.w,G__80830,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__80830),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__80830){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__80830,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__80835){
var extmap__4478__auto__ = (function (){var G__80856 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__80835,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__80835)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__80856);
} else {
return G__80856;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__80835),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__80835),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__80862 = shadow.dom.dom_node(el);
return goog.style.getSize(G__80862);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__81400 = (i + (1));
var G__81401 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__81400;
ret = G__81401;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__80878){
var vec__80879 = p__80878;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80879,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80879,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__80886 = arguments.length;
switch (G__80886) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__80892_81407 = new_node;
var G__80893_81408 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__80892_81407,G__80893_81408);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__80896_81409 = new_node;
var G__80897_81410 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__80896_81409,G__80897_81410);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__81411 = ps;
var G__81412 = (i + (1));
el__$1 = G__81411;
i = G__81412;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__80901 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__80901);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__80904 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__80904);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__80906 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__80906);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__80911 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80911,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80911,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80911,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__80915_81415 = cljs.core.seq(props);
var chunk__80916_81416 = null;
var count__80917_81417 = (0);
var i__80918_81418 = (0);
while(true){
if((i__80918_81418 < count__80917_81417)){
var vec__80930_81419 = chunk__80916_81416.cljs$core$IIndexed$_nth$arity$2(null,i__80918_81418);
var k_81420 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80930_81419,(0),null);
var v_81421 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80930_81419,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_81420);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_81420),v_81421);


var G__81422 = seq__80915_81415;
var G__81423 = chunk__80916_81416;
var G__81424 = count__80917_81417;
var G__81425 = (i__80918_81418 + (1));
seq__80915_81415 = G__81422;
chunk__80916_81416 = G__81423;
count__80917_81417 = G__81424;
i__80918_81418 = G__81425;
continue;
} else {
var temp__5735__auto___81426 = cljs.core.seq(seq__80915_81415);
if(temp__5735__auto___81426){
var seq__80915_81427__$1 = temp__5735__auto___81426;
if(cljs.core.chunked_seq_QMARK_(seq__80915_81427__$1)){
var c__4609__auto___81428 = cljs.core.chunk_first(seq__80915_81427__$1);
var G__81429 = cljs.core.chunk_rest(seq__80915_81427__$1);
var G__81430 = c__4609__auto___81428;
var G__81431 = cljs.core.count(c__4609__auto___81428);
var G__81432 = (0);
seq__80915_81415 = G__81429;
chunk__80916_81416 = G__81430;
count__80917_81417 = G__81431;
i__80918_81418 = G__81432;
continue;
} else {
var vec__80935_81433 = cljs.core.first(seq__80915_81427__$1);
var k_81434 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80935_81433,(0),null);
var v_81435 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80935_81433,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_81434);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_81434),v_81435);


var G__81437 = cljs.core.next(seq__80915_81427__$1);
var G__81438 = null;
var G__81439 = (0);
var G__81440 = (0);
seq__80915_81415 = G__81437;
chunk__80916_81416 = G__81438;
count__80917_81417 = G__81439;
i__80918_81418 = G__81440;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__80944 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80944,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__80944,(1),null);
var seq__80947_81441 = cljs.core.seq(node_children);
var chunk__80949_81442 = null;
var count__80950_81443 = (0);
var i__80951_81444 = (0);
while(true){
if((i__80951_81444 < count__80950_81443)){
var child_struct_81445 = chunk__80949_81442.cljs$core$IIndexed$_nth$arity$2(null,i__80951_81444);
if((!((child_struct_81445 == null)))){
if(typeof child_struct_81445 === 'string'){
var text_81446 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_81446),child_struct_81445].join(''));
} else {
var children_81447 = shadow.dom.svg_node(child_struct_81445);
if(cljs.core.seq_QMARK_(children_81447)){
var seq__80979_81448 = cljs.core.seq(children_81447);
var chunk__80981_81449 = null;
var count__80982_81450 = (0);
var i__80983_81451 = (0);
while(true){
if((i__80983_81451 < count__80982_81450)){
var child_81452 = chunk__80981_81449.cljs$core$IIndexed$_nth$arity$2(null,i__80983_81451);
if(cljs.core.truth_(child_81452)){
node.appendChild(child_81452);


var G__81453 = seq__80979_81448;
var G__81454 = chunk__80981_81449;
var G__81455 = count__80982_81450;
var G__81456 = (i__80983_81451 + (1));
seq__80979_81448 = G__81453;
chunk__80981_81449 = G__81454;
count__80982_81450 = G__81455;
i__80983_81451 = G__81456;
continue;
} else {
var G__81457 = seq__80979_81448;
var G__81458 = chunk__80981_81449;
var G__81459 = count__80982_81450;
var G__81460 = (i__80983_81451 + (1));
seq__80979_81448 = G__81457;
chunk__80981_81449 = G__81458;
count__80982_81450 = G__81459;
i__80983_81451 = G__81460;
continue;
}
} else {
var temp__5735__auto___81461 = cljs.core.seq(seq__80979_81448);
if(temp__5735__auto___81461){
var seq__80979_81462__$1 = temp__5735__auto___81461;
if(cljs.core.chunked_seq_QMARK_(seq__80979_81462__$1)){
var c__4609__auto___81463 = cljs.core.chunk_first(seq__80979_81462__$1);
var G__81464 = cljs.core.chunk_rest(seq__80979_81462__$1);
var G__81465 = c__4609__auto___81463;
var G__81466 = cljs.core.count(c__4609__auto___81463);
var G__81467 = (0);
seq__80979_81448 = G__81464;
chunk__80981_81449 = G__81465;
count__80982_81450 = G__81466;
i__80983_81451 = G__81467;
continue;
} else {
var child_81468 = cljs.core.first(seq__80979_81462__$1);
if(cljs.core.truth_(child_81468)){
node.appendChild(child_81468);


var G__81470 = cljs.core.next(seq__80979_81462__$1);
var G__81471 = null;
var G__81472 = (0);
var G__81473 = (0);
seq__80979_81448 = G__81470;
chunk__80981_81449 = G__81471;
count__80982_81450 = G__81472;
i__80983_81451 = G__81473;
continue;
} else {
var G__81474 = cljs.core.next(seq__80979_81462__$1);
var G__81475 = null;
var G__81476 = (0);
var G__81477 = (0);
seq__80979_81448 = G__81474;
chunk__80981_81449 = G__81475;
count__80982_81450 = G__81476;
i__80983_81451 = G__81477;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_81447);
}
}


var G__81479 = seq__80947_81441;
var G__81480 = chunk__80949_81442;
var G__81481 = count__80950_81443;
var G__81482 = (i__80951_81444 + (1));
seq__80947_81441 = G__81479;
chunk__80949_81442 = G__81480;
count__80950_81443 = G__81481;
i__80951_81444 = G__81482;
continue;
} else {
var G__81483 = seq__80947_81441;
var G__81484 = chunk__80949_81442;
var G__81485 = count__80950_81443;
var G__81486 = (i__80951_81444 + (1));
seq__80947_81441 = G__81483;
chunk__80949_81442 = G__81484;
count__80950_81443 = G__81485;
i__80951_81444 = G__81486;
continue;
}
} else {
var temp__5735__auto___81487 = cljs.core.seq(seq__80947_81441);
if(temp__5735__auto___81487){
var seq__80947_81488__$1 = temp__5735__auto___81487;
if(cljs.core.chunked_seq_QMARK_(seq__80947_81488__$1)){
var c__4609__auto___81489 = cljs.core.chunk_first(seq__80947_81488__$1);
var G__81490 = cljs.core.chunk_rest(seq__80947_81488__$1);
var G__81491 = c__4609__auto___81489;
var G__81492 = cljs.core.count(c__4609__auto___81489);
var G__81493 = (0);
seq__80947_81441 = G__81490;
chunk__80949_81442 = G__81491;
count__80950_81443 = G__81492;
i__80951_81444 = G__81493;
continue;
} else {
var child_struct_81494 = cljs.core.first(seq__80947_81488__$1);
if((!((child_struct_81494 == null)))){
if(typeof child_struct_81494 === 'string'){
var text_81495 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_81495),child_struct_81494].join(''));
} else {
var children_81496 = shadow.dom.svg_node(child_struct_81494);
if(cljs.core.seq_QMARK_(children_81496)){
var seq__80993_81497 = cljs.core.seq(children_81496);
var chunk__80995_81498 = null;
var count__80996_81499 = (0);
var i__80997_81500 = (0);
while(true){
if((i__80997_81500 < count__80996_81499)){
var child_81501 = chunk__80995_81498.cljs$core$IIndexed$_nth$arity$2(null,i__80997_81500);
if(cljs.core.truth_(child_81501)){
node.appendChild(child_81501);


var G__81503 = seq__80993_81497;
var G__81504 = chunk__80995_81498;
var G__81505 = count__80996_81499;
var G__81506 = (i__80997_81500 + (1));
seq__80993_81497 = G__81503;
chunk__80995_81498 = G__81504;
count__80996_81499 = G__81505;
i__80997_81500 = G__81506;
continue;
} else {
var G__81507 = seq__80993_81497;
var G__81508 = chunk__80995_81498;
var G__81509 = count__80996_81499;
var G__81510 = (i__80997_81500 + (1));
seq__80993_81497 = G__81507;
chunk__80995_81498 = G__81508;
count__80996_81499 = G__81509;
i__80997_81500 = G__81510;
continue;
}
} else {
var temp__5735__auto___81511__$1 = cljs.core.seq(seq__80993_81497);
if(temp__5735__auto___81511__$1){
var seq__80993_81512__$1 = temp__5735__auto___81511__$1;
if(cljs.core.chunked_seq_QMARK_(seq__80993_81512__$1)){
var c__4609__auto___81513 = cljs.core.chunk_first(seq__80993_81512__$1);
var G__81514 = cljs.core.chunk_rest(seq__80993_81512__$1);
var G__81515 = c__4609__auto___81513;
var G__81516 = cljs.core.count(c__4609__auto___81513);
var G__81517 = (0);
seq__80993_81497 = G__81514;
chunk__80995_81498 = G__81515;
count__80996_81499 = G__81516;
i__80997_81500 = G__81517;
continue;
} else {
var child_81522 = cljs.core.first(seq__80993_81512__$1);
if(cljs.core.truth_(child_81522)){
node.appendChild(child_81522);


var G__81523 = cljs.core.next(seq__80993_81512__$1);
var G__81524 = null;
var G__81525 = (0);
var G__81526 = (0);
seq__80993_81497 = G__81523;
chunk__80995_81498 = G__81524;
count__80996_81499 = G__81525;
i__80997_81500 = G__81526;
continue;
} else {
var G__81527 = cljs.core.next(seq__80993_81512__$1);
var G__81528 = null;
var G__81529 = (0);
var G__81530 = (0);
seq__80993_81497 = G__81527;
chunk__80995_81498 = G__81528;
count__80996_81499 = G__81529;
i__80997_81500 = G__81530;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_81496);
}
}


var G__81532 = cljs.core.next(seq__80947_81488__$1);
var G__81533 = null;
var G__81534 = (0);
var G__81535 = (0);
seq__80947_81441 = G__81532;
chunk__80949_81442 = G__81533;
count__80950_81443 = G__81534;
i__80951_81444 = G__81535;
continue;
} else {
var G__81536 = cljs.core.next(seq__80947_81488__$1);
var G__81537 = null;
var G__81538 = (0);
var G__81539 = (0);
seq__80947_81441 = G__81536;
chunk__80949_81442 = G__81537;
count__80950_81443 = G__81538;
i__80951_81444 = G__81539;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__81005_81540 = shadow.dom._to_svg;
var G__81006_81541 = "string";
var G__81007_81542 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__81005_81540,G__81006_81541,G__81007_81542);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__81008_81544 = shadow.dom._to_svg;
var G__81009_81545 = "null";
var G__81010_81546 = (function (_){
return null;
});
goog.object.set(G__81008_81544,G__81009_81545,G__81010_81546);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___81547 = arguments.length;
var i__4790__auto___81548 = (0);
while(true){
if((i__4790__auto___81548 < len__4789__auto___81547)){
args__4795__auto__.push((arguments[i__4790__auto___81548]));

var G__81549 = (i__4790__auto___81548 + (1));
i__4790__auto___81548 = G__81549;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq81011){
var G__81012 = cljs.core.first(seq81011);
var seq81011__$1 = cljs.core.next(seq81011);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__81012,seq81011__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__81014 = arguments.length;
switch (G__81014) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__81015_81555 = shadow.dom.dom_node(el);
var G__81016_81556 = cljs.core.name(event);
var G__81017_81557 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__81015_81555,G__81016_81556,G__81017_81557) : shadow.dom.dom_listen.call(null,G__81015_81555,G__81016_81556,G__81017_81557));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__41748__auto___81558 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41749__auto__ = (function (){var switch__41725__auto__ = (function (state_81022){
var state_val_81023 = (state_81022[(1)]);
if((state_val_81023 === (1))){
var state_81022__$1 = state_81022;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_81022__$1,(2),once_or_cleanup);
} else {
if((state_val_81023 === (2))){
var inst_81019 = (state_81022[(2)]);
var inst_81020 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_81022__$1 = (function (){var statearr_81024 = state_81022;
(statearr_81024[(7)] = inst_81019);

return statearr_81024;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_81022__$1,inst_81020);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__41726__auto__ = null;
var shadow$dom$state_machine__41726__auto____0 = (function (){
var statearr_81025 = [null,null,null,null,null,null,null,null];
(statearr_81025[(0)] = shadow$dom$state_machine__41726__auto__);

(statearr_81025[(1)] = (1));

return statearr_81025;
});
var shadow$dom$state_machine__41726__auto____1 = (function (state_81022){
while(true){
var ret_value__41727__auto__ = (function (){try{while(true){
var result__41728__auto__ = switch__41725__auto__(state_81022);
if(cljs.core.keyword_identical_QMARK_(result__41728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41728__auto__;
}
break;
}
}catch (e81026){if((e81026 instanceof Object)){
var ex__41729__auto__ = e81026;
var statearr_81027_81560 = state_81022;
(statearr_81027_81560[(5)] = ex__41729__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_81022);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e81026;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81561 = state_81022;
state_81022 = G__81561;
continue;
} else {
return ret_value__41727__auto__;
}
break;
}
});
shadow$dom$state_machine__41726__auto__ = function(state_81022){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__41726__auto____0.call(this);
case 1:
return shadow$dom$state_machine__41726__auto____1.call(this,state_81022);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__41726__auto____0;
shadow$dom$state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__41726__auto____1;
return shadow$dom$state_machine__41726__auto__;
})()
})();
var state__41750__auto__ = (function (){var statearr_81029 = (f__41749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41749__auto__.cljs$core$IFn$_invoke$arity$0() : f__41749__auto__.call(null));
(statearr_81029[(6)] = c__41748__auto___81558);

return statearr_81029;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41750__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
