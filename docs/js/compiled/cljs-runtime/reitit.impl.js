goog.provide('reitit.impl');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
/**
 * Applies a function to every value of a map, updates the value if not nil.
 *   Also works on vectors. Maintains key for maps, order for vectors.
 */
reitit.impl.maybe_map_values = (function reitit$impl$maybe_map_values(f,coll){
return cljs.core.reduce_kv((function (coll__$1,k,v){
var temp__5737__auto__ = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(v) : f.call(null,v));
if((temp__5737__auto__ == null)){
return coll__$1;
} else {
var v_SINGLEQUOTE_ = temp__5737__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(coll__$1,k,v_SINGLEQUOTE_);
}
}),coll,coll);
});
/**
 * Splits the path into sequence of segments, using `/` char. Assumes that the
 *   path starts with `/`, stripping the first empty segment. e.g.
 * 
 *    (segments "/a/b/c") ; => ("a" "b" "c")
 *    (segments "/a/)      ; => ("a" "")
 */
reitit.impl.segments = (function reitit$impl$segments(path){
return cljs.core.rest(path.split(/\//,(666)));
});
reitit.impl.wild_QMARK_ = (function reitit$impl$wild_QMARK_(s){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["*",null,":",null], null), null),cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
});
reitit.impl.catch_all_QMARK_ = (function reitit$impl$catch_all_QMARK_(s){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",cljs.core.first(cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)));
});
reitit.impl.wild_param = (function reitit$impl$wild_param(s){
var ss = cljs.core.str.cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(":",cljs.core.first(ss))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ss,(1)));
} else {
return null;
}
});
reitit.impl.catch_all_param = (function reitit$impl$catch_all_param(s){
var ss = cljs.core.str.cljs$core$IFn$_invoke$arity$1(s);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("*",cljs.core.first(ss))){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(ss,(1)));
} else {
return null;
}
});
reitit.impl.wild_or_catch_all_param_QMARK_ = (function reitit$impl$wild_or_catch_all_param_QMARK_(x){
return cljs.core.boolean$((function (){var or__4185__auto__ = reitit.impl.wild_param(x);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return reitit.impl.catch_all_param(x);
}
})());
});
reitit.impl.contains_wilds_QMARK_ = (function reitit$impl$contains_wilds_QMARK_(path){
return cljs.core.boolean$(cljs.core.some(reitit.impl.wild_or_catch_all_param_QMARK_,reitit.impl.segments(path)));
});
reitit.impl.parse_path_token = (function reitit$impl$parse_path_token(out,string){
var pred__56158 = cljs.core.re_matches;
var expr__56159 = string;
var temp__5733__auto__ = (function (){var G__56162 = /^:(.+)$/;
var G__56163 = expr__56159;
return (pred__56158.cljs$core$IFn$_invoke$arity$2 ? pred__56158.cljs$core$IFn$_invoke$arity$2(G__56162,G__56163) : pred__56158.call(null,G__56162,G__56163));
})();
if(cljs.core.truth_(temp__5733__auto__)){
var p__4544__auto__ = temp__5733__auto__;
var fexpr__56177 = (function (p__56178){
var vec__56179 = p__56178;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56179,(0),null);
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56179,(1),null);
var key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-parts","path-parts",945822894)], null),cljs.core.conj,key),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597)], null),cljs.core.conj,key);
});
return fexpr__56177(p__4544__auto__);
} else {
var temp__5733__auto____$1 = (function (){var G__56182 = /^\*(.*)$/;
var G__56183 = expr__56159;
return (pred__56158.cljs$core$IFn$_invoke$arity$2 ? pred__56158.cljs$core$IFn$_invoke$arity$2(G__56182,G__56183) : pred__56158.call(null,G__56182,G__56183));
})();
if(cljs.core.truth_(temp__5733__auto____$1)){
var p__4544__auto__ = temp__5733__auto____$1;
var fexpr__56188 = (function (p__56189){
var vec__56190 = p__56189;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56190,(0),null);
var token = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56190,(1),null);
var key = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(token);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-parts","path-parts",945822894)], null),cljs.core.conj,key),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-params","path-params",-48130597)], null),cljs.core.conj,key);
});
return fexpr__56188(p__4544__auto__);
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(out,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path-parts","path-parts",945822894)], null),cljs.core.conj,string);
}
}
});
reitit.impl.parse_path = (function reitit$impl$parse_path(var_args){
var G__56194 = arguments.length;
switch (G__56194) {
case 1:
return reitit.impl.parse_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return reitit.impl.parse_path.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.impl.parse_path.cljs$core$IFn$_invoke$arity$1 = (function (pattern){
return reitit.impl.parse_path.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-parts","path-parts",945822894),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"path-params","path-params",-48130597),cljs.core.PersistentHashSet.EMPTY], null),pattern);
}));

(reitit.impl.parse_path.cljs$core$IFn$_invoke$arity$2 = (function (accumulated_info,pattern){
var temp__5733__auto__ = cljs.core.re_matches(/\/(.*)/,pattern);
if(cljs.core.truth_(temp__5733__auto__)){
var m = temp__5733__auto__;
var vec__56197 = m;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56197,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56197,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(reitit.impl.parse_path_token,accumulated_info,clojure.string.split.cljs$core$IFn$_invoke$arity$2(path,/\//));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Routes must start from the root, so they must begin with a '/'",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pattern","pattern",242135423),pattern], null));
}
}));

(reitit.impl.parse_path.cljs$lang$maxFixedArity = 2);


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
reitit.impl.Route = (function (path,path_parts,path_params,data,result,__meta,__extmap,__hash){
this.path = path;
this.path_parts = path_parts;
this.path_params = path_params;
this.data = data;
this.result = result;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.impl.Route.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(reitit.impl.Route.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k56203,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__56211 = k56203;
var G__56211__$1 = (((G__56211 instanceof cljs.core.Keyword))?G__56211.fqn:null);
switch (G__56211__$1) {
case "path":
return self__.path;

break;
case "path-parts":
return self__.path_parts;

break;
case "path-params":
return self__.path_params;

break;
case "data":
return self__.data;

break;
case "result":
return self__.result;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56203,else__4442__auto__);

}
}));

(reitit.impl.Route.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__56212){
var vec__56213 = p__56212;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56213,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56213,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(reitit.impl.Route.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#reitit.impl.Route{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path","path",-188191168),self__.path],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-parts","path-parts",945822894),self__.path_parts],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"result","result",1415092211),self__.result],null))], null),self__.__extmap));
}));

(reitit.impl.Route.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56202){
var self__ = this;
var G__56202__$1 = this;
return (new cljs.core.RecordIter((0),G__56202__$1,5,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path-parts","path-parts",945822894),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.impl.Route.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(reitit.impl.Route.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new reitit.impl.Route(self__.path,self__.path_parts,self__.path_params,self__.data,self__.result,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.impl.Route.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
}));

(reitit.impl.Route.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__56224 = (function (coll__4436__auto__){
return (573096325 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__56224(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(reitit.impl.Route.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56204,other56205){
var self__ = this;
var this56204__$1 = this;
return (((!((other56205 == null)))) && ((this56204__$1.constructor === other56205.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56204__$1.path,other56205.path)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56204__$1.path_parts,other56205.path_parts)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56204__$1.path_params,other56205.path_params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56204__$1.data,other56205.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56204__$1.result,other56205.result)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56204__$1.__extmap,other56205.__extmap)));
}));

(reitit.impl.Route.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"path-parts","path-parts",945822894),null,new cljs.core.Keyword(null,"result","result",1415092211),null,new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new reitit.impl.Route(self__.path,self__.path_parts,self__.path_params,self__.data,self__.result,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(reitit.impl.Route.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__56202){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__56232 = cljs.core.keyword_identical_QMARK_;
var expr__56233 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__56235 = new cljs.core.Keyword(null,"path","path",-188191168);
var G__56236 = expr__56233;
return (pred__56232.cljs$core$IFn$_invoke$arity$2 ? pred__56232.cljs$core$IFn$_invoke$arity$2(G__56235,G__56236) : pred__56232.call(null,G__56235,G__56236));
})())){
return (new reitit.impl.Route(G__56202,self__.path_parts,self__.path_params,self__.data,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56237 = new cljs.core.Keyword(null,"path-parts","path-parts",945822894);
var G__56238 = expr__56233;
return (pred__56232.cljs$core$IFn$_invoke$arity$2 ? pred__56232.cljs$core$IFn$_invoke$arity$2(G__56237,G__56238) : pred__56232.call(null,G__56237,G__56238));
})())){
return (new reitit.impl.Route(self__.path,G__56202,self__.path_params,self__.data,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56239 = new cljs.core.Keyword(null,"path-params","path-params",-48130597);
var G__56240 = expr__56233;
return (pred__56232.cljs$core$IFn$_invoke$arity$2 ? pred__56232.cljs$core$IFn$_invoke$arity$2(G__56239,G__56240) : pred__56232.call(null,G__56239,G__56240));
})())){
return (new reitit.impl.Route(self__.path,self__.path_parts,G__56202,self__.data,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56241 = new cljs.core.Keyword(null,"data","data",-232669377);
var G__56242 = expr__56233;
return (pred__56232.cljs$core$IFn$_invoke$arity$2 ? pred__56232.cljs$core$IFn$_invoke$arity$2(G__56241,G__56242) : pred__56232.call(null,G__56241,G__56242));
})())){
return (new reitit.impl.Route(self__.path,self__.path_parts,self__.path_params,G__56202,self__.result,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56243 = new cljs.core.Keyword(null,"result","result",1415092211);
var G__56244 = expr__56233;
return (pred__56232.cljs$core$IFn$_invoke$arity$2 ? pred__56232.cljs$core$IFn$_invoke$arity$2(G__56243,G__56244) : pred__56232.call(null,G__56243,G__56244));
})())){
return (new reitit.impl.Route(self__.path,self__.path_parts,self__.path_params,self__.data,G__56202,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.impl.Route(self__.path,self__.path_parts,self__.path_params,self__.data,self__.result,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__56202),null));
}
}
}
}
}
}));

(reitit.impl.Route.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path","path",-188191168),self__.path,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-parts","path-parts",945822894),self__.path_parts,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"result","result",1415092211),self__.result,null))], null),self__.__extmap));
}));

(reitit.impl.Route.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__56202){
var self__ = this;
var this__4438__auto____$1 = this;
return (new reitit.impl.Route(self__.path,self__.path_parts,self__.path_params,self__.data,self__.result,G__56202,self__.__extmap,self__.__hash));
}));

(reitit.impl.Route.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(reitit.impl.Route.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"path","path",1452340359,null),new cljs.core.Symbol(null,"path-parts","path-parts",-1708612875,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null),new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"result","result",-1239343558,null)], null);
}));

(reitit.impl.Route.cljs$lang$type = true);

(reitit.impl.Route.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"reitit.impl/Route",null,(1),null));
}));

(reitit.impl.Route.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"reitit.impl/Route");
}));

/**
 * Positional factory function for reitit.impl/Route.
 */
reitit.impl.__GT_Route = (function reitit$impl$__GT_Route(path,path_parts,path_params,data,result){
return (new reitit.impl.Route(path,path_parts,path_params,data,result,null,null,null));
});

/**
 * Factory function for reitit.impl/Route, taking a map of keywords to field values.
 */
reitit.impl.map__GT_Route = (function reitit$impl$map__GT_Route(G__56206){
var extmap__4478__auto__ = (function (){var G__56245 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56206,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"path-parts","path-parts",945822894),new cljs.core.Keyword(null,"path-params","path-params",-48130597),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"result","result",1415092211)], 0));
if(cljs.core.record_QMARK_(G__56206)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56245);
} else {
return G__56245;
}
})();
return (new reitit.impl.Route(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__56206),new cljs.core.Keyword(null,"path-parts","path-parts",945822894).cljs$core$IFn$_invoke$arity$1(G__56206),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__56206),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__56206),new cljs.core.Keyword(null,"result","result",1415092211).cljs$core$IFn$_invoke$arity$1(G__56206),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

reitit.impl.create = (function reitit$impl$create(p__56246){
var vec__56247 = p__56246;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56247,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56247,(1),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56247,(2),null);
var path__$1 = path;
var map__56250 = reitit.impl.parse_path.cljs$core$IFn$_invoke$arity$1(path__$1);
var map__56250__$1 = (((((!((map__56250 == null))))?(((((map__56250.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__56250.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__56250):map__56250);
var path_parts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56250__$1,new cljs.core.Keyword(null,"path-parts","path-parts",945822894));
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56250__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
return reitit.impl.map__GT_Route(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params,new cljs.core.Keyword(null,"path-parts","path-parts",945822894),path_parts,new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"result","result",1415092211),result,new cljs.core.Keyword(null,"data","data",-232669377),data], null));
});
reitit.impl.wild_route_QMARK_ = (function reitit$impl$wild_route_QMARK_(p__56252){
var vec__56253 = p__56252;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56253,(0),null);
return reitit.impl.contains_wilds_QMARK_(path);
});
reitit.impl.conflicting_routes_QMARK_ = (function reitit$impl$conflicting_routes_QMARK_(p__56256,p__56257){
var vec__56258 = p__56256;
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56258,(0),null);
var vec__56261 = p__56257;
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56261,(0),null);
var G__56270 = reitit.impl.segments(p1);
var vec__56272 = G__56270;
var seq__56273 = cljs.core.seq(vec__56272);
var first__56274 = cljs.core.first(seq__56273);
var seq__56273__$1 = cljs.core.next(seq__56273);
var s1 = first__56274;
var ss1 = seq__56273__$1;
var G__56271 = reitit.impl.segments(p2);
var vec__56275 = G__56271;
var seq__56276 = cljs.core.seq(vec__56275);
var first__56277 = cljs.core.first(seq__56276);
var seq__56276__$1 = cljs.core.next(seq__56276);
var s2 = first__56277;
var ss2 = seq__56276__$1;
var G__56270__$1 = G__56270;
var G__56271__$1 = G__56271;
while(true){
var vec__56278 = G__56270__$1;
var seq__56279 = cljs.core.seq(vec__56278);
var first__56280 = cljs.core.first(seq__56279);
var seq__56279__$1 = cljs.core.next(seq__56279);
var s1__$1 = first__56280;
var ss1__$1 = seq__56279__$1;
var vec__56281 = G__56271__$1;
var seq__56282 = cljs.core.seq(vec__56281);
var first__56283 = cljs.core.first(seq__56282);
var seq__56282__$1 = cljs.core.next(seq__56282);
var s2__$1 = first__56283;
var ss2__$1 = seq__56282__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(s1__$1,s2__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null], 0))){
return true;
} else {
if((((s1__$1 == null)) || ((s2__$1 == null)))){
return false;
} else {
if(((reitit.impl.catch_all_QMARK_(s1__$1)) || (reitit.impl.catch_all_QMARK_(s2__$1)))){
return true;
} else {
if(((reitit.impl.wild_QMARK_(s1__$1)) || (reitit.impl.wild_QMARK_(s2__$1)))){
var G__56329 = ss1__$1;
var G__56330 = ss2__$1;
G__56270__$1 = G__56329;
G__56271__$1 = G__56330;
continue;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(s1__$1,s2__$1)){
return false;
} else {
var G__56331 = ss1__$1;
var G__56332 = ss2__$1;
G__56270__$1 = G__56331;
G__56271__$1 = G__56332;
continue;

}
}
}
}
}
break;
}
});
reitit.impl.path_for = (function reitit$impl$path_for(route,path_params){
var temp__5733__auto__ = new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(route);
if(cljs.core.truth_(temp__5733__auto__)){
var required = temp__5733__auto__;
if(cljs.core.every_QMARK_((function (p1__56284_SHARP_){
return cljs.core.contains_QMARK_(path_params,p1__56284_SHARP_);
}),required)){
return ["/",clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56285_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3((function (){var or__4185__auto__ = path_params;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),p1__56285_SHARP_,p1__56285_SHARP_);
}),new cljs.core.Keyword(null,"path-parts","path-parts",945822894).cljs$core$IFn$_invoke$arity$1(route)))].join('');
} else {
return null;
}
} else {
return new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(route);
}
});
reitit.impl.throw_on_missing_path_params = (function reitit$impl$throw_on_missing_path_params(template,required,path_params){
if(cljs.core.every_QMARK_((function (p1__56286_SHARP_){
return cljs.core.contains_QMARK_(path_params,p1__56286_SHARP_);
}),required)){
return null;
} else {
var defined = cljs.core.set(cljs.core.keys(path_params));
var missing = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(required,defined);
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["missing path-params for route ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(template)," -> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(missing)].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params,new cljs.core.Keyword(null,"required","required",1807647006),required], null));
}
});
reitit.impl.fast_assoc = (function reitit$impl$fast_assoc(a,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(a,k,v);
});
reitit.impl.fast_map = (function reitit$impl$fast_map(m){
return m;
});
reitit.impl.fast_get = (function reitit$impl$fast_get(m,k){
return (m.cljs$core$IFn$_invoke$arity$1 ? m.cljs$core$IFn$_invoke$arity$1(k) : m.call(null,k));
});
reitit.impl.strip_nils = (function reitit$impl$strip_nils(m){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.second),m));
});
reitit.impl.url_encode = (function reitit$impl$url_encode(s){
if(cljs.core.truth_(s)){
return encodeURIComponent(s);
} else {
return null;
}
});
reitit.impl.maybe_url_decode = (function reitit$impl$maybe_url_decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(s);
} else {
return null;
}
});
reitit.impl.url_decode = (function reitit$impl$url_decode(s){
var or__4185__auto__ = reitit.impl.maybe_url_decode(s);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return s;
}
});
reitit.impl.form_encode = (function reitit$impl$form_encode(s){
if(cljs.core.truth_(s)){
return clojure.string.replace(encodeURIComponent(s),"%20","+");
} else {
return null;
}
});
reitit.impl.form_decode = (function reitit$impl$form_decode(s){
if(cljs.core.truth_(s)){
return decodeURIComponent(clojure.string.replace(s,"+"," "));
} else {
return null;
}
});
/**
 * URL-decodes maps and vectors
 */
reitit.impl.url_decode_coll = (function reitit$impl$url_decode_coll(coll){
return reitit.impl.maybe_map_values(reitit.impl.maybe_url_decode,coll);
});

/**
 * @interface
 */
reitit.impl.IntoString = function(){};

reitit.impl.into_string = (function reitit$impl$into_string(_){
if((((!((_ == null)))) && ((!((_.reitit$impl$IntoString$into_string$arity$1 == null)))))){
return _.reitit$impl$IntoString$into_string$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (reitit.impl.into_string[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (reitit.impl.into_string["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("IntoString.into-string",_);
}
}
}
});

goog.object.set(reitit.impl.IntoString,"string",true);

var G__56288_56346 = reitit.impl.into_string;
var G__56289_56347 = "string";
var G__56290_56348 = (function (this$){
return this$;
});
goog.object.set(G__56288_56346,G__56289_56347,G__56290_56348);

(cljs.core.Keyword.prototype.reitit$impl$IntoString$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.reitit$impl$IntoString$into_string$arity$1 = (function (this$){
var this$__$1 = this;
var ns = cljs.core.namespace(this$__$1);
return [ns,(cljs.core.truth_(ns)?"/":null),cljs.core.name(this$__$1)].join('');
}));

goog.object.set(reitit.impl.IntoString,"boolean",true);

var G__56291_56353 = reitit.impl.into_string;
var G__56292_56354 = "boolean";
var G__56293_56355 = (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});
goog.object.set(G__56291_56353,G__56292_56354,G__56293_56355);

goog.object.set(reitit.impl.IntoString,"number",true);

var G__56294_56359 = reitit.impl.into_string;
var G__56295_56360 = "number";
var G__56296_56361 = (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});
goog.object.set(G__56294_56359,G__56295_56360,G__56296_56361);

goog.object.set(reitit.impl.IntoString,"object",true);

var G__56297_56363 = reitit.impl.into_string;
var G__56298_56364 = "object";
var G__56299_56365 = (function (this$){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(this$);
});
goog.object.set(G__56297_56363,G__56298_56364,G__56299_56365);

goog.object.set(reitit.impl.IntoString,"null",true);

var G__56300_56366 = reitit.impl.into_string;
var G__56301_56367 = "null";
var G__56302_56368 = (function (_){
return null;
});
goog.object.set(G__56300_56366,G__56301_56367,G__56302_56368);
/**
 * Convert parameters' values into URL-encoded strings, suitable for URL paths
 */
reitit.impl.path_params = (function reitit$impl$path_params(params){
return reitit.impl.maybe_map_values((function (p1__56303_SHARP_){
return reitit.impl.url_encode(reitit.impl.into_string(p1__56303_SHARP_));
}),params);
});
/**
 * shallow transform of query parameters into query string
 */
reitit.impl.query_string = (function reitit$impl$query_string(params){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56304){
var vec__56305 = p__56304;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56305,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56305,(1),null);
return [reitit.impl.form_encode(reitit.impl.into_string(k)),"=",reitit.impl.form_encode(reitit.impl.into_string(v))].join('');
}),params));
});

//# sourceMappingURL=reitit.impl.js.map
