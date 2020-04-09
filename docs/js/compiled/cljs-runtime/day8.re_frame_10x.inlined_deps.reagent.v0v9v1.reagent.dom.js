goog.provide('day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom');
goog.require('cljs.core');
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.util');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.batching');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.ratom');
goog.require('day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.debug');
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v9v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.imported !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.imported = null;
}
if((typeof day8 !== 'undefined') && (typeof day8.re_frame_10x !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v9v1 !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom !== 'undefined') && (typeof day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.roots !== 'undefined')){
} else {
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.roots = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.unmount_comp = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.roots,cljs.core.dissoc,container);

return module$node_modules$react_dom$index.unmountComponentAtNode(container);
});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.render_comp = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR__orig_val__71860 = day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__71861 = true;
(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__71861);

try{var G__71862 = (comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null));
var G__71863 = container;
var G__71864 = (function (){
var _STAR_always_update_STAR__orig_val__71865 = day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.util._STAR_always_update_STAR_;
var _STAR_always_update_STAR__temp_val__71866 = false;
(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__temp_val__71866);

try{cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.batching.flush_after_render();

if((!((callback == null)))){
return (callback.cljs$core$IFn$_invoke$arity$0 ? callback.cljs$core$IFn$_invoke$arity$0() : callback.call(null));
} else {
return null;
}
}finally {(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__71865);
}});
return module$node_modules$react_dom$index.render(G__71862,G__71863,G__71864);
}finally {(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR__orig_val__71860);
}});
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.re_render_component = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$dom$re_render_component(comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.render_comp(comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.render = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$dom$render(var_args){
var G__71869 = arguments.length;
switch (G__71869) {
case 2:
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.render.cljs$core$IFn$_invoke$arity$3(comp,container,null);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.ratom.flush_BANG_();

var f = (function (){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.as_element(((cljs.core.fn_QMARK_(comp))?(comp.cljs$core$IFn$_invoke$arity$0 ? comp.cljs$core$IFn$_invoke$arity$0() : comp.call(null)):comp));
});
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.render_comp(f,container,callback);
}));

(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.render.cljs$lang$maxFixedArity = 3);

day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.unmount_component_at_node = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$dom$unmount_component_at_node(container){
return day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.unmount_comp(container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.dom_node = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$dom$dom_node(this$){
return module$node_modules$react_dom$index.findDOMNode(this$);
});
(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.impl.template.find_dom_node = day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.dom_node);
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.force_update_all = (function day8$re_frame_10x$inlined_deps$reagent$v0v9v1$reagent$dom$force_update_all(){
day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.ratom.flush_BANG_();

var seq__71870_71884 = cljs.core.seq(cljs.core.vals(cljs.core.deref(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.roots)));
var chunk__71871_71885 = null;
var count__71872_71886 = (0);
var i__71873_71887 = (0);
while(true){
if((i__71873_71887 < count__71872_71886)){
var v_71889 = chunk__71871_71885.cljs$core$IIndexed$_nth$arity$2(null,i__71873_71887);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.re_render_component,v_71889);


var G__71890 = seq__71870_71884;
var G__71891 = chunk__71871_71885;
var G__71892 = count__71872_71886;
var G__71893 = (i__71873_71887 + (1));
seq__71870_71884 = G__71890;
chunk__71871_71885 = G__71891;
count__71872_71886 = G__71892;
i__71873_71887 = G__71893;
continue;
} else {
var temp__5735__auto___71894 = cljs.core.seq(seq__71870_71884);
if(temp__5735__auto___71894){
var seq__71870_71895__$1 = temp__5735__auto___71894;
if(cljs.core.chunked_seq_QMARK_(seq__71870_71895__$1)){
var c__4609__auto___71896 = cljs.core.chunk_first(seq__71870_71895__$1);
var G__71897 = cljs.core.chunk_rest(seq__71870_71895__$1);
var G__71898 = c__4609__auto___71896;
var G__71899 = cljs.core.count(c__4609__auto___71896);
var G__71900 = (0);
seq__71870_71884 = G__71897;
chunk__71871_71885 = G__71898;
count__71872_71886 = G__71899;
i__71873_71887 = G__71900;
continue;
} else {
var v_71902 = cljs.core.first(seq__71870_71895__$1);
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.re_render_component,v_71902);


var G__71903 = cljs.core.next(seq__71870_71895__$1);
var G__71904 = null;
var G__71905 = (0);
var G__71906 = (0);
seq__71870_71884 = G__71903;
chunk__71871_71885 = G__71904;
count__71872_71886 = G__71905;
i__71873_71887 = G__71906;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=day8.re_frame_10x.inlined_deps.reagent.v0v9v1.reagent.dom.js.map
