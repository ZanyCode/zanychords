goog.provide('ajax.interceptors');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ajax.util');
goog.require('ajax.url');
goog.require('ajax.protocols');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.interceptors.StandardInterceptor = (function (name,request,response,__meta,__extmap,__hash){
this.name = name;
this.request = request;
this.response = response;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k52897,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__52901 = k52897;
var G__52901__$1 = (((G__52901 instanceof cljs.core.Keyword))?G__52901.fqn:null);
switch (G__52901__$1) {
case "name":
return self__.name;

break;
case "request":
return self__.request;

break;
case "response":
return self__.response;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52897,else__4442__auto__);

}
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__52902){
var vec__52903 = p__52902;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52903,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52903,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__52906,opts){
var self__ = this;
var map__52907 = p__52906;
var map__52907__$1 = (((((!((map__52907 == null))))?(((((map__52907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52907.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52907):map__52907);
var request__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52907__$1,new cljs.core.Keyword(null,"request","request",1772954723));
var map__52909 = this;
var map__52909__$1 = (((((!((map__52909 == null))))?(((((map__52909.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52909.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52909):map__52909);
var request__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52909__$1,new cljs.core.Keyword(null,"request","request",1772954723));
return (request__$2.cljs$core$IFn$_invoke$arity$1 ? request__$2.cljs$core$IFn$_invoke$arity$1(opts) : request__$2.call(null,opts));
}));

(ajax.interceptors.StandardInterceptor.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__52911,xhrio){
var self__ = this;
var map__52912 = p__52911;
var map__52912__$1 = (((((!((map__52912 == null))))?(((((map__52912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52912):map__52912);
var response__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52912__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
var map__52915 = this;
var map__52915__$1 = (((((!((map__52915 == null))))?(((((map__52915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52915):map__52915);
var response__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52915__$1,new cljs.core.Keyword(null,"response","response",-1068424192));
return (response__$2.cljs$core$IFn$_invoke$arity$1 ? response__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : response__$2.call(null,xhrio));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#ajax.interceptors.StandardInterceptor{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"name","name",1843675177),self__.name],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"request","request",1772954723),self__.request],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"response","response",-1068424192),self__.response],null))], null),self__.__extmap));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52896){
var self__ = this;
var G__52896__$1 = this;
return (new cljs.core.RecordIter((0),G__52896__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__52918 = (function (coll__4436__auto__){
return (1482887116 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__52918(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52898,other52899){
var self__ = this;
var this52898__$1 = this;
return (((!((other52899 == null)))) && ((this52898__$1.constructor === other52899.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52898__$1.name,other52899.name)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52898__$1.request,other52899.request)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52898__$1.response,other52899.response)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52898__$1.__extmap,other52899.__extmap)));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"response","response",-1068424192),null,new cljs.core.Keyword(null,"request","request",1772954723),null,new cljs.core.Keyword(null,"name","name",1843675177),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__52896){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__52919 = cljs.core.keyword_identical_QMARK_;
var expr__52920 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__52922 = new cljs.core.Keyword(null,"name","name",1843675177);
var G__52923 = expr__52920;
return (pred__52919.cljs$core$IFn$_invoke$arity$2 ? pred__52919.cljs$core$IFn$_invoke$arity$2(G__52922,G__52923) : pred__52919.call(null,G__52922,G__52923));
})())){
return (new ajax.interceptors.StandardInterceptor(G__52896,self__.request,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__52924 = new cljs.core.Keyword(null,"request","request",1772954723);
var G__52925 = expr__52920;
return (pred__52919.cljs$core$IFn$_invoke$arity$2 ? pred__52919.cljs$core$IFn$_invoke$arity$2(G__52924,G__52925) : pred__52919.call(null,G__52924,G__52925));
})())){
return (new ajax.interceptors.StandardInterceptor(self__.name,G__52896,self__.response,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__52926 = new cljs.core.Keyword(null,"response","response",-1068424192);
var G__52927 = expr__52920;
return (pred__52919.cljs$core$IFn$_invoke$arity$2 ? pred__52919.cljs$core$IFn$_invoke$arity$2(G__52926,G__52927) : pred__52919.call(null,G__52926,G__52927));
})())){
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,G__52896,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__52896),null));
}
}
}
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"name","name",1843675177),self__.name,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"request","request",1772954723),self__.request,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"response","response",-1068424192),self__.response,null))], null),self__.__extmap));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__52896){
var self__ = this;
var this__4438__auto____$1 = this;
return (new ajax.interceptors.StandardInterceptor(self__.name,self__.request,self__.response,G__52896,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.StandardInterceptor.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(ajax.interceptors.StandardInterceptor.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"request","request",-881481046,null),new cljs.core.Symbol(null,"response","response",572107335,null)], null);
}));

(ajax.interceptors.StandardInterceptor.cljs$lang$type = true);

(ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"ajax.interceptors/StandardInterceptor",null,(1),null));
}));

(ajax.interceptors.StandardInterceptor.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"ajax.interceptors/StandardInterceptor");
}));

/**
 * Positional factory function for ajax.interceptors/StandardInterceptor.
 */
ajax.interceptors.__GT_StandardInterceptor = (function ajax$interceptors$__GT_StandardInterceptor(name,request,response){
return (new ajax.interceptors.StandardInterceptor(name,request,response,null,null,null));
});

/**
 * Factory function for ajax.interceptors/StandardInterceptor, taking a map of keywords to field values.
 */
ajax.interceptors.map__GT_StandardInterceptor = (function ajax$interceptors$map__GT_StandardInterceptor(G__52900){
var extmap__4478__auto__ = (function (){var G__52928 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52900,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"request","request",1772954723),new cljs.core.Keyword(null,"response","response",-1068424192)], 0));
if(cljs.core.record_QMARK_(G__52900)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__52928);
} else {
return G__52928;
}
})();
return (new ajax.interceptors.StandardInterceptor(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(G__52900),new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(G__52900),new cljs.core.Keyword(null,"response","response",-1068424192).cljs$core$IFn$_invoke$arity$1(G__52900),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

ajax.interceptors.to_interceptor = (function ajax$interceptors$to_interceptor(m){

return ajax.interceptors.map__GT_StandardInterceptor(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"request","request",1772954723),cljs.core.identity,new cljs.core.Keyword(null,"response","response",-1068424192),cljs.core.identity], null),m], 0)));
});
ajax.interceptors.exception_message = (function ajax$interceptors$exception_message(e){
return e.message;
});
ajax.interceptors.exception_response = (function ajax$interceptors$exception_response(e,status,p__52933,xhrio){
var map__52934 = p__52933;
var map__52934__$1 = (((((!((map__52934 == null))))?(((((map__52934.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52934.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52934):map__52934);
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52934__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"response","response",-1068424192),null], null);
var status_text = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ajax.interceptors.exception_message(e)),"  Format should have been ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(description)].join('');
var parse_error = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"failure","failure",720415879),new cljs.core.Keyword(null,"parse","parse",-1162164619),new cljs.core.Keyword(null,"original-text","original-text",744448452),ajax.protocols._body(xhrio)], 0));
if(ajax.util.success_QMARK_(status)){
return parse_error;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(response,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),ajax.protocols._status_text(xhrio),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parse-error","parse-error",255902478),parse_error], 0));
}
});
ajax.interceptors.fail = (function ajax$interceptors$fail(var_args){
var args__4795__auto__ = [];
var len__4789__auto___53206 = arguments.length;
var i__4790__auto___53207 = (0);
while(true){
if((i__4790__auto___53207 < len__4789__auto___53206)){
args__4795__auto__.push((arguments[i__4790__auto___53207]));

var G__53208 = (i__4790__auto___53207 + (1));
i__4790__auto___53207 = G__53208;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic = (function (status,status_text,failure,params){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),status,new cljs.core.Keyword(null,"status-text","status-text",-1834235478),status_text,new cljs.core.Keyword(null,"failure","failure",720415879),failure], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,response,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vec,cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),params)))], null);
}));

(ajax.interceptors.fail.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(ajax.interceptors.fail.cljs$lang$applyTo = (function (seq52936){
var G__52937 = cljs.core.first(seq52936);
var seq52936__$1 = cljs.core.next(seq52936);
var G__52938 = cljs.core.first(seq52936__$1);
var seq52936__$2 = cljs.core.next(seq52936__$1);
var G__52939 = cljs.core.first(seq52936__$2);
var seq52936__$3 = cljs.core.next(seq52936__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__52937,G__52938,G__52939,seq52936__$3);
}));

ajax.interceptors.content_type_to_request_header = (function ajax$interceptors$content_type_to_request_header(content_type){
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(", ",((typeof content_type === 'string')?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content_type], null):content_type));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.interceptors.ResponseFormat = (function (read,description,content_type,__meta,__extmap,__hash){
this.read = read;
this.description = description;
this.content_type = content_type;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k52946,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__52950 = k52946;
var G__52950__$1 = (((G__52950 instanceof cljs.core.Keyword))?G__52950.fqn:null);
switch (G__52950__$1) {
case "read":
return self__.read;

break;
case "description":
return self__.description;

break;
case "content-type":
return self__.content_type;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k52946,else__4442__auto__);

}
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__52951){
var vec__52952 = p__52951;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52952,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52952,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (p__52955,request){
var self__ = this;
var map__52956 = p__52955;
var map__52956__$1 = (((((!((map__52956 == null))))?(((((map__52956.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52956.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52956):map__52956);
var content_type__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52956__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var map__52958 = this;
var map__52958__$1 = (((((!((map__52958 == null))))?(((((map__52958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52958):map__52958);
var content_type__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52958__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));

return cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,new cljs.core.Keyword(null,"headers","headers",-835030129),(function (p1__52944_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, ["Accept",ajax.interceptors.content_type_to_request_header(content_type__$2)], null),(function (){var or__4185__auto__ = p1__52944_SHARP_;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})()], 0));
}));
}));

(ajax.interceptors.ResponseFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (p__52962,xhrio){
var self__ = this;
var map__52963 = p__52962;
var map__52963__$1 = (((((!((map__52963 == null))))?(((((map__52963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52963):map__52963);
var format = map__52963__$1;
var read__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52963__$1,new cljs.core.Keyword(null,"read","read",1140058661));
var map__52978 = this;
var map__52978__$1 = (((((!((map__52978 == null))))?(((((map__52978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__52978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__52978):map__52978);
var format__$1 = map__52978__$1;
var read__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52978__$1,new cljs.core.Keyword(null,"read","read",1140058661));

try{var status = ajax.protocols._status(xhrio);
var fail = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ajax.interceptors.fail,status);
var G__52990 = status;
switch (G__52990) {
case (0):
if((xhrio instanceof ajax.protocols.Response)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,xhrio], null);
} else {
var G__52991 = "Request failed.";
var G__52992 = new cljs.core.Keyword(null,"failed","failed",-1397425762);
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__52991,G__52992) : fail.call(null,G__52991,G__52992));
}

break;
case (-1):
if(cljs.core.truth_(ajax.protocols._was_aborted(xhrio))){
var G__52993 = "Request aborted by client.";
var G__52994 = new cljs.core.Keyword(null,"aborted","aborted",1775972619);
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__52993,G__52994) : fail.call(null,G__52993,G__52994));
} else {
var G__52995 = "Request timed out.";
var G__52996 = new cljs.core.Keyword(null,"timeout","timeout",-318625318);
return (fail.cljs$core$IFn$_invoke$arity$2 ? fail.cljs$core$IFn$_invoke$arity$2(G__52995,G__52996) : fail.call(null,G__52995,G__52996));
}

break;
case (204):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
case (205):
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,null], null);

break;
default:
try{var response = (read__$2.cljs$core$IFn$_invoke$arity$1 ? read__$2.cljs$core$IFn$_invoke$arity$1(xhrio) : read__$2.call(null,xhrio));
if(ajax.util.success_QMARK_(status)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,response], null);
} else {
var G__52998 = ajax.protocols._status_text(xhrio);
var G__52999 = new cljs.core.Keyword(null,"error","error",-978969032);
var G__53000 = new cljs.core.Keyword(null,"response","response",-1068424192);
var G__53001 = response;
return (fail.cljs$core$IFn$_invoke$arity$4 ? fail.cljs$core$IFn$_invoke$arity$4(G__52998,G__52999,G__53000,G__53001) : fail.call(null,G__52998,G__52999,G__53000,G__53001));
}
}catch (e52997){if((e52997 instanceof Object)){
var e = e52997;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,ajax.interceptors.exception_response(e,status,format__$1,xhrio)], null);
} else {
throw e52997;

}
}
}
}catch (e52986){if((e52986 instanceof Object)){
var e = e52986;
var message = e.message;
return ajax.interceptors.fail.cljs$core$IFn$_invoke$arity$variadic((0),message,new cljs.core.Keyword(null,"exception","exception",-335277064),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"exception","exception",-335277064),e], 0));
} else {
throw e52986;

}
}}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#ajax.interceptors.ResponseFormat{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"read","read",1140058661),self__.read],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"description","description",-1428560544),self__.description],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type],null))], null),self__.__extmap));
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__52945){
var self__ = this;
var G__52945__$1 = this;
return (new cljs.core.RecordIter((0),G__52945__$1,3,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"read","read",1140058661),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__53004 = (function (coll__4436__auto__){
return (-2103965186 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__53004(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this52947,other52948){
var self__ = this;
var this52947__$1 = this;
return (((!((other52948 == null)))) && ((this52947__$1.constructor === other52948.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52947__$1.read,other52948.read)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52947__$1.description,other52948.description)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52947__$1.content_type,other52948.content_type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this52947__$1.__extmap,other52948.__extmap)));
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"description","description",-1428560544),null,new cljs.core.Keyword(null,"read","read",1140058661),null,new cljs.core.Keyword(null,"content-type","content-type",-508222634),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__52945){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__53008 = cljs.core.keyword_identical_QMARK_;
var expr__53009 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__53011 = new cljs.core.Keyword(null,"read","read",1140058661);
var G__53012 = expr__53009;
return (pred__53008.cljs$core$IFn$_invoke$arity$2 ? pred__53008.cljs$core$IFn$_invoke$arity$2(G__53011,G__53012) : pred__53008.call(null,G__53011,G__53012));
})())){
return (new ajax.interceptors.ResponseFormat(G__52945,self__.description,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__53013 = new cljs.core.Keyword(null,"description","description",-1428560544);
var G__53014 = expr__53009;
return (pred__53008.cljs$core$IFn$_invoke$arity$2 ? pred__53008.cljs$core$IFn$_invoke$arity$2(G__53013,G__53014) : pred__53008.call(null,G__53013,G__53014));
})())){
return (new ajax.interceptors.ResponseFormat(self__.read,G__52945,self__.content_type,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__53015 = new cljs.core.Keyword(null,"content-type","content-type",-508222634);
var G__53016 = expr__53009;
return (pred__53008.cljs$core$IFn$_invoke$arity$2 ? pred__53008.cljs$core$IFn$_invoke$arity$2(G__53015,G__53016) : pred__53008.call(null,G__53015,G__53016));
})())){
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,G__52945,self__.__meta,self__.__extmap,null));
} else {
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__52945),null));
}
}
}
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"read","read",1140058661),self__.read,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"description","description",-1428560544),self__.description,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"content-type","content-type",-508222634),self__.content_type,null))], null),self__.__extmap));
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__52945){
var self__ = this;
var this__4438__auto____$1 = this;
return (new ajax.interceptors.ResponseFormat(self__.read,self__.description,self__.content_type,G__52945,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.ResponseFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(ajax.interceptors.ResponseFormat.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"read","read",-1514377108,null),new cljs.core.Symbol(null,"description","description",211970983,null),new cljs.core.Symbol(null,"content-type","content-type",1132308893,null)], null);
}));

(ajax.interceptors.ResponseFormat.cljs$lang$type = true);

(ajax.interceptors.ResponseFormat.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"ajax.interceptors/ResponseFormat",null,(1),null));
}));

(ajax.interceptors.ResponseFormat.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"ajax.interceptors/ResponseFormat");
}));

/**
 * Positional factory function for ajax.interceptors/ResponseFormat.
 */
ajax.interceptors.__GT_ResponseFormat = (function ajax$interceptors$__GT_ResponseFormat(read,description,content_type){
return (new ajax.interceptors.ResponseFormat(read,description,content_type,null,null,null));
});

/**
 * Factory function for ajax.interceptors/ResponseFormat, taking a map of keywords to field values.
 */
ajax.interceptors.map__GT_ResponseFormat = (function ajax$interceptors$map__GT_ResponseFormat(G__52949){
var extmap__4478__auto__ = (function (){var G__53017 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__52949,new cljs.core.Keyword(null,"read","read",1140058661),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"content-type","content-type",-508222634)], 0));
if(cljs.core.record_QMARK_(G__52949)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53017);
} else {
return G__53017;
}
})();
return (new ajax.interceptors.ResponseFormat(new cljs.core.Keyword(null,"read","read",1140058661).cljs$core$IFn$_invoke$arity$1(G__52949),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$1(G__52949),new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(G__52949),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

ajax.interceptors.get_request_format = (function ajax$interceptors$get_request_format(format){

if(cljs.core.map_QMARK_(format)){
return format;
} else {
if((format instanceof cljs.core.Keyword)){
return ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as request formats in ajax calls: ",format], null));
} else {
if(cljs.core.ifn_QMARK_(format)){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"write","write",-1857649168),format,new cljs.core.Keyword(null,"content-type","content-type",-508222634),"text/plain"], null);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
ajax.interceptors.apply_request_format = (function ajax$interceptors$apply_request_format(write,params){
return (write.cljs$core$IFn$_invoke$arity$1 ? write.cljs$core$IFn$_invoke$arity$1(params) : write.call(null,params));
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.interceptors.ApplyRequestFormat = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k53019,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__53023 = k53019;
switch (G__53023) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53019,else__4442__auto__);

}
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__53024){
var vec__53025 = p__53024;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53025,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53025,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__53028){
var self__ = this;
var map__53029 = p__53028;
var map__53029__$1 = (((((!((map__53029 == null))))?(((((map__53029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53029.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53029):map__53029);
var request = map__53029__$1;
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53029__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53029__$1,new cljs.core.Keyword(null,"method","method",55703592));
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53029__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53029__$1,new cljs.core.Keyword(null,"params","params",710516235));
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53029__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var ___$1 = this;
var map__53031 = ajax.interceptors.get_request_format(format);
var map__53031__$1 = (((((!((map__53031 == null))))?(((((map__53031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53031.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53031):map__53031);
var write = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53031__$1,new cljs.core.Keyword(null,"write","write",-1857649168));
var content_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53031__$1,new cljs.core.Keyword(null,"content-type","content-type",-508222634));
var body = (((!((write == null))))?ajax.interceptors.apply_request_format(write,params):ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized request format: ",format], null)));
var headers__$1 = (function (){var or__4185__auto__ = headers;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(request,new cljs.core.Keyword(null,"body","body",-2049205669),body,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"headers","headers",-835030129),(cljs.core.truth_(content_type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(headers__$1,"Content-Type",ajax.interceptors.content_type_to_request_header(content_type)):headers__$1)], 0));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,xhrio){
var self__ = this;
var ___$1 = this;
return xhrio;
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#ajax.interceptors.ApplyRequestFormat{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53018){
var self__ = this;
var G__53018__$1 = this;
return (new cljs.core.RecordIter((0),G__53018__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__53034 = (function (coll__4436__auto__){
return (1698259290 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__53034(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53020,other53021){
var self__ = this;
var this53020__$1 = this;
return (((!((other53021 == null)))) && ((this53020__$1.constructor === other53021.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53020__$1.__extmap,other53021.__extmap)));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__53018){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__53047 = cljs.core.keyword_identical_QMARK_;
var expr__53048 = k__4447__auto__;
return (new ajax.interceptors.ApplyRequestFormat(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__53018),null));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__53018){
var self__ = this;
var this__4438__auto____$1 = this;
return (new ajax.interceptors.ApplyRequestFormat(G__53018,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.ApplyRequestFormat.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(ajax.interceptors.ApplyRequestFormat.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(ajax.interceptors.ApplyRequestFormat.cljs$lang$type = true);

(ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"ajax.interceptors/ApplyRequestFormat",null,(1),null));
}));

(ajax.interceptors.ApplyRequestFormat.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"ajax.interceptors/ApplyRequestFormat");
}));

/**
 * Positional factory function for ajax.interceptors/ApplyRequestFormat.
 */
ajax.interceptors.__GT_ApplyRequestFormat = (function ajax$interceptors$__GT_ApplyRequestFormat(){
return (new ajax.interceptors.ApplyRequestFormat(null,null,null));
});

/**
 * Factory function for ajax.interceptors/ApplyRequestFormat, taking a map of keywords to field values.
 */
ajax.interceptors.map__GT_ApplyRequestFormat = (function ajax$interceptors$map__GT_ApplyRequestFormat(G__53022){
var extmap__4478__auto__ = (function (){var G__53061 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__53022);
if(cljs.core.record_QMARK_(G__53022)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53061);
} else {
return G__53061;
}
})();
return (new ajax.interceptors.ApplyRequestFormat(null,cljs.core.not_empty(extmap__4478__auto__),null));
});

ajax.interceptors.uri_with_params = (function ajax$interceptors$uri_with_params(var_args){
var G__53064 = arguments.length;
switch (G__53064) {
case 2:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$2 = (function (p__53065,uri){
var map__53066 = p__53065;
var map__53066__$1 = (((((!((map__53066 == null))))?(((((map__53066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53066):map__53066);
var vec_strategy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53066__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53066__$1,new cljs.core.Keyword(null,"params","params",710516235));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53066__$1,new cljs.core.Keyword(null,"method","method",55703592));
var url_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53066__$1,new cljs.core.Keyword(null,"url-params","url-params",-697567619));

var temp__5733__auto__ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET")) && ((url_params == null))))?params:url_params);
if(cljs.core.truth_(temp__5733__auto__)){
var final_url_params = temp__5733__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),(cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?"),ajax.url.params_to_str.cljs$core$IFn$_invoke$arity$2(vec_strategy,final_url_params)].join('');
} else {
return uri;
}
}));

(ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1 = (function (p__53070){
var map__53071 = p__53070;
var map__53071__$1 = (((((!((map__53071 == null))))?(((((map__53071.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53071.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53071):map__53071);
var vec_strategy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53071__$1,new cljs.core.Keyword(null,"vec-strategy","vec-strategy",1843221372));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53071__$1,new cljs.core.Keyword(null,"params","params",710516235));
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53071__$1,new cljs.core.Keyword(null,"method","method",55703592));
var url_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53071__$1,new cljs.core.Keyword(null,"url-params","url-params",-697567619));
return (function (uri){

var temp__5733__auto__ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET")) && ((url_params == null))))?params:url_params);
if(cljs.core.truth_(temp__5733__auto__)){
var final_url_params = temp__5733__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(uri),(cljs.core.truth_(cljs.core.re_find(/\?/,uri))?"&":"?"),ajax.url.params_to_str.cljs$core$IFn$_invoke$arity$2(vec_strategy,final_url_params)].join('');
} else {
return uri;
}
});
}));

(ajax.interceptors.uri_with_params.cljs$lang$maxFixedArity = 2);


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.interceptors.ProcessUrlParameters = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k53074,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__53099 = k53074;
switch (G__53099) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53074,else__4442__auto__);

}
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__53100){
var vec__53101 = p__53100;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53101,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53101,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(ajax.interceptors.ProcessUrlParameters.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.interceptors.ProcessUrlParameters.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__53104){
var self__ = this;
var map__53105 = p__53104;
var map__53105__$1 = (((((!((map__53105 == null))))?(((((map__53105.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53105.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53105):map__53105);
var request = map__53105__$1;
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53105__$1,new cljs.core.Keyword(null,"method","method",55703592));
var ___$1 = this;
var if_get_reduce = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(method,"GET"))?cljs.core.reduced:cljs.core.identity);
var G__53111 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(request,new cljs.core.Keyword(null,"uri","uri",-774711847),ajax.interceptors.uri_with_params.cljs$core$IFn$_invoke$arity$1(request));
return (if_get_reduce.cljs$core$IFn$_invoke$arity$1 ? if_get_reduce.cljs$core$IFn$_invoke$arity$1(G__53111) : if_get_reduce.call(null,G__53111));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#ajax.interceptors.ProcessUrlParameters{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53073){
var self__ = this;
var G__53073__$1 = this;
return (new cljs.core.RecordIter((0),G__53073__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new ajax.interceptors.ProcessUrlParameters(self__.__meta,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__53150 = (function (coll__4436__auto__){
return (-516728758 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__53150(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53075,other53076){
var self__ = this;
var this53075__$1 = this;
return (((!((other53076 == null)))) && ((this53075__$1.constructor === other53076.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53075__$1.__extmap,other53076.__extmap)));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new ajax.interceptors.ProcessUrlParameters(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__53073){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__53152 = cljs.core.keyword_identical_QMARK_;
var expr__53153 = k__4447__auto__;
return (new ajax.interceptors.ProcessUrlParameters(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__53073),null));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__53073){
var self__ = this;
var this__4438__auto____$1 = this;
return (new ajax.interceptors.ProcessUrlParameters(G__53073,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.ProcessUrlParameters.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(ajax.interceptors.ProcessUrlParameters.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(ajax.interceptors.ProcessUrlParameters.cljs$lang$type = true);

(ajax.interceptors.ProcessUrlParameters.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"ajax.interceptors/ProcessUrlParameters",null,(1),null));
}));

(ajax.interceptors.ProcessUrlParameters.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"ajax.interceptors/ProcessUrlParameters");
}));

/**
 * Positional factory function for ajax.interceptors/ProcessUrlParameters.
 */
ajax.interceptors.__GT_ProcessUrlParameters = (function ajax$interceptors$__GT_ProcessUrlParameters(){
return (new ajax.interceptors.ProcessUrlParameters(null,null,null));
});

/**
 * Factory function for ajax.interceptors/ProcessUrlParameters, taking a map of keywords to field values.
 */
ajax.interceptors.map__GT_ProcessUrlParameters = (function ajax$interceptors$map__GT_ProcessUrlParameters(G__53081){
var extmap__4478__auto__ = (function (){var G__53155 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__53081);
if(cljs.core.record_QMARK_(G__53081)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53155);
} else {
return G__53155;
}
})();
return (new ajax.interceptors.ProcessUrlParameters(null,cljs.core.not_empty(extmap__4478__auto__),null));
});


/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {ajax.protocols.Interceptor}
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
ajax.interceptors.DirectSubmission = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k53157,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__53173 = k53157;
switch (G__53173) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53157,else__4442__auto__);

}
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__53174){
var vec__53175 = p__53174;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53175,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53175,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$ = cljs.core.PROTOCOL_SENTINEL);

(ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_request$arity$2 = (function (_,p__53179){
var self__ = this;
var map__53180 = p__53179;
var map__53180__$1 = (((((!((map__53180 == null))))?(((((map__53180.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53180.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53180):map__53180);
var request = map__53180__$1;
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53180__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var ___$1 = this;
if((body == null)){
return request;
} else {
return cljs.core.reduced(request);
}
}));

(ajax.interceptors.DirectSubmission.prototype.ajax$protocols$Interceptor$_process_response$arity$2 = (function (_,response){
var self__ = this;
var ___$1 = this;
return response;
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#ajax.interceptors.DirectSubmission{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53156){
var self__ = this;
var G__53156__$1 = this;
return (new cljs.core.RecordIter((0),G__53156__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(self__.__meta,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__53182 = (function (coll__4436__auto__){
return (-1077152635 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__53182(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53158,other53159){
var self__ = this;
var this53158__$1 = this;
return (((!((other53159 == null)))) && ((this53158__$1.constructor === other53159.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53158__$1.__extmap,other53159.__extmap)));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__53156){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__53183 = cljs.core.keyword_identical_QMARK_;
var expr__53184 = k__4447__auto__;
return (new ajax.interceptors.DirectSubmission(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__53156),null));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__53156){
var self__ = this;
var this__4438__auto____$1 = this;
return (new ajax.interceptors.DirectSubmission(G__53156,self__.__extmap,self__.__hash));
}));

(ajax.interceptors.DirectSubmission.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(ajax.interceptors.DirectSubmission.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(ajax.interceptors.DirectSubmission.cljs$lang$type = true);

(ajax.interceptors.DirectSubmission.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"ajax.interceptors/DirectSubmission",null,(1),null));
}));

(ajax.interceptors.DirectSubmission.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"ajax.interceptors/DirectSubmission");
}));

/**
 * Positional factory function for ajax.interceptors/DirectSubmission.
 */
ajax.interceptors.__GT_DirectSubmission = (function ajax$interceptors$__GT_DirectSubmission(){
return (new ajax.interceptors.DirectSubmission(null,null,null));
});

/**
 * Factory function for ajax.interceptors/DirectSubmission, taking a map of keywords to field values.
 */
ajax.interceptors.map__GT_DirectSubmission = (function ajax$interceptors$map__GT_DirectSubmission(G__53160){
var extmap__4478__auto__ = (function (){var G__53186 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__53160);
if(cljs.core.record_QMARK_(G__53160)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53186);
} else {
return G__53186;
}
})();
return (new ajax.interceptors.DirectSubmission(null,cljs.core.not_empty(extmap__4478__auto__),null));
});

ajax.interceptors.request_interceptors = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new ajax.interceptors.ProcessUrlParameters(null,null,null)),(new ajax.interceptors.DirectSubmission(null,null,null)),(new ajax.interceptors.ApplyRequestFormat(null,null,null))], null);
ajax.interceptors.is_response_format_QMARK_ = (function ajax$interceptors$is_response_format_QMARK_(response_format){
return (response_format instanceof ajax.interceptors.ResponseFormat);
});
ajax.interceptors.get_response_format = (function ajax$interceptors$get_response_format(interpret_vector,p__53187){
var map__53188 = p__53187;
var map__53188__$1 = (((((!((map__53188 == null))))?(((((map__53188.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53188.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53188):map__53188);
var opts = map__53188__$1;
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53188__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
if(ajax.interceptors.is_response_format_QMARK_(response_format)){
return response_format;
} else {
if(cljs.core.vector_QMARK_(response_format)){
return (interpret_vector.cljs$core$IFn$_invoke$arity$1 ? interpret_vector.cljs$core$IFn$_invoke$arity$1(opts) : interpret_vector.call(null,opts));
} else {
if(cljs.core.map_QMARK_(response_format)){
return ajax.interceptors.map__GT_ResponseFormat(response_format);
} else {
if((response_format instanceof cljs.core.Keyword)){
return ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["keywords are not allowed as response formats in ajax calls: ",response_format], null));
} else {
if(cljs.core.ifn_QMARK_(response_format)){
return ajax.interceptors.map__GT_ResponseFormat(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"read","read",1140058661),response_format,new cljs.core.Keyword(null,"description","description",-1428560544),"custom",new cljs.core.Keyword(null,"content-type","content-type",-508222634),"*/*"], null));
} else {
return ajax.util.throw_error(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["unrecognized response format: ",response_format], null));

}
}
}
}
}
});

//# sourceMappingURL=ajax.interceptors.js.map
