goog.provide('kee_frame.interop');
goog.require('cljs.core');
goog.require('kee_frame.api');
goog.require('accountant.core');
goog.require('reagent.core');
goog.require('re_frame.core');
goog.require('day8.re_frame.http_fx');
goog.require('chord.client');
goog.require('breaking_point.core');
goog.require('clojure.string');
goog.require('re_frame.loggers');

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {kee_frame.api.Navigator}
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
kee_frame.interop.AccountantNavigator = (function (__meta,__extmap,__hash){
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(kee_frame.interop.AccountantNavigator.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k53812,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__53816 = k53812;
switch (G__53816) {
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k53812,else__4442__auto__);

}
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__53817){
var vec__53818 = p__53817;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53818,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53818,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#kee-frame.interop.AccountantNavigator{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__53811){
var self__ = this;
var G__53811__$1 = this;
return (new cljs.core.RecordIter((0),G__53811__$1,0,cljs.core.PersistentVector.EMPTY,(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new kee_frame.interop.AccountantNavigator(self__.__meta,self__.__extmap,self__.__hash));
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (0 + cljs.core.count(self__.__extmap));
}));

(kee_frame.interop.AccountantNavigator.prototype.kee_frame$api$Navigator$ = cljs.core.PROTOCOL_SENTINEL);

(kee_frame.interop.AccountantNavigator.prototype.kee_frame$api$Navigator$dispatch_current_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return accountant.core.dispatch_current_BANG_();
}));

(kee_frame.interop.AccountantNavigator.prototype.kee_frame$api$Navigator$navigate_BANG_$arity$2 = (function (_,url){
var self__ = this;
var ___$1 = this;
return accountant.core.navigate_BANG_.cljs$core$IFn$_invoke$arity$1(url);
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__53843 = (function (coll__4436__auto__){
return (1922069210 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__53843(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this53813,other53814){
var self__ = this;
var this53813__$1 = this;
return (((!((other53814 == null)))) && ((this53813__$1.constructor === other53814.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this53813__$1.__extmap,other53814.__extmap)));
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(cljs.core.PersistentHashSet.EMPTY,k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new kee_frame.interop.AccountantNavigator(self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__53811){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__53860 = cljs.core.keyword_identical_QMARK_;
var expr__53861 = k__4447__auto__;
return (new kee_frame.interop.AccountantNavigator(self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__53811),null));
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,self__.__extmap));
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__53811){
var self__ = this;
var this__4438__auto____$1 = this;
return (new kee_frame.interop.AccountantNavigator(G__53811,self__.__extmap,self__.__hash));
}));

(kee_frame.interop.AccountantNavigator.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(kee_frame.interop.AccountantNavigator.getBasis = (function (){
return cljs.core.PersistentVector.EMPTY;
}));

(kee_frame.interop.AccountantNavigator.cljs$lang$type = true);

(kee_frame.interop.AccountantNavigator.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"kee-frame.interop/AccountantNavigator",null,(1),null));
}));

(kee_frame.interop.AccountantNavigator.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"kee-frame.interop/AccountantNavigator");
}));

/**
 * Positional factory function for kee-frame.interop/AccountantNavigator.
 */
kee_frame.interop.__GT_AccountantNavigator = (function kee_frame$interop$__GT_AccountantNavigator(){
return (new kee_frame.interop.AccountantNavigator(null,null,null));
});

/**
 * Factory function for kee-frame.interop/AccountantNavigator, taking a map of keywords to field values.
 */
kee_frame.interop.map__GT_AccountantNavigator = (function kee_frame$interop$map__GT_AccountantNavigator(G__53815){
var extmap__4478__auto__ = (function (){var G__53870 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$1(G__53815);
if(cljs.core.record_QMARK_(G__53815)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__53870);
} else {
return G__53870;
}
})();
return (new kee_frame.interop.AccountantNavigator(null,cljs.core.not_empty(extmap__4478__auto__),null));
});

kee_frame.interop.create_socket = chord.client.ws_ch;
kee_frame.interop.websocket_url = (function kee_frame$interop$websocket_url(path){
if(clojure.string.starts_with_QMARK_(path,"/")){
return [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("https:",document.location.protocol))?"wss://":"ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(document.location.host),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
} else {
return path;
}
});
kee_frame.interop.make_navigator = (function kee_frame$interop$make_navigator(opts){
accountant.core.configure_navigation_BANG_(opts);

return kee_frame.interop.__GT_AccountantNavigator();
});
kee_frame.interop.render_root = (function kee_frame$interop$render_root(root_component){
if(cljs.core.truth_(root_component)){
var temp__5733__auto__ = document.getElementById("app");
if(cljs.core.truth_(temp__5733__auto__)){
var app_element = temp__5733__auto__;
return reagent.core.render.cljs$core$IFn$_invoke$arity$2(root_component,app_element);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Could not find element with id 'app' to mount app into",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"component","component",1555936782),root_component], null));
}
} else {
return null;
}
});
kee_frame.interop.breakpoints_or_defaults = (function kee_frame$interop$breakpoints_or_defaults(breakpoints){
var or__4185__auto__ = breakpoints;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"debounce-ms","debounce-ms",-1127263167),(166),new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mobile","mobile",1403078170),(768),new cljs.core.Keyword(null,"tablet","tablet",-318585919),(992),new cljs.core.Keyword(null,"small-monitor","small-monitor",-1851699481),(1200),new cljs.core.Keyword(null,"large-monitor","large-monitor",-1142074365)], null)], null);
}
});
kee_frame.interop.set_breakpoint_subs = (function kee_frame$interop$set_breakpoint_subs(breakpoints){
return breaking_point.core.register_subs(new cljs.core.Keyword(null,"breakpoints","breakpoints",1018731739).cljs$core$IFn$_invoke$arity$1(kee_frame.interop.breakpoints_or_defaults(breakpoints)));
});
kee_frame.interop.set_breakpoints = (function kee_frame$interop$set_breakpoints(breakpoints){
var G__53871 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("breaking-point.core","set-breakpoints","breaking-point.core/set-breakpoints",607629013),kee_frame.interop.breakpoints_or_defaults(breakpoints)], null);
return (re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch_sync.cljs$core$IFn$_invoke$arity$1(G__53871) : re_frame.core.dispatch_sync.call(null,G__53871));
});
kee_frame.interop.set_log_level_BANG_ = (function kee_frame$interop$set_log_level_BANG_(p__53872){
var map__53874 = p__53872;
var map__53874__$1 = (((((!((map__53874 == null))))?(((((map__53874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53874):map__53874);
var overwrites_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53874__$1,new cljs.core.Keyword(null,"overwrites?","overwrites?",-1906761528),false);
if(cljs.core.truth_(overwrites_QMARK_)){
return null;
} else {
return re_frame.loggers.set_loggers_BANG_(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"warn","warn",-436710552),(function() { 
var G__53892__delegate = function (args){
if(cljs.core.truth_(cljs.core.re_find(/^re-frame: overwriting/,cljs.core.first(args)))){
return null;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(console.warn,args);
}
};
var G__53892 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__53894__i = 0, G__53894__a = new Array(arguments.length -  0);
while (G__53894__i < G__53894__a.length) {G__53894__a[G__53894__i] = arguments[G__53894__i + 0]; ++G__53894__i;}
  args = new cljs.core.IndexedSeq(G__53894__a,0,null);
} 
return G__53892__delegate.call(this,args);};
G__53892.cljs$lang$maxFixedArity = 0;
G__53892.cljs$lang$applyTo = (function (arglist__53895){
var args = cljs.core.seq(arglist__53895);
return G__53892__delegate(args);
});
G__53892.cljs$core$IFn$_invoke$arity$variadic = G__53892__delegate;
return G__53892;
})()
], null));
}
});

//# sourceMappingURL=kee_frame.interop.js.map
