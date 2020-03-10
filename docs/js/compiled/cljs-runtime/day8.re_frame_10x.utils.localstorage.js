goog.provide('day8.re_frame_10x.utils.localstorage');
goog.require('cljs.core');
goog.require('goog.storage.Storage');
goog.require('goog.storage.mechanism.HTML5LocalStorage');
goog.require('cljs.reader');
goog.require('clojure.string');
day8.re_frame_10x.utils.localstorage.storage = (new goog.storage.Storage((new goog.storage.mechanism.HTML5LocalStorage())));
day8.re_frame_10x.utils.localstorage.safe_prefix = "day8.re-frame-10x.";
day8.re_frame_10x.utils.localstorage.safe_key = (function day8$re_frame_10x$utils$localstorage$safe_key(key){

return [day8.re_frame_10x.utils.localstorage.safe_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('');
});
/**
 * Gets a re-frame-10x value from local storage.
 */
day8.re_frame_10x.utils.localstorage.get = (function day8$re_frame_10x$utils$localstorage$get(var_args){
var G__48397 = arguments.length;
switch (G__48397) {
case 1:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$1 = (function (key){
return day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2(key,null);
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$core$IFn$_invoke$arity$2 = (function (key,not_found){
var value = day8.re_frame_10x.utils.localstorage.storage.get(day8.re_frame_10x.utils.localstorage.safe_key(key));
if((void 0 === value)){
return not_found;
} else {
return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(value);
}
}));

(day8.re_frame_10x.utils.localstorage.get.cljs$lang$maxFixedArity = 2);

/**
 * Saves a re-frame-10x value to local storage.
 */
day8.re_frame_10x.utils.localstorage.save_BANG_ = (function day8$re_frame_10x$utils$localstorage$save_BANG_(key,value){
return day8.re_frame_10x.utils.localstorage.storage.set(day8.re_frame_10x.utils.localstorage.safe_key(key),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value], 0)));
});
/**
 * Deletes all re-frame-10x config keys
 */
day8.re_frame_10x.utils.localstorage.delete_all_keys_BANG_ = (function day8$re_frame_10x$utils$localstorage$delete_all_keys_BANG_(){
var seq__48414 = cljs.core.seq(Object.keys(localStorage));
var chunk__48415 = null;
var count__48416 = (0);
var i__48417 = (0);
while(true){
if((i__48417 < count__48416)){
var k = chunk__48415.cljs$core$IIndexed$_nth$arity$2(null,i__48417);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__48448 = seq__48414;
var G__48449 = chunk__48415;
var G__48450 = count__48416;
var G__48451 = (i__48417 + (1));
seq__48414 = G__48448;
chunk__48415 = G__48449;
count__48416 = G__48450;
i__48417 = G__48451;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__48414);
if(temp__5735__auto__){
var seq__48414__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__48414__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__48414__$1);
var G__48456 = cljs.core.chunk_rest(seq__48414__$1);
var G__48457 = c__4609__auto__;
var G__48458 = cljs.core.count(c__4609__auto__);
var G__48459 = (0);
seq__48414 = G__48456;
chunk__48415 = G__48457;
count__48416 = G__48458;
i__48417 = G__48459;
continue;
} else {
var k = cljs.core.first(seq__48414__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__48460 = cljs.core.next(seq__48414__$1);
var G__48461 = null;
var G__48462 = (0);
var G__48463 = (0);
seq__48414 = G__48460;
chunk__48415 = G__48461;
count__48416 = G__48462;
i__48417 = G__48463;
continue;
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=day8.re_frame_10x.utils.localstorage.js.map
