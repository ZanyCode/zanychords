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
return cljs.core.cons((coll[idx]),(function (){var G__47747 = coll;
var G__47748 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__47747,G__47748) : shadow.dom.lazy_native_coll_seq.call(null,G__47747,G__47748));
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
var G__47810 = arguments.length;
switch (G__47810) {
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
var G__47815 = arguments.length;
switch (G__47815) {
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
var G__47820 = arguments.length;
switch (G__47820) {
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
var G__47823 = arguments.length;
switch (G__47823) {
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
var G__47877 = arguments.length;
switch (G__47877) {
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
var G__47880 = document;
var G__47881 = shadow.dom.dom_node(el);
return goog.dom.contains(G__47880,G__47881);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__47882 = shadow.dom.dom_node(parent);
var G__47883 = shadow.dom.dom_node(el);
return goog.dom.contains(G__47882,G__47883);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__47886 = shadow.dom.dom_node(el);
var G__47887 = cls;
return goog.dom.classlist.add(G__47886,G__47887);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__47888 = shadow.dom.dom_node(el);
var G__47889 = cls;
return goog.dom.classlist.remove(G__47888,G__47889);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__47891 = arguments.length;
switch (G__47891) {
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
var G__47892 = shadow.dom.dom_node(el);
var G__47893 = cls;
return goog.dom.classlist.toggle(G__47892,G__47893);
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
}catch (e47894){if((e47894 instanceof Object)){
var e = e47894;
return console.log("didnt support attachEvent",el,e);
} else {
throw e47894;

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
var seq__47895 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__47896 = null;
var count__47897 = (0);
var i__47898 = (0);
while(true){
if((i__47898 < count__47897)){
var el = chunk__47896.cljs$core$IIndexed$_nth$arity$2(null,i__47898);
var handler_48499__$1 = ((function (seq__47895,chunk__47896,count__47897,i__47898,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47895,chunk__47896,count__47897,i__47898,el))
;
var G__47905_48500 = el;
var G__47906_48501 = cljs.core.name(ev);
var G__47907_48502 = handler_48499__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47905_48500,G__47906_48501,G__47907_48502) : shadow.dom.dom_listen.call(null,G__47905_48500,G__47906_48501,G__47907_48502));


var G__48503 = seq__47895;
var G__48504 = chunk__47896;
var G__48505 = count__47897;
var G__48506 = (i__47898 + (1));
seq__47895 = G__48503;
chunk__47896 = G__48504;
count__47897 = G__48505;
i__47898 = G__48506;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47895);
if(temp__5735__auto__){
var seq__47895__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47895__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47895__$1);
var G__48507 = cljs.core.chunk_rest(seq__47895__$1);
var G__48508 = c__4609__auto__;
var G__48509 = cljs.core.count(c__4609__auto__);
var G__48510 = (0);
seq__47895 = G__48507;
chunk__47896 = G__48508;
count__47897 = G__48509;
i__47898 = G__48510;
continue;
} else {
var el = cljs.core.first(seq__47895__$1);
var handler_48511__$1 = ((function (seq__47895,chunk__47896,count__47897,i__47898,el,seq__47895__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__47895,chunk__47896,count__47897,i__47898,el,seq__47895__$1,temp__5735__auto__))
;
var G__47908_48512 = el;
var G__47909_48513 = cljs.core.name(ev);
var G__47910_48514 = handler_48511__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47908_48512,G__47909_48513,G__47910_48514) : shadow.dom.dom_listen.call(null,G__47908_48512,G__47909_48513,G__47910_48514));


var G__48515 = cljs.core.next(seq__47895__$1);
var G__48516 = null;
var G__48517 = (0);
var G__48518 = (0);
seq__47895 = G__48515;
chunk__47896 = G__48516;
count__47897 = G__48517;
i__47898 = G__48518;
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
var G__47912 = arguments.length;
switch (G__47912) {
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
var G__47915 = shadow.dom.dom_node(el);
var G__47916 = cljs.core.name(ev);
var G__47917 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__47915,G__47916,G__47917) : shadow.dom.dom_listen.call(null,G__47915,G__47916,G__47917));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__47920 = shadow.dom.dom_node(el);
var G__47921 = cljs.core.name(ev);
var G__47922 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__47920,G__47921,G__47922) : shadow.dom.dom_listen_remove.call(null,G__47920,G__47921,G__47922));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__47926 = cljs.core.seq(events);
var chunk__47927 = null;
var count__47928 = (0);
var i__47929 = (0);
while(true){
if((i__47929 < count__47928)){
var vec__47940 = chunk__47927.cljs$core$IIndexed$_nth$arity$2(null,i__47929);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47940,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47940,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48520 = seq__47926;
var G__48521 = chunk__47927;
var G__48522 = count__47928;
var G__48523 = (i__47929 + (1));
seq__47926 = G__48520;
chunk__47927 = G__48521;
count__47928 = G__48522;
i__47929 = G__48523;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47926);
if(temp__5735__auto__){
var seq__47926__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47926__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47926__$1);
var G__48524 = cljs.core.chunk_rest(seq__47926__$1);
var G__48525 = c__4609__auto__;
var G__48526 = cljs.core.count(c__4609__auto__);
var G__48527 = (0);
seq__47926 = G__48524;
chunk__47927 = G__48525;
count__47928 = G__48526;
i__47929 = G__48527;
continue;
} else {
var vec__47944 = cljs.core.first(seq__47926__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47944,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47944,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__48528 = cljs.core.next(seq__47926__$1);
var G__48529 = null;
var G__48530 = (0);
var G__48531 = (0);
seq__47926 = G__48528;
chunk__47927 = G__48529;
count__47928 = G__48530;
i__47929 = G__48531;
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
var seq__47949 = cljs.core.seq(styles);
var chunk__47950 = null;
var count__47951 = (0);
var i__47952 = (0);
while(true){
if((i__47952 < count__47951)){
var vec__47969 = chunk__47950.cljs$core$IIndexed$_nth$arity$2(null,i__47952);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47969,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__47969,(1),null);
var G__47973_48532 = dom;
var G__47974_48533 = cljs.core.name(k);
var G__47975_48534 = (((v == null))?"":v);
goog.style.setStyle(G__47973_48532,G__47974_48533,G__47975_48534);


var G__48535 = seq__47949;
var G__48536 = chunk__47950;
var G__48537 = count__47951;
var G__48538 = (i__47952 + (1));
seq__47949 = G__48535;
chunk__47950 = G__48536;
count__47951 = G__48537;
i__47952 = G__48538;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__47949);
if(temp__5735__auto__){
var seq__47949__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__47949__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__47949__$1);
var G__48539 = cljs.core.chunk_rest(seq__47949__$1);
var G__48540 = c__4609__auto__;
var G__48541 = cljs.core.count(c__4609__auto__);
var G__48542 = (0);
seq__47949 = G__48539;
chunk__47950 = G__48540;
count__47951 = G__48541;
i__47952 = G__48542;
continue;
} else {
var vec__48005 = cljs.core.first(seq__47949__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48005,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48005,(1),null);
var G__48008_48543 = dom;
var G__48009_48544 = cljs.core.name(k);
var G__48010_48545 = (((v == null))?"":v);
goog.style.setStyle(G__48008_48543,G__48009_48544,G__48010_48545);


var G__48547 = cljs.core.next(seq__47949__$1);
var G__48548 = null;
var G__48549 = (0);
var G__48550 = (0);
seq__47949 = G__48547;
chunk__47950 = G__48548;
count__47951 = G__48549;
i__47952 = G__48550;
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
var G__48014_48552 = key;
var G__48014_48553__$1 = (((G__48014_48552 instanceof cljs.core.Keyword))?G__48014_48552.fqn:null);
switch (G__48014_48553__$1) {
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
var ks_48555 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_48555,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_48555,"aria-");
}
})())){
el.setAttribute(ks_48555,value);
} else {
(el[ks_48555] = value);
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
var G__48021 = shadow.dom.dom_node(el);
var G__48022 = cls;
return goog.dom.classlist.contains(G__48021,G__48022);
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
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__48024){
var map__48025 = p__48024;
var map__48025__$1 = (((((!((map__48025 == null))))?(((((map__48025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__48025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__48025):map__48025);
var props = map__48025__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48025__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__48027 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48027,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48027,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48027,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__48030 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__48030,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__48030;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__48032 = arguments.length;
switch (G__48032) {
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

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__48039){
var vec__48040 = p__48039;
var seq__48041 = cljs.core.seq(vec__48040);
var first__48042 = cljs.core.first(seq__48041);
var seq__48041__$1 = cljs.core.next(seq__48041);
var nn = first__48042;
var first__48042__$1 = cljs.core.first(seq__48041__$1);
var seq__48041__$2 = cljs.core.next(seq__48041__$1);
var np = first__48042__$1;
var nc = seq__48041__$2;
var node = vec__48040;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48043 = nn;
var G__48044 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48043,G__48044) : create_fn.call(null,G__48043,G__48044));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__48045 = nn;
var G__48046 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__48045,G__48046) : create_fn.call(null,G__48045,G__48046));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__48047 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48047,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48047,(1),null);
var seq__48050_48562 = cljs.core.seq(node_children);
var chunk__48051_48563 = null;
var count__48052_48564 = (0);
var i__48053_48565 = (0);
while(true){
if((i__48053_48565 < count__48052_48564)){
var child_struct_48566 = chunk__48051_48563.cljs$core$IIndexed$_nth$arity$2(null,i__48053_48565);
var children_48567 = shadow.dom.dom_node(child_struct_48566);
if(cljs.core.seq_QMARK_(children_48567)){
var seq__48072_48568 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48567));
var chunk__48074_48569 = null;
var count__48075_48570 = (0);
var i__48076_48571 = (0);
while(true){
if((i__48076_48571 < count__48075_48570)){
var child_48572 = chunk__48074_48569.cljs$core$IIndexed$_nth$arity$2(null,i__48076_48571);
if(cljs.core.truth_(child_48572)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48572);


var G__48574 = seq__48072_48568;
var G__48575 = chunk__48074_48569;
var G__48576 = count__48075_48570;
var G__48577 = (i__48076_48571 + (1));
seq__48072_48568 = G__48574;
chunk__48074_48569 = G__48575;
count__48075_48570 = G__48576;
i__48076_48571 = G__48577;
continue;
} else {
var G__48579 = seq__48072_48568;
var G__48580 = chunk__48074_48569;
var G__48581 = count__48075_48570;
var G__48582 = (i__48076_48571 + (1));
seq__48072_48568 = G__48579;
chunk__48074_48569 = G__48580;
count__48075_48570 = G__48581;
i__48076_48571 = G__48582;
continue;
}
} else {
var temp__5735__auto___48583 = cljs.core.seq(seq__48072_48568);
if(temp__5735__auto___48583){
var seq__48072_48584__$1 = temp__5735__auto___48583;
if(cljs.core.chunked_seq_QMARK_(seq__48072_48584__$1)){
var c__4609__auto___48585 = cljs.core.chunk_first(seq__48072_48584__$1);
var G__48586 = cljs.core.chunk_rest(seq__48072_48584__$1);
var G__48587 = c__4609__auto___48585;
var G__48588 = cljs.core.count(c__4609__auto___48585);
var G__48589 = (0);
seq__48072_48568 = G__48586;
chunk__48074_48569 = G__48587;
count__48075_48570 = G__48588;
i__48076_48571 = G__48589;
continue;
} else {
var child_48590 = cljs.core.first(seq__48072_48584__$1);
if(cljs.core.truth_(child_48590)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48590);


var G__48591 = cljs.core.next(seq__48072_48584__$1);
var G__48592 = null;
var G__48593 = (0);
var G__48594 = (0);
seq__48072_48568 = G__48591;
chunk__48074_48569 = G__48592;
count__48075_48570 = G__48593;
i__48076_48571 = G__48594;
continue;
} else {
var G__48595 = cljs.core.next(seq__48072_48584__$1);
var G__48596 = null;
var G__48597 = (0);
var G__48598 = (0);
seq__48072_48568 = G__48595;
chunk__48074_48569 = G__48596;
count__48075_48570 = G__48597;
i__48076_48571 = G__48598;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48567);
}


var G__48599 = seq__48050_48562;
var G__48600 = chunk__48051_48563;
var G__48601 = count__48052_48564;
var G__48602 = (i__48053_48565 + (1));
seq__48050_48562 = G__48599;
chunk__48051_48563 = G__48600;
count__48052_48564 = G__48601;
i__48053_48565 = G__48602;
continue;
} else {
var temp__5735__auto___48604 = cljs.core.seq(seq__48050_48562);
if(temp__5735__auto___48604){
var seq__48050_48605__$1 = temp__5735__auto___48604;
if(cljs.core.chunked_seq_QMARK_(seq__48050_48605__$1)){
var c__4609__auto___48606 = cljs.core.chunk_first(seq__48050_48605__$1);
var G__48607 = cljs.core.chunk_rest(seq__48050_48605__$1);
var G__48608 = c__4609__auto___48606;
var G__48609 = cljs.core.count(c__4609__auto___48606);
var G__48610 = (0);
seq__48050_48562 = G__48607;
chunk__48051_48563 = G__48608;
count__48052_48564 = G__48609;
i__48053_48565 = G__48610;
continue;
} else {
var child_struct_48611 = cljs.core.first(seq__48050_48605__$1);
var children_48612 = shadow.dom.dom_node(child_struct_48611);
if(cljs.core.seq_QMARK_(children_48612)){
var seq__48087_48613 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_48612));
var chunk__48089_48614 = null;
var count__48090_48615 = (0);
var i__48091_48616 = (0);
while(true){
if((i__48091_48616 < count__48090_48615)){
var child_48617 = chunk__48089_48614.cljs$core$IIndexed$_nth$arity$2(null,i__48091_48616);
if(cljs.core.truth_(child_48617)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48617);


var G__48620 = seq__48087_48613;
var G__48621 = chunk__48089_48614;
var G__48622 = count__48090_48615;
var G__48623 = (i__48091_48616 + (1));
seq__48087_48613 = G__48620;
chunk__48089_48614 = G__48621;
count__48090_48615 = G__48622;
i__48091_48616 = G__48623;
continue;
} else {
var G__48625 = seq__48087_48613;
var G__48626 = chunk__48089_48614;
var G__48627 = count__48090_48615;
var G__48628 = (i__48091_48616 + (1));
seq__48087_48613 = G__48625;
chunk__48089_48614 = G__48626;
count__48090_48615 = G__48627;
i__48091_48616 = G__48628;
continue;
}
} else {
var temp__5735__auto___48629__$1 = cljs.core.seq(seq__48087_48613);
if(temp__5735__auto___48629__$1){
var seq__48087_48630__$1 = temp__5735__auto___48629__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48087_48630__$1)){
var c__4609__auto___48631 = cljs.core.chunk_first(seq__48087_48630__$1);
var G__48632 = cljs.core.chunk_rest(seq__48087_48630__$1);
var G__48633 = c__4609__auto___48631;
var G__48634 = cljs.core.count(c__4609__auto___48631);
var G__48635 = (0);
seq__48087_48613 = G__48632;
chunk__48089_48614 = G__48633;
count__48090_48615 = G__48634;
i__48091_48616 = G__48635;
continue;
} else {
var child_48636 = cljs.core.first(seq__48087_48630__$1);
if(cljs.core.truth_(child_48636)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_48636);


var G__48638 = cljs.core.next(seq__48087_48630__$1);
var G__48639 = null;
var G__48640 = (0);
var G__48641 = (0);
seq__48087_48613 = G__48638;
chunk__48089_48614 = G__48639;
count__48090_48615 = G__48640;
i__48091_48616 = G__48641;
continue;
} else {
var G__48642 = cljs.core.next(seq__48087_48630__$1);
var G__48643 = null;
var G__48644 = (0);
var G__48645 = (0);
seq__48087_48613 = G__48642;
chunk__48089_48614 = G__48643;
count__48090_48615 = G__48644;
i__48091_48616 = G__48645;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_48612);
}


var G__48647 = cljs.core.next(seq__48050_48605__$1);
var G__48648 = null;
var G__48649 = (0);
var G__48650 = (0);
seq__48050_48562 = G__48647;
chunk__48051_48563 = G__48648;
count__48052_48564 = G__48649;
i__48053_48565 = G__48650;
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
var G__48109 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__48109);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__48116 = cljs.core.seq(node);
var chunk__48117 = null;
var count__48118 = (0);
var i__48119 = (0);
while(true){
if((i__48119 < count__48118)){
var n = chunk__48117.cljs$core$IIndexed$_nth$arity$2(null,i__48119);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48652 = seq__48116;
var G__48653 = chunk__48117;
var G__48654 = count__48118;
var G__48655 = (i__48119 + (1));
seq__48116 = G__48652;
chunk__48117 = G__48653;
count__48118 = G__48654;
i__48119 = G__48655;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48116);
if(temp__5735__auto__){
var seq__48116__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48116__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48116__$1);
var G__48656 = cljs.core.chunk_rest(seq__48116__$1);
var G__48657 = c__4609__auto__;
var G__48658 = cljs.core.count(c__4609__auto__);
var G__48659 = (0);
seq__48116 = G__48656;
chunk__48117 = G__48657;
count__48118 = G__48658;
i__48119 = G__48659;
continue;
} else {
var n = cljs.core.first(seq__48116__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__48660 = cljs.core.next(seq__48116__$1);
var G__48661 = null;
var G__48662 = (0);
var G__48663 = (0);
seq__48116 = G__48660;
chunk__48117 = G__48661;
count__48118 = G__48662;
i__48119 = G__48663;
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
var G__48129 = shadow.dom.dom_node(new$);
var G__48130 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__48129,G__48130);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__48134 = arguments.length;
switch (G__48134) {
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
var G__48138 = arguments.length;
switch (G__48138) {
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
var G__48141 = arguments.length;
switch (G__48141) {
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
var len__4789__auto___48674 = arguments.length;
var i__4790__auto___48675 = (0);
while(true){
if((i__4790__auto___48675 < len__4789__auto___48674)){
args__4795__auto__.push((arguments[i__4790__auto___48675]));

var G__48676 = (i__4790__auto___48675 + (1));
i__4790__auto___48675 = G__48676;
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
var seq__48144_48677 = cljs.core.seq(nodes);
var chunk__48145_48678 = null;
var count__48146_48679 = (0);
var i__48147_48680 = (0);
while(true){
if((i__48147_48680 < count__48146_48679)){
var node_48681 = chunk__48145_48678.cljs$core$IIndexed$_nth$arity$2(null,i__48147_48680);
fragment.appendChild(shadow.dom._to_dom(node_48681));


var G__48682 = seq__48144_48677;
var G__48683 = chunk__48145_48678;
var G__48684 = count__48146_48679;
var G__48685 = (i__48147_48680 + (1));
seq__48144_48677 = G__48682;
chunk__48145_48678 = G__48683;
count__48146_48679 = G__48684;
i__48147_48680 = G__48685;
continue;
} else {
var temp__5735__auto___48690 = cljs.core.seq(seq__48144_48677);
if(temp__5735__auto___48690){
var seq__48144_48691__$1 = temp__5735__auto___48690;
if(cljs.core.chunked_seq_QMARK_(seq__48144_48691__$1)){
var c__4609__auto___48692 = cljs.core.chunk_first(seq__48144_48691__$1);
var G__48693 = cljs.core.chunk_rest(seq__48144_48691__$1);
var G__48694 = c__4609__auto___48692;
var G__48695 = cljs.core.count(c__4609__auto___48692);
var G__48696 = (0);
seq__48144_48677 = G__48693;
chunk__48145_48678 = G__48694;
count__48146_48679 = G__48695;
i__48147_48680 = G__48696;
continue;
} else {
var node_48697 = cljs.core.first(seq__48144_48691__$1);
fragment.appendChild(shadow.dom._to_dom(node_48697));


var G__48698 = cljs.core.next(seq__48144_48691__$1);
var G__48699 = null;
var G__48700 = (0);
var G__48701 = (0);
seq__48144_48677 = G__48698;
chunk__48145_48678 = G__48699;
count__48146_48679 = G__48700;
i__48147_48680 = G__48701;
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
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq48143){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq48143));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__48159_48702 = cljs.core.seq(scripts);
var chunk__48160_48703 = null;
var count__48161_48704 = (0);
var i__48162_48705 = (0);
while(true){
if((i__48162_48705 < count__48161_48704)){
var vec__48174_48706 = chunk__48160_48703.cljs$core$IIndexed$_nth$arity$2(null,i__48162_48705);
var script_tag_48707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48174_48706,(0),null);
var script_body_48708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48174_48706,(1),null);
eval(script_body_48708);


var G__48709 = seq__48159_48702;
var G__48710 = chunk__48160_48703;
var G__48711 = count__48161_48704;
var G__48712 = (i__48162_48705 + (1));
seq__48159_48702 = G__48709;
chunk__48160_48703 = G__48710;
count__48161_48704 = G__48711;
i__48162_48705 = G__48712;
continue;
} else {
var temp__5735__auto___48713 = cljs.core.seq(seq__48159_48702);
if(temp__5735__auto___48713){
var seq__48159_48714__$1 = temp__5735__auto___48713;
if(cljs.core.chunked_seq_QMARK_(seq__48159_48714__$1)){
var c__4609__auto___48715 = cljs.core.chunk_first(seq__48159_48714__$1);
var G__48716 = cljs.core.chunk_rest(seq__48159_48714__$1);
var G__48717 = c__4609__auto___48715;
var G__48718 = cljs.core.count(c__4609__auto___48715);
var G__48719 = (0);
seq__48159_48702 = G__48716;
chunk__48160_48703 = G__48717;
count__48161_48704 = G__48718;
i__48162_48705 = G__48719;
continue;
} else {
var vec__48177_48723 = cljs.core.first(seq__48159_48714__$1);
var script_tag_48724 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48177_48723,(0),null);
var script_body_48725 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48177_48723,(1),null);
eval(script_body_48725);


var G__48726 = cljs.core.next(seq__48159_48714__$1);
var G__48727 = null;
var G__48728 = (0);
var G__48729 = (0);
seq__48159_48702 = G__48726;
chunk__48160_48703 = G__48727;
count__48161_48704 = G__48728;
i__48162_48705 = G__48729;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__48181){
var vec__48182 = p__48181;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48182,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48182,(1),null);
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
var G__48190 = shadow.dom.dom_node(el);
var G__48191 = cls;
return goog.dom.getAncestorByClass(G__48190,G__48191);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__48195 = arguments.length;
switch (G__48195) {
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
var G__48197 = shadow.dom.dom_node(el);
var G__48198 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__48197,G__48198);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__48199 = shadow.dom.dom_node(el);
var G__48200 = cljs.core.name(tag);
var G__48201 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__48199,G__48200,G__48201);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__48203 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__48203);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__48206 = shadow.dom.dom_node(dom);
var G__48207 = value;
return goog.dom.forms.setValue(G__48206,G__48207);
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
var seq__48212 = cljs.core.seq(style_keys);
var chunk__48213 = null;
var count__48214 = (0);
var i__48215 = (0);
while(true){
if((i__48215 < count__48214)){
var it = chunk__48213.cljs$core$IIndexed$_nth$arity$2(null,i__48215);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48734 = seq__48212;
var G__48735 = chunk__48213;
var G__48736 = count__48214;
var G__48737 = (i__48215 + (1));
seq__48212 = G__48734;
chunk__48213 = G__48735;
count__48214 = G__48736;
i__48215 = G__48737;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48212);
if(temp__5735__auto__){
var seq__48212__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48212__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48212__$1);
var G__48738 = cljs.core.chunk_rest(seq__48212__$1);
var G__48739 = c__4609__auto__;
var G__48740 = cljs.core.count(c__4609__auto__);
var G__48741 = (0);
seq__48212 = G__48738;
chunk__48213 = G__48739;
count__48214 = G__48740;
i__48215 = G__48741;
continue;
} else {
var it = cljs.core.first(seq__48212__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__48742 = cljs.core.next(seq__48212__$1);
var G__48743 = null;
var G__48744 = (0);
var G__48745 = (0);
seq__48212 = G__48742;
chunk__48213 = G__48743;
count__48214 = G__48744;
i__48215 = G__48745;
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

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48219,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48231 = k48219;
var G__48231__$1 = (((G__48231 instanceof cljs.core.Keyword))?G__48231.fqn:null);
switch (G__48231__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48219,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48234){
var vec__48235 = p__48234;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48235,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48235,(1),null);
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

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48218){
var self__ = this;
var G__48218__$1 = this;
return (new cljs.core.RecordIter((0),G__48218__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__48243 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48243(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48220,other48221){
var self__ = this;
var this48220__$1 = this;
return (((!((other48221 == null)))) && ((this48220__$1.constructor === other48221.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48220__$1.x,other48221.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48220__$1.y,other48221.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48220__$1.__extmap,other48221.__extmap)));
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

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48218){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48248 = cljs.core.keyword_identical_QMARK_;
var expr__48249 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48251 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__48252 = expr__48249;
return (pred__48248.cljs$core$IFn$_invoke$arity$2 ? pred__48248.cljs$core$IFn$_invoke$arity$2(G__48251,G__48252) : pred__48248.call(null,G__48251,G__48252));
})())){
return (new shadow.dom.Coordinate(G__48218,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48254 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__48255 = expr__48249;
return (pred__48248.cljs$core$IFn$_invoke$arity$2 ? pred__48248.cljs$core$IFn$_invoke$arity$2(G__48254,G__48255) : pred__48248.call(null,G__48254,G__48255));
})())){
return (new shadow.dom.Coordinate(self__.x,G__48218,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48218),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48218){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__48218,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__48224){
var extmap__4478__auto__ = (function (){var G__48262 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48224,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__48224)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48262);
} else {
return G__48262;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__48224),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__48224),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__48266 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__48266);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__48267 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__48267);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__48269 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__48269);
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

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k48272,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__48279 = k48272;
var G__48279__$1 = (((G__48279 instanceof cljs.core.Keyword))?G__48279.fqn:null);
switch (G__48279__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k48272,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__48283){
var vec__48284 = p__48283;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48284,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48284,(1),null);
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

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__48271){
var self__ = this;
var G__48271__$1 = this;
return (new cljs.core.RecordIter((0),G__48271__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__48294 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__48294(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this48273,other48274){
var self__ = this;
var this48273__$1 = this;
return (((!((other48274 == null)))) && ((this48273__$1.constructor === other48274.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48273__$1.w,other48274.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48273__$1.h,other48274.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this48273__$1.__extmap,other48274.__extmap)));
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

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__48271){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__48297 = cljs.core.keyword_identical_QMARK_;
var expr__48298 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__48300 = new cljs.core.Keyword(null,"w","w",354169001);
var G__48301 = expr__48298;
return (pred__48297.cljs$core$IFn$_invoke$arity$2 ? pred__48297.cljs$core$IFn$_invoke$arity$2(G__48300,G__48301) : pred__48297.call(null,G__48300,G__48301));
})())){
return (new shadow.dom.Size(G__48271,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__48302 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__48303 = expr__48298;
return (pred__48297.cljs$core$IFn$_invoke$arity$2 ? pred__48297.cljs$core$IFn$_invoke$arity$2(G__48302,G__48303) : pred__48297.call(null,G__48302,G__48303));
})())){
return (new shadow.dom.Size(self__.w,G__48271,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__48271),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__48271){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__48271,self__.__extmap,self__.__hash));
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
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__48276){
var extmap__4478__auto__ = (function (){var G__48304 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__48276,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__48276)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__48304);
} else {
return G__48304;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__48276),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__48276),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__48305 = shadow.dom.dom_node(el);
return goog.style.getSize(G__48305);
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
var G__48771 = (i + (1));
var G__48772 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__48771;
ret = G__48772;
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
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__48311){
var vec__48312 = p__48311;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48312,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48312,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__48319 = arguments.length;
switch (G__48319) {
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
var G__48328_48774 = new_node;
var G__48329_48775 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__48328_48774,G__48329_48775);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__48331_48776 = new_node;
var G__48332_48777 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__48331_48776,G__48332_48777);

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
var G__48778 = ps;
var G__48779 = (i + (1));
el__$1 = G__48778;
i = G__48779;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__48336 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__48336);
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
var G__48343 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__48343);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__48345 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__48345);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__48348 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48348,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48348,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48348,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__48351_48780 = cljs.core.seq(props);
var chunk__48352_48781 = null;
var count__48353_48782 = (0);
var i__48354_48783 = (0);
while(true){
if((i__48354_48783 < count__48353_48782)){
var vec__48367_48784 = chunk__48352_48781.cljs$core$IIndexed$_nth$arity$2(null,i__48354_48783);
var k_48785 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48367_48784,(0),null);
var v_48786 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48367_48784,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_48785);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48785),v_48786);


var G__48787 = seq__48351_48780;
var G__48788 = chunk__48352_48781;
var G__48789 = count__48353_48782;
var G__48790 = (i__48354_48783 + (1));
seq__48351_48780 = G__48787;
chunk__48352_48781 = G__48788;
count__48353_48782 = G__48789;
i__48354_48783 = G__48790;
continue;
} else {
var temp__5735__auto___48791 = cljs.core.seq(seq__48351_48780);
if(temp__5735__auto___48791){
var seq__48351_48792__$1 = temp__5735__auto___48791;
if(cljs.core.chunked_seq_QMARK_(seq__48351_48792__$1)){
var c__4609__auto___48793 = cljs.core.chunk_first(seq__48351_48792__$1);
var G__48794 = cljs.core.chunk_rest(seq__48351_48792__$1);
var G__48795 = c__4609__auto___48793;
var G__48796 = cljs.core.count(c__4609__auto___48793);
var G__48797 = (0);
seq__48351_48780 = G__48794;
chunk__48352_48781 = G__48795;
count__48353_48782 = G__48796;
i__48354_48783 = G__48797;
continue;
} else {
var vec__48374_48798 = cljs.core.first(seq__48351_48792__$1);
var k_48799 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48374_48798,(0),null);
var v_48800 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48374_48798,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_48799);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_48799),v_48800);


var G__48801 = cljs.core.next(seq__48351_48792__$1);
var G__48802 = null;
var G__48803 = (0);
var G__48804 = (0);
seq__48351_48780 = G__48801;
chunk__48352_48781 = G__48802;
count__48353_48782 = G__48803;
i__48354_48783 = G__48804;
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
var vec__48382 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48382,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48382,(1),null);
var seq__48386_48805 = cljs.core.seq(node_children);
var chunk__48388_48806 = null;
var count__48389_48807 = (0);
var i__48390_48808 = (0);
while(true){
if((i__48390_48808 < count__48389_48807)){
var child_struct_48809 = chunk__48388_48806.cljs$core$IIndexed$_nth$arity$2(null,i__48390_48808);
if((!((child_struct_48809 == null)))){
if(typeof child_struct_48809 === 'string'){
var text_48810 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48810),child_struct_48809].join(''));
} else {
var children_48811 = shadow.dom.svg_node(child_struct_48809);
if(cljs.core.seq_QMARK_(children_48811)){
var seq__48415_48812 = cljs.core.seq(children_48811);
var chunk__48417_48813 = null;
var count__48418_48814 = (0);
var i__48419_48815 = (0);
while(true){
if((i__48419_48815 < count__48418_48814)){
var child_48816 = chunk__48417_48813.cljs$core$IIndexed$_nth$arity$2(null,i__48419_48815);
if(cljs.core.truth_(child_48816)){
node.appendChild(child_48816);


var G__48817 = seq__48415_48812;
var G__48818 = chunk__48417_48813;
var G__48819 = count__48418_48814;
var G__48820 = (i__48419_48815 + (1));
seq__48415_48812 = G__48817;
chunk__48417_48813 = G__48818;
count__48418_48814 = G__48819;
i__48419_48815 = G__48820;
continue;
} else {
var G__48821 = seq__48415_48812;
var G__48822 = chunk__48417_48813;
var G__48823 = count__48418_48814;
var G__48824 = (i__48419_48815 + (1));
seq__48415_48812 = G__48821;
chunk__48417_48813 = G__48822;
count__48418_48814 = G__48823;
i__48419_48815 = G__48824;
continue;
}
} else {
var temp__5735__auto___48825 = cljs.core.seq(seq__48415_48812);
if(temp__5735__auto___48825){
var seq__48415_48826__$1 = temp__5735__auto___48825;
if(cljs.core.chunked_seq_QMARK_(seq__48415_48826__$1)){
var c__4609__auto___48827 = cljs.core.chunk_first(seq__48415_48826__$1);
var G__48828 = cljs.core.chunk_rest(seq__48415_48826__$1);
var G__48829 = c__4609__auto___48827;
var G__48830 = cljs.core.count(c__4609__auto___48827);
var G__48831 = (0);
seq__48415_48812 = G__48828;
chunk__48417_48813 = G__48829;
count__48418_48814 = G__48830;
i__48419_48815 = G__48831;
continue;
} else {
var child_48832 = cljs.core.first(seq__48415_48826__$1);
if(cljs.core.truth_(child_48832)){
node.appendChild(child_48832);


var G__48833 = cljs.core.next(seq__48415_48826__$1);
var G__48834 = null;
var G__48835 = (0);
var G__48836 = (0);
seq__48415_48812 = G__48833;
chunk__48417_48813 = G__48834;
count__48418_48814 = G__48835;
i__48419_48815 = G__48836;
continue;
} else {
var G__48837 = cljs.core.next(seq__48415_48826__$1);
var G__48838 = null;
var G__48839 = (0);
var G__48840 = (0);
seq__48415_48812 = G__48837;
chunk__48417_48813 = G__48838;
count__48418_48814 = G__48839;
i__48419_48815 = G__48840;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48811);
}
}


var G__48841 = seq__48386_48805;
var G__48842 = chunk__48388_48806;
var G__48843 = count__48389_48807;
var G__48844 = (i__48390_48808 + (1));
seq__48386_48805 = G__48841;
chunk__48388_48806 = G__48842;
count__48389_48807 = G__48843;
i__48390_48808 = G__48844;
continue;
} else {
var G__48845 = seq__48386_48805;
var G__48846 = chunk__48388_48806;
var G__48847 = count__48389_48807;
var G__48848 = (i__48390_48808 + (1));
seq__48386_48805 = G__48845;
chunk__48388_48806 = G__48846;
count__48389_48807 = G__48847;
i__48390_48808 = G__48848;
continue;
}
} else {
var temp__5735__auto___48849 = cljs.core.seq(seq__48386_48805);
if(temp__5735__auto___48849){
var seq__48386_48850__$1 = temp__5735__auto___48849;
if(cljs.core.chunked_seq_QMARK_(seq__48386_48850__$1)){
var c__4609__auto___48851 = cljs.core.chunk_first(seq__48386_48850__$1);
var G__48852 = cljs.core.chunk_rest(seq__48386_48850__$1);
var G__48853 = c__4609__auto___48851;
var G__48854 = cljs.core.count(c__4609__auto___48851);
var G__48855 = (0);
seq__48386_48805 = G__48852;
chunk__48388_48806 = G__48853;
count__48389_48807 = G__48854;
i__48390_48808 = G__48855;
continue;
} else {
var child_struct_48856 = cljs.core.first(seq__48386_48850__$1);
if((!((child_struct_48856 == null)))){
if(typeof child_struct_48856 === 'string'){
var text_48857 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_48857),child_struct_48856].join(''));
} else {
var children_48858 = shadow.dom.svg_node(child_struct_48856);
if(cljs.core.seq_QMARK_(children_48858)){
var seq__48428_48859 = cljs.core.seq(children_48858);
var chunk__48430_48860 = null;
var count__48431_48861 = (0);
var i__48432_48862 = (0);
while(true){
if((i__48432_48862 < count__48431_48861)){
var child_48863 = chunk__48430_48860.cljs$core$IIndexed$_nth$arity$2(null,i__48432_48862);
if(cljs.core.truth_(child_48863)){
node.appendChild(child_48863);


var G__48864 = seq__48428_48859;
var G__48865 = chunk__48430_48860;
var G__48866 = count__48431_48861;
var G__48867 = (i__48432_48862 + (1));
seq__48428_48859 = G__48864;
chunk__48430_48860 = G__48865;
count__48431_48861 = G__48866;
i__48432_48862 = G__48867;
continue;
} else {
var G__48868 = seq__48428_48859;
var G__48869 = chunk__48430_48860;
var G__48870 = count__48431_48861;
var G__48871 = (i__48432_48862 + (1));
seq__48428_48859 = G__48868;
chunk__48430_48860 = G__48869;
count__48431_48861 = G__48870;
i__48432_48862 = G__48871;
continue;
}
} else {
var temp__5735__auto___48872__$1 = cljs.core.seq(seq__48428_48859);
if(temp__5735__auto___48872__$1){
var seq__48428_48873__$1 = temp__5735__auto___48872__$1;
if(cljs.core.chunked_seq_QMARK_(seq__48428_48873__$1)){
var c__4609__auto___48874 = cljs.core.chunk_first(seq__48428_48873__$1);
var G__48875 = cljs.core.chunk_rest(seq__48428_48873__$1);
var G__48876 = c__4609__auto___48874;
var G__48877 = cljs.core.count(c__4609__auto___48874);
var G__48878 = (0);
seq__48428_48859 = G__48875;
chunk__48430_48860 = G__48876;
count__48431_48861 = G__48877;
i__48432_48862 = G__48878;
continue;
} else {
var child_48879 = cljs.core.first(seq__48428_48873__$1);
if(cljs.core.truth_(child_48879)){
node.appendChild(child_48879);


var G__48880 = cljs.core.next(seq__48428_48873__$1);
var G__48881 = null;
var G__48882 = (0);
var G__48883 = (0);
seq__48428_48859 = G__48880;
chunk__48430_48860 = G__48881;
count__48431_48861 = G__48882;
i__48432_48862 = G__48883;
continue;
} else {
var G__48884 = cljs.core.next(seq__48428_48873__$1);
var G__48885 = null;
var G__48886 = (0);
var G__48887 = (0);
seq__48428_48859 = G__48884;
chunk__48430_48860 = G__48885;
count__48431_48861 = G__48886;
i__48432_48862 = G__48887;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_48858);
}
}


var G__48888 = cljs.core.next(seq__48386_48850__$1);
var G__48889 = null;
var G__48890 = (0);
var G__48891 = (0);
seq__48386_48805 = G__48888;
chunk__48388_48806 = G__48889;
count__48389_48807 = G__48890;
i__48390_48808 = G__48891;
continue;
} else {
var G__48892 = cljs.core.next(seq__48386_48850__$1);
var G__48893 = null;
var G__48894 = (0);
var G__48895 = (0);
seq__48386_48805 = G__48892;
chunk__48388_48806 = G__48893;
count__48389_48807 = G__48894;
i__48390_48808 = G__48895;
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

var G__48443_48896 = shadow.dom._to_svg;
var G__48444_48897 = "string";
var G__48445_48898 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__48443_48896,G__48444_48897,G__48445_48898);

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

var G__48447_48900 = shadow.dom._to_svg;
var G__48448_48901 = "null";
var G__48449_48902 = (function (_){
return null;
});
goog.object.set(G__48447_48900,G__48448_48901,G__48449_48902);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___48906 = arguments.length;
var i__4790__auto___48907 = (0);
while(true){
if((i__4790__auto___48907 < len__4789__auto___48906)){
args__4795__auto__.push((arguments[i__4790__auto___48907]));

var G__48908 = (i__4790__auto___48907 + (1));
i__4790__auto___48907 = G__48908;
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
(shadow.dom.svg.cljs$lang$applyTo = (function (seq48452){
var G__48453 = cljs.core.first(seq48452);
var seq48452__$1 = cljs.core.next(seq48452);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48453,seq48452__$1);
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
var G__48461 = arguments.length;
switch (G__48461) {
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
var G__48465_48910 = shadow.dom.dom_node(el);
var G__48466_48911 = cljs.core.name(event);
var G__48467_48912 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__48465_48910,G__48466_48911,G__48467_48912) : shadow.dom.dom_listen.call(null,G__48465_48910,G__48466_48911,G__48467_48912));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__46136__auto___48913 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46137__auto__ = (function (){var switch__46033__auto__ = (function (state_48475){
var state_val_48477 = (state_48475[(1)]);
if((state_val_48477 === (1))){
var state_48475__$1 = state_48475;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_48475__$1,(2),once_or_cleanup);
} else {
if((state_val_48477 === (2))){
var inst_48472 = (state_48475[(2)]);
var inst_48473 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_48475__$1 = (function (){var statearr_48480 = state_48475;
(statearr_48480[(7)] = inst_48472);

return statearr_48480;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_48475__$1,inst_48473);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__46034__auto__ = null;
var shadow$dom$state_machine__46034__auto____0 = (function (){
var statearr_48481 = [null,null,null,null,null,null,null,null];
(statearr_48481[(0)] = shadow$dom$state_machine__46034__auto__);

(statearr_48481[(1)] = (1));

return statearr_48481;
});
var shadow$dom$state_machine__46034__auto____1 = (function (state_48475){
while(true){
var ret_value__46035__auto__ = (function (){try{while(true){
var result__46036__auto__ = switch__46033__auto__(state_48475);
if(cljs.core.keyword_identical_QMARK_(result__46036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46036__auto__;
}
break;
}
}catch (e48482){if((e48482 instanceof Object)){
var ex__46037__auto__ = e48482;
var statearr_48484_48916 = state_48475;
(statearr_48484_48916[(5)] = ex__46037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_48475);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48482;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48917 = state_48475;
state_48475 = G__48917;
continue;
} else {
return ret_value__46035__auto__;
}
break;
}
});
shadow$dom$state_machine__46034__auto__ = function(state_48475){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__46034__auto____0.call(this);
case 1:
return shadow$dom$state_machine__46034__auto____1.call(this,state_48475);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__46034__auto____0;
shadow$dom$state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__46034__auto____1;
return shadow$dom$state_machine__46034__auto__;
})()
})();
var state__46138__auto__ = (function (){var statearr_48485 = (f__46137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46137__auto__.cljs$core$IFn$_invoke$arity$0() : f__46137__auto__.call(null));
(statearr_48485[(6)] = c__46136__auto___48913);

return statearr_48485;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46138__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
