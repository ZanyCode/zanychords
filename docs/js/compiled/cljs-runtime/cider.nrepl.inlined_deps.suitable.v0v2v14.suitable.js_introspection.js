goog.provide('cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.object');
cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.own_property_descriptors = (cljs.core.truth_("getOwnPropertyDescriptors" in Object)?(function (obj){
return Object.getOwnPropertyDescriptors(obj);
}):(function (obj){
return cljs.core.clj__GT_js(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [key,Object.getOwnPropertyDescriptor(obj,key)], null);
}),Object.getOwnPropertyNames(obj))));
}));
/**
 * 
 */
cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.properties_by_prototype = (function cider$nrepl$inlined_deps$suitable$v0v2v14$suitable$js_introspection$properties_by_prototype(obj){
var obj__$1 = obj;
var protos = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(obj__$1)){
var G__49697 = Object.getPrototypeOf(obj__$1);
var G__49698 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(protos,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"obj","obj",981763962),obj__$1,new cljs.core.Keyword(null,"props","props",453281727),(cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.own_property_descriptors.cljs$core$IFn$_invoke$arity$1 ? cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.own_property_descriptors.cljs$core$IFn$_invoke$arity$1(obj__$1) : cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.own_property_descriptors.call(null,obj__$1))], null));
obj__$1 = G__49697;
protos = G__49698;
continue;
} else {
return protos;
}
break;
}
});
cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.property_names_and_types = (function cider$nrepl$inlined_deps$suitable$v0v2v14$suitable$js_introspection$property_names_and_types(var_args){
var G__49683 = arguments.length;
switch (G__49683) {
case 1:
return cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$1 = (function (js_obj){
return cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2(js_obj,null);
}));

(cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.property_names_and_types.cljs$core$IFn$_invoke$arity$2 = (function (js_obj,prefix){
var seen = cljs.core.transient$(cljs.core.PersistentHashSet.EMPTY);
var iter__4582__auto__ = (function cider$nrepl$inlined_deps$suitable$v0v2v14$suitable$js_introspection$iter__49684(s__49685){
return (new cljs.core.LazySeq(null,(function (){
var s__49685__$1 = s__49685;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49685__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var vec__49690 = cljs.core.first(xs__6292__auto__);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49690,(0),null);
var map__49693 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49690,(1),null);
var map__49693__$1 = (((((!((map__49693 == null))))?(((((map__49693.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49693.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49693):map__49693);
var obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49693__$1,new cljs.core.Keyword(null,"obj","obj",981763962));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49693__$1,new cljs.core.Keyword(null,"props","props",453281727));
var iterys__4578__auto__ = ((function (s__49685__$1,vec__49690,i,map__49693,map__49693__$1,obj,props,xs__6292__auto__,temp__5735__auto__,seen){
return (function cider$nrepl$inlined_deps$suitable$v0v2v14$suitable$js_introspection$iter__49684_$_iter__49686(s__49687){
return (new cljs.core.LazySeq(null,((function (s__49685__$1,vec__49690,i,map__49693,map__49693__$1,obj,props,xs__6292__auto__,temp__5735__auto__,seen){
return (function (){
var s__49687__$1 = s__49687;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__49687__$1);
if(temp__5735__auto____$1){
var s__49687__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49687__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__49687__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__49689 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__49688 = (0);
while(true){
if((i__49688 < size__4581__auto__)){
var key = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__49688);
if(((cljs.core.not(goog.object.get(seen,key))) && (((cljs.core.empty_QMARK_(prefix)) || (clojure.string.starts_with_QMARK_(key,prefix)))))){
cljs.core.chunk_append(b__49689,(function (){var prop = goog.object.get(props,key);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5733__auto__ = (function (){var or__4185__auto__ = goog.object.get(prop,"value");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
if(cljs.core.fn_QMARK_(value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e49695){if((e49695 instanceof Error)){
var e = e49695;
return "var";
} else {
throw e49695;

}
}})()], null);
})());

var G__49700 = (i__49688 + (1));
i__49688 = G__49700;
continue;
} else {
var G__49701 = (i__49688 + (1));
i__49688 = G__49701;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49689),cider$nrepl$inlined_deps$suitable$v0v2v14$suitable$js_introspection$iter__49684_$_iter__49686(cljs.core.chunk_rest(s__49687__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49689),null);
}
} else {
var key = cljs.core.first(s__49687__$2);
if(((cljs.core.not(goog.object.get(seen,key))) && (((cljs.core.empty_QMARK_(prefix)) || (clojure.string.starts_with_QMARK_(key,prefix)))))){
return cljs.core.cons((function (){var prop = goog.object.get(props,key);
cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(seen,key);

return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),key,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),i,new cljs.core.Keyword(null,"type","type",1174270348),(function (){try{var temp__5733__auto__ = (function (){var or__4185__auto__ = goog.object.get(prop,"value");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(goog.object.get(prop,"get"),cljs.core.PersistentVector.EMPTY);
}
})();
if(cljs.core.truth_(temp__5733__auto__)){
var value = temp__5733__auto__;
if(cljs.core.fn_QMARK_(value)){
return "function";
} else {
return "var";
}
} else {
return "var";
}
}catch (e49696){if((e49696 instanceof Error)){
var e = e49696;
return "var";
} else {
throw e49696;

}
}})()], null);
})(),cider$nrepl$inlined_deps$suitable$v0v2v14$suitable$js_introspection$iter__49684_$_iter__49686(cljs.core.rest(s__49687__$2)));
} else {
var G__49702 = cljs.core.rest(s__49687__$2);
s__49687__$1 = G__49702;
continue;
}
}
} else {
return null;
}
break;
}
});})(s__49685__$1,vec__49690,i,map__49693,map__49693__$1,obj,props,xs__6292__auto__,temp__5735__auto__,seen))
,null,null));
});})(s__49685__$1,vec__49690,i,map__49693,map__49693__$1,obj,props,xs__6292__auto__,temp__5735__auto__,seen))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(cljs.core.js_keys(props)));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,cider$nrepl$inlined_deps$suitable$v0v2v14$suitable$js_introspection$iter__49684(cljs.core.rest(s__49685__$1)));
} else {
var G__49703 = cljs.core.rest(s__49685__$1);
s__49685__$1 = G__49703;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.properties_by_prototype(js_obj)));
}));

(cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.property_names_and_types.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=cider.nrepl.inlined_deps.suitable.v0v2v14.suitable.js_introspection.js.map
