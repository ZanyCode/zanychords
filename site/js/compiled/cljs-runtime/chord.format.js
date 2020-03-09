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
var hierarchy__4676__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__53463 = cljs.core.get_global_hierarchy;
return (fexpr__53463.cljs$core$IFn$_invoke$arity$0 ? fexpr__53463.cljs$core$IFn$_invoke$arity$0() : fexpr__53463.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("chord.format","formatter*"),new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__4676__auto__,method_table__4672__auto__,prefer_table__4673__auto__,method_cache__4674__auto__,cached_hierarchy__4675__auto__));
})();
}
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"edn","edn",1317840885),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format53464 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format53464 = (function (_,meta53465){
this._ = _;
this.meta53465 = meta53465;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.format.t_chord$format53464.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53466,meta53465__$1){
var self__ = this;
var _53466__$1 = this;
return (new chord.format.t_chord$format53464(self__._,meta53465__$1));
}));

(chord.format.t_chord$format53464.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53466){
var self__ = this;
var _53466__$1 = this;
return self__.meta53465;
}));

(chord.format.t_chord$format53464.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(chord.format.t_chord$format53464.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([obj], 0));
}));

(chord.format.t_chord$format53464.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(s);
}));

(chord.format.t_chord$format53464.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta53465","meta53465",-1623948844,null)], null);
}));

(chord.format.t_chord$format53464.cljs$lang$type = true);

(chord.format.t_chord$format53464.cljs$lang$ctorStr = "chord.format/t_chord$format53464");

(chord.format.t_chord$format53464.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"chord.format/t_chord$format53464");
}));

/**
 * Positional factory function for chord.format/t_chord$format53464.
 */
chord.format.__GT_t_chord$format53464 = (function chord$format$__GT_t_chord$format53464(___$1,meta53465){
return (new chord.format.t_chord$format53464(___$1,meta53465));
});

}

return (new chord.format.t_chord$format53464(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"json","json",1279968570),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format53470 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format53470 = (function (_,meta53471){
this._ = _;
this.meta53471 = meta53471;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.format.t_chord$format53470.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53472,meta53471__$1){
var self__ = this;
var _53472__$1 = this;
return (new chord.format.t_chord$format53470(self__._,meta53471__$1));
}));

(chord.format.t_chord$format53470.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53472){
var self__ = this;
var _53472__$1 = this;
return self__.meta53471;
}));

(chord.format.t_chord$format53470.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(chord.format.t_chord$format53470.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return JSON.stringify(cljs.core.clj__GT_js(obj));
}));

(chord.format.t_chord$format53470.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (this$,s){
var self__ = this;
var this$__$1 = this;
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(JSON.parse(s));
}));

(chord.format.t_chord$format53470.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta53471","meta53471",488154477,null)], null);
}));

(chord.format.t_chord$format53470.cljs$lang$type = true);

(chord.format.t_chord$format53470.cljs$lang$ctorStr = "chord.format/t_chord$format53470");

(chord.format.t_chord$format53470.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"chord.format/t_chord$format53470");
}));

/**
 * Positional factory function for chord.format/t_chord$format53470.
 */
chord.format.__GT_t_chord$format53470 = (function chord$format$__GT_t_chord$format53470(___$1,meta53471){
return (new chord.format.t_chord$format53470(___$1,meta53471));
});

}

return (new chord.format.t_chord$format53470(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"json-kw","json-kw",341203175),(function (opts){
var json_formatter = (function (){var G__53487 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"json","json",1279968570));
return (chord.format.formatter_STAR_.cljs$core$IFn$_invoke$arity$1 ? chord.format.formatter_STAR_.cljs$core$IFn$_invoke$arity$1(G__53487) : chord.format.formatter_STAR_.call(null,G__53487));
})();
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format53490 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format53490 = (function (opts,json_formatter,meta53491){
this.opts = opts;
this.json_formatter = json_formatter;
this.meta53491 = meta53491;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.format.t_chord$format53490.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53492,meta53491__$1){
var self__ = this;
var _53492__$1 = this;
return (new chord.format.t_chord$format53490(self__.opts,self__.json_formatter,meta53491__$1));
}));

(chord.format.t_chord$format53490.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53492){
var self__ = this;
var _53492__$1 = this;
return self__.meta53491;
}));

(chord.format.t_chord$format53490.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(chord.format.t_chord$format53490.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (_,obj){
var self__ = this;
var ___$1 = this;
return chord.format.freeze(self__.json_formatter,obj);
}));

(chord.format.t_chord$format53490.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (_,s){
var self__ = this;
var ___$1 = this;
return clojure.walk.keywordize_keys(chord.format.thaw(self__.json_formatter,s));
}));

(chord.format.t_chord$format53490.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"json-formatter","json-formatter",-485654307,null),new cljs.core.Symbol(null,"meta53491","meta53491",-671375135,null)], null);
}));

(chord.format.t_chord$format53490.cljs$lang$type = true);

(chord.format.t_chord$format53490.cljs$lang$ctorStr = "chord.format/t_chord$format53490");

(chord.format.t_chord$format53490.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"chord.format/t_chord$format53490");
}));

/**
 * Positional factory function for chord.format/t_chord$format53490.
 */
chord.format.__GT_t_chord$format53490 = (function chord$format$__GT_t_chord$format53490(opts__$1,json_formatter__$1,meta53491){
return (new chord.format.t_chord$format53490(opts__$1,json_formatter__$1,meta53491));
});

}

return (new chord.format.t_chord$format53490(opts,json_formatter,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"transit-json","transit-json",1168016579),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format53493 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format53493 = (function (_,meta53494){
this._ = _;
this.meta53494 = meta53494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.format.t_chord$format53493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53495,meta53494__$1){
var self__ = this;
var _53495__$1 = this;
return (new chord.format.t_chord$format53493(self__._,meta53494__$1));
}));

(chord.format.t_chord$format53493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53495){
var self__ = this;
var _53495__$1 = this;
return self__.meta53494;
}));

(chord.format.t_chord$format53493.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(chord.format.t_chord$format53493.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return cognitect.transit.write(cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570)),obj);
}));

(chord.format.t_chord$format53493.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return cognitect.transit.read(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"json","json",1279968570)),s);
}));

(chord.format.t_chord$format53493.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta53494","meta53494",-980929793,null)], null);
}));

(chord.format.t_chord$format53493.cljs$lang$type = true);

(chord.format.t_chord$format53493.cljs$lang$ctorStr = "chord.format/t_chord$format53493");

(chord.format.t_chord$format53493.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"chord.format/t_chord$format53493");
}));

/**
 * Positional factory function for chord.format/t_chord$format53493.
 */
chord.format.__GT_t_chord$format53493 = (function chord$format$__GT_t_chord$format53493(___$1,meta53494){
return (new chord.format.t_chord$format53493(___$1,meta53494));
});

}

return (new chord.format.t_chord$format53493(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter_STAR_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"str","str",1089608819),(function (_){
if((typeof chord !== 'undefined') && (typeof chord.format !== 'undefined') && (typeof chord.format.t_chord$format53496 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {chord.format.ChordFormatter}
*/
chord.format.t_chord$format53496 = (function (_,meta53497){
this._ = _;
this.meta53497 = meta53497;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(chord.format.t_chord$format53496.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_53498,meta53497__$1){
var self__ = this;
var _53498__$1 = this;
return (new chord.format.t_chord$format53496(self__._,meta53497__$1));
}));

(chord.format.t_chord$format53496.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_53498){
var self__ = this;
var _53498__$1 = this;
return self__.meta53497;
}));

(chord.format.t_chord$format53496.prototype.chord$format$ChordFormatter$ = cljs.core.PROTOCOL_SENTINEL);

(chord.format.t_chord$format53496.prototype.chord$format$ChordFormatter$freeze$arity$2 = (function (___$1,obj){
var self__ = this;
var ___$2 = this;
return obj;
}));

(chord.format.t_chord$format53496.prototype.chord$format$ChordFormatter$thaw$arity$2 = (function (___$1,s){
var self__ = this;
var ___$2 = this;
return s;
}));

(chord.format.t_chord$format53496.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"meta53497","meta53497",-718324611,null)], null);
}));

(chord.format.t_chord$format53496.cljs$lang$type = true);

(chord.format.t_chord$format53496.cljs$lang$ctorStr = "chord.format/t_chord$format53496");

(chord.format.t_chord$format53496.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"chord.format/t_chord$format53496");
}));

/**
 * Positional factory function for chord.format/t_chord$format53496.
 */
chord.format.__GT_t_chord$format53496 = (function chord$format$__GT_t_chord$format53496(___$1,meta53497){
return (new chord.format.t_chord$format53496(___$1,meta53497));
});

}

return (new chord.format.t_chord$format53496(_,cljs.core.PersistentArrayMap.EMPTY));
}));
chord.format.formatter = (function chord$format$formatter(opts){
var G__53499 = (((opts instanceof cljs.core.Keyword))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),opts], null):opts);
return (chord.format.formatter_STAR_.cljs$core$IFn$_invoke$arity$1 ? chord.format.formatter_STAR_.cljs$core$IFn$_invoke$arity$1(G__53499) : chord.format.formatter_STAR_.call(null,G__53499));
});
chord.format.wrap_format = (function chord$format$wrap_format(p__53501,p__53502){
var map__53503 = p__53501;
var map__53503__$1 = (((((!((map__53503 == null))))?(((((map__53503.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53503.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53503):map__53503);
var read_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53503__$1,new cljs.core.Keyword(null,"read-ch","read-ch",-38486414));
var write_ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53503__$1,new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599));
var map__53504 = p__53502;
var map__53504__$1 = (((((!((map__53504 == null))))?(((((map__53504.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53504.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53504):map__53504);
var opts = map__53504__$1;
var format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53504__$1,new cljs.core.Keyword(null,"format","format",-1306924766));
var fmtr = chord.format.formatter((cljs.core.truth_(format)?opts:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"format","format",-1306924766),new cljs.core.Keyword(null,"edn","edn",1317840885)], null)));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"read-ch","read-ch",-38486414),cljs.core.async.map_LT_((function (p__53507){
var map__53508 = p__53507;
var map__53508__$1 = (((((!((map__53508 == null))))?(((((map__53508.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__53508.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__53508):map__53508);
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53508__$1,new cljs.core.Keyword(null,"message","message",-406056002));
try{if(cljs.core.truth_(message)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),chord.format.thaw(fmtr,message)], null);
} else {
return null;
}
}catch (e53510){if((e53510 instanceof Error)){
var e = e53510;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"invalid-format","invalid-format",-72676108),new cljs.core.Keyword(null,"cause","cause",231901252),e,new cljs.core.Keyword(null,"invalid-msg","invalid-msg",-1474361625),message], null);
} else {
throw e53510;

}
}}),read_ch),new cljs.core.Keyword(null,"write-ch","write-ch",-1766585599),cljs.core.async.map_GT_((function (p1__53500_SHARP_){
if(cljs.core.truth_(p1__53500_SHARP_)){
return chord.format.freeze(fmtr,p1__53500_SHARP_);
} else {
return null;
}
}),write_ch)], null);
});

//# sourceMappingURL=chord.format.js.map
