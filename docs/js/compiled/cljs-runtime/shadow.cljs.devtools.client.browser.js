goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___82693 = arguments.length;
var i__4790__auto___82694 = (0);
while(true){
if((i__4790__auto___82694 < len__4789__auto___82693)){
args__4795__auto__.push((arguments[i__4790__auto___82694]));

var G__82695 = (i__4790__auto___82694 + (1));
i__4790__auto___82694 = G__82695;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq82403){
var G__82404 = cljs.core.first(seq82403);
var seq82403__$1 = cljs.core.next(seq82403);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__82404,seq82403__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__82413){
var map__82414 = p__82413;
var map__82414__$1 = (((((!((map__82414 == null))))?(((((map__82414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82414):map__82414);
var src = map__82414__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82414__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82414__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__82419 = cljs.core.seq(sources);
var chunk__82420 = null;
var count__82421 = (0);
var i__82422 = (0);
while(true){
if((i__82422 < count__82421)){
var map__82463 = chunk__82420.cljs$core$IIndexed$_nth$arity$2(null,i__82422);
var map__82463__$1 = (((((!((map__82463 == null))))?(((((map__82463.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82463.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82463):map__82463);
var src = map__82463__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82463__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82463__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82463__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82463__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e82465){var e_82700 = e82465;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_82700);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_82700.message)].join('')));
}

var G__82701 = seq__82419;
var G__82702 = chunk__82420;
var G__82703 = count__82421;
var G__82704 = (i__82422 + (1));
seq__82419 = G__82701;
chunk__82420 = G__82702;
count__82421 = G__82703;
i__82422 = G__82704;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__82419);
if(temp__5735__auto__){
var seq__82419__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__82419__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__82419__$1);
var G__82705 = cljs.core.chunk_rest(seq__82419__$1);
var G__82706 = c__4609__auto__;
var G__82707 = cljs.core.count(c__4609__auto__);
var G__82708 = (0);
seq__82419 = G__82705;
chunk__82420 = G__82706;
count__82421 = G__82707;
i__82422 = G__82708;
continue;
} else {
var map__82467 = cljs.core.first(seq__82419__$1);
var map__82467__$1 = (((((!((map__82467 == null))))?(((((map__82467.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82467.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82467):map__82467);
var src = map__82467__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82467__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82467__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82467__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82467__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e82474){var e_82709 = e82474;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_82709);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_82709.message)].join('')));
}

var G__82710 = cljs.core.next(seq__82419__$1);
var G__82711 = null;
var G__82712 = (0);
var G__82713 = (0);
seq__82419 = G__82710;
chunk__82420 = G__82711;
count__82421 = G__82712;
i__82422 = G__82713;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__82487 = cljs.core.seq(js_requires);
var chunk__82488 = null;
var count__82489 = (0);
var i__82490 = (0);
while(true){
if((i__82490 < count__82489)){
var js_ns = chunk__82488.cljs$core$IIndexed$_nth$arity$2(null,i__82490);
var require_str_82714 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_82714);


var G__82715 = seq__82487;
var G__82716 = chunk__82488;
var G__82717 = count__82489;
var G__82718 = (i__82490 + (1));
seq__82487 = G__82715;
chunk__82488 = G__82716;
count__82489 = G__82717;
i__82490 = G__82718;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__82487);
if(temp__5735__auto__){
var seq__82487__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__82487__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__82487__$1);
var G__82719 = cljs.core.chunk_rest(seq__82487__$1);
var G__82720 = c__4609__auto__;
var G__82721 = cljs.core.count(c__4609__auto__);
var G__82722 = (0);
seq__82487 = G__82719;
chunk__82488 = G__82720;
count__82489 = G__82721;
i__82490 = G__82722;
continue;
} else {
var js_ns = cljs.core.first(seq__82487__$1);
var require_str_82723 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_82723);


var G__82724 = cljs.core.next(seq__82487__$1);
var G__82725 = null;
var G__82726 = (0);
var G__82727 = (0);
seq__82487 = G__82724;
chunk__82488 = G__82725;
count__82489 = G__82726;
i__82490 = G__82727;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__82512 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__82512) : callback.call(null,G__82512));
} else {
var G__82513 = shadow.cljs.devtools.client.env.files_url();
var G__82514 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__82515 = "POST";
var G__82516 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__82517 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__82513,G__82514,G__82515,G__82516,G__82517);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__82536){
var map__82537 = p__82536;
var map__82537__$1 = (((((!((map__82537 == null))))?(((((map__82537.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82537.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82537):map__82537);
var msg = map__82537__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82537__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82537__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__82543 = info;
var map__82543__$1 = (((((!((map__82543 == null))))?(((((map__82543.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82543.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82543):map__82543);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82543__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82543__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__82546(s__82547){
return (new cljs.core.LazySeq(null,(function (){
var s__82547__$1 = s__82547;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__82547__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__82562 = cljs.core.first(xs__6292__auto__);
var map__82562__$1 = (((((!((map__82562 == null))))?(((((map__82562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82562):map__82562);
var src = map__82562__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82562__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82562__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__82547__$1,map__82562,map__82562__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__82543,map__82543__$1,sources,compiled,map__82537,map__82537__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__82546_$_iter__82548(s__82549){
return (new cljs.core.LazySeq(null,((function (s__82547__$1,map__82562,map__82562__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__82543,map__82543__$1,sources,compiled,map__82537,map__82537__$1,msg,info,reload_info){
return (function (){
var s__82549__$1 = s__82549;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__82549__$1);
if(temp__5735__auto____$1){
var s__82549__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__82549__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__82549__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__82551 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__82550 = (0);
while(true){
if((i__82550 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__82550);
cljs.core.chunk_append(b__82551,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__82732 = (i__82550 + (1));
i__82550 = G__82732;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__82551),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__82546_$_iter__82548(cljs.core.chunk_rest(s__82549__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__82551),null);
}
} else {
var warning = cljs.core.first(s__82549__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__82546_$_iter__82548(cljs.core.rest(s__82549__$2)));
}
} else {
return null;
}
break;
}
});})(s__82547__$1,map__82562,map__82562__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__82543,map__82543__$1,sources,compiled,map__82537,map__82537__$1,msg,info,reload_info))
,null,null));
});})(s__82547__$1,map__82562,map__82562__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__82543,map__82543__$1,sources,compiled,map__82537,map__82537__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__82546(cljs.core.rest(s__82547__$1)));
} else {
var G__82733 = cljs.core.rest(s__82547__$1);
s__82547__$1 = G__82733;
continue;
}
} else {
var G__82734 = cljs.core.rest(s__82547__$1);
s__82547__$1 = G__82734;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__82573_82735 = cljs.core.seq(warnings);
var chunk__82574_82736 = null;
var count__82575_82737 = (0);
var i__82576_82738 = (0);
while(true){
if((i__82576_82738 < count__82575_82737)){
var map__82582_82739 = chunk__82574_82736.cljs$core$IIndexed$_nth$arity$2(null,i__82576_82738);
var map__82582_82740__$1 = (((((!((map__82582_82739 == null))))?(((((map__82582_82739.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82582_82739.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82582_82739):map__82582_82739);
var w_82741 = map__82582_82740__$1;
var msg_82742__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82582_82740__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_82743 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82582_82740__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_82744 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82582_82740__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_82745 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82582_82740__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_82745)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_82743),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_82744),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_82742__$1)].join(''));


var G__82746 = seq__82573_82735;
var G__82747 = chunk__82574_82736;
var G__82748 = count__82575_82737;
var G__82749 = (i__82576_82738 + (1));
seq__82573_82735 = G__82746;
chunk__82574_82736 = G__82747;
count__82575_82737 = G__82748;
i__82576_82738 = G__82749;
continue;
} else {
var temp__5735__auto___82750 = cljs.core.seq(seq__82573_82735);
if(temp__5735__auto___82750){
var seq__82573_82751__$1 = temp__5735__auto___82750;
if(cljs.core.chunked_seq_QMARK_(seq__82573_82751__$1)){
var c__4609__auto___82752 = cljs.core.chunk_first(seq__82573_82751__$1);
var G__82753 = cljs.core.chunk_rest(seq__82573_82751__$1);
var G__82754 = c__4609__auto___82752;
var G__82755 = cljs.core.count(c__4609__auto___82752);
var G__82756 = (0);
seq__82573_82735 = G__82753;
chunk__82574_82736 = G__82754;
count__82575_82737 = G__82755;
i__82576_82738 = G__82756;
continue;
} else {
var map__82584_82757 = cljs.core.first(seq__82573_82751__$1);
var map__82584_82758__$1 = (((((!((map__82584_82757 == null))))?(((((map__82584_82757.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82584_82757.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82584_82757):map__82584_82757);
var w_82759 = map__82584_82758__$1;
var msg_82760__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82584_82758__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_82761 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82584_82758__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_82762 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82584_82758__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_82763 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82584_82758__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_82763)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_82761),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_82762),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_82760__$1)].join(''));


var G__82764 = cljs.core.next(seq__82573_82751__$1);
var G__82765 = null;
var G__82766 = (0);
var G__82767 = (0);
seq__82573_82735 = G__82764;
chunk__82574_82736 = G__82765;
count__82575_82737 = G__82766;
i__82576_82738 = G__82767;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__82586){
var map__82587 = p__82586;
var map__82587__$1 = (((((!((map__82587 == null))))?(((((map__82587.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82587.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82587):map__82587);
var src = map__82587__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82587__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82587__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__82589){
var map__82590 = p__82589;
var map__82590__$1 = (((((!((map__82590 == null))))?(((((map__82590.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82590.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82590):map__82590);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82590__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__82592){
var map__82593 = p__82592;
var map__82593__$1 = (((((!((map__82593 == null))))?(((((map__82593.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82593.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82593):map__82593);
var rc = map__82593__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82593__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__82535_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__82535_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__82595){
var map__82596 = p__82595;
var map__82596__$1 = (((((!((map__82596 == null))))?(((((map__82596.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82596.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82596):map__82596);
var msg = map__82596__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82596__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__82598 = cljs.core.seq(updates);
var chunk__82600 = null;
var count__82601 = (0);
var i__82602 = (0);
while(true){
if((i__82602 < count__82601)){
var path = chunk__82600.cljs$core$IIndexed$_nth$arity$2(null,i__82602);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__82637_82776 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__82640_82777 = null;
var count__82641_82778 = (0);
var i__82642_82779 = (0);
while(true){
if((i__82642_82779 < count__82641_82778)){
var node_82780 = chunk__82640_82777.cljs$core$IIndexed$_nth$arity$2(null,i__82642_82779);
var path_match_82781 = shadow.cljs.devtools.client.browser.match_paths(node_82780.getAttribute("href"),path);
if(cljs.core.truth_(path_match_82781)){
var new_link_82782 = (function (){var G__82647 = node_82780.cloneNode(true);
G__82647.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_82781),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__82647;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_82781], 0));

goog.dom.insertSiblingAfter(new_link_82782,node_82780);

goog.dom.removeNode(node_82780);


var G__82783 = seq__82637_82776;
var G__82784 = chunk__82640_82777;
var G__82785 = count__82641_82778;
var G__82786 = (i__82642_82779 + (1));
seq__82637_82776 = G__82783;
chunk__82640_82777 = G__82784;
count__82641_82778 = G__82785;
i__82642_82779 = G__82786;
continue;
} else {
var G__82787 = seq__82637_82776;
var G__82788 = chunk__82640_82777;
var G__82789 = count__82641_82778;
var G__82790 = (i__82642_82779 + (1));
seq__82637_82776 = G__82787;
chunk__82640_82777 = G__82788;
count__82641_82778 = G__82789;
i__82642_82779 = G__82790;
continue;
}
} else {
var temp__5735__auto___82791 = cljs.core.seq(seq__82637_82776);
if(temp__5735__auto___82791){
var seq__82637_82792__$1 = temp__5735__auto___82791;
if(cljs.core.chunked_seq_QMARK_(seq__82637_82792__$1)){
var c__4609__auto___82793 = cljs.core.chunk_first(seq__82637_82792__$1);
var G__82794 = cljs.core.chunk_rest(seq__82637_82792__$1);
var G__82795 = c__4609__auto___82793;
var G__82796 = cljs.core.count(c__4609__auto___82793);
var G__82797 = (0);
seq__82637_82776 = G__82794;
chunk__82640_82777 = G__82795;
count__82641_82778 = G__82796;
i__82642_82779 = G__82797;
continue;
} else {
var node_82798 = cljs.core.first(seq__82637_82792__$1);
var path_match_82799 = shadow.cljs.devtools.client.browser.match_paths(node_82798.getAttribute("href"),path);
if(cljs.core.truth_(path_match_82799)){
var new_link_82800 = (function (){var G__82648 = node_82798.cloneNode(true);
G__82648.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_82799),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__82648;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_82799], 0));

goog.dom.insertSiblingAfter(new_link_82800,node_82798);

goog.dom.removeNode(node_82798);


var G__82801 = cljs.core.next(seq__82637_82792__$1);
var G__82802 = null;
var G__82803 = (0);
var G__82804 = (0);
seq__82637_82776 = G__82801;
chunk__82640_82777 = G__82802;
count__82641_82778 = G__82803;
i__82642_82779 = G__82804;
continue;
} else {
var G__82805 = cljs.core.next(seq__82637_82792__$1);
var G__82806 = null;
var G__82807 = (0);
var G__82808 = (0);
seq__82637_82776 = G__82805;
chunk__82640_82777 = G__82806;
count__82641_82778 = G__82807;
i__82642_82779 = G__82808;
continue;
}
}
} else {
}
}
break;
}


var G__82809 = seq__82598;
var G__82810 = chunk__82600;
var G__82811 = count__82601;
var G__82812 = (i__82602 + (1));
seq__82598 = G__82809;
chunk__82600 = G__82810;
count__82601 = G__82811;
i__82602 = G__82812;
continue;
} else {
var G__82813 = seq__82598;
var G__82814 = chunk__82600;
var G__82815 = count__82601;
var G__82816 = (i__82602 + (1));
seq__82598 = G__82813;
chunk__82600 = G__82814;
count__82601 = G__82815;
i__82602 = G__82816;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__82598);
if(temp__5735__auto__){
var seq__82598__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__82598__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__82598__$1);
var G__82817 = cljs.core.chunk_rest(seq__82598__$1);
var G__82818 = c__4609__auto__;
var G__82819 = cljs.core.count(c__4609__auto__);
var G__82820 = (0);
seq__82598 = G__82817;
chunk__82600 = G__82818;
count__82601 = G__82819;
i__82602 = G__82820;
continue;
} else {
var path = cljs.core.first(seq__82598__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__82649_82821 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__82652_82822 = null;
var count__82653_82823 = (0);
var i__82654_82824 = (0);
while(true){
if((i__82654_82824 < count__82653_82823)){
var node_82825 = chunk__82652_82822.cljs$core$IIndexed$_nth$arity$2(null,i__82654_82824);
var path_match_82826 = shadow.cljs.devtools.client.browser.match_paths(node_82825.getAttribute("href"),path);
if(cljs.core.truth_(path_match_82826)){
var new_link_82827 = (function (){var G__82659 = node_82825.cloneNode(true);
G__82659.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_82826),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__82659;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_82826], 0));

goog.dom.insertSiblingAfter(new_link_82827,node_82825);

goog.dom.removeNode(node_82825);


var G__82828 = seq__82649_82821;
var G__82829 = chunk__82652_82822;
var G__82830 = count__82653_82823;
var G__82831 = (i__82654_82824 + (1));
seq__82649_82821 = G__82828;
chunk__82652_82822 = G__82829;
count__82653_82823 = G__82830;
i__82654_82824 = G__82831;
continue;
} else {
var G__82832 = seq__82649_82821;
var G__82833 = chunk__82652_82822;
var G__82834 = count__82653_82823;
var G__82835 = (i__82654_82824 + (1));
seq__82649_82821 = G__82832;
chunk__82652_82822 = G__82833;
count__82653_82823 = G__82834;
i__82654_82824 = G__82835;
continue;
}
} else {
var temp__5735__auto___82836__$1 = cljs.core.seq(seq__82649_82821);
if(temp__5735__auto___82836__$1){
var seq__82649_82837__$1 = temp__5735__auto___82836__$1;
if(cljs.core.chunked_seq_QMARK_(seq__82649_82837__$1)){
var c__4609__auto___82838 = cljs.core.chunk_first(seq__82649_82837__$1);
var G__82839 = cljs.core.chunk_rest(seq__82649_82837__$1);
var G__82840 = c__4609__auto___82838;
var G__82841 = cljs.core.count(c__4609__auto___82838);
var G__82842 = (0);
seq__82649_82821 = G__82839;
chunk__82652_82822 = G__82840;
count__82653_82823 = G__82841;
i__82654_82824 = G__82842;
continue;
} else {
var node_82843 = cljs.core.first(seq__82649_82837__$1);
var path_match_82844 = shadow.cljs.devtools.client.browser.match_paths(node_82843.getAttribute("href"),path);
if(cljs.core.truth_(path_match_82844)){
var new_link_82845 = (function (){var G__82660 = node_82843.cloneNode(true);
G__82660.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_82844),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__82660;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_82844], 0));

goog.dom.insertSiblingAfter(new_link_82845,node_82843);

goog.dom.removeNode(node_82843);


var G__82846 = cljs.core.next(seq__82649_82837__$1);
var G__82847 = null;
var G__82848 = (0);
var G__82849 = (0);
seq__82649_82821 = G__82846;
chunk__82652_82822 = G__82847;
count__82653_82823 = G__82848;
i__82654_82824 = G__82849;
continue;
} else {
var G__82850 = cljs.core.next(seq__82649_82837__$1);
var G__82851 = null;
var G__82852 = (0);
var G__82853 = (0);
seq__82649_82821 = G__82850;
chunk__82652_82822 = G__82851;
count__82653_82823 = G__82852;
i__82654_82824 = G__82853;
continue;
}
}
} else {
}
}
break;
}


var G__82854 = cljs.core.next(seq__82598__$1);
var G__82855 = null;
var G__82856 = (0);
var G__82857 = (0);
seq__82598 = G__82854;
chunk__82600 = G__82855;
count__82601 = G__82856;
i__82602 = G__82857;
continue;
} else {
var G__82858 = cljs.core.next(seq__82598__$1);
var G__82859 = null;
var G__82860 = (0);
var G__82861 = (0);
seq__82598 = G__82858;
chunk__82600 = G__82859;
count__82601 = G__82860;
i__82602 = G__82861;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__82661){
var map__82662 = p__82661;
var map__82662__$1 = (((((!((map__82662 == null))))?(((((map__82662.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82662.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82662):map__82662);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82662__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82662__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__82664,done){
var map__82665 = p__82664;
var map__82665__$1 = (((((!((map__82665 == null))))?(((((map__82665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82665):map__82665);
var msg = map__82665__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82665__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82665__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82665__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82665__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__82667){
var map__82668 = p__82667;
var map__82668__$1 = (((((!((map__82668 == null))))?(((((map__82668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82668):map__82668);
var src = map__82668__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82668__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e82670){var e = e82670;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__82671,done){
var map__82672 = p__82671;
var map__82672__$1 = (((((!((map__82672 == null))))?(((((map__82672.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82672.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82672):map__82672);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82672__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82672__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__82674){
var map__82675 = p__82674;
var map__82675__$1 = (((((!((map__82675 == null))))?(((((map__82675.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82675.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82675):map__82675);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82675__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82675__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__82677,done){
var map__82678 = p__82677;
var map__82678__$1 = (((((!((map__82678 == null))))?(((((map__82678.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__82678.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__82678):map__82678);
var msg = map__82678__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82678__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__82680_82870 = type;
var G__82680_82871__$1 = (((G__82680_82870 instanceof cljs.core.Keyword))?G__82680_82870.fqn:null);
switch (G__82680_82871__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__82681 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__82682 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__82683 = "POST";
var G__82684 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__82685 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__82681,G__82682,G__82683,G__82684,G__82685);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__82687 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__82686 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__82686.cljs$core$IFn$_invoke$arity$1 ? fexpr__82686.cljs$core$IFn$_invoke$arity$1(G__82687) : fexpr__82686.call(null,G__82687));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e82692){var e = e82692;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___82890 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___82890)){
var s_82892 = temp__5735__auto___82890;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_82892.onclose = (function (e){
return null;
}));

s_82892.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
