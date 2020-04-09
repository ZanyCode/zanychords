goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__78887 = arguments.length;
switch (G__78887) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async78893 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async78893 = (function (f,blockable,meta78894){
this.f = f;
this.blockable = blockable;
this.meta78894 = meta78894;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async78893.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_78895,meta78894__$1){
var self__ = this;
var _78895__$1 = this;
return (new cljs.core.async.t_cljs$core$async78893(self__.f,self__.blockable,meta78894__$1));
}));

(cljs.core.async.t_cljs$core$async78893.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_78895){
var self__ = this;
var _78895__$1 = this;
return self__.meta78894;
}));

(cljs.core.async.t_cljs$core$async78893.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async78893.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async78893.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async78893.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async78893.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta78894","meta78894",-1537565900,null)], null);
}));

(cljs.core.async.t_cljs$core$async78893.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async78893.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async78893");

(cljs.core.async.t_cljs$core$async78893.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async78893");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async78893.
 */
cljs.core.async.__GT_t_cljs$core$async78893 = (function cljs$core$async$__GT_t_cljs$core$async78893(f__$1,blockable__$1,meta78894){
return (new cljs.core.async.t_cljs$core$async78893(f__$1,blockable__$1,meta78894));
});

}

return (new cljs.core.async.t_cljs$core$async78893(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__78903 = arguments.length;
switch (G__78903) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__78905 = arguments.length;
switch (G__78905) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__78907 = arguments.length;
switch (G__78907) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_80338 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_80338) : fn1.call(null,val_80338));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_80338) : fn1.call(null,val_80338));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__78909 = arguments.length;
switch (G__78909) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___80341 = n;
var x_80342 = (0);
while(true){
if((x_80342 < n__4666__auto___80341)){
(a[x_80342] = x_80342);

var G__80343 = (x_80342 + (1));
x_80342 = G__80343;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async78910 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async78910 = (function (flag,meta78911){
this.flag = flag;
this.meta78911 = meta78911;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async78910.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_78912,meta78911__$1){
var self__ = this;
var _78912__$1 = this;
return (new cljs.core.async.t_cljs$core$async78910(self__.flag,meta78911__$1));
}));

(cljs.core.async.t_cljs$core$async78910.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_78912){
var self__ = this;
var _78912__$1 = this;
return self__.meta78911;
}));

(cljs.core.async.t_cljs$core$async78910.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async78910.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async78910.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async78910.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async78910.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta78911","meta78911",51220966,null)], null);
}));

(cljs.core.async.t_cljs$core$async78910.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async78910.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async78910");

(cljs.core.async.t_cljs$core$async78910.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async78910");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async78910.
 */
cljs.core.async.__GT_t_cljs$core$async78910 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async78910(flag__$1,meta78911){
return (new cljs.core.async.t_cljs$core$async78910(flag__$1,meta78911));
});

}

return (new cljs.core.async.t_cljs$core$async78910(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async78913 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async78913 = (function (flag,cb,meta78914){
this.flag = flag;
this.cb = cb;
this.meta78914 = meta78914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async78913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_78915,meta78914__$1){
var self__ = this;
var _78915__$1 = this;
return (new cljs.core.async.t_cljs$core$async78913(self__.flag,self__.cb,meta78914__$1));
}));

(cljs.core.async.t_cljs$core$async78913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_78915){
var self__ = this;
var _78915__$1 = this;
return self__.meta78914;
}));

(cljs.core.async.t_cljs$core$async78913.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async78913.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async78913.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async78913.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async78913.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta78914","meta78914",-1704211637,null)], null);
}));

(cljs.core.async.t_cljs$core$async78913.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async78913.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async78913");

(cljs.core.async.t_cljs$core$async78913.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async78913");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async78913.
 */
cljs.core.async.__GT_t_cljs$core$async78913 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async78913(flag__$1,cb__$1,meta78914){
return (new cljs.core.async.t_cljs$core$async78913(flag__$1,cb__$1,meta78914));
});

}

return (new cljs.core.async.t_cljs$core$async78913(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__78916_SHARP_){
var G__78918 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__78916_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__78918) : fret.call(null,G__78918));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__78917_SHARP_){
var G__78919 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__78917_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__78919) : fret.call(null,G__78919));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__80355 = (i + (1));
i = G__80355;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___80356 = arguments.length;
var i__4790__auto___80357 = (0);
while(true){
if((i__4790__auto___80357 < len__4789__auto___80356)){
args__4795__auto__.push((arguments[i__4790__auto___80357]));

var G__80358 = (i__4790__auto___80357 + (1));
i__4790__auto___80357 = G__80358;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__78922){
var map__78923 = p__78922;
var map__78923__$1 = (((((!((map__78923 == null))))?(((((map__78923.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__78923.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__78923):map__78923);
var opts = map__78923__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq78920){
var G__78921 = cljs.core.first(seq78920);
var seq78920__$1 = cljs.core.next(seq78920);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__78921,seq78920__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__78926 = arguments.length;
switch (G__78926) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__41748__auto___80360 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41749__auto__ = (function (){var switch__41725__auto__ = (function (state_78950){
var state_val_78951 = (state_78950[(1)]);
if((state_val_78951 === (7))){
var inst_78946 = (state_78950[(2)]);
var state_78950__$1 = state_78950;
var statearr_78952_80361 = state_78950__$1;
(statearr_78952_80361[(2)] = inst_78946);

(statearr_78952_80361[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78951 === (1))){
var state_78950__$1 = state_78950;
var statearr_78953_80362 = state_78950__$1;
(statearr_78953_80362[(2)] = null);

(statearr_78953_80362[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78951 === (4))){
var inst_78929 = (state_78950[(7)]);
var inst_78929__$1 = (state_78950[(2)]);
var inst_78930 = (inst_78929__$1 == null);
var state_78950__$1 = (function (){var statearr_78954 = state_78950;
(statearr_78954[(7)] = inst_78929__$1);

return statearr_78954;
})();
if(cljs.core.truth_(inst_78930)){
var statearr_78955_80364 = state_78950__$1;
(statearr_78955_80364[(1)] = (5));

} else {
var statearr_78956_80365 = state_78950__$1;
(statearr_78956_80365[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78951 === (13))){
var state_78950__$1 = state_78950;
var statearr_78957_80369 = state_78950__$1;
(statearr_78957_80369[(2)] = null);

(statearr_78957_80369[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78951 === (6))){
var inst_78929 = (state_78950[(7)]);
var state_78950__$1 = state_78950;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_78950__$1,(11),to,inst_78929);
} else {
if((state_val_78951 === (3))){
var inst_78948 = (state_78950[(2)]);
var state_78950__$1 = state_78950;
return cljs.core.async.impl.ioc_helpers.return_chan(state_78950__$1,inst_78948);
} else {
if((state_val_78951 === (12))){
var state_78950__$1 = state_78950;
var statearr_78958_80371 = state_78950__$1;
(statearr_78958_80371[(2)] = null);

(statearr_78958_80371[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78951 === (2))){
var state_78950__$1 = state_78950;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_78950__$1,(4),from);
} else {
if((state_val_78951 === (11))){
var inst_78939 = (state_78950[(2)]);
var state_78950__$1 = state_78950;
if(cljs.core.truth_(inst_78939)){
var statearr_78959_80373 = state_78950__$1;
(statearr_78959_80373[(1)] = (12));

} else {
var statearr_78960_80374 = state_78950__$1;
(statearr_78960_80374[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78951 === (9))){
var state_78950__$1 = state_78950;
var statearr_78961_80375 = state_78950__$1;
(statearr_78961_80375[(2)] = null);

(statearr_78961_80375[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78951 === (5))){
var state_78950__$1 = state_78950;
if(cljs.core.truth_(close_QMARK_)){
var statearr_78962_80377 = state_78950__$1;
(statearr_78962_80377[(1)] = (8));

} else {
var statearr_78963_80378 = state_78950__$1;
(statearr_78963_80378[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78951 === (14))){
var inst_78944 = (state_78950[(2)]);
var state_78950__$1 = state_78950;
var statearr_78964_80379 = state_78950__$1;
(statearr_78964_80379[(2)] = inst_78944);

(statearr_78964_80379[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78951 === (10))){
var inst_78936 = (state_78950[(2)]);
var state_78950__$1 = state_78950;
var statearr_78965_80380 = state_78950__$1;
(statearr_78965_80380[(2)] = inst_78936);

(statearr_78965_80380[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_78951 === (8))){
var inst_78933 = cljs.core.async.close_BANG_(to);
var state_78950__$1 = state_78950;
var statearr_78966_80382 = state_78950__$1;
(statearr_78966_80382[(2)] = inst_78933);

(statearr_78966_80382[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41726__auto__ = null;
var cljs$core$async$state_machine__41726__auto____0 = (function (){
var statearr_78967 = [null,null,null,null,null,null,null,null];
(statearr_78967[(0)] = cljs$core$async$state_machine__41726__auto__);

(statearr_78967[(1)] = (1));

return statearr_78967;
});
var cljs$core$async$state_machine__41726__auto____1 = (function (state_78950){
while(true){
var ret_value__41727__auto__ = (function (){try{while(true){
var result__41728__auto__ = switch__41725__auto__(state_78950);
if(cljs.core.keyword_identical_QMARK_(result__41728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41728__auto__;
}
break;
}
}catch (e78968){if((e78968 instanceof Object)){
var ex__41729__auto__ = e78968;
var statearr_78969_80385 = state_78950;
(statearr_78969_80385[(5)] = ex__41729__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_78950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78968;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80386 = state_78950;
state_78950 = G__80386;
continue;
} else {
return ret_value__41727__auto__;
}
break;
}
});
cljs$core$async$state_machine__41726__auto__ = function(state_78950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41726__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41726__auto____1.call(this,state_78950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41726__auto____0;
cljs$core$async$state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41726__auto____1;
return cljs$core$async$state_machine__41726__auto__;
})()
})();
var state__41750__auto__ = (function (){var statearr_78970 = (f__41749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41749__auto__.cljs$core$IFn$_invoke$arity$0() : f__41749__auto__.call(null));
(statearr_78970[(6)] = c__41748__auto___80360);

return statearr_78970;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41750__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__78971){
var vec__78972 = p__78971;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78972,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78972,(1),null);
var job = vec__78972;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__41748__auto___80391 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41749__auto__ = (function (){var switch__41725__auto__ = (function (state_78979){
var state_val_78980 = (state_78979[(1)]);
if((state_val_78980 === (1))){
var state_78979__$1 = state_78979;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_78979__$1,(2),res,v);
} else {
if((state_val_78980 === (2))){
var inst_78976 = (state_78979[(2)]);
var inst_78977 = cljs.core.async.close_BANG_(res);
var state_78979__$1 = (function (){var statearr_78981 = state_78979;
(statearr_78981[(7)] = inst_78976);

return statearr_78981;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_78979__$1,inst_78977);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41726__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41726__auto____0 = (function (){
var statearr_78982 = [null,null,null,null,null,null,null,null];
(statearr_78982[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41726__auto__);

(statearr_78982[(1)] = (1));

return statearr_78982;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41726__auto____1 = (function (state_78979){
while(true){
var ret_value__41727__auto__ = (function (){try{while(true){
var result__41728__auto__ = switch__41725__auto__(state_78979);
if(cljs.core.keyword_identical_QMARK_(result__41728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41728__auto__;
}
break;
}
}catch (e78983){if((e78983 instanceof Object)){
var ex__41729__auto__ = e78983;
var statearr_78984_80396 = state_78979;
(statearr_78984_80396[(5)] = ex__41729__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_78979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e78983;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80397 = state_78979;
state_78979 = G__80397;
continue;
} else {
return ret_value__41727__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41726__auto__ = function(state_78979){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41726__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41726__auto____1.call(this,state_78979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41726__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41726__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41726__auto__;
})()
})();
var state__41750__auto__ = (function (){var statearr_78985 = (f__41749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41749__auto__.cljs$core$IFn$_invoke$arity$0() : f__41749__auto__.call(null));
(statearr_78985[(6)] = c__41748__auto___80391);

return statearr_78985;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41750__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__78986){
var vec__78987 = p__78986;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78987,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78987,(1),null);
var job = vec__78987;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___80403 = n;
var __80404 = (0);
while(true){
if((__80404 < n__4666__auto___80403)){
var G__78990_80405 = type;
var G__78990_80406__$1 = (((G__78990_80405 instanceof cljs.core.Keyword))?G__78990_80405.fqn:null);
switch (G__78990_80406__$1) {
case "compute":
var c__41748__auto___80408 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__80404,c__41748__auto___80408,G__78990_80405,G__78990_80406__$1,n__4666__auto___80403,jobs,results,process,async){
return (function (){
var f__41749__auto__ = (function (){var switch__41725__auto__ = ((function (__80404,c__41748__auto___80408,G__78990_80405,G__78990_80406__$1,n__4666__auto___80403,jobs,results,process,async){
return (function (state_79003){
var state_val_79004 = (state_79003[(1)]);
if((state_val_79004 === (1))){
var state_79003__$1 = state_79003;
var statearr_79005_80409 = state_79003__$1;
(statearr_79005_80409[(2)] = null);

(statearr_79005_80409[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79004 === (2))){
var state_79003__$1 = state_79003;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79003__$1,(4),jobs);
} else {
if((state_val_79004 === (3))){
var inst_79001 = (state_79003[(2)]);
var state_79003__$1 = state_79003;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79003__$1,inst_79001);
} else {
if((state_val_79004 === (4))){
var inst_78993 = (state_79003[(2)]);
var inst_78994 = process(inst_78993);
var state_79003__$1 = state_79003;
if(cljs.core.truth_(inst_78994)){
var statearr_79006_80410 = state_79003__$1;
(statearr_79006_80410[(1)] = (5));

} else {
var statearr_79007_80411 = state_79003__$1;
(statearr_79007_80411[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79004 === (5))){
var state_79003__$1 = state_79003;
var statearr_79008_80412 = state_79003__$1;
(statearr_79008_80412[(2)] = null);

(statearr_79008_80412[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79004 === (6))){
var state_79003__$1 = state_79003;
var statearr_79009_80413 = state_79003__$1;
(statearr_79009_80413[(2)] = null);

(statearr_79009_80413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79004 === (7))){
var inst_78999 = (state_79003[(2)]);
var state_79003__$1 = state_79003;
var statearr_79010_80415 = state_79003__$1;
(statearr_79010_80415[(2)] = inst_78999);

(statearr_79010_80415[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__80404,c__41748__auto___80408,G__78990_80405,G__78990_80406__$1,n__4666__auto___80403,jobs,results,process,async))
;
return ((function (__80404,switch__41725__auto__,c__41748__auto___80408,G__78990_80405,G__78990_80406__$1,n__4666__auto___80403,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41726__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41726__auto____0 = (function (){
var statearr_79011 = [null,null,null,null,null,null,null];
(statearr_79011[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41726__auto__);

(statearr_79011[(1)] = (1));

return statearr_79011;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41726__auto____1 = (function (state_79003){
while(true){
var ret_value__41727__auto__ = (function (){try{while(true){
var result__41728__auto__ = switch__41725__auto__(state_79003);
if(cljs.core.keyword_identical_QMARK_(result__41728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41728__auto__;
}
break;
}
}catch (e79012){if((e79012 instanceof Object)){
var ex__41729__auto__ = e79012;
var statearr_79013_80419 = state_79003;
(statearr_79013_80419[(5)] = ex__41729__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_79003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79012;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80420 = state_79003;
state_79003 = G__80420;
continue;
} else {
return ret_value__41727__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41726__auto__ = function(state_79003){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41726__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41726__auto____1.call(this,state_79003);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41726__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41726__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41726__auto__;
})()
;})(__80404,switch__41725__auto__,c__41748__auto___80408,G__78990_80405,G__78990_80406__$1,n__4666__auto___80403,jobs,results,process,async))
})();
var state__41750__auto__ = (function (){var statearr_79014 = (f__41749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41749__auto__.cljs$core$IFn$_invoke$arity$0() : f__41749__auto__.call(null));
(statearr_79014[(6)] = c__41748__auto___80408);

return statearr_79014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41750__auto__);
});})(__80404,c__41748__auto___80408,G__78990_80405,G__78990_80406__$1,n__4666__auto___80403,jobs,results,process,async))
);


break;
case "async":
var c__41748__auto___80423 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__80404,c__41748__auto___80423,G__78990_80405,G__78990_80406__$1,n__4666__auto___80403,jobs,results,process,async){
return (function (){
var f__41749__auto__ = (function (){var switch__41725__auto__ = ((function (__80404,c__41748__auto___80423,G__78990_80405,G__78990_80406__$1,n__4666__auto___80403,jobs,results,process,async){
return (function (state_79027){
var state_val_79028 = (state_79027[(1)]);
if((state_val_79028 === (1))){
var state_79027__$1 = state_79027;
var statearr_79029_80426 = state_79027__$1;
(statearr_79029_80426[(2)] = null);

(statearr_79029_80426[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79028 === (2))){
var state_79027__$1 = state_79027;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79027__$1,(4),jobs);
} else {
if((state_val_79028 === (3))){
var inst_79025 = (state_79027[(2)]);
var state_79027__$1 = state_79027;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79027__$1,inst_79025);
} else {
if((state_val_79028 === (4))){
var inst_79017 = (state_79027[(2)]);
var inst_79018 = async(inst_79017);
var state_79027__$1 = state_79027;
if(cljs.core.truth_(inst_79018)){
var statearr_79030_80429 = state_79027__$1;
(statearr_79030_80429[(1)] = (5));

} else {
var statearr_79031_80430 = state_79027__$1;
(statearr_79031_80430[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79028 === (5))){
var state_79027__$1 = state_79027;
var statearr_79032_80431 = state_79027__$1;
(statearr_79032_80431[(2)] = null);

(statearr_79032_80431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79028 === (6))){
var state_79027__$1 = state_79027;
var statearr_79033_80433 = state_79027__$1;
(statearr_79033_80433[(2)] = null);

(statearr_79033_80433[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79028 === (7))){
var inst_79023 = (state_79027[(2)]);
var state_79027__$1 = state_79027;
var statearr_79034_80434 = state_79027__$1;
(statearr_79034_80434[(2)] = inst_79023);

(statearr_79034_80434[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__80404,c__41748__auto___80423,G__78990_80405,G__78990_80406__$1,n__4666__auto___80403,jobs,results,process,async))
;
return ((function (__80404,switch__41725__auto__,c__41748__auto___80423,G__78990_80405,G__78990_80406__$1,n__4666__auto___80403,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41726__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41726__auto____0 = (function (){
var statearr_79035 = [null,null,null,null,null,null,null];
(statearr_79035[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41726__auto__);

(statearr_79035[(1)] = (1));

return statearr_79035;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41726__auto____1 = (function (state_79027){
while(true){
var ret_value__41727__auto__ = (function (){try{while(true){
var result__41728__auto__ = switch__41725__auto__(state_79027);
if(cljs.core.keyword_identical_QMARK_(result__41728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41728__auto__;
}
break;
}
}catch (e79036){if((e79036 instanceof Object)){
var ex__41729__auto__ = e79036;
var statearr_79037_80436 = state_79027;
(statearr_79037_80436[(5)] = ex__41729__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_79027);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79036;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80439 = state_79027;
state_79027 = G__80439;
continue;
} else {
return ret_value__41727__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41726__auto__ = function(state_79027){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41726__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41726__auto____1.call(this,state_79027);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41726__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41726__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41726__auto__;
})()
;})(__80404,switch__41725__auto__,c__41748__auto___80423,G__78990_80405,G__78990_80406__$1,n__4666__auto___80403,jobs,results,process,async))
})();
var state__41750__auto__ = (function (){var statearr_79038 = (f__41749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41749__auto__.cljs$core$IFn$_invoke$arity$0() : f__41749__auto__.call(null));
(statearr_79038[(6)] = c__41748__auto___80423);

return statearr_79038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41750__auto__);
});})(__80404,c__41748__auto___80423,G__78990_80405,G__78990_80406__$1,n__4666__auto___80403,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78990_80406__$1)].join('')));

}

var G__80440 = (__80404 + (1));
__80404 = G__80440;
continue;
} else {
}
break;
}

var c__41748__auto___80441 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41749__auto__ = (function (){var switch__41725__auto__ = (function (state_79060){
var state_val_79061 = (state_79060[(1)]);
if((state_val_79061 === (7))){
var inst_79056 = (state_79060[(2)]);
var state_79060__$1 = state_79060;
var statearr_79062_80442 = state_79060__$1;
(statearr_79062_80442[(2)] = inst_79056);

(statearr_79062_80442[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79061 === (1))){
var state_79060__$1 = state_79060;
var statearr_79063_80443 = state_79060__$1;
(statearr_79063_80443[(2)] = null);

(statearr_79063_80443[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79061 === (4))){
var inst_79041 = (state_79060[(7)]);
var inst_79041__$1 = (state_79060[(2)]);
var inst_79042 = (inst_79041__$1 == null);
var state_79060__$1 = (function (){var statearr_79064 = state_79060;
(statearr_79064[(7)] = inst_79041__$1);

return statearr_79064;
})();
if(cljs.core.truth_(inst_79042)){
var statearr_79065_80445 = state_79060__$1;
(statearr_79065_80445[(1)] = (5));

} else {
var statearr_79066_80446 = state_79060__$1;
(statearr_79066_80446[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79061 === (6))){
var inst_79041 = (state_79060[(7)]);
var inst_79046 = (state_79060[(8)]);
var inst_79046__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_79047 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_79048 = [inst_79041,inst_79046__$1];
var inst_79049 = (new cljs.core.PersistentVector(null,2,(5),inst_79047,inst_79048,null));
var state_79060__$1 = (function (){var statearr_79067 = state_79060;
(statearr_79067[(8)] = inst_79046__$1);

return statearr_79067;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79060__$1,(8),jobs,inst_79049);
} else {
if((state_val_79061 === (3))){
var inst_79058 = (state_79060[(2)]);
var state_79060__$1 = state_79060;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79060__$1,inst_79058);
} else {
if((state_val_79061 === (2))){
var state_79060__$1 = state_79060;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79060__$1,(4),from);
} else {
if((state_val_79061 === (9))){
var inst_79053 = (state_79060[(2)]);
var state_79060__$1 = (function (){var statearr_79068 = state_79060;
(statearr_79068[(9)] = inst_79053);

return statearr_79068;
})();
var statearr_79069_80447 = state_79060__$1;
(statearr_79069_80447[(2)] = null);

(statearr_79069_80447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79061 === (5))){
var inst_79044 = cljs.core.async.close_BANG_(jobs);
var state_79060__$1 = state_79060;
var statearr_79070_80452 = state_79060__$1;
(statearr_79070_80452[(2)] = inst_79044);

(statearr_79070_80452[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79061 === (8))){
var inst_79046 = (state_79060[(8)]);
var inst_79051 = (state_79060[(2)]);
var state_79060__$1 = (function (){var statearr_79071 = state_79060;
(statearr_79071[(10)] = inst_79051);

return statearr_79071;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79060__$1,(9),results,inst_79046);
} else {
return null;
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41726__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41726__auto____0 = (function (){
var statearr_79072 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_79072[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41726__auto__);

(statearr_79072[(1)] = (1));

return statearr_79072;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41726__auto____1 = (function (state_79060){
while(true){
var ret_value__41727__auto__ = (function (){try{while(true){
var result__41728__auto__ = switch__41725__auto__(state_79060);
if(cljs.core.keyword_identical_QMARK_(result__41728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41728__auto__;
}
break;
}
}catch (e79073){if((e79073 instanceof Object)){
var ex__41729__auto__ = e79073;
var statearr_79074_80456 = state_79060;
(statearr_79074_80456[(5)] = ex__41729__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_79060);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79073;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80457 = state_79060;
state_79060 = G__80457;
continue;
} else {
return ret_value__41727__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41726__auto__ = function(state_79060){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41726__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41726__auto____1.call(this,state_79060);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41726__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41726__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41726__auto__;
})()
})();
var state__41750__auto__ = (function (){var statearr_79075 = (f__41749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41749__auto__.cljs$core$IFn$_invoke$arity$0() : f__41749__auto__.call(null));
(statearr_79075[(6)] = c__41748__auto___80441);

return statearr_79075;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41750__auto__);
}));


var c__41748__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41749__auto__ = (function (){var switch__41725__auto__ = (function (state_79113){
var state_val_79114 = (state_79113[(1)]);
if((state_val_79114 === (7))){
var inst_79109 = (state_79113[(2)]);
var state_79113__$1 = state_79113;
var statearr_79115_80461 = state_79113__$1;
(statearr_79115_80461[(2)] = inst_79109);

(statearr_79115_80461[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79114 === (20))){
var state_79113__$1 = state_79113;
var statearr_79116_80462 = state_79113__$1;
(statearr_79116_80462[(2)] = null);

(statearr_79116_80462[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79114 === (1))){
var state_79113__$1 = state_79113;
var statearr_79117_80466 = state_79113__$1;
(statearr_79117_80466[(2)] = null);

(statearr_79117_80466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79114 === (4))){
var inst_79078 = (state_79113[(7)]);
var inst_79078__$1 = (state_79113[(2)]);
var inst_79079 = (inst_79078__$1 == null);
var state_79113__$1 = (function (){var statearr_79118 = state_79113;
(statearr_79118[(7)] = inst_79078__$1);

return statearr_79118;
})();
if(cljs.core.truth_(inst_79079)){
var statearr_79119_80467 = state_79113__$1;
(statearr_79119_80467[(1)] = (5));

} else {
var statearr_79120_80468 = state_79113__$1;
(statearr_79120_80468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79114 === (15))){
var inst_79091 = (state_79113[(8)]);
var state_79113__$1 = state_79113;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79113__$1,(18),to,inst_79091);
} else {
if((state_val_79114 === (21))){
var inst_79104 = (state_79113[(2)]);
var state_79113__$1 = state_79113;
var statearr_79121_80472 = state_79113__$1;
(statearr_79121_80472[(2)] = inst_79104);

(statearr_79121_80472[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79114 === (13))){
var inst_79106 = (state_79113[(2)]);
var state_79113__$1 = (function (){var statearr_79122 = state_79113;
(statearr_79122[(9)] = inst_79106);

return statearr_79122;
})();
var statearr_79123_80473 = state_79113__$1;
(statearr_79123_80473[(2)] = null);

(statearr_79123_80473[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79114 === (6))){
var inst_79078 = (state_79113[(7)]);
var state_79113__$1 = state_79113;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79113__$1,(11),inst_79078);
} else {
if((state_val_79114 === (17))){
var inst_79099 = (state_79113[(2)]);
var state_79113__$1 = state_79113;
if(cljs.core.truth_(inst_79099)){
var statearr_79124_80476 = state_79113__$1;
(statearr_79124_80476[(1)] = (19));

} else {
var statearr_79125_80477 = state_79113__$1;
(statearr_79125_80477[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79114 === (3))){
var inst_79111 = (state_79113[(2)]);
var state_79113__$1 = state_79113;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79113__$1,inst_79111);
} else {
if((state_val_79114 === (12))){
var inst_79088 = (state_79113[(10)]);
var state_79113__$1 = state_79113;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79113__$1,(14),inst_79088);
} else {
if((state_val_79114 === (2))){
var state_79113__$1 = state_79113;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79113__$1,(4),results);
} else {
if((state_val_79114 === (19))){
var state_79113__$1 = state_79113;
var statearr_79126_80478 = state_79113__$1;
(statearr_79126_80478[(2)] = null);

(statearr_79126_80478[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79114 === (11))){
var inst_79088 = (state_79113[(2)]);
var state_79113__$1 = (function (){var statearr_79127 = state_79113;
(statearr_79127[(10)] = inst_79088);

return statearr_79127;
})();
var statearr_79128_80479 = state_79113__$1;
(statearr_79128_80479[(2)] = null);

(statearr_79128_80479[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79114 === (9))){
var state_79113__$1 = state_79113;
var statearr_79129_80480 = state_79113__$1;
(statearr_79129_80480[(2)] = null);

(statearr_79129_80480[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79114 === (5))){
var state_79113__$1 = state_79113;
if(cljs.core.truth_(close_QMARK_)){
var statearr_79130_80484 = state_79113__$1;
(statearr_79130_80484[(1)] = (8));

} else {
var statearr_79131_80485 = state_79113__$1;
(statearr_79131_80485[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79114 === (14))){
var inst_79091 = (state_79113[(8)]);
var inst_79091__$1 = (state_79113[(2)]);
var inst_79092 = (inst_79091__$1 == null);
var inst_79093 = cljs.core.not(inst_79092);
var state_79113__$1 = (function (){var statearr_79132 = state_79113;
(statearr_79132[(8)] = inst_79091__$1);

return statearr_79132;
})();
if(inst_79093){
var statearr_79133_80486 = state_79113__$1;
(statearr_79133_80486[(1)] = (15));

} else {
var statearr_79134_80487 = state_79113__$1;
(statearr_79134_80487[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79114 === (16))){
var state_79113__$1 = state_79113;
var statearr_79135_80491 = state_79113__$1;
(statearr_79135_80491[(2)] = false);

(statearr_79135_80491[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79114 === (10))){
var inst_79085 = (state_79113[(2)]);
var state_79113__$1 = state_79113;
var statearr_79136_80492 = state_79113__$1;
(statearr_79136_80492[(2)] = inst_79085);

(statearr_79136_80492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79114 === (18))){
var inst_79096 = (state_79113[(2)]);
var state_79113__$1 = state_79113;
var statearr_79137_80497 = state_79113__$1;
(statearr_79137_80497[(2)] = inst_79096);

(statearr_79137_80497[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79114 === (8))){
var inst_79082 = cljs.core.async.close_BANG_(to);
var state_79113__$1 = state_79113;
var statearr_79138_80501 = state_79113__$1;
(statearr_79138_80501[(2)] = inst_79082);

(statearr_79138_80501[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__41726__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__41726__auto____0 = (function (){
var statearr_79139 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_79139[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__41726__auto__);

(statearr_79139[(1)] = (1));

return statearr_79139;
});
var cljs$core$async$pipeline_STAR__$_state_machine__41726__auto____1 = (function (state_79113){
while(true){
var ret_value__41727__auto__ = (function (){try{while(true){
var result__41728__auto__ = switch__41725__auto__(state_79113);
if(cljs.core.keyword_identical_QMARK_(result__41728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41728__auto__;
}
break;
}
}catch (e79140){if((e79140 instanceof Object)){
var ex__41729__auto__ = e79140;
var statearr_79141_80508 = state_79113;
(statearr_79141_80508[(5)] = ex__41729__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_79113);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79140;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80509 = state_79113;
state_79113 = G__80509;
continue;
} else {
return ret_value__41727__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__41726__auto__ = function(state_79113){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__41726__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__41726__auto____1.call(this,state_79113);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__41726__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__41726__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__41726__auto__;
})()
})();
var state__41750__auto__ = (function (){var statearr_79142 = (f__41749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41749__auto__.cljs$core$IFn$_invoke$arity$0() : f__41749__auto__.call(null));
(statearr_79142[(6)] = c__41748__auto__);

return statearr_79142;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41750__auto__);
}));

return c__41748__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__79144 = arguments.length;
switch (G__79144) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__79146 = arguments.length;
switch (G__79146) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__79148 = arguments.length;
switch (G__79148) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__41748__auto___80544 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41749__auto__ = (function (){var switch__41725__auto__ = (function (state_79174){
var state_val_79175 = (state_79174[(1)]);
if((state_val_79175 === (7))){
var inst_79170 = (state_79174[(2)]);
var state_79174__$1 = state_79174;
var statearr_79176_80545 = state_79174__$1;
(statearr_79176_80545[(2)] = inst_79170);

(statearr_79176_80545[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79175 === (1))){
var state_79174__$1 = state_79174;
var statearr_79177_80546 = state_79174__$1;
(statearr_79177_80546[(2)] = null);

(statearr_79177_80546[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79175 === (4))){
var inst_79151 = (state_79174[(7)]);
var inst_79151__$1 = (state_79174[(2)]);
var inst_79152 = (inst_79151__$1 == null);
var state_79174__$1 = (function (){var statearr_79178 = state_79174;
(statearr_79178[(7)] = inst_79151__$1);

return statearr_79178;
})();
if(cljs.core.truth_(inst_79152)){
var statearr_79179_80547 = state_79174__$1;
(statearr_79179_80547[(1)] = (5));

} else {
var statearr_79180_80548 = state_79174__$1;
(statearr_79180_80548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79175 === (13))){
var state_79174__$1 = state_79174;
var statearr_79181_80549 = state_79174__$1;
(statearr_79181_80549[(2)] = null);

(statearr_79181_80549[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79175 === (6))){
var inst_79151 = (state_79174[(7)]);
var inst_79157 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_79151) : p.call(null,inst_79151));
var state_79174__$1 = state_79174;
if(cljs.core.truth_(inst_79157)){
var statearr_79182_80550 = state_79174__$1;
(statearr_79182_80550[(1)] = (9));

} else {
var statearr_79183_80552 = state_79174__$1;
(statearr_79183_80552[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79175 === (3))){
var inst_79172 = (state_79174[(2)]);
var state_79174__$1 = state_79174;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79174__$1,inst_79172);
} else {
if((state_val_79175 === (12))){
var state_79174__$1 = state_79174;
var statearr_79184_80553 = state_79174__$1;
(statearr_79184_80553[(2)] = null);

(statearr_79184_80553[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79175 === (2))){
var state_79174__$1 = state_79174;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79174__$1,(4),ch);
} else {
if((state_val_79175 === (11))){
var inst_79151 = (state_79174[(7)]);
var inst_79161 = (state_79174[(2)]);
var state_79174__$1 = state_79174;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79174__$1,(8),inst_79161,inst_79151);
} else {
if((state_val_79175 === (9))){
var state_79174__$1 = state_79174;
var statearr_79185_80554 = state_79174__$1;
(statearr_79185_80554[(2)] = tc);

(statearr_79185_80554[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79175 === (5))){
var inst_79154 = cljs.core.async.close_BANG_(tc);
var inst_79155 = cljs.core.async.close_BANG_(fc);
var state_79174__$1 = (function (){var statearr_79186 = state_79174;
(statearr_79186[(8)] = inst_79154);

return statearr_79186;
})();
var statearr_79187_80555 = state_79174__$1;
(statearr_79187_80555[(2)] = inst_79155);

(statearr_79187_80555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79175 === (14))){
var inst_79168 = (state_79174[(2)]);
var state_79174__$1 = state_79174;
var statearr_79188_80556 = state_79174__$1;
(statearr_79188_80556[(2)] = inst_79168);

(statearr_79188_80556[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79175 === (10))){
var state_79174__$1 = state_79174;
var statearr_79189_80557 = state_79174__$1;
(statearr_79189_80557[(2)] = fc);

(statearr_79189_80557[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79175 === (8))){
var inst_79163 = (state_79174[(2)]);
var state_79174__$1 = state_79174;
if(cljs.core.truth_(inst_79163)){
var statearr_79190_80558 = state_79174__$1;
(statearr_79190_80558[(1)] = (12));

} else {
var statearr_79191_80559 = state_79174__$1;
(statearr_79191_80559[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41726__auto__ = null;
var cljs$core$async$state_machine__41726__auto____0 = (function (){
var statearr_79192 = [null,null,null,null,null,null,null,null,null];
(statearr_79192[(0)] = cljs$core$async$state_machine__41726__auto__);

(statearr_79192[(1)] = (1));

return statearr_79192;
});
var cljs$core$async$state_machine__41726__auto____1 = (function (state_79174){
while(true){
var ret_value__41727__auto__ = (function (){try{while(true){
var result__41728__auto__ = switch__41725__auto__(state_79174);
if(cljs.core.keyword_identical_QMARK_(result__41728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41728__auto__;
}
break;
}
}catch (e79193){if((e79193 instanceof Object)){
var ex__41729__auto__ = e79193;
var statearr_79194_80560 = state_79174;
(statearr_79194_80560[(5)] = ex__41729__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_79174);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79193;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80561 = state_79174;
state_79174 = G__80561;
continue;
} else {
return ret_value__41727__auto__;
}
break;
}
});
cljs$core$async$state_machine__41726__auto__ = function(state_79174){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41726__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41726__auto____1.call(this,state_79174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41726__auto____0;
cljs$core$async$state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41726__auto____1;
return cljs$core$async$state_machine__41726__auto__;
})()
})();
var state__41750__auto__ = (function (){var statearr_79195 = (f__41749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41749__auto__.cljs$core$IFn$_invoke$arity$0() : f__41749__auto__.call(null));
(statearr_79195[(6)] = c__41748__auto___80544);

return statearr_79195;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41750__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__41748__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41749__auto__ = (function (){var switch__41725__auto__ = (function (state_79216){
var state_val_79217 = (state_79216[(1)]);
if((state_val_79217 === (7))){
var inst_79212 = (state_79216[(2)]);
var state_79216__$1 = state_79216;
var statearr_79218_80564 = state_79216__$1;
(statearr_79218_80564[(2)] = inst_79212);

(statearr_79218_80564[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79217 === (1))){
var inst_79196 = init;
var state_79216__$1 = (function (){var statearr_79219 = state_79216;
(statearr_79219[(7)] = inst_79196);

return statearr_79219;
})();
var statearr_79220_80565 = state_79216__$1;
(statearr_79220_80565[(2)] = null);

(statearr_79220_80565[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79217 === (4))){
var inst_79199 = (state_79216[(8)]);
var inst_79199__$1 = (state_79216[(2)]);
var inst_79200 = (inst_79199__$1 == null);
var state_79216__$1 = (function (){var statearr_79221 = state_79216;
(statearr_79221[(8)] = inst_79199__$1);

return statearr_79221;
})();
if(cljs.core.truth_(inst_79200)){
var statearr_79222_80566 = state_79216__$1;
(statearr_79222_80566[(1)] = (5));

} else {
var statearr_79223_80567 = state_79216__$1;
(statearr_79223_80567[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79217 === (6))){
var inst_79196 = (state_79216[(7)]);
var inst_79199 = (state_79216[(8)]);
var inst_79203 = (state_79216[(9)]);
var inst_79203__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_79196,inst_79199) : f.call(null,inst_79196,inst_79199));
var inst_79204 = cljs.core.reduced_QMARK_(inst_79203__$1);
var state_79216__$1 = (function (){var statearr_79224 = state_79216;
(statearr_79224[(9)] = inst_79203__$1);

return statearr_79224;
})();
if(inst_79204){
var statearr_79225_80568 = state_79216__$1;
(statearr_79225_80568[(1)] = (8));

} else {
var statearr_79226_80569 = state_79216__$1;
(statearr_79226_80569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79217 === (3))){
var inst_79214 = (state_79216[(2)]);
var state_79216__$1 = state_79216;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79216__$1,inst_79214);
} else {
if((state_val_79217 === (2))){
var state_79216__$1 = state_79216;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79216__$1,(4),ch);
} else {
if((state_val_79217 === (9))){
var inst_79203 = (state_79216[(9)]);
var inst_79196 = inst_79203;
var state_79216__$1 = (function (){var statearr_79227 = state_79216;
(statearr_79227[(7)] = inst_79196);

return statearr_79227;
})();
var statearr_79228_80570 = state_79216__$1;
(statearr_79228_80570[(2)] = null);

(statearr_79228_80570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79217 === (5))){
var inst_79196 = (state_79216[(7)]);
var state_79216__$1 = state_79216;
var statearr_79229_80574 = state_79216__$1;
(statearr_79229_80574[(2)] = inst_79196);

(statearr_79229_80574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79217 === (10))){
var inst_79210 = (state_79216[(2)]);
var state_79216__$1 = state_79216;
var statearr_79230_80575 = state_79216__$1;
(statearr_79230_80575[(2)] = inst_79210);

(statearr_79230_80575[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79217 === (8))){
var inst_79203 = (state_79216[(9)]);
var inst_79206 = cljs.core.deref(inst_79203);
var state_79216__$1 = state_79216;
var statearr_79231_80579 = state_79216__$1;
(statearr_79231_80579[(2)] = inst_79206);

(statearr_79231_80579[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$reduce_$_state_machine__41726__auto__ = null;
var cljs$core$async$reduce_$_state_machine__41726__auto____0 = (function (){
var statearr_79232 = [null,null,null,null,null,null,null,null,null,null];
(statearr_79232[(0)] = cljs$core$async$reduce_$_state_machine__41726__auto__);

(statearr_79232[(1)] = (1));

return statearr_79232;
});
var cljs$core$async$reduce_$_state_machine__41726__auto____1 = (function (state_79216){
while(true){
var ret_value__41727__auto__ = (function (){try{while(true){
var result__41728__auto__ = switch__41725__auto__(state_79216);
if(cljs.core.keyword_identical_QMARK_(result__41728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41728__auto__;
}
break;
}
}catch (e79233){if((e79233 instanceof Object)){
var ex__41729__auto__ = e79233;
var statearr_79234_80581 = state_79216;
(statearr_79234_80581[(5)] = ex__41729__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_79216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79233;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80582 = state_79216;
state_79216 = G__80582;
continue;
} else {
return ret_value__41727__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__41726__auto__ = function(state_79216){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__41726__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__41726__auto____1.call(this,state_79216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__41726__auto____0;
cljs$core$async$reduce_$_state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__41726__auto____1;
return cljs$core$async$reduce_$_state_machine__41726__auto__;
})()
})();
var state__41750__auto__ = (function (){var statearr_79235 = (f__41749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41749__auto__.cljs$core$IFn$_invoke$arity$0() : f__41749__auto__.call(null));
(statearr_79235[(6)] = c__41748__auto__);

return statearr_79235;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41750__auto__);
}));

return c__41748__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__41748__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41749__auto__ = (function (){var switch__41725__auto__ = (function (state_79241){
var state_val_79242 = (state_79241[(1)]);
if((state_val_79242 === (1))){
var inst_79236 = cljs.core.async.reduce(f__$1,init,ch);
var state_79241__$1 = state_79241;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79241__$1,(2),inst_79236);
} else {
if((state_val_79242 === (2))){
var inst_79238 = (state_79241[(2)]);
var inst_79239 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_79238) : f__$1.call(null,inst_79238));
var state_79241__$1 = state_79241;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79241__$1,inst_79239);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__41726__auto__ = null;
var cljs$core$async$transduce_$_state_machine__41726__auto____0 = (function (){
var statearr_79243 = [null,null,null,null,null,null,null];
(statearr_79243[(0)] = cljs$core$async$transduce_$_state_machine__41726__auto__);

(statearr_79243[(1)] = (1));

return statearr_79243;
});
var cljs$core$async$transduce_$_state_machine__41726__auto____1 = (function (state_79241){
while(true){
var ret_value__41727__auto__ = (function (){try{while(true){
var result__41728__auto__ = switch__41725__auto__(state_79241);
if(cljs.core.keyword_identical_QMARK_(result__41728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41728__auto__;
}
break;
}
}catch (e79244){if((e79244 instanceof Object)){
var ex__41729__auto__ = e79244;
var statearr_79245_80585 = state_79241;
(statearr_79245_80585[(5)] = ex__41729__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_79241);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79244;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80586 = state_79241;
state_79241 = G__80586;
continue;
} else {
return ret_value__41727__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__41726__auto__ = function(state_79241){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__41726__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__41726__auto____1.call(this,state_79241);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__41726__auto____0;
cljs$core$async$transduce_$_state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__41726__auto____1;
return cljs$core$async$transduce_$_state_machine__41726__auto__;
})()
})();
var state__41750__auto__ = (function (){var statearr_79246 = (f__41749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41749__auto__.cljs$core$IFn$_invoke$arity$0() : f__41749__auto__.call(null));
(statearr_79246[(6)] = c__41748__auto__);

return statearr_79246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41750__auto__);
}));

return c__41748__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__79248 = arguments.length;
switch (G__79248) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__41748__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41749__auto__ = (function (){var switch__41725__auto__ = (function (state_79273){
var state_val_79274 = (state_79273[(1)]);
if((state_val_79274 === (7))){
var inst_79255 = (state_79273[(2)]);
var state_79273__$1 = state_79273;
var statearr_79275_80596 = state_79273__$1;
(statearr_79275_80596[(2)] = inst_79255);

(statearr_79275_80596[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79274 === (1))){
var inst_79249 = cljs.core.seq(coll);
var inst_79250 = inst_79249;
var state_79273__$1 = (function (){var statearr_79276 = state_79273;
(statearr_79276[(7)] = inst_79250);

return statearr_79276;
})();
var statearr_79277_80597 = state_79273__$1;
(statearr_79277_80597[(2)] = null);

(statearr_79277_80597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79274 === (4))){
var inst_79250 = (state_79273[(7)]);
var inst_79253 = cljs.core.first(inst_79250);
var state_79273__$1 = state_79273;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79273__$1,(7),ch,inst_79253);
} else {
if((state_val_79274 === (13))){
var inst_79267 = (state_79273[(2)]);
var state_79273__$1 = state_79273;
var statearr_79278_80605 = state_79273__$1;
(statearr_79278_80605[(2)] = inst_79267);

(statearr_79278_80605[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79274 === (6))){
var inst_79258 = (state_79273[(2)]);
var state_79273__$1 = state_79273;
if(cljs.core.truth_(inst_79258)){
var statearr_79279_80612 = state_79273__$1;
(statearr_79279_80612[(1)] = (8));

} else {
var statearr_79280_80613 = state_79273__$1;
(statearr_79280_80613[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79274 === (3))){
var inst_79271 = (state_79273[(2)]);
var state_79273__$1 = state_79273;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79273__$1,inst_79271);
} else {
if((state_val_79274 === (12))){
var state_79273__$1 = state_79273;
var statearr_79281_80614 = state_79273__$1;
(statearr_79281_80614[(2)] = null);

(statearr_79281_80614[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79274 === (2))){
var inst_79250 = (state_79273[(7)]);
var state_79273__$1 = state_79273;
if(cljs.core.truth_(inst_79250)){
var statearr_79282_80615 = state_79273__$1;
(statearr_79282_80615[(1)] = (4));

} else {
var statearr_79283_80616 = state_79273__$1;
(statearr_79283_80616[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79274 === (11))){
var inst_79264 = cljs.core.async.close_BANG_(ch);
var state_79273__$1 = state_79273;
var statearr_79284_80617 = state_79273__$1;
(statearr_79284_80617[(2)] = inst_79264);

(statearr_79284_80617[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79274 === (9))){
var state_79273__$1 = state_79273;
if(cljs.core.truth_(close_QMARK_)){
var statearr_79285_80618 = state_79273__$1;
(statearr_79285_80618[(1)] = (11));

} else {
var statearr_79286_80619 = state_79273__$1;
(statearr_79286_80619[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79274 === (5))){
var inst_79250 = (state_79273[(7)]);
var state_79273__$1 = state_79273;
var statearr_79287_80620 = state_79273__$1;
(statearr_79287_80620[(2)] = inst_79250);

(statearr_79287_80620[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79274 === (10))){
var inst_79269 = (state_79273[(2)]);
var state_79273__$1 = state_79273;
var statearr_79288_80621 = state_79273__$1;
(statearr_79288_80621[(2)] = inst_79269);

(statearr_79288_80621[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79274 === (8))){
var inst_79250 = (state_79273[(7)]);
var inst_79260 = cljs.core.next(inst_79250);
var inst_79250__$1 = inst_79260;
var state_79273__$1 = (function (){var statearr_79289 = state_79273;
(statearr_79289[(7)] = inst_79250__$1);

return statearr_79289;
})();
var statearr_79290_80622 = state_79273__$1;
(statearr_79290_80622[(2)] = null);

(statearr_79290_80622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41726__auto__ = null;
var cljs$core$async$state_machine__41726__auto____0 = (function (){
var statearr_79291 = [null,null,null,null,null,null,null,null];
(statearr_79291[(0)] = cljs$core$async$state_machine__41726__auto__);

(statearr_79291[(1)] = (1));

return statearr_79291;
});
var cljs$core$async$state_machine__41726__auto____1 = (function (state_79273){
while(true){
var ret_value__41727__auto__ = (function (){try{while(true){
var result__41728__auto__ = switch__41725__auto__(state_79273);
if(cljs.core.keyword_identical_QMARK_(result__41728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41728__auto__;
}
break;
}
}catch (e79292){if((e79292 instanceof Object)){
var ex__41729__auto__ = e79292;
var statearr_79293_80629 = state_79273;
(statearr_79293_80629[(5)] = ex__41729__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_79273);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79292;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80630 = state_79273;
state_79273 = G__80630;
continue;
} else {
return ret_value__41727__auto__;
}
break;
}
});
cljs$core$async$state_machine__41726__auto__ = function(state_79273){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41726__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41726__auto____1.call(this,state_79273);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41726__auto____0;
cljs$core$async$state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41726__auto____1;
return cljs$core$async$state_machine__41726__auto__;
})()
})();
var state__41750__auto__ = (function (){var statearr_79294 = (f__41749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41749__auto__.cljs$core$IFn$_invoke$arity$0() : f__41749__auto__.call(null));
(statearr_79294[(6)] = c__41748__auto__);

return statearr_79294;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41750__auto__);
}));

return c__41748__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async79295 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79295 = (function (ch,cs,meta79296){
this.ch = ch;
this.cs = cs;
this.meta79296 = meta79296;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async79295.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79297,meta79296__$1){
var self__ = this;
var _79297__$1 = this;
return (new cljs.core.async.t_cljs$core$async79295(self__.ch,self__.cs,meta79296__$1));
}));

(cljs.core.async.t_cljs$core$async79295.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79297){
var self__ = this;
var _79297__$1 = this;
return self__.meta79296;
}));

(cljs.core.async.t_cljs$core$async79295.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79295.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async79295.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79295.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async79295.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async79295.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async79295.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta79296","meta79296",-603601619,null)], null);
}));

(cljs.core.async.t_cljs$core$async79295.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async79295.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79295");

(cljs.core.async.t_cljs$core$async79295.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async79295");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async79295.
 */
cljs.core.async.__GT_t_cljs$core$async79295 = (function cljs$core$async$mult_$___GT_t_cljs$core$async79295(ch__$1,cs__$1,meta79296){
return (new cljs.core.async.t_cljs$core$async79295(ch__$1,cs__$1,meta79296));
});

}

return (new cljs.core.async.t_cljs$core$async79295(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__41748__auto___80643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41749__auto__ = (function (){var switch__41725__auto__ = (function (state_79432){
var state_val_79433 = (state_79432[(1)]);
if((state_val_79433 === (7))){
var inst_79428 = (state_79432[(2)]);
var state_79432__$1 = state_79432;
var statearr_79434_80644 = state_79432__$1;
(statearr_79434_80644[(2)] = inst_79428);

(statearr_79434_80644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (20))){
var inst_79331 = (state_79432[(7)]);
var inst_79343 = cljs.core.first(inst_79331);
var inst_79344 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_79343,(0),null);
var inst_79345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_79343,(1),null);
var state_79432__$1 = (function (){var statearr_79435 = state_79432;
(statearr_79435[(8)] = inst_79344);

return statearr_79435;
})();
if(cljs.core.truth_(inst_79345)){
var statearr_79436_80645 = state_79432__$1;
(statearr_79436_80645[(1)] = (22));

} else {
var statearr_79437_80646 = state_79432__$1;
(statearr_79437_80646[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (27))){
var inst_79373 = (state_79432[(9)]);
var inst_79300 = (state_79432[(10)]);
var inst_79380 = (state_79432[(11)]);
var inst_79375 = (state_79432[(12)]);
var inst_79380__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_79373,inst_79375);
var inst_79381 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_79380__$1,inst_79300,done);
var state_79432__$1 = (function (){var statearr_79438 = state_79432;
(statearr_79438[(11)] = inst_79380__$1);

return statearr_79438;
})();
if(cljs.core.truth_(inst_79381)){
var statearr_79439_80647 = state_79432__$1;
(statearr_79439_80647[(1)] = (30));

} else {
var statearr_79440_80648 = state_79432__$1;
(statearr_79440_80648[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (1))){
var state_79432__$1 = state_79432;
var statearr_79441_80649 = state_79432__$1;
(statearr_79441_80649[(2)] = null);

(statearr_79441_80649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (24))){
var inst_79331 = (state_79432[(7)]);
var inst_79350 = (state_79432[(2)]);
var inst_79351 = cljs.core.next(inst_79331);
var inst_79309 = inst_79351;
var inst_79310 = null;
var inst_79311 = (0);
var inst_79312 = (0);
var state_79432__$1 = (function (){var statearr_79442 = state_79432;
(statearr_79442[(13)] = inst_79350);

(statearr_79442[(14)] = inst_79311);

(statearr_79442[(15)] = inst_79312);

(statearr_79442[(16)] = inst_79309);

(statearr_79442[(17)] = inst_79310);

return statearr_79442;
})();
var statearr_79443_80650 = state_79432__$1;
(statearr_79443_80650[(2)] = null);

(statearr_79443_80650[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (39))){
var state_79432__$1 = state_79432;
var statearr_79447_80651 = state_79432__$1;
(statearr_79447_80651[(2)] = null);

(statearr_79447_80651[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (4))){
var inst_79300 = (state_79432[(10)]);
var inst_79300__$1 = (state_79432[(2)]);
var inst_79301 = (inst_79300__$1 == null);
var state_79432__$1 = (function (){var statearr_79448 = state_79432;
(statearr_79448[(10)] = inst_79300__$1);

return statearr_79448;
})();
if(cljs.core.truth_(inst_79301)){
var statearr_79449_80652 = state_79432__$1;
(statearr_79449_80652[(1)] = (5));

} else {
var statearr_79450_80653 = state_79432__$1;
(statearr_79450_80653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (15))){
var inst_79311 = (state_79432[(14)]);
var inst_79312 = (state_79432[(15)]);
var inst_79309 = (state_79432[(16)]);
var inst_79310 = (state_79432[(17)]);
var inst_79327 = (state_79432[(2)]);
var inst_79328 = (inst_79312 + (1));
var tmp79444 = inst_79311;
var tmp79445 = inst_79309;
var tmp79446 = inst_79310;
var inst_79309__$1 = tmp79445;
var inst_79310__$1 = tmp79446;
var inst_79311__$1 = tmp79444;
var inst_79312__$1 = inst_79328;
var state_79432__$1 = (function (){var statearr_79451 = state_79432;
(statearr_79451[(18)] = inst_79327);

(statearr_79451[(14)] = inst_79311__$1);

(statearr_79451[(15)] = inst_79312__$1);

(statearr_79451[(16)] = inst_79309__$1);

(statearr_79451[(17)] = inst_79310__$1);

return statearr_79451;
})();
var statearr_79452_80655 = state_79432__$1;
(statearr_79452_80655[(2)] = null);

(statearr_79452_80655[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (21))){
var inst_79354 = (state_79432[(2)]);
var state_79432__$1 = state_79432;
var statearr_79456_80657 = state_79432__$1;
(statearr_79456_80657[(2)] = inst_79354);

(statearr_79456_80657[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (31))){
var inst_79380 = (state_79432[(11)]);
var inst_79384 = done(null);
var inst_79385 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_79380);
var state_79432__$1 = (function (){var statearr_79457 = state_79432;
(statearr_79457[(19)] = inst_79384);

return statearr_79457;
})();
var statearr_79458_80658 = state_79432__$1;
(statearr_79458_80658[(2)] = inst_79385);

(statearr_79458_80658[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (32))){
var inst_79372 = (state_79432[(20)]);
var inst_79373 = (state_79432[(9)]);
var inst_79374 = (state_79432[(21)]);
var inst_79375 = (state_79432[(12)]);
var inst_79387 = (state_79432[(2)]);
var inst_79388 = (inst_79375 + (1));
var tmp79453 = inst_79372;
var tmp79454 = inst_79373;
var tmp79455 = inst_79374;
var inst_79372__$1 = tmp79453;
var inst_79373__$1 = tmp79454;
var inst_79374__$1 = tmp79455;
var inst_79375__$1 = inst_79388;
var state_79432__$1 = (function (){var statearr_79459 = state_79432;
(statearr_79459[(20)] = inst_79372__$1);

(statearr_79459[(9)] = inst_79373__$1);

(statearr_79459[(21)] = inst_79374__$1);

(statearr_79459[(22)] = inst_79387);

(statearr_79459[(12)] = inst_79375__$1);

return statearr_79459;
})();
var statearr_79460_80663 = state_79432__$1;
(statearr_79460_80663[(2)] = null);

(statearr_79460_80663[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (40))){
var inst_79400 = (state_79432[(23)]);
var inst_79404 = done(null);
var inst_79405 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_79400);
var state_79432__$1 = (function (){var statearr_79461 = state_79432;
(statearr_79461[(24)] = inst_79404);

return statearr_79461;
})();
var statearr_79462_80664 = state_79432__$1;
(statearr_79462_80664[(2)] = inst_79405);

(statearr_79462_80664[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (33))){
var inst_79391 = (state_79432[(25)]);
var inst_79393 = cljs.core.chunked_seq_QMARK_(inst_79391);
var state_79432__$1 = state_79432;
if(inst_79393){
var statearr_79463_80665 = state_79432__$1;
(statearr_79463_80665[(1)] = (36));

} else {
var statearr_79464_80666 = state_79432__$1;
(statearr_79464_80666[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (13))){
var inst_79321 = (state_79432[(26)]);
var inst_79324 = cljs.core.async.close_BANG_(inst_79321);
var state_79432__$1 = state_79432;
var statearr_79465_80667 = state_79432__$1;
(statearr_79465_80667[(2)] = inst_79324);

(statearr_79465_80667[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (22))){
var inst_79344 = (state_79432[(8)]);
var inst_79347 = cljs.core.async.close_BANG_(inst_79344);
var state_79432__$1 = state_79432;
var statearr_79466_80668 = state_79432__$1;
(statearr_79466_80668[(2)] = inst_79347);

(statearr_79466_80668[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (36))){
var inst_79391 = (state_79432[(25)]);
var inst_79395 = cljs.core.chunk_first(inst_79391);
var inst_79396 = cljs.core.chunk_rest(inst_79391);
var inst_79397 = cljs.core.count(inst_79395);
var inst_79372 = inst_79396;
var inst_79373 = inst_79395;
var inst_79374 = inst_79397;
var inst_79375 = (0);
var state_79432__$1 = (function (){var statearr_79467 = state_79432;
(statearr_79467[(20)] = inst_79372);

(statearr_79467[(9)] = inst_79373);

(statearr_79467[(21)] = inst_79374);

(statearr_79467[(12)] = inst_79375);

return statearr_79467;
})();
var statearr_79468_80671 = state_79432__$1;
(statearr_79468_80671[(2)] = null);

(statearr_79468_80671[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (41))){
var inst_79391 = (state_79432[(25)]);
var inst_79407 = (state_79432[(2)]);
var inst_79408 = cljs.core.next(inst_79391);
var inst_79372 = inst_79408;
var inst_79373 = null;
var inst_79374 = (0);
var inst_79375 = (0);
var state_79432__$1 = (function (){var statearr_79469 = state_79432;
(statearr_79469[(20)] = inst_79372);

(statearr_79469[(9)] = inst_79373);

(statearr_79469[(21)] = inst_79374);

(statearr_79469[(27)] = inst_79407);

(statearr_79469[(12)] = inst_79375);

return statearr_79469;
})();
var statearr_79470_80673 = state_79432__$1;
(statearr_79470_80673[(2)] = null);

(statearr_79470_80673[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (43))){
var state_79432__$1 = state_79432;
var statearr_79471_80675 = state_79432__$1;
(statearr_79471_80675[(2)] = null);

(statearr_79471_80675[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (29))){
var inst_79416 = (state_79432[(2)]);
var state_79432__$1 = state_79432;
var statearr_79472_80676 = state_79432__$1;
(statearr_79472_80676[(2)] = inst_79416);

(statearr_79472_80676[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (44))){
var inst_79425 = (state_79432[(2)]);
var state_79432__$1 = (function (){var statearr_79473 = state_79432;
(statearr_79473[(28)] = inst_79425);

return statearr_79473;
})();
var statearr_79474_80677 = state_79432__$1;
(statearr_79474_80677[(2)] = null);

(statearr_79474_80677[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (6))){
var inst_79364 = (state_79432[(29)]);
var inst_79363 = cljs.core.deref(cs);
var inst_79364__$1 = cljs.core.keys(inst_79363);
var inst_79365 = cljs.core.count(inst_79364__$1);
var inst_79366 = cljs.core.reset_BANG_(dctr,inst_79365);
var inst_79371 = cljs.core.seq(inst_79364__$1);
var inst_79372 = inst_79371;
var inst_79373 = null;
var inst_79374 = (0);
var inst_79375 = (0);
var state_79432__$1 = (function (){var statearr_79475 = state_79432;
(statearr_79475[(30)] = inst_79366);

(statearr_79475[(20)] = inst_79372);

(statearr_79475[(9)] = inst_79373);

(statearr_79475[(21)] = inst_79374);

(statearr_79475[(29)] = inst_79364__$1);

(statearr_79475[(12)] = inst_79375);

return statearr_79475;
})();
var statearr_79476_80680 = state_79432__$1;
(statearr_79476_80680[(2)] = null);

(statearr_79476_80680[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (28))){
var inst_79391 = (state_79432[(25)]);
var inst_79372 = (state_79432[(20)]);
var inst_79391__$1 = cljs.core.seq(inst_79372);
var state_79432__$1 = (function (){var statearr_79477 = state_79432;
(statearr_79477[(25)] = inst_79391__$1);

return statearr_79477;
})();
if(inst_79391__$1){
var statearr_79478_80681 = state_79432__$1;
(statearr_79478_80681[(1)] = (33));

} else {
var statearr_79479_80682 = state_79432__$1;
(statearr_79479_80682[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (25))){
var inst_79374 = (state_79432[(21)]);
var inst_79375 = (state_79432[(12)]);
var inst_79377 = (inst_79375 < inst_79374);
var inst_79378 = inst_79377;
var state_79432__$1 = state_79432;
if(cljs.core.truth_(inst_79378)){
var statearr_79480_80683 = state_79432__$1;
(statearr_79480_80683[(1)] = (27));

} else {
var statearr_79481_80684 = state_79432__$1;
(statearr_79481_80684[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (34))){
var state_79432__$1 = state_79432;
var statearr_79482_80685 = state_79432__$1;
(statearr_79482_80685[(2)] = null);

(statearr_79482_80685[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (17))){
var state_79432__$1 = state_79432;
var statearr_79483_80686 = state_79432__$1;
(statearr_79483_80686[(2)] = null);

(statearr_79483_80686[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (3))){
var inst_79430 = (state_79432[(2)]);
var state_79432__$1 = state_79432;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79432__$1,inst_79430);
} else {
if((state_val_79433 === (12))){
var inst_79359 = (state_79432[(2)]);
var state_79432__$1 = state_79432;
var statearr_79484_80687 = state_79432__$1;
(statearr_79484_80687[(2)] = inst_79359);

(statearr_79484_80687[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (2))){
var state_79432__$1 = state_79432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79432__$1,(4),ch);
} else {
if((state_val_79433 === (23))){
var state_79432__$1 = state_79432;
var statearr_79485_80688 = state_79432__$1;
(statearr_79485_80688[(2)] = null);

(statearr_79485_80688[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (35))){
var inst_79414 = (state_79432[(2)]);
var state_79432__$1 = state_79432;
var statearr_79486_80690 = state_79432__$1;
(statearr_79486_80690[(2)] = inst_79414);

(statearr_79486_80690[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (19))){
var inst_79331 = (state_79432[(7)]);
var inst_79335 = cljs.core.chunk_first(inst_79331);
var inst_79336 = cljs.core.chunk_rest(inst_79331);
var inst_79337 = cljs.core.count(inst_79335);
var inst_79309 = inst_79336;
var inst_79310 = inst_79335;
var inst_79311 = inst_79337;
var inst_79312 = (0);
var state_79432__$1 = (function (){var statearr_79487 = state_79432;
(statearr_79487[(14)] = inst_79311);

(statearr_79487[(15)] = inst_79312);

(statearr_79487[(16)] = inst_79309);

(statearr_79487[(17)] = inst_79310);

return statearr_79487;
})();
var statearr_79488_80692 = state_79432__$1;
(statearr_79488_80692[(2)] = null);

(statearr_79488_80692[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (11))){
var inst_79331 = (state_79432[(7)]);
var inst_79309 = (state_79432[(16)]);
var inst_79331__$1 = cljs.core.seq(inst_79309);
var state_79432__$1 = (function (){var statearr_79489 = state_79432;
(statearr_79489[(7)] = inst_79331__$1);

return statearr_79489;
})();
if(inst_79331__$1){
var statearr_79490_80693 = state_79432__$1;
(statearr_79490_80693[(1)] = (16));

} else {
var statearr_79491_80694 = state_79432__$1;
(statearr_79491_80694[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (9))){
var inst_79361 = (state_79432[(2)]);
var state_79432__$1 = state_79432;
var statearr_79492_80695 = state_79432__$1;
(statearr_79492_80695[(2)] = inst_79361);

(statearr_79492_80695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (5))){
var inst_79307 = cljs.core.deref(cs);
var inst_79308 = cljs.core.seq(inst_79307);
var inst_79309 = inst_79308;
var inst_79310 = null;
var inst_79311 = (0);
var inst_79312 = (0);
var state_79432__$1 = (function (){var statearr_79493 = state_79432;
(statearr_79493[(14)] = inst_79311);

(statearr_79493[(15)] = inst_79312);

(statearr_79493[(16)] = inst_79309);

(statearr_79493[(17)] = inst_79310);

return statearr_79493;
})();
var statearr_79494_80696 = state_79432__$1;
(statearr_79494_80696[(2)] = null);

(statearr_79494_80696[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (14))){
var state_79432__$1 = state_79432;
var statearr_79495_80697 = state_79432__$1;
(statearr_79495_80697[(2)] = null);

(statearr_79495_80697[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (45))){
var inst_79422 = (state_79432[(2)]);
var state_79432__$1 = state_79432;
var statearr_79496_80698 = state_79432__$1;
(statearr_79496_80698[(2)] = inst_79422);

(statearr_79496_80698[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (26))){
var inst_79364 = (state_79432[(29)]);
var inst_79418 = (state_79432[(2)]);
var inst_79419 = cljs.core.seq(inst_79364);
var state_79432__$1 = (function (){var statearr_79497 = state_79432;
(statearr_79497[(31)] = inst_79418);

return statearr_79497;
})();
if(inst_79419){
var statearr_79498_80699 = state_79432__$1;
(statearr_79498_80699[(1)] = (42));

} else {
var statearr_79499_80700 = state_79432__$1;
(statearr_79499_80700[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (16))){
var inst_79331 = (state_79432[(7)]);
var inst_79333 = cljs.core.chunked_seq_QMARK_(inst_79331);
var state_79432__$1 = state_79432;
if(inst_79333){
var statearr_79500_80701 = state_79432__$1;
(statearr_79500_80701[(1)] = (19));

} else {
var statearr_79501_80702 = state_79432__$1;
(statearr_79501_80702[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (38))){
var inst_79411 = (state_79432[(2)]);
var state_79432__$1 = state_79432;
var statearr_79502_80703 = state_79432__$1;
(statearr_79502_80703[(2)] = inst_79411);

(statearr_79502_80703[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (30))){
var state_79432__$1 = state_79432;
var statearr_79503_80704 = state_79432__$1;
(statearr_79503_80704[(2)] = null);

(statearr_79503_80704[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (10))){
var inst_79312 = (state_79432[(15)]);
var inst_79310 = (state_79432[(17)]);
var inst_79320 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_79310,inst_79312);
var inst_79321 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_79320,(0),null);
var inst_79322 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_79320,(1),null);
var state_79432__$1 = (function (){var statearr_79504 = state_79432;
(statearr_79504[(26)] = inst_79321);

return statearr_79504;
})();
if(cljs.core.truth_(inst_79322)){
var statearr_79505_80706 = state_79432__$1;
(statearr_79505_80706[(1)] = (13));

} else {
var statearr_79506_80707 = state_79432__$1;
(statearr_79506_80707[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (18))){
var inst_79357 = (state_79432[(2)]);
var state_79432__$1 = state_79432;
var statearr_79507_80708 = state_79432__$1;
(statearr_79507_80708[(2)] = inst_79357);

(statearr_79507_80708[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (42))){
var state_79432__$1 = state_79432;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79432__$1,(45),dchan);
} else {
if((state_val_79433 === (37))){
var inst_79391 = (state_79432[(25)]);
var inst_79400 = (state_79432[(23)]);
var inst_79300 = (state_79432[(10)]);
var inst_79400__$1 = cljs.core.first(inst_79391);
var inst_79401 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_79400__$1,inst_79300,done);
var state_79432__$1 = (function (){var statearr_79508 = state_79432;
(statearr_79508[(23)] = inst_79400__$1);

return statearr_79508;
})();
if(cljs.core.truth_(inst_79401)){
var statearr_79509_80713 = state_79432__$1;
(statearr_79509_80713[(1)] = (39));

} else {
var statearr_79510_80714 = state_79432__$1;
(statearr_79510_80714[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79433 === (8))){
var inst_79311 = (state_79432[(14)]);
var inst_79312 = (state_79432[(15)]);
var inst_79314 = (inst_79312 < inst_79311);
var inst_79315 = inst_79314;
var state_79432__$1 = state_79432;
if(cljs.core.truth_(inst_79315)){
var statearr_79511_80715 = state_79432__$1;
(statearr_79511_80715[(1)] = (10));

} else {
var statearr_79512_80716 = state_79432__$1;
(statearr_79512_80716[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__41726__auto__ = null;
var cljs$core$async$mult_$_state_machine__41726__auto____0 = (function (){
var statearr_79513 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79513[(0)] = cljs$core$async$mult_$_state_machine__41726__auto__);

(statearr_79513[(1)] = (1));

return statearr_79513;
});
var cljs$core$async$mult_$_state_machine__41726__auto____1 = (function (state_79432){
while(true){
var ret_value__41727__auto__ = (function (){try{while(true){
var result__41728__auto__ = switch__41725__auto__(state_79432);
if(cljs.core.keyword_identical_QMARK_(result__41728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41728__auto__;
}
break;
}
}catch (e79514){if((e79514 instanceof Object)){
var ex__41729__auto__ = e79514;
var statearr_79515_80717 = state_79432;
(statearr_79515_80717[(5)] = ex__41729__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_79432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79514;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80718 = state_79432;
state_79432 = G__80718;
continue;
} else {
return ret_value__41727__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__41726__auto__ = function(state_79432){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__41726__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__41726__auto____1.call(this,state_79432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__41726__auto____0;
cljs$core$async$mult_$_state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__41726__auto____1;
return cljs$core$async$mult_$_state_machine__41726__auto__;
})()
})();
var state__41750__auto__ = (function (){var statearr_79516 = (f__41749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41749__auto__.cljs$core$IFn$_invoke$arity$0() : f__41749__auto__.call(null));
(statearr_79516[(6)] = c__41748__auto___80643);

return statearr_79516;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41750__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__79518 = arguments.length;
switch (G__79518) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___80740 = arguments.length;
var i__4790__auto___80741 = (0);
while(true){
if((i__4790__auto___80741 < len__4789__auto___80740)){
args__4795__auto__.push((arguments[i__4790__auto___80741]));

var G__80744 = (i__4790__auto___80741 + (1));
i__4790__auto___80741 = G__80744;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__79523){
var map__79524 = p__79523;
var map__79524__$1 = (((((!((map__79524 == null))))?(((((map__79524.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__79524.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__79524):map__79524);
var opts = map__79524__$1;
var statearr_79526_80747 = state;
(statearr_79526_80747[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_79527_80748 = state;
(statearr_79527_80748[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_79528_80749 = state;
(statearr_79528_80749[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq79519){
var G__79520 = cljs.core.first(seq79519);
var seq79519__$1 = cljs.core.next(seq79519);
var G__79521 = cljs.core.first(seq79519__$1);
var seq79519__$2 = cljs.core.next(seq79519__$1);
var G__79522 = cljs.core.first(seq79519__$2);
var seq79519__$3 = cljs.core.next(seq79519__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__79520,G__79521,G__79522,seq79519__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async79529 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79529 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta79530){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta79530 = meta79530;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async79529.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79531,meta79530__$1){
var self__ = this;
var _79531__$1 = this;
return (new cljs.core.async.t_cljs$core$async79529(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta79530__$1));
}));

(cljs.core.async.t_cljs$core$async79529.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79531){
var self__ = this;
var _79531__$1 = this;
return self__.meta79530;
}));

(cljs.core.async.t_cljs$core$async79529.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79529.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async79529.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79529.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async79529.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async79529.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async79529.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async79529.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async79529.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta79530","meta79530",1108987553,null)], null);
}));

(cljs.core.async.t_cljs$core$async79529.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async79529.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79529");

(cljs.core.async.t_cljs$core$async79529.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async79529");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async79529.
 */
cljs.core.async.__GT_t_cljs$core$async79529 = (function cljs$core$async$mix_$___GT_t_cljs$core$async79529(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta79530){
return (new cljs.core.async.t_cljs$core$async79529(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta79530));
});

}

return (new cljs.core.async.t_cljs$core$async79529(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41748__auto___80766 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41749__auto__ = (function (){var switch__41725__auto__ = (function (state_79633){
var state_val_79634 = (state_79633[(1)]);
if((state_val_79634 === (7))){
var inst_79548 = (state_79633[(2)]);
var state_79633__$1 = state_79633;
var statearr_79635_80768 = state_79633__$1;
(statearr_79635_80768[(2)] = inst_79548);

(statearr_79635_80768[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (20))){
var inst_79560 = (state_79633[(7)]);
var state_79633__$1 = state_79633;
var statearr_79636_80769 = state_79633__$1;
(statearr_79636_80769[(2)] = inst_79560);

(statearr_79636_80769[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (27))){
var state_79633__$1 = state_79633;
var statearr_79637_80770 = state_79633__$1;
(statearr_79637_80770[(2)] = null);

(statearr_79637_80770[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (1))){
var inst_79535 = (state_79633[(8)]);
var inst_79535__$1 = calc_state();
var inst_79537 = (inst_79535__$1 == null);
var inst_79538 = cljs.core.not(inst_79537);
var state_79633__$1 = (function (){var statearr_79638 = state_79633;
(statearr_79638[(8)] = inst_79535__$1);

return statearr_79638;
})();
if(inst_79538){
var statearr_79639_80771 = state_79633__$1;
(statearr_79639_80771[(1)] = (2));

} else {
var statearr_79640_80773 = state_79633__$1;
(statearr_79640_80773[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (24))){
var inst_79593 = (state_79633[(9)]);
var inst_79607 = (state_79633[(10)]);
var inst_79584 = (state_79633[(11)]);
var inst_79607__$1 = (inst_79584.cljs$core$IFn$_invoke$arity$1 ? inst_79584.cljs$core$IFn$_invoke$arity$1(inst_79593) : inst_79584.call(null,inst_79593));
var state_79633__$1 = (function (){var statearr_79641 = state_79633;
(statearr_79641[(10)] = inst_79607__$1);

return statearr_79641;
})();
if(cljs.core.truth_(inst_79607__$1)){
var statearr_79642_80774 = state_79633__$1;
(statearr_79642_80774[(1)] = (29));

} else {
var statearr_79643_80775 = state_79633__$1;
(statearr_79643_80775[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (4))){
var inst_79551 = (state_79633[(2)]);
var state_79633__$1 = state_79633;
if(cljs.core.truth_(inst_79551)){
var statearr_79644_80777 = state_79633__$1;
(statearr_79644_80777[(1)] = (8));

} else {
var statearr_79645_80778 = state_79633__$1;
(statearr_79645_80778[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (15))){
var inst_79578 = (state_79633[(2)]);
var state_79633__$1 = state_79633;
if(cljs.core.truth_(inst_79578)){
var statearr_79646_80782 = state_79633__$1;
(statearr_79646_80782[(1)] = (19));

} else {
var statearr_79647_80783 = state_79633__$1;
(statearr_79647_80783[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (21))){
var inst_79583 = (state_79633[(12)]);
var inst_79583__$1 = (state_79633[(2)]);
var inst_79584 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_79583__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_79585 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_79583__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_79586 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_79583__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_79633__$1 = (function (){var statearr_79648 = state_79633;
(statearr_79648[(11)] = inst_79584);

(statearr_79648[(12)] = inst_79583__$1);

(statearr_79648[(13)] = inst_79585);

return statearr_79648;
})();
return cljs.core.async.ioc_alts_BANG_(state_79633__$1,(22),inst_79586);
} else {
if((state_val_79634 === (31))){
var inst_79615 = (state_79633[(2)]);
var state_79633__$1 = state_79633;
if(cljs.core.truth_(inst_79615)){
var statearr_79649_80784 = state_79633__$1;
(statearr_79649_80784[(1)] = (32));

} else {
var statearr_79650_80785 = state_79633__$1;
(statearr_79650_80785[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (32))){
var inst_79592 = (state_79633[(14)]);
var state_79633__$1 = state_79633;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79633__$1,(35),out,inst_79592);
} else {
if((state_val_79634 === (33))){
var inst_79583 = (state_79633[(12)]);
var inst_79560 = inst_79583;
var state_79633__$1 = (function (){var statearr_79651 = state_79633;
(statearr_79651[(7)] = inst_79560);

return statearr_79651;
})();
var statearr_79652_80786 = state_79633__$1;
(statearr_79652_80786[(2)] = null);

(statearr_79652_80786[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (13))){
var inst_79560 = (state_79633[(7)]);
var inst_79567 = inst_79560.cljs$lang$protocol_mask$partition0$;
var inst_79568 = (inst_79567 & (64));
var inst_79569 = inst_79560.cljs$core$ISeq$;
var inst_79570 = (cljs.core.PROTOCOL_SENTINEL === inst_79569);
var inst_79571 = ((inst_79568) || (inst_79570));
var state_79633__$1 = state_79633;
if(cljs.core.truth_(inst_79571)){
var statearr_79653_80787 = state_79633__$1;
(statearr_79653_80787[(1)] = (16));

} else {
var statearr_79654_80788 = state_79633__$1;
(statearr_79654_80788[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (22))){
var inst_79593 = (state_79633[(9)]);
var inst_79592 = (state_79633[(14)]);
var inst_79591 = (state_79633[(2)]);
var inst_79592__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_79591,(0),null);
var inst_79593__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_79591,(1),null);
var inst_79594 = (inst_79592__$1 == null);
var inst_79595 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_79593__$1,change);
var inst_79596 = ((inst_79594) || (inst_79595));
var state_79633__$1 = (function (){var statearr_79655 = state_79633;
(statearr_79655[(9)] = inst_79593__$1);

(statearr_79655[(14)] = inst_79592__$1);

return statearr_79655;
})();
if(cljs.core.truth_(inst_79596)){
var statearr_79656_80790 = state_79633__$1;
(statearr_79656_80790[(1)] = (23));

} else {
var statearr_79657_80791 = state_79633__$1;
(statearr_79657_80791[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (36))){
var inst_79583 = (state_79633[(12)]);
var inst_79560 = inst_79583;
var state_79633__$1 = (function (){var statearr_79658 = state_79633;
(statearr_79658[(7)] = inst_79560);

return statearr_79658;
})();
var statearr_79659_80792 = state_79633__$1;
(statearr_79659_80792[(2)] = null);

(statearr_79659_80792[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (29))){
var inst_79607 = (state_79633[(10)]);
var state_79633__$1 = state_79633;
var statearr_79660_80793 = state_79633__$1;
(statearr_79660_80793[(2)] = inst_79607);

(statearr_79660_80793[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (6))){
var state_79633__$1 = state_79633;
var statearr_79661_80794 = state_79633__$1;
(statearr_79661_80794[(2)] = false);

(statearr_79661_80794[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (28))){
var inst_79603 = (state_79633[(2)]);
var inst_79604 = calc_state();
var inst_79560 = inst_79604;
var state_79633__$1 = (function (){var statearr_79662 = state_79633;
(statearr_79662[(15)] = inst_79603);

(statearr_79662[(7)] = inst_79560);

return statearr_79662;
})();
var statearr_79663_80795 = state_79633__$1;
(statearr_79663_80795[(2)] = null);

(statearr_79663_80795[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (25))){
var inst_79629 = (state_79633[(2)]);
var state_79633__$1 = state_79633;
var statearr_79664_80796 = state_79633__$1;
(statearr_79664_80796[(2)] = inst_79629);

(statearr_79664_80796[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (34))){
var inst_79627 = (state_79633[(2)]);
var state_79633__$1 = state_79633;
var statearr_79665_80800 = state_79633__$1;
(statearr_79665_80800[(2)] = inst_79627);

(statearr_79665_80800[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (17))){
var state_79633__$1 = state_79633;
var statearr_79666_80803 = state_79633__$1;
(statearr_79666_80803[(2)] = false);

(statearr_79666_80803[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (3))){
var state_79633__$1 = state_79633;
var statearr_79667_80806 = state_79633__$1;
(statearr_79667_80806[(2)] = false);

(statearr_79667_80806[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (12))){
var inst_79631 = (state_79633[(2)]);
var state_79633__$1 = state_79633;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79633__$1,inst_79631);
} else {
if((state_val_79634 === (2))){
var inst_79535 = (state_79633[(8)]);
var inst_79540 = inst_79535.cljs$lang$protocol_mask$partition0$;
var inst_79541 = (inst_79540 & (64));
var inst_79542 = inst_79535.cljs$core$ISeq$;
var inst_79543 = (cljs.core.PROTOCOL_SENTINEL === inst_79542);
var inst_79544 = ((inst_79541) || (inst_79543));
var state_79633__$1 = state_79633;
if(cljs.core.truth_(inst_79544)){
var statearr_79668_80807 = state_79633__$1;
(statearr_79668_80807[(1)] = (5));

} else {
var statearr_79669_80808 = state_79633__$1;
(statearr_79669_80808[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (23))){
var inst_79592 = (state_79633[(14)]);
var inst_79598 = (inst_79592 == null);
var state_79633__$1 = state_79633;
if(cljs.core.truth_(inst_79598)){
var statearr_79670_80809 = state_79633__$1;
(statearr_79670_80809[(1)] = (26));

} else {
var statearr_79671_80810 = state_79633__$1;
(statearr_79671_80810[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (35))){
var inst_79618 = (state_79633[(2)]);
var state_79633__$1 = state_79633;
if(cljs.core.truth_(inst_79618)){
var statearr_79672_80811 = state_79633__$1;
(statearr_79672_80811[(1)] = (36));

} else {
var statearr_79673_80812 = state_79633__$1;
(statearr_79673_80812[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (19))){
var inst_79560 = (state_79633[(7)]);
var inst_79580 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_79560);
var state_79633__$1 = state_79633;
var statearr_79674_80813 = state_79633__$1;
(statearr_79674_80813[(2)] = inst_79580);

(statearr_79674_80813[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (11))){
var inst_79560 = (state_79633[(7)]);
var inst_79564 = (inst_79560 == null);
var inst_79565 = cljs.core.not(inst_79564);
var state_79633__$1 = state_79633;
if(inst_79565){
var statearr_79675_80814 = state_79633__$1;
(statearr_79675_80814[(1)] = (13));

} else {
var statearr_79676_80815 = state_79633__$1;
(statearr_79676_80815[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (9))){
var inst_79535 = (state_79633[(8)]);
var state_79633__$1 = state_79633;
var statearr_79677_80816 = state_79633__$1;
(statearr_79677_80816[(2)] = inst_79535);

(statearr_79677_80816[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (5))){
var state_79633__$1 = state_79633;
var statearr_79678_80817 = state_79633__$1;
(statearr_79678_80817[(2)] = true);

(statearr_79678_80817[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (14))){
var state_79633__$1 = state_79633;
var statearr_79679_80818 = state_79633__$1;
(statearr_79679_80818[(2)] = false);

(statearr_79679_80818[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (26))){
var inst_79593 = (state_79633[(9)]);
var inst_79600 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_79593);
var state_79633__$1 = state_79633;
var statearr_79680_80820 = state_79633__$1;
(statearr_79680_80820[(2)] = inst_79600);

(statearr_79680_80820[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (16))){
var state_79633__$1 = state_79633;
var statearr_79681_80821 = state_79633__$1;
(statearr_79681_80821[(2)] = true);

(statearr_79681_80821[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (38))){
var inst_79623 = (state_79633[(2)]);
var state_79633__$1 = state_79633;
var statearr_79682_80822 = state_79633__$1;
(statearr_79682_80822[(2)] = inst_79623);

(statearr_79682_80822[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (30))){
var inst_79593 = (state_79633[(9)]);
var inst_79584 = (state_79633[(11)]);
var inst_79585 = (state_79633[(13)]);
var inst_79610 = cljs.core.empty_QMARK_(inst_79584);
var inst_79611 = (inst_79585.cljs$core$IFn$_invoke$arity$1 ? inst_79585.cljs$core$IFn$_invoke$arity$1(inst_79593) : inst_79585.call(null,inst_79593));
var inst_79612 = cljs.core.not(inst_79611);
var inst_79613 = ((inst_79610) && (inst_79612));
var state_79633__$1 = state_79633;
var statearr_79683_80824 = state_79633__$1;
(statearr_79683_80824[(2)] = inst_79613);

(statearr_79683_80824[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (10))){
var inst_79535 = (state_79633[(8)]);
var inst_79556 = (state_79633[(2)]);
var inst_79557 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_79556,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_79558 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_79556,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_79559 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_79556,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_79560 = inst_79535;
var state_79633__$1 = (function (){var statearr_79684 = state_79633;
(statearr_79684[(16)] = inst_79557);

(statearr_79684[(17)] = inst_79559);

(statearr_79684[(7)] = inst_79560);

(statearr_79684[(18)] = inst_79558);

return statearr_79684;
})();
var statearr_79685_80826 = state_79633__$1;
(statearr_79685_80826[(2)] = null);

(statearr_79685_80826[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (18))){
var inst_79575 = (state_79633[(2)]);
var state_79633__$1 = state_79633;
var statearr_79686_80828 = state_79633__$1;
(statearr_79686_80828[(2)] = inst_79575);

(statearr_79686_80828[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (37))){
var state_79633__$1 = state_79633;
var statearr_79687_80829 = state_79633__$1;
(statearr_79687_80829[(2)] = null);

(statearr_79687_80829[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79634 === (8))){
var inst_79535 = (state_79633[(8)]);
var inst_79553 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_79535);
var state_79633__$1 = state_79633;
var statearr_79688_80834 = state_79633__$1;
(statearr_79688_80834[(2)] = inst_79553);

(statearr_79688_80834[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mix_$_state_machine__41726__auto__ = null;
var cljs$core$async$mix_$_state_machine__41726__auto____0 = (function (){
var statearr_79689 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79689[(0)] = cljs$core$async$mix_$_state_machine__41726__auto__);

(statearr_79689[(1)] = (1));

return statearr_79689;
});
var cljs$core$async$mix_$_state_machine__41726__auto____1 = (function (state_79633){
while(true){
var ret_value__41727__auto__ = (function (){try{while(true){
var result__41728__auto__ = switch__41725__auto__(state_79633);
if(cljs.core.keyword_identical_QMARK_(result__41728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41728__auto__;
}
break;
}
}catch (e79690){if((e79690 instanceof Object)){
var ex__41729__auto__ = e79690;
var statearr_79691_80836 = state_79633;
(statearr_79691_80836[(5)] = ex__41729__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_79633);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79690;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80837 = state_79633;
state_79633 = G__80837;
continue;
} else {
return ret_value__41727__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__41726__auto__ = function(state_79633){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__41726__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__41726__auto____1.call(this,state_79633);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__41726__auto____0;
cljs$core$async$mix_$_state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__41726__auto____1;
return cljs$core$async$mix_$_state_machine__41726__auto__;
})()
})();
var state__41750__auto__ = (function (){var statearr_79692 = (f__41749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41749__auto__.cljs$core$IFn$_invoke$arity$0() : f__41749__auto__.call(null));
(statearr_79692[(6)] = c__41748__auto___80766);

return statearr_79692;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41750__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__79694 = arguments.length;
switch (G__79694) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__79697 = arguments.length;
switch (G__79697) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__79695_SHARP_){
if(cljs.core.truth_((p1__79695_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__79695_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__79695_SHARP_.call(null,topic)))){
return p1__79695_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__79695_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async79698 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79698 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta79699){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta79699 = meta79699;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async79698.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79700,meta79699__$1){
var self__ = this;
var _79700__$1 = this;
return (new cljs.core.async.t_cljs$core$async79698(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta79699__$1));
}));

(cljs.core.async.t_cljs$core$async79698.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79700){
var self__ = this;
var _79700__$1 = this;
return self__.meta79699;
}));

(cljs.core.async.t_cljs$core$async79698.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79698.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async79698.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79698.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async79698.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async79698.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async79698.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async79698.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta79699","meta79699",186471245,null)], null);
}));

(cljs.core.async.t_cljs$core$async79698.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async79698.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79698");

(cljs.core.async.t_cljs$core$async79698.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async79698");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async79698.
 */
cljs.core.async.__GT_t_cljs$core$async79698 = (function cljs$core$async$__GT_t_cljs$core$async79698(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta79699){
return (new cljs.core.async.t_cljs$core$async79698(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta79699));
});

}

return (new cljs.core.async.t_cljs$core$async79698(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__41748__auto___80853 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41749__auto__ = (function (){var switch__41725__auto__ = (function (state_79772){
var state_val_79773 = (state_79772[(1)]);
if((state_val_79773 === (7))){
var inst_79768 = (state_79772[(2)]);
var state_79772__$1 = state_79772;
var statearr_79774_80854 = state_79772__$1;
(statearr_79774_80854[(2)] = inst_79768);

(statearr_79774_80854[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79773 === (20))){
var state_79772__$1 = state_79772;
var statearr_79775_80855 = state_79772__$1;
(statearr_79775_80855[(2)] = null);

(statearr_79775_80855[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79773 === (1))){
var state_79772__$1 = state_79772;
var statearr_79776_80857 = state_79772__$1;
(statearr_79776_80857[(2)] = null);

(statearr_79776_80857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79773 === (24))){
var inst_79751 = (state_79772[(7)]);
var inst_79760 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_79751);
var state_79772__$1 = state_79772;
var statearr_79777_80858 = state_79772__$1;
(statearr_79777_80858[(2)] = inst_79760);

(statearr_79777_80858[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79773 === (4))){
var inst_79703 = (state_79772[(8)]);
var inst_79703__$1 = (state_79772[(2)]);
var inst_79704 = (inst_79703__$1 == null);
var state_79772__$1 = (function (){var statearr_79778 = state_79772;
(statearr_79778[(8)] = inst_79703__$1);

return statearr_79778;
})();
if(cljs.core.truth_(inst_79704)){
var statearr_79779_80859 = state_79772__$1;
(statearr_79779_80859[(1)] = (5));

} else {
var statearr_79780_80860 = state_79772__$1;
(statearr_79780_80860[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79773 === (15))){
var inst_79745 = (state_79772[(2)]);
var state_79772__$1 = state_79772;
var statearr_79781_80861 = state_79772__$1;
(statearr_79781_80861[(2)] = inst_79745);

(statearr_79781_80861[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79773 === (21))){
var inst_79765 = (state_79772[(2)]);
var state_79772__$1 = (function (){var statearr_79782 = state_79772;
(statearr_79782[(9)] = inst_79765);

return statearr_79782;
})();
var statearr_79783_80863 = state_79772__$1;
(statearr_79783_80863[(2)] = null);

(statearr_79783_80863[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79773 === (13))){
var inst_79727 = (state_79772[(10)]);
var inst_79729 = cljs.core.chunked_seq_QMARK_(inst_79727);
var state_79772__$1 = state_79772;
if(inst_79729){
var statearr_79784_80864 = state_79772__$1;
(statearr_79784_80864[(1)] = (16));

} else {
var statearr_79785_80865 = state_79772__$1;
(statearr_79785_80865[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79773 === (22))){
var inst_79757 = (state_79772[(2)]);
var state_79772__$1 = state_79772;
if(cljs.core.truth_(inst_79757)){
var statearr_79786_80866 = state_79772__$1;
(statearr_79786_80866[(1)] = (23));

} else {
var statearr_79787_80867 = state_79772__$1;
(statearr_79787_80867[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79773 === (6))){
var inst_79751 = (state_79772[(7)]);
var inst_79753 = (state_79772[(11)]);
var inst_79703 = (state_79772[(8)]);
var inst_79751__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_79703) : topic_fn.call(null,inst_79703));
var inst_79752 = cljs.core.deref(mults);
var inst_79753__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_79752,inst_79751__$1);
var state_79772__$1 = (function (){var statearr_79788 = state_79772;
(statearr_79788[(7)] = inst_79751__$1);

(statearr_79788[(11)] = inst_79753__$1);

return statearr_79788;
})();
if(cljs.core.truth_(inst_79753__$1)){
var statearr_79789_80868 = state_79772__$1;
(statearr_79789_80868[(1)] = (19));

} else {
var statearr_79790_80869 = state_79772__$1;
(statearr_79790_80869[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79773 === (25))){
var inst_79762 = (state_79772[(2)]);
var state_79772__$1 = state_79772;
var statearr_79791_80870 = state_79772__$1;
(statearr_79791_80870[(2)] = inst_79762);

(statearr_79791_80870[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79773 === (17))){
var inst_79727 = (state_79772[(10)]);
var inst_79736 = cljs.core.first(inst_79727);
var inst_79737 = cljs.core.async.muxch_STAR_(inst_79736);
var inst_79738 = cljs.core.async.close_BANG_(inst_79737);
var inst_79739 = cljs.core.next(inst_79727);
var inst_79713 = inst_79739;
var inst_79714 = null;
var inst_79715 = (0);
var inst_79716 = (0);
var state_79772__$1 = (function (){var statearr_79792 = state_79772;
(statearr_79792[(12)] = inst_79738);

(statearr_79792[(13)] = inst_79713);

(statearr_79792[(14)] = inst_79716);

(statearr_79792[(15)] = inst_79715);

(statearr_79792[(16)] = inst_79714);

return statearr_79792;
})();
var statearr_79793_80871 = state_79772__$1;
(statearr_79793_80871[(2)] = null);

(statearr_79793_80871[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79773 === (3))){
var inst_79770 = (state_79772[(2)]);
var state_79772__$1 = state_79772;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79772__$1,inst_79770);
} else {
if((state_val_79773 === (12))){
var inst_79747 = (state_79772[(2)]);
var state_79772__$1 = state_79772;
var statearr_79794_80876 = state_79772__$1;
(statearr_79794_80876[(2)] = inst_79747);

(statearr_79794_80876[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79773 === (2))){
var state_79772__$1 = state_79772;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79772__$1,(4),ch);
} else {
if((state_val_79773 === (23))){
var state_79772__$1 = state_79772;
var statearr_79795_80877 = state_79772__$1;
(statearr_79795_80877[(2)] = null);

(statearr_79795_80877[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79773 === (19))){
var inst_79753 = (state_79772[(11)]);
var inst_79703 = (state_79772[(8)]);
var inst_79755 = cljs.core.async.muxch_STAR_(inst_79753);
var state_79772__$1 = state_79772;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79772__$1,(22),inst_79755,inst_79703);
} else {
if((state_val_79773 === (11))){
var inst_79713 = (state_79772[(13)]);
var inst_79727 = (state_79772[(10)]);
var inst_79727__$1 = cljs.core.seq(inst_79713);
var state_79772__$1 = (function (){var statearr_79796 = state_79772;
(statearr_79796[(10)] = inst_79727__$1);

return statearr_79796;
})();
if(inst_79727__$1){
var statearr_79797_80882 = state_79772__$1;
(statearr_79797_80882[(1)] = (13));

} else {
var statearr_79798_80883 = state_79772__$1;
(statearr_79798_80883[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79773 === (9))){
var inst_79749 = (state_79772[(2)]);
var state_79772__$1 = state_79772;
var statearr_79799_80884 = state_79772__$1;
(statearr_79799_80884[(2)] = inst_79749);

(statearr_79799_80884[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79773 === (5))){
var inst_79710 = cljs.core.deref(mults);
var inst_79711 = cljs.core.vals(inst_79710);
var inst_79712 = cljs.core.seq(inst_79711);
var inst_79713 = inst_79712;
var inst_79714 = null;
var inst_79715 = (0);
var inst_79716 = (0);
var state_79772__$1 = (function (){var statearr_79800 = state_79772;
(statearr_79800[(13)] = inst_79713);

(statearr_79800[(14)] = inst_79716);

(statearr_79800[(15)] = inst_79715);

(statearr_79800[(16)] = inst_79714);

return statearr_79800;
})();
var statearr_79801_80887 = state_79772__$1;
(statearr_79801_80887[(2)] = null);

(statearr_79801_80887[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79773 === (14))){
var state_79772__$1 = state_79772;
var statearr_79805_80888 = state_79772__$1;
(statearr_79805_80888[(2)] = null);

(statearr_79805_80888[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79773 === (16))){
var inst_79727 = (state_79772[(10)]);
var inst_79731 = cljs.core.chunk_first(inst_79727);
var inst_79732 = cljs.core.chunk_rest(inst_79727);
var inst_79733 = cljs.core.count(inst_79731);
var inst_79713 = inst_79732;
var inst_79714 = inst_79731;
var inst_79715 = inst_79733;
var inst_79716 = (0);
var state_79772__$1 = (function (){var statearr_79806 = state_79772;
(statearr_79806[(13)] = inst_79713);

(statearr_79806[(14)] = inst_79716);

(statearr_79806[(15)] = inst_79715);

(statearr_79806[(16)] = inst_79714);

return statearr_79806;
})();
var statearr_79807_80889 = state_79772__$1;
(statearr_79807_80889[(2)] = null);

(statearr_79807_80889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79773 === (10))){
var inst_79713 = (state_79772[(13)]);
var inst_79716 = (state_79772[(14)]);
var inst_79715 = (state_79772[(15)]);
var inst_79714 = (state_79772[(16)]);
var inst_79721 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_79714,inst_79716);
var inst_79722 = cljs.core.async.muxch_STAR_(inst_79721);
var inst_79723 = cljs.core.async.close_BANG_(inst_79722);
var inst_79724 = (inst_79716 + (1));
var tmp79802 = inst_79713;
var tmp79803 = inst_79715;
var tmp79804 = inst_79714;
var inst_79713__$1 = tmp79802;
var inst_79714__$1 = tmp79804;
var inst_79715__$1 = tmp79803;
var inst_79716__$1 = inst_79724;
var state_79772__$1 = (function (){var statearr_79808 = state_79772;
(statearr_79808[(13)] = inst_79713__$1);

(statearr_79808[(14)] = inst_79716__$1);

(statearr_79808[(15)] = inst_79715__$1);

(statearr_79808[(17)] = inst_79723);

(statearr_79808[(16)] = inst_79714__$1);

return statearr_79808;
})();
var statearr_79809_80890 = state_79772__$1;
(statearr_79809_80890[(2)] = null);

(statearr_79809_80890[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79773 === (18))){
var inst_79742 = (state_79772[(2)]);
var state_79772__$1 = state_79772;
var statearr_79810_80891 = state_79772__$1;
(statearr_79810_80891[(2)] = inst_79742);

(statearr_79810_80891[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79773 === (8))){
var inst_79716 = (state_79772[(14)]);
var inst_79715 = (state_79772[(15)]);
var inst_79718 = (inst_79716 < inst_79715);
var inst_79719 = inst_79718;
var state_79772__$1 = state_79772;
if(cljs.core.truth_(inst_79719)){
var statearr_79811_80894 = state_79772__$1;
(statearr_79811_80894[(1)] = (10));

} else {
var statearr_79812_80895 = state_79772__$1;
(statearr_79812_80895[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41726__auto__ = null;
var cljs$core$async$state_machine__41726__auto____0 = (function (){
var statearr_79813 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79813[(0)] = cljs$core$async$state_machine__41726__auto__);

(statearr_79813[(1)] = (1));

return statearr_79813;
});
var cljs$core$async$state_machine__41726__auto____1 = (function (state_79772){
while(true){
var ret_value__41727__auto__ = (function (){try{while(true){
var result__41728__auto__ = switch__41725__auto__(state_79772);
if(cljs.core.keyword_identical_QMARK_(result__41728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41728__auto__;
}
break;
}
}catch (e79814){if((e79814 instanceof Object)){
var ex__41729__auto__ = e79814;
var statearr_79815_80898 = state_79772;
(statearr_79815_80898[(5)] = ex__41729__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_79772);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79814;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80899 = state_79772;
state_79772 = G__80899;
continue;
} else {
return ret_value__41727__auto__;
}
break;
}
});
cljs$core$async$state_machine__41726__auto__ = function(state_79772){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41726__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41726__auto____1.call(this,state_79772);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41726__auto____0;
cljs$core$async$state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41726__auto____1;
return cljs$core$async$state_machine__41726__auto__;
})()
})();
var state__41750__auto__ = (function (){var statearr_79816 = (f__41749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41749__auto__.cljs$core$IFn$_invoke$arity$0() : f__41749__auto__.call(null));
(statearr_79816[(6)] = c__41748__auto___80853);

return statearr_79816;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41750__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__79818 = arguments.length;
switch (G__79818) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__79820 = arguments.length;
switch (G__79820) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__79822 = arguments.length;
switch (G__79822) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__41748__auto___80905 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41749__auto__ = (function (){var switch__41725__auto__ = (function (state_79861){
var state_val_79862 = (state_79861[(1)]);
if((state_val_79862 === (7))){
var state_79861__$1 = state_79861;
var statearr_79863_80907 = state_79861__$1;
(statearr_79863_80907[(2)] = null);

(statearr_79863_80907[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79862 === (1))){
var state_79861__$1 = state_79861;
var statearr_79864_80908 = state_79861__$1;
(statearr_79864_80908[(2)] = null);

(statearr_79864_80908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79862 === (4))){
var inst_79825 = (state_79861[(7)]);
var inst_79827 = (inst_79825 < cnt);
var state_79861__$1 = state_79861;
if(cljs.core.truth_(inst_79827)){
var statearr_79865_80909 = state_79861__$1;
(statearr_79865_80909[(1)] = (6));

} else {
var statearr_79866_80910 = state_79861__$1;
(statearr_79866_80910[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79862 === (15))){
var inst_79857 = (state_79861[(2)]);
var state_79861__$1 = state_79861;
var statearr_79867_80914 = state_79861__$1;
(statearr_79867_80914[(2)] = inst_79857);

(statearr_79867_80914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79862 === (13))){
var inst_79850 = cljs.core.async.close_BANG_(out);
var state_79861__$1 = state_79861;
var statearr_79868_80919 = state_79861__$1;
(statearr_79868_80919[(2)] = inst_79850);

(statearr_79868_80919[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79862 === (6))){
var state_79861__$1 = state_79861;
var statearr_79869_80920 = state_79861__$1;
(statearr_79869_80920[(2)] = null);

(statearr_79869_80920[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79862 === (3))){
var inst_79859 = (state_79861[(2)]);
var state_79861__$1 = state_79861;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79861__$1,inst_79859);
} else {
if((state_val_79862 === (12))){
var inst_79847 = (state_79861[(8)]);
var inst_79847__$1 = (state_79861[(2)]);
var inst_79848 = cljs.core.some(cljs.core.nil_QMARK_,inst_79847__$1);
var state_79861__$1 = (function (){var statearr_79870 = state_79861;
(statearr_79870[(8)] = inst_79847__$1);

return statearr_79870;
})();
if(cljs.core.truth_(inst_79848)){
var statearr_79871_80924 = state_79861__$1;
(statearr_79871_80924[(1)] = (13));

} else {
var statearr_79872_80925 = state_79861__$1;
(statearr_79872_80925[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79862 === (2))){
var inst_79824 = cljs.core.reset_BANG_(dctr,cnt);
var inst_79825 = (0);
var state_79861__$1 = (function (){var statearr_79873 = state_79861;
(statearr_79873[(7)] = inst_79825);

(statearr_79873[(9)] = inst_79824);

return statearr_79873;
})();
var statearr_79874_80929 = state_79861__$1;
(statearr_79874_80929[(2)] = null);

(statearr_79874_80929[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79862 === (11))){
var inst_79825 = (state_79861[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_79861,(10),Object,null,(9));
var inst_79834 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_79825) : chs__$1.call(null,inst_79825));
var inst_79835 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_79825) : done.call(null,inst_79825));
var inst_79836 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_79834,inst_79835);
var state_79861__$1 = state_79861;
var statearr_79875_80933 = state_79861__$1;
(statearr_79875_80933[(2)] = inst_79836);


cljs.core.async.impl.ioc_helpers.process_exception(state_79861__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79862 === (9))){
var inst_79825 = (state_79861[(7)]);
var inst_79838 = (state_79861[(2)]);
var inst_79839 = (inst_79825 + (1));
var inst_79825__$1 = inst_79839;
var state_79861__$1 = (function (){var statearr_79876 = state_79861;
(statearr_79876[(10)] = inst_79838);

(statearr_79876[(7)] = inst_79825__$1);

return statearr_79876;
})();
var statearr_79877_80934 = state_79861__$1;
(statearr_79877_80934[(2)] = null);

(statearr_79877_80934[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79862 === (5))){
var inst_79845 = (state_79861[(2)]);
var state_79861__$1 = (function (){var statearr_79878 = state_79861;
(statearr_79878[(11)] = inst_79845);

return statearr_79878;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79861__$1,(12),dchan);
} else {
if((state_val_79862 === (14))){
var inst_79847 = (state_79861[(8)]);
var inst_79852 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_79847);
var state_79861__$1 = state_79861;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79861__$1,(16),out,inst_79852);
} else {
if((state_val_79862 === (16))){
var inst_79854 = (state_79861[(2)]);
var state_79861__$1 = (function (){var statearr_79879 = state_79861;
(statearr_79879[(12)] = inst_79854);

return statearr_79879;
})();
var statearr_79880_80938 = state_79861__$1;
(statearr_79880_80938[(2)] = null);

(statearr_79880_80938[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79862 === (10))){
var inst_79829 = (state_79861[(2)]);
var inst_79830 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_79861__$1 = (function (){var statearr_79881 = state_79861;
(statearr_79881[(13)] = inst_79829);

return statearr_79881;
})();
var statearr_79882_80939 = state_79861__$1;
(statearr_79882_80939[(2)] = inst_79830);


cljs.core.async.impl.ioc_helpers.process_exception(state_79861__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79862 === (8))){
var inst_79843 = (state_79861[(2)]);
var state_79861__$1 = state_79861;
var statearr_79883_80941 = state_79861__$1;
(statearr_79883_80941[(2)] = inst_79843);

(statearr_79883_80941[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41726__auto__ = null;
var cljs$core$async$state_machine__41726__auto____0 = (function (){
var statearr_79884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79884[(0)] = cljs$core$async$state_machine__41726__auto__);

(statearr_79884[(1)] = (1));

return statearr_79884;
});
var cljs$core$async$state_machine__41726__auto____1 = (function (state_79861){
while(true){
var ret_value__41727__auto__ = (function (){try{while(true){
var result__41728__auto__ = switch__41725__auto__(state_79861);
if(cljs.core.keyword_identical_QMARK_(result__41728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41728__auto__;
}
break;
}
}catch (e79885){if((e79885 instanceof Object)){
var ex__41729__auto__ = e79885;
var statearr_79886_80942 = state_79861;
(statearr_79886_80942[(5)] = ex__41729__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_79861);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79885;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80943 = state_79861;
state_79861 = G__80943;
continue;
} else {
return ret_value__41727__auto__;
}
break;
}
});
cljs$core$async$state_machine__41726__auto__ = function(state_79861){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41726__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41726__auto____1.call(this,state_79861);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41726__auto____0;
cljs$core$async$state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41726__auto____1;
return cljs$core$async$state_machine__41726__auto__;
})()
})();
var state__41750__auto__ = (function (){var statearr_79887 = (f__41749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41749__auto__.cljs$core$IFn$_invoke$arity$0() : f__41749__auto__.call(null));
(statearr_79887[(6)] = c__41748__auto___80905);

return statearr_79887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41750__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__79890 = arguments.length;
switch (G__79890) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41748__auto___80960 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41749__auto__ = (function (){var switch__41725__auto__ = (function (state_79922){
var state_val_79923 = (state_79922[(1)]);
if((state_val_79923 === (7))){
var inst_79902 = (state_79922[(7)]);
var inst_79901 = (state_79922[(8)]);
var inst_79901__$1 = (state_79922[(2)]);
var inst_79902__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_79901__$1,(0),null);
var inst_79903 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_79901__$1,(1),null);
var inst_79904 = (inst_79902__$1 == null);
var state_79922__$1 = (function (){var statearr_79924 = state_79922;
(statearr_79924[(7)] = inst_79902__$1);

(statearr_79924[(9)] = inst_79903);

(statearr_79924[(8)] = inst_79901__$1);

return statearr_79924;
})();
if(cljs.core.truth_(inst_79904)){
var statearr_79925_80961 = state_79922__$1;
(statearr_79925_80961[(1)] = (8));

} else {
var statearr_79926_80962 = state_79922__$1;
(statearr_79926_80962[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79923 === (1))){
var inst_79891 = cljs.core.vec(chs);
var inst_79892 = inst_79891;
var state_79922__$1 = (function (){var statearr_79927 = state_79922;
(statearr_79927[(10)] = inst_79892);

return statearr_79927;
})();
var statearr_79928_80963 = state_79922__$1;
(statearr_79928_80963[(2)] = null);

(statearr_79928_80963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79923 === (4))){
var inst_79892 = (state_79922[(10)]);
var state_79922__$1 = state_79922;
return cljs.core.async.ioc_alts_BANG_(state_79922__$1,(7),inst_79892);
} else {
if((state_val_79923 === (6))){
var inst_79918 = (state_79922[(2)]);
var state_79922__$1 = state_79922;
var statearr_79929_80964 = state_79922__$1;
(statearr_79929_80964[(2)] = inst_79918);

(statearr_79929_80964[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79923 === (3))){
var inst_79920 = (state_79922[(2)]);
var state_79922__$1 = state_79922;
return cljs.core.async.impl.ioc_helpers.return_chan(state_79922__$1,inst_79920);
} else {
if((state_val_79923 === (2))){
var inst_79892 = (state_79922[(10)]);
var inst_79894 = cljs.core.count(inst_79892);
var inst_79895 = (inst_79894 > (0));
var state_79922__$1 = state_79922;
if(cljs.core.truth_(inst_79895)){
var statearr_79931_80965 = state_79922__$1;
(statearr_79931_80965[(1)] = (4));

} else {
var statearr_79932_80966 = state_79922__$1;
(statearr_79932_80966[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79923 === (11))){
var inst_79892 = (state_79922[(10)]);
var inst_79911 = (state_79922[(2)]);
var tmp79930 = inst_79892;
var inst_79892__$1 = tmp79930;
var state_79922__$1 = (function (){var statearr_79933 = state_79922;
(statearr_79933[(10)] = inst_79892__$1);

(statearr_79933[(11)] = inst_79911);

return statearr_79933;
})();
var statearr_79934_80967 = state_79922__$1;
(statearr_79934_80967[(2)] = null);

(statearr_79934_80967[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79923 === (9))){
var inst_79902 = (state_79922[(7)]);
var state_79922__$1 = state_79922;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79922__$1,(11),out,inst_79902);
} else {
if((state_val_79923 === (5))){
var inst_79916 = cljs.core.async.close_BANG_(out);
var state_79922__$1 = state_79922;
var statearr_79935_80974 = state_79922__$1;
(statearr_79935_80974[(2)] = inst_79916);

(statearr_79935_80974[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79923 === (10))){
var inst_79914 = (state_79922[(2)]);
var state_79922__$1 = state_79922;
var statearr_79936_80975 = state_79922__$1;
(statearr_79936_80975[(2)] = inst_79914);

(statearr_79936_80975[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79923 === (8))){
var inst_79892 = (state_79922[(10)]);
var inst_79902 = (state_79922[(7)]);
var inst_79903 = (state_79922[(9)]);
var inst_79901 = (state_79922[(8)]);
var inst_79906 = (function (){var cs = inst_79892;
var vec__79897 = inst_79901;
var v = inst_79902;
var c = inst_79903;
return (function (p1__79888_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__79888_SHARP_);
});
})();
var inst_79907 = cljs.core.filterv(inst_79906,inst_79892);
var inst_79892__$1 = inst_79907;
var state_79922__$1 = (function (){var statearr_79937 = state_79922;
(statearr_79937[(10)] = inst_79892__$1);

return statearr_79937;
})();
var statearr_79938_80976 = state_79922__$1;
(statearr_79938_80976[(2)] = null);

(statearr_79938_80976[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41726__auto__ = null;
var cljs$core$async$state_machine__41726__auto____0 = (function (){
var statearr_79939 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_79939[(0)] = cljs$core$async$state_machine__41726__auto__);

(statearr_79939[(1)] = (1));

return statearr_79939;
});
var cljs$core$async$state_machine__41726__auto____1 = (function (state_79922){
while(true){
var ret_value__41727__auto__ = (function (){try{while(true){
var result__41728__auto__ = switch__41725__auto__(state_79922);
if(cljs.core.keyword_identical_QMARK_(result__41728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41728__auto__;
}
break;
}
}catch (e79940){if((e79940 instanceof Object)){
var ex__41729__auto__ = e79940;
var statearr_79941_80977 = state_79922;
(statearr_79941_80977[(5)] = ex__41729__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_79922);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79940;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__80978 = state_79922;
state_79922 = G__80978;
continue;
} else {
return ret_value__41727__auto__;
}
break;
}
});
cljs$core$async$state_machine__41726__auto__ = function(state_79922){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41726__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41726__auto____1.call(this,state_79922);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41726__auto____0;
cljs$core$async$state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41726__auto____1;
return cljs$core$async$state_machine__41726__auto__;
})()
})();
var state__41750__auto__ = (function (){var statearr_79942 = (f__41749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41749__auto__.cljs$core$IFn$_invoke$arity$0() : f__41749__auto__.call(null));
(statearr_79942[(6)] = c__41748__auto___80960);

return statearr_79942;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41750__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__79944 = arguments.length;
switch (G__79944) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41748__auto___80986 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41749__auto__ = (function (){var switch__41725__auto__ = (function (state_79968){
var state_val_79969 = (state_79968[(1)]);
if((state_val_79969 === (7))){
var inst_79950 = (state_79968[(7)]);
var inst_79950__$1 = (state_79968[(2)]);
var inst_79951 = (inst_79950__$1 == null);
var inst_79952 = cljs.core.not(inst_79951);
var state_79968__$1 = (function (){var statearr_79970 = state_79968;
(statearr_79970[(7)] = inst_79950__$1);

return statearr_79970;
})();
if(inst_79952){
var statearr_79971_80987 = state_79968__$1;
(statearr_79971_80987[(1)] = (8));

} else {
var statearr_79972_80988 = state_79968__$1;
(statearr_79972_80988[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79969 === (1))){
var inst_79945 = (0);
var state_79968__$1 = (function (){var statearr_79973 = state_79968;
(statearr_79973[(8)] = inst_79945);

return statearr_79973;
})();
var statearr_79974_80989 = state_79968__$1;
(statearr_79974_80989[(2)] = null);

(statearr_79974_80989[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79969 === (4))){
var state_79968__$1 = state_79968;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_79968__$1,(7),ch);
} else {
if((state_val_79969 === (6))){
var inst_79963 = (state_79968[(2)]);
var state_79968__$1 = state_79968;
var statearr_79975_80990 = state_79968__$1;
(statearr_79975_80990[(2)] = inst_79963);

(statearr_79975_80990[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79969 === (3))){
var inst_79965 = (state_79968[(2)]);
var inst_79966 = cljs.core.async.close_BANG_(out);
var state_79968__$1 = (function (){var statearr_79976 = state_79968;
(statearr_79976[(9)] = inst_79965);

return statearr_79976;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_79968__$1,inst_79966);
} else {
if((state_val_79969 === (2))){
var inst_79945 = (state_79968[(8)]);
var inst_79947 = (inst_79945 < n);
var state_79968__$1 = state_79968;
if(cljs.core.truth_(inst_79947)){
var statearr_79977_80991 = state_79968__$1;
(statearr_79977_80991[(1)] = (4));

} else {
var statearr_79978_80992 = state_79968__$1;
(statearr_79978_80992[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79969 === (11))){
var inst_79945 = (state_79968[(8)]);
var inst_79955 = (state_79968[(2)]);
var inst_79956 = (inst_79945 + (1));
var inst_79945__$1 = inst_79956;
var state_79968__$1 = (function (){var statearr_79979 = state_79968;
(statearr_79979[(10)] = inst_79955);

(statearr_79979[(8)] = inst_79945__$1);

return statearr_79979;
})();
var statearr_79980_80999 = state_79968__$1;
(statearr_79980_80999[(2)] = null);

(statearr_79980_80999[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79969 === (9))){
var state_79968__$1 = state_79968;
var statearr_79981_81000 = state_79968__$1;
(statearr_79981_81000[(2)] = null);

(statearr_79981_81000[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79969 === (5))){
var state_79968__$1 = state_79968;
var statearr_79982_81001 = state_79968__$1;
(statearr_79982_81001[(2)] = null);

(statearr_79982_81001[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79969 === (10))){
var inst_79960 = (state_79968[(2)]);
var state_79968__$1 = state_79968;
var statearr_79983_81002 = state_79968__$1;
(statearr_79983_81002[(2)] = inst_79960);

(statearr_79983_81002[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_79969 === (8))){
var inst_79950 = (state_79968[(7)]);
var state_79968__$1 = state_79968;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_79968__$1,(11),out,inst_79950);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41726__auto__ = null;
var cljs$core$async$state_machine__41726__auto____0 = (function (){
var statearr_79984 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_79984[(0)] = cljs$core$async$state_machine__41726__auto__);

(statearr_79984[(1)] = (1));

return statearr_79984;
});
var cljs$core$async$state_machine__41726__auto____1 = (function (state_79968){
while(true){
var ret_value__41727__auto__ = (function (){try{while(true){
var result__41728__auto__ = switch__41725__auto__(state_79968);
if(cljs.core.keyword_identical_QMARK_(result__41728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41728__auto__;
}
break;
}
}catch (e79985){if((e79985 instanceof Object)){
var ex__41729__auto__ = e79985;
var statearr_79986_81003 = state_79968;
(statearr_79986_81003[(5)] = ex__41729__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_79968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e79985;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81004 = state_79968;
state_79968 = G__81004;
continue;
} else {
return ret_value__41727__auto__;
}
break;
}
});
cljs$core$async$state_machine__41726__auto__ = function(state_79968){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41726__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41726__auto____1.call(this,state_79968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41726__auto____0;
cljs$core$async$state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41726__auto____1;
return cljs$core$async$state_machine__41726__auto__;
})()
})();
var state__41750__auto__ = (function (){var statearr_79987 = (f__41749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41749__auto__.cljs$core$IFn$_invoke$arity$0() : f__41749__auto__.call(null));
(statearr_79987[(6)] = c__41748__auto___80986);

return statearr_79987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41750__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async79989 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79989 = (function (f,ch,meta79990){
this.f = f;
this.ch = ch;
this.meta79990 = meta79990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async79989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79991,meta79990__$1){
var self__ = this;
var _79991__$1 = this;
return (new cljs.core.async.t_cljs$core$async79989(self__.f,self__.ch,meta79990__$1));
}));

(cljs.core.async.t_cljs$core$async79989.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79991){
var self__ = this;
var _79991__$1 = this;
return self__.meta79990;
}));

(cljs.core.async.t_cljs$core$async79989.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79989.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async79989.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async79989.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79989.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async79992 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79992 = (function (f,ch,meta79990,_,fn1,meta79993){
this.f = f;
this.ch = ch;
this.meta79990 = meta79990;
this._ = _;
this.fn1 = fn1;
this.meta79993 = meta79993;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async79992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79994,meta79993__$1){
var self__ = this;
var _79994__$1 = this;
return (new cljs.core.async.t_cljs$core$async79992(self__.f,self__.ch,self__.meta79990,self__._,self__.fn1,meta79993__$1));
}));

(cljs.core.async.t_cljs$core$async79992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79994){
var self__ = this;
var _79994__$1 = this;
return self__.meta79993;
}));

(cljs.core.async.t_cljs$core$async79992.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79992.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async79992.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async79992.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__79988_SHARP_){
var G__79995 = (((p1__79988_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__79988_SHARP_) : self__.f.call(null,p1__79988_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__79995) : f1.call(null,G__79995));
});
}));

(cljs.core.async.t_cljs$core$async79992.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta79990","meta79990",626273359,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async79989","cljs.core.async/t_cljs$core$async79989",927811259,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta79993","meta79993",-1200824539,null)], null);
}));

(cljs.core.async.t_cljs$core$async79992.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async79992.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79992");

(cljs.core.async.t_cljs$core$async79992.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async79992");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async79992.
 */
cljs.core.async.__GT_t_cljs$core$async79992 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async79992(f__$1,ch__$1,meta79990__$1,___$2,fn1__$1,meta79993){
return (new cljs.core.async.t_cljs$core$async79992(f__$1,ch__$1,meta79990__$1,___$2,fn1__$1,meta79993));
});

}

return (new cljs.core.async.t_cljs$core$async79992(self__.f,self__.ch,self__.meta79990,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__79996 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__79996) : self__.f.call(null,G__79996));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async79989.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79989.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async79989.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta79990","meta79990",626273359,null)], null);
}));

(cljs.core.async.t_cljs$core$async79989.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async79989.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79989");

(cljs.core.async.t_cljs$core$async79989.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async79989");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async79989.
 */
cljs.core.async.__GT_t_cljs$core$async79989 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async79989(f__$1,ch__$1,meta79990){
return (new cljs.core.async.t_cljs$core$async79989(f__$1,ch__$1,meta79990));
});

}

return (new cljs.core.async.t_cljs$core$async79989(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async79997 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async79997 = (function (f,ch,meta79998){
this.f = f;
this.ch = ch;
this.meta79998 = meta79998;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async79997.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_79999,meta79998__$1){
var self__ = this;
var _79999__$1 = this;
return (new cljs.core.async.t_cljs$core$async79997(self__.f,self__.ch,meta79998__$1));
}));

(cljs.core.async.t_cljs$core$async79997.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_79999){
var self__ = this;
var _79999__$1 = this;
return self__.meta79998;
}));

(cljs.core.async.t_cljs$core$async79997.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79997.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async79997.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79997.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async79997.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async79997.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async79997.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta79998","meta79998",2015296201,null)], null);
}));

(cljs.core.async.t_cljs$core$async79997.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async79997.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async79997");

(cljs.core.async.t_cljs$core$async79997.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async79997");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async79997.
 */
cljs.core.async.__GT_t_cljs$core$async79997 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async79997(f__$1,ch__$1,meta79998){
return (new cljs.core.async.t_cljs$core$async79997(f__$1,ch__$1,meta79998));
});

}

return (new cljs.core.async.t_cljs$core$async79997(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async80000 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async80000 = (function (p,ch,meta80001){
this.p = p;
this.ch = ch;
this.meta80001 = meta80001;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async80000.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_80002,meta80001__$1){
var self__ = this;
var _80002__$1 = this;
return (new cljs.core.async.t_cljs$core$async80000(self__.p,self__.ch,meta80001__$1));
}));

(cljs.core.async.t_cljs$core$async80000.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_80002){
var self__ = this;
var _80002__$1 = this;
return self__.meta80001;
}));

(cljs.core.async.t_cljs$core$async80000.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async80000.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async80000.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async80000.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async80000.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async80000.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async80000.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async80000.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta80001","meta80001",558935231,null)], null);
}));

(cljs.core.async.t_cljs$core$async80000.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async80000.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async80000");

(cljs.core.async.t_cljs$core$async80000.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async80000");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async80000.
 */
cljs.core.async.__GT_t_cljs$core$async80000 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async80000(p__$1,ch__$1,meta80001){
return (new cljs.core.async.t_cljs$core$async80000(p__$1,ch__$1,meta80001));
});

}

return (new cljs.core.async.t_cljs$core$async80000(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__80004 = arguments.length;
switch (G__80004) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41748__auto___81030 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41749__auto__ = (function (){var switch__41725__auto__ = (function (state_80025){
var state_val_80026 = (state_80025[(1)]);
if((state_val_80026 === (7))){
var inst_80021 = (state_80025[(2)]);
var state_80025__$1 = state_80025;
var statearr_80027_81031 = state_80025__$1;
(statearr_80027_81031[(2)] = inst_80021);

(statearr_80027_81031[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80026 === (1))){
var state_80025__$1 = state_80025;
var statearr_80028_81032 = state_80025__$1;
(statearr_80028_81032[(2)] = null);

(statearr_80028_81032[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80026 === (4))){
var inst_80007 = (state_80025[(7)]);
var inst_80007__$1 = (state_80025[(2)]);
var inst_80008 = (inst_80007__$1 == null);
var state_80025__$1 = (function (){var statearr_80029 = state_80025;
(statearr_80029[(7)] = inst_80007__$1);

return statearr_80029;
})();
if(cljs.core.truth_(inst_80008)){
var statearr_80030_81033 = state_80025__$1;
(statearr_80030_81033[(1)] = (5));

} else {
var statearr_80031_81034 = state_80025__$1;
(statearr_80031_81034[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80026 === (6))){
var inst_80007 = (state_80025[(7)]);
var inst_80012 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_80007) : p.call(null,inst_80007));
var state_80025__$1 = state_80025;
if(cljs.core.truth_(inst_80012)){
var statearr_80032_81035 = state_80025__$1;
(statearr_80032_81035[(1)] = (8));

} else {
var statearr_80033_81036 = state_80025__$1;
(statearr_80033_81036[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80026 === (3))){
var inst_80023 = (state_80025[(2)]);
var state_80025__$1 = state_80025;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80025__$1,inst_80023);
} else {
if((state_val_80026 === (2))){
var state_80025__$1 = state_80025;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80025__$1,(4),ch);
} else {
if((state_val_80026 === (11))){
var inst_80015 = (state_80025[(2)]);
var state_80025__$1 = state_80025;
var statearr_80034_81037 = state_80025__$1;
(statearr_80034_81037[(2)] = inst_80015);

(statearr_80034_81037[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80026 === (9))){
var state_80025__$1 = state_80025;
var statearr_80035_81038 = state_80025__$1;
(statearr_80035_81038[(2)] = null);

(statearr_80035_81038[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80026 === (5))){
var inst_80010 = cljs.core.async.close_BANG_(out);
var state_80025__$1 = state_80025;
var statearr_80036_81039 = state_80025__$1;
(statearr_80036_81039[(2)] = inst_80010);

(statearr_80036_81039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80026 === (10))){
var inst_80018 = (state_80025[(2)]);
var state_80025__$1 = (function (){var statearr_80037 = state_80025;
(statearr_80037[(8)] = inst_80018);

return statearr_80037;
})();
var statearr_80038_81040 = state_80025__$1;
(statearr_80038_81040[(2)] = null);

(statearr_80038_81040[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80026 === (8))){
var inst_80007 = (state_80025[(7)]);
var state_80025__$1 = state_80025;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_80025__$1,(11),out,inst_80007);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41726__auto__ = null;
var cljs$core$async$state_machine__41726__auto____0 = (function (){
var statearr_80039 = [null,null,null,null,null,null,null,null,null];
(statearr_80039[(0)] = cljs$core$async$state_machine__41726__auto__);

(statearr_80039[(1)] = (1));

return statearr_80039;
});
var cljs$core$async$state_machine__41726__auto____1 = (function (state_80025){
while(true){
var ret_value__41727__auto__ = (function (){try{while(true){
var result__41728__auto__ = switch__41725__auto__(state_80025);
if(cljs.core.keyword_identical_QMARK_(result__41728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41728__auto__;
}
break;
}
}catch (e80040){if((e80040 instanceof Object)){
var ex__41729__auto__ = e80040;
var statearr_80041_81041 = state_80025;
(statearr_80041_81041[(5)] = ex__41729__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_80025);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80040;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81042 = state_80025;
state_80025 = G__81042;
continue;
} else {
return ret_value__41727__auto__;
}
break;
}
});
cljs$core$async$state_machine__41726__auto__ = function(state_80025){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41726__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41726__auto____1.call(this,state_80025);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41726__auto____0;
cljs$core$async$state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41726__auto____1;
return cljs$core$async$state_machine__41726__auto__;
})()
})();
var state__41750__auto__ = (function (){var statearr_80042 = (f__41749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41749__auto__.cljs$core$IFn$_invoke$arity$0() : f__41749__auto__.call(null));
(statearr_80042[(6)] = c__41748__auto___81030);

return statearr_80042;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41750__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__80044 = arguments.length;
switch (G__80044) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__41748__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41749__auto__ = (function (){var switch__41725__auto__ = (function (state_80106){
var state_val_80107 = (state_80106[(1)]);
if((state_val_80107 === (7))){
var inst_80102 = (state_80106[(2)]);
var state_80106__$1 = state_80106;
var statearr_80108_81047 = state_80106__$1;
(statearr_80108_81047[(2)] = inst_80102);

(statearr_80108_81047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80107 === (20))){
var inst_80072 = (state_80106[(7)]);
var inst_80083 = (state_80106[(2)]);
var inst_80084 = cljs.core.next(inst_80072);
var inst_80058 = inst_80084;
var inst_80059 = null;
var inst_80060 = (0);
var inst_80061 = (0);
var state_80106__$1 = (function (){var statearr_80109 = state_80106;
(statearr_80109[(8)] = inst_80058);

(statearr_80109[(9)] = inst_80060);

(statearr_80109[(10)] = inst_80083);

(statearr_80109[(11)] = inst_80061);

(statearr_80109[(12)] = inst_80059);

return statearr_80109;
})();
var statearr_80110_81049 = state_80106__$1;
(statearr_80110_81049[(2)] = null);

(statearr_80110_81049[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80107 === (1))){
var state_80106__$1 = state_80106;
var statearr_80111_81050 = state_80106__$1;
(statearr_80111_81050[(2)] = null);

(statearr_80111_81050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80107 === (4))){
var inst_80047 = (state_80106[(13)]);
var inst_80047__$1 = (state_80106[(2)]);
var inst_80048 = (inst_80047__$1 == null);
var state_80106__$1 = (function (){var statearr_80112 = state_80106;
(statearr_80112[(13)] = inst_80047__$1);

return statearr_80112;
})();
if(cljs.core.truth_(inst_80048)){
var statearr_80113_81051 = state_80106__$1;
(statearr_80113_81051[(1)] = (5));

} else {
var statearr_80114_81052 = state_80106__$1;
(statearr_80114_81052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80107 === (15))){
var state_80106__$1 = state_80106;
var statearr_80118_81054 = state_80106__$1;
(statearr_80118_81054[(2)] = null);

(statearr_80118_81054[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80107 === (21))){
var state_80106__$1 = state_80106;
var statearr_80119_81055 = state_80106__$1;
(statearr_80119_81055[(2)] = null);

(statearr_80119_81055[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80107 === (13))){
var inst_80058 = (state_80106[(8)]);
var inst_80060 = (state_80106[(9)]);
var inst_80061 = (state_80106[(11)]);
var inst_80059 = (state_80106[(12)]);
var inst_80068 = (state_80106[(2)]);
var inst_80069 = (inst_80061 + (1));
var tmp80115 = inst_80058;
var tmp80116 = inst_80060;
var tmp80117 = inst_80059;
var inst_80058__$1 = tmp80115;
var inst_80059__$1 = tmp80117;
var inst_80060__$1 = tmp80116;
var inst_80061__$1 = inst_80069;
var state_80106__$1 = (function (){var statearr_80120 = state_80106;
(statearr_80120[(8)] = inst_80058__$1);

(statearr_80120[(9)] = inst_80060__$1);

(statearr_80120[(11)] = inst_80061__$1);

(statearr_80120[(12)] = inst_80059__$1);

(statearr_80120[(14)] = inst_80068);

return statearr_80120;
})();
var statearr_80121_81056 = state_80106__$1;
(statearr_80121_81056[(2)] = null);

(statearr_80121_81056[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80107 === (22))){
var state_80106__$1 = state_80106;
var statearr_80122_81058 = state_80106__$1;
(statearr_80122_81058[(2)] = null);

(statearr_80122_81058[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80107 === (6))){
var inst_80047 = (state_80106[(13)]);
var inst_80056 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_80047) : f.call(null,inst_80047));
var inst_80057 = cljs.core.seq(inst_80056);
var inst_80058 = inst_80057;
var inst_80059 = null;
var inst_80060 = (0);
var inst_80061 = (0);
var state_80106__$1 = (function (){var statearr_80123 = state_80106;
(statearr_80123[(8)] = inst_80058);

(statearr_80123[(9)] = inst_80060);

(statearr_80123[(11)] = inst_80061);

(statearr_80123[(12)] = inst_80059);

return statearr_80123;
})();
var statearr_80124_81059 = state_80106__$1;
(statearr_80124_81059[(2)] = null);

(statearr_80124_81059[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80107 === (17))){
var inst_80072 = (state_80106[(7)]);
var inst_80076 = cljs.core.chunk_first(inst_80072);
var inst_80077 = cljs.core.chunk_rest(inst_80072);
var inst_80078 = cljs.core.count(inst_80076);
var inst_80058 = inst_80077;
var inst_80059 = inst_80076;
var inst_80060 = inst_80078;
var inst_80061 = (0);
var state_80106__$1 = (function (){var statearr_80125 = state_80106;
(statearr_80125[(8)] = inst_80058);

(statearr_80125[(9)] = inst_80060);

(statearr_80125[(11)] = inst_80061);

(statearr_80125[(12)] = inst_80059);

return statearr_80125;
})();
var statearr_80126_81060 = state_80106__$1;
(statearr_80126_81060[(2)] = null);

(statearr_80126_81060[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80107 === (3))){
var inst_80104 = (state_80106[(2)]);
var state_80106__$1 = state_80106;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80106__$1,inst_80104);
} else {
if((state_val_80107 === (12))){
var inst_80092 = (state_80106[(2)]);
var state_80106__$1 = state_80106;
var statearr_80127_81061 = state_80106__$1;
(statearr_80127_81061[(2)] = inst_80092);

(statearr_80127_81061[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80107 === (2))){
var state_80106__$1 = state_80106;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80106__$1,(4),in$);
} else {
if((state_val_80107 === (23))){
var inst_80100 = (state_80106[(2)]);
var state_80106__$1 = state_80106;
var statearr_80128_81066 = state_80106__$1;
(statearr_80128_81066[(2)] = inst_80100);

(statearr_80128_81066[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80107 === (19))){
var inst_80087 = (state_80106[(2)]);
var state_80106__$1 = state_80106;
var statearr_80129_81071 = state_80106__$1;
(statearr_80129_81071[(2)] = inst_80087);

(statearr_80129_81071[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80107 === (11))){
var inst_80058 = (state_80106[(8)]);
var inst_80072 = (state_80106[(7)]);
var inst_80072__$1 = cljs.core.seq(inst_80058);
var state_80106__$1 = (function (){var statearr_80130 = state_80106;
(statearr_80130[(7)] = inst_80072__$1);

return statearr_80130;
})();
if(inst_80072__$1){
var statearr_80131_81076 = state_80106__$1;
(statearr_80131_81076[(1)] = (14));

} else {
var statearr_80132_81078 = state_80106__$1;
(statearr_80132_81078[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80107 === (9))){
var inst_80094 = (state_80106[(2)]);
var inst_80095 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_80106__$1 = (function (){var statearr_80133 = state_80106;
(statearr_80133[(15)] = inst_80094);

return statearr_80133;
})();
if(cljs.core.truth_(inst_80095)){
var statearr_80134_81082 = state_80106__$1;
(statearr_80134_81082[(1)] = (21));

} else {
var statearr_80135_81083 = state_80106__$1;
(statearr_80135_81083[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80107 === (5))){
var inst_80050 = cljs.core.async.close_BANG_(out);
var state_80106__$1 = state_80106;
var statearr_80136_81088 = state_80106__$1;
(statearr_80136_81088[(2)] = inst_80050);

(statearr_80136_81088[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80107 === (14))){
var inst_80072 = (state_80106[(7)]);
var inst_80074 = cljs.core.chunked_seq_QMARK_(inst_80072);
var state_80106__$1 = state_80106;
if(inst_80074){
var statearr_80137_81090 = state_80106__$1;
(statearr_80137_81090[(1)] = (17));

} else {
var statearr_80138_81091 = state_80106__$1;
(statearr_80138_81091[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80107 === (16))){
var inst_80090 = (state_80106[(2)]);
var state_80106__$1 = state_80106;
var statearr_80139_81092 = state_80106__$1;
(statearr_80139_81092[(2)] = inst_80090);

(statearr_80139_81092[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80107 === (10))){
var inst_80061 = (state_80106[(11)]);
var inst_80059 = (state_80106[(12)]);
var inst_80066 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_80059,inst_80061);
var state_80106__$1 = state_80106;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_80106__$1,(13),out,inst_80066);
} else {
if((state_val_80107 === (18))){
var inst_80072 = (state_80106[(7)]);
var inst_80081 = cljs.core.first(inst_80072);
var state_80106__$1 = state_80106;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_80106__$1,(20),out,inst_80081);
} else {
if((state_val_80107 === (8))){
var inst_80060 = (state_80106[(9)]);
var inst_80061 = (state_80106[(11)]);
var inst_80063 = (inst_80061 < inst_80060);
var inst_80064 = inst_80063;
var state_80106__$1 = state_80106;
if(cljs.core.truth_(inst_80064)){
var statearr_80140_81093 = state_80106__$1;
(statearr_80140_81093[(1)] = (10));

} else {
var statearr_80141_81094 = state_80106__$1;
(statearr_80141_81094[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__41726__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__41726__auto____0 = (function (){
var statearr_80142 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80142[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__41726__auto__);

(statearr_80142[(1)] = (1));

return statearr_80142;
});
var cljs$core$async$mapcat_STAR__$_state_machine__41726__auto____1 = (function (state_80106){
while(true){
var ret_value__41727__auto__ = (function (){try{while(true){
var result__41728__auto__ = switch__41725__auto__(state_80106);
if(cljs.core.keyword_identical_QMARK_(result__41728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41728__auto__;
}
break;
}
}catch (e80143){if((e80143 instanceof Object)){
var ex__41729__auto__ = e80143;
var statearr_80144_81103 = state_80106;
(statearr_80144_81103[(5)] = ex__41729__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_80106);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80143;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81104 = state_80106;
state_80106 = G__81104;
continue;
} else {
return ret_value__41727__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__41726__auto__ = function(state_80106){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__41726__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__41726__auto____1.call(this,state_80106);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__41726__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__41726__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__41726__auto__;
})()
})();
var state__41750__auto__ = (function (){var statearr_80145 = (f__41749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41749__auto__.cljs$core$IFn$_invoke$arity$0() : f__41749__auto__.call(null));
(statearr_80145[(6)] = c__41748__auto__);

return statearr_80145;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41750__auto__);
}));

return c__41748__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__80147 = arguments.length;
switch (G__80147) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__80149 = arguments.length;
switch (G__80149) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__80151 = arguments.length;
switch (G__80151) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41748__auto___81133 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41749__auto__ = (function (){var switch__41725__auto__ = (function (state_80175){
var state_val_80176 = (state_80175[(1)]);
if((state_val_80176 === (7))){
var inst_80170 = (state_80175[(2)]);
var state_80175__$1 = state_80175;
var statearr_80177_81134 = state_80175__$1;
(statearr_80177_81134[(2)] = inst_80170);

(statearr_80177_81134[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80176 === (1))){
var inst_80152 = null;
var state_80175__$1 = (function (){var statearr_80178 = state_80175;
(statearr_80178[(7)] = inst_80152);

return statearr_80178;
})();
var statearr_80179_81136 = state_80175__$1;
(statearr_80179_81136[(2)] = null);

(statearr_80179_81136[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80176 === (4))){
var inst_80155 = (state_80175[(8)]);
var inst_80155__$1 = (state_80175[(2)]);
var inst_80156 = (inst_80155__$1 == null);
var inst_80157 = cljs.core.not(inst_80156);
var state_80175__$1 = (function (){var statearr_80180 = state_80175;
(statearr_80180[(8)] = inst_80155__$1);

return statearr_80180;
})();
if(inst_80157){
var statearr_80181_81139 = state_80175__$1;
(statearr_80181_81139[(1)] = (5));

} else {
var statearr_80182_81140 = state_80175__$1;
(statearr_80182_81140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80176 === (6))){
var state_80175__$1 = state_80175;
var statearr_80183_81141 = state_80175__$1;
(statearr_80183_81141[(2)] = null);

(statearr_80183_81141[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80176 === (3))){
var inst_80172 = (state_80175[(2)]);
var inst_80173 = cljs.core.async.close_BANG_(out);
var state_80175__$1 = (function (){var statearr_80184 = state_80175;
(statearr_80184[(9)] = inst_80172);

return statearr_80184;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_80175__$1,inst_80173);
} else {
if((state_val_80176 === (2))){
var state_80175__$1 = state_80175;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80175__$1,(4),ch);
} else {
if((state_val_80176 === (11))){
var inst_80155 = (state_80175[(8)]);
var inst_80164 = (state_80175[(2)]);
var inst_80152 = inst_80155;
var state_80175__$1 = (function (){var statearr_80185 = state_80175;
(statearr_80185[(10)] = inst_80164);

(statearr_80185[(7)] = inst_80152);

return statearr_80185;
})();
var statearr_80186_81142 = state_80175__$1;
(statearr_80186_81142[(2)] = null);

(statearr_80186_81142[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80176 === (9))){
var inst_80155 = (state_80175[(8)]);
var state_80175__$1 = state_80175;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_80175__$1,(11),out,inst_80155);
} else {
if((state_val_80176 === (5))){
var inst_80155 = (state_80175[(8)]);
var inst_80152 = (state_80175[(7)]);
var inst_80159 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_80155,inst_80152);
var state_80175__$1 = state_80175;
if(inst_80159){
var statearr_80188_81143 = state_80175__$1;
(statearr_80188_81143[(1)] = (8));

} else {
var statearr_80189_81144 = state_80175__$1;
(statearr_80189_81144[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80176 === (10))){
var inst_80167 = (state_80175[(2)]);
var state_80175__$1 = state_80175;
var statearr_80190_81145 = state_80175__$1;
(statearr_80190_81145[(2)] = inst_80167);

(statearr_80190_81145[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80176 === (8))){
var inst_80152 = (state_80175[(7)]);
var tmp80187 = inst_80152;
var inst_80152__$1 = tmp80187;
var state_80175__$1 = (function (){var statearr_80191 = state_80175;
(statearr_80191[(7)] = inst_80152__$1);

return statearr_80191;
})();
var statearr_80192_81146 = state_80175__$1;
(statearr_80192_81146[(2)] = null);

(statearr_80192_81146[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41726__auto__ = null;
var cljs$core$async$state_machine__41726__auto____0 = (function (){
var statearr_80193 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_80193[(0)] = cljs$core$async$state_machine__41726__auto__);

(statearr_80193[(1)] = (1));

return statearr_80193;
});
var cljs$core$async$state_machine__41726__auto____1 = (function (state_80175){
while(true){
var ret_value__41727__auto__ = (function (){try{while(true){
var result__41728__auto__ = switch__41725__auto__(state_80175);
if(cljs.core.keyword_identical_QMARK_(result__41728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41728__auto__;
}
break;
}
}catch (e80194){if((e80194 instanceof Object)){
var ex__41729__auto__ = e80194;
var statearr_80195_81149 = state_80175;
(statearr_80195_81149[(5)] = ex__41729__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_80175);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80194;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81151 = state_80175;
state_80175 = G__81151;
continue;
} else {
return ret_value__41727__auto__;
}
break;
}
});
cljs$core$async$state_machine__41726__auto__ = function(state_80175){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41726__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41726__auto____1.call(this,state_80175);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41726__auto____0;
cljs$core$async$state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41726__auto____1;
return cljs$core$async$state_machine__41726__auto__;
})()
})();
var state__41750__auto__ = (function (){var statearr_80196 = (f__41749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41749__auto__.cljs$core$IFn$_invoke$arity$0() : f__41749__auto__.call(null));
(statearr_80196[(6)] = c__41748__auto___81133);

return statearr_80196;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41750__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__80198 = arguments.length;
switch (G__80198) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41748__auto___81154 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41749__auto__ = (function (){var switch__41725__auto__ = (function (state_80236){
var state_val_80237 = (state_80236[(1)]);
if((state_val_80237 === (7))){
var inst_80232 = (state_80236[(2)]);
var state_80236__$1 = state_80236;
var statearr_80238_81155 = state_80236__$1;
(statearr_80238_81155[(2)] = inst_80232);

(statearr_80238_81155[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80237 === (1))){
var inst_80199 = (new Array(n));
var inst_80200 = inst_80199;
var inst_80201 = (0);
var state_80236__$1 = (function (){var statearr_80239 = state_80236;
(statearr_80239[(7)] = inst_80200);

(statearr_80239[(8)] = inst_80201);

return statearr_80239;
})();
var statearr_80240_81157 = state_80236__$1;
(statearr_80240_81157[(2)] = null);

(statearr_80240_81157[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80237 === (4))){
var inst_80204 = (state_80236[(9)]);
var inst_80204__$1 = (state_80236[(2)]);
var inst_80205 = (inst_80204__$1 == null);
var inst_80206 = cljs.core.not(inst_80205);
var state_80236__$1 = (function (){var statearr_80241 = state_80236;
(statearr_80241[(9)] = inst_80204__$1);

return statearr_80241;
})();
if(inst_80206){
var statearr_80242_81168 = state_80236__$1;
(statearr_80242_81168[(1)] = (5));

} else {
var statearr_80243_81169 = state_80236__$1;
(statearr_80243_81169[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80237 === (15))){
var inst_80226 = (state_80236[(2)]);
var state_80236__$1 = state_80236;
var statearr_80244_81175 = state_80236__$1;
(statearr_80244_81175[(2)] = inst_80226);

(statearr_80244_81175[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80237 === (13))){
var state_80236__$1 = state_80236;
var statearr_80245_81180 = state_80236__$1;
(statearr_80245_81180[(2)] = null);

(statearr_80245_81180[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80237 === (6))){
var inst_80201 = (state_80236[(8)]);
var inst_80222 = (inst_80201 > (0));
var state_80236__$1 = state_80236;
if(cljs.core.truth_(inst_80222)){
var statearr_80246_81188 = state_80236__$1;
(statearr_80246_81188[(1)] = (12));

} else {
var statearr_80247_81190 = state_80236__$1;
(statearr_80247_81190[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80237 === (3))){
var inst_80234 = (state_80236[(2)]);
var state_80236__$1 = state_80236;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80236__$1,inst_80234);
} else {
if((state_val_80237 === (12))){
var inst_80200 = (state_80236[(7)]);
var inst_80224 = cljs.core.vec(inst_80200);
var state_80236__$1 = state_80236;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_80236__$1,(15),out,inst_80224);
} else {
if((state_val_80237 === (2))){
var state_80236__$1 = state_80236;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80236__$1,(4),ch);
} else {
if((state_val_80237 === (11))){
var inst_80216 = (state_80236[(2)]);
var inst_80217 = (new Array(n));
var inst_80200 = inst_80217;
var inst_80201 = (0);
var state_80236__$1 = (function (){var statearr_80248 = state_80236;
(statearr_80248[(7)] = inst_80200);

(statearr_80248[(10)] = inst_80216);

(statearr_80248[(8)] = inst_80201);

return statearr_80248;
})();
var statearr_80249_81212 = state_80236__$1;
(statearr_80249_81212[(2)] = null);

(statearr_80249_81212[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80237 === (9))){
var inst_80200 = (state_80236[(7)]);
var inst_80214 = cljs.core.vec(inst_80200);
var state_80236__$1 = state_80236;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_80236__$1,(11),out,inst_80214);
} else {
if((state_val_80237 === (5))){
var inst_80209 = (state_80236[(11)]);
var inst_80204 = (state_80236[(9)]);
var inst_80200 = (state_80236[(7)]);
var inst_80201 = (state_80236[(8)]);
var inst_80208 = (inst_80200[inst_80201] = inst_80204);
var inst_80209__$1 = (inst_80201 + (1));
var inst_80210 = (inst_80209__$1 < n);
var state_80236__$1 = (function (){var statearr_80250 = state_80236;
(statearr_80250[(11)] = inst_80209__$1);

(statearr_80250[(12)] = inst_80208);

return statearr_80250;
})();
if(cljs.core.truth_(inst_80210)){
var statearr_80251_81230 = state_80236__$1;
(statearr_80251_81230[(1)] = (8));

} else {
var statearr_80252_81232 = state_80236__$1;
(statearr_80252_81232[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80237 === (14))){
var inst_80229 = (state_80236[(2)]);
var inst_80230 = cljs.core.async.close_BANG_(out);
var state_80236__$1 = (function (){var statearr_80254 = state_80236;
(statearr_80254[(13)] = inst_80229);

return statearr_80254;
})();
var statearr_80255_81239 = state_80236__$1;
(statearr_80255_81239[(2)] = inst_80230);

(statearr_80255_81239[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80237 === (10))){
var inst_80220 = (state_80236[(2)]);
var state_80236__$1 = state_80236;
var statearr_80256_81248 = state_80236__$1;
(statearr_80256_81248[(2)] = inst_80220);

(statearr_80256_81248[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80237 === (8))){
var inst_80209 = (state_80236[(11)]);
var inst_80200 = (state_80236[(7)]);
var tmp80253 = inst_80200;
var inst_80200__$1 = tmp80253;
var inst_80201 = inst_80209;
var state_80236__$1 = (function (){var statearr_80257 = state_80236;
(statearr_80257[(7)] = inst_80200__$1);

(statearr_80257[(8)] = inst_80201);

return statearr_80257;
})();
var statearr_80258_81254 = state_80236__$1;
(statearr_80258_81254[(2)] = null);

(statearr_80258_81254[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41726__auto__ = null;
var cljs$core$async$state_machine__41726__auto____0 = (function (){
var statearr_80259 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80259[(0)] = cljs$core$async$state_machine__41726__auto__);

(statearr_80259[(1)] = (1));

return statearr_80259;
});
var cljs$core$async$state_machine__41726__auto____1 = (function (state_80236){
while(true){
var ret_value__41727__auto__ = (function (){try{while(true){
var result__41728__auto__ = switch__41725__auto__(state_80236);
if(cljs.core.keyword_identical_QMARK_(result__41728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41728__auto__;
}
break;
}
}catch (e80260){if((e80260 instanceof Object)){
var ex__41729__auto__ = e80260;
var statearr_80261_81255 = state_80236;
(statearr_80261_81255[(5)] = ex__41729__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_80236);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80260;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81256 = state_80236;
state_80236 = G__81256;
continue;
} else {
return ret_value__41727__auto__;
}
break;
}
});
cljs$core$async$state_machine__41726__auto__ = function(state_80236){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41726__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41726__auto____1.call(this,state_80236);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41726__auto____0;
cljs$core$async$state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41726__auto____1;
return cljs$core$async$state_machine__41726__auto__;
})()
})();
var state__41750__auto__ = (function (){var statearr_80262 = (f__41749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41749__auto__.cljs$core$IFn$_invoke$arity$0() : f__41749__auto__.call(null));
(statearr_80262[(6)] = c__41748__auto___81154);

return statearr_80262;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41750__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__80264 = arguments.length;
switch (G__80264) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__41748__auto___81271 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__41749__auto__ = (function (){var switch__41725__auto__ = (function (state_80306){
var state_val_80307 = (state_80306[(1)]);
if((state_val_80307 === (7))){
var inst_80302 = (state_80306[(2)]);
var state_80306__$1 = state_80306;
var statearr_80308_81277 = state_80306__$1;
(statearr_80308_81277[(2)] = inst_80302);

(statearr_80308_81277[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80307 === (1))){
var inst_80265 = [];
var inst_80266 = inst_80265;
var inst_80267 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_80306__$1 = (function (){var statearr_80309 = state_80306;
(statearr_80309[(7)] = inst_80266);

(statearr_80309[(8)] = inst_80267);

return statearr_80309;
})();
var statearr_80310_81279 = state_80306__$1;
(statearr_80310_81279[(2)] = null);

(statearr_80310_81279[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80307 === (4))){
var inst_80270 = (state_80306[(9)]);
var inst_80270__$1 = (state_80306[(2)]);
var inst_80271 = (inst_80270__$1 == null);
var inst_80272 = cljs.core.not(inst_80271);
var state_80306__$1 = (function (){var statearr_80311 = state_80306;
(statearr_80311[(9)] = inst_80270__$1);

return statearr_80311;
})();
if(inst_80272){
var statearr_80312_81280 = state_80306__$1;
(statearr_80312_81280[(1)] = (5));

} else {
var statearr_80313_81282 = state_80306__$1;
(statearr_80313_81282[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80307 === (15))){
var inst_80296 = (state_80306[(2)]);
var state_80306__$1 = state_80306;
var statearr_80314_81283 = state_80306__$1;
(statearr_80314_81283[(2)] = inst_80296);

(statearr_80314_81283[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80307 === (13))){
var state_80306__$1 = state_80306;
var statearr_80315_81284 = state_80306__$1;
(statearr_80315_81284[(2)] = null);

(statearr_80315_81284[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80307 === (6))){
var inst_80266 = (state_80306[(7)]);
var inst_80291 = inst_80266.length;
var inst_80292 = (inst_80291 > (0));
var state_80306__$1 = state_80306;
if(cljs.core.truth_(inst_80292)){
var statearr_80316_81285 = state_80306__$1;
(statearr_80316_81285[(1)] = (12));

} else {
var statearr_80317_81286 = state_80306__$1;
(statearr_80317_81286[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80307 === (3))){
var inst_80304 = (state_80306[(2)]);
var state_80306__$1 = state_80306;
return cljs.core.async.impl.ioc_helpers.return_chan(state_80306__$1,inst_80304);
} else {
if((state_val_80307 === (12))){
var inst_80266 = (state_80306[(7)]);
var inst_80294 = cljs.core.vec(inst_80266);
var state_80306__$1 = state_80306;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_80306__$1,(15),out,inst_80294);
} else {
if((state_val_80307 === (2))){
var state_80306__$1 = state_80306;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_80306__$1,(4),ch);
} else {
if((state_val_80307 === (11))){
var inst_80270 = (state_80306[(9)]);
var inst_80274 = (state_80306[(10)]);
var inst_80284 = (state_80306[(2)]);
var inst_80285 = [];
var inst_80286 = inst_80285.push(inst_80270);
var inst_80266 = inst_80285;
var inst_80267 = inst_80274;
var state_80306__$1 = (function (){var statearr_80318 = state_80306;
(statearr_80318[(11)] = inst_80286);

(statearr_80318[(12)] = inst_80284);

(statearr_80318[(7)] = inst_80266);

(statearr_80318[(8)] = inst_80267);

return statearr_80318;
})();
var statearr_80319_81291 = state_80306__$1;
(statearr_80319_81291[(2)] = null);

(statearr_80319_81291[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80307 === (9))){
var inst_80266 = (state_80306[(7)]);
var inst_80282 = cljs.core.vec(inst_80266);
var state_80306__$1 = state_80306;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_80306__$1,(11),out,inst_80282);
} else {
if((state_val_80307 === (5))){
var inst_80270 = (state_80306[(9)]);
var inst_80274 = (state_80306[(10)]);
var inst_80267 = (state_80306[(8)]);
var inst_80274__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_80270) : f.call(null,inst_80270));
var inst_80275 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_80274__$1,inst_80267);
var inst_80276 = cljs.core.keyword_identical_QMARK_(inst_80267,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_80277 = ((inst_80275) || (inst_80276));
var state_80306__$1 = (function (){var statearr_80320 = state_80306;
(statearr_80320[(10)] = inst_80274__$1);

return statearr_80320;
})();
if(cljs.core.truth_(inst_80277)){
var statearr_80321_81298 = state_80306__$1;
(statearr_80321_81298[(1)] = (8));

} else {
var statearr_80322_81300 = state_80306__$1;
(statearr_80322_81300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80307 === (14))){
var inst_80299 = (state_80306[(2)]);
var inst_80300 = cljs.core.async.close_BANG_(out);
var state_80306__$1 = (function (){var statearr_80324 = state_80306;
(statearr_80324[(13)] = inst_80299);

return statearr_80324;
})();
var statearr_80325_81305 = state_80306__$1;
(statearr_80325_81305[(2)] = inst_80300);

(statearr_80325_81305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80307 === (10))){
var inst_80289 = (state_80306[(2)]);
var state_80306__$1 = state_80306;
var statearr_80326_81307 = state_80306__$1;
(statearr_80326_81307[(2)] = inst_80289);

(statearr_80326_81307[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_80307 === (8))){
var inst_80270 = (state_80306[(9)]);
var inst_80266 = (state_80306[(7)]);
var inst_80274 = (state_80306[(10)]);
var inst_80279 = inst_80266.push(inst_80270);
var tmp80323 = inst_80266;
var inst_80266__$1 = tmp80323;
var inst_80267 = inst_80274;
var state_80306__$1 = (function (){var statearr_80327 = state_80306;
(statearr_80327[(7)] = inst_80266__$1);

(statearr_80327[(8)] = inst_80267);

(statearr_80327[(14)] = inst_80279);

return statearr_80327;
})();
var statearr_80328_81319 = state_80306__$1;
(statearr_80328_81319[(2)] = null);

(statearr_80328_81319[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__41726__auto__ = null;
var cljs$core$async$state_machine__41726__auto____0 = (function (){
var statearr_80329 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_80329[(0)] = cljs$core$async$state_machine__41726__auto__);

(statearr_80329[(1)] = (1));

return statearr_80329;
});
var cljs$core$async$state_machine__41726__auto____1 = (function (state_80306){
while(true){
var ret_value__41727__auto__ = (function (){try{while(true){
var result__41728__auto__ = switch__41725__auto__(state_80306);
if(cljs.core.keyword_identical_QMARK_(result__41728__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__41728__auto__;
}
break;
}
}catch (e80330){if((e80330 instanceof Object)){
var ex__41729__auto__ = e80330;
var statearr_80331_81329 = state_80306;
(statearr_80331_81329[(5)] = ex__41729__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_80306);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e80330;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__41727__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__81333 = state_80306;
state_80306 = G__81333;
continue;
} else {
return ret_value__41727__auto__;
}
break;
}
});
cljs$core$async$state_machine__41726__auto__ = function(state_80306){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__41726__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__41726__auto____1.call(this,state_80306);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__41726__auto____0;
cljs$core$async$state_machine__41726__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__41726__auto____1;
return cljs$core$async$state_machine__41726__auto__;
})()
})();
var state__41750__auto__ = (function (){var statearr_80332 = (f__41749__auto__.cljs$core$IFn$_invoke$arity$0 ? f__41749__auto__.cljs$core$IFn$_invoke$arity$0() : f__41749__auto__.call(null));
(statearr_80332[(6)] = c__41748__auto___81271);

return statearr_80332;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__41750__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
