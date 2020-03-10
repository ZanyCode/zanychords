goog.provide('reitit.segment');
goog.require('cljs.core');
goog.require('reitit.impl');
goog.require('clojure.string');

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
reitit.segment.Match = (function (data,path_params,__meta,__extmap,__hash){
this.data = data;
this.path_params = path_params;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(reitit.segment.Match.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(reitit.segment.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k56311,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__56315 = k56311;
var G__56315__$1 = (((G__56315 instanceof cljs.core.Keyword))?G__56315.fqn:null);
switch (G__56315__$1) {
case "data":
return self__.data;

break;
case "path-params":
return self__.path_params;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k56311,else__4442__auto__);

}
}));

(reitit.segment.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__56316){
var vec__56317 = p__56316;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56317,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56317,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(reitit.segment.Match.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#reitit.segment.Match{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"data","data",-232669377),self__.data],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params],null))], null),self__.__extmap));
}));

(reitit.segment.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__56310){
var self__ = this;
var G__56310__$1 = this;
return (new cljs.core.RecordIter((0),G__56310__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"path-params","path-params",-48130597)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(reitit.segment.Match.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(reitit.segment.Match.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new reitit.segment.Match(self__.data,self__.path_params,self__.__meta,self__.__extmap,self__.__hash));
}));

(reitit.segment.Match.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(reitit.segment.Match.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__56320 = (function (coll__4436__auto__){
return (-129766334 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__56320(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(reitit.segment.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this56312,other56313){
var self__ = this;
var this56312__$1 = this;
return (((!((other56313 == null)))) && ((this56312__$1.constructor === other56313.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56312__$1.data,other56313.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56312__$1.path_params,other56313.path_params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this56312__$1.__extmap,other56313.__extmap)));
}));

(reitit.segment.Match.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path-params","path-params",-48130597),null,new cljs.core.Keyword(null,"data","data",-232669377),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new reitit.segment.Match(self__.data,self__.path_params,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(reitit.segment.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__56310){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__56321 = cljs.core.keyword_identical_QMARK_;
var expr__56322 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__56324 = new cljs.core.Keyword(null,"data","data",-232669377);
var G__56325 = expr__56322;
return (pred__56321.cljs$core$IFn$_invoke$arity$2 ? pred__56321.cljs$core$IFn$_invoke$arity$2(G__56324,G__56325) : pred__56321.call(null,G__56324,G__56325));
})())){
return (new reitit.segment.Match(G__56310,self__.path_params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__56326 = new cljs.core.Keyword(null,"path-params","path-params",-48130597);
var G__56327 = expr__56322;
return (pred__56321.cljs$core$IFn$_invoke$arity$2 ? pred__56321.cljs$core$IFn$_invoke$arity$2(G__56326,G__56327) : pred__56321.call(null,G__56326,G__56327));
})())){
return (new reitit.segment.Match(self__.data,G__56310,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.segment.Match(self__.data,self__.path_params,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__56310),null));
}
}
}));

(reitit.segment.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null))], null),self__.__extmap));
}));

(reitit.segment.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__56310){
var self__ = this;
var this__4438__auto____$1 = this;
return (new reitit.segment.Match(self__.data,self__.path_params,G__56310,self__.__extmap,self__.__hash));
}));

(reitit.segment.Match.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(reitit.segment.Match.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"data","data",1407862150,null),new cljs.core.Symbol(null,"path-params","path-params",1592400930,null)], null);
}));

(reitit.segment.Match.cljs$lang$type = true);

(reitit.segment.Match.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"reitit.segment/Match",null,(1),null));
}));

(reitit.segment.Match.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"reitit.segment/Match");
}));

/**
 * Positional factory function for reitit.segment/Match.
 */
reitit.segment.__GT_Match = (function reitit$segment$__GT_Match(data,path_params){
return (new reitit.segment.Match(data,path_params,null,null,null));
});

/**
 * Factory function for reitit.segment/Match, taking a map of keywords to field values.
 */
reitit.segment.map__GT_Match = (function reitit$segment$map__GT_Match(G__56314){
var extmap__4478__auto__ = (function (){var G__56328 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__56314,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"path-params","path-params",-48130597)], 0));
if(cljs.core.record_QMARK_(G__56314)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__56328);
} else {
return G__56328;
}
})();
return (new reitit.segment.Match(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__56314),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__56314),null,cljs.core.not_empty(extmap__4478__auto__),null));
});


/**
 * @interface
 */
reitit.segment.Segment = function(){};

reitit.segment._insert = (function reitit$segment$_insert(this$,ps,data){
if((((!((this$ == null)))) && ((!((this$.reitit$segment$Segment$_insert$arity$3 == null)))))){
return this$.reitit$segment$Segment$_insert$arity$3(this$,ps,data);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.segment._insert[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(this$,ps,data) : m__4488__auto__.call(null,this$,ps,data));
} else {
var m__4485__auto__ = (reitit.segment._insert["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(this$,ps,data) : m__4485__auto__.call(null,this$,ps,data));
} else {
throw cljs.core.missing_protocol("Segment.-insert",this$);
}
}
}
});

reitit.segment._lookup = (function reitit$segment$_lookup(this$,ps,path_params){
if((((!((this$ == null)))) && ((!((this$.reitit$segment$Segment$_lookup$arity$3 == null)))))){
return this$.reitit$segment$Segment$_lookup$arity$3(this$,ps,path_params);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (reitit.segment._lookup[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(this$,ps,path_params) : m__4488__auto__.call(null,this$,ps,path_params));
} else {
var m__4485__auto__ = (reitit.segment._lookup["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(this$,ps,path_params) : m__4485__auto__.call(null,this$,ps,path_params));
} else {
throw cljs.core.missing_protocol("Segment.-lookup",this$);
}
}
}
});

goog.object.set(reitit.segment.Segment,"null",true);

var G__56333_56397 = reitit.segment._insert;
var G__56334_56398 = "null";
var G__56335_56399 = (function (_,___$1,___$2){
return null;
});
goog.object.set(G__56333_56397,G__56334_56398,G__56335_56399);

var G__56336_56409 = reitit.segment._lookup;
var G__56337_56410 = "null";
var G__56338_56411 = (function (_,___$1,___$2){
return null;
});
goog.object.set(G__56336_56409,G__56337_56410,G__56338_56411);
reitit.segment._catch_all = (function reitit$segment$_catch_all(children,catch_all,path_params,p,ps){
return reitit.segment._lookup(reitit.impl.fast_get(children,catch_all),null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(path_params,catch_all,clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.cons(p,ps))));
});
reitit.segment.segment = (function reitit$segment$segment(var_args){
var G__56342 = arguments.length;
switch (G__56342) {
case 0:
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$0();

break;
case 4:
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(reitit.segment.segment.cljs$core$IFn$_invoke$arity$0 = (function (){
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$4(cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY,null,null);
}));

(reitit.segment.segment.cljs$core$IFn$_invoke$arity$4 = (function (children,wilds,catch_all,match){
var children_SINGLEQUOTE_ = reitit.impl.fast_map(children);
var wilds_QMARK_ = cljs.core.seq(wilds);
if((typeof reitit !== 'undefined') && (typeof reitit.segment !== 'undefined') && (typeof reitit.segment.t_reitit$segment56343 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.segment.Segment}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.segment.t_reitit$segment56343 = (function (children,wilds,catch_all,match,children_SINGLEQUOTE_,wilds_QMARK_,meta56344){
this.children = children;
this.wilds = wilds;
this.catch_all = catch_all;
this.match = match;
this.children_SINGLEQUOTE_ = children_SINGLEQUOTE_;
this.wilds_QMARK_ = wilds_QMARK_;
this.meta56344 = meta56344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.segment.t_reitit$segment56343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56345,meta56344__$1){
var self__ = this;
var _56345__$1 = this;
return (new reitit.segment.t_reitit$segment56343(self__.children,self__.wilds,self__.catch_all,self__.match,self__.children_SINGLEQUOTE_,self__.wilds_QMARK_,meta56344__$1));
}));

(reitit.segment.t_reitit$segment56343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56345){
var self__ = this;
var _56345__$1 = this;
return self__.meta56344;
}));

(reitit.segment.t_reitit$segment56343.prototype.reitit$segment$Segment$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.segment.t_reitit$segment56343.prototype.reitit$segment$Segment$_insert$arity$3 = (function (_,p__56349,d){
var self__ = this;
var vec__56350 = p__56349;
var seq__56351 = cljs.core.seq(vec__56350);
var first__56352 = cljs.core.first(seq__56351);
var seq__56351__$1 = cljs.core.next(seq__56351);
var p = first__56352;
var ps = seq__56351__$1;
var ___$1 = this;
if(cljs.core.not(p)){
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$4(self__.children,self__.wilds,self__.catch_all,d);
} else {
var vec__56356 = (function (){var fexpr__56362 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(reitit.impl.wild_param,reitit.impl.catch_all_param);
return (fexpr__56362.cljs$core$IFn$_invoke$arity$1 ? fexpr__56362.cljs$core$IFn$_invoke$arity$1(p) : fexpr__56362.call(null,p));
})();
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56356,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56356,(1),null);
var wilds__$1 = (cljs.core.truth_(w)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(self__.wilds,w):self__.wilds);
var catch_all__$1 = (function (){var or__4185__auto__ = c;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return self__.catch_all;
}
})();
var children__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(self__.children,(function (){var or__4185__auto__ = w;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = c;
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
return p;
}
}
})(),(function (p1__56339_SHARP_){
return reitit.segment._insert((function (){var or__4185__auto__ = p1__56339_SHARP_;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$0();
}
})(),ps,d);
}));
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$4(children__$1,wilds__$1,catch_all__$1,self__.match);
}
}));

(reitit.segment.t_reitit$segment56343.prototype.reitit$segment$Segment$_lookup$arity$3 = (function (_,p__56369,path_params){
var self__ = this;
var vec__56370 = p__56369;
var seq__56371 = cljs.core.seq(vec__56370);
var first__56372 = cljs.core.first(seq__56371);
var seq__56371__$1 = cljs.core.next(seq__56371);
var p = first__56372;
var ps = seq__56371__$1;
var ___$1 = this;
if((p == null)){
if(cljs.core.truth_(self__.match)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.match,new cljs.core.Keyword(null,"path-params","path-params",-48130597),path_params);
} else {
return null;
}
} else {
var or__4185__auto__ = reitit.segment._lookup(reitit.impl.fast_get(self__.children_SINGLEQUOTE_,p),ps,path_params);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var or__4185__auto____$1 = (cljs.core.truth_((function (){var and__4174__auto__ = self__.wilds_QMARK_;
if(cljs.core.truth_(and__4174__auto__)){
return (!(clojure.string.blank_QMARK_(p)));
} else {
return and__4174__auto__;
}
})())?cljs.core.some((function (p1__56340_SHARP_){
return reitit.segment._lookup(reitit.impl.fast_get(self__.children_SINGLEQUOTE_,p1__56340_SHARP_),ps,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(path_params,p1__56340_SHARP_,p));
}),self__.wilds):null);
if(cljs.core.truth_(or__4185__auto____$1)){
return or__4185__auto____$1;
} else {
if(cljs.core.truth_(self__.catch_all)){
return reitit.segment._catch_all(self__.children_SINGLEQUOTE_,self__.catch_all,path_params,p,ps);
} else {
return null;
}
}
}
}
}));

(reitit.segment.t_reitit$segment56343.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"wilds","wilds",1772802750,null),new cljs.core.Symbol(null,"catch-all","catch-all",-1470323199,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"children'","children'",-942868266,null),new cljs.core.Symbol(null,"wilds?","wilds?",-1842060252,null),new cljs.core.Symbol(null,"meta56344","meta56344",1800581522,null)], null);
}));

(reitit.segment.t_reitit$segment56343.cljs$lang$type = true);

(reitit.segment.t_reitit$segment56343.cljs$lang$ctorStr = "reitit.segment/t_reitit$segment56343");

(reitit.segment.t_reitit$segment56343.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.segment/t_reitit$segment56343");
}));

/**
 * Positional factory function for reitit.segment/t_reitit$segment56343.
 */
reitit.segment.__GT_t_reitit$segment56343 = (function reitit$segment$__GT_t_reitit$segment56343(children__$1,wilds__$1,catch_all__$1,match__$1,children_SINGLEQUOTE___$1,wilds_QMARK___$1,meta56344){
return (new reitit.segment.t_reitit$segment56343(children__$1,wilds__$1,catch_all__$1,match__$1,children_SINGLEQUOTE___$1,wilds_QMARK___$1,meta56344));
});

}

return (new reitit.segment.t_reitit$segment56343(children,wilds,catch_all,match,children_SINGLEQUOTE_,wilds_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.segment","segment","reitit.segment/segment",424393474)], null)));
}));

(reitit.segment.segment.cljs$lang$maxFixedArity = 4);

/**
 * Returns a Segment Trie with path with data inserted into it. Creates the trie if `nil`.
 */
reitit.segment.insert = (function reitit$segment$insert(trie,path,data){
return reitit.segment._insert((function (){var or__4185__auto__ = trie;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$0();
}
})(),reitit.impl.segments(path),reitit.segment.map__GT_Match(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null)));
});
reitit.segment.compile = (function reitit$segment$compile(trie){

return trie;
});
reitit.segment.scanner = (function reitit$segment$scanner(compiled_tries){

if((typeof reitit !== 'undefined') && (typeof reitit.segment !== 'undefined') && (typeof reitit.segment.t_reitit$segment56373 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.segment.Segment}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.segment.t_reitit$segment56373 = (function (compiled_tries,meta56374){
this.compiled_tries = compiled_tries;
this.meta56374 = meta56374;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.segment.t_reitit$segment56373.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56375,meta56374__$1){
var self__ = this;
var _56375__$1 = this;
return (new reitit.segment.t_reitit$segment56373(self__.compiled_tries,meta56374__$1));
}));

(reitit.segment.t_reitit$segment56373.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56375){
var self__ = this;
var _56375__$1 = this;
return self__.meta56374;
}));

(reitit.segment.t_reitit$segment56373.prototype.reitit$segment$Segment$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.segment.t_reitit$segment56373.prototype.reitit$segment$Segment$_lookup$arity$3 = (function (_,ps,params){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (trie){
return reitit.segment._lookup(trie,ps,params);
}),self__.compiled_tries);
}));

(reitit.segment.t_reitit$segment56373.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"compiled-tries","compiled-tries",-1788448068,null),new cljs.core.Symbol(null,"meta56374","meta56374",-2076429781,null)], null);
}));

(reitit.segment.t_reitit$segment56373.cljs$lang$type = true);

(reitit.segment.t_reitit$segment56373.cljs$lang$ctorStr = "reitit.segment/t_reitit$segment56373");

(reitit.segment.t_reitit$segment56373.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.segment/t_reitit$segment56373");
}));

/**
 * Positional factory function for reitit.segment/t_reitit$segment56373.
 */
reitit.segment.__GT_t_reitit$segment56373 = (function reitit$segment$scanner_$___GT_t_reitit$segment56373(compiled_tries__$1,meta56374){
return (new reitit.segment.t_reitit$segment56373(compiled_tries__$1,meta56374));
});

}

return (new reitit.segment.t_reitit$segment56373(compiled_tries,cljs.core.PersistentArrayMap.EMPTY));
});
reitit.segment.lookup = (function reitit$segment$lookup(trie,path){

var temp__5733__auto__ = reitit.segment._lookup(trie,reitit.impl.segments(path),cljs.core.PersistentArrayMap.EMPTY);
if(cljs.core.truth_(temp__5733__auto__)){
var match = temp__5733__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(match,new cljs.core.Keyword(null,"path-params","path-params",-48130597),reitit.impl.url_decode_coll(new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(match)));
} else {
return null;
}
});

//# sourceMappingURL=reitit.segment.js.map
