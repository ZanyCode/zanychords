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

(reitit.segment.Match.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k84793,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__84798 = k84793;
var G__84798__$1 = (((G__84798 instanceof cljs.core.Keyword))?G__84798.fqn:null);
switch (G__84798__$1) {
case "data":
return self__.data;

break;
case "path-params":
return self__.path_params;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k84793,else__4442__auto__);

}
}));

(reitit.segment.Match.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__84799){
var vec__84800 = p__84799;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84800,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84800,(1),null);
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

(reitit.segment.Match.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__84792){
var self__ = this;
var G__84792__$1 = this;
return (new cljs.core.RecordIter((0),G__84792__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"path-params","path-params",-48130597)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
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
var h__4297__auto____$1 = (function (){var fexpr__84803 = (function (coll__4436__auto__){
return (-129766334 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__84803(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(reitit.segment.Match.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this84794,other84795){
var self__ = this;
var this84794__$1 = this;
return (((!((other84795 == null)))) && ((this84794__$1.constructor === other84795.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84794__$1.data,other84795.data)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84794__$1.path_params,other84795.path_params)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this84794__$1.__extmap,other84795.__extmap)));
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

(reitit.segment.Match.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__84792){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__84804 = cljs.core.keyword_identical_QMARK_;
var expr__84805 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__84807 = new cljs.core.Keyword(null,"data","data",-232669377);
var G__84808 = expr__84805;
return (pred__84804.cljs$core$IFn$_invoke$arity$2 ? pred__84804.cljs$core$IFn$_invoke$arity$2(G__84807,G__84808) : pred__84804.call(null,G__84807,G__84808));
})())){
return (new reitit.segment.Match(G__84792,self__.path_params,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__84809 = new cljs.core.Keyword(null,"path-params","path-params",-48130597);
var G__84810 = expr__84805;
return (pred__84804.cljs$core$IFn$_invoke$arity$2 ? pred__84804.cljs$core$IFn$_invoke$arity$2(G__84809,G__84810) : pred__84804.call(null,G__84809,G__84810));
})())){
return (new reitit.segment.Match(self__.data,G__84792,self__.__meta,self__.__extmap,null));
} else {
return (new reitit.segment.Match(self__.data,self__.path_params,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__84792),null));
}
}
}));

(reitit.segment.Match.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"data","data",-232669377),self__.data,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"path-params","path-params",-48130597),self__.path_params,null))], null),self__.__extmap));
}));

(reitit.segment.Match.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__84792){
var self__ = this;
var this__4438__auto____$1 = this;
return (new reitit.segment.Match(self__.data,self__.path_params,G__84792,self__.__extmap,self__.__hash));
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
reitit.segment.map__GT_Match = (function reitit$segment$map__GT_Match(G__84797){
var extmap__4478__auto__ = (function (){var G__84811 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__84797,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"path-params","path-params",-48130597)], 0));
if(cljs.core.record_QMARK_(G__84797)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__84811);
} else {
return G__84811;
}
})();
return (new reitit.segment.Match(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(G__84797),new cljs.core.Keyword(null,"path-params","path-params",-48130597).cljs$core$IFn$_invoke$arity$1(G__84797),null,cljs.core.not_empty(extmap__4478__auto__),null));
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

var G__84812_84863 = reitit.segment._insert;
var G__84813_84864 = "null";
var G__84814_84865 = (function (_,___$1,___$2){
return null;
});
goog.object.set(G__84812_84863,G__84813_84864,G__84814_84865);

var G__84815_84866 = reitit.segment._lookup;
var G__84816_84867 = "null";
var G__84817_84868 = (function (_,___$1,___$2){
return null;
});
goog.object.set(G__84815_84866,G__84816_84867,G__84817_84868);
reitit.segment._catch_all = (function reitit$segment$_catch_all(children,catch_all,path_params,p,ps){
return reitit.segment._lookup(reitit.impl.fast_get(children,catch_all),null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(path_params,catch_all,clojure.string.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.cons(p,ps))));
});
reitit.segment.segment = (function reitit$segment$segment(var_args){
var G__84840 = arguments.length;
switch (G__84840) {
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
if((typeof reitit !== 'undefined') && (typeof reitit.segment !== 'undefined') && (typeof reitit.segment.t_reitit$segment84841 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.segment.Segment}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.segment.t_reitit$segment84841 = (function (children,wilds,catch_all,match,children_SINGLEQUOTE_,wilds_QMARK_,meta84842){
this.children = children;
this.wilds = wilds;
this.catch_all = catch_all;
this.match = match;
this.children_SINGLEQUOTE_ = children_SINGLEQUOTE_;
this.wilds_QMARK_ = wilds_QMARK_;
this.meta84842 = meta84842;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.segment.t_reitit$segment84841.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_84843,meta84842__$1){
var self__ = this;
var _84843__$1 = this;
return (new reitit.segment.t_reitit$segment84841(self__.children,self__.wilds,self__.catch_all,self__.match,self__.children_SINGLEQUOTE_,self__.wilds_QMARK_,meta84842__$1));
}));

(reitit.segment.t_reitit$segment84841.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_84843){
var self__ = this;
var _84843__$1 = this;
return self__.meta84842;
}));

(reitit.segment.t_reitit$segment84841.prototype.reitit$segment$Segment$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.segment.t_reitit$segment84841.prototype.reitit$segment$Segment$_insert$arity$3 = (function (_,p__84844,d){
var self__ = this;
var vec__84845 = p__84844;
var seq__84846 = cljs.core.seq(vec__84845);
var first__84847 = cljs.core.first(seq__84846);
var seq__84846__$1 = cljs.core.next(seq__84846);
var p = first__84847;
var ps = seq__84846__$1;
var ___$1 = this;
if(cljs.core.not(p)){
return reitit.segment.segment.cljs$core$IFn$_invoke$arity$4(self__.children,self__.wilds,self__.catch_all,d);
} else {
var vec__84848 = (function (){var fexpr__84851 = cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(reitit.impl.wild_param,reitit.impl.catch_all_param);
return (fexpr__84851.cljs$core$IFn$_invoke$arity$1 ? fexpr__84851.cljs$core$IFn$_invoke$arity$1(p) : fexpr__84851.call(null,p));
})();
var w = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84848,(0),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__84848,(1),null);
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
})(),(function (p1__84818_SHARP_){
return reitit.segment._insert((function (){var or__4185__auto__ = p1__84818_SHARP_;
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

(reitit.segment.t_reitit$segment84841.prototype.reitit$segment$Segment$_lookup$arity$3 = (function (_,p__84852,path_params){
var self__ = this;
var vec__84853 = p__84852;
var seq__84854 = cljs.core.seq(vec__84853);
var first__84855 = cljs.core.first(seq__84854);
var seq__84854__$1 = cljs.core.next(seq__84854);
var p = first__84855;
var ps = seq__84854__$1;
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
})())?cljs.core.some((function (p1__84819_SHARP_){
return reitit.segment._lookup(reitit.impl.fast_get(self__.children_SINGLEQUOTE_,p1__84819_SHARP_),ps,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(path_params,p1__84819_SHARP_,p));
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

(reitit.segment.t_reitit$segment84841.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"children","children",699969545,null),new cljs.core.Symbol(null,"wilds","wilds",1772802750,null),new cljs.core.Symbol(null,"catch-all","catch-all",-1470323199,null),new cljs.core.Symbol(null,"match","match",-1434376219,null),new cljs.core.Symbol(null,"children'","children'",-942868266,null),new cljs.core.Symbol(null,"wilds?","wilds?",-1842060252,null),new cljs.core.Symbol(null,"meta84842","meta84842",-1691637849,null)], null);
}));

(reitit.segment.t_reitit$segment84841.cljs$lang$type = true);

(reitit.segment.t_reitit$segment84841.cljs$lang$ctorStr = "reitit.segment/t_reitit$segment84841");

(reitit.segment.t_reitit$segment84841.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.segment/t_reitit$segment84841");
}));

/**
 * Positional factory function for reitit.segment/t_reitit$segment84841.
 */
reitit.segment.__GT_t_reitit$segment84841 = (function reitit$segment$__GT_t_reitit$segment84841(children__$1,wilds__$1,catch_all__$1,match__$1,children_SINGLEQUOTE___$1,wilds_QMARK___$1,meta84842){
return (new reitit.segment.t_reitit$segment84841(children__$1,wilds__$1,catch_all__$1,match__$1,children_SINGLEQUOTE___$1,wilds_QMARK___$1,meta84842));
});

}

return (new reitit.segment.t_reitit$segment84841(children,wilds,catch_all,match,children_SINGLEQUOTE_,wilds_QMARK_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("reitit.segment","segment","reitit.segment/segment",424393474)], null)));
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

if((typeof reitit !== 'undefined') && (typeof reitit.segment !== 'undefined') && (typeof reitit.segment.t_reitit$segment84856 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {reitit.segment.Segment}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
reitit.segment.t_reitit$segment84856 = (function (compiled_tries,meta84857){
this.compiled_tries = compiled_tries;
this.meta84857 = meta84857;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(reitit.segment.t_reitit$segment84856.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_84858,meta84857__$1){
var self__ = this;
var _84858__$1 = this;
return (new reitit.segment.t_reitit$segment84856(self__.compiled_tries,meta84857__$1));
}));

(reitit.segment.t_reitit$segment84856.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_84858){
var self__ = this;
var _84858__$1 = this;
return self__.meta84857;
}));

(reitit.segment.t_reitit$segment84856.prototype.reitit$segment$Segment$ = cljs.core.PROTOCOL_SENTINEL);

(reitit.segment.t_reitit$segment84856.prototype.reitit$segment$Segment$_lookup$arity$3 = (function (_,ps,params){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (trie){
return reitit.segment._lookup(trie,ps,params);
}),self__.compiled_tries);
}));

(reitit.segment.t_reitit$segment84856.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"compiled-tries","compiled-tries",-1788448068,null),new cljs.core.Symbol(null,"meta84857","meta84857",-1061292769,null)], null);
}));

(reitit.segment.t_reitit$segment84856.cljs$lang$type = true);

(reitit.segment.t_reitit$segment84856.cljs$lang$ctorStr = "reitit.segment/t_reitit$segment84856");

(reitit.segment.t_reitit$segment84856.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"reitit.segment/t_reitit$segment84856");
}));

/**
 * Positional factory function for reitit.segment/t_reitit$segment84856.
 */
reitit.segment.__GT_t_reitit$segment84856 = (function reitit$segment$scanner_$___GT_t_reitit$segment84856(compiled_tries__$1,meta84857){
return (new reitit.segment.t_reitit$segment84856(compiled_tries__$1,meta84857));
});

}

return (new reitit.segment.t_reitit$segment84856(compiled_tries,cljs.core.PersistentArrayMap.EMPTY));
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
