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
var len__4789__auto___49901 = arguments.length;
var i__4790__auto___49902 = (0);
while(true){
if((i__4790__auto___49902 < len__4789__auto___49901)){
args__4795__auto__.push((arguments[i__4790__auto___49902]));

var G__49903 = (i__4790__auto___49902 + (1));
i__4790__auto___49902 = G__49903;
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
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq49703){
var G__49704 = cljs.core.first(seq49703);
var seq49703__$1 = cljs.core.next(seq49703);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49704,seq49703__$1);
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
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__49715){
var map__49716 = p__49715;
var map__49716__$1 = (((((!((map__49716 == null))))?(((((map__49716.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49716.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49716):map__49716);
var src = map__49716__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49716__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49716__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
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
var seq__49718 = cljs.core.seq(sources);
var chunk__49719 = null;
var count__49720 = (0);
var i__49721 = (0);
while(true){
if((i__49721 < count__49720)){
var map__49733 = chunk__49719.cljs$core$IIndexed$_nth$arity$2(null,i__49721);
var map__49733__$1 = (((((!((map__49733 == null))))?(((((map__49733.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49733.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49733):map__49733);
var src = map__49733__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49733__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49733__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49733__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49733__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e49735){var e_49906 = e49735;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49906);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49906.message)].join('')));
}

var G__49907 = seq__49718;
var G__49908 = chunk__49719;
var G__49909 = count__49720;
var G__49910 = (i__49721 + (1));
seq__49718 = G__49907;
chunk__49719 = G__49908;
count__49720 = G__49909;
i__49721 = G__49910;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49718);
if(temp__5735__auto__){
var seq__49718__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49718__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49718__$1);
var G__49911 = cljs.core.chunk_rest(seq__49718__$1);
var G__49912 = c__4609__auto__;
var G__49913 = cljs.core.count(c__4609__auto__);
var G__49914 = (0);
seq__49718 = G__49911;
chunk__49719 = G__49912;
count__49720 = G__49913;
i__49721 = G__49914;
continue;
} else {
var map__49736 = cljs.core.first(seq__49718__$1);
var map__49736__$1 = (((((!((map__49736 == null))))?(((((map__49736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49736.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49736):map__49736);
var src = map__49736__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49736__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49736__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49736__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49736__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e49738){var e_49916 = e49738;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_49916);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_49916.message)].join('')));
}

var G__49917 = cljs.core.next(seq__49718__$1);
var G__49918 = null;
var G__49919 = (0);
var G__49920 = (0);
seq__49718 = G__49917;
chunk__49719 = G__49918;
count__49720 = G__49919;
i__49721 = G__49920;
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
var seq__49739 = cljs.core.seq(js_requires);
var chunk__49740 = null;
var count__49741 = (0);
var i__49742 = (0);
while(true){
if((i__49742 < count__49741)){
var js_ns = chunk__49740.cljs$core$IIndexed$_nth$arity$2(null,i__49742);
var require_str_49921 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49921);


var G__49922 = seq__49739;
var G__49923 = chunk__49740;
var G__49924 = count__49741;
var G__49925 = (i__49742 + (1));
seq__49739 = G__49922;
chunk__49740 = G__49923;
count__49741 = G__49924;
i__49742 = G__49925;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49739);
if(temp__5735__auto__){
var seq__49739__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49739__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49739__$1);
var G__49926 = cljs.core.chunk_rest(seq__49739__$1);
var G__49927 = c__4609__auto__;
var G__49928 = cljs.core.count(c__4609__auto__);
var G__49929 = (0);
seq__49739 = G__49926;
chunk__49740 = G__49927;
count__49741 = G__49928;
i__49742 = G__49929;
continue;
} else {
var js_ns = cljs.core.first(seq__49739__$1);
var require_str_49930 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_49930);


var G__49931 = cljs.core.next(seq__49739__$1);
var G__49932 = null;
var G__49933 = (0);
var G__49934 = (0);
seq__49739 = G__49931;
chunk__49740 = G__49932;
count__49741 = G__49933;
i__49742 = G__49934;
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
var G__49743 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__49743) : callback.call(null,G__49743));
} else {
var G__49744 = shadow.cljs.devtools.client.env.files_url();
var G__49745 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__49746 = "POST";
var G__49747 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__49748 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__49744,G__49745,G__49746,G__49747,G__49748);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__49750){
var map__49751 = p__49750;
var map__49751__$1 = (((((!((map__49751 == null))))?(((((map__49751.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49751.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49751):map__49751);
var msg = map__49751__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49751__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49751__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__49753 = info;
var map__49753__$1 = (((((!((map__49753 == null))))?(((((map__49753.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49753.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49753):map__49753);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49753__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49753__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49755(s__49756){
return (new cljs.core.LazySeq(null,(function (){
var s__49756__$1 = s__49756;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__49756__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__49761 = cljs.core.first(xs__6292__auto__);
var map__49761__$1 = (((((!((map__49761 == null))))?(((((map__49761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49761):map__49761);
var src = map__49761__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49761__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49761__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__49756__$1,map__49761,map__49761__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49753,map__49753__$1,sources,compiled,map__49751,map__49751__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49755_$_iter__49757(s__49758){
return (new cljs.core.LazySeq(null,((function (s__49756__$1,map__49761,map__49761__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49753,map__49753__$1,sources,compiled,map__49751,map__49751__$1,msg,info,reload_info){
return (function (){
var s__49758__$1 = s__49758;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__49758__$1);
if(temp__5735__auto____$1){
var s__49758__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__49758__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__49758__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__49760 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__49759 = (0);
while(true){
if((i__49759 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__49759);
cljs.core.chunk_append(b__49760,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__49937 = (i__49759 + (1));
i__49759 = G__49937;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49760),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49755_$_iter__49757(cljs.core.chunk_rest(s__49758__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49760),null);
}
} else {
var warning = cljs.core.first(s__49758__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49755_$_iter__49757(cljs.core.rest(s__49758__$2)));
}
} else {
return null;
}
break;
}
});})(s__49756__$1,map__49761,map__49761__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49753,map__49753__$1,sources,compiled,map__49751,map__49751__$1,msg,info,reload_info))
,null,null));
});})(s__49756__$1,map__49761,map__49761__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__49753,map__49753__$1,sources,compiled,map__49751,map__49751__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__49755(cljs.core.rest(s__49756__$1)));
} else {
var G__49938 = cljs.core.rest(s__49756__$1);
s__49756__$1 = G__49938;
continue;
}
} else {
var G__49939 = cljs.core.rest(s__49756__$1);
s__49756__$1 = G__49939;
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
var seq__49764_49940 = cljs.core.seq(warnings);
var chunk__49765_49941 = null;
var count__49766_49942 = (0);
var i__49767_49943 = (0);
while(true){
if((i__49767_49943 < count__49766_49942)){
var map__49772_49945 = chunk__49765_49941.cljs$core$IIndexed$_nth$arity$2(null,i__49767_49943);
var map__49772_49946__$1 = (((((!((map__49772_49945 == null))))?(((((map__49772_49945.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49772_49945.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49772_49945):map__49772_49945);
var w_49947 = map__49772_49946__$1;
var msg_49948__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49772_49946__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49949 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49772_49946__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49950 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49772_49946__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49951 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49772_49946__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49951)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49949),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49950),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49948__$1)].join(''));


var G__49952 = seq__49764_49940;
var G__49953 = chunk__49765_49941;
var G__49954 = count__49766_49942;
var G__49955 = (i__49767_49943 + (1));
seq__49764_49940 = G__49952;
chunk__49765_49941 = G__49953;
count__49766_49942 = G__49954;
i__49767_49943 = G__49955;
continue;
} else {
var temp__5735__auto___49956 = cljs.core.seq(seq__49764_49940);
if(temp__5735__auto___49956){
var seq__49764_49957__$1 = temp__5735__auto___49956;
if(cljs.core.chunked_seq_QMARK_(seq__49764_49957__$1)){
var c__4609__auto___49958 = cljs.core.chunk_first(seq__49764_49957__$1);
var G__49959 = cljs.core.chunk_rest(seq__49764_49957__$1);
var G__49960 = c__4609__auto___49958;
var G__49961 = cljs.core.count(c__4609__auto___49958);
var G__49962 = (0);
seq__49764_49940 = G__49959;
chunk__49765_49941 = G__49960;
count__49766_49942 = G__49961;
i__49767_49943 = G__49962;
continue;
} else {
var map__49774_49963 = cljs.core.first(seq__49764_49957__$1);
var map__49774_49964__$1 = (((((!((map__49774_49963 == null))))?(((((map__49774_49963.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49774_49963.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49774_49963):map__49774_49963);
var w_49965 = map__49774_49964__$1;
var msg_49966__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49774_49964__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_49967 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49774_49964__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_49968 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49774_49964__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_49969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49774_49964__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_49969)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_49967),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_49968),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_49966__$1)].join(''));


var G__49971 = cljs.core.next(seq__49764_49957__$1);
var G__49972 = null;
var G__49973 = (0);
var G__49974 = (0);
seq__49764_49940 = G__49971;
chunk__49765_49941 = G__49972;
count__49766_49942 = G__49973;
i__49767_49943 = G__49974;
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
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__49777){
var map__49779 = p__49777;
var map__49779__$1 = (((((!((map__49779 == null))))?(((((map__49779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49779.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49779):map__49779);
var src = map__49779__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49779__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49779__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__49781){
var map__49782 = p__49781;
var map__49782__$1 = (((((!((map__49782 == null))))?(((((map__49782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49782.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49782):map__49782);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49782__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__49784){
var map__49785 = p__49784;
var map__49785__$1 = (((((!((map__49785 == null))))?(((((map__49785.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49785.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49785):map__49785);
var rc = map__49785__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49785__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__49749_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__49749_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
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
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__49789){
var map__49790 = p__49789;
var map__49790__$1 = (((((!((map__49790 == null))))?(((((map__49790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49790.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49790):map__49790);
var msg = map__49790__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49790__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__49792 = cljs.core.seq(updates);
var chunk__49794 = null;
var count__49795 = (0);
var i__49796 = (0);
while(true){
if((i__49796 < count__49795)){
var path = chunk__49794.cljs$core$IIndexed$_nth$arity$2(null,i__49796);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49829_49977 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49832_49978 = null;
var count__49833_49979 = (0);
var i__49834_49980 = (0);
while(true){
if((i__49834_49980 < count__49833_49979)){
var node_49981 = chunk__49832_49978.cljs$core$IIndexed$_nth$arity$2(null,i__49834_49980);
var path_match_49982 = shadow.cljs.devtools.client.browser.match_paths(node_49981.getAttribute("href"),path);
if(cljs.core.truth_(path_match_49982)){
var new_link_49984 = (function (){var G__49840 = node_49981.cloneNode(true);
G__49840.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_49982),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49840;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_49982], 0));

goog.dom.insertSiblingAfter(new_link_49984,node_49981);

goog.dom.removeNode(node_49981);


var G__49985 = seq__49829_49977;
var G__49986 = chunk__49832_49978;
var G__49987 = count__49833_49979;
var G__49988 = (i__49834_49980 + (1));
seq__49829_49977 = G__49985;
chunk__49832_49978 = G__49986;
count__49833_49979 = G__49987;
i__49834_49980 = G__49988;
continue;
} else {
var G__49989 = seq__49829_49977;
var G__49990 = chunk__49832_49978;
var G__49991 = count__49833_49979;
var G__49992 = (i__49834_49980 + (1));
seq__49829_49977 = G__49989;
chunk__49832_49978 = G__49990;
count__49833_49979 = G__49991;
i__49834_49980 = G__49992;
continue;
}
} else {
var temp__5735__auto___49993 = cljs.core.seq(seq__49829_49977);
if(temp__5735__auto___49993){
var seq__49829_49994__$1 = temp__5735__auto___49993;
if(cljs.core.chunked_seq_QMARK_(seq__49829_49994__$1)){
var c__4609__auto___49995 = cljs.core.chunk_first(seq__49829_49994__$1);
var G__49996 = cljs.core.chunk_rest(seq__49829_49994__$1);
var G__49997 = c__4609__auto___49995;
var G__49998 = cljs.core.count(c__4609__auto___49995);
var G__49999 = (0);
seq__49829_49977 = G__49996;
chunk__49832_49978 = G__49997;
count__49833_49979 = G__49998;
i__49834_49980 = G__49999;
continue;
} else {
var node_50000 = cljs.core.first(seq__49829_49994__$1);
var path_match_50001 = shadow.cljs.devtools.client.browser.match_paths(node_50000.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50001)){
var new_link_50002 = (function (){var G__49841 = node_50000.cloneNode(true);
G__49841.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50001),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49841;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50001], 0));

goog.dom.insertSiblingAfter(new_link_50002,node_50000);

goog.dom.removeNode(node_50000);


var G__50004 = cljs.core.next(seq__49829_49994__$1);
var G__50005 = null;
var G__50006 = (0);
var G__50007 = (0);
seq__49829_49977 = G__50004;
chunk__49832_49978 = G__50005;
count__49833_49979 = G__50006;
i__49834_49980 = G__50007;
continue;
} else {
var G__50008 = cljs.core.next(seq__49829_49994__$1);
var G__50009 = null;
var G__50010 = (0);
var G__50011 = (0);
seq__49829_49977 = G__50008;
chunk__49832_49978 = G__50009;
count__49833_49979 = G__50010;
i__49834_49980 = G__50011;
continue;
}
}
} else {
}
}
break;
}


var G__50012 = seq__49792;
var G__50013 = chunk__49794;
var G__50014 = count__49795;
var G__50015 = (i__49796 + (1));
seq__49792 = G__50012;
chunk__49794 = G__50013;
count__49795 = G__50014;
i__49796 = G__50015;
continue;
} else {
var G__50016 = seq__49792;
var G__50017 = chunk__49794;
var G__50018 = count__49795;
var G__50019 = (i__49796 + (1));
seq__49792 = G__50016;
chunk__49794 = G__50017;
count__49795 = G__50018;
i__49796 = G__50019;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__49792);
if(temp__5735__auto__){
var seq__49792__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__49792__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__49792__$1);
var G__50020 = cljs.core.chunk_rest(seq__49792__$1);
var G__50021 = c__4609__auto__;
var G__50022 = cljs.core.count(c__4609__auto__);
var G__50023 = (0);
seq__49792 = G__50020;
chunk__49794 = G__50021;
count__49795 = G__50022;
i__49796 = G__50023;
continue;
} else {
var path = cljs.core.first(seq__49792__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__49842_50030 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__49845_50031 = null;
var count__49846_50032 = (0);
var i__49847_50033 = (0);
while(true){
if((i__49847_50033 < count__49846_50032)){
var node_50034 = chunk__49845_50031.cljs$core$IIndexed$_nth$arity$2(null,i__49847_50033);
var path_match_50035 = shadow.cljs.devtools.client.browser.match_paths(node_50034.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50035)){
var new_link_50036 = (function (){var G__49853 = node_50034.cloneNode(true);
G__49853.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50035),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49853;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50035], 0));

goog.dom.insertSiblingAfter(new_link_50036,node_50034);

goog.dom.removeNode(node_50034);


var G__50037 = seq__49842_50030;
var G__50038 = chunk__49845_50031;
var G__50039 = count__49846_50032;
var G__50040 = (i__49847_50033 + (1));
seq__49842_50030 = G__50037;
chunk__49845_50031 = G__50038;
count__49846_50032 = G__50039;
i__49847_50033 = G__50040;
continue;
} else {
var G__50041 = seq__49842_50030;
var G__50042 = chunk__49845_50031;
var G__50043 = count__49846_50032;
var G__50044 = (i__49847_50033 + (1));
seq__49842_50030 = G__50041;
chunk__49845_50031 = G__50042;
count__49846_50032 = G__50043;
i__49847_50033 = G__50044;
continue;
}
} else {
var temp__5735__auto___50045__$1 = cljs.core.seq(seq__49842_50030);
if(temp__5735__auto___50045__$1){
var seq__49842_50046__$1 = temp__5735__auto___50045__$1;
if(cljs.core.chunked_seq_QMARK_(seq__49842_50046__$1)){
var c__4609__auto___50047 = cljs.core.chunk_first(seq__49842_50046__$1);
var G__50048 = cljs.core.chunk_rest(seq__49842_50046__$1);
var G__50049 = c__4609__auto___50047;
var G__50050 = cljs.core.count(c__4609__auto___50047);
var G__50051 = (0);
seq__49842_50030 = G__50048;
chunk__49845_50031 = G__50049;
count__49846_50032 = G__50050;
i__49847_50033 = G__50051;
continue;
} else {
var node_50052 = cljs.core.first(seq__49842_50046__$1);
var path_match_50053 = shadow.cljs.devtools.client.browser.match_paths(node_50052.getAttribute("href"),path);
if(cljs.core.truth_(path_match_50053)){
var new_link_50054 = (function (){var G__49855 = node_50052.cloneNode(true);
G__49855.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_50053),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__49855;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_50053], 0));

goog.dom.insertSiblingAfter(new_link_50054,node_50052);

goog.dom.removeNode(node_50052);


var G__50055 = cljs.core.next(seq__49842_50046__$1);
var G__50056 = null;
var G__50057 = (0);
var G__50058 = (0);
seq__49842_50030 = G__50055;
chunk__49845_50031 = G__50056;
count__49846_50032 = G__50057;
i__49847_50033 = G__50058;
continue;
} else {
var G__50059 = cljs.core.next(seq__49842_50046__$1);
var G__50060 = null;
var G__50061 = (0);
var G__50062 = (0);
seq__49842_50030 = G__50059;
chunk__49845_50031 = G__50060;
count__49846_50032 = G__50061;
i__49847_50033 = G__50062;
continue;
}
}
} else {
}
}
break;
}


var G__50063 = cljs.core.next(seq__49792__$1);
var G__50064 = null;
var G__50065 = (0);
var G__50066 = (0);
seq__49792 = G__50063;
chunk__49794 = G__50064;
count__49795 = G__50065;
i__49796 = G__50066;
continue;
} else {
var G__50067 = cljs.core.next(seq__49792__$1);
var G__50068 = null;
var G__50069 = (0);
var G__50070 = (0);
seq__49792 = G__50067;
chunk__49794 = G__50068;
count__49795 = G__50069;
i__49796 = G__50070;
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
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__49857){
var map__49858 = p__49857;
var map__49858__$1 = (((((!((map__49858 == null))))?(((((map__49858.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49858.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49858):map__49858);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49858__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49858__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__49861,done){
var map__49862 = p__49861;
var map__49862__$1 = (((((!((map__49862 == null))))?(((((map__49862.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49862.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49862):map__49862);
var msg = map__49862__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49862__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49862__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49862__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49862__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__49864){
var map__49866 = p__49864;
var map__49866__$1 = (((((!((map__49866 == null))))?(((((map__49866.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49866.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49866):map__49866);
var src = map__49866__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49866__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
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
}catch (e49868){var e = e49868;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__49870,done){
var map__49871 = p__49870;
var map__49871__$1 = (((((!((map__49871 == null))))?(((((map__49871.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49871.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49871):map__49871);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49871__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49871__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__49873){
var map__49874 = p__49873;
var map__49874__$1 = (((((!((map__49874 == null))))?(((((map__49874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49874.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49874):map__49874);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49874__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49874__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__49877,done){
var map__49878 = p__49877;
var map__49878__$1 = (((((!((map__49878 == null))))?(((((map__49878.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__49878.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__49878):map__49878);
var msg = map__49878__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49878__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__49880_50074 = type;
var G__49880_50075__$1 = (((G__49880_50074 instanceof cljs.core.Keyword))?G__49880_50074.fqn:null);
switch (G__49880_50075__$1) {
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
var G__49882 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__49883 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__49884 = "POST";
var G__49885 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__49886 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__49882,G__49883,G__49884,G__49885,G__49886);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__49889 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__49888 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__49888.cljs$core$IFn$_invoke$arity$1 ? fexpr__49888.cljs$core$IFn$_invoke$arity$1(G__49889) : fexpr__49888.call(null,G__49889));
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
}catch (e49898){var e = e49898;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___50080 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___50080)){
var s_50081 = temp__5735__auto___50080;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_50081.onclose = (function (e){
return null;
}));

s_50081.close();

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
