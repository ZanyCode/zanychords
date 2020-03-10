goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__50996){
var map__50997 = p__50996;
var map__50997__$1 = (((((!((map__50997 == null))))?(((((map__50997.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__50997.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__50997):map__50997);
var m = map__50997__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50997__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50997__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__50999_51227 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51000_51228 = null;
var count__51001_51229 = (0);
var i__51002_51230 = (0);
while(true){
if((i__51002_51230 < count__51001_51229)){
var f_51231 = chunk__51000_51228.cljs$core$IIndexed$_nth$arity$2(null,i__51002_51230);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51231], 0));


var G__51232 = seq__50999_51227;
var G__51233 = chunk__51000_51228;
var G__51234 = count__51001_51229;
var G__51235 = (i__51002_51230 + (1));
seq__50999_51227 = G__51232;
chunk__51000_51228 = G__51233;
count__51001_51229 = G__51234;
i__51002_51230 = G__51235;
continue;
} else {
var temp__5735__auto___51236 = cljs.core.seq(seq__50999_51227);
if(temp__5735__auto___51236){
var seq__50999_51237__$1 = temp__5735__auto___51236;
if(cljs.core.chunked_seq_QMARK_(seq__50999_51237__$1)){
var c__4609__auto___51238 = cljs.core.chunk_first(seq__50999_51237__$1);
var G__51239 = cljs.core.chunk_rest(seq__50999_51237__$1);
var G__51240 = c__4609__auto___51238;
var G__51241 = cljs.core.count(c__4609__auto___51238);
var G__51242 = (0);
seq__50999_51227 = G__51239;
chunk__51000_51228 = G__51240;
count__51001_51229 = G__51241;
i__51002_51230 = G__51242;
continue;
} else {
var f_51243 = cljs.core.first(seq__50999_51237__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_51243], 0));


var G__51244 = cljs.core.next(seq__50999_51237__$1);
var G__51245 = null;
var G__51246 = (0);
var G__51247 = (0);
seq__50999_51227 = G__51244;
chunk__51000_51228 = G__51245;
count__51001_51229 = G__51246;
i__51002_51230 = G__51247;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_51248 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_51248], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_51248)))?cljs.core.second(arglists_51248):arglists_51248)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__51005_51249 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__51006_51250 = null;
var count__51007_51251 = (0);
var i__51008_51252 = (0);
while(true){
if((i__51008_51252 < count__51007_51251)){
var vec__51019_51273 = chunk__51006_51250.cljs$core$IIndexed$_nth$arity$2(null,i__51008_51252);
var name_51274 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51019_51273,(0),null);
var map__51022_51275 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51019_51273,(1),null);
var map__51022_51276__$1 = (((((!((map__51022_51275 == null))))?(((((map__51022_51275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51022_51275.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51022_51275):map__51022_51275);
var doc_51277 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51022_51276__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51278 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51022_51276__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51274], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51278], 0));

if(cljs.core.truth_(doc_51277)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51277], 0));
} else {
}


var G__51279 = seq__51005_51249;
var G__51280 = chunk__51006_51250;
var G__51281 = count__51007_51251;
var G__51282 = (i__51008_51252 + (1));
seq__51005_51249 = G__51279;
chunk__51006_51250 = G__51280;
count__51007_51251 = G__51281;
i__51008_51252 = G__51282;
continue;
} else {
var temp__5735__auto___51283 = cljs.core.seq(seq__51005_51249);
if(temp__5735__auto___51283){
var seq__51005_51284__$1 = temp__5735__auto___51283;
if(cljs.core.chunked_seq_QMARK_(seq__51005_51284__$1)){
var c__4609__auto___51285 = cljs.core.chunk_first(seq__51005_51284__$1);
var G__51286 = cljs.core.chunk_rest(seq__51005_51284__$1);
var G__51287 = c__4609__auto___51285;
var G__51288 = cljs.core.count(c__4609__auto___51285);
var G__51289 = (0);
seq__51005_51249 = G__51286;
chunk__51006_51250 = G__51287;
count__51007_51251 = G__51288;
i__51008_51252 = G__51289;
continue;
} else {
var vec__51099_51290 = cljs.core.first(seq__51005_51284__$1);
var name_51291 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51099_51290,(0),null);
var map__51102_51292 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51099_51290,(1),null);
var map__51102_51293__$1 = (((((!((map__51102_51292 == null))))?(((((map__51102_51292.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51102_51292.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51102_51292):map__51102_51292);
var doc_51294 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51102_51293__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_51295 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51102_51293__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_51291], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_51295], 0));

if(cljs.core.truth_(doc_51294)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_51294], 0));
} else {
}


var G__51296 = cljs.core.next(seq__51005_51284__$1);
var G__51297 = null;
var G__51298 = (0);
var G__51299 = (0);
seq__51005_51249 = G__51296;
chunk__51006_51250 = G__51297;
count__51007_51251 = G__51298;
i__51008_51252 = G__51299;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__51104 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__51105 = null;
var count__51106 = (0);
var i__51107 = (0);
while(true){
if((i__51107 < count__51106)){
var role = chunk__51105.cljs$core$IIndexed$_nth$arity$2(null,i__51107);
var temp__5735__auto___51300__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___51300__$1)){
var spec_51301 = temp__5735__auto___51300__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51301)], 0));
} else {
}


var G__51302 = seq__51104;
var G__51303 = chunk__51105;
var G__51304 = count__51106;
var G__51305 = (i__51107 + (1));
seq__51104 = G__51302;
chunk__51105 = G__51303;
count__51106 = G__51304;
i__51107 = G__51305;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__51104);
if(temp__5735__auto____$1){
var seq__51104__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__51104__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__51104__$1);
var G__51306 = cljs.core.chunk_rest(seq__51104__$1);
var G__51307 = c__4609__auto__;
var G__51308 = cljs.core.count(c__4609__auto__);
var G__51309 = (0);
seq__51104 = G__51306;
chunk__51105 = G__51307;
count__51106 = G__51308;
i__51107 = G__51309;
continue;
} else {
var role = cljs.core.first(seq__51104__$1);
var temp__5735__auto___51310__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___51310__$2)){
var spec_51311 = temp__5735__auto___51310__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_51311)], 0));
} else {
}


var G__51312 = cljs.core.next(seq__51104__$1);
var G__51313 = null;
var G__51314 = (0);
var G__51315 = (0);
seq__51104 = G__51312;
chunk__51105 = G__51313;
count__51106 = G__51314;
i__51107 = G__51315;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__51316 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__51317 = cljs.core.ex_cause(t);
via = G__51316;
t = G__51317;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__51120 = datafied_throwable;
var map__51120__$1 = (((((!((map__51120 == null))))?(((((map__51120.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51120.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51120):map__51120);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51120__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51120__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51120__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__51121 = cljs.core.last(via);
var map__51121__$1 = (((((!((map__51121 == null))))?(((((map__51121.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51121.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51121):map__51121);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51121__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51121__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51121__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__51122 = data;
var map__51122__$1 = (((((!((map__51122 == null))))?(((((map__51122.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51122.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51122):map__51122);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51122__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51122__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51122__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__51123 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__51123__$1 = (((((!((map__51123 == null))))?(((((map__51123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51123.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51123):map__51123);
var top_data = map__51123__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51123__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__51128 = phase;
var G__51128__$1 = (((G__51128 instanceof cljs.core.Keyword))?G__51128.fqn:null);
switch (G__51128__$1) {
case "read-source":
var map__51129 = data;
var map__51129__$1 = (((((!((map__51129 == null))))?(((((map__51129.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51129.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51129):map__51129);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51129__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51129__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__51134 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__51134__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51134,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51134);
var G__51134__$2 = (cljs.core.truth_((function (){var fexpr__51135 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51135.cljs$core$IFn$_invoke$arity$1 ? fexpr__51135.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51135.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51134__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51134__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51134__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51134__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__51136 = top_data;
var G__51136__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51136,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__51136);
var G__51136__$2 = (cljs.core.truth_((function (){var fexpr__51139 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51139.cljs$core$IFn$_invoke$arity$1 ? fexpr__51139.cljs$core$IFn$_invoke$arity$1(source) : fexpr__51139.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__51136__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__51136__$1);
var G__51136__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51136__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51136__$2);
var G__51136__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51136__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51136__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51136__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51136__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__51140 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51140,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51140,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51140,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51140,(3),null);
var G__51143 = top_data;
var G__51143__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51143,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__51143);
var G__51143__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51143__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__51143__$1);
var G__51143__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51143__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__51143__$2);
var G__51143__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51143__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__51143__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51143__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__51143__$4;
}

break;
case "execution":
var vec__51146 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51146,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51146,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51146,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51146,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__51119_SHARP_){
var or__4185__auto__ = (p1__51119_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__51150 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__51150.cljs$core$IFn$_invoke$arity$1 ? fexpr__51150.cljs$core$IFn$_invoke$arity$1(p1__51119_SHARP_) : fexpr__51150.call(null,p1__51119_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__51151 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__51151__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51151,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__51151);
var G__51151__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51151__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__51151__$1);
var G__51151__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51151__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__51151__$2);
var G__51151__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51151__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__51151__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51151__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__51151__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51128__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__51154){
var map__51155 = p__51154;
var map__51155__$1 = (((((!((map__51155 == null))))?(((((map__51155.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__51155.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__51155):map__51155);
var triage_data = map__51155__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51155__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51155__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51155__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51155__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51155__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51155__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51155__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51155__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__51157 = phase;
var G__51157__$1 = (((G__51157 instanceof cljs.core.Keyword))?G__51157.fqn:null);
switch (G__51157__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__51165 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__51166 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51167 = loc;
var G__51168 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51169_51332 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51170_51333 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51171_51334 = true;
var _STAR_print_fn_STAR__temp_val__51172_51335 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51171_51334);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51172_51335);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51152_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51152_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51170_51333);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51169_51332);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51165,G__51166,G__51167,G__51168) : format.call(null,G__51165,G__51166,G__51167,G__51168));

break;
case "macroexpansion":
var G__51180 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__51181 = cause_type;
var G__51182 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51183 = loc;
var G__51184 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51180,G__51181,G__51182,G__51183,G__51184) : format.call(null,G__51180,G__51181,G__51182,G__51183,G__51184));

break;
case "compile-syntax-check":
var G__51192 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__51193 = cause_type;
var G__51194 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51195 = loc;
var G__51196 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51192,G__51193,G__51194,G__51195,G__51196) : format.call(null,G__51192,G__51193,G__51194,G__51195,G__51196));

break;
case "compilation":
var G__51197 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__51198 = cause_type;
var G__51199 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51200 = loc;
var G__51201 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51197,G__51198,G__51199,G__51200,G__51201) : format.call(null,G__51197,G__51198,G__51199,G__51200,G__51201));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__51202 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__51203 = symbol;
var G__51204 = loc;
var G__51205 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__51210_51336 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__51211_51337 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__51212_51338 = true;
var _STAR_print_fn_STAR__temp_val__51213_51339 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__51212_51338);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__51213_51339);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51153_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51153_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__51211_51337);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__51210_51336);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__51202,G__51203,G__51204,G__51205) : format.call(null,G__51202,G__51203,G__51204,G__51205));
} else {
var G__51218 = "Execution error%s at %s(%s).\n%s\n";
var G__51219 = cause_type;
var G__51220 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__51221 = loc;
var G__51222 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__51218,G__51219,G__51220,G__51221,G__51222) : format.call(null,G__51218,G__51219,G__51220,G__51221,G__51222));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51157__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
