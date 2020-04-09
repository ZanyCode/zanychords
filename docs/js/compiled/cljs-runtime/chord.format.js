goog.provide('chord.format');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.walk');
goog.require('cognitect.transit');

/**
 * @interface
 */
chord.format.ChordFormatter = function(){};

chord.format.freeze = (function chord$format$freeze(_,obj){
if((((!((_ == null)))) && ((!((_.chord$format$ChordFormatter$freeze$arity$2 == null)))))){
return _.chord$format$ChordFormatter$freeze$arity$2(_,obj);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (chord.format.freeze[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(_,obj) : m__4488__auto__.call(null,_,obj));
} else {
var m__4485__auto__ = (chord.format.freeze["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(_,obj) : m__4485__auto__.call(null,_,obj));
} else {
throw cljs.core.missing_protocol("ChordFormatter.freeze",_);
}
}
}
});

chord.format.thaw = (function chord$format$thaw(_,s){
if((((!((_ == null)))) && ((!((_.chord$format$ChordFormatter$thaw$arity$2 == null)))))){
return _.chord$format$ChordFormatter$thaw$arity$2(_,s);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (chord.format.thaw[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__4488__auto__.call(null,_,s));
} else {
var m__4485__auto__ = (chord.format.thaw["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(_,s) : m__4485__auto__.call(null,_,s));
} else {
throw cljs.core.missing_protocol("ChordFormatter.thaw",_);
}
}
}
});

if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.formatter_STAR_ !== 'undefined')){
} else {
chord.format.formatter_STAR_ = (function (){var method_table__4672__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__4673__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__4674__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__4675__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__83526 = cljs.core.get_global_hierarchy;
return (fexpr__83526.cljs$core$IFn$_invoke$arity$0 ? fexpr__83526.cljs$core$IFn$_invoke$arity$0() : fexpr__83526.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("chord.format","formatter*"),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"edn","edn",1317840885),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format83528 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format83528 = (function (_,meta83529){
this._ = _;
this.meta83529 = meta83529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.format.t_chord$format83528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_83530,meta83529__$1){
var self__ = this;
var _83530__$1 = this;
return (new chord.format.t_chord$format83528(self__._,meta83529__$1));
}));

(chord.format.t_chord$format83528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_83530){
var self__ = this;
var _83530__$1 = this;
return self__.meta83529;
}));

(chord.format.t_chord$format83528.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(chord.format.t_chord$format83528.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0));
}));

(chord.format.t_chord$format83528.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(s);
}));

(chord.format.t_chord$format83528.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta83529","meta83529",1510732009,null)], null);
}));

(chord.format.t_chord$format83528.cljs$lang$type = true);

(chord.format.t_chord$format83528.cljs$lang$ctorStr = "chord.format/t_chord$format83528");

(chord.format.t_chord$format83528.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"chord.format/t_chord$format83528");
}));

/**
 * Positional factory function for chord.format/t_chord$format83528.
 */
chord.format.__GT_t_chord$format83528 = (function chord$format$__GT_t_chord$format83528(___$1,meta83529){
return (new chord.format.t_chord$format83528(___$1,meta83529));
});

}

return (new chord.format.t_chord$format83528(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"json","json",1279968570),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format83544 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format83544 = (function (_,meta83545){
this._ = _;
this.meta83545 = meta83545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.format.t_chord$format83544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_83546,meta83545__$1){
var self__ = this;
var _83546__$1 = this;
return (new chord.format.t_chord$format83544(self__._,meta83545__$1));
}));

(chord.format.t_chord$format83544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_83546){
var self__ = this;
var _83546__$1 = this;
return self__.meta83545;
}));

(chord.format.t_chord$format83544.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(chord.format.t_chord$format83544.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return JSON.stringify(cljs.core.clj__GT_js(obj));
}));

(chord.format.t_chord$format83544.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (this$,s){
var self__ = this;
var this$__$1 = this;
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(s));
}));

(chord.format.t_chord$format83544.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta83545","meta83545",-907641022,null)], null);
}));

(chord.format.t_chord$format83544.cljs$lang$type = true);

(chord.format.t_chord$format83544.cljs$lang$ctorStr = "chord.format/t_chord$format83544");

(chord.format.t_chord$format83544.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"chord.format/t_chord$format83544");
}));

/**
 * Positional factory function for chord.format/t_chord$format83544.
 */
chord.format.__GT_t_chord$format83544 = (function chord$format$__GT_t_chord$format83544(___$1,meta83545){
return (new chord.format.t_chord$format83544(___$1,meta83545));
});

}

return (new chord.format.t_chord$format83544(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"json-kw","json-kw",341203175),(function (opts){
var json_formatter = (function (){var G__83554 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570));
return (chord.format.formatter_STAR_.cljs$core$IFn$_invoke$arity$1 ? chord.format.formatter_STAR_.cljs$core$IFn$_invoke$arity$1(G__83554) : chord.format.formatter_STAR_.call(null,G__83554));
})();
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format83555 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format83555 = (function (opts,json_formatter,meta83556){
this.opts = opts;
this.json_formatter = json_formatter;
this.meta83556 = meta83556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.format.t_chord$format83555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_83557,meta83556__$1){
var self__ = this;
var _83557__$1 = this;
return (new chord.format.t_chord$format83555(self__.opts,self__.json_formatter,meta83556__$1));
}));

(chord.format.t_chord$format83555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_83557){
var self__ = this;
var _83557__$1 = this;
return self__.meta83556;
}));

(chord.format.t_chord$format83555.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(chord.format.t_chord$format83555.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (_,obj){
var self__ = this;
var ___$1 = this;
return chord.format.freeze(self__.json_formatter,obj);
}));

(chord.format.t_chord$format83555.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return clojure.walk.keywordize_keys(chord.format.thaw(self__.json_formatter,s));
}));

(chord.format.t_chord$format83555.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"json-formatter","json-formatter",-485654307,null),new cljs.core.Symbol(null,"meta83556","meta83556",-1019797948,null)], null);
}));

(chord.format.t_chord$format83555.cljs$lang$type = true);

(chord.format.t_chord$format83555.cljs$lang$ctorStr = "chord.format/t_chord$format83555");

(chord.format.t_chord$format83555.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"chord.format/t_chord$format83555");
}));

/**
 * Positional factory function for chord.format/t_chord$format83555.
 */
chord.format.__GT_t_chord$format83555 = (function chord$format$__GT_t_chord$format83555(opts__$1,json_formatter__$1,meta83556){
return (new chord.format.t_chord$format83555(opts__$1,json_formatter__$1,meta83556));
});

}

return (new chord.format.t_chord$format83555(opts,json_formatter,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format83564 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format83564 = (function (_,meta83565){
this._ = _;
this.meta83565 = meta83565;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.format.t_chord$format83564.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_83566,meta83565__$1){
var self__ = this;
var _83566__$1 = this;
return (new chord.format.t_chord$format83564(self__._,meta83565__$1));
}));

(chord.format.t_chord$format83564.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_83566){
var self__ = this;
var _83566__$1 = this;
return self__.meta83565;
}));

(chord.format.t_chord$format83564.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(chord.format.t_chord$format83564.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cognitect.transit.write(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570)),obj);
}));

(chord.format.t_chord$format83564.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cognitect.transit.read(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570)),s);
}));

(chord.format.t_chord$format83564.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta83565","meta83565",-115249918,null)], null);
}));

(chord.format.t_chord$format83564.cljs$lang$type = true);

(chord.format.t_chord$format83564.cljs$lang$ctorStr = "chord.format/t_chord$format83564");

(chord.format.t_chord$format83564.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"chord.format/t_chord$format83564");
}));

/**
 * Positional factory function for chord.format/t_chord$format83564.
 */
chord.format.__GT_t_chord$format83564 = (function chord$format$__GT_t_chord$format83564(___$1,meta83565){
return (new chord.format.t_chord$format83564(___$1,meta83565));
});

}

return (new chord.format.t_chord$format83564(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"str","str",1089608819),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format83576 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format83576 = (function (_,meta83577){
this._ = _;
this.meta83577 = meta83577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.format.t_chord$format83576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_83578,meta83577__$1){
var self__ = this;
var _83578__$1 = this;
return (new chord.format.t_chord$format83576(self__._,meta83577__$1));
}));

(chord.format.t_chord$format83576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_83578){
var self__ = this;
var _83578__$1 = this;
return self__.meta83577;
}));

(chord.format.t_chord$format83576.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(chord.format.t_chord$format83576.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return obj;
}));

(chord.format.t_chord$format83576.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return s;
}));

(chord.format.t_chord$format83576.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta83577","meta83577",-2005184829,null)], null);
}));

(chord.format.t_chord$format83576.cljs$lang$type = true);

(chord.format.t_chord$format83576.cljs$lang$ctorStr = "chord.format/t_chord$format83576");

(chord.format.t_chord$format83576.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"chord.format/t_chord$format83576");
}));

/**
 * Positional factory function for chord.format/t_chord$format83576.
 */
chord.format.__GT_t_chord$format83576 = (function chord$format$__GT_t_chord$format83576(___$1,meta83577){
return (new chord.format.t_chord$format83576(___$1,meta83577));
});

}

return (new chord.format.t_chord$format83576(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter = (function chord$format$formatter(opts){
var G__83590 = (((opts instanceof cljs.core.Keyword))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),opts], null):opts);
return (chord.format.formatter_STAR_.cljs$core$IFn$_invoke$arity$1 ? chord.format.formatter_STAR_.cljs$core$IFn$_invoke$arity$1(G__83590) : chord.format.formatter_STAR_.call(null,G__83590));
});
chord.format.wrap_format = (function chord$format$wrap_format(p__83597,p__83598){
var map__83599 = p__83597;
var map__83599__$1 = (((((!((map__83599 == null))))?(((((map__83599.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83599.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83599):map__83599);
var read_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83599__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83599__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var map__83600 = p__83598;
var map__83600__$1 = (((((!((map__83600 == null))))?(((((map__83600.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83600.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83600):map__83600);
var opts = map__83600__$1;
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83600__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var fmtr = chord.format.formatter((cljs.core.truth_(format)?opts:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"edn","edn",1317840885)], null)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),cljs.core.async.map_LT_((function (p__83605){
var map__83606 = p__83605;
var map__83606__$1 = (((((!((map__83606 == null))))?(((((map__83606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__83606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__83606):map__83606);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83606__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{if(cljs.core.truth_(message)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),chord.format.thaw(fmtr,message)], null);
} else {
return null;
}
}catch (e83608){if((e83608 instanceof Error)){
var e = e83608;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-format","invalid-format",-72676108),new cljs.core.Keyword(null,"cause","cause",231901252),e,new cljs.core.Keyword(null,"invalid-msg","invalid-msg",-1474361625),message], null);
} else {
throw e83608;

}
}}),read_ch),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),cljs.core.async.map_GT_((function (p1__83593_SHARP_){
if(cljs.core.truth_(p1__83593_SHARP_)){
return chord.format.freeze(fmtr,p1__83593_SHARP_);
} else {
return null;
}
}),write_ch)], null);
});

//# sourceMappingURL=chord.format.js.map
