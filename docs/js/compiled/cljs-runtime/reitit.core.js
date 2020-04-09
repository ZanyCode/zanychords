goog.provide('reitit.core');
goog.require('cljs.core');
goog.require('meta_merge.core');
goog.require('clojure.string');
goog.require('reitit.segment');
goog.require('reitit.impl');

/**
 * @interface
 */
reitit.core.Expand = function(){};

reitit.core.expand = (function reitit$core$expand(this$,opts){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Expand$expand$arity$2 == null)))))){
return this$.reitit$core$Expand$expand$arity$2(this$,opts);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.core.expand[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__4488__auto__.call(null,this$,opts));
} else {
var m__4485__auto__ = (reitit.core.expand["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,opts) : m__4485__auto__.call(null,this$,opts));
} else {
throw cljs.core.missing_protocol("Expand.expand",this$);
}
}
}
});

(cljs.core.Keyword.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),this$__$1], null);
}));

(cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentArrayMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

(cljs.core.PersistentHashMap.prototype.reitit$core$Expand$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentHashMap.prototype.reitit$core$Expand$expand$arity$2 = (function (this$,_){
var this$__$1 = this;
return this$__$1;
}));

goog.object.set(reitit.core.Expand,"function",true);

var G__84860_85159 = reitit.core.expand;
var G__84861_85160 = "function";
var G__84862_85161 = (function (this$,_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"handler","handler",-195596612),this$], null);
});
goog.object.set(G__84860_85159,G__84861_85160,G__84862_85161);

goog.object.set(reitit.core.Expand,"null",true);

var G__84869_85162 = reitit.core.expand;
var G__84870_85163 = "null";
var G__84871_85164 = (function (_,___$1){
return null;
});
goog.object.set(G__84869_85162,G__84870_85163,G__84871_85164);
reitit.core.walk = (function reitit$core$walk(raw_routes,p__84875){
var map__84876 = p__84875;
var map__84876__$1 = (((((!((map__84876 == null))))?(((((map__84876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84876.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84876):map__84876);
var opts = map__84876__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84876__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__84876__$1,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentVector.EMPTY);
var routes = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__84876__$1,new cljs.core.Keyword(null,"routes","routes",457900162),cljs.core.PersistentVector.EMPTY);
var expand = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__84876__$1,new cljs.core.Keyword(null,"expand","expand",595248157),reitit.core.expand);
var walk_many = (function reitit$core$walk_$_walk_many(p,m,r){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__84872_SHARP_,p2__84873_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__84872_SHARP_,walk_one(p,m,p2__84873_SHARP_));
}),cljs.core.PersistentVector.EMPTY,r);
});
var walk_one = (function reitit$core$walk_$_walk_one(pacc,macc,routes__$1){
if(cljs.core.vector_QMARK_(cljs.core.first(routes__$1))){
return walk_many(pacc,macc,routes__$1);
} else {
if(typeof cljs.core.first(routes__$1) === 'string'){
var vec__84887 = routes__$1;
var seq__84888 = cljs.core.seq(vec__84887);
var first__84889 = cljs.core.first(seq__84888);
var seq__84888__$1 = cljs.core.next(seq__84888);
var path__$1 = first__84889;
var vec__84890 = seq__84888__$1;
var maybe_arg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84890,(0),null);
var args = vec__84890;
var vec__84893 = ((((cljs.core.vector_QMARK_(maybe_arg)) || (((cljs.core.sequential_QMARK_(maybe_arg)) && (cljs.core.sequential_QMARK_(cljs.core.first(maybe_arg))))) || ((maybe_arg == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,args], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [maybe_arg,cljs.core.rest(args)], null));
var data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84893,(0),null);
var childs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84893,(1),null);
var macc__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(macc,(expand.cljs$core$IFn$_invoke$arity$2 ? expand.cljs$core$IFn$_invoke$arity$2(data__$1,opts) : expand.call(null,data__$1,opts)));
var child_routes = walk_many([cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),macc__$1,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,childs));
if(cljs.core.seq(childs)){
return cljs.core.seq(child_routes);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pacc),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path__$1)].join(''),macc__$1], null)], null);
}
} else {
return null;
}
}
});
return walk_one(path,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,data),raw_routes);
});
reitit.core.map_data = (function reitit$core$map_data(f,routes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__84896_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__84896_SHARP_,(1),f);
}),routes);
});
reitit.core.merge_data = (function reitit$core$merge_data(x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__84897){
var vec__84898 = p__84897;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84898,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84898,(1),null);
return meta_merge.core.meta_merge.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.PersistentArrayMap.createAsIfByAssoc([k,v]));
}),cljs.core.PersistentArrayMap.EMPTY,x);
});
reitit.core.resolve_routes = (function reitit$core$resolve_routes(raw_routes,p__84902){
var map__84903 = p__84902;
var map__84903__$1 = (((((!((map__84903 == null))))?(((((map__84903.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84903.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84903):map__84903);
var opts = map__84903__$1;
var coerce = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84903__$1,new cljs.core.Keyword(null,"coerce","coerce",1917884504));
var G__84905 = reitit.core.map_data(reitit.core.merge_data,reitit.core.walk(raw_routes,opts));
if(cljs.core.truth_(coerce)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__84901_SHARP_){
return (coerce.cljs$core$IFn$_invoke$arity$2 ? coerce.cljs$core$IFn$_invoke$arity$2(p1__84901_SHARP_,opts) : coerce.call(null,p1__84901_SHARP_,opts));
})),G__84905);
} else {
return G__84905;
}
});
reitit.core.path_conflicting_routes = (function reitit$core$path_conflicting_routes(routes){
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (index,route){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [route,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__84906_SHARP_){
return reitit.impl.conflicting_routes_QMARK_(route,p1__84906_SHARP_);
})),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(routes,(index + (1))))], null);
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.second))),routes));
});
reitit.core.conflicting_paths = (function reitit$core$conflicting_paths(conflicts){
return cljs.core.set(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(function (){var iter__4582__auto__ = (function reitit$core$conflicting_paths_$_iter__84907(s__84908){
return (new cljs.core.LazySeq(null,(function (){
var s__84908__$1 = s__84908;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__84908__$1);
if(temp__5735__auto__){
var s__84908__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__84908__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__84908__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__84910 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__84909 = (0);
while(true){
if((i__84909 < size__4581__auto__)){
var vec__84911 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__84909);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84911,(0),null);
var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84911,(1),null);
cljs.core.chunk_append(b__84910,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pc),cljs.core.first(p)));

var G__85165 = (i__84909 + (1));
i__84909 = G__85165;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__84910),reitit$core$conflicting_paths_$_iter__84907(cljs.core.chunk_rest(s__84908__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__84910),null);
}
} else {
var vec__84914 = cljs.core.first(s__84908__$2);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84914,(0),null);
var pc = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84914,(1),null);
return cljs.core.cons(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,pc),cljs.core.first(p)),reitit$core$conflicting_paths_$_iter__84907(cljs.core.rest(s__84908__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(conflicts);
})()));
});
reitit.core.path_conflicts_str = (function reitit$core$path_conflicts_str(conflicts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Router contains conflicting route paths:\n\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__84923){
var vec__84924 = p__84923;
var vec__84927 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84924,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84927,(0),null);
var vals = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84924,(1),null);
return ["   ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\n-> ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n-> ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,vals)),"\n\n"].join('');
}),conflicts));
});
reitit.core.name_conflicting_routes = (function reitit$core$name_conflicting_routes(routes){
var G__84930 = routes;
var G__84930__$1 = (((G__84930 == null))?null:cljs.core.group_by(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.second),G__84930));
var G__84930__$2 = (((G__84930__$1 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.first),G__84930__$1));
var G__84930__$3 = (((G__84930__$2 == null))?null:cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.pos_QMARK_,cljs.core.count,cljs.core.butlast,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.second], 0)),G__84930__$2));
var G__84930__$4 = (((G__84930__$3 == null))?null:cljs.core.seq(G__84930__$3));
var G__84930__$5 = (((G__84930__$4 == null))?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__84934){
var vec__84935 = p__84934;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84935,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84935,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.set(v)], null);
}),G__84930__$4));
if((G__84930__$5 == null)){
return null;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__84930__$5);
}
});
reitit.core.name_conflicts_str = (function reitit$core$name_conflicts_str(conflicts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.str,"Router contains conflicting route names:\n\n",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__84946){
var vec__84950 = p__84946;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84950,(0),null);
var vals = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84950,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"\n-> ",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n-> ",cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.first,vals)),"\n\n"].join('');
}),conflicts));
});
reitit.core.throw_on_conflicts_BANG_ = (function reitit$core$throw_on_conflicts_BANG_(f,conflicts){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(conflicts) : f.call(null,conflicts)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816),conflicts], null));
});
reitit.core.name_lookup = (function reitit$core$name_lookup(p__84960,_){
var vec__84961 = p__84960;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84961,(0),null);
var map__84964 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84961,(1),null);
var map__84964__$1 = (((((!((map__84964 == null))))?(((((map__84964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84964.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84964):map__84964);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84964__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.truth_(name)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([name]);
} else {
return null;
}
});
reitit.core.find_names = (function reitit$core$find_names(routes,_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p1__84969_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.second(p1__84969_SHARP_));
})),routes);
});
reitit.core.compile_route = (function reitit$core$compile_route(p__84985,p__84986){
var vec__84987 = p__84985;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84987,(0),null);
var m = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84987,(1),null);
var route = vec__84987;
var map__84990 = p__84986;
var map__84990__$1 = (((((!((map__84990 == null))))?(((((map__84990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__84990.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__84990):map__84990);
var opts = map__84990__$1;
var compile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__84990__$1,new cljs.core.Keyword(null,"compile","compile",608186429));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,m,(cljs.core.truth_(compile)?(compile.cljs$core$IFn$_invoke$arity$2 ? compile.cljs$core$IFn$_invoke$arity$2(route,opts) : compile.call(null,route,opts)):null)], null);
});
reitit.core.compile_routes = (function reitit$core$compile_routes(routes,opts){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__84996_SHARP_){
return reitit.core.compile_route(p1__84996_SHARP_,opts);
}),routes));
});
reitit.core.uncompile_routes = (function reitit$core$uncompile_routes(routes){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.take,(2))),routes);
});
reitit.core.route_info = (function reitit$core$route_info(route){
return reitit.impl.create(route);
});

/**
 * @interface
 */
reitit.core.Router = function(){};

reitit.core.router_name = (function reitit$core$router_name(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$router_name$arity$1 == null)))))){
return this$.reitit$core$Router$router_name$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.core.router_name[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (reitit.core.router_name["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.router-name",this$);
}
}
}
});

reitit.core.routes = (function reitit$core$routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$routes$arity$1 == null)))))){
return this$.reitit$core$Router$routes$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.core.routes[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (reitit.core.routes["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.routes",this$);
}
}
}
});

reitit.core.compiled_routes = (function reitit$core$compiled_routes(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$compiled_routes$arity$1 == null)))))){
return this$.reitit$core$Router$compiled_routes$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.core.compiled_routes[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (reitit.core.compiled_routes["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.compiled-routes",this$);
}
}
}
});

reitit.core.options = (function reitit$core$options(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$options$arity$1 == null)))))){
return this$.reitit$core$Router$options$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.core.options[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (reitit.core.options["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.options",this$);
}
}
}
});

reitit.core.route_names = (function reitit$core$route_names(this$){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$route_names$arity$1 == null)))))){
return this$.reitit$core$Router$route_names$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.core.route_names[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (reitit.core.route_names["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Router.route-names",this$);
}
}
}
});

reitit.core.match_by_path = (function reitit$core$match_by_path(this$,path){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_path$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_path$arity$2(this$,path);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.core.match_by_path[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4488__auto__.call(null,this$,path));
} else {
var m__4485__auto__ = (reitit.core.match_by_path["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,path) : m__4485__auto__.call(null,this$,path));
} else {
throw cljs.core.missing_protocol("Router.match-by-path",this$);
}
}
}
});

reitit.core.match_by_name = (function reitit$core$match_by_name(var_args){
var G__84998 = arguments.length;
switch (G__84998) {
case 2:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$2 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$2(this$,name);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.core.match_by_name[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__4488__auto__.call(null,this$,name));
} else {
var m__4485__auto__ = (reitit.core.match_by_name["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(this$,name) : m__4485__auto__.call(null,this$,name));
} else {
throw cljs.core.missing_protocol("Router.match-by-name",this$);
}
}
}
}));

(reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
if((((!((this$ == null)))) && ((!((this$.reitit$core$Router$match_by_name$arity$3 == null)))))){
return this$.reitit$core$Router$match_by_name$arity$3(this$,name,path_params);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.core.match_by_name[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(this$,name,path_params) : m__4488__auto__.call(null,this$,name,path_params));
} else {
var m__4485__auto__ = (reitit.core.match_by_name["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(this$,name,path_params) : m__4485__auto__.call(null,this$,name,path_params));
} else {
throw cljs.core.missing_protocol("Router.match-by-name",this$);
}
}
}
}));

(reitit.core.match_by_name.cljs$lang$maxFixedArity = 3);


reitit.core.router_QMARK_ = (function reitit$core$router_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.reitit$core$Router$)))){
return true;
} else {
if((!x.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(reitit.core.Router,x);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(reitit.core.Router,x);
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
reitit.core.Match = (function (template,data,result,path_params,path,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.path = path;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(reitit.core.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k85001,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__85005 = k85001;
var G__85005__$1 = (((G__85005 instanceof cljs.core.Keyword))?G__85005.fqn:null);
switch (G__85005__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "path":
return self__.path;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k85001,else__4442__auto__);

}
}));

(reitit.core.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__85006){
var vec__85007 = p__85006;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85007,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85007,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(reitit.core.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#reitit.core.Match{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null))], null),self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__85000){
var self__ = this;
var G__85000__$1 = this;
return (new cljs.core.RecordIter((0),G__85000__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.core.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(reitit.core.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.core.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__85010 = (function (coll__4436__auto__){
return (687105853 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__85010(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(reitit.core.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this85002,other85003){
var self__ = this;
var this85002__$1 = this;
return (((!((other85003 == null)))) && ((this85002__$1.constructor === other85003.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this85002__$1.template,other85003.template)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this85002__$1.data,other85003.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this85002__$1.result,other85003.result)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this85002__$1.path_params,other85003.path_params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this85002__$1.path,other85003.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this85002__$1.__extmap,other85003.__extmap)));
}));

(reitit.core.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(reitit.core.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__85000){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__85011 = cljs.core.keyword_identical_QMARK_;
var expr__85012 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__85014 = new cljs.core.Keyword(null,"template","template",-702405684);
var G__85015 = expr__85012;
return (pred__85011.cljs$core$IFn$_invoke$arity$2 ? pred__85011.cljs$core$IFn$_invoke$arity$2(G__85014,G__85015) : pred__85011.call(null,G__85014,G__85015));
})())){
return (new reitit.core.Match(G__85000,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__85016 = new cljs.core.Keyword(null,"data","data",-232669377);
var G__85017 = expr__85012;
return (pred__85011.cljs$core$IFn$_invoke$arity$2 ? pred__85011.cljs$core$IFn$_invoke$arity$2(G__85016,G__85017) : pred__85011.call(null,G__85016,G__85017));
})())){
return (new reitit.core.Match(self__.template,G__85000,self__.result,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__85018 = new cljs.core.Keyword(null,"result","result",1415092211);
var G__85019 = expr__85012;
return (pred__85011.cljs$core$IFn$_invoke$arity$2 ? pred__85011.cljs$core$IFn$_invoke$arity$2(G__85018,G__85019) : pred__85011.call(null,G__85018,G__85019));
})())){
return (new reitit.core.Match(self__.template,self__.data,G__85000,self__.path_params,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__85020 = new cljs.core.Keyword(null,"path-params","path-params",-48130597);
var G__85021 = expr__85012;
return (pred__85011.cljs$core$IFn$_invoke$arity$2 ? pred__85011.cljs$core$IFn$_invoke$arity$2(G__85020,G__85021) : pred__85011.call(null,G__85020,G__85021));
})())){
return (new reitit.core.Match(self__.template,self__.data,self__.result,G__85000,self__.path,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__85022 = new cljs.core.Keyword(null,"path","path",-188191168);
var G__85023 = expr__85012;
return (pred__85011.cljs$core$IFn$_invoke$arity$2 ? pred__85011.cljs$core$IFn$_invoke$arity$2(G__85022,G__85023) : pred__85011.call(null,G__85022,G__85023));
})())){
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,G__85000,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__85000),null));
}
}
}
}
}
}));

(reitit.core.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null))], null),self__.__extmap));
}));

(reitit.core.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__85000){
var self__ = this;
var this__4438__auto____$1 = this;
return (new reitit.core.Match(self__.template,self__.data,self__.result,self__.path_params,self__.path,G__85000,self__.__extmap,self__.__hash));
}));

(reitit.core.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(reitit.core.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"path","path",1452340359,null)], null);
}));

(reitit.core.Match.cljs$lang$type = true);

(reitit.core.Match.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"reitit.core/Match",null,(1),null));
}));

(reitit.core.Match.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"reitit.core/Match");
}));

/**
 * Positional factory function for reitit.core/Match.
 */
reitit.core.__GT_Match = (function reitit$core$__GT_Match(template,data,result,path_params,path){
return (new reitit.core.Match(template,data,result,path_params,path,null,null,null));
});

/**
 * Factory function for reitit.core/Match, taking a map of keywords to field values.
 */
reitit.core.map__GT_Match = (function reitit$core$map__GT_Match(G__85004){
var extmap__4478__auto__ = (function (){var G__85024 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__85004,new cljs.core.Keyword(null,"template","template",-702405684),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path","path",-188191168)], 0));
if(cljs.core.record_QMARK_(G__85004)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__85024);
} else {
return G__85024;
}
})();
return (new reitit.core.Match(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__85004),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__85004),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__85004),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__85004),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__85004),null,cljs.core.not_empty(extmap__4478__auto__),null));
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
reitit.core.PartialMatch = (function (template,data,result,path_params,required,__meta,__extmap,__hash){
this.template = template;
this.data = data;
this.result = result;
this.path_params = path_params;
this.required = required;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(reitit.core.PartialMatch.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k85026,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__85030 = k85026;
var G__85030__$1 = (((G__85030 instanceof cljs.core.Keyword))?G__85030.fqn:null);
switch (G__85030__$1) {
case "template":
return self__.template;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
case "path-params":
return self__.path_params;

break;
case "required":
return self__.required;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k85026,else__4442__auto__);

}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__85031){
var vec__85032 = p__85031;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85032,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85032,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(reitit.core.PartialMatch.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#reitit.core.PartialMatch{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"template","template",-702405684),self__.template],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"required","required",1807647006),self__.required],null))], null),self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__85025){
var self__ = this;
var G__85025__$1 = this;
return (new cljs.core.RecordIter((0),G__85025__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__85035 = (function (coll__4436__auto__){
return (492095938 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__85035(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this85027,other85028){
var self__ = this;
var this85027__$1 = this;
return (((!((other85028 == null)))) && ((this85027__$1.constructor === other85028.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this85027__$1.template,other85028.template)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this85027__$1.data,other85028.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this85027__$1.result,other85028.result)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this85027__$1.path_params,other85028.path_params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this85027__$1.required,other85028.required)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this85027__$1.__extmap,other85028.__extmap)));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"template","template",-702405684),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"required","required",1807647006),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__85025){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__85036 = cljs.core.keyword_identical_QMARK_;
var expr__85037 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__85039 = new cljs.core.Keyword(null,"template","template",-702405684);
var G__85040 = expr__85037;
return (pred__85036.cljs$core$IFn$_invoke$arity$2 ? pred__85036.cljs$core$IFn$_invoke$arity$2(G__85039,G__85040) : pred__85036.call(null,G__85039,G__85040));
})())){
return (new reitit.core.PartialMatch(G__85025,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__85041 = new cljs.core.Keyword(null,"data","data",-232669377);
var G__85042 = expr__85037;
return (pred__85036.cljs$core$IFn$_invoke$arity$2 ? pred__85036.cljs$core$IFn$_invoke$arity$2(G__85041,G__85042) : pred__85036.call(null,G__85041,G__85042));
})())){
return (new reitit.core.PartialMatch(self__.template,G__85025,self__.result,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__85043 = new cljs.core.Keyword(null,"result","result",1415092211);
var G__85044 = expr__85037;
return (pred__85036.cljs$core$IFn$_invoke$arity$2 ? pred__85036.cljs$core$IFn$_invoke$arity$2(G__85043,G__85044) : pred__85036.call(null,G__85043,G__85044));
})())){
return (new reitit.core.PartialMatch(self__.template,self__.data,G__85025,self__.path_params,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__85045 = new cljs.core.Keyword(null,"path-params","path-params",-48130597);
var G__85046 = expr__85037;
return (pred__85036.cljs$core$IFn$_invoke$arity$2 ? pred__85036.cljs$core$IFn$_invoke$arity$2(G__85045,G__85046) : pred__85036.call(null,G__85045,G__85046));
})())){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,G__85025,self__.required,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__85047 = new cljs.core.Keyword(null,"required","required",1807647006);
var G__85048 = expr__85037;
return (pred__85036.cljs$core$IFn$_invoke$arity$2 ? pred__85036.cljs$core$IFn$_invoke$arity$2(G__85047,G__85048) : pred__85036.call(null,G__85047,G__85048));
})())){
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,G__85025,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__85025),null));
}
}
}
}
}
}));

(reitit.core.PartialMatch.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"template","template",-702405684),self__.template,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"required","required",1807647006),self__.required,null))], null),self__.__extmap));
}));

(reitit.core.PartialMatch.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__85025){
var self__ = this;
var this__4438__auto____$1 = this;
return (new reitit.core.PartialMatch(self__.template,self__.data,self__.result,self__.path_params,self__.required,G__85025,self__.__extmap,self__.__hash));
}));

(reitit.core.PartialMatch.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(reitit.core.PartialMatch.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"template","template",938125843,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"required","required",-846788763,null)], null);
}));

(reitit.core.PartialMatch.cljs$lang$type = true);

(reitit.core.PartialMatch.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"reitit.core/PartialMatch",null,(1),null));
}));

(reitit.core.PartialMatch.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"reitit.core/PartialMatch");
}));

/**
 * Positional factory function for reitit.core/PartialMatch.
 */
reitit.core.__GT_PartialMatch = (function reitit$core$__GT_PartialMatch(template,data,result,path_params,required){
return (new reitit.core.PartialMatch(template,data,result,path_params,required,null,null,null));
});

/**
 * Factory function for reitit.core/PartialMatch, taking a map of keywords to field values.
 */
reitit.core.map__GT_PartialMatch = (function reitit$core$map__GT_PartialMatch(G__85029){
var extmap__4478__auto__ = (function (){var G__85049 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__85029,new cljs.core.Keyword(null,"template","template",-702405684),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"required","required",1807647006)], 0));
if(cljs.core.record_QMARK_(G__85029)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__85049);
} else {
return G__85049;
}
})();
return (new reitit.core.PartialMatch(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__85029),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__85029),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__85029),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__85029),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(G__85029),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

reitit.core.partial_match_QMARK_ = (function reitit$core$partial_match_QMARK_(x){
return (x instanceof reitit.core.PartialMatch);
});
reitit.core.match_by_name_BANG_ = (function reitit$core$match_by_name_BANG_(var_args){
var G__85051 = arguments.length;
switch (G__85051) {
case 2:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (this$,name){
return reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3(this$,name,null);
}));

(reitit.core.match_by_name_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (this$,name,path_params){
var temp__5733__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(this$,name,path_params);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
if((!(reitit.core.partial_match_QMARK_(match)))){
return match;
} else {
return reitit.impl.throw_on_missing_path_params(new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"required","required",1807647006).cljs$core$IFn$_invoke$arity$1(match),path_params);
}
} else {
return null;
}
}));

(reitit.core.match_by_name_BANG_.cljs$lang$maxFixedArity = 3);

reitit.core.match__GT_path = (function reitit$core$match__GT_path(var_args){
var G__85053 = arguments.length;
switch (G__85053) {
case 1:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$1 = (function (match){
return reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2(match,null);
}));

(reitit.core.match__GT_path.cljs$core$IFn$_invoke$arity$2 = (function (match,query_params){
var G__85054 = match;
var G__85054__$1 = (((G__85054 == null))?null:new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__85054));
if((G__85054__$1 == null)){
return null;
} else {
var G__85055 = G__85054__$1;
if(cljs.core.truth_(query_params)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__85055),"?",reitit.impl.query_string(query_params)].join('');
} else {
return G__85055;
}
}
}));

(reitit.core.match__GT_path.cljs$lang$maxFixedArity = 2);

/**
 * Creates a linear-router from resolved routes and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.linear_router = (function reitit$core$linear_router(var_args){
var G__85058 = arguments.length;
switch (G__85058) {
case 1:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.linear_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var names = reitit.core.find_names(compiled_routes,opts);
var vec__85059 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__85062,p__85063){
var vec__85064 = p__85062;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85064,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85064,(1),null);
var vec__85067 = p__85063;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85067,(0),null);
var map__85070 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85067,(1),null);
var map__85070__$1 = (((((!((map__85070 == null))))?(((((map__85070.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85070.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85070):map__85070);
var data = map__85070__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85070__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85067,(2),null);
var map__85072 = reitit.impl.create(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,data,result], null));
var map__85072__$1 = (((((!((map__85072 == null))))?(((((map__85072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85072):map__85072);
var route = map__85072__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85072__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = (function (p1__85056_SHARP_){
var temp__5733__auto__ = reitit.impl.path_for(route,p1__85056_SHARP_);
if(cljs.core.truth_(temp__5733__auto__)){
var path = temp__5733__auto__;
return reitit.core.__GT_Match(p,data,result,reitit.impl.url_decode_coll(p1__85056_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch(p,data,result,p1__85056_SHARP_,path_params);
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pl,reitit.segment.compile(reitit.segment.insert(null,p,reitit.core.__GT_Match(p,data,result,null,null)))),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,f):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85059,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85059,(1),null);
var lookup = reitit.impl.fast_map(nl);
var scanner = reitit.segment.scanner(pl);
var routes = reitit.core.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core85074 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core85074 = (function (scanner,names,compiled_routes,routes,lookup,pl,nl,opts,vec__85059,meta85075){
this.scanner = scanner;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.pl = pl;
this.nl = nl;
this.opts = opts;
this.vec__85059 = vec__85059;
this.meta85075 = meta85075;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core85074.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_85076,meta85075__$1){
var self__ = this;
var _85076__$1 = this;
return (new reitit.core.t_reitit$core85074(self__.scanner,self__.names,self__.compiled_routes,self__.routes,self__.lookup,self__.pl,self__.nl,self__.opts,self__.vec__85059,meta85075__$1));
}));

(reitit.core.t_reitit$core85074.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_85076){
var self__ = this;
var _85076__$1 = this;
return self__.meta85075;
}));

(reitit.core.t_reitit$core85074.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core85074.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"linear-router","linear-router",-755184172);
}));

(reitit.core.t_reitit$core85074.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core85074.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core85074.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core85074.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core85074.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.segment.lookup(self__.scanner,path);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match)),new cljs.core.Keyword(null,"path","path",-188191168),path);
} else {
return null;
}
}));

(reitit.core.t_reitit$core85074.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
}));

(reitit.core.t_reitit$core85074.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
var G__85077 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__85077) : match.call(null,G__85077));
} else {
return null;
}
}));

(reitit.core.t_reitit$core85074.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"scanner","scanner",1814709219,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"vec__85059","vec__85059",1485096669,null),new cljs.core.Symbol(null,"meta85075","meta85075",-1656285368,null)], null);
}));

(reitit.core.t_reitit$core85074.cljs$lang$type = true);

(reitit.core.t_reitit$core85074.cljs$lang$ctorStr = "reitit.core/t_reitit$core85074");

(reitit.core.t_reitit$core85074.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.core/t_reitit$core85074");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core85074.
 */
reitit.core.__GT_t_reitit$core85074 = (function reitit$core$__GT_t_reitit$core85074(scanner__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,opts__$1,vec__85059__$1,meta85075){
return (new reitit.core.t_reitit$core85074(scanner__$1,names__$1,compiled_routes__$1,routes__$1,lookup__$1,pl__$1,nl__$1,opts__$1,vec__85059__$1,meta85075));
});

}

return (new reitit.core.t_reitit$core85074(scanner,names,compiled_routes,routes,lookup,pl,nl,opts,vec__85059,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.linear_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates a lookup-router from resolved routes and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.lookup_router = (function reitit$core$lookup_router(var_args){
var G__85080 = arguments.length;
switch (G__85080) {
case 1:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.lookup_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var temp__5735__auto___85226 = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(reitit.impl.wild_route_QMARK_,compiled_routes));
if(temp__5735__auto___85226){
var wilds_85227 = temp__5735__auto___85226;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["can't create :lookup-router with wildcard routes: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(wilds_85227)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"wilds","wilds",132271223),wilds_85227,new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var names = reitit.core.find_names(compiled_routes,opts);
var vec__85081 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__85084,p__85085){
var vec__85086 = p__85084;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85086,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85086,(1),null);
var vec__85089 = p__85085;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85089,(0),null);
var map__85092 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85089,(1),null);
var map__85092__$1 = (((((!((map__85092 == null))))?(((((map__85092.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85092.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85092):map__85092);
var data = map__85092__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85092__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85089,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pl,p,reitit.core.__GT_Match(p,data,result,cljs.core.PersistentArrayMap.EMPTY,p)),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,(function (p1__85078_SHARP_){
return reitit.core.__GT_Match(p,data,result,p1__85078_SHARP_,p);
})):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85081,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85081,(1),null);
var data = reitit.impl.fast_map(pl);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.core.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core85094 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core85094 = (function (names,data,compiled_routes,routes,lookup,vec__85081,pl,nl,opts,meta85095){
this.names = names;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.lookup = lookup;
this.vec__85081 = vec__85081;
this.pl = pl;
this.nl = nl;
this.opts = opts;
this.meta85095 = meta85095;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core85094.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_85096,meta85095__$1){
var self__ = this;
var _85096__$1 = this;
return (new reitit.core.t_reitit$core85094(self__.names,self__.data,self__.compiled_routes,self__.routes,self__.lookup,self__.vec__85081,self__.pl,self__.nl,self__.opts,meta85095__$1));
}));

(reitit.core.t_reitit$core85094.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_85096){
var self__ = this;
var _85096__$1 = this;
return self__.meta85095;
}));

(reitit.core.t_reitit$core85094.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core85094.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"lookup-router","lookup-router",-684998665);
}));

(reitit.core.t_reitit$core85094.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core85094.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core85094.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core85094.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core85094.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
return reitit.impl.fast_get(self__.data,path);
}));

(reitit.core.t_reitit$core85094.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
}));

(reitit.core.t_reitit$core85094.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
var G__85097 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__85097) : match.call(null,G__85097));
} else {
return null;
}
}));

(reitit.core.t_reitit$core85094.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"vec__85081","vec__85081",61183858,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta85095","meta85095",918749145,null)], null);
}));

(reitit.core.t_reitit$core85094.cljs$lang$type = true);

(reitit.core.t_reitit$core85094.cljs$lang$ctorStr = "reitit.core/t_reitit$core85094");

(reitit.core.t_reitit$core85094.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.core/t_reitit$core85094");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core85094.
 */
reitit.core.__GT_t_reitit$core85094 = (function reitit$core$__GT_t_reitit$core85094(names__$1,data__$1,compiled_routes__$1,routes__$1,lookup__$1,vec__85081__$1,pl__$1,nl__$1,opts__$1,meta85095){
return (new reitit.core.t_reitit$core85094(names__$1,data__$1,compiled_routes__$1,routes__$1,lookup__$1,vec__85081__$1,pl__$1,nl__$1,opts__$1,meta85095));
});

}

return (new reitit.core.t_reitit$core85094(names,data,compiled_routes,routes,lookup,vec__85081,pl,nl,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.lookup_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates a special prefix-tree style segment router from resolved routes and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.segment_router = (function reitit$core$segment_router(var_args){
var G__85100 = arguments.length;
switch (G__85100) {
case 1:
return reitit.core.segment_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.segment_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.segment_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.segment_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.segment_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var names = reitit.core.find_names(compiled_routes,opts);
var vec__85101 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__85104,p__85105){
var vec__85106 = p__85104;
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85106,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85106,(1),null);
var vec__85109 = p__85105;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85109,(0),null);
var map__85112 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85109,(1),null);
var map__85112__$1 = (((((!((map__85112 == null))))?(((((map__85112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85112):map__85112);
var data = map__85112__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85112__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85109,(2),null);
var map__85114 = reitit.impl.create(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,data,result], null));
var map__85114__$1 = (((((!((map__85114 == null))))?(((((map__85114.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85114.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85114):map__85114);
var route = map__85114__$1;
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85114__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var f = (function (p1__85098_SHARP_){
var temp__5733__auto__ = reitit.impl.path_for(route,p1__85098_SHARP_);
if(cljs.core.truth_(temp__5733__auto__)){
var path = temp__5733__auto__;
return reitit.core.__GT_Match(p,data,result,reitit.impl.url_decode_coll(p1__85098_SHARP_),path);
} else {
return reitit.core.__GT_PartialMatch(p,data,result,p1__85098_SHARP_,path_params);
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [reitit.segment.insert(pl,p,reitit.core.__GT_Match(p,data,result,null,null)),(cljs.core.truth_(name)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(nl,name,f):nl)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.PersistentArrayMap.EMPTY], null),compiled_routes);
var pl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85101,(0),null);
var nl = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85101,(1),null);
var pl__$1 = reitit.segment.compile(pl);
var lookup = reitit.impl.fast_map(nl);
var routes = reitit.core.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core85116 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core85116 = (function (compiled_routes,opts,names,vec__85101,pl,nl,lookup,routes,meta85117){
this.compiled_routes = compiled_routes;
this.opts = opts;
this.names = names;
this.vec__85101 = vec__85101;
this.pl = pl;
this.nl = nl;
this.lookup = lookup;
this.routes = routes;
this.meta85117 = meta85117;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core85116.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_85118,meta85117__$1){
var self__ = this;
var _85118__$1 = this;
return (new reitit.core.t_reitit$core85116(self__.compiled_routes,self__.opts,self__.names,self__.vec__85101,self__.pl,self__.nl,self__.lookup,self__.routes,meta85117__$1));
}));

(reitit.core.t_reitit$core85116.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_85118){
var self__ = this;
var _85118__$1 = this;
return self__.meta85117;
}));

(reitit.core.t_reitit$core85116.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core85116.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"segment-router","segment-router",223699433);
}));

(reitit.core.t_reitit$core85116.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core85116.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core85116.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core85116.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core85116.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.segment.lookup(self__.pl,path);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(match),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match)),new cljs.core.Keyword(null,"path","path",-188191168),path);
} else {
return null;
}
}));

(reitit.core.t_reitit$core85116.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(null) : match.call(null,null));
} else {
return null;
}
}));

(reitit.core.t_reitit$core85116.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var temp__5733__auto__ = reitit.impl.fast_get(self__.lookup,name);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
var G__85119 = reitit.impl.path_params(path_params);
return (match.cljs$core$IFn$_invoke$arity$1 ? match.cljs$core$IFn$_invoke$arity$1(G__85119) : match.call(null,G__85119));
} else {
return null;
}
}));

(reitit.core.t_reitit$core85116.getBasis = (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"vec__85101","vec__85101",387661919,null),new cljs.core.Symbol(null,"pl","pl",-50409036,null),new cljs.core.Symbol(null,"nl","nl",1731484120,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"meta85117","meta85117",-2038590185,null)], null);
}));

(reitit.core.t_reitit$core85116.cljs$lang$type = true);

(reitit.core.t_reitit$core85116.cljs$lang$ctorStr = "reitit.core/t_reitit$core85116");

(reitit.core.t_reitit$core85116.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.core/t_reitit$core85116");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core85116.
 */
reitit.core.__GT_t_reitit$core85116 = (function reitit$core$__GT_t_reitit$core85116(compiled_routes__$1,opts__$1,names__$1,vec__85101__$1,pl__$2,nl__$1,lookup__$1,routes__$1,meta85117){
return (new reitit.core.t_reitit$core85116(compiled_routes__$1,opts__$1,names__$1,vec__85101__$1,pl__$2,nl__$1,lookup__$1,routes__$1,meta85117));
});

}

return (new reitit.core.t_reitit$core85116(compiled_routes,opts,names,vec__85101,pl__$1,nl,lookup,routes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.segment_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates a fast router of 1 static route(s) and optional
 *   expanded options. See [[router]] for available options.
 */
reitit.core.single_static_path_router = (function reitit$core$single_static_path_router(var_args){
var G__85121 = arguments.length;
switch (G__85121) {
case 1:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.single_static_path_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
if(cljs.core.truth_((function (){var or__4185__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(compiled_routes),(1));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return cljs.core.some(reitit.impl.wild_route_QMARK_,compiled_routes);
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([":single-static-path-router requires exactly 1 static route: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(compiled_routes)].join(''),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"routes","routes",457900162),compiled_routes], null));
} else {
}

var vec__85122 = reitit.core.find_names(compiled_routes,opts);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85122,(0),null);
var names = vec__85122;
var vec__85125 = compiled_routes;
var vec__85128 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85125,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85128,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85128,(1),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85128,(2),null);
var p__$1 = p;
var match = reitit.core.__GT_Match(p__$1,data,result,cljs.core.PersistentArrayMap.EMPTY,p__$1);
var routes = reitit.core.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core85131 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core85131 = (function (vec__85122,p,names,match,data,compiled_routes,routes,n,vec__85128,result,opts,vec__85125,meta85132){
this.vec__85122 = vec__85122;
this.p = p;
this.names = names;
this.match = match;
this.data = data;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.n = n;
this.vec__85128 = vec__85128;
this.result = result;
this.opts = opts;
this.vec__85125 = vec__85125;
this.meta85132 = meta85132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core85131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_85133,meta85132__$1){
var self__ = this;
var _85133__$1 = this;
return (new reitit.core.t_reitit$core85131(self__.vec__85122,self__.p,self__.names,self__.match,self__.data,self__.compiled_routes,self__.routes,self__.n,self__.vec__85128,self__.result,self__.opts,self__.vec__85125,meta85132__$1));
}));

(reitit.core.t_reitit$core85131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_85133){
var self__ = this;
var _85133__$1 = this;
return self__.meta85132;
}));

(reitit.core.t_reitit$core85131.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core85131.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"single-static-path-router","single-static-path-router",-247523580);
}));

(reitit.core.t_reitit$core85131.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core85131.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core85131.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core85131.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core85131.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.p,path)){
return self__.match;
} else {
return null;
}
}));

(reitit.core.t_reitit$core85131.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.n,name)){
return self__.match;
} else {
return null;
}
}));

(reitit.core.t_reitit$core85131.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.n,name)){
return reitit.impl.fast_assoc(self__.match,new cljs.core.Keyword(null,"path-params","path-params",-48130597),reitit.impl.path_params(path_params));
} else {
return null;
}
}));

(reitit.core.t_reitit$core85131.getBasis = (function (){
return new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"vec__85122","vec__85122",-1154996959,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"n","n",-2092305744,null),new cljs.core.Symbol(null,"vec__85128","vec__85128",1013513970,null),new cljs.core.Symbol(null,"result","result",-1239343558,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"vec__85125","vec__85125",634731135,null),new cljs.core.Symbol(null,"meta85132","meta85132",-1495715059,null)], null);
}));

(reitit.core.t_reitit$core85131.cljs$lang$type = true);

(reitit.core.t_reitit$core85131.cljs$lang$ctorStr = "reitit.core/t_reitit$core85131");

(reitit.core.t_reitit$core85131.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.core/t_reitit$core85131");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core85131.
 */
reitit.core.__GT_t_reitit$core85131 = (function reitit$core$__GT_t_reitit$core85131(vec__85122__$1,p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,routes__$1,n__$1,vec__85128__$1,result__$1,opts__$1,vec__85125__$1,meta85132){
return (new reitit.core.t_reitit$core85131(vec__85122__$1,p__$2,names__$1,match__$1,data__$1,compiled_routes__$1,routes__$1,n__$1,vec__85128__$1,result__$1,opts__$1,vec__85125__$1,meta85132));
});

}

return (new reitit.core.t_reitit$core85131(vec__85122,p__$1,names,match,data,compiled_routes,routes,n,vec__85128,result,opts,vec__85125,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.single_static_path_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates two routers: [[lookup-router]] or [[single-static-path-router]] for
 *   static routes and [[segment-router]] for wildcard routes. All
 *   routes should be non-conflicting. Takes resolved routes and optional
 *   expanded options. See [[router]] for options.
 */
reitit.core.mixed_router = (function reitit$core$mixed_router(var_args){
var G__85135 = arguments.length;
switch (G__85135) {
case 1:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var map__85136 = cljs.core.group_by(reitit.impl.wild_route_QMARK_,compiled_routes);
var map__85136__$1 = (((((!((map__85136 == null))))?(((((map__85136.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85136.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85136):map__85136);
var wild = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85136__$1,true);
var lookup = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85136__$1,false);
var __GT_static_router = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(lookup)))?reitit.core.single_static_path_router:reitit.core.lookup_router);
var wildcard_router = reitit.core.segment_router.cljs$core$IFn$_invoke$arity$2(wild,opts);
var static_router = (__GT_static_router.cljs$core$IFn$_invoke$arity$2 ? __GT_static_router.cljs$core$IFn$_invoke$arity$2(lookup,opts) : __GT_static_router.call(null,lookup,opts));
var names = reitit.core.find_names(compiled_routes,opts);
var routes = reitit.core.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core85138 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core85138 = (function (map__85136,names,compiled_routes,routes,__GT_static_router,lookup,wild,static_router,opts,wildcard_router,meta85139){
this.map__85136 = map__85136;
this.names = names;
this.compiled_routes = compiled_routes;
this.routes = routes;
this.__GT_static_router = __GT_static_router;
this.lookup = lookup;
this.wild = wild;
this.static_router = static_router;
this.opts = opts;
this.wildcard_router = wildcard_router;
this.meta85139 = meta85139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core85138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_85140,meta85139__$1){
var self__ = this;
var _85140__$1 = this;
return (new reitit.core.t_reitit$core85138(self__.map__85136,self__.names,self__.compiled_routes,self__.routes,self__.__GT_static_router,self__.lookup,self__.wild,self__.static_router,self__.opts,self__.wildcard_router,meta85139__$1));
}));

(reitit.core.t_reitit$core85138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_85140){
var self__ = this;
var _85140__$1 = this;
return self__.meta85139;
}));

(reitit.core.t_reitit$core85138.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core85138.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"mixed-router","mixed-router",-1225013968);
}));

(reitit.core.t_reitit$core85138.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core85138.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core85138.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core85138.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core85138.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var or__4185__auto__ = reitit.core.match_by_path(self__.static_router,path);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return reitit.core.match_by_path(self__.wildcard_router,path);
}
}));

(reitit.core.t_reitit$core85138.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4185__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.static_router,name);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.wildcard_router,name);
}
}));

(reitit.core.t_reitit$core85138.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__4185__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.static_router,name,path_params);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.wildcard_router,name,path_params);
}
}));

(reitit.core.t_reitit$core85138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map__85136","map__85136",-114449277,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"->static-router","->static-router",-1746495540,null),new cljs.core.Symbol(null,"lookup","lookup",-1429078931,null),new cljs.core.Symbol(null,"wild","wild",-2041111534,null),new cljs.core.Symbol(null,"static-router","static-router",439222930,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"wildcard-router","wildcard-router",553983966,null),new cljs.core.Symbol(null,"meta85139","meta85139",154259600,null)], null);
}));

(reitit.core.t_reitit$core85138.cljs$lang$type = true);

(reitit.core.t_reitit$core85138.cljs$lang$ctorStr = "reitit.core/t_reitit$core85138");

(reitit.core.t_reitit$core85138.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.core/t_reitit$core85138");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core85138.
 */
reitit.core.__GT_t_reitit$core85138 = (function reitit$core$__GT_t_reitit$core85138(map__85136__$2,names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,opts__$1,wildcard_router__$1,meta85139){
return (new reitit.core.t_reitit$core85138(map__85136__$2,names__$1,compiled_routes__$1,routes__$1,__GT_static_router__$1,lookup__$1,wild__$1,static_router__$1,opts__$1,wildcard_router__$1,meta85139));
});

}

return (new reitit.core.t_reitit$core85138(map__85136__$1,names,compiled_routes,routes,__GT_static_router,lookup,wild,static_router,opts,wildcard_router,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.mixed_router.cljs$lang$maxFixedArity = 2);

/**
 * Creates two routers: [[mixed-router]] for non-conflicting routes
 *   and [[linear-router]] for conflicting routes. Takes resolved routes
 *   and optional expanded options. See [[router]] for options.
 */
reitit.core.quarantine_router = (function reitit$core$quarantine_router(var_args){
var G__85143 = arguments.length;
switch (G__85143) {
case 1:
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$1 = (function (compiled_routes){
return reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2(compiled_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.quarantine_router.cljs$core$IFn$_invoke$arity$2 = (function (compiled_routes,opts){
var conflicting_paths = reitit.core.conflicting_paths(reitit.core.path_conflicting_routes(compiled_routes));
var conflicting_QMARK_ = (function (p1__85141_SHARP_){
return cljs.core.contains_QMARK_(conflicting_paths,cljs.core.first(p1__85141_SHARP_));
});
var map__85144 = cljs.core.group_by(conflicting_QMARK_,compiled_routes);
var map__85144__$1 = (((((!((map__85144 == null))))?(((((map__85144.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85144.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85144):map__85144);
var conflicting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85144__$1,true);
var non_conflicting = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85144__$1,false);
var linear_router = reitit.core.linear_router.cljs$core$IFn$_invoke$arity$2(conflicting,opts);
var mixed_router = reitit.core.mixed_router.cljs$core$IFn$_invoke$arity$2(non_conflicting,opts);
var names = reitit.core.find_names(compiled_routes,opts);
var routes = reitit.core.uncompile_routes(compiled_routes);
if((typeof reitit !== 'undefined') && (typeof reitit.core !== 'undefined') && (typeof reitit.core.t_reitit$core85146 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.core.Router}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.core.t_reitit$core85146 = (function (non_conflicting,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,map__85144,mixed_router,linear_router,opts,meta85147){
this.non_conflicting = non_conflicting;
this.names = names;
this.conflicting_paths = conflicting_paths;
this.compiled_routes = compiled_routes;
this.conflicting = conflicting;
this.routes = routes;
this.conflicting_QMARK_ = conflicting_QMARK_;
this.map__85144 = map__85144;
this.mixed_router = mixed_router;
this.linear_router = linear_router;
this.opts = opts;
this.meta85147 = meta85147;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.core.t_reitit$core85146.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_85148,meta85147__$1){
var self__ = this;
var _85148__$1 = this;
return (new reitit.core.t_reitit$core85146(self__.non_conflicting,self__.names,self__.conflicting_paths,self__.compiled_routes,self__.conflicting,self__.routes,self__.conflicting_QMARK_,self__.map__85144,self__.mixed_router,self__.linear_router,self__.opts,meta85147__$1));
}));

(reitit.core.t_reitit$core85146.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_85148){
var self__ = this;
var _85148__$1 = this;
return self__.meta85147;
}));

(reitit.core.t_reitit$core85146.prototype.reitit$core$Router$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.core.t_reitit$core85146.prototype.reitit$core$Router$router_name$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.Keyword(null,"quarantine-router","quarantine-router",-1548185225);
}));

(reitit.core.t_reitit$core85146.prototype.reitit$core$Router$routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.routes;
}));

(reitit.core.t_reitit$core85146.prototype.reitit$core$Router$compiled_routes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.compiled_routes;
}));

(reitit.core.t_reitit$core85146.prototype.reitit$core$Router$options$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.opts;
}));

(reitit.core.t_reitit$core85146.prototype.reitit$core$Router$route_names$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.names;
}));

(reitit.core.t_reitit$core85146.prototype.reitit$core$Router$match_by_path$arity$2 = (function (_,path){
var self__ = this;
var ___$1 = this;
var or__4185__auto__ = reitit.core.match_by_path(self__.mixed_router,path);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return reitit.core.match_by_path(self__.linear_router,path);
}
}));

(reitit.core.t_reitit$core85146.prototype.reitit$core$Router$match_by_name$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__4185__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.mixed_router,name);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$2(self__.linear_router,name);
}
}));

(reitit.core.t_reitit$core85146.prototype.reitit$core$Router$match_by_name$arity$3 = (function (_,name,path_params){
var self__ = this;
var ___$1 = this;
var or__4185__auto__ = reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.mixed_router,name,path_params);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return reitit.core.match_by_name.cljs$core$IFn$_invoke$arity$3(self__.linear_router,name,path_params);
}
}));

(reitit.core.t_reitit$core85146.getBasis = (function (){
return new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"non-conflicting","non-conflicting",1853515681,null),new cljs.core.Symbol(null,"names","names",-302543131,null),new cljs.core.Symbol(null,"conflicting-paths","conflicting-paths",-1148454714,null),new cljs.core.Symbol(null,"compiled-routes","compiled-routes",-1786642010,null),new cljs.core.Symbol(null,"conflicting","conflicting",-650607353,null),new cljs.core.Symbol(null,"routes","routes",2098431689,null),new cljs.core.Symbol(null,"conflicting?","conflicting?",-1064530835,null),new cljs.core.Symbol(null,"map__85144","map__85144",1063839538,null),new cljs.core.Symbol(null,"mixed-router","mixed-router",415517559,null),new cljs.core.Symbol(null,"linear-router","linear-router",885347355,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta85147","meta85147",1442879572,null)], null);
}));

(reitit.core.t_reitit$core85146.cljs$lang$type = true);

(reitit.core.t_reitit$core85146.cljs$lang$ctorStr = "reitit.core/t_reitit$core85146");

(reitit.core.t_reitit$core85146.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.core/t_reitit$core85146");
}));

/**
 * Positional factory function for reitit.core/t_reitit$core85146.
 */
reitit.core.__GT_t_reitit$core85146 = (function reitit$core$__GT_t_reitit$core85146(non_conflicting__$1,names__$1,conflicting_paths__$1,compiled_routes__$1,conflicting__$1,routes__$1,conflicting_QMARK___$1,map__85144__$2,mixed_router__$1,linear_router__$1,opts__$1,meta85147){
return (new reitit.core.t_reitit$core85146(non_conflicting__$1,names__$1,conflicting_paths__$1,compiled_routes__$1,conflicting__$1,routes__$1,conflicting_QMARK___$1,map__85144__$2,mixed_router__$1,linear_router__$1,opts__$1,meta85147));
});

}

return (new reitit.core.t_reitit$core85146(non_conflicting,names,conflicting_paths,compiled_routes,conflicting,routes,conflicting_QMARK_,map__85144__$1,mixed_router,linear_router,opts,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.core","router","reitit.core/router",1293076450)], null)));
}));

(reitit.core.quarantine_router.cljs$lang$maxFixedArity = 2);

reitit.core.default_router_options = (function reitit$core$default_router_options(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"lookup","lookup",1225356838),reitit.core.name_lookup,new cljs.core.Keyword(null,"expand","expand",595248157),reitit.core.expand,new cljs.core.Keyword(null,"coerce","coerce",1917884504),(function (route,_){
return route;
}),new cljs.core.Keyword(null,"compile","compile",608186429),(function (p__85149,_){
var vec__85150 = p__85149;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85150,(0),null);
var map__85153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__85150,(1),null);
var map__85153__$1 = (((((!((map__85153 == null))))?(((((map__85153.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85153.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85153):map__85153);
var handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85153__$1,new cljs.core.Keyword(null,"handler","handler",-195596612));
return handler;
}),new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(reitit.core.throw_on_conflicts_BANG_,reitit.core.path_conflicts_str)], null);
});
/**
 * Create a [[Router]] from raw route data and optionally an options map.
 *   Selects implementation based on route details. The following options
 *   are available:
 * 
 *   | key          | description |
 *   | -------------|-------------|
 *   | `:path`      | Base-path for routes
 *   | `:routes`    | Initial resolved routes (default `[]`)
 *   | `:data`      | Initial route data (default `{}`)
 *   | `:spec`      | clojure.spec definition for a route data, see `reitit.spec` on how to use this
 *   | `:expand`    | Function of `arg opts => data` to expand route arg to route data (default `reitit.core/expand`)
 *   | `:coerce`    | Function of `route opts => route` to coerce resolved route, can throw or return `nil`
 *   | `:compile`   | Function of `route opts => result` to compile a route handler
 *   | `:validate`  | Function of `routes opts => ()` to validate route (data) via side-effects
 *   | `:conflicts` | Function of `{route #{route}} => ()` to handle conflicting routes (default `reitit.core/throw-on-conflicts!`)
 *   | `:router`    | Function of `routes opts => router` to override the actual router implementation
 */
reitit.core.router = (function reitit$core$router(var_args){
var G__85156 = arguments.length;
switch (G__85156) {
case 1:
return reitit.core.router.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.core.router.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.core.router.cljs$core$IFn$_invoke$arity$1 = (function (raw_routes){
return reitit.core.router.cljs$core$IFn$_invoke$arity$2(raw_routes,cljs.core.PersistentArrayMap.EMPTY);
}));

(reitit.core.router.cljs$core$IFn$_invoke$arity$2 = (function (raw_routes,opts){
var map__85157 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([reitit.core.default_router_options(),opts], 0));
var map__85157__$1 = (((((!((map__85157 == null))))?(((((map__85157.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__85157.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__85157):map__85157);
var opts__$1 = map__85157__$1;
var router = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__85157__$1,new cljs.core.Keyword(null,"router","router",1091916230));
var routes = reitit.core.resolve_routes(raw_routes,opts__$1);
var path_conflicting = reitit.core.path_conflicting_routes(routes);
var name_conflicting = reitit.core.name_conflicting_routes(routes);
var compiled_routes = reitit.core.compile_routes(routes,opts__$1);
var wilds_QMARK_ = cljs.core.boolean$(cljs.core.some(reitit.impl.wild_route_QMARK_,compiled_routes));
var all_wilds_QMARK_ = cljs.core.every_QMARK_(reitit.impl.wild_route_QMARK_,compiled_routes);
var router__$1 = (cljs.core.truth_(router)?router:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(compiled_routes))) && ((!(wilds_QMARK_)))))?reitit.core.single_static_path_router:(cljs.core.truth_(path_conflicting)?reitit.core.quarantine_router:(((!(wilds_QMARK_)))?reitit.core.lookup_router:((all_wilds_QMARK_)?reitit.core.segment_router:reitit.core.mixed_router
)))));
var temp__5735__auto___85284 = new cljs.core.Keyword(null,"validate","validate",-201300827).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5735__auto___85284)){
var validate_85285 = temp__5735__auto___85284;
(validate_85285.cljs$core$IFn$_invoke$arity$2 ? validate_85285.cljs$core$IFn$_invoke$arity$2(compiled_routes,opts__$1) : validate_85285.call(null,compiled_routes,opts__$1));
} else {
}

var temp__5735__auto___85286 = new cljs.core.Keyword(null,"conflicts","conflicts",-1219561816).cljs$core$IFn$_invoke$arity$1(opts__$1);
if(cljs.core.truth_(temp__5735__auto___85286)){
var conflicts_85287 = temp__5735__auto___85286;
if(cljs.core.truth_(path_conflicting)){
(conflicts_85287.cljs$core$IFn$_invoke$arity$1 ? conflicts_85287.cljs$core$IFn$_invoke$arity$1(path_conflicting) : conflicts_85287.call(null,path_conflicting));
} else {
}
} else {
}

if(cljs.core.truth_(name_conflicting)){
reitit.core.throw_on_conflicts_BANG_(reitit.core.name_conflicts_str,name_conflicting);
} else {
}

return (router__$1.cljs$core$IFn$_invoke$arity$2 ? router__$1.cljs$core$IFn$_invoke$arity$2(compiled_routes,opts__$1) : router__$1.call(null,compiled_routes,opts__$1));
}));

(reitit.core.router.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=reitit.core.js.map
