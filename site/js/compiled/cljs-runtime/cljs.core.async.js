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
var G__46194 = arguments.length;
switch (G__46194) {
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46195 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46195 = (function (f,blockable,meta46196){
this.f = f;
this.blockable = blockable;
this.meta46196 = meta46196;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46195.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46197,meta46196__$1){
var self__ = this;
var _46197__$1 = this;
return (new cljs.core.async.t_cljs$core$async46195(self__.f,self__.blockable,meta46196__$1));
}));

(cljs.core.async.t_cljs$core$async46195.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46197){
var self__ = this;
var _46197__$1 = this;
return self__.meta46196;
}));

(cljs.core.async.t_cljs$core$async46195.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46195.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46195.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async46195.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async46195.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta46196","meta46196",1530736886,null)], null);
}));

(cljs.core.async.t_cljs$core$async46195.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46195.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46195");

(cljs.core.async.t_cljs$core$async46195.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46195");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46195.
 */
cljs.core.async.__GT_t_cljs$core$async46195 = (function cljs$core$async$__GT_t_cljs$core$async46195(f__$1,blockable__$1,meta46196){
return (new cljs.core.async.t_cljs$core$async46195(f__$1,blockable__$1,meta46196));
});

}

return (new cljs.core.async.t_cljs$core$async46195(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__46200 = arguments.length;
switch (G__46200) {
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
var G__46202 = arguments.length;
switch (G__46202) {
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
var G__46204 = arguments.length;
switch (G__46204) {
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
var val_47645 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47645) : fn1.call(null,val_47645));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_47645) : fn1.call(null,val_47645));
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
var G__46206 = arguments.length;
switch (G__46206) {
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
var n__4666__auto___47662 = n;
var x_47664 = (0);
while(true){
if((x_47664 < n__4666__auto___47662)){
(a[x_47664] = x_47664);

var G__47666 = (x_47664 + (1));
x_47664 = G__47666;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46207 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46207 = (function (flag,meta46208){
this.flag = flag;
this.meta46208 = meta46208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46209,meta46208__$1){
var self__ = this;
var _46209__$1 = this;
return (new cljs.core.async.t_cljs$core$async46207(self__.flag,meta46208__$1));
}));

(cljs.core.async.t_cljs$core$async46207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46209){
var self__ = this;
var _46209__$1 = this;
return self__.meta46208;
}));

(cljs.core.async.t_cljs$core$async46207.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46207.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46207.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46207.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async46207.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta46208","meta46208",-1200530855,null)], null);
}));

(cljs.core.async.t_cljs$core$async46207.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46207.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46207");

(cljs.core.async.t_cljs$core$async46207.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46207");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46207.
 */
cljs.core.async.__GT_t_cljs$core$async46207 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async46207(flag__$1,meta46208){
return (new cljs.core.async.t_cljs$core$async46207(flag__$1,meta46208));
});

}

return (new cljs.core.async.t_cljs$core$async46207(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46210 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46210 = (function (flag,cb,meta46211){
this.flag = flag;
this.cb = cb;
this.meta46211 = meta46211;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46210.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46212,meta46211__$1){
var self__ = this;
var _46212__$1 = this;
return (new cljs.core.async.t_cljs$core$async46210(self__.flag,self__.cb,meta46211__$1));
}));

(cljs.core.async.t_cljs$core$async46210.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46212){
var self__ = this;
var _46212__$1 = this;
return self__.meta46211;
}));

(cljs.core.async.t_cljs$core$async46210.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46210.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async46210.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async46210.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async46210.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta46211","meta46211",1948189407,null)], null);
}));

(cljs.core.async.t_cljs$core$async46210.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46210.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46210");

(cljs.core.async.t_cljs$core$async46210.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46210");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46210.
 */
cljs.core.async.__GT_t_cljs$core$async46210 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async46210(flag__$1,cb__$1,meta46211){
return (new cljs.core.async.t_cljs$core$async46210(flag__$1,cb__$1,meta46211));
});

}

return (new cljs.core.async.t_cljs$core$async46210(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__46213_SHARP_){
var G__46215 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46213_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46215) : fret.call(null,G__46215));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__46214_SHARP_){
var G__46216 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__46214_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__46216) : fret.call(null,G__46216));
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
var G__47690 = (i + (1));
i = G__47690;
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
var len__4789__auto___47695 = arguments.length;
var i__4790__auto___47696 = (0);
while(true){
if((i__4790__auto___47696 < len__4789__auto___47695)){
args__4795__auto__.push((arguments[i__4790__auto___47696]));

var G__47697 = (i__4790__auto___47696 + (1));
i__4790__auto___47696 = G__47697;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__46219){
var map__46220 = p__46219;
var map__46220__$1 = (((((!((map__46220 == null))))?(((((map__46220.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46220.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46220):map__46220);
var opts = map__46220__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq46217){
var G__46218 = cljs.core.first(seq46217);
var seq46217__$1 = cljs.core.next(seq46217);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46218,seq46217__$1);
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
var G__46223 = arguments.length;
switch (G__46223) {
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
var c__46136__auto___47705 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46137__auto__ = (function (){var switch__46033__auto__ = (function (state_46247){
var state_val_46248 = (state_46247[(1)]);
if((state_val_46248 === (7))){
var inst_46243 = (state_46247[(2)]);
var state_46247__$1 = state_46247;
var statearr_46249_47706 = state_46247__$1;
(statearr_46249_47706[(2)] = inst_46243);

(statearr_46249_47706[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46248 === (1))){
var state_46247__$1 = state_46247;
var statearr_46250_47707 = state_46247__$1;
(statearr_46250_47707[(2)] = null);

(statearr_46250_47707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46248 === (4))){
var inst_46226 = (state_46247[(7)]);
var inst_46226__$1 = (state_46247[(2)]);
var inst_46227 = (inst_46226__$1 == null);
var state_46247__$1 = (function (){var statearr_46251 = state_46247;
(statearr_46251[(7)] = inst_46226__$1);

return statearr_46251;
})();
if(cljs.core.truth_(inst_46227)){
var statearr_46252_47711 = state_46247__$1;
(statearr_46252_47711[(1)] = (5));

} else {
var statearr_46253_47712 = state_46247__$1;
(statearr_46253_47712[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46248 === (13))){
var state_46247__$1 = state_46247;
var statearr_46254_47714 = state_46247__$1;
(statearr_46254_47714[(2)] = null);

(statearr_46254_47714[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46248 === (6))){
var inst_46226 = (state_46247[(7)]);
var state_46247__$1 = state_46247;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46247__$1,(11),to,inst_46226);
} else {
if((state_val_46248 === (3))){
var inst_46245 = (state_46247[(2)]);
var state_46247__$1 = state_46247;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46247__$1,inst_46245);
} else {
if((state_val_46248 === (12))){
var state_46247__$1 = state_46247;
var statearr_46255_47715 = state_46247__$1;
(statearr_46255_47715[(2)] = null);

(statearr_46255_47715[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46248 === (2))){
var state_46247__$1 = state_46247;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46247__$1,(4),from);
} else {
if((state_val_46248 === (11))){
var inst_46236 = (state_46247[(2)]);
var state_46247__$1 = state_46247;
if(cljs.core.truth_(inst_46236)){
var statearr_46256_47716 = state_46247__$1;
(statearr_46256_47716[(1)] = (12));

} else {
var statearr_46257_47718 = state_46247__$1;
(statearr_46257_47718[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46248 === (9))){
var state_46247__$1 = state_46247;
var statearr_46258_47720 = state_46247__$1;
(statearr_46258_47720[(2)] = null);

(statearr_46258_47720[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46248 === (5))){
var state_46247__$1 = state_46247;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46259_47722 = state_46247__$1;
(statearr_46259_47722[(1)] = (8));

} else {
var statearr_46260_47723 = state_46247__$1;
(statearr_46260_47723[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46248 === (14))){
var inst_46241 = (state_46247[(2)]);
var state_46247__$1 = state_46247;
var statearr_46261_47725 = state_46247__$1;
(statearr_46261_47725[(2)] = inst_46241);

(statearr_46261_47725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46248 === (10))){
var inst_46233 = (state_46247[(2)]);
var state_46247__$1 = state_46247;
var statearr_46262_47727 = state_46247__$1;
(statearr_46262_47727[(2)] = inst_46233);

(statearr_46262_47727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46248 === (8))){
var inst_46230 = cljs.core.async.close_BANG_(to);
var state_46247__$1 = state_46247;
var statearr_46263_47729 = state_46247__$1;
(statearr_46263_47729[(2)] = inst_46230);

(statearr_46263_47729[(1)] = (10));


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
var cljs$core$async$state_machine__46034__auto__ = null;
var cljs$core$async$state_machine__46034__auto____0 = (function (){
var statearr_46264 = [null,null,null,null,null,null,null,null];
(statearr_46264[(0)] = cljs$core$async$state_machine__46034__auto__);

(statearr_46264[(1)] = (1));

return statearr_46264;
});
var cljs$core$async$state_machine__46034__auto____1 = (function (state_46247){
while(true){
var ret_value__46035__auto__ = (function (){try{while(true){
var result__46036__auto__ = switch__46033__auto__(state_46247);
if(cljs.core.keyword_identical_QMARK_(result__46036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46036__auto__;
}
break;
}
}catch (e46265){if((e46265 instanceof Object)){
var ex__46037__auto__ = e46265;
var statearr_46266_47731 = state_46247;
(statearr_46266_47731[(5)] = ex__46037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46247);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46265;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47732 = state_46247;
state_46247 = G__47732;
continue;
} else {
return ret_value__46035__auto__;
}
break;
}
});
cljs$core$async$state_machine__46034__auto__ = function(state_46247){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46034__auto____1.call(this,state_46247);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46034__auto____0;
cljs$core$async$state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46034__auto____1;
return cljs$core$async$state_machine__46034__auto__;
})()
})();
var state__46138__auto__ = (function (){var statearr_46267 = (f__46137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46137__auto__.cljs$core$IFn$_invoke$arity$0() : f__46137__auto__.call(null));
(statearr_46267[(6)] = c__46136__auto___47705);

return statearr_46267;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46138__auto__);
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
var process = (function (p__46268){
var vec__46269 = p__46268;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46269,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46269,(1),null);
var job = vec__46269;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__46136__auto___47735 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46137__auto__ = (function (){var switch__46033__auto__ = (function (state_46276){
var state_val_46277 = (state_46276[(1)]);
if((state_val_46277 === (1))){
var state_46276__$1 = state_46276;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46276__$1,(2),res,v);
} else {
if((state_val_46277 === (2))){
var inst_46273 = (state_46276[(2)]);
var inst_46274 = cljs.core.async.close_BANG_(res);
var state_46276__$1 = (function (){var statearr_46278 = state_46276;
(statearr_46278[(7)] = inst_46273);

return statearr_46278;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_46276__$1,inst_46274);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46034__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46034__auto____0 = (function (){
var statearr_46279 = [null,null,null,null,null,null,null,null];
(statearr_46279[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46034__auto__);

(statearr_46279[(1)] = (1));

return statearr_46279;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46034__auto____1 = (function (state_46276){
while(true){
var ret_value__46035__auto__ = (function (){try{while(true){
var result__46036__auto__ = switch__46033__auto__(state_46276);
if(cljs.core.keyword_identical_QMARK_(result__46036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46036__auto__;
}
break;
}
}catch (e46280){if((e46280 instanceof Object)){
var ex__46037__auto__ = e46280;
var statearr_46281_47736 = state_46276;
(statearr_46281_47736[(5)] = ex__46037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46276);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46280;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47737 = state_46276;
state_46276 = G__47737;
continue;
} else {
return ret_value__46035__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46034__auto__ = function(state_46276){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46034__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46034__auto____1.call(this,state_46276);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46034__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46034__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46034__auto__;
})()
})();
var state__46138__auto__ = (function (){var statearr_46282 = (f__46137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46137__auto__.cljs$core$IFn$_invoke$arity$0() : f__46137__auto__.call(null));
(statearr_46282[(6)] = c__46136__auto___47735);

return statearr_46282;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46138__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__46283){
var vec__46284 = p__46283;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46284,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__46284,(1),null);
var job = vec__46284;
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
var n__4666__auto___47738 = n;
var __47739 = (0);
while(true){
if((__47739 < n__4666__auto___47738)){
var G__46287_47740 = type;
var G__46287_47741__$1 = (((G__46287_47740 instanceof cljs.core.Keyword))?G__46287_47740.fqn:null);
switch (G__46287_47741__$1) {
case "compute":
var c__46136__auto___47743 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47739,c__46136__auto___47743,G__46287_47740,G__46287_47741__$1,n__4666__auto___47738,jobs,results,process,async){
return (function (){
var f__46137__auto__ = (function (){var switch__46033__auto__ = ((function (__47739,c__46136__auto___47743,G__46287_47740,G__46287_47741__$1,n__4666__auto___47738,jobs,results,process,async){
return (function (state_46300){
var state_val_46301 = (state_46300[(1)]);
if((state_val_46301 === (1))){
var state_46300__$1 = state_46300;
var statearr_46302_47744 = state_46300__$1;
(statearr_46302_47744[(2)] = null);

(statearr_46302_47744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46301 === (2))){
var state_46300__$1 = state_46300;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46300__$1,(4),jobs);
} else {
if((state_val_46301 === (3))){
var inst_46298 = (state_46300[(2)]);
var state_46300__$1 = state_46300;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46300__$1,inst_46298);
} else {
if((state_val_46301 === (4))){
var inst_46290 = (state_46300[(2)]);
var inst_46291 = process(inst_46290);
var state_46300__$1 = state_46300;
if(cljs.core.truth_(inst_46291)){
var statearr_46303_47745 = state_46300__$1;
(statearr_46303_47745[(1)] = (5));

} else {
var statearr_46304_47746 = state_46300__$1;
(statearr_46304_47746[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46301 === (5))){
var state_46300__$1 = state_46300;
var statearr_46305_47749 = state_46300__$1;
(statearr_46305_47749[(2)] = null);

(statearr_46305_47749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46301 === (6))){
var state_46300__$1 = state_46300;
var statearr_46306_47750 = state_46300__$1;
(statearr_46306_47750[(2)] = null);

(statearr_46306_47750[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46301 === (7))){
var inst_46296 = (state_46300[(2)]);
var state_46300__$1 = state_46300;
var statearr_46307_47751 = state_46300__$1;
(statearr_46307_47751[(2)] = inst_46296);

(statearr_46307_47751[(1)] = (3));


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
});})(__47739,c__46136__auto___47743,G__46287_47740,G__46287_47741__$1,n__4666__auto___47738,jobs,results,process,async))
;
return ((function (__47739,switch__46033__auto__,c__46136__auto___47743,G__46287_47740,G__46287_47741__$1,n__4666__auto___47738,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46034__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46034__auto____0 = (function (){
var statearr_46308 = [null,null,null,null,null,null,null];
(statearr_46308[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46034__auto__);

(statearr_46308[(1)] = (1));

return statearr_46308;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46034__auto____1 = (function (state_46300){
while(true){
var ret_value__46035__auto__ = (function (){try{while(true){
var result__46036__auto__ = switch__46033__auto__(state_46300);
if(cljs.core.keyword_identical_QMARK_(result__46036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46036__auto__;
}
break;
}
}catch (e46309){if((e46309 instanceof Object)){
var ex__46037__auto__ = e46309;
var statearr_46310_47752 = state_46300;
(statearr_46310_47752[(5)] = ex__46037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46300);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46309;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47753 = state_46300;
state_46300 = G__47753;
continue;
} else {
return ret_value__46035__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46034__auto__ = function(state_46300){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46034__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46034__auto____1.call(this,state_46300);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46034__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46034__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46034__auto__;
})()
;})(__47739,switch__46033__auto__,c__46136__auto___47743,G__46287_47740,G__46287_47741__$1,n__4666__auto___47738,jobs,results,process,async))
})();
var state__46138__auto__ = (function (){var statearr_46311 = (f__46137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46137__auto__.cljs$core$IFn$_invoke$arity$0() : f__46137__auto__.call(null));
(statearr_46311[(6)] = c__46136__auto___47743);

return statearr_46311;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46138__auto__);
});})(__47739,c__46136__auto___47743,G__46287_47740,G__46287_47741__$1,n__4666__auto___47738,jobs,results,process,async))
);


break;
case "async":
var c__46136__auto___47754 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__47739,c__46136__auto___47754,G__46287_47740,G__46287_47741__$1,n__4666__auto___47738,jobs,results,process,async){
return (function (){
var f__46137__auto__ = (function (){var switch__46033__auto__ = ((function (__47739,c__46136__auto___47754,G__46287_47740,G__46287_47741__$1,n__4666__auto___47738,jobs,results,process,async){
return (function (state_46324){
var state_val_46325 = (state_46324[(1)]);
if((state_val_46325 === (1))){
var state_46324__$1 = state_46324;
var statearr_46326_47755 = state_46324__$1;
(statearr_46326_47755[(2)] = null);

(statearr_46326_47755[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46325 === (2))){
var state_46324__$1 = state_46324;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46324__$1,(4),jobs);
} else {
if((state_val_46325 === (3))){
var inst_46322 = (state_46324[(2)]);
var state_46324__$1 = state_46324;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46324__$1,inst_46322);
} else {
if((state_val_46325 === (4))){
var inst_46314 = (state_46324[(2)]);
var inst_46315 = async(inst_46314);
var state_46324__$1 = state_46324;
if(cljs.core.truth_(inst_46315)){
var statearr_46327_47756 = state_46324__$1;
(statearr_46327_47756[(1)] = (5));

} else {
var statearr_46328_47757 = state_46324__$1;
(statearr_46328_47757[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46325 === (5))){
var state_46324__$1 = state_46324;
var statearr_46329_47758 = state_46324__$1;
(statearr_46329_47758[(2)] = null);

(statearr_46329_47758[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46325 === (6))){
var state_46324__$1 = state_46324;
var statearr_46330_47759 = state_46324__$1;
(statearr_46330_47759[(2)] = null);

(statearr_46330_47759[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46325 === (7))){
var inst_46320 = (state_46324[(2)]);
var state_46324__$1 = state_46324;
var statearr_46331_47760 = state_46324__$1;
(statearr_46331_47760[(2)] = inst_46320);

(statearr_46331_47760[(1)] = (3));


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
});})(__47739,c__46136__auto___47754,G__46287_47740,G__46287_47741__$1,n__4666__auto___47738,jobs,results,process,async))
;
return ((function (__47739,switch__46033__auto__,c__46136__auto___47754,G__46287_47740,G__46287_47741__$1,n__4666__auto___47738,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__46034__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46034__auto____0 = (function (){
var statearr_46332 = [null,null,null,null,null,null,null];
(statearr_46332[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46034__auto__);

(statearr_46332[(1)] = (1));

return statearr_46332;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46034__auto____1 = (function (state_46324){
while(true){
var ret_value__46035__auto__ = (function (){try{while(true){
var result__46036__auto__ = switch__46033__auto__(state_46324);
if(cljs.core.keyword_identical_QMARK_(result__46036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46036__auto__;
}
break;
}
}catch (e46333){if((e46333 instanceof Object)){
var ex__46037__auto__ = e46333;
var statearr_46334_47761 = state_46324;
(statearr_46334_47761[(5)] = ex__46037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46324);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46333;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47762 = state_46324;
state_46324 = G__47762;
continue;
} else {
return ret_value__46035__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46034__auto__ = function(state_46324){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46034__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46034__auto____1.call(this,state_46324);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46034__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46034__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46034__auto__;
})()
;})(__47739,switch__46033__auto__,c__46136__auto___47754,G__46287_47740,G__46287_47741__$1,n__4666__auto___47738,jobs,results,process,async))
})();
var state__46138__auto__ = (function (){var statearr_46335 = (f__46137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46137__auto__.cljs$core$IFn$_invoke$arity$0() : f__46137__auto__.call(null));
(statearr_46335[(6)] = c__46136__auto___47754);

return statearr_46335;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46138__auto__);
});})(__47739,c__46136__auto___47754,G__46287_47740,G__46287_47741__$1,n__4666__auto___47738,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__46287_47741__$1)].join('')));

}

var G__47763 = (__47739 + (1));
__47739 = G__47763;
continue;
} else {
}
break;
}

var c__46136__auto___47764 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46137__auto__ = (function (){var switch__46033__auto__ = (function (state_46357){
var state_val_46358 = (state_46357[(1)]);
if((state_val_46358 === (7))){
var inst_46353 = (state_46357[(2)]);
var state_46357__$1 = state_46357;
var statearr_46359_47766 = state_46357__$1;
(statearr_46359_47766[(2)] = inst_46353);

(statearr_46359_47766[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46358 === (1))){
var state_46357__$1 = state_46357;
var statearr_46360_47767 = state_46357__$1;
(statearr_46360_47767[(2)] = null);

(statearr_46360_47767[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46358 === (4))){
var inst_46338 = (state_46357[(7)]);
var inst_46338__$1 = (state_46357[(2)]);
var inst_46339 = (inst_46338__$1 == null);
var state_46357__$1 = (function (){var statearr_46361 = state_46357;
(statearr_46361[(7)] = inst_46338__$1);

return statearr_46361;
})();
if(cljs.core.truth_(inst_46339)){
var statearr_46362_47768 = state_46357__$1;
(statearr_46362_47768[(1)] = (5));

} else {
var statearr_46363_47769 = state_46357__$1;
(statearr_46363_47769[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46358 === (6))){
var inst_46338 = (state_46357[(7)]);
var inst_46343 = (state_46357[(8)]);
var inst_46343__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_46344 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_46345 = [inst_46338,inst_46343__$1];
var inst_46346 = (new cljs.core.PersistentVector(null,2,(5),inst_46344,inst_46345,null));
var state_46357__$1 = (function (){var statearr_46364 = state_46357;
(statearr_46364[(8)] = inst_46343__$1);

return statearr_46364;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46357__$1,(8),jobs,inst_46346);
} else {
if((state_val_46358 === (3))){
var inst_46355 = (state_46357[(2)]);
var state_46357__$1 = state_46357;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46357__$1,inst_46355);
} else {
if((state_val_46358 === (2))){
var state_46357__$1 = state_46357;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46357__$1,(4),from);
} else {
if((state_val_46358 === (9))){
var inst_46350 = (state_46357[(2)]);
var state_46357__$1 = (function (){var statearr_46365 = state_46357;
(statearr_46365[(9)] = inst_46350);

return statearr_46365;
})();
var statearr_46366_47771 = state_46357__$1;
(statearr_46366_47771[(2)] = null);

(statearr_46366_47771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46358 === (5))){
var inst_46341 = cljs.core.async.close_BANG_(jobs);
var state_46357__$1 = state_46357;
var statearr_46367_47772 = state_46357__$1;
(statearr_46367_47772[(2)] = inst_46341);

(statearr_46367_47772[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46358 === (8))){
var inst_46343 = (state_46357[(8)]);
var inst_46348 = (state_46357[(2)]);
var state_46357__$1 = (function (){var statearr_46368 = state_46357;
(statearr_46368[(10)] = inst_46348);

return statearr_46368;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46357__$1,(9),results,inst_46343);
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
var cljs$core$async$pipeline_STAR__$_state_machine__46034__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46034__auto____0 = (function (){
var statearr_46369 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46369[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46034__auto__);

(statearr_46369[(1)] = (1));

return statearr_46369;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46034__auto____1 = (function (state_46357){
while(true){
var ret_value__46035__auto__ = (function (){try{while(true){
var result__46036__auto__ = switch__46033__auto__(state_46357);
if(cljs.core.keyword_identical_QMARK_(result__46036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46036__auto__;
}
break;
}
}catch (e46370){if((e46370 instanceof Object)){
var ex__46037__auto__ = e46370;
var statearr_46371_47773 = state_46357;
(statearr_46371_47773[(5)] = ex__46037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46357);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46370;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47774 = state_46357;
state_46357 = G__47774;
continue;
} else {
return ret_value__46035__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46034__auto__ = function(state_46357){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46034__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46034__auto____1.call(this,state_46357);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46034__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46034__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46034__auto__;
})()
})();
var state__46138__auto__ = (function (){var statearr_46372 = (f__46137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46137__auto__.cljs$core$IFn$_invoke$arity$0() : f__46137__auto__.call(null));
(statearr_46372[(6)] = c__46136__auto___47764);

return statearr_46372;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46138__auto__);
}));


var c__46136__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46137__auto__ = (function (){var switch__46033__auto__ = (function (state_46410){
var state_val_46411 = (state_46410[(1)]);
if((state_val_46411 === (7))){
var inst_46406 = (state_46410[(2)]);
var state_46410__$1 = state_46410;
var statearr_46412_47775 = state_46410__$1;
(statearr_46412_47775[(2)] = inst_46406);

(statearr_46412_47775[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (20))){
var state_46410__$1 = state_46410;
var statearr_46413_47784 = state_46410__$1;
(statearr_46413_47784[(2)] = null);

(statearr_46413_47784[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (1))){
var state_46410__$1 = state_46410;
var statearr_46414_47786 = state_46410__$1;
(statearr_46414_47786[(2)] = null);

(statearr_46414_47786[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (4))){
var inst_46375 = (state_46410[(7)]);
var inst_46375__$1 = (state_46410[(2)]);
var inst_46376 = (inst_46375__$1 == null);
var state_46410__$1 = (function (){var statearr_46415 = state_46410;
(statearr_46415[(7)] = inst_46375__$1);

return statearr_46415;
})();
if(cljs.core.truth_(inst_46376)){
var statearr_46416_47787 = state_46410__$1;
(statearr_46416_47787[(1)] = (5));

} else {
var statearr_46417_47788 = state_46410__$1;
(statearr_46417_47788[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (15))){
var inst_46388 = (state_46410[(8)]);
var state_46410__$1 = state_46410;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46410__$1,(18),to,inst_46388);
} else {
if((state_val_46411 === (21))){
var inst_46401 = (state_46410[(2)]);
var state_46410__$1 = state_46410;
var statearr_46418_47789 = state_46410__$1;
(statearr_46418_47789[(2)] = inst_46401);

(statearr_46418_47789[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (13))){
var inst_46403 = (state_46410[(2)]);
var state_46410__$1 = (function (){var statearr_46419 = state_46410;
(statearr_46419[(9)] = inst_46403);

return statearr_46419;
})();
var statearr_46420_47790 = state_46410__$1;
(statearr_46420_47790[(2)] = null);

(statearr_46420_47790[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (6))){
var inst_46375 = (state_46410[(7)]);
var state_46410__$1 = state_46410;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46410__$1,(11),inst_46375);
} else {
if((state_val_46411 === (17))){
var inst_46396 = (state_46410[(2)]);
var state_46410__$1 = state_46410;
if(cljs.core.truth_(inst_46396)){
var statearr_46421_47791 = state_46410__$1;
(statearr_46421_47791[(1)] = (19));

} else {
var statearr_46422_47792 = state_46410__$1;
(statearr_46422_47792[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (3))){
var inst_46408 = (state_46410[(2)]);
var state_46410__$1 = state_46410;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46410__$1,inst_46408);
} else {
if((state_val_46411 === (12))){
var inst_46385 = (state_46410[(10)]);
var state_46410__$1 = state_46410;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46410__$1,(14),inst_46385);
} else {
if((state_val_46411 === (2))){
var state_46410__$1 = state_46410;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46410__$1,(4),results);
} else {
if((state_val_46411 === (19))){
var state_46410__$1 = state_46410;
var statearr_46423_47793 = state_46410__$1;
(statearr_46423_47793[(2)] = null);

(statearr_46423_47793[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (11))){
var inst_46385 = (state_46410[(2)]);
var state_46410__$1 = (function (){var statearr_46424 = state_46410;
(statearr_46424[(10)] = inst_46385);

return statearr_46424;
})();
var statearr_46425_47794 = state_46410__$1;
(statearr_46425_47794[(2)] = null);

(statearr_46425_47794[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (9))){
var state_46410__$1 = state_46410;
var statearr_46426_47795 = state_46410__$1;
(statearr_46426_47795[(2)] = null);

(statearr_46426_47795[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (5))){
var state_46410__$1 = state_46410;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46427_47796 = state_46410__$1;
(statearr_46427_47796[(1)] = (8));

} else {
var statearr_46428_47797 = state_46410__$1;
(statearr_46428_47797[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (14))){
var inst_46388 = (state_46410[(8)]);
var inst_46388__$1 = (state_46410[(2)]);
var inst_46389 = (inst_46388__$1 == null);
var inst_46390 = cljs.core.not(inst_46389);
var state_46410__$1 = (function (){var statearr_46429 = state_46410;
(statearr_46429[(8)] = inst_46388__$1);

return statearr_46429;
})();
if(inst_46390){
var statearr_46430_47798 = state_46410__$1;
(statearr_46430_47798[(1)] = (15));

} else {
var statearr_46431_47799 = state_46410__$1;
(statearr_46431_47799[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (16))){
var state_46410__$1 = state_46410;
var statearr_46432_47800 = state_46410__$1;
(statearr_46432_47800[(2)] = false);

(statearr_46432_47800[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (10))){
var inst_46382 = (state_46410[(2)]);
var state_46410__$1 = state_46410;
var statearr_46433_47801 = state_46410__$1;
(statearr_46433_47801[(2)] = inst_46382);

(statearr_46433_47801[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (18))){
var inst_46393 = (state_46410[(2)]);
var state_46410__$1 = state_46410;
var statearr_46434_47802 = state_46410__$1;
(statearr_46434_47802[(2)] = inst_46393);

(statearr_46434_47802[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46411 === (8))){
var inst_46379 = cljs.core.async.close_BANG_(to);
var state_46410__$1 = state_46410;
var statearr_46435_47803 = state_46410__$1;
(statearr_46435_47803[(2)] = inst_46379);

(statearr_46435_47803[(1)] = (10));


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
var cljs$core$async$pipeline_STAR__$_state_machine__46034__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__46034__auto____0 = (function (){
var statearr_46436 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_46436[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__46034__auto__);

(statearr_46436[(1)] = (1));

return statearr_46436;
});
var cljs$core$async$pipeline_STAR__$_state_machine__46034__auto____1 = (function (state_46410){
while(true){
var ret_value__46035__auto__ = (function (){try{while(true){
var result__46036__auto__ = switch__46033__auto__(state_46410);
if(cljs.core.keyword_identical_QMARK_(result__46036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46036__auto__;
}
break;
}
}catch (e46437){if((e46437 instanceof Object)){
var ex__46037__auto__ = e46437;
var statearr_46438_47816 = state_46410;
(statearr_46438_47816[(5)] = ex__46037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46437;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47817 = state_46410;
state_46410 = G__47817;
continue;
} else {
return ret_value__46035__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__46034__auto__ = function(state_46410){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__46034__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__46034__auto____1.call(this,state_46410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__46034__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__46034__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__46034__auto__;
})()
})();
var state__46138__auto__ = (function (){var statearr_46439 = (f__46137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46137__auto__.cljs$core$IFn$_invoke$arity$0() : f__46137__auto__.call(null));
(statearr_46439[(6)] = c__46136__auto__);

return statearr_46439;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46138__auto__);
}));

return c__46136__auto__;
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
var G__46441 = arguments.length;
switch (G__46441) {
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
var G__46443 = arguments.length;
switch (G__46443) {
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
var G__46445 = arguments.length;
switch (G__46445) {
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
var c__46136__auto___47825 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46137__auto__ = (function (){var switch__46033__auto__ = (function (state_46471){
var state_val_46472 = (state_46471[(1)]);
if((state_val_46472 === (7))){
var inst_46467 = (state_46471[(2)]);
var state_46471__$1 = state_46471;
var statearr_46473_47826 = state_46471__$1;
(statearr_46473_47826[(2)] = inst_46467);

(statearr_46473_47826[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46472 === (1))){
var state_46471__$1 = state_46471;
var statearr_46474_47827 = state_46471__$1;
(statearr_46474_47827[(2)] = null);

(statearr_46474_47827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46472 === (4))){
var inst_46448 = (state_46471[(7)]);
var inst_46448__$1 = (state_46471[(2)]);
var inst_46449 = (inst_46448__$1 == null);
var state_46471__$1 = (function (){var statearr_46475 = state_46471;
(statearr_46475[(7)] = inst_46448__$1);

return statearr_46475;
})();
if(cljs.core.truth_(inst_46449)){
var statearr_46476_47828 = state_46471__$1;
(statearr_46476_47828[(1)] = (5));

} else {
var statearr_46477_47830 = state_46471__$1;
(statearr_46477_47830[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46472 === (13))){
var state_46471__$1 = state_46471;
var statearr_46478_47831 = state_46471__$1;
(statearr_46478_47831[(2)] = null);

(statearr_46478_47831[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46472 === (6))){
var inst_46448 = (state_46471[(7)]);
var inst_46454 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_46448) : p.call(null,inst_46448));
var state_46471__$1 = state_46471;
if(cljs.core.truth_(inst_46454)){
var statearr_46479_47832 = state_46471__$1;
(statearr_46479_47832[(1)] = (9));

} else {
var statearr_46480_47833 = state_46471__$1;
(statearr_46480_47833[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46472 === (3))){
var inst_46469 = (state_46471[(2)]);
var state_46471__$1 = state_46471;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46471__$1,inst_46469);
} else {
if((state_val_46472 === (12))){
var state_46471__$1 = state_46471;
var statearr_46481_47836 = state_46471__$1;
(statearr_46481_47836[(2)] = null);

(statearr_46481_47836[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46472 === (2))){
var state_46471__$1 = state_46471;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46471__$1,(4),ch);
} else {
if((state_val_46472 === (11))){
var inst_46448 = (state_46471[(7)]);
var inst_46458 = (state_46471[(2)]);
var state_46471__$1 = state_46471;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46471__$1,(8),inst_46458,inst_46448);
} else {
if((state_val_46472 === (9))){
var state_46471__$1 = state_46471;
var statearr_46482_47838 = state_46471__$1;
(statearr_46482_47838[(2)] = tc);

(statearr_46482_47838[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46472 === (5))){
var inst_46451 = cljs.core.async.close_BANG_(tc);
var inst_46452 = cljs.core.async.close_BANG_(fc);
var state_46471__$1 = (function (){var statearr_46483 = state_46471;
(statearr_46483[(8)] = inst_46451);

return statearr_46483;
})();
var statearr_46484_47840 = state_46471__$1;
(statearr_46484_47840[(2)] = inst_46452);

(statearr_46484_47840[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46472 === (14))){
var inst_46465 = (state_46471[(2)]);
var state_46471__$1 = state_46471;
var statearr_46485_47841 = state_46471__$1;
(statearr_46485_47841[(2)] = inst_46465);

(statearr_46485_47841[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46472 === (10))){
var state_46471__$1 = state_46471;
var statearr_46486_47844 = state_46471__$1;
(statearr_46486_47844[(2)] = fc);

(statearr_46486_47844[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46472 === (8))){
var inst_46460 = (state_46471[(2)]);
var state_46471__$1 = state_46471;
if(cljs.core.truth_(inst_46460)){
var statearr_46487_47846 = state_46471__$1;
(statearr_46487_47846[(1)] = (12));

} else {
var statearr_46488_47847 = state_46471__$1;
(statearr_46488_47847[(1)] = (13));

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
var cljs$core$async$state_machine__46034__auto__ = null;
var cljs$core$async$state_machine__46034__auto____0 = (function (){
var statearr_46489 = [null,null,null,null,null,null,null,null,null];
(statearr_46489[(0)] = cljs$core$async$state_machine__46034__auto__);

(statearr_46489[(1)] = (1));

return statearr_46489;
});
var cljs$core$async$state_machine__46034__auto____1 = (function (state_46471){
while(true){
var ret_value__46035__auto__ = (function (){try{while(true){
var result__46036__auto__ = switch__46033__auto__(state_46471);
if(cljs.core.keyword_identical_QMARK_(result__46036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46036__auto__;
}
break;
}
}catch (e46490){if((e46490 instanceof Object)){
var ex__46037__auto__ = e46490;
var statearr_46491_47848 = state_46471;
(statearr_46491_47848[(5)] = ex__46037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46471);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46490;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47849 = state_46471;
state_46471 = G__47849;
continue;
} else {
return ret_value__46035__auto__;
}
break;
}
});
cljs$core$async$state_machine__46034__auto__ = function(state_46471){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46034__auto____1.call(this,state_46471);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46034__auto____0;
cljs$core$async$state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46034__auto____1;
return cljs$core$async$state_machine__46034__auto__;
})()
})();
var state__46138__auto__ = (function (){var statearr_46492 = (f__46137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46137__auto__.cljs$core$IFn$_invoke$arity$0() : f__46137__auto__.call(null));
(statearr_46492[(6)] = c__46136__auto___47825);

return statearr_46492;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46138__auto__);
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
var c__46136__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46137__auto__ = (function (){var switch__46033__auto__ = (function (state_46513){
var state_val_46514 = (state_46513[(1)]);
if((state_val_46514 === (7))){
var inst_46509 = (state_46513[(2)]);
var state_46513__$1 = state_46513;
var statearr_46515_47850 = state_46513__$1;
(statearr_46515_47850[(2)] = inst_46509);

(statearr_46515_47850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (1))){
var inst_46493 = init;
var state_46513__$1 = (function (){var statearr_46516 = state_46513;
(statearr_46516[(7)] = inst_46493);

return statearr_46516;
})();
var statearr_46517_47851 = state_46513__$1;
(statearr_46517_47851[(2)] = null);

(statearr_46517_47851[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (4))){
var inst_46496 = (state_46513[(8)]);
var inst_46496__$1 = (state_46513[(2)]);
var inst_46497 = (inst_46496__$1 == null);
var state_46513__$1 = (function (){var statearr_46518 = state_46513;
(statearr_46518[(8)] = inst_46496__$1);

return statearr_46518;
})();
if(cljs.core.truth_(inst_46497)){
var statearr_46519_47852 = state_46513__$1;
(statearr_46519_47852[(1)] = (5));

} else {
var statearr_46520_47853 = state_46513__$1;
(statearr_46520_47853[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (6))){
var inst_46500 = (state_46513[(9)]);
var inst_46493 = (state_46513[(7)]);
var inst_46496 = (state_46513[(8)]);
var inst_46500__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_46493,inst_46496) : f.call(null,inst_46493,inst_46496));
var inst_46501 = cljs.core.reduced_QMARK_(inst_46500__$1);
var state_46513__$1 = (function (){var statearr_46521 = state_46513;
(statearr_46521[(9)] = inst_46500__$1);

return statearr_46521;
})();
if(inst_46501){
var statearr_46522_47854 = state_46513__$1;
(statearr_46522_47854[(1)] = (8));

} else {
var statearr_46523_47855 = state_46513__$1;
(statearr_46523_47855[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (3))){
var inst_46511 = (state_46513[(2)]);
var state_46513__$1 = state_46513;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46513__$1,inst_46511);
} else {
if((state_val_46514 === (2))){
var state_46513__$1 = state_46513;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46513__$1,(4),ch);
} else {
if((state_val_46514 === (9))){
var inst_46500 = (state_46513[(9)]);
var inst_46493 = inst_46500;
var state_46513__$1 = (function (){var statearr_46524 = state_46513;
(statearr_46524[(7)] = inst_46493);

return statearr_46524;
})();
var statearr_46525_47856 = state_46513__$1;
(statearr_46525_47856[(2)] = null);

(statearr_46525_47856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (5))){
var inst_46493 = (state_46513[(7)]);
var state_46513__$1 = state_46513;
var statearr_46526_47857 = state_46513__$1;
(statearr_46526_47857[(2)] = inst_46493);

(statearr_46526_47857[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (10))){
var inst_46507 = (state_46513[(2)]);
var state_46513__$1 = state_46513;
var statearr_46527_47858 = state_46513__$1;
(statearr_46527_47858[(2)] = inst_46507);

(statearr_46527_47858[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46514 === (8))){
var inst_46500 = (state_46513[(9)]);
var inst_46503 = cljs.core.deref(inst_46500);
var state_46513__$1 = state_46513;
var statearr_46528_47859 = state_46513__$1;
(statearr_46528_47859[(2)] = inst_46503);

(statearr_46528_47859[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__46034__auto__ = null;
var cljs$core$async$reduce_$_state_machine__46034__auto____0 = (function (){
var statearr_46529 = [null,null,null,null,null,null,null,null,null,null];
(statearr_46529[(0)] = cljs$core$async$reduce_$_state_machine__46034__auto__);

(statearr_46529[(1)] = (1));

return statearr_46529;
});
var cljs$core$async$reduce_$_state_machine__46034__auto____1 = (function (state_46513){
while(true){
var ret_value__46035__auto__ = (function (){try{while(true){
var result__46036__auto__ = switch__46033__auto__(state_46513);
if(cljs.core.keyword_identical_QMARK_(result__46036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46036__auto__;
}
break;
}
}catch (e46530){if((e46530 instanceof Object)){
var ex__46037__auto__ = e46530;
var statearr_46531_47860 = state_46513;
(statearr_46531_47860[(5)] = ex__46037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46513);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46530;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47861 = state_46513;
state_46513 = G__47861;
continue;
} else {
return ret_value__46035__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__46034__auto__ = function(state_46513){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__46034__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__46034__auto____1.call(this,state_46513);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__46034__auto____0;
cljs$core$async$reduce_$_state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__46034__auto____1;
return cljs$core$async$reduce_$_state_machine__46034__auto__;
})()
})();
var state__46138__auto__ = (function (){var statearr_46532 = (f__46137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46137__auto__.cljs$core$IFn$_invoke$arity$0() : f__46137__auto__.call(null));
(statearr_46532[(6)] = c__46136__auto__);

return statearr_46532;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46138__auto__);
}));

return c__46136__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__46136__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46137__auto__ = (function (){var switch__46033__auto__ = (function (state_46538){
var state_val_46539 = (state_46538[(1)]);
if((state_val_46539 === (1))){
var inst_46533 = cljs.core.async.reduce(f__$1,init,ch);
var state_46538__$1 = state_46538;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46538__$1,(2),inst_46533);
} else {
if((state_val_46539 === (2))){
var inst_46535 = (state_46538[(2)]);
var inst_46536 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_46535) : f__$1.call(null,inst_46535));
var state_46538__$1 = state_46538;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46538__$1,inst_46536);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__46034__auto__ = null;
var cljs$core$async$transduce_$_state_machine__46034__auto____0 = (function (){
var statearr_46540 = [null,null,null,null,null,null,null];
(statearr_46540[(0)] = cljs$core$async$transduce_$_state_machine__46034__auto__);

(statearr_46540[(1)] = (1));

return statearr_46540;
});
var cljs$core$async$transduce_$_state_machine__46034__auto____1 = (function (state_46538){
while(true){
var ret_value__46035__auto__ = (function (){try{while(true){
var result__46036__auto__ = switch__46033__auto__(state_46538);
if(cljs.core.keyword_identical_QMARK_(result__46036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46036__auto__;
}
break;
}
}catch (e46541){if((e46541 instanceof Object)){
var ex__46037__auto__ = e46541;
var statearr_46542_47862 = state_46538;
(statearr_46542_47862[(5)] = ex__46037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46538);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46541;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47863 = state_46538;
state_46538 = G__47863;
continue;
} else {
return ret_value__46035__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__46034__auto__ = function(state_46538){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__46034__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__46034__auto____1.call(this,state_46538);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__46034__auto____0;
cljs$core$async$transduce_$_state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__46034__auto____1;
return cljs$core$async$transduce_$_state_machine__46034__auto__;
})()
})();
var state__46138__auto__ = (function (){var statearr_46543 = (f__46137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46137__auto__.cljs$core$IFn$_invoke$arity$0() : f__46137__auto__.call(null));
(statearr_46543[(6)] = c__46136__auto__);

return statearr_46543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46138__auto__);
}));

return c__46136__auto__;
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
var G__46545 = arguments.length;
switch (G__46545) {
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
var c__46136__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46137__auto__ = (function (){var switch__46033__auto__ = (function (state_46570){
var state_val_46571 = (state_46570[(1)]);
if((state_val_46571 === (7))){
var inst_46552 = (state_46570[(2)]);
var state_46570__$1 = state_46570;
var statearr_46572_47865 = state_46570__$1;
(statearr_46572_47865[(2)] = inst_46552);

(statearr_46572_47865[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (1))){
var inst_46546 = cljs.core.seq(coll);
var inst_46547 = inst_46546;
var state_46570__$1 = (function (){var statearr_46573 = state_46570;
(statearr_46573[(7)] = inst_46547);

return statearr_46573;
})();
var statearr_46574_47866 = state_46570__$1;
(statearr_46574_47866[(2)] = null);

(statearr_46574_47866[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (4))){
var inst_46547 = (state_46570[(7)]);
var inst_46550 = cljs.core.first(inst_46547);
var state_46570__$1 = state_46570;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46570__$1,(7),ch,inst_46550);
} else {
if((state_val_46571 === (13))){
var inst_46564 = (state_46570[(2)]);
var state_46570__$1 = state_46570;
var statearr_46575_47867 = state_46570__$1;
(statearr_46575_47867[(2)] = inst_46564);

(statearr_46575_47867[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (6))){
var inst_46555 = (state_46570[(2)]);
var state_46570__$1 = state_46570;
if(cljs.core.truth_(inst_46555)){
var statearr_46576_47868 = state_46570__$1;
(statearr_46576_47868[(1)] = (8));

} else {
var statearr_46577_47869 = state_46570__$1;
(statearr_46577_47869[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (3))){
var inst_46568 = (state_46570[(2)]);
var state_46570__$1 = state_46570;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46570__$1,inst_46568);
} else {
if((state_val_46571 === (12))){
var state_46570__$1 = state_46570;
var statearr_46578_47870 = state_46570__$1;
(statearr_46578_47870[(2)] = null);

(statearr_46578_47870[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (2))){
var inst_46547 = (state_46570[(7)]);
var state_46570__$1 = state_46570;
if(cljs.core.truth_(inst_46547)){
var statearr_46579_47871 = state_46570__$1;
(statearr_46579_47871[(1)] = (4));

} else {
var statearr_46580_47872 = state_46570__$1;
(statearr_46580_47872[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (11))){
var inst_46561 = cljs.core.async.close_BANG_(ch);
var state_46570__$1 = state_46570;
var statearr_46581_47873 = state_46570__$1;
(statearr_46581_47873[(2)] = inst_46561);

(statearr_46581_47873[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (9))){
var state_46570__$1 = state_46570;
if(cljs.core.truth_(close_QMARK_)){
var statearr_46582_47874 = state_46570__$1;
(statearr_46582_47874[(1)] = (11));

} else {
var statearr_46583_47875 = state_46570__$1;
(statearr_46583_47875[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (5))){
var inst_46547 = (state_46570[(7)]);
var state_46570__$1 = state_46570;
var statearr_46584_47876 = state_46570__$1;
(statearr_46584_47876[(2)] = inst_46547);

(statearr_46584_47876[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (10))){
var inst_46566 = (state_46570[(2)]);
var state_46570__$1 = state_46570;
var statearr_46585_47878 = state_46570__$1;
(statearr_46585_47878[(2)] = inst_46566);

(statearr_46585_47878[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46571 === (8))){
var inst_46547 = (state_46570[(7)]);
var inst_46557 = cljs.core.next(inst_46547);
var inst_46547__$1 = inst_46557;
var state_46570__$1 = (function (){var statearr_46586 = state_46570;
(statearr_46586[(7)] = inst_46547__$1);

return statearr_46586;
})();
var statearr_46587_47879 = state_46570__$1;
(statearr_46587_47879[(2)] = null);

(statearr_46587_47879[(1)] = (2));


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
var cljs$core$async$state_machine__46034__auto__ = null;
var cljs$core$async$state_machine__46034__auto____0 = (function (){
var statearr_46588 = [null,null,null,null,null,null,null,null];
(statearr_46588[(0)] = cljs$core$async$state_machine__46034__auto__);

(statearr_46588[(1)] = (1));

return statearr_46588;
});
var cljs$core$async$state_machine__46034__auto____1 = (function (state_46570){
while(true){
var ret_value__46035__auto__ = (function (){try{while(true){
var result__46036__auto__ = switch__46033__auto__(state_46570);
if(cljs.core.keyword_identical_QMARK_(result__46036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46036__auto__;
}
break;
}
}catch (e46589){if((e46589 instanceof Object)){
var ex__46037__auto__ = e46589;
var statearr_46590_47884 = state_46570;
(statearr_46590_47884[(5)] = ex__46037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46570);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46589;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47885 = state_46570;
state_46570 = G__47885;
continue;
} else {
return ret_value__46035__auto__;
}
break;
}
});
cljs$core$async$state_machine__46034__auto__ = function(state_46570){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46034__auto____1.call(this,state_46570);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46034__auto____0;
cljs$core$async$state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46034__auto____1;
return cljs$core$async$state_machine__46034__auto__;
})()
})();
var state__46138__auto__ = (function (){var statearr_46591 = (f__46137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46137__auto__.cljs$core$IFn$_invoke$arity$0() : f__46137__auto__.call(null));
(statearr_46591[(6)] = c__46136__auto__);

return statearr_46591;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46138__auto__);
}));

return c__46136__auto__;
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46592 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46592 = (function (ch,cs,meta46593){
this.ch = ch;
this.cs = cs;
this.meta46593 = meta46593;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46594,meta46593__$1){
var self__ = this;
var _46594__$1 = this;
return (new cljs.core.async.t_cljs$core$async46592(self__.ch,self__.cs,meta46593__$1));
}));

(cljs.core.async.t_cljs$core$async46592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46594){
var self__ = this;
var _46594__$1 = this;
return self__.meta46593;
}));

(cljs.core.async.t_cljs$core$async46592.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46592.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46592.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46592.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async46592.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async46592.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async46592.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta46593","meta46593",-87799150,null)], null);
}));

(cljs.core.async.t_cljs$core$async46592.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46592.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46592");

(cljs.core.async.t_cljs$core$async46592.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46592");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46592.
 */
cljs.core.async.__GT_t_cljs$core$async46592 = (function cljs$core$async$mult_$___GT_t_cljs$core$async46592(ch__$1,cs__$1,meta46593){
return (new cljs.core.async.t_cljs$core$async46592(ch__$1,cs__$1,meta46593));
});

}

return (new cljs.core.async.t_cljs$core$async46592(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__46136__auto___47913 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46137__auto__ = (function (){var switch__46033__auto__ = (function (state_46729){
var state_val_46730 = (state_46729[(1)]);
if((state_val_46730 === (7))){
var inst_46725 = (state_46729[(2)]);
var state_46729__$1 = state_46729;
var statearr_46731_47914 = state_46729__$1;
(statearr_46731_47914[(2)] = inst_46725);

(statearr_46731_47914[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (20))){
var inst_46628 = (state_46729[(7)]);
var inst_46640 = cljs.core.first(inst_46628);
var inst_46641 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46640,(0),null);
var inst_46642 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46640,(1),null);
var state_46729__$1 = (function (){var statearr_46732 = state_46729;
(statearr_46732[(8)] = inst_46641);

return statearr_46732;
})();
if(cljs.core.truth_(inst_46642)){
var statearr_46733_47918 = state_46729__$1;
(statearr_46733_47918[(1)] = (22));

} else {
var statearr_46734_47919 = state_46729__$1;
(statearr_46734_47919[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (27))){
var inst_46677 = (state_46729[(9)]);
var inst_46597 = (state_46729[(10)]);
var inst_46670 = (state_46729[(11)]);
var inst_46672 = (state_46729[(12)]);
var inst_46677__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46670,inst_46672);
var inst_46678 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46677__$1,inst_46597,done);
var state_46729__$1 = (function (){var statearr_46735 = state_46729;
(statearr_46735[(9)] = inst_46677__$1);

return statearr_46735;
})();
if(cljs.core.truth_(inst_46678)){
var statearr_46736_47923 = state_46729__$1;
(statearr_46736_47923[(1)] = (30));

} else {
var statearr_46737_47924 = state_46729__$1;
(statearr_46737_47924[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (1))){
var state_46729__$1 = state_46729;
var statearr_46738_47925 = state_46729__$1;
(statearr_46738_47925[(2)] = null);

(statearr_46738_47925[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (24))){
var inst_46628 = (state_46729[(7)]);
var inst_46647 = (state_46729[(2)]);
var inst_46648 = cljs.core.next(inst_46628);
var inst_46606 = inst_46648;
var inst_46607 = null;
var inst_46608 = (0);
var inst_46609 = (0);
var state_46729__$1 = (function (){var statearr_46739 = state_46729;
(statearr_46739[(13)] = inst_46609);

(statearr_46739[(14)] = inst_46606);

(statearr_46739[(15)] = inst_46647);

(statearr_46739[(16)] = inst_46607);

(statearr_46739[(17)] = inst_46608);

return statearr_46739;
})();
var statearr_46740_47933 = state_46729__$1;
(statearr_46740_47933[(2)] = null);

(statearr_46740_47933[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (39))){
var state_46729__$1 = state_46729;
var statearr_46744_47934 = state_46729__$1;
(statearr_46744_47934[(2)] = null);

(statearr_46744_47934[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (4))){
var inst_46597 = (state_46729[(10)]);
var inst_46597__$1 = (state_46729[(2)]);
var inst_46598 = (inst_46597__$1 == null);
var state_46729__$1 = (function (){var statearr_46745 = state_46729;
(statearr_46745[(10)] = inst_46597__$1);

return statearr_46745;
})();
if(cljs.core.truth_(inst_46598)){
var statearr_46746_47938 = state_46729__$1;
(statearr_46746_47938[(1)] = (5));

} else {
var statearr_46747_47939 = state_46729__$1;
(statearr_46747_47939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (15))){
var inst_46609 = (state_46729[(13)]);
var inst_46606 = (state_46729[(14)]);
var inst_46607 = (state_46729[(16)]);
var inst_46608 = (state_46729[(17)]);
var inst_46624 = (state_46729[(2)]);
var inst_46625 = (inst_46609 + (1));
var tmp46741 = inst_46606;
var tmp46742 = inst_46607;
var tmp46743 = inst_46608;
var inst_46606__$1 = tmp46741;
var inst_46607__$1 = tmp46742;
var inst_46608__$1 = tmp46743;
var inst_46609__$1 = inst_46625;
var state_46729__$1 = (function (){var statearr_46748 = state_46729;
(statearr_46748[(13)] = inst_46609__$1);

(statearr_46748[(14)] = inst_46606__$1);

(statearr_46748[(18)] = inst_46624);

(statearr_46748[(16)] = inst_46607__$1);

(statearr_46748[(17)] = inst_46608__$1);

return statearr_46748;
})();
var statearr_46749_47943 = state_46729__$1;
(statearr_46749_47943[(2)] = null);

(statearr_46749_47943[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (21))){
var inst_46651 = (state_46729[(2)]);
var state_46729__$1 = state_46729;
var statearr_46753_47947 = state_46729__$1;
(statearr_46753_47947[(2)] = inst_46651);

(statearr_46753_47947[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (31))){
var inst_46677 = (state_46729[(9)]);
var inst_46681 = done(null);
var inst_46682 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46677);
var state_46729__$1 = (function (){var statearr_46754 = state_46729;
(statearr_46754[(19)] = inst_46681);

return statearr_46754;
})();
var statearr_46755_47948 = state_46729__$1;
(statearr_46755_47948[(2)] = inst_46682);

(statearr_46755_47948[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (32))){
var inst_46670 = (state_46729[(11)]);
var inst_46669 = (state_46729[(20)]);
var inst_46672 = (state_46729[(12)]);
var inst_46671 = (state_46729[(21)]);
var inst_46684 = (state_46729[(2)]);
var inst_46685 = (inst_46672 + (1));
var tmp46750 = inst_46670;
var tmp46751 = inst_46669;
var tmp46752 = inst_46671;
var inst_46669__$1 = tmp46751;
var inst_46670__$1 = tmp46750;
var inst_46671__$1 = tmp46752;
var inst_46672__$1 = inst_46685;
var state_46729__$1 = (function (){var statearr_46756 = state_46729;
(statearr_46756[(11)] = inst_46670__$1);

(statearr_46756[(20)] = inst_46669__$1);

(statearr_46756[(22)] = inst_46684);

(statearr_46756[(12)] = inst_46672__$1);

(statearr_46756[(21)] = inst_46671__$1);

return statearr_46756;
})();
var statearr_46757_47959 = state_46729__$1;
(statearr_46757_47959[(2)] = null);

(statearr_46757_47959[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (40))){
var inst_46697 = (state_46729[(23)]);
var inst_46701 = done(null);
var inst_46702 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_46697);
var state_46729__$1 = (function (){var statearr_46758 = state_46729;
(statearr_46758[(24)] = inst_46701);

return statearr_46758;
})();
var statearr_46759_47963 = state_46729__$1;
(statearr_46759_47963[(2)] = inst_46702);

(statearr_46759_47963[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (33))){
var inst_46688 = (state_46729[(25)]);
var inst_46690 = cljs.core.chunked_seq_QMARK_(inst_46688);
var state_46729__$1 = state_46729;
if(inst_46690){
var statearr_46760_47967 = state_46729__$1;
(statearr_46760_47967[(1)] = (36));

} else {
var statearr_46761_47968 = state_46729__$1;
(statearr_46761_47968[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (13))){
var inst_46618 = (state_46729[(26)]);
var inst_46621 = cljs.core.async.close_BANG_(inst_46618);
var state_46729__$1 = state_46729;
var statearr_46762_47972 = state_46729__$1;
(statearr_46762_47972[(2)] = inst_46621);

(statearr_46762_47972[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (22))){
var inst_46641 = (state_46729[(8)]);
var inst_46644 = cljs.core.async.close_BANG_(inst_46641);
var state_46729__$1 = state_46729;
var statearr_46763_47976 = state_46729__$1;
(statearr_46763_47976[(2)] = inst_46644);

(statearr_46763_47976[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (36))){
var inst_46688 = (state_46729[(25)]);
var inst_46692 = cljs.core.chunk_first(inst_46688);
var inst_46693 = cljs.core.chunk_rest(inst_46688);
var inst_46694 = cljs.core.count(inst_46692);
var inst_46669 = inst_46693;
var inst_46670 = inst_46692;
var inst_46671 = inst_46694;
var inst_46672 = (0);
var state_46729__$1 = (function (){var statearr_46764 = state_46729;
(statearr_46764[(11)] = inst_46670);

(statearr_46764[(20)] = inst_46669);

(statearr_46764[(12)] = inst_46672);

(statearr_46764[(21)] = inst_46671);

return statearr_46764;
})();
var statearr_46765_47977 = state_46729__$1;
(statearr_46765_47977[(2)] = null);

(statearr_46765_47977[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (41))){
var inst_46688 = (state_46729[(25)]);
var inst_46704 = (state_46729[(2)]);
var inst_46705 = cljs.core.next(inst_46688);
var inst_46669 = inst_46705;
var inst_46670 = null;
var inst_46671 = (0);
var inst_46672 = (0);
var state_46729__$1 = (function (){var statearr_46766 = state_46729;
(statearr_46766[(11)] = inst_46670);

(statearr_46766[(20)] = inst_46669);

(statearr_46766[(27)] = inst_46704);

(statearr_46766[(12)] = inst_46672);

(statearr_46766[(21)] = inst_46671);

return statearr_46766;
})();
var statearr_46767_47978 = state_46729__$1;
(statearr_46767_47978[(2)] = null);

(statearr_46767_47978[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (43))){
var state_46729__$1 = state_46729;
var statearr_46768_47979 = state_46729__$1;
(statearr_46768_47979[(2)] = null);

(statearr_46768_47979[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (29))){
var inst_46713 = (state_46729[(2)]);
var state_46729__$1 = state_46729;
var statearr_46769_47980 = state_46729__$1;
(statearr_46769_47980[(2)] = inst_46713);

(statearr_46769_47980[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (44))){
var inst_46722 = (state_46729[(2)]);
var state_46729__$1 = (function (){var statearr_46770 = state_46729;
(statearr_46770[(28)] = inst_46722);

return statearr_46770;
})();
var statearr_46771_47981 = state_46729__$1;
(statearr_46771_47981[(2)] = null);

(statearr_46771_47981[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (6))){
var inst_46661 = (state_46729[(29)]);
var inst_46660 = cljs.core.deref(cs);
var inst_46661__$1 = cljs.core.keys(inst_46660);
var inst_46662 = cljs.core.count(inst_46661__$1);
var inst_46663 = cljs.core.reset_BANG_(dctr,inst_46662);
var inst_46668 = cljs.core.seq(inst_46661__$1);
var inst_46669 = inst_46668;
var inst_46670 = null;
var inst_46671 = (0);
var inst_46672 = (0);
var state_46729__$1 = (function (){var statearr_46772 = state_46729;
(statearr_46772[(11)] = inst_46670);

(statearr_46772[(20)] = inst_46669);

(statearr_46772[(29)] = inst_46661__$1);

(statearr_46772[(12)] = inst_46672);

(statearr_46772[(30)] = inst_46663);

(statearr_46772[(21)] = inst_46671);

return statearr_46772;
})();
var statearr_46773_47982 = state_46729__$1;
(statearr_46773_47982[(2)] = null);

(statearr_46773_47982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (28))){
var inst_46688 = (state_46729[(25)]);
var inst_46669 = (state_46729[(20)]);
var inst_46688__$1 = cljs.core.seq(inst_46669);
var state_46729__$1 = (function (){var statearr_46774 = state_46729;
(statearr_46774[(25)] = inst_46688__$1);

return statearr_46774;
})();
if(inst_46688__$1){
var statearr_46775_47983 = state_46729__$1;
(statearr_46775_47983[(1)] = (33));

} else {
var statearr_46776_47984 = state_46729__$1;
(statearr_46776_47984[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (25))){
var inst_46672 = (state_46729[(12)]);
var inst_46671 = (state_46729[(21)]);
var inst_46674 = (inst_46672 < inst_46671);
var inst_46675 = inst_46674;
var state_46729__$1 = state_46729;
if(cljs.core.truth_(inst_46675)){
var statearr_46777_47985 = state_46729__$1;
(statearr_46777_47985[(1)] = (27));

} else {
var statearr_46778_47986 = state_46729__$1;
(statearr_46778_47986[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (34))){
var state_46729__$1 = state_46729;
var statearr_46779_47987 = state_46729__$1;
(statearr_46779_47987[(2)] = null);

(statearr_46779_47987[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (17))){
var state_46729__$1 = state_46729;
var statearr_46780_47988 = state_46729__$1;
(statearr_46780_47988[(2)] = null);

(statearr_46780_47988[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (3))){
var inst_46727 = (state_46729[(2)]);
var state_46729__$1 = state_46729;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46729__$1,inst_46727);
} else {
if((state_val_46730 === (12))){
var inst_46656 = (state_46729[(2)]);
var state_46729__$1 = state_46729;
var statearr_46781_47989 = state_46729__$1;
(statearr_46781_47989[(2)] = inst_46656);

(statearr_46781_47989[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (2))){
var state_46729__$1 = state_46729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46729__$1,(4),ch);
} else {
if((state_val_46730 === (23))){
var state_46729__$1 = state_46729;
var statearr_46782_47990 = state_46729__$1;
(statearr_46782_47990[(2)] = null);

(statearr_46782_47990[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (35))){
var inst_46711 = (state_46729[(2)]);
var state_46729__$1 = state_46729;
var statearr_46783_47991 = state_46729__$1;
(statearr_46783_47991[(2)] = inst_46711);

(statearr_46783_47991[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (19))){
var inst_46628 = (state_46729[(7)]);
var inst_46632 = cljs.core.chunk_first(inst_46628);
var inst_46633 = cljs.core.chunk_rest(inst_46628);
var inst_46634 = cljs.core.count(inst_46632);
var inst_46606 = inst_46633;
var inst_46607 = inst_46632;
var inst_46608 = inst_46634;
var inst_46609 = (0);
var state_46729__$1 = (function (){var statearr_46784 = state_46729;
(statearr_46784[(13)] = inst_46609);

(statearr_46784[(14)] = inst_46606);

(statearr_46784[(16)] = inst_46607);

(statearr_46784[(17)] = inst_46608);

return statearr_46784;
})();
var statearr_46785_47992 = state_46729__$1;
(statearr_46785_47992[(2)] = null);

(statearr_46785_47992[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (11))){
var inst_46628 = (state_46729[(7)]);
var inst_46606 = (state_46729[(14)]);
var inst_46628__$1 = cljs.core.seq(inst_46606);
var state_46729__$1 = (function (){var statearr_46786 = state_46729;
(statearr_46786[(7)] = inst_46628__$1);

return statearr_46786;
})();
if(inst_46628__$1){
var statearr_46787_47993 = state_46729__$1;
(statearr_46787_47993[(1)] = (16));

} else {
var statearr_46788_47994 = state_46729__$1;
(statearr_46788_47994[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (9))){
var inst_46658 = (state_46729[(2)]);
var state_46729__$1 = state_46729;
var statearr_46789_47995 = state_46729__$1;
(statearr_46789_47995[(2)] = inst_46658);

(statearr_46789_47995[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (5))){
var inst_46604 = cljs.core.deref(cs);
var inst_46605 = cljs.core.seq(inst_46604);
var inst_46606 = inst_46605;
var inst_46607 = null;
var inst_46608 = (0);
var inst_46609 = (0);
var state_46729__$1 = (function (){var statearr_46790 = state_46729;
(statearr_46790[(13)] = inst_46609);

(statearr_46790[(14)] = inst_46606);

(statearr_46790[(16)] = inst_46607);

(statearr_46790[(17)] = inst_46608);

return statearr_46790;
})();
var statearr_46791_47996 = state_46729__$1;
(statearr_46791_47996[(2)] = null);

(statearr_46791_47996[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (14))){
var state_46729__$1 = state_46729;
var statearr_46792_47997 = state_46729__$1;
(statearr_46792_47997[(2)] = null);

(statearr_46792_47997[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (45))){
var inst_46719 = (state_46729[(2)]);
var state_46729__$1 = state_46729;
var statearr_46793_47998 = state_46729__$1;
(statearr_46793_47998[(2)] = inst_46719);

(statearr_46793_47998[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (26))){
var inst_46661 = (state_46729[(29)]);
var inst_46715 = (state_46729[(2)]);
var inst_46716 = cljs.core.seq(inst_46661);
var state_46729__$1 = (function (){var statearr_46794 = state_46729;
(statearr_46794[(31)] = inst_46715);

return statearr_46794;
})();
if(inst_46716){
var statearr_46795_47999 = state_46729__$1;
(statearr_46795_47999[(1)] = (42));

} else {
var statearr_46796_48000 = state_46729__$1;
(statearr_46796_48000[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (16))){
var inst_46628 = (state_46729[(7)]);
var inst_46630 = cljs.core.chunked_seq_QMARK_(inst_46628);
var state_46729__$1 = state_46729;
if(inst_46630){
var statearr_46797_48001 = state_46729__$1;
(statearr_46797_48001[(1)] = (19));

} else {
var statearr_46798_48002 = state_46729__$1;
(statearr_46798_48002[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (38))){
var inst_46708 = (state_46729[(2)]);
var state_46729__$1 = state_46729;
var statearr_46799_48003 = state_46729__$1;
(statearr_46799_48003[(2)] = inst_46708);

(statearr_46799_48003[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (30))){
var state_46729__$1 = state_46729;
var statearr_46800_48004 = state_46729__$1;
(statearr_46800_48004[(2)] = null);

(statearr_46800_48004[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (10))){
var inst_46609 = (state_46729[(13)]);
var inst_46607 = (state_46729[(16)]);
var inst_46617 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_46607,inst_46609);
var inst_46618 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46617,(0),null);
var inst_46619 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46617,(1),null);
var state_46729__$1 = (function (){var statearr_46801 = state_46729;
(statearr_46801[(26)] = inst_46618);

return statearr_46801;
})();
if(cljs.core.truth_(inst_46619)){
var statearr_46802_48011 = state_46729__$1;
(statearr_46802_48011[(1)] = (13));

} else {
var statearr_46803_48012 = state_46729__$1;
(statearr_46803_48012[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (18))){
var inst_46654 = (state_46729[(2)]);
var state_46729__$1 = state_46729;
var statearr_46804_48013 = state_46729__$1;
(statearr_46804_48013[(2)] = inst_46654);

(statearr_46804_48013[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (42))){
var state_46729__$1 = state_46729;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_46729__$1,(45),dchan);
} else {
if((state_val_46730 === (37))){
var inst_46688 = (state_46729[(25)]);
var inst_46597 = (state_46729[(10)]);
var inst_46697 = (state_46729[(23)]);
var inst_46697__$1 = cljs.core.first(inst_46688);
var inst_46698 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_46697__$1,inst_46597,done);
var state_46729__$1 = (function (){var statearr_46805 = state_46729;
(statearr_46805[(23)] = inst_46697__$1);

return statearr_46805;
})();
if(cljs.core.truth_(inst_46698)){
var statearr_46806_48015 = state_46729__$1;
(statearr_46806_48015[(1)] = (39));

} else {
var statearr_46807_48016 = state_46729__$1;
(statearr_46807_48016[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46730 === (8))){
var inst_46609 = (state_46729[(13)]);
var inst_46608 = (state_46729[(17)]);
var inst_46611 = (inst_46609 < inst_46608);
var inst_46612 = inst_46611;
var state_46729__$1 = state_46729;
if(cljs.core.truth_(inst_46612)){
var statearr_46808_48017 = state_46729__$1;
(statearr_46808_48017[(1)] = (10));

} else {
var statearr_46809_48018 = state_46729__$1;
(statearr_46809_48018[(1)] = (11));

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
var cljs$core$async$mult_$_state_machine__46034__auto__ = null;
var cljs$core$async$mult_$_state_machine__46034__auto____0 = (function (){
var statearr_46810 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46810[(0)] = cljs$core$async$mult_$_state_machine__46034__auto__);

(statearr_46810[(1)] = (1));

return statearr_46810;
});
var cljs$core$async$mult_$_state_machine__46034__auto____1 = (function (state_46729){
while(true){
var ret_value__46035__auto__ = (function (){try{while(true){
var result__46036__auto__ = switch__46033__auto__(state_46729);
if(cljs.core.keyword_identical_QMARK_(result__46036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46036__auto__;
}
break;
}
}catch (e46811){if((e46811 instanceof Object)){
var ex__46037__auto__ = e46811;
var statearr_46812_48019 = state_46729;
(statearr_46812_48019[(5)] = ex__46037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46729);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46811;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48020 = state_46729;
state_46729 = G__48020;
continue;
} else {
return ret_value__46035__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__46034__auto__ = function(state_46729){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__46034__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__46034__auto____1.call(this,state_46729);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__46034__auto____0;
cljs$core$async$mult_$_state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__46034__auto____1;
return cljs$core$async$mult_$_state_machine__46034__auto__;
})()
})();
var state__46138__auto__ = (function (){var statearr_46813 = (f__46137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46137__auto__.cljs$core$IFn$_invoke$arity$0() : f__46137__auto__.call(null));
(statearr_46813[(6)] = c__46136__auto___47913);

return statearr_46813;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46138__auto__);
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
var G__46815 = arguments.length;
switch (G__46815) {
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
var len__4789__auto___48033 = arguments.length;
var i__4790__auto___48034 = (0);
while(true){
if((i__4790__auto___48034 < len__4789__auto___48033)){
args__4795__auto__.push((arguments[i__4790__auto___48034]));

var G__48035 = (i__4790__auto___48034 + (1));
i__4790__auto___48034 = G__48035;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__46820){
var map__46821 = p__46820;
var map__46821__$1 = (((((!((map__46821 == null))))?(((((map__46821.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__46821.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__46821):map__46821);
var opts = map__46821__$1;
var statearr_46823_48036 = state;
(statearr_46823_48036[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_46824_48037 = state;
(statearr_46824_48037[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_46825_48038 = state;
(statearr_46825_48038[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq46816){
var G__46817 = cljs.core.first(seq46816);
var seq46816__$1 = cljs.core.next(seq46816);
var G__46818 = cljs.core.first(seq46816__$1);
var seq46816__$2 = cljs.core.next(seq46816__$1);
var G__46819 = cljs.core.first(seq46816__$2);
var seq46816__$3 = cljs.core.next(seq46816__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__46817,G__46818,G__46819,seq46816__$3);
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
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46826 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46826 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta46827){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta46827 = meta46827;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46826.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46828,meta46827__$1){
var self__ = this;
var _46828__$1 = this;
return (new cljs.core.async.t_cljs$core$async46826(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta46827__$1));
}));

(cljs.core.async.t_cljs$core$async46826.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46828){
var self__ = this;
var _46828__$1 = this;
return self__.meta46827;
}));

(cljs.core.async.t_cljs$core$async46826.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46826.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async46826.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46826.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46826.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46826.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46826.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46826.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async46826.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta46827","meta46827",1591432243,null)], null);
}));

(cljs.core.async.t_cljs$core$async46826.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46826.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46826");

(cljs.core.async.t_cljs$core$async46826.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46826");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46826.
 */
cljs.core.async.__GT_t_cljs$core$async46826 = (function cljs$core$async$mix_$___GT_t_cljs$core$async46826(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46827){
return (new cljs.core.async.t_cljs$core$async46826(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta46827));
});

}

return (new cljs.core.async.t_cljs$core$async46826(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46136__auto___48066 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46137__auto__ = (function (){var switch__46033__auto__ = (function (state_46930){
var state_val_46931 = (state_46930[(1)]);
if((state_val_46931 === (7))){
var inst_46845 = (state_46930[(2)]);
var state_46930__$1 = state_46930;
var statearr_46932_48067 = state_46930__$1;
(statearr_46932_48067[(2)] = inst_46845);

(statearr_46932_48067[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (20))){
var inst_46857 = (state_46930[(7)]);
var state_46930__$1 = state_46930;
var statearr_46933_48068 = state_46930__$1;
(statearr_46933_48068[(2)] = inst_46857);

(statearr_46933_48068[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (27))){
var state_46930__$1 = state_46930;
var statearr_46934_48069 = state_46930__$1;
(statearr_46934_48069[(2)] = null);

(statearr_46934_48069[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (1))){
var inst_46832 = (state_46930[(8)]);
var inst_46832__$1 = calc_state();
var inst_46834 = (inst_46832__$1 == null);
var inst_46835 = cljs.core.not(inst_46834);
var state_46930__$1 = (function (){var statearr_46935 = state_46930;
(statearr_46935[(8)] = inst_46832__$1);

return statearr_46935;
})();
if(inst_46835){
var statearr_46936_48070 = state_46930__$1;
(statearr_46936_48070[(1)] = (2));

} else {
var statearr_46937_48071 = state_46930__$1;
(statearr_46937_48071[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (24))){
var inst_46904 = (state_46930[(9)]);
var inst_46881 = (state_46930[(10)]);
var inst_46890 = (state_46930[(11)]);
var inst_46904__$1 = (inst_46881.cljs$core$IFn$_invoke$arity$1 ? inst_46881.cljs$core$IFn$_invoke$arity$1(inst_46890) : inst_46881.call(null,inst_46890));
var state_46930__$1 = (function (){var statearr_46938 = state_46930;
(statearr_46938[(9)] = inst_46904__$1);

return statearr_46938;
})();
if(cljs.core.truth_(inst_46904__$1)){
var statearr_46939_48078 = state_46930__$1;
(statearr_46939_48078[(1)] = (29));

} else {
var statearr_46940_48079 = state_46930__$1;
(statearr_46940_48079[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (4))){
var inst_46848 = (state_46930[(2)]);
var state_46930__$1 = state_46930;
if(cljs.core.truth_(inst_46848)){
var statearr_46941_48080 = state_46930__$1;
(statearr_46941_48080[(1)] = (8));

} else {
var statearr_46942_48081 = state_46930__$1;
(statearr_46942_48081[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (15))){
var inst_46875 = (state_46930[(2)]);
var state_46930__$1 = state_46930;
if(cljs.core.truth_(inst_46875)){
var statearr_46943_48082 = state_46930__$1;
(statearr_46943_48082[(1)] = (19));

} else {
var statearr_46944_48083 = state_46930__$1;
(statearr_46944_48083[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (21))){
var inst_46880 = (state_46930[(12)]);
var inst_46880__$1 = (state_46930[(2)]);
var inst_46881 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46880__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46882 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46880__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46883 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46880__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_46930__$1 = (function (){var statearr_46945 = state_46930;
(statearr_46945[(13)] = inst_46882);

(statearr_46945[(10)] = inst_46881);

(statearr_46945[(12)] = inst_46880__$1);

return statearr_46945;
})();
return cljs.core.async.ioc_alts_BANG_(state_46930__$1,(22),inst_46883);
} else {
if((state_val_46931 === (31))){
var inst_46912 = (state_46930[(2)]);
var state_46930__$1 = state_46930;
if(cljs.core.truth_(inst_46912)){
var statearr_46946_48084 = state_46930__$1;
(statearr_46946_48084[(1)] = (32));

} else {
var statearr_46947_48085 = state_46930__$1;
(statearr_46947_48085[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (32))){
var inst_46889 = (state_46930[(14)]);
var state_46930__$1 = state_46930;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_46930__$1,(35),out,inst_46889);
} else {
if((state_val_46931 === (33))){
var inst_46880 = (state_46930[(12)]);
var inst_46857 = inst_46880;
var state_46930__$1 = (function (){var statearr_46948 = state_46930;
(statearr_46948[(7)] = inst_46857);

return statearr_46948;
})();
var statearr_46949_48086 = state_46930__$1;
(statearr_46949_48086[(2)] = null);

(statearr_46949_48086[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (13))){
var inst_46857 = (state_46930[(7)]);
var inst_46864 = inst_46857.cljs$lang$protocol_mask$partition0$;
var inst_46865 = (inst_46864 & (64));
var inst_46866 = inst_46857.cljs$core$ISeq$;
var inst_46867 = (cljs.core.PROTOCOL_SENTINEL === inst_46866);
var inst_46868 = ((inst_46865) || (inst_46867));
var state_46930__$1 = state_46930;
if(cljs.core.truth_(inst_46868)){
var statearr_46950_48093 = state_46930__$1;
(statearr_46950_48093[(1)] = (16));

} else {
var statearr_46951_48094 = state_46930__$1;
(statearr_46951_48094[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (22))){
var inst_46889 = (state_46930[(14)]);
var inst_46890 = (state_46930[(11)]);
var inst_46888 = (state_46930[(2)]);
var inst_46889__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46888,(0),null);
var inst_46890__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_46888,(1),null);
var inst_46891 = (inst_46889__$1 == null);
var inst_46892 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_46890__$1,change);
var inst_46893 = ((inst_46891) || (inst_46892));
var state_46930__$1 = (function (){var statearr_46952 = state_46930;
(statearr_46952[(14)] = inst_46889__$1);

(statearr_46952[(11)] = inst_46890__$1);

return statearr_46952;
})();
if(cljs.core.truth_(inst_46893)){
var statearr_46953_48095 = state_46930__$1;
(statearr_46953_48095[(1)] = (23));

} else {
var statearr_46954_48096 = state_46930__$1;
(statearr_46954_48096[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (36))){
var inst_46880 = (state_46930[(12)]);
var inst_46857 = inst_46880;
var state_46930__$1 = (function (){var statearr_46955 = state_46930;
(statearr_46955[(7)] = inst_46857);

return statearr_46955;
})();
var statearr_46956_48097 = state_46930__$1;
(statearr_46956_48097[(2)] = null);

(statearr_46956_48097[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (29))){
var inst_46904 = (state_46930[(9)]);
var state_46930__$1 = state_46930;
var statearr_46957_48098 = state_46930__$1;
(statearr_46957_48098[(2)] = inst_46904);

(statearr_46957_48098[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (6))){
var state_46930__$1 = state_46930;
var statearr_46958_48099 = state_46930__$1;
(statearr_46958_48099[(2)] = false);

(statearr_46958_48099[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (28))){
var inst_46900 = (state_46930[(2)]);
var inst_46901 = calc_state();
var inst_46857 = inst_46901;
var state_46930__$1 = (function (){var statearr_46959 = state_46930;
(statearr_46959[(7)] = inst_46857);

(statearr_46959[(15)] = inst_46900);

return statearr_46959;
})();
var statearr_46960_48100 = state_46930__$1;
(statearr_46960_48100[(2)] = null);

(statearr_46960_48100[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (25))){
var inst_46926 = (state_46930[(2)]);
var state_46930__$1 = state_46930;
var statearr_46961_48101 = state_46930__$1;
(statearr_46961_48101[(2)] = inst_46926);

(statearr_46961_48101[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (34))){
var inst_46924 = (state_46930[(2)]);
var state_46930__$1 = state_46930;
var statearr_46962_48102 = state_46930__$1;
(statearr_46962_48102[(2)] = inst_46924);

(statearr_46962_48102[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (17))){
var state_46930__$1 = state_46930;
var statearr_46963_48103 = state_46930__$1;
(statearr_46963_48103[(2)] = false);

(statearr_46963_48103[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (3))){
var state_46930__$1 = state_46930;
var statearr_46964_48104 = state_46930__$1;
(statearr_46964_48104[(2)] = false);

(statearr_46964_48104[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (12))){
var inst_46928 = (state_46930[(2)]);
var state_46930__$1 = state_46930;
return cljs.core.async.impl.ioc_helpers.return_chan(state_46930__$1,inst_46928);
} else {
if((state_val_46931 === (2))){
var inst_46832 = (state_46930[(8)]);
var inst_46837 = inst_46832.cljs$lang$protocol_mask$partition0$;
var inst_46838 = (inst_46837 & (64));
var inst_46839 = inst_46832.cljs$core$ISeq$;
var inst_46840 = (cljs.core.PROTOCOL_SENTINEL === inst_46839);
var inst_46841 = ((inst_46838) || (inst_46840));
var state_46930__$1 = state_46930;
if(cljs.core.truth_(inst_46841)){
var statearr_46965_48105 = state_46930__$1;
(statearr_46965_48105[(1)] = (5));

} else {
var statearr_46966_48106 = state_46930__$1;
(statearr_46966_48106[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (23))){
var inst_46889 = (state_46930[(14)]);
var inst_46895 = (inst_46889 == null);
var state_46930__$1 = state_46930;
if(cljs.core.truth_(inst_46895)){
var statearr_46967_48107 = state_46930__$1;
(statearr_46967_48107[(1)] = (26));

} else {
var statearr_46968_48108 = state_46930__$1;
(statearr_46968_48108[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (35))){
var inst_46915 = (state_46930[(2)]);
var state_46930__$1 = state_46930;
if(cljs.core.truth_(inst_46915)){
var statearr_46969_48110 = state_46930__$1;
(statearr_46969_48110[(1)] = (36));

} else {
var statearr_46970_48111 = state_46930__$1;
(statearr_46970_48111[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (19))){
var inst_46857 = (state_46930[(7)]);
var inst_46877 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46857);
var state_46930__$1 = state_46930;
var statearr_46971_48112 = state_46930__$1;
(statearr_46971_48112[(2)] = inst_46877);

(statearr_46971_48112[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (11))){
var inst_46857 = (state_46930[(7)]);
var inst_46861 = (inst_46857 == null);
var inst_46862 = cljs.core.not(inst_46861);
var state_46930__$1 = state_46930;
if(inst_46862){
var statearr_46972_48114 = state_46930__$1;
(statearr_46972_48114[(1)] = (13));

} else {
var statearr_46973_48115 = state_46930__$1;
(statearr_46973_48115[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (9))){
var inst_46832 = (state_46930[(8)]);
var state_46930__$1 = state_46930;
var statearr_46974_48120 = state_46930__$1;
(statearr_46974_48120[(2)] = inst_46832);

(statearr_46974_48120[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (5))){
var state_46930__$1 = state_46930;
var statearr_46975_48121 = state_46930__$1;
(statearr_46975_48121[(2)] = true);

(statearr_46975_48121[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (14))){
var state_46930__$1 = state_46930;
var statearr_46976_48122 = state_46930__$1;
(statearr_46976_48122[(2)] = false);

(statearr_46976_48122[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (26))){
var inst_46890 = (state_46930[(11)]);
var inst_46897 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_46890);
var state_46930__$1 = state_46930;
var statearr_46977_48123 = state_46930__$1;
(statearr_46977_48123[(2)] = inst_46897);

(statearr_46977_48123[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (16))){
var state_46930__$1 = state_46930;
var statearr_46978_48124 = state_46930__$1;
(statearr_46978_48124[(2)] = true);

(statearr_46978_48124[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (38))){
var inst_46920 = (state_46930[(2)]);
var state_46930__$1 = state_46930;
var statearr_46979_48125 = state_46930__$1;
(statearr_46979_48125[(2)] = inst_46920);

(statearr_46979_48125[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (30))){
var inst_46882 = (state_46930[(13)]);
var inst_46881 = (state_46930[(10)]);
var inst_46890 = (state_46930[(11)]);
var inst_46907 = cljs.core.empty_QMARK_(inst_46881);
var inst_46908 = (inst_46882.cljs$core$IFn$_invoke$arity$1 ? inst_46882.cljs$core$IFn$_invoke$arity$1(inst_46890) : inst_46882.call(null,inst_46890));
var inst_46909 = cljs.core.not(inst_46908);
var inst_46910 = ((inst_46907) && (inst_46909));
var state_46930__$1 = state_46930;
var statearr_46980_48126 = state_46930__$1;
(statearr_46980_48126[(2)] = inst_46910);

(statearr_46980_48126[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (10))){
var inst_46832 = (state_46930[(8)]);
var inst_46853 = (state_46930[(2)]);
var inst_46854 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46853,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_46855 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46853,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_46856 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_46853,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_46857 = inst_46832;
var state_46930__$1 = (function (){var statearr_46981 = state_46930;
(statearr_46981[(7)] = inst_46857);

(statearr_46981[(16)] = inst_46855);

(statearr_46981[(17)] = inst_46856);

(statearr_46981[(18)] = inst_46854);

return statearr_46981;
})();
var statearr_46982_48127 = state_46930__$1;
(statearr_46982_48127[(2)] = null);

(statearr_46982_48127[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (18))){
var inst_46872 = (state_46930[(2)]);
var state_46930__$1 = state_46930;
var statearr_46983_48128 = state_46930__$1;
(statearr_46983_48128[(2)] = inst_46872);

(statearr_46983_48128[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (37))){
var state_46930__$1 = state_46930;
var statearr_46984_48131 = state_46930__$1;
(statearr_46984_48131[(2)] = null);

(statearr_46984_48131[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_46931 === (8))){
var inst_46832 = (state_46930[(8)]);
var inst_46850 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_46832);
var state_46930__$1 = state_46930;
var statearr_46985_48132 = state_46930__$1;
(statearr_46985_48132[(2)] = inst_46850);

(statearr_46985_48132[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__46034__auto__ = null;
var cljs$core$async$mix_$_state_machine__46034__auto____0 = (function (){
var statearr_46986 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_46986[(0)] = cljs$core$async$mix_$_state_machine__46034__auto__);

(statearr_46986[(1)] = (1));

return statearr_46986;
});
var cljs$core$async$mix_$_state_machine__46034__auto____1 = (function (state_46930){
while(true){
var ret_value__46035__auto__ = (function (){try{while(true){
var result__46036__auto__ = switch__46033__auto__(state_46930);
if(cljs.core.keyword_identical_QMARK_(result__46036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46036__auto__;
}
break;
}
}catch (e46987){if((e46987 instanceof Object)){
var ex__46037__auto__ = e46987;
var statearr_46988_48135 = state_46930;
(statearr_46988_48135[(5)] = ex__46037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_46930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e46987;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48136 = state_46930;
state_46930 = G__48136;
continue;
} else {
return ret_value__46035__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__46034__auto__ = function(state_46930){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__46034__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__46034__auto____1.call(this,state_46930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__46034__auto____0;
cljs$core$async$mix_$_state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__46034__auto____1;
return cljs$core$async$mix_$_state_machine__46034__auto__;
})()
})();
var state__46138__auto__ = (function (){var statearr_46989 = (f__46137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46137__auto__.cljs$core$IFn$_invoke$arity$0() : f__46137__auto__.call(null));
(statearr_46989[(6)] = c__46136__auto___48066);

return statearr_46989;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46138__auto__);
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
var G__46991 = arguments.length;
switch (G__46991) {
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
var G__46994 = arguments.length;
switch (G__46994) {
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
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__46992_SHARP_){
if(cljs.core.truth_((p1__46992_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__46992_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__46992_SHARP_.call(null,topic)))){
return p1__46992_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__46992_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async46995 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async46995 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta46996){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta46996 = meta46996;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async46995.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46997,meta46996__$1){
var self__ = this;
var _46997__$1 = this;
return (new cljs.core.async.t_cljs$core$async46995(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta46996__$1));
}));

(cljs.core.async.t_cljs$core$async46995.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46997){
var self__ = this;
var _46997__$1 = this;
return self__.meta46996;
}));

(cljs.core.async.t_cljs$core$async46995.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46995.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async46995.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async46995.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async46995.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
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

(cljs.core.async.t_cljs$core$async46995.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async46995.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async46995.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta46996","meta46996",-119442323,null)], null);
}));

(cljs.core.async.t_cljs$core$async46995.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async46995.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async46995");

(cljs.core.async.t_cljs$core$async46995.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async46995");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async46995.
 */
cljs.core.async.__GT_t_cljs$core$async46995 = (function cljs$core$async$__GT_t_cljs$core$async46995(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46996){
return (new cljs.core.async.t_cljs$core$async46995(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta46996));
});

}

return (new cljs.core.async.t_cljs$core$async46995(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__46136__auto___48148 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46137__auto__ = (function (){var switch__46033__auto__ = (function (state_47069){
var state_val_47070 = (state_47069[(1)]);
if((state_val_47070 === (7))){
var inst_47065 = (state_47069[(2)]);
var state_47069__$1 = state_47069;
var statearr_47071_48149 = state_47069__$1;
(statearr_47071_48149[(2)] = inst_47065);

(statearr_47071_48149[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (20))){
var state_47069__$1 = state_47069;
var statearr_47072_48150 = state_47069__$1;
(statearr_47072_48150[(2)] = null);

(statearr_47072_48150[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (1))){
var state_47069__$1 = state_47069;
var statearr_47073_48151 = state_47069__$1;
(statearr_47073_48151[(2)] = null);

(statearr_47073_48151[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (24))){
var inst_47048 = (state_47069[(7)]);
var inst_47057 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_47048);
var state_47069__$1 = state_47069;
var statearr_47074_48152 = state_47069__$1;
(statearr_47074_48152[(2)] = inst_47057);

(statearr_47074_48152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (4))){
var inst_47000 = (state_47069[(8)]);
var inst_47000__$1 = (state_47069[(2)]);
var inst_47001 = (inst_47000__$1 == null);
var state_47069__$1 = (function (){var statearr_47075 = state_47069;
(statearr_47075[(8)] = inst_47000__$1);

return statearr_47075;
})();
if(cljs.core.truth_(inst_47001)){
var statearr_47076_48153 = state_47069__$1;
(statearr_47076_48153[(1)] = (5));

} else {
var statearr_47077_48154 = state_47069__$1;
(statearr_47077_48154[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (15))){
var inst_47042 = (state_47069[(2)]);
var state_47069__$1 = state_47069;
var statearr_47078_48155 = state_47069__$1;
(statearr_47078_48155[(2)] = inst_47042);

(statearr_47078_48155[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (21))){
var inst_47062 = (state_47069[(2)]);
var state_47069__$1 = (function (){var statearr_47079 = state_47069;
(statearr_47079[(9)] = inst_47062);

return statearr_47079;
})();
var statearr_47080_48156 = state_47069__$1;
(statearr_47080_48156[(2)] = null);

(statearr_47080_48156[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (13))){
var inst_47024 = (state_47069[(10)]);
var inst_47026 = cljs.core.chunked_seq_QMARK_(inst_47024);
var state_47069__$1 = state_47069;
if(inst_47026){
var statearr_47081_48157 = state_47069__$1;
(statearr_47081_48157[(1)] = (16));

} else {
var statearr_47082_48158 = state_47069__$1;
(statearr_47082_48158[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (22))){
var inst_47054 = (state_47069[(2)]);
var state_47069__$1 = state_47069;
if(cljs.core.truth_(inst_47054)){
var statearr_47083_48163 = state_47069__$1;
(statearr_47083_48163[(1)] = (23));

} else {
var statearr_47084_48167 = state_47069__$1;
(statearr_47084_48167[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (6))){
var inst_47048 = (state_47069[(7)]);
var inst_47000 = (state_47069[(8)]);
var inst_47050 = (state_47069[(11)]);
var inst_47048__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_47000) : topic_fn.call(null,inst_47000));
var inst_47049 = cljs.core.deref(mults);
var inst_47050__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_47049,inst_47048__$1);
var state_47069__$1 = (function (){var statearr_47085 = state_47069;
(statearr_47085[(7)] = inst_47048__$1);

(statearr_47085[(11)] = inst_47050__$1);

return statearr_47085;
})();
if(cljs.core.truth_(inst_47050__$1)){
var statearr_47086_48171 = state_47069__$1;
(statearr_47086_48171[(1)] = (19));

} else {
var statearr_47087_48172 = state_47069__$1;
(statearr_47087_48172[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (25))){
var inst_47059 = (state_47069[(2)]);
var state_47069__$1 = state_47069;
var statearr_47088_48173 = state_47069__$1;
(statearr_47088_48173[(2)] = inst_47059);

(statearr_47088_48173[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (17))){
var inst_47024 = (state_47069[(10)]);
var inst_47033 = cljs.core.first(inst_47024);
var inst_47034 = cljs.core.async.muxch_STAR_(inst_47033);
var inst_47035 = cljs.core.async.close_BANG_(inst_47034);
var inst_47036 = cljs.core.next(inst_47024);
var inst_47010 = inst_47036;
var inst_47011 = null;
var inst_47012 = (0);
var inst_47013 = (0);
var state_47069__$1 = (function (){var statearr_47089 = state_47069;
(statearr_47089[(12)] = inst_47013);

(statearr_47089[(13)] = inst_47011);

(statearr_47089[(14)] = inst_47035);

(statearr_47089[(15)] = inst_47012);

(statearr_47089[(16)] = inst_47010);

return statearr_47089;
})();
var statearr_47090_48180 = state_47069__$1;
(statearr_47090_48180[(2)] = null);

(statearr_47090_48180[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (3))){
var inst_47067 = (state_47069[(2)]);
var state_47069__$1 = state_47069;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47069__$1,inst_47067);
} else {
if((state_val_47070 === (12))){
var inst_47044 = (state_47069[(2)]);
var state_47069__$1 = state_47069;
var statearr_47091_48185 = state_47069__$1;
(statearr_47091_48185[(2)] = inst_47044);

(statearr_47091_48185[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (2))){
var state_47069__$1 = state_47069;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47069__$1,(4),ch);
} else {
if((state_val_47070 === (23))){
var state_47069__$1 = state_47069;
var statearr_47092_48186 = state_47069__$1;
(statearr_47092_48186[(2)] = null);

(statearr_47092_48186[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (19))){
var inst_47000 = (state_47069[(8)]);
var inst_47050 = (state_47069[(11)]);
var inst_47052 = cljs.core.async.muxch_STAR_(inst_47050);
var state_47069__$1 = state_47069;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47069__$1,(22),inst_47052,inst_47000);
} else {
if((state_val_47070 === (11))){
var inst_47024 = (state_47069[(10)]);
var inst_47010 = (state_47069[(16)]);
var inst_47024__$1 = cljs.core.seq(inst_47010);
var state_47069__$1 = (function (){var statearr_47093 = state_47069;
(statearr_47093[(10)] = inst_47024__$1);

return statearr_47093;
})();
if(inst_47024__$1){
var statearr_47094_48187 = state_47069__$1;
(statearr_47094_48187[(1)] = (13));

} else {
var statearr_47095_48188 = state_47069__$1;
(statearr_47095_48188[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (9))){
var inst_47046 = (state_47069[(2)]);
var state_47069__$1 = state_47069;
var statearr_47096_48189 = state_47069__$1;
(statearr_47096_48189[(2)] = inst_47046);

(statearr_47096_48189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (5))){
var inst_47007 = cljs.core.deref(mults);
var inst_47008 = cljs.core.vals(inst_47007);
var inst_47009 = cljs.core.seq(inst_47008);
var inst_47010 = inst_47009;
var inst_47011 = null;
var inst_47012 = (0);
var inst_47013 = (0);
var state_47069__$1 = (function (){var statearr_47097 = state_47069;
(statearr_47097[(12)] = inst_47013);

(statearr_47097[(13)] = inst_47011);

(statearr_47097[(15)] = inst_47012);

(statearr_47097[(16)] = inst_47010);

return statearr_47097;
})();
var statearr_47098_48192 = state_47069__$1;
(statearr_47098_48192[(2)] = null);

(statearr_47098_48192[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (14))){
var state_47069__$1 = state_47069;
var statearr_47102_48194 = state_47069__$1;
(statearr_47102_48194[(2)] = null);

(statearr_47102_48194[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (16))){
var inst_47024 = (state_47069[(10)]);
var inst_47028 = cljs.core.chunk_first(inst_47024);
var inst_47029 = cljs.core.chunk_rest(inst_47024);
var inst_47030 = cljs.core.count(inst_47028);
var inst_47010 = inst_47029;
var inst_47011 = inst_47028;
var inst_47012 = inst_47030;
var inst_47013 = (0);
var state_47069__$1 = (function (){var statearr_47103 = state_47069;
(statearr_47103[(12)] = inst_47013);

(statearr_47103[(13)] = inst_47011);

(statearr_47103[(15)] = inst_47012);

(statearr_47103[(16)] = inst_47010);

return statearr_47103;
})();
var statearr_47104_48196 = state_47069__$1;
(statearr_47104_48196[(2)] = null);

(statearr_47104_48196[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (10))){
var inst_47013 = (state_47069[(12)]);
var inst_47011 = (state_47069[(13)]);
var inst_47012 = (state_47069[(15)]);
var inst_47010 = (state_47069[(16)]);
var inst_47018 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47011,inst_47013);
var inst_47019 = cljs.core.async.muxch_STAR_(inst_47018);
var inst_47020 = cljs.core.async.close_BANG_(inst_47019);
var inst_47021 = (inst_47013 + (1));
var tmp47099 = inst_47011;
var tmp47100 = inst_47012;
var tmp47101 = inst_47010;
var inst_47010__$1 = tmp47101;
var inst_47011__$1 = tmp47099;
var inst_47012__$1 = tmp47100;
var inst_47013__$1 = inst_47021;
var state_47069__$1 = (function (){var statearr_47105 = state_47069;
(statearr_47105[(12)] = inst_47013__$1);

(statearr_47105[(13)] = inst_47011__$1);

(statearr_47105[(15)] = inst_47012__$1);

(statearr_47105[(17)] = inst_47020);

(statearr_47105[(16)] = inst_47010__$1);

return statearr_47105;
})();
var statearr_47106_48202 = state_47069__$1;
(statearr_47106_48202[(2)] = null);

(statearr_47106_48202[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (18))){
var inst_47039 = (state_47069[(2)]);
var state_47069__$1 = state_47069;
var statearr_47107_48204 = state_47069__$1;
(statearr_47107_48204[(2)] = inst_47039);

(statearr_47107_48204[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47070 === (8))){
var inst_47013 = (state_47069[(12)]);
var inst_47012 = (state_47069[(15)]);
var inst_47015 = (inst_47013 < inst_47012);
var inst_47016 = inst_47015;
var state_47069__$1 = state_47069;
if(cljs.core.truth_(inst_47016)){
var statearr_47108_48205 = state_47069__$1;
(statearr_47108_48205[(1)] = (10));

} else {
var statearr_47109_48208 = state_47069__$1;
(statearr_47109_48208[(1)] = (11));

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
var cljs$core$async$state_machine__46034__auto__ = null;
var cljs$core$async$state_machine__46034__auto____0 = (function (){
var statearr_47110 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47110[(0)] = cljs$core$async$state_machine__46034__auto__);

(statearr_47110[(1)] = (1));

return statearr_47110;
});
var cljs$core$async$state_machine__46034__auto____1 = (function (state_47069){
while(true){
var ret_value__46035__auto__ = (function (){try{while(true){
var result__46036__auto__ = switch__46033__auto__(state_47069);
if(cljs.core.keyword_identical_QMARK_(result__46036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46036__auto__;
}
break;
}
}catch (e47111){if((e47111 instanceof Object)){
var ex__46037__auto__ = e47111;
var statearr_47112_48209 = state_47069;
(statearr_47112_48209[(5)] = ex__46037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47069);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47111;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48210 = state_47069;
state_47069 = G__48210;
continue;
} else {
return ret_value__46035__auto__;
}
break;
}
});
cljs$core$async$state_machine__46034__auto__ = function(state_47069){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46034__auto____1.call(this,state_47069);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46034__auto____0;
cljs$core$async$state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46034__auto____1;
return cljs$core$async$state_machine__46034__auto__;
})()
})();
var state__46138__auto__ = (function (){var statearr_47113 = (f__46137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46137__auto__.cljs$core$IFn$_invoke$arity$0() : f__46137__auto__.call(null));
(statearr_47113[(6)] = c__46136__auto___48148);

return statearr_47113;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46138__auto__);
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
var G__47115 = arguments.length;
switch (G__47115) {
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
var G__47117 = arguments.length;
switch (G__47117) {
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
var G__47119 = arguments.length;
switch (G__47119) {
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
var c__46136__auto___48222 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46137__auto__ = (function (){var switch__46033__auto__ = (function (state_47158){
var state_val_47159 = (state_47158[(1)]);
if((state_val_47159 === (7))){
var state_47158__$1 = state_47158;
var statearr_47160_48223 = state_47158__$1;
(statearr_47160_48223[(2)] = null);

(statearr_47160_48223[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47159 === (1))){
var state_47158__$1 = state_47158;
var statearr_47161_48225 = state_47158__$1;
(statearr_47161_48225[(2)] = null);

(statearr_47161_48225[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47159 === (4))){
var inst_47122 = (state_47158[(7)]);
var inst_47124 = (inst_47122 < cnt);
var state_47158__$1 = state_47158;
if(cljs.core.truth_(inst_47124)){
var statearr_47162_48226 = state_47158__$1;
(statearr_47162_48226[(1)] = (6));

} else {
var statearr_47163_48227 = state_47158__$1;
(statearr_47163_48227[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47159 === (15))){
var inst_47154 = (state_47158[(2)]);
var state_47158__$1 = state_47158;
var statearr_47164_48228 = state_47158__$1;
(statearr_47164_48228[(2)] = inst_47154);

(statearr_47164_48228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47159 === (13))){
var inst_47147 = cljs.core.async.close_BANG_(out);
var state_47158__$1 = state_47158;
var statearr_47165_48229 = state_47158__$1;
(statearr_47165_48229[(2)] = inst_47147);

(statearr_47165_48229[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47159 === (6))){
var state_47158__$1 = state_47158;
var statearr_47166_48230 = state_47158__$1;
(statearr_47166_48230[(2)] = null);

(statearr_47166_48230[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47159 === (3))){
var inst_47156 = (state_47158[(2)]);
var state_47158__$1 = state_47158;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47158__$1,inst_47156);
} else {
if((state_val_47159 === (12))){
var inst_47144 = (state_47158[(8)]);
var inst_47144__$1 = (state_47158[(2)]);
var inst_47145 = cljs.core.some(cljs.core.nil_QMARK_,inst_47144__$1);
var state_47158__$1 = (function (){var statearr_47167 = state_47158;
(statearr_47167[(8)] = inst_47144__$1);

return statearr_47167;
})();
if(cljs.core.truth_(inst_47145)){
var statearr_47168_48232 = state_47158__$1;
(statearr_47168_48232[(1)] = (13));

} else {
var statearr_47169_48233 = state_47158__$1;
(statearr_47169_48233[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47159 === (2))){
var inst_47121 = cljs.core.reset_BANG_(dctr,cnt);
var inst_47122 = (0);
var state_47158__$1 = (function (){var statearr_47170 = state_47158;
(statearr_47170[(7)] = inst_47122);

(statearr_47170[(9)] = inst_47121);

return statearr_47170;
})();
var statearr_47171_48238 = state_47158__$1;
(statearr_47171_48238[(2)] = null);

(statearr_47171_48238[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47159 === (11))){
var inst_47122 = (state_47158[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_47158,(10),Object,null,(9));
var inst_47131 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_47122) : chs__$1.call(null,inst_47122));
var inst_47132 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_47122) : done.call(null,inst_47122));
var inst_47133 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_47131,inst_47132);
var state_47158__$1 = state_47158;
var statearr_47172_48239 = state_47158__$1;
(statearr_47172_48239[(2)] = inst_47133);


cljs.core.async.impl.ioc_helpers.process_exception(state_47158__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47159 === (9))){
var inst_47122 = (state_47158[(7)]);
var inst_47135 = (state_47158[(2)]);
var inst_47136 = (inst_47122 + (1));
var inst_47122__$1 = inst_47136;
var state_47158__$1 = (function (){var statearr_47173 = state_47158;
(statearr_47173[(10)] = inst_47135);

(statearr_47173[(7)] = inst_47122__$1);

return statearr_47173;
})();
var statearr_47174_48240 = state_47158__$1;
(statearr_47174_48240[(2)] = null);

(statearr_47174_48240[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47159 === (5))){
var inst_47142 = (state_47158[(2)]);
var state_47158__$1 = (function (){var statearr_47175 = state_47158;
(statearr_47175[(11)] = inst_47142);

return statearr_47175;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47158__$1,(12),dchan);
} else {
if((state_val_47159 === (14))){
var inst_47144 = (state_47158[(8)]);
var inst_47149 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_47144);
var state_47158__$1 = state_47158;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47158__$1,(16),out,inst_47149);
} else {
if((state_val_47159 === (16))){
var inst_47151 = (state_47158[(2)]);
var state_47158__$1 = (function (){var statearr_47176 = state_47158;
(statearr_47176[(12)] = inst_47151);

return statearr_47176;
})();
var statearr_47177_48241 = state_47158__$1;
(statearr_47177_48241[(2)] = null);

(statearr_47177_48241[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47159 === (10))){
var inst_47126 = (state_47158[(2)]);
var inst_47127 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_47158__$1 = (function (){var statearr_47178 = state_47158;
(statearr_47178[(13)] = inst_47126);

return statearr_47178;
})();
var statearr_47179_48242 = state_47158__$1;
(statearr_47179_48242[(2)] = inst_47127);


cljs.core.async.impl.ioc_helpers.process_exception(state_47158__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47159 === (8))){
var inst_47140 = (state_47158[(2)]);
var state_47158__$1 = state_47158;
var statearr_47180_48244 = state_47158__$1;
(statearr_47180_48244[(2)] = inst_47140);

(statearr_47180_48244[(1)] = (5));


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
var cljs$core$async$state_machine__46034__auto__ = null;
var cljs$core$async$state_machine__46034__auto____0 = (function (){
var statearr_47181 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47181[(0)] = cljs$core$async$state_machine__46034__auto__);

(statearr_47181[(1)] = (1));

return statearr_47181;
});
var cljs$core$async$state_machine__46034__auto____1 = (function (state_47158){
while(true){
var ret_value__46035__auto__ = (function (){try{while(true){
var result__46036__auto__ = switch__46033__auto__(state_47158);
if(cljs.core.keyword_identical_QMARK_(result__46036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46036__auto__;
}
break;
}
}catch (e47182){if((e47182 instanceof Object)){
var ex__46037__auto__ = e47182;
var statearr_47183_48245 = state_47158;
(statearr_47183_48245[(5)] = ex__46037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47158);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47182;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48246 = state_47158;
state_47158 = G__48246;
continue;
} else {
return ret_value__46035__auto__;
}
break;
}
});
cljs$core$async$state_machine__46034__auto__ = function(state_47158){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46034__auto____1.call(this,state_47158);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46034__auto____0;
cljs$core$async$state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46034__auto____1;
return cljs$core$async$state_machine__46034__auto__;
})()
})();
var state__46138__auto__ = (function (){var statearr_47184 = (f__46137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46137__auto__.cljs$core$IFn$_invoke$arity$0() : f__46137__auto__.call(null));
(statearr_47184[(6)] = c__46136__auto___48222);

return statearr_47184;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46138__auto__);
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
var G__47187 = arguments.length;
switch (G__47187) {
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
var c__46136__auto___48253 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46137__auto__ = (function (){var switch__46033__auto__ = (function (state_47219){
var state_val_47220 = (state_47219[(1)]);
if((state_val_47220 === (7))){
var inst_47199 = (state_47219[(7)]);
var inst_47198 = (state_47219[(8)]);
var inst_47198__$1 = (state_47219[(2)]);
var inst_47199__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47198__$1,(0),null);
var inst_47200 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_47198__$1,(1),null);
var inst_47201 = (inst_47199__$1 == null);
var state_47219__$1 = (function (){var statearr_47221 = state_47219;
(statearr_47221[(9)] = inst_47200);

(statearr_47221[(7)] = inst_47199__$1);

(statearr_47221[(8)] = inst_47198__$1);

return statearr_47221;
})();
if(cljs.core.truth_(inst_47201)){
var statearr_47222_48256 = state_47219__$1;
(statearr_47222_48256[(1)] = (8));

} else {
var statearr_47223_48257 = state_47219__$1;
(statearr_47223_48257[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47220 === (1))){
var inst_47188 = cljs.core.vec(chs);
var inst_47189 = inst_47188;
var state_47219__$1 = (function (){var statearr_47224 = state_47219;
(statearr_47224[(10)] = inst_47189);

return statearr_47224;
})();
var statearr_47225_48258 = state_47219__$1;
(statearr_47225_48258[(2)] = null);

(statearr_47225_48258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47220 === (4))){
var inst_47189 = (state_47219[(10)]);
var state_47219__$1 = state_47219;
return cljs.core.async.ioc_alts_BANG_(state_47219__$1,(7),inst_47189);
} else {
if((state_val_47220 === (6))){
var inst_47215 = (state_47219[(2)]);
var state_47219__$1 = state_47219;
var statearr_47226_48259 = state_47219__$1;
(statearr_47226_48259[(2)] = inst_47215);

(statearr_47226_48259[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47220 === (3))){
var inst_47217 = (state_47219[(2)]);
var state_47219__$1 = state_47219;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47219__$1,inst_47217);
} else {
if((state_val_47220 === (2))){
var inst_47189 = (state_47219[(10)]);
var inst_47191 = cljs.core.count(inst_47189);
var inst_47192 = (inst_47191 > (0));
var state_47219__$1 = state_47219;
if(cljs.core.truth_(inst_47192)){
var statearr_47228_48260 = state_47219__$1;
(statearr_47228_48260[(1)] = (4));

} else {
var statearr_47229_48261 = state_47219__$1;
(statearr_47229_48261[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47220 === (11))){
var inst_47189 = (state_47219[(10)]);
var inst_47208 = (state_47219[(2)]);
var tmp47227 = inst_47189;
var inst_47189__$1 = tmp47227;
var state_47219__$1 = (function (){var statearr_47230 = state_47219;
(statearr_47230[(11)] = inst_47208);

(statearr_47230[(10)] = inst_47189__$1);

return statearr_47230;
})();
var statearr_47231_48263 = state_47219__$1;
(statearr_47231_48263[(2)] = null);

(statearr_47231_48263[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47220 === (9))){
var inst_47199 = (state_47219[(7)]);
var state_47219__$1 = state_47219;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47219__$1,(11),out,inst_47199);
} else {
if((state_val_47220 === (5))){
var inst_47213 = cljs.core.async.close_BANG_(out);
var state_47219__$1 = state_47219;
var statearr_47232_48264 = state_47219__$1;
(statearr_47232_48264[(2)] = inst_47213);

(statearr_47232_48264[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47220 === (10))){
var inst_47211 = (state_47219[(2)]);
var state_47219__$1 = state_47219;
var statearr_47233_48265 = state_47219__$1;
(statearr_47233_48265[(2)] = inst_47211);

(statearr_47233_48265[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47220 === (8))){
var inst_47200 = (state_47219[(9)]);
var inst_47199 = (state_47219[(7)]);
var inst_47198 = (state_47219[(8)]);
var inst_47189 = (state_47219[(10)]);
var inst_47203 = (function (){var cs = inst_47189;
var vec__47194 = inst_47198;
var v = inst_47199;
var c = inst_47200;
return (function (p1__47185_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__47185_SHARP_);
});
})();
var inst_47204 = cljs.core.filterv(inst_47203,inst_47189);
var inst_47189__$1 = inst_47204;
var state_47219__$1 = (function (){var statearr_47234 = state_47219;
(statearr_47234[(10)] = inst_47189__$1);

return statearr_47234;
})();
var statearr_47235_48268 = state_47219__$1;
(statearr_47235_48268[(2)] = null);

(statearr_47235_48268[(1)] = (2));


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
var cljs$core$async$state_machine__46034__auto__ = null;
var cljs$core$async$state_machine__46034__auto____0 = (function (){
var statearr_47236 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47236[(0)] = cljs$core$async$state_machine__46034__auto__);

(statearr_47236[(1)] = (1));

return statearr_47236;
});
var cljs$core$async$state_machine__46034__auto____1 = (function (state_47219){
while(true){
var ret_value__46035__auto__ = (function (){try{while(true){
var result__46036__auto__ = switch__46033__auto__(state_47219);
if(cljs.core.keyword_identical_QMARK_(result__46036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46036__auto__;
}
break;
}
}catch (e47237){if((e47237 instanceof Object)){
var ex__46037__auto__ = e47237;
var statearr_47238_48270 = state_47219;
(statearr_47238_48270[(5)] = ex__46037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47219);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47237;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48275 = state_47219;
state_47219 = G__48275;
continue;
} else {
return ret_value__46035__auto__;
}
break;
}
});
cljs$core$async$state_machine__46034__auto__ = function(state_47219){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46034__auto____1.call(this,state_47219);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46034__auto____0;
cljs$core$async$state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46034__auto____1;
return cljs$core$async$state_machine__46034__auto__;
})()
})();
var state__46138__auto__ = (function (){var statearr_47239 = (f__46137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46137__auto__.cljs$core$IFn$_invoke$arity$0() : f__46137__auto__.call(null));
(statearr_47239[(6)] = c__46136__auto___48253);

return statearr_47239;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46138__auto__);
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
var G__47241 = arguments.length;
switch (G__47241) {
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
var c__46136__auto___48278 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46137__auto__ = (function (){var switch__46033__auto__ = (function (state_47265){
var state_val_47266 = (state_47265[(1)]);
if((state_val_47266 === (7))){
var inst_47247 = (state_47265[(7)]);
var inst_47247__$1 = (state_47265[(2)]);
var inst_47248 = (inst_47247__$1 == null);
var inst_47249 = cljs.core.not(inst_47248);
var state_47265__$1 = (function (){var statearr_47267 = state_47265;
(statearr_47267[(7)] = inst_47247__$1);

return statearr_47267;
})();
if(inst_47249){
var statearr_47268_48280 = state_47265__$1;
(statearr_47268_48280[(1)] = (8));

} else {
var statearr_47269_48281 = state_47265__$1;
(statearr_47269_48281[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (1))){
var inst_47242 = (0);
var state_47265__$1 = (function (){var statearr_47270 = state_47265;
(statearr_47270[(8)] = inst_47242);

return statearr_47270;
})();
var statearr_47271_48282 = state_47265__$1;
(statearr_47271_48282[(2)] = null);

(statearr_47271_48282[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (4))){
var state_47265__$1 = state_47265;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47265__$1,(7),ch);
} else {
if((state_val_47266 === (6))){
var inst_47260 = (state_47265[(2)]);
var state_47265__$1 = state_47265;
var statearr_47272_48287 = state_47265__$1;
(statearr_47272_48287[(2)] = inst_47260);

(statearr_47272_48287[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (3))){
var inst_47262 = (state_47265[(2)]);
var inst_47263 = cljs.core.async.close_BANG_(out);
var state_47265__$1 = (function (){var statearr_47273 = state_47265;
(statearr_47273[(9)] = inst_47262);

return statearr_47273;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47265__$1,inst_47263);
} else {
if((state_val_47266 === (2))){
var inst_47242 = (state_47265[(8)]);
var inst_47244 = (inst_47242 < n);
var state_47265__$1 = state_47265;
if(cljs.core.truth_(inst_47244)){
var statearr_47274_48288 = state_47265__$1;
(statearr_47274_48288[(1)] = (4));

} else {
var statearr_47275_48289 = state_47265__$1;
(statearr_47275_48289[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (11))){
var inst_47242 = (state_47265[(8)]);
var inst_47252 = (state_47265[(2)]);
var inst_47253 = (inst_47242 + (1));
var inst_47242__$1 = inst_47253;
var state_47265__$1 = (function (){var statearr_47276 = state_47265;
(statearr_47276[(10)] = inst_47252);

(statearr_47276[(8)] = inst_47242__$1);

return statearr_47276;
})();
var statearr_47277_48290 = state_47265__$1;
(statearr_47277_48290[(2)] = null);

(statearr_47277_48290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (9))){
var state_47265__$1 = state_47265;
var statearr_47278_48291 = state_47265__$1;
(statearr_47278_48291[(2)] = null);

(statearr_47278_48291[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (5))){
var state_47265__$1 = state_47265;
var statearr_47279_48292 = state_47265__$1;
(statearr_47279_48292[(2)] = null);

(statearr_47279_48292[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (10))){
var inst_47257 = (state_47265[(2)]);
var state_47265__$1 = state_47265;
var statearr_47280_48293 = state_47265__$1;
(statearr_47280_48293[(2)] = inst_47257);

(statearr_47280_48293[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47266 === (8))){
var inst_47247 = (state_47265[(7)]);
var state_47265__$1 = state_47265;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47265__$1,(11),out,inst_47247);
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
var cljs$core$async$state_machine__46034__auto__ = null;
var cljs$core$async$state_machine__46034__auto____0 = (function (){
var statearr_47281 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47281[(0)] = cljs$core$async$state_machine__46034__auto__);

(statearr_47281[(1)] = (1));

return statearr_47281;
});
var cljs$core$async$state_machine__46034__auto____1 = (function (state_47265){
while(true){
var ret_value__46035__auto__ = (function (){try{while(true){
var result__46036__auto__ = switch__46033__auto__(state_47265);
if(cljs.core.keyword_identical_QMARK_(result__46036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46036__auto__;
}
break;
}
}catch (e47282){if((e47282 instanceof Object)){
var ex__46037__auto__ = e47282;
var statearr_47283_48295 = state_47265;
(statearr_47283_48295[(5)] = ex__46037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47265);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47282;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48296 = state_47265;
state_47265 = G__48296;
continue;
} else {
return ret_value__46035__auto__;
}
break;
}
});
cljs$core$async$state_machine__46034__auto__ = function(state_47265){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46034__auto____1.call(this,state_47265);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46034__auto____0;
cljs$core$async$state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46034__auto____1;
return cljs$core$async$state_machine__46034__auto__;
})()
})();
var state__46138__auto__ = (function (){var statearr_47284 = (f__46137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46137__auto__.cljs$core$IFn$_invoke$arity$0() : f__46137__auto__.call(null));
(statearr_47284[(6)] = c__46136__auto___48278);

return statearr_47284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46138__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47286 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47286 = (function (f,ch,meta47287){
this.f = f;
this.ch = ch;
this.meta47287 = meta47287;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47286.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47288,meta47287__$1){
var self__ = this;
var _47288__$1 = this;
return (new cljs.core.async.t_cljs$core$async47286(self__.f,self__.ch,meta47287__$1));
}));

(cljs.core.async.t_cljs$core$async47286.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47288){
var self__ = this;
var _47288__$1 = this;
return self__.meta47287;
}));

(cljs.core.async.t_cljs$core$async47286.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47286.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47286.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47286.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47286.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47289 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47289 = (function (f,ch,meta47287,_,fn1,meta47290){
this.f = f;
this.ch = ch;
this.meta47287 = meta47287;
this._ = _;
this.fn1 = fn1;
this.meta47290 = meta47290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47291,meta47290__$1){
var self__ = this;
var _47291__$1 = this;
return (new cljs.core.async.t_cljs$core$async47289(self__.f,self__.ch,self__.meta47287,self__._,self__.fn1,meta47290__$1));
}));

(cljs.core.async.t_cljs$core$async47289.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47291){
var self__ = this;
var _47291__$1 = this;
return self__.meta47290;
}));

(cljs.core.async.t_cljs$core$async47289.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47289.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async47289.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async47289.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__47285_SHARP_){
var G__47292 = (((p1__47285_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__47285_SHARP_) : self__.f.call(null,p1__47285_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__47292) : f1.call(null,G__47292));
});
}));

(cljs.core.async.t_cljs$core$async47289.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47287","meta47287",-732664641,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async47286","cljs.core.async/t_cljs$core$async47286",-1097207159,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta47290","meta47290",-1083668565,null)], null);
}));

(cljs.core.async.t_cljs$core$async47289.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47289.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47289");

(cljs.core.async.t_cljs$core$async47289.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47289");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47289.
 */
cljs.core.async.__GT_t_cljs$core$async47289 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47289(f__$1,ch__$1,meta47287__$1,___$2,fn1__$1,meta47290){
return (new cljs.core.async.t_cljs$core$async47289(f__$1,ch__$1,meta47287__$1,___$2,fn1__$1,meta47290));
});

}

return (new cljs.core.async.t_cljs$core$async47289(self__.f,self__.ch,self__.meta47287,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__47293 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__47293) : self__.f.call(null,G__47293));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async47286.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47286.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async47286.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47287","meta47287",-732664641,null)], null);
}));

(cljs.core.async.t_cljs$core$async47286.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47286.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47286");

(cljs.core.async.t_cljs$core$async47286.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47286");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47286.
 */
cljs.core.async.__GT_t_cljs$core$async47286 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async47286(f__$1,ch__$1,meta47287){
return (new cljs.core.async.t_cljs$core$async47286(f__$1,ch__$1,meta47287));
});

}

return (new cljs.core.async.t_cljs$core$async47286(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47294 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47294 = (function (f,ch,meta47295){
this.f = f;
this.ch = ch;
this.meta47295 = meta47295;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47294.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47296,meta47295__$1){
var self__ = this;
var _47296__$1 = this;
return (new cljs.core.async.t_cljs$core$async47294(self__.f,self__.ch,meta47295__$1));
}));

(cljs.core.async.t_cljs$core$async47294.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47296){
var self__ = this;
var _47296__$1 = this;
return self__.meta47295;
}));

(cljs.core.async.t_cljs$core$async47294.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47294.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47294.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47294.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47294.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47294.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async47294.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47295","meta47295",430150164,null)], null);
}));

(cljs.core.async.t_cljs$core$async47294.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47294.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47294");

(cljs.core.async.t_cljs$core$async47294.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47294");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47294.
 */
cljs.core.async.__GT_t_cljs$core$async47294 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async47294(f__$1,ch__$1,meta47295){
return (new cljs.core.async.t_cljs$core$async47294(f__$1,ch__$1,meta47295));
});

}

return (new cljs.core.async.t_cljs$core$async47294(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async47297 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async47297 = (function (p,ch,meta47298){
this.p = p;
this.ch = ch;
this.meta47298 = meta47298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async47297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47299,meta47298__$1){
var self__ = this;
var _47299__$1 = this;
return (new cljs.core.async.t_cljs$core$async47297(self__.p,self__.ch,meta47298__$1));
}));

(cljs.core.async.t_cljs$core$async47297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47299){
var self__ = this;
var _47299__$1 = this;
return self__.meta47298;
}));

(cljs.core.async.t_cljs$core$async47297.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47297.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47297.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async47297.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47297.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async47297.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async47297.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async47297.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta47298","meta47298",-868010673,null)], null);
}));

(cljs.core.async.t_cljs$core$async47297.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async47297.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async47297");

(cljs.core.async.t_cljs$core$async47297.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async47297");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async47297.
 */
cljs.core.async.__GT_t_cljs$core$async47297 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async47297(p__$1,ch__$1,meta47298){
return (new cljs.core.async.t_cljs$core$async47297(p__$1,ch__$1,meta47298));
});

}

return (new cljs.core.async.t_cljs$core$async47297(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__47301 = arguments.length;
switch (G__47301) {
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
var c__46136__auto___48315 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46137__auto__ = (function (){var switch__46033__auto__ = (function (state_47322){
var state_val_47323 = (state_47322[(1)]);
if((state_val_47323 === (7))){
var inst_47318 = (state_47322[(2)]);
var state_47322__$1 = state_47322;
var statearr_47324_48316 = state_47322__$1;
(statearr_47324_48316[(2)] = inst_47318);

(statearr_47324_48316[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47323 === (1))){
var state_47322__$1 = state_47322;
var statearr_47325_48318 = state_47322__$1;
(statearr_47325_48318[(2)] = null);

(statearr_47325_48318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47323 === (4))){
var inst_47304 = (state_47322[(7)]);
var inst_47304__$1 = (state_47322[(2)]);
var inst_47305 = (inst_47304__$1 == null);
var state_47322__$1 = (function (){var statearr_47326 = state_47322;
(statearr_47326[(7)] = inst_47304__$1);

return statearr_47326;
})();
if(cljs.core.truth_(inst_47305)){
var statearr_47327_48320 = state_47322__$1;
(statearr_47327_48320[(1)] = (5));

} else {
var statearr_47328_48321 = state_47322__$1;
(statearr_47328_48321[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47323 === (6))){
var inst_47304 = (state_47322[(7)]);
var inst_47309 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_47304) : p.call(null,inst_47304));
var state_47322__$1 = state_47322;
if(cljs.core.truth_(inst_47309)){
var statearr_47329_48322 = state_47322__$1;
(statearr_47329_48322[(1)] = (8));

} else {
var statearr_47330_48323 = state_47322__$1;
(statearr_47330_48323[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47323 === (3))){
var inst_47320 = (state_47322[(2)]);
var state_47322__$1 = state_47322;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47322__$1,inst_47320);
} else {
if((state_val_47323 === (2))){
var state_47322__$1 = state_47322;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47322__$1,(4),ch);
} else {
if((state_val_47323 === (11))){
var inst_47312 = (state_47322[(2)]);
var state_47322__$1 = state_47322;
var statearr_47331_48324 = state_47322__$1;
(statearr_47331_48324[(2)] = inst_47312);

(statearr_47331_48324[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47323 === (9))){
var state_47322__$1 = state_47322;
var statearr_47332_48325 = state_47322__$1;
(statearr_47332_48325[(2)] = null);

(statearr_47332_48325[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47323 === (5))){
var inst_47307 = cljs.core.async.close_BANG_(out);
var state_47322__$1 = state_47322;
var statearr_47333_48326 = state_47322__$1;
(statearr_47333_48326[(2)] = inst_47307);

(statearr_47333_48326[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47323 === (10))){
var inst_47315 = (state_47322[(2)]);
var state_47322__$1 = (function (){var statearr_47334 = state_47322;
(statearr_47334[(8)] = inst_47315);

return statearr_47334;
})();
var statearr_47335_48327 = state_47322__$1;
(statearr_47335_48327[(2)] = null);

(statearr_47335_48327[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47323 === (8))){
var inst_47304 = (state_47322[(7)]);
var state_47322__$1 = state_47322;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47322__$1,(11),out,inst_47304);
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
var cljs$core$async$state_machine__46034__auto__ = null;
var cljs$core$async$state_machine__46034__auto____0 = (function (){
var statearr_47336 = [null,null,null,null,null,null,null,null,null];
(statearr_47336[(0)] = cljs$core$async$state_machine__46034__auto__);

(statearr_47336[(1)] = (1));

return statearr_47336;
});
var cljs$core$async$state_machine__46034__auto____1 = (function (state_47322){
while(true){
var ret_value__46035__auto__ = (function (){try{while(true){
var result__46036__auto__ = switch__46033__auto__(state_47322);
if(cljs.core.keyword_identical_QMARK_(result__46036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46036__auto__;
}
break;
}
}catch (e47337){if((e47337 instanceof Object)){
var ex__46037__auto__ = e47337;
var statearr_47338_48330 = state_47322;
(statearr_47338_48330[(5)] = ex__46037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47337;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48333 = state_47322;
state_47322 = G__48333;
continue;
} else {
return ret_value__46035__auto__;
}
break;
}
});
cljs$core$async$state_machine__46034__auto__ = function(state_47322){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46034__auto____1.call(this,state_47322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46034__auto____0;
cljs$core$async$state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46034__auto____1;
return cljs$core$async$state_machine__46034__auto__;
})()
})();
var state__46138__auto__ = (function (){var statearr_47339 = (f__46137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46137__auto__.cljs$core$IFn$_invoke$arity$0() : f__46137__auto__.call(null));
(statearr_47339[(6)] = c__46136__auto___48315);

return statearr_47339;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46138__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__47341 = arguments.length;
switch (G__47341) {
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
var c__46136__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46137__auto__ = (function (){var switch__46033__auto__ = (function (state_47403){
var state_val_47404 = (state_47403[(1)]);
if((state_val_47404 === (7))){
var inst_47399 = (state_47403[(2)]);
var state_47403__$1 = state_47403;
var statearr_47405_48335 = state_47403__$1;
(statearr_47405_48335[(2)] = inst_47399);

(statearr_47405_48335[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47404 === (20))){
var inst_47369 = (state_47403[(7)]);
var inst_47380 = (state_47403[(2)]);
var inst_47381 = cljs.core.next(inst_47369);
var inst_47355 = inst_47381;
var inst_47356 = null;
var inst_47357 = (0);
var inst_47358 = (0);
var state_47403__$1 = (function (){var statearr_47406 = state_47403;
(statearr_47406[(8)] = inst_47357);

(statearr_47406[(9)] = inst_47355);

(statearr_47406[(10)] = inst_47356);

(statearr_47406[(11)] = inst_47380);

(statearr_47406[(12)] = inst_47358);

return statearr_47406;
})();
var statearr_47407_48337 = state_47403__$1;
(statearr_47407_48337[(2)] = null);

(statearr_47407_48337[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47404 === (1))){
var state_47403__$1 = state_47403;
var statearr_47408_48338 = state_47403__$1;
(statearr_47408_48338[(2)] = null);

(statearr_47408_48338[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47404 === (4))){
var inst_47344 = (state_47403[(13)]);
var inst_47344__$1 = (state_47403[(2)]);
var inst_47345 = (inst_47344__$1 == null);
var state_47403__$1 = (function (){var statearr_47409 = state_47403;
(statearr_47409[(13)] = inst_47344__$1);

return statearr_47409;
})();
if(cljs.core.truth_(inst_47345)){
var statearr_47410_48339 = state_47403__$1;
(statearr_47410_48339[(1)] = (5));

} else {
var statearr_47411_48340 = state_47403__$1;
(statearr_47411_48340[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47404 === (15))){
var state_47403__$1 = state_47403;
var statearr_47415_48341 = state_47403__$1;
(statearr_47415_48341[(2)] = null);

(statearr_47415_48341[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47404 === (21))){
var state_47403__$1 = state_47403;
var statearr_47416_48342 = state_47403__$1;
(statearr_47416_48342[(2)] = null);

(statearr_47416_48342[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47404 === (13))){
var inst_47357 = (state_47403[(8)]);
var inst_47355 = (state_47403[(9)]);
var inst_47356 = (state_47403[(10)]);
var inst_47358 = (state_47403[(12)]);
var inst_47365 = (state_47403[(2)]);
var inst_47366 = (inst_47358 + (1));
var tmp47412 = inst_47357;
var tmp47413 = inst_47355;
var tmp47414 = inst_47356;
var inst_47355__$1 = tmp47413;
var inst_47356__$1 = tmp47414;
var inst_47357__$1 = tmp47412;
var inst_47358__$1 = inst_47366;
var state_47403__$1 = (function (){var statearr_47417 = state_47403;
(statearr_47417[(14)] = inst_47365);

(statearr_47417[(8)] = inst_47357__$1);

(statearr_47417[(9)] = inst_47355__$1);

(statearr_47417[(10)] = inst_47356__$1);

(statearr_47417[(12)] = inst_47358__$1);

return statearr_47417;
})();
var statearr_47418_48344 = state_47403__$1;
(statearr_47418_48344[(2)] = null);

(statearr_47418_48344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47404 === (22))){
var state_47403__$1 = state_47403;
var statearr_47419_48346 = state_47403__$1;
(statearr_47419_48346[(2)] = null);

(statearr_47419_48346[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47404 === (6))){
var inst_47344 = (state_47403[(13)]);
var inst_47353 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47344) : f.call(null,inst_47344));
var inst_47354 = cljs.core.seq(inst_47353);
var inst_47355 = inst_47354;
var inst_47356 = null;
var inst_47357 = (0);
var inst_47358 = (0);
var state_47403__$1 = (function (){var statearr_47420 = state_47403;
(statearr_47420[(8)] = inst_47357);

(statearr_47420[(9)] = inst_47355);

(statearr_47420[(10)] = inst_47356);

(statearr_47420[(12)] = inst_47358);

return statearr_47420;
})();
var statearr_47421_48347 = state_47403__$1;
(statearr_47421_48347[(2)] = null);

(statearr_47421_48347[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47404 === (17))){
var inst_47369 = (state_47403[(7)]);
var inst_47373 = cljs.core.chunk_first(inst_47369);
var inst_47374 = cljs.core.chunk_rest(inst_47369);
var inst_47375 = cljs.core.count(inst_47373);
var inst_47355 = inst_47374;
var inst_47356 = inst_47373;
var inst_47357 = inst_47375;
var inst_47358 = (0);
var state_47403__$1 = (function (){var statearr_47422 = state_47403;
(statearr_47422[(8)] = inst_47357);

(statearr_47422[(9)] = inst_47355);

(statearr_47422[(10)] = inst_47356);

(statearr_47422[(12)] = inst_47358);

return statearr_47422;
})();
var statearr_47423_48355 = state_47403__$1;
(statearr_47423_48355[(2)] = null);

(statearr_47423_48355[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47404 === (3))){
var inst_47401 = (state_47403[(2)]);
var state_47403__$1 = state_47403;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47403__$1,inst_47401);
} else {
if((state_val_47404 === (12))){
var inst_47389 = (state_47403[(2)]);
var state_47403__$1 = state_47403;
var statearr_47424_48359 = state_47403__$1;
(statearr_47424_48359[(2)] = inst_47389);

(statearr_47424_48359[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47404 === (2))){
var state_47403__$1 = state_47403;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47403__$1,(4),in$);
} else {
if((state_val_47404 === (23))){
var inst_47397 = (state_47403[(2)]);
var state_47403__$1 = state_47403;
var statearr_47425_48360 = state_47403__$1;
(statearr_47425_48360[(2)] = inst_47397);

(statearr_47425_48360[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47404 === (19))){
var inst_47384 = (state_47403[(2)]);
var state_47403__$1 = state_47403;
var statearr_47426_48364 = state_47403__$1;
(statearr_47426_48364[(2)] = inst_47384);

(statearr_47426_48364[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47404 === (11))){
var inst_47369 = (state_47403[(7)]);
var inst_47355 = (state_47403[(9)]);
var inst_47369__$1 = cljs.core.seq(inst_47355);
var state_47403__$1 = (function (){var statearr_47427 = state_47403;
(statearr_47427[(7)] = inst_47369__$1);

return statearr_47427;
})();
if(inst_47369__$1){
var statearr_47428_48365 = state_47403__$1;
(statearr_47428_48365[(1)] = (14));

} else {
var statearr_47429_48366 = state_47403__$1;
(statearr_47429_48366[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47404 === (9))){
var inst_47391 = (state_47403[(2)]);
var inst_47392 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_47403__$1 = (function (){var statearr_47430 = state_47403;
(statearr_47430[(15)] = inst_47391);

return statearr_47430;
})();
if(cljs.core.truth_(inst_47392)){
var statearr_47431_48370 = state_47403__$1;
(statearr_47431_48370[(1)] = (21));

} else {
var statearr_47432_48371 = state_47403__$1;
(statearr_47432_48371[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47404 === (5))){
var inst_47347 = cljs.core.async.close_BANG_(out);
var state_47403__$1 = state_47403;
var statearr_47433_48372 = state_47403__$1;
(statearr_47433_48372[(2)] = inst_47347);

(statearr_47433_48372[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47404 === (14))){
var inst_47369 = (state_47403[(7)]);
var inst_47371 = cljs.core.chunked_seq_QMARK_(inst_47369);
var state_47403__$1 = state_47403;
if(inst_47371){
var statearr_47434_48373 = state_47403__$1;
(statearr_47434_48373[(1)] = (17));

} else {
var statearr_47435_48377 = state_47403__$1;
(statearr_47435_48377[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47404 === (16))){
var inst_47387 = (state_47403[(2)]);
var state_47403__$1 = state_47403;
var statearr_47436_48378 = state_47403__$1;
(statearr_47436_48378[(2)] = inst_47387);

(statearr_47436_48378[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47404 === (10))){
var inst_47356 = (state_47403[(10)]);
var inst_47358 = (state_47403[(12)]);
var inst_47363 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_47356,inst_47358);
var state_47403__$1 = state_47403;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47403__$1,(13),out,inst_47363);
} else {
if((state_val_47404 === (18))){
var inst_47369 = (state_47403[(7)]);
var inst_47378 = cljs.core.first(inst_47369);
var state_47403__$1 = state_47403;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47403__$1,(20),out,inst_47378);
} else {
if((state_val_47404 === (8))){
var inst_47357 = (state_47403[(8)]);
var inst_47358 = (state_47403[(12)]);
var inst_47360 = (inst_47358 < inst_47357);
var inst_47361 = inst_47360;
var state_47403__$1 = state_47403;
if(cljs.core.truth_(inst_47361)){
var statearr_47437_48380 = state_47403__$1;
(statearr_47437_48380[(1)] = (10));

} else {
var statearr_47438_48381 = state_47403__$1;
(statearr_47438_48381[(1)] = (11));

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
var cljs$core$async$mapcat_STAR__$_state_machine__46034__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__46034__auto____0 = (function (){
var statearr_47439 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47439[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__46034__auto__);

(statearr_47439[(1)] = (1));

return statearr_47439;
});
var cljs$core$async$mapcat_STAR__$_state_machine__46034__auto____1 = (function (state_47403){
while(true){
var ret_value__46035__auto__ = (function (){try{while(true){
var result__46036__auto__ = switch__46033__auto__(state_47403);
if(cljs.core.keyword_identical_QMARK_(result__46036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46036__auto__;
}
break;
}
}catch (e47440){if((e47440 instanceof Object)){
var ex__46037__auto__ = e47440;
var statearr_47441_48385 = state_47403;
(statearr_47441_48385[(5)] = ex__46037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47440;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48392 = state_47403;
state_47403 = G__48392;
continue;
} else {
return ret_value__46035__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__46034__auto__ = function(state_47403){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__46034__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__46034__auto____1.call(this,state_47403);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__46034__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__46034__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__46034__auto__;
})()
})();
var state__46138__auto__ = (function (){var statearr_47442 = (f__46137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46137__auto__.cljs$core$IFn$_invoke$arity$0() : f__46137__auto__.call(null));
(statearr_47442[(6)] = c__46136__auto__);

return statearr_47442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46138__auto__);
}));

return c__46136__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__47444 = arguments.length;
switch (G__47444) {
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
var G__47446 = arguments.length;
switch (G__47446) {
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
var G__47448 = arguments.length;
switch (G__47448) {
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
var c__46136__auto___48402 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46137__auto__ = (function (){var switch__46033__auto__ = (function (state_47472){
var state_val_47473 = (state_47472[(1)]);
if((state_val_47473 === (7))){
var inst_47467 = (state_47472[(2)]);
var state_47472__$1 = state_47472;
var statearr_47474_48409 = state_47472__$1;
(statearr_47474_48409[(2)] = inst_47467);

(statearr_47474_48409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47473 === (1))){
var inst_47449 = null;
var state_47472__$1 = (function (){var statearr_47475 = state_47472;
(statearr_47475[(7)] = inst_47449);

return statearr_47475;
})();
var statearr_47476_48410 = state_47472__$1;
(statearr_47476_48410[(2)] = null);

(statearr_47476_48410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47473 === (4))){
var inst_47452 = (state_47472[(8)]);
var inst_47452__$1 = (state_47472[(2)]);
var inst_47453 = (inst_47452__$1 == null);
var inst_47454 = cljs.core.not(inst_47453);
var state_47472__$1 = (function (){var statearr_47477 = state_47472;
(statearr_47477[(8)] = inst_47452__$1);

return statearr_47477;
})();
if(inst_47454){
var statearr_47478_48411 = state_47472__$1;
(statearr_47478_48411[(1)] = (5));

} else {
var statearr_47479_48412 = state_47472__$1;
(statearr_47479_48412[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47473 === (6))){
var state_47472__$1 = state_47472;
var statearr_47480_48413 = state_47472__$1;
(statearr_47480_48413[(2)] = null);

(statearr_47480_48413[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47473 === (3))){
var inst_47469 = (state_47472[(2)]);
var inst_47470 = cljs.core.async.close_BANG_(out);
var state_47472__$1 = (function (){var statearr_47481 = state_47472;
(statearr_47481[(9)] = inst_47469);

return statearr_47481;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_47472__$1,inst_47470);
} else {
if((state_val_47473 === (2))){
var state_47472__$1 = state_47472;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47472__$1,(4),ch);
} else {
if((state_val_47473 === (11))){
var inst_47452 = (state_47472[(8)]);
var inst_47461 = (state_47472[(2)]);
var inst_47449 = inst_47452;
var state_47472__$1 = (function (){var statearr_47482 = state_47472;
(statearr_47482[(7)] = inst_47449);

(statearr_47482[(10)] = inst_47461);

return statearr_47482;
})();
var statearr_47483_48414 = state_47472__$1;
(statearr_47483_48414[(2)] = null);

(statearr_47483_48414[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47473 === (9))){
var inst_47452 = (state_47472[(8)]);
var state_47472__$1 = state_47472;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47472__$1,(11),out,inst_47452);
} else {
if((state_val_47473 === (5))){
var inst_47449 = (state_47472[(7)]);
var inst_47452 = (state_47472[(8)]);
var inst_47456 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47452,inst_47449);
var state_47472__$1 = state_47472;
if(inst_47456){
var statearr_47485_48421 = state_47472__$1;
(statearr_47485_48421[(1)] = (8));

} else {
var statearr_47486_48422 = state_47472__$1;
(statearr_47486_48422[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47473 === (10))){
var inst_47464 = (state_47472[(2)]);
var state_47472__$1 = state_47472;
var statearr_47487_48423 = state_47472__$1;
(statearr_47487_48423[(2)] = inst_47464);

(statearr_47487_48423[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47473 === (8))){
var inst_47449 = (state_47472[(7)]);
var tmp47484 = inst_47449;
var inst_47449__$1 = tmp47484;
var state_47472__$1 = (function (){var statearr_47488 = state_47472;
(statearr_47488[(7)] = inst_47449__$1);

return statearr_47488;
})();
var statearr_47489_48424 = state_47472__$1;
(statearr_47489_48424[(2)] = null);

(statearr_47489_48424[(1)] = (2));


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
var cljs$core$async$state_machine__46034__auto__ = null;
var cljs$core$async$state_machine__46034__auto____0 = (function (){
var statearr_47490 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47490[(0)] = cljs$core$async$state_machine__46034__auto__);

(statearr_47490[(1)] = (1));

return statearr_47490;
});
var cljs$core$async$state_machine__46034__auto____1 = (function (state_47472){
while(true){
var ret_value__46035__auto__ = (function (){try{while(true){
var result__46036__auto__ = switch__46033__auto__(state_47472);
if(cljs.core.keyword_identical_QMARK_(result__46036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46036__auto__;
}
break;
}
}catch (e47491){if((e47491 instanceof Object)){
var ex__46037__auto__ = e47491;
var statearr_47492_48425 = state_47472;
(statearr_47492_48425[(5)] = ex__46037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47472);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47491;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48426 = state_47472;
state_47472 = G__48426;
continue;
} else {
return ret_value__46035__auto__;
}
break;
}
});
cljs$core$async$state_machine__46034__auto__ = function(state_47472){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46034__auto____1.call(this,state_47472);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46034__auto____0;
cljs$core$async$state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46034__auto____1;
return cljs$core$async$state_machine__46034__auto__;
})()
})();
var state__46138__auto__ = (function (){var statearr_47493 = (f__46137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46137__auto__.cljs$core$IFn$_invoke$arity$0() : f__46137__auto__.call(null));
(statearr_47493[(6)] = c__46136__auto___48402);

return statearr_47493;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46138__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__47495 = arguments.length;
switch (G__47495) {
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
var c__46136__auto___48434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46137__auto__ = (function (){var switch__46033__auto__ = (function (state_47533){
var state_val_47534 = (state_47533[(1)]);
if((state_val_47534 === (7))){
var inst_47529 = (state_47533[(2)]);
var state_47533__$1 = state_47533;
var statearr_47535_48435 = state_47533__$1;
(statearr_47535_48435[(2)] = inst_47529);

(statearr_47535_48435[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47534 === (1))){
var inst_47496 = (new Array(n));
var inst_47497 = inst_47496;
var inst_47498 = (0);
var state_47533__$1 = (function (){var statearr_47536 = state_47533;
(statearr_47536[(7)] = inst_47498);

(statearr_47536[(8)] = inst_47497);

return statearr_47536;
})();
var statearr_47537_48436 = state_47533__$1;
(statearr_47537_48436[(2)] = null);

(statearr_47537_48436[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47534 === (4))){
var inst_47501 = (state_47533[(9)]);
var inst_47501__$1 = (state_47533[(2)]);
var inst_47502 = (inst_47501__$1 == null);
var inst_47503 = cljs.core.not(inst_47502);
var state_47533__$1 = (function (){var statearr_47538 = state_47533;
(statearr_47538[(9)] = inst_47501__$1);

return statearr_47538;
})();
if(inst_47503){
var statearr_47539_48437 = state_47533__$1;
(statearr_47539_48437[(1)] = (5));

} else {
var statearr_47540_48438 = state_47533__$1;
(statearr_47540_48438[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47534 === (15))){
var inst_47523 = (state_47533[(2)]);
var state_47533__$1 = state_47533;
var statearr_47541_48439 = state_47533__$1;
(statearr_47541_48439[(2)] = inst_47523);

(statearr_47541_48439[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47534 === (13))){
var state_47533__$1 = state_47533;
var statearr_47542_48440 = state_47533__$1;
(statearr_47542_48440[(2)] = null);

(statearr_47542_48440[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47534 === (6))){
var inst_47498 = (state_47533[(7)]);
var inst_47519 = (inst_47498 > (0));
var state_47533__$1 = state_47533;
if(cljs.core.truth_(inst_47519)){
var statearr_47543_48441 = state_47533__$1;
(statearr_47543_48441[(1)] = (12));

} else {
var statearr_47544_48442 = state_47533__$1;
(statearr_47544_48442[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47534 === (3))){
var inst_47531 = (state_47533[(2)]);
var state_47533__$1 = state_47533;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47533__$1,inst_47531);
} else {
if((state_val_47534 === (12))){
var inst_47497 = (state_47533[(8)]);
var inst_47521 = cljs.core.vec(inst_47497);
var state_47533__$1 = state_47533;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47533__$1,(15),out,inst_47521);
} else {
if((state_val_47534 === (2))){
var state_47533__$1 = state_47533;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47533__$1,(4),ch);
} else {
if((state_val_47534 === (11))){
var inst_47513 = (state_47533[(2)]);
var inst_47514 = (new Array(n));
var inst_47497 = inst_47514;
var inst_47498 = (0);
var state_47533__$1 = (function (){var statearr_47545 = state_47533;
(statearr_47545[(7)] = inst_47498);

(statearr_47545[(8)] = inst_47497);

(statearr_47545[(10)] = inst_47513);

return statearr_47545;
})();
var statearr_47546_48446 = state_47533__$1;
(statearr_47546_48446[(2)] = null);

(statearr_47546_48446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47534 === (9))){
var inst_47497 = (state_47533[(8)]);
var inst_47511 = cljs.core.vec(inst_47497);
var state_47533__$1 = state_47533;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47533__$1,(11),out,inst_47511);
} else {
if((state_val_47534 === (5))){
var inst_47498 = (state_47533[(7)]);
var inst_47497 = (state_47533[(8)]);
var inst_47506 = (state_47533[(11)]);
var inst_47501 = (state_47533[(9)]);
var inst_47505 = (inst_47497[inst_47498] = inst_47501);
var inst_47506__$1 = (inst_47498 + (1));
var inst_47507 = (inst_47506__$1 < n);
var state_47533__$1 = (function (){var statearr_47547 = state_47533;
(statearr_47547[(11)] = inst_47506__$1);

(statearr_47547[(12)] = inst_47505);

return statearr_47547;
})();
if(cljs.core.truth_(inst_47507)){
var statearr_47548_48450 = state_47533__$1;
(statearr_47548_48450[(1)] = (8));

} else {
var statearr_47549_48451 = state_47533__$1;
(statearr_47549_48451[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47534 === (14))){
var inst_47526 = (state_47533[(2)]);
var inst_47527 = cljs.core.async.close_BANG_(out);
var state_47533__$1 = (function (){var statearr_47551 = state_47533;
(statearr_47551[(13)] = inst_47526);

return statearr_47551;
})();
var statearr_47552_48454 = state_47533__$1;
(statearr_47552_48454[(2)] = inst_47527);

(statearr_47552_48454[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47534 === (10))){
var inst_47517 = (state_47533[(2)]);
var state_47533__$1 = state_47533;
var statearr_47553_48455 = state_47533__$1;
(statearr_47553_48455[(2)] = inst_47517);

(statearr_47553_48455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47534 === (8))){
var inst_47497 = (state_47533[(8)]);
var inst_47506 = (state_47533[(11)]);
var tmp47550 = inst_47497;
var inst_47497__$1 = tmp47550;
var inst_47498 = inst_47506;
var state_47533__$1 = (function (){var statearr_47554 = state_47533;
(statearr_47554[(7)] = inst_47498);

(statearr_47554[(8)] = inst_47497__$1);

return statearr_47554;
})();
var statearr_47555_48456 = state_47533__$1;
(statearr_47555_48456[(2)] = null);

(statearr_47555_48456[(1)] = (2));


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
var cljs$core$async$state_machine__46034__auto__ = null;
var cljs$core$async$state_machine__46034__auto____0 = (function (){
var statearr_47556 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47556[(0)] = cljs$core$async$state_machine__46034__auto__);

(statearr_47556[(1)] = (1));

return statearr_47556;
});
var cljs$core$async$state_machine__46034__auto____1 = (function (state_47533){
while(true){
var ret_value__46035__auto__ = (function (){try{while(true){
var result__46036__auto__ = switch__46033__auto__(state_47533);
if(cljs.core.keyword_identical_QMARK_(result__46036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46036__auto__;
}
break;
}
}catch (e47557){if((e47557 instanceof Object)){
var ex__46037__auto__ = e47557;
var statearr_47558_48457 = state_47533;
(statearr_47558_48457[(5)] = ex__46037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47557;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48458 = state_47533;
state_47533 = G__48458;
continue;
} else {
return ret_value__46035__auto__;
}
break;
}
});
cljs$core$async$state_machine__46034__auto__ = function(state_47533){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46034__auto____1.call(this,state_47533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46034__auto____0;
cljs$core$async$state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46034__auto____1;
return cljs$core$async$state_machine__46034__auto__;
})()
})();
var state__46138__auto__ = (function (){var statearr_47559 = (f__46137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46137__auto__.cljs$core$IFn$_invoke$arity$0() : f__46137__auto__.call(null));
(statearr_47559[(6)] = c__46136__auto___48434);

return statearr_47559;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46138__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__47561 = arguments.length;
switch (G__47561) {
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
var c__46136__auto___48462 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__46137__auto__ = (function (){var switch__46033__auto__ = (function (state_47603){
var state_val_47604 = (state_47603[(1)]);
if((state_val_47604 === (7))){
var inst_47599 = (state_47603[(2)]);
var state_47603__$1 = state_47603;
var statearr_47605_48463 = state_47603__$1;
(statearr_47605_48463[(2)] = inst_47599);

(statearr_47605_48463[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47604 === (1))){
var inst_47562 = [];
var inst_47563 = inst_47562;
var inst_47564 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_47603__$1 = (function (){var statearr_47606 = state_47603;
(statearr_47606[(7)] = inst_47564);

(statearr_47606[(8)] = inst_47563);

return statearr_47606;
})();
var statearr_47607_48464 = state_47603__$1;
(statearr_47607_48464[(2)] = null);

(statearr_47607_48464[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47604 === (4))){
var inst_47567 = (state_47603[(9)]);
var inst_47567__$1 = (state_47603[(2)]);
var inst_47568 = (inst_47567__$1 == null);
var inst_47569 = cljs.core.not(inst_47568);
var state_47603__$1 = (function (){var statearr_47608 = state_47603;
(statearr_47608[(9)] = inst_47567__$1);

return statearr_47608;
})();
if(inst_47569){
var statearr_47609_48468 = state_47603__$1;
(statearr_47609_48468[(1)] = (5));

} else {
var statearr_47610_48469 = state_47603__$1;
(statearr_47610_48469[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47604 === (15))){
var inst_47593 = (state_47603[(2)]);
var state_47603__$1 = state_47603;
var statearr_47611_48470 = state_47603__$1;
(statearr_47611_48470[(2)] = inst_47593);

(statearr_47611_48470[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47604 === (13))){
var state_47603__$1 = state_47603;
var statearr_47612_48476 = state_47603__$1;
(statearr_47612_48476[(2)] = null);

(statearr_47612_48476[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47604 === (6))){
var inst_47563 = (state_47603[(8)]);
var inst_47588 = inst_47563.length;
var inst_47589 = (inst_47588 > (0));
var state_47603__$1 = state_47603;
if(cljs.core.truth_(inst_47589)){
var statearr_47613_48478 = state_47603__$1;
(statearr_47613_48478[(1)] = (12));

} else {
var statearr_47614_48479 = state_47603__$1;
(statearr_47614_48479[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47604 === (3))){
var inst_47601 = (state_47603[(2)]);
var state_47603__$1 = state_47603;
return cljs.core.async.impl.ioc_helpers.return_chan(state_47603__$1,inst_47601);
} else {
if((state_val_47604 === (12))){
var inst_47563 = (state_47603[(8)]);
var inst_47591 = cljs.core.vec(inst_47563);
var state_47603__$1 = state_47603;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47603__$1,(15),out,inst_47591);
} else {
if((state_val_47604 === (2))){
var state_47603__$1 = state_47603;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_47603__$1,(4),ch);
} else {
if((state_val_47604 === (11))){
var inst_47571 = (state_47603[(10)]);
var inst_47567 = (state_47603[(9)]);
var inst_47581 = (state_47603[(2)]);
var inst_47582 = [];
var inst_47583 = inst_47582.push(inst_47567);
var inst_47563 = inst_47582;
var inst_47564 = inst_47571;
var state_47603__$1 = (function (){var statearr_47615 = state_47603;
(statearr_47615[(7)] = inst_47564);

(statearr_47615[(11)] = inst_47581);

(statearr_47615[(12)] = inst_47583);

(statearr_47615[(8)] = inst_47563);

return statearr_47615;
})();
var statearr_47616_48483 = state_47603__$1;
(statearr_47616_48483[(2)] = null);

(statearr_47616_48483[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47604 === (9))){
var inst_47563 = (state_47603[(8)]);
var inst_47579 = cljs.core.vec(inst_47563);
var state_47603__$1 = state_47603;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_47603__$1,(11),out,inst_47579);
} else {
if((state_val_47604 === (5))){
var inst_47564 = (state_47603[(7)]);
var inst_47571 = (state_47603[(10)]);
var inst_47567 = (state_47603[(9)]);
var inst_47571__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_47567) : f.call(null,inst_47567));
var inst_47572 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_47571__$1,inst_47564);
var inst_47573 = cljs.core.keyword_identical_QMARK_(inst_47564,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_47574 = ((inst_47572) || (inst_47573));
var state_47603__$1 = (function (){var statearr_47617 = state_47603;
(statearr_47617[(10)] = inst_47571__$1);

return statearr_47617;
})();
if(cljs.core.truth_(inst_47574)){
var statearr_47618_48486 = state_47603__$1;
(statearr_47618_48486[(1)] = (8));

} else {
var statearr_47619_48487 = state_47603__$1;
(statearr_47619_48487[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47604 === (14))){
var inst_47596 = (state_47603[(2)]);
var inst_47597 = cljs.core.async.close_BANG_(out);
var state_47603__$1 = (function (){var statearr_47621 = state_47603;
(statearr_47621[(13)] = inst_47596);

return statearr_47621;
})();
var statearr_47622_48488 = state_47603__$1;
(statearr_47622_48488[(2)] = inst_47597);

(statearr_47622_48488[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47604 === (10))){
var inst_47586 = (state_47603[(2)]);
var state_47603__$1 = state_47603;
var statearr_47623_48489 = state_47603__$1;
(statearr_47623_48489[(2)] = inst_47586);

(statearr_47623_48489[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47604 === (8))){
var inst_47571 = (state_47603[(10)]);
var inst_47567 = (state_47603[(9)]);
var inst_47563 = (state_47603[(8)]);
var inst_47576 = inst_47563.push(inst_47567);
var tmp47620 = inst_47563;
var inst_47563__$1 = tmp47620;
var inst_47564 = inst_47571;
var state_47603__$1 = (function (){var statearr_47624 = state_47603;
(statearr_47624[(7)] = inst_47564);

(statearr_47624[(8)] = inst_47563__$1);

(statearr_47624[(14)] = inst_47576);

return statearr_47624;
})();
var statearr_47625_48490 = state_47603__$1;
(statearr_47625_48490[(2)] = null);

(statearr_47625_48490[(1)] = (2));


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
var cljs$core$async$state_machine__46034__auto__ = null;
var cljs$core$async$state_machine__46034__auto____0 = (function (){
var statearr_47626 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47626[(0)] = cljs$core$async$state_machine__46034__auto__);

(statearr_47626[(1)] = (1));

return statearr_47626;
});
var cljs$core$async$state_machine__46034__auto____1 = (function (state_47603){
while(true){
var ret_value__46035__auto__ = (function (){try{while(true){
var result__46036__auto__ = switch__46033__auto__(state_47603);
if(cljs.core.keyword_identical_QMARK_(result__46036__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__46036__auto__;
}
break;
}
}catch (e47627){if((e47627 instanceof Object)){
var ex__46037__auto__ = e47627;
var statearr_47628_48491 = state_47603;
(statearr_47628_48491[(5)] = ex__46037__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_47603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47627;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__46035__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48492 = state_47603;
state_47603 = G__48492;
continue;
} else {
return ret_value__46035__auto__;
}
break;
}
});
cljs$core$async$state_machine__46034__auto__ = function(state_47603){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__46034__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__46034__auto____1.call(this,state_47603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__46034__auto____0;
cljs$core$async$state_machine__46034__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__46034__auto____1;
return cljs$core$async$state_machine__46034__auto__;
})()
})();
var state__46138__auto__ = (function (){var statearr_47629 = (f__46137__auto__.cljs$core$IFn$_invoke$arity$0 ? f__46137__auto__.cljs$core$IFn$_invoke$arity$0() : f__46137__auto__.call(null));
(statearr_47629[(6)] = c__46136__auto___48462);

return statearr_47629;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__46138__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
