goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__82296){
var map__82297 = p__82296;
var map__82297__$1 = (((((!((map__82297 == null))))?(((((map__82297.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82297.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82297):map__82297);
var m = map__82297__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82297__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82297__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__82301_82476 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__82302_82477 = null;
var count__82303_82478 = (0);
var i__82304_82479 = (0);
while(true){
if((i__82304_82479 < count__82303_82478)){
var f_82480 = chunk__82302_82477.cljs$core$IIndexed$_nth$arity$2(null,i__82304_82479);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_82480], 0));


var G__82481 = seq__82301_82476;
var G__82482 = chunk__82302_82477;
var G__82483 = count__82303_82478;
var G__82484 = (i__82304_82479 + (1));
seq__82301_82476 = G__82481;
chunk__82302_82477 = G__82482;
count__82303_82478 = G__82483;
i__82304_82479 = G__82484;
continue;
} else {
var temp__5735__auto___82485 = cljs.core.seq(seq__82301_82476);
if(temp__5735__auto___82485){
var seq__82301_82486__$1 = temp__5735__auto___82485;
if(cljs.core.chunked_seq_QMARK_(seq__82301_82486__$1)){
var c__4609__auto___82491 = cljs.core.chunk_first(seq__82301_82486__$1);
var G__82492 = cljs.core.chunk_rest(seq__82301_82486__$1);
var G__82493 = c__4609__auto___82491;
var G__82494 = cljs.core.count(c__4609__auto___82491);
var G__82495 = (0);
seq__82301_82476 = G__82492;
chunk__82302_82477 = G__82493;
count__82303_82478 = G__82494;
i__82304_82479 = G__82495;
continue;
} else {
var f_82496 = cljs.core.first(seq__82301_82486__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_82496], 0));


var G__82497 = cljs.core.next(seq__82301_82486__$1);
var G__82498 = null;
var G__82499 = (0);
var G__82500 = (0);
seq__82301_82476 = G__82497;
chunk__82302_82477 = G__82498;
count__82303_82478 = G__82499;
i__82304_82479 = G__82500;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_82501 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_82501], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_82501)))?cljs.core.second(arglists_82501):arglists_82501)], 0));
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
var seq__82315_82502 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__82316_82503 = null;
var count__82317_82504 = (0);
var i__82318_82505 = (0);
while(true){
if((i__82318_82505 < count__82317_82504)){
var vec__82340_82506 = chunk__82316_82503.cljs$core$IIndexed$_nth$arity$2(null,i__82318_82505);
var name_82507 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82340_82506,(0),null);
var map__82343_82508 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82340_82506,(1),null);
var map__82343_82509__$1 = (((((!((map__82343_82508 == null))))?(((((map__82343_82508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82343_82508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82343_82508):map__82343_82508);
var doc_82510 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82343_82509__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_82511 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82343_82509__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_82507], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_82511], 0));

if(cljs.core.truth_(doc_82510)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_82510], 0));
} else {
}


var G__82518 = seq__82315_82502;
var G__82519 = chunk__82316_82503;
var G__82520 = count__82317_82504;
var G__82521 = (i__82318_82505 + (1));
seq__82315_82502 = G__82518;
chunk__82316_82503 = G__82519;
count__82317_82504 = G__82520;
i__82318_82505 = G__82521;
continue;
} else {
var temp__5735__auto___82522 = cljs.core.seq(seq__82315_82502);
if(temp__5735__auto___82522){
var seq__82315_82523__$1 = temp__5735__auto___82522;
if(cljs.core.chunked_seq_QMARK_(seq__82315_82523__$1)){
var c__4609__auto___82524 = cljs.core.chunk_first(seq__82315_82523__$1);
var G__82525 = cljs.core.chunk_rest(seq__82315_82523__$1);
var G__82526 = c__4609__auto___82524;
var G__82527 = cljs.core.count(c__4609__auto___82524);
var G__82528 = (0);
seq__82315_82502 = G__82525;
chunk__82316_82503 = G__82526;
count__82317_82504 = G__82527;
i__82318_82505 = G__82528;
continue;
} else {
var vec__82345_82529 = cljs.core.first(seq__82315_82523__$1);
var name_82530 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82345_82529,(0),null);
var map__82348_82531 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82345_82529,(1),null);
var map__82348_82532__$1 = (((((!((map__82348_82531 == null))))?(((((map__82348_82531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82348_82531.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82348_82531):map__82348_82531);
var doc_82533 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82348_82532__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_82534 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82348_82532__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_82530], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_82534], 0));

if(cljs.core.truth_(doc_82533)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_82533], 0));
} else {
}


var G__82539 = cljs.core.next(seq__82315_82523__$1);
var G__82540 = null;
var G__82541 = (0);
var G__82542 = (0);
seq__82315_82502 = G__82539;
chunk__82316_82503 = G__82540;
count__82317_82504 = G__82541;
i__82318_82505 = G__82542;
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

var seq__82353 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__82354 = null;
var count__82355 = (0);
var i__82356 = (0);
while(true){
if((i__82356 < count__82355)){
var role = chunk__82354.cljs$core$IIndexed$_nth$arity$2(null,i__82356);
var temp__5735__auto___82545__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___82545__$1)){
var spec_82552 = temp__5735__auto___82545__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_82552)], 0));
} else {
}


var G__82554 = seq__82353;
var G__82555 = chunk__82354;
var G__82556 = count__82355;
var G__82557 = (i__82356 + (1));
seq__82353 = G__82554;
chunk__82354 = G__82555;
count__82355 = G__82556;
i__82356 = G__82557;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__82353);
if(temp__5735__auto____$1){
var seq__82353__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__82353__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__82353__$1);
var G__82558 = cljs.core.chunk_rest(seq__82353__$1);
var G__82559 = c__4609__auto__;
var G__82560 = cljs.core.count(c__4609__auto__);
var G__82561 = (0);
seq__82353 = G__82558;
chunk__82354 = G__82559;
count__82355 = G__82560;
i__82356 = G__82561;
continue;
} else {
var role = cljs.core.first(seq__82353__$1);
var temp__5735__auto___82564__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___82564__$2)){
var spec_82566 = temp__5735__auto___82564__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_82566)], 0));
} else {
}


var G__82567 = cljs.core.next(seq__82353__$1);
var G__82568 = null;
var G__82569 = (0);
var G__82570 = (0);
seq__82353 = G__82567;
chunk__82354 = G__82568;
count__82355 = G__82569;
i__82356 = G__82570;
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
var G__82571 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__82572 = cljs.core.ex_cause(t);
via = G__82571;
t = G__82572;
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
var map__82369 = datafied_throwable;
var map__82369__$1 = (((((!((map__82369 == null))))?(((((map__82369.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82369.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82369):map__82369);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82369__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82369__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__82369__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__82370 = cljs.core.last(via);
var map__82370__$1 = (((((!((map__82370 == null))))?(((((map__82370.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82370.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82370):map__82370);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82370__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82370__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82370__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__82371 = data;
var map__82371__$1 = (((((!((map__82371 == null))))?(((((map__82371.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82371.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82371):map__82371);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82371__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82371__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82371__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__82372 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__82372__$1 = (((((!((map__82372 == null))))?(((((map__82372.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82372.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82372):map__82372);
var top_data = map__82372__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82372__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__82384 = phase;
var G__82384__$1 = (((G__82384 instanceof cljs.core.Keyword))?G__82384.fqn:null);
switch (G__82384__$1) {
case "read-source":
var map__82386 = data;
var map__82386__$1 = (((((!((map__82386 == null))))?(((((map__82386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82386.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82386):map__82386);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82386__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82386__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__82390 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__82390__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82390,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__82390);
var G__82390__$2 = (cljs.core.truth_((function (){var fexpr__82392 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__82392.cljs$core$IFn$_invoke$arity$1 ? fexpr__82392.cljs$core$IFn$_invoke$arity$1(source) : fexpr__82392.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__82390__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__82390__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82390__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__82390__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__82394 = top_data;
var G__82394__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82394,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__82394);
var G__82394__$2 = (cljs.core.truth_((function (){var fexpr__82395 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__82395.cljs$core$IFn$_invoke$arity$1 ? fexpr__82395.cljs$core$IFn$_invoke$arity$1(source) : fexpr__82395.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__82394__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__82394__$1);
var G__82394__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82394__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__82394__$2);
var G__82394__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82394__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__82394__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82394__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__82394__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__82397 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82397,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82397,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82397,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82397,(3),null);
var G__82400 = top_data;
var G__82400__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82400,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__82400);
var G__82400__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82400__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__82400__$1);
var G__82400__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82400__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__82400__$2);
var G__82400__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82400__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__82400__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82400__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__82400__$4;
}

break;
case "execution":
var vec__82405 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82405,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82405,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82405,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82405,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__82368_SHARP_){
var or__4185__auto__ = (p1__82368_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__82409 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__82409.cljs$core$IFn$_invoke$arity$1 ? fexpr__82409.cljs$core$IFn$_invoke$arity$1(p1__82368_SHARP_) : fexpr__82409.call(null,p1__82368_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__82410 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__82410__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82410,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__82410);
var G__82410__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82410__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__82410__$1);
var G__82410__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
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
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82410__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__82410__$2);
var G__82410__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82410__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__82410__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__82410__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__82410__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__82384__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__82416){
var map__82417 = p__82416;
var map__82417__$1 = (((((!((map__82417 == null))))?(((((map__82417.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82417.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82417):map__82417);
var triage_data = map__82417__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82417__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82417__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82417__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82417__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82417__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82417__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82417__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82417__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
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
var G__82424 = phase;
var G__82424__$1 = (((G__82424 instanceof cljs.core.Keyword))?G__82424.fqn:null);
switch (G__82424__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__82426 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__82427 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__82428 = loc;
var G__82429 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__82430_82614 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__82431_82615 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__82432_82616 = true;
var _STAR_print_fn_STAR__temp_val__82433_82617 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__82432_82616);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__82433_82617);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__82411_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__82411_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__82431_82615);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__82430_82614);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__82426,G__82427,G__82428,G__82429) : format.call(null,G__82426,G__82427,G__82428,G__82429));

break;
case "macroexpansion":
var G__82437 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__82438 = cause_type;
var G__82439 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__82440 = loc;
var G__82441 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__82437,G__82438,G__82439,G__82440,G__82441) : format.call(null,G__82437,G__82438,G__82439,G__82440,G__82441));

break;
case "compile-syntax-check":
var G__82444 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__82445 = cause_type;
var G__82446 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__82447 = loc;
var G__82448 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__82444,G__82445,G__82446,G__82447,G__82448) : format.call(null,G__82444,G__82445,G__82446,G__82447,G__82448));

break;
case "compilation":
var G__82449 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__82450 = cause_type;
var G__82451 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__82452 = loc;
var G__82453 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__82449,G__82450,G__82451,G__82452,G__82453) : format.call(null,G__82449,G__82450,G__82451,G__82452,G__82453));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__82455 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__82456 = symbol;
var G__82457 = loc;
var G__82458 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__82459_82620 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__82460_82621 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__82461_82622 = true;
var _STAR_print_fn_STAR__temp_val__82462_82623 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__82461_82622);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__82462_82623);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__82412_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__82412_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__82460_82621);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__82459_82620);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__82455,G__82456,G__82457,G__82458) : format.call(null,G__82455,G__82456,G__82457,G__82458));
} else {
var G__82468 = "Execution error%s at %s(%s).\n%s\n";
var G__82469 = cause_type;
var G__82470 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__82471 = loc;
var G__82472 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__82468,G__82469,G__82470,G__82471,G__82472) : format.call(null,G__82468,G__82469,G__82470,G__82471,G__82472));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__82424__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
