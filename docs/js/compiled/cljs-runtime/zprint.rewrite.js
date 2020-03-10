goog.provide('zprint.rewrite');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('zprint.zutil');
goog.require('rewrite_clj.parser');
goog.require('rewrite_clj.node');
goog.require('rewrite_clj.zip');
goog.require('rewrite_clj.zip.base');
goog.require('rewrite_clj.zip.whitespace');
goog.require('rewrite_clj.zip.move');
goog.require('rewrite_clj.zip.removez');
goog.require('rewrite_clj.zip.editz');
goog.require('clojure.zip');
zprint.rewrite.prewalk_subtree = (function zprint$rewrite$prewalk_subtree(p_QMARK_,f,zloc){
var loc = zloc;
while(true){
if(cljs.core.truth_((rewrite_clj.zip.end_QMARK_.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.end_QMARK_.cljs$core$IFn$_invoke$arity$1(loc) : rewrite_clj.zip.end_QMARK_.call(null,loc)))){
return loc;
} else {
if(cljs.core.truth_((p_QMARK_.cljs$core$IFn$_invoke$arity$1 ? p_QMARK_.cljs$core$IFn$_invoke$arity$1(loc) : p_QMARK_.call(null,loc)))){
var temp__5733__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(loc) : f.call(null,loc));
if(cljs.core.truth_(temp__5733__auto__)){
var n = temp__5733__auto__;
var G__46555 = (rewrite_clj.zip.next.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.next.cljs$core$IFn$_invoke$arity$1(n) : rewrite_clj.zip.next.call(null,n));
loc = G__46555;
continue;
} else {
var G__46556 = (rewrite_clj.zip.next.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.next.cljs$core$IFn$_invoke$arity$1(loc) : rewrite_clj.zip.next.call(null,loc));
loc = G__46556;
continue;
}
} else {
var G__46557 = (rewrite_clj.zip.next.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.next.cljs$core$IFn$_invoke$arity$1(loc) : rewrite_clj.zip.next.call(null,loc));
loc = G__46557;
continue;
}
}
break;
}
});
zprint.rewrite.prewalk = (function zprint$rewrite$prewalk(zloc,p_QMARK_,f){
var G__46549 = zloc;
var G__46550 = (function (){var G__46551 = zprint.rewrite.prewalk_subtree(p_QMARK_,f,(function (){var G__46552 = zloc;
var G__46552__$1 = (((G__46552 == null))?null:(rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1(G__46552) : rewrite_clj.zip.node.call(null,G__46552)));
if((G__46552__$1 == null)){
return null;
} else {
return (zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1 ? zprint.zutil.edn_STAR_.cljs$core$IFn$_invoke$arity$1(G__46552__$1) : zprint.zutil.edn_STAR_.call(null,G__46552__$1));
}
})());
return (rewrite_clj.zip.root.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.root.cljs$core$IFn$_invoke$arity$1(G__46551) : rewrite_clj.zip.root.call(null,G__46551));
})();
return (rewrite_clj.zip.replace.cljs$core$IFn$_invoke$arity$2 ? rewrite_clj.zip.replace.cljs$core$IFn$_invoke$arity$2(G__46549,G__46550) : rewrite_clj.zip.replace.call(null,G__46549,G__46550));
});
/**
 * Given a zloc, get something out of it that is sortable.
 */
zprint.rewrite.get_sortable = (function zprint$rewrite$get_sortable(zloc){
var nloc = zloc;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.tag.call(null,nloc)),new cljs.core.Keyword(null,"token","token",-1211463215))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.string.call(null,nloc))),cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var next_element = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.right.call(null,nloc));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(next_element) : rewrite_clj.zip.tag.call(null,next_element)),new cljs.core.Keyword(null,"token","token",-1211463215))){
return (rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(next_element) : rewrite_clj.zip.string.call(null,next_element));
} else {
return "";
}
})())].join('');
} else {
var G__46558 = (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.down.call(null,nloc));
nloc = G__46558;
continue;
}
break;
}
});
/**
 * Sort the everything in the vector to the right of zloc.
 */
zprint.rewrite.sort_val = (function zprint$rewrite$sort_val(zloc){
var dep_val = zloc;
var dep_seq = (function (){var nloc = zloc;
var out = cljs.core.PersistentVector.EMPTY;
while(true){
if(cljs.core.truth_(nloc)){
var G__46559 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(nloc) : rewrite_clj.zip.right.call(null,nloc));
var G__46560 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(out,nloc);
nloc = G__46559;
out = G__46560;
continue;
} else {
return out;
}
break;
}
})();
var dep_count = cljs.core.count(dep_seq);
var sorted_seq = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(zprint.rewrite.get_sortable,dep_seq);
var nloc = zloc;
var new_loc = sorted_seq;
var last_loc = null;
while(true){
if(cljs.core.truth_(new_loc)){
var new_z = cljs.core.first(new_loc);
var new_node = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(new_z) : rewrite_clj.zip.tag.call(null,new_z)),new cljs.core.Keyword(null,"uneval","uneval",1932037707)))?rewrite_clj.parser.parse_string((rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.string.cljs$core$IFn$_invoke$arity$1(new_z) : rewrite_clj.zip.string.call(null,new_z))):(rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.node.cljs$core$IFn$_invoke$arity$1(new_z) : rewrite_clj.zip.node.call(null,new_z)));
var replaced_loc = clojure.zip.replace(nloc,new_node);
var G__46565 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(replaced_loc) : rewrite_clj.zip.right.call(null,replaced_loc));
var G__46566 = cljs.core.next(new_loc);
var G__46567 = replaced_loc;
nloc = G__46565;
new_loc = G__46566;
last_loc = G__46567;
continue;
} else {
return (rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.up.cljs$core$IFn$_invoke$arity$1(last_loc) : rewrite_clj.zip.up.call(null,last_loc));
}
break;
}
});
/**
 * Do a down and a sort-val
 */
zprint.rewrite.sort_down = (function zprint$rewrite$sort_down(zloc){
return zprint.rewrite.sort_val((function (){var G__46553 = (rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.right.cljs$core$IFn$_invoke$arity$1(zloc) : rewrite_clj.zip.right.call(null,zloc));
return (rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.down.cljs$core$IFn$_invoke$arity$1(G__46553) : rewrite_clj.zip.down.call(null,G__46553));
})());
});
/**
 * Reorder the dependencies in a project.clj file.
 */
zprint.rewrite.sort_dependencies = (function zprint$rewrite$sort_dependencies(caller,options,zloc){
var new_dep = zprint.rewrite.prewalk(zloc,(function (p1__46554_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.tag.cljs$core$IFn$_invoke$arity$1(p1__46554_SHARP_) : rewrite_clj.zip.tag.call(null,p1__46554_SHARP_)),new cljs.core.Keyword(null,"token","token",-1211463215))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1 ? rewrite_clj.zip.sexpr.cljs$core$IFn$_invoke$arity$1(p1__46554_SHARP_) : rewrite_clj.zip.sexpr.call(null,p1__46554_SHARP_)),new cljs.core.Keyword(null,"dependencies","dependencies",1108064605))));
}),zprint.rewrite.sort_down);
return new_dep;
});

//# sourceMappingURL=zprint.rewrite.js.map
