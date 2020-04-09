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
var G__77508 = arguments.length;
switch (G__77508) {
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
var seq__77509 = cljs.core.seq(Object.keys(localStorage));
var chunk__77510 = null;
var count__77511 = (0);
var i__77512 = (0);
while(true){
if((i__77512 < count__77511)){
var k = chunk__77510.cljs$core$IIndexed$_nth$arity$2(null,i__77512);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__77514 = seq__77509;
var G__77515 = chunk__77510;
var G__77516 = count__77511;
var G__77517 = (i__77512 + (1));
seq__77509 = G__77514;
chunk__77510 = G__77515;
count__77511 = G__77516;
i__77512 = G__77517;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__77509);
if(temp__5735__auto__){
var seq__77509__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__77509__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__77509__$1);
var G__77518 = cljs.core.chunk_rest(seq__77509__$1);
var G__77519 = c__4609__auto__;
var G__77520 = cljs.core.count(c__4609__auto__);
var G__77521 = (0);
seq__77509 = G__77518;
chunk__77510 = G__77519;
count__77511 = G__77520;
i__77512 = G__77521;
continue;
} else {
var k = cljs.core.first(seq__77509__$1);
if(clojure.string.starts_with_QMARK_(k,day8.re_frame_10x.utils.localstorage.safe_prefix)){
day8.re_frame_10x.utils.localstorage.storage.remove(k);
} else {
}


var G__77522 = cljs.core.next(seq__77509__$1);
var G__77523 = null;
var G__77524 = (0);
var G__77525 = (0);
seq__77509 = G__77522;
chunk__77510 = G__77523;
count__77511 = G__77524;
i__77512 = G__77525;
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
