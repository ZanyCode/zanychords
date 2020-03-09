goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.impl !== 'undefined') && (typeof cljs.core.async.impl.channels !== 'undefined') && (typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels44718 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels44718 = (function (val,meta44719){
this.val = val;
this.meta44719 = meta44719;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels44718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_44720,meta44719__$1){
var self__ = this;
var _44720__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels44718(self__.val,meta44719__$1));
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels44718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_44720){
var self__ = this;
var _44720__$1 = this;
return self__.meta44719;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels44718.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels44718.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta44719","meta44719",-1020247967,null)], null);
}));

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels44718.cljs$lang$type = true);

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels44718.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels44718");

(cljs.core.async.impl.channels.t_cljs$core$async$impl$channels44718.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels44718");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/t_cljs$core$async$impl$channels44718.
 */
cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels44718 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels44718(val__$1,meta44719){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels44718(val__$1,meta44719));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels44718(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

(cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(cljs.core.async.impl.channels.PutBox.cljs$lang$type = true);

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox");

(cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async.impl.channels/PutBox");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/PutBox.
 */
cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_(box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((((!((this$ == null)))) && ((!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (cljs.core.async.impl.channels.abort["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_44885 = self__.puts.pop();
if((putter_44885 == null)){
} else {
var put_handler_44887 = putter_44885.handler;
var val_44888 = putter_44885.val;
if(put_handler_44887.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var put_cb_44891 = put_handler_44887.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
cljs.core.async.impl.dispatch.run(((function (put_cb_44891,put_handler_44887,val_44888,putter_44885,this$__$1){
return (function (){
return (put_cb_44891.cljs$core$IFn$_invoke$arity$1 ? put_cb_44891.cljs$core$IFn$_invoke$arity$1(true) : put_cb_44891.call(null,true));
});})(put_cb_44891,put_handler_44887,val_44888,putter_44885,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly(false));

return this$__$1.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if((!((val == null)))){
} else {
throw (new Error(["Assert failed: ","Can't put nil on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if(((closed__$1) || ((!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))))){
return cljs.core.async.impl.channels.box((!(closed__$1)));
} else {
if(cljs.core.truth_((function (){var and__4174__auto__ = self__.buf;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null));
} else {
return and__4174__auto__;
}
})())){
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

var done_QMARK_ = cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val) : self__.add_BANG_.call(null,self__.buf,val)));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if((((self__.takes.length > (0))) && ((cljs.core.count(self__.buf) > (0))))){
var taker = self__.takes.pop();
if(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var ret = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val__$1 = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var G__44909 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return (ret.cljs$core$IFn$_invoke$arity$1 ? ret.cljs$core$IFn$_invoke$arity$1(val__$1) : ret.call(null,val__$1));
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__44909;
continue;
} else {
var G__44910 = takers;
takers = G__44910;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

if(cljs.core.seq(take_cbs)){
var seq__44731_44911 = cljs.core.seq(take_cbs);
var chunk__44732_44912 = null;
var count__44733_44913 = (0);
var i__44734_44914 = (0);
while(true){
if((i__44734_44914 < count__44733_44913)){
var f_44915 = chunk__44732_44912.cljs$core$IIndexed$_nth$arity$2(null,i__44734_44914);
cljs.core.async.impl.dispatch.run(f_44915);


var G__44916 = seq__44731_44911;
var G__44917 = chunk__44732_44912;
var G__44918 = count__44733_44913;
var G__44919 = (i__44734_44914 + (1));
seq__44731_44911 = G__44916;
chunk__44732_44912 = G__44917;
count__44733_44913 = G__44918;
i__44734_44914 = G__44919;
continue;
} else {
var temp__5735__auto___44922 = cljs.core.seq(seq__44731_44911);
if(temp__5735__auto___44922){
var seq__44731_44923__$1 = temp__5735__auto___44922;
if(cljs.core.chunked_seq_QMARK_(seq__44731_44923__$1)){
var c__4609__auto___44924 = cljs.core.chunk_first(seq__44731_44923__$1);
var G__44925 = cljs.core.chunk_rest(seq__44731_44923__$1);
var G__44926 = c__4609__auto___44924;
var G__44927 = cljs.core.count(c__4609__auto___44924);
var G__44928 = (0);
seq__44731_44911 = G__44925;
chunk__44732_44912 = G__44926;
count__44733_44913 = G__44927;
i__44734_44914 = G__44928;
continue;
} else {
var f_44930 = cljs.core.first(seq__44731_44923__$1);
cljs.core.async.impl.dispatch.run(f_44930);


var G__44932 = cljs.core.next(seq__44731_44923__$1);
var G__44933 = null;
var G__44934 = (0);
var G__44935 = (0);
seq__44731_44911 = G__44932;
chunk__44732_44912 = G__44933;
count__44733_44913 = G__44934;
i__44734_44914 = G__44935;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box(true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(taker.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = taker.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run((function (){
return (take_cb.cljs$core$IFn$_invoke$arity$1 ? take_cb.cljs$core$IFn$_invoke$arity$1(val) : take_cb.call(null,val));
}));

return cljs.core.async.impl.channels.box(true);
} else {
if((self__.dirty_puts > (64))){
(self__.dirty_puts = (0));

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
(self__.dirty_puts = (self__.dirty_puts + (1)));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join(''),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if((!(handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)))){
return null;
} else {
if((((!((self__.buf == null)))) && ((cljs.core.count(self__.buf) > (0))))){
var temp__5733__auto__ = handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
if(cljs.core.truth_(temp__5733__auto__)){
var take_cb = temp__5733__auto__;
var val = self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null);
var vec__44749 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = ((put_handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null))?put_handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null):false);
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_((self__.add_BANG_.cljs$core$IFn$_invoke$arity$2 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$2(self__.buf,val__$1) : self__.add_BANG_.call(null,self__.buf,val__$1))):null);
if(((cljs.core.not(done_QMARK_)) && (cljs.core.not(self__.buf.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(null))) && ((self__.puts.length > (0))))){
var G__44953 = cbs__$1;
cbs = G__44953;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44749,(0),null);
var cbs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__44749,(1),null);
if(cljs.core.truth_(done_QMARK_)){
this$__$1.cljs$core$async$impl$channels$MMC$abort$arity$1(null);
} else {
}

var seq__44764_44958 = cljs.core.seq(cbs);
var chunk__44765_44959 = null;
var count__44766_44960 = (0);
var i__44767_44961 = (0);
while(true){
if((i__44767_44961 < count__44766_44960)){
var cb_44963 = chunk__44765_44959.cljs$core$IIndexed$_nth$arity$2(null,i__44767_44961);
cljs.core.async.impl.dispatch.run(((function (seq__44764_44958,chunk__44765_44959,count__44766_44960,i__44767_44961,cb_44963,val,vec__44749,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1){
return (function (){
return (cb_44963.cljs$core$IFn$_invoke$arity$1 ? cb_44963.cljs$core$IFn$_invoke$arity$1(true) : cb_44963.call(null,true));
});})(seq__44764_44958,chunk__44765_44959,count__44766_44960,i__44767_44961,cb_44963,val,vec__44749,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1))
);


var G__44966 = seq__44764_44958;
var G__44967 = chunk__44765_44959;
var G__44968 = count__44766_44960;
var G__44969 = (i__44767_44961 + (1));
seq__44764_44958 = G__44966;
chunk__44765_44959 = G__44967;
count__44766_44960 = G__44968;
i__44767_44961 = G__44969;
continue;
} else {
var temp__5735__auto___44970 = cljs.core.seq(seq__44764_44958);
if(temp__5735__auto___44970){
var seq__44764_44971__$1 = temp__5735__auto___44970;
if(cljs.core.chunked_seq_QMARK_(seq__44764_44971__$1)){
var c__4609__auto___44972 = cljs.core.chunk_first(seq__44764_44971__$1);
var G__44973 = cljs.core.chunk_rest(seq__44764_44971__$1);
var G__44974 = c__4609__auto___44972;
var G__44975 = cljs.core.count(c__4609__auto___44972);
var G__44976 = (0);
seq__44764_44958 = G__44973;
chunk__44765_44959 = G__44974;
count__44766_44960 = G__44975;
i__44767_44961 = G__44976;
continue;
} else {
var cb_44979 = cljs.core.first(seq__44764_44971__$1);
cljs.core.async.impl.dispatch.run(((function (seq__44764_44958,chunk__44765_44959,count__44766_44960,i__44767_44961,cb_44979,seq__44764_44971__$1,temp__5735__auto___44970,val,vec__44749,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1){
return (function (){
return (cb_44979.cljs$core$IFn$_invoke$arity$1 ? cb_44979.cljs$core$IFn$_invoke$arity$1(true) : cb_44979.call(null,true));
});})(seq__44764_44958,chunk__44765_44959,count__44766_44960,i__44767_44961,cb_44979,seq__44764_44971__$1,temp__5735__auto___44970,val,vec__44749,done_QMARK_,cbs,take_cb,temp__5733__auto__,this$__$1))
);


var G__44982 = cljs.core.next(seq__44764_44971__$1);
var G__44983 = null;
var G__44984 = (0);
var G__44985 = (0);
seq__44764_44958 = G__44982;
chunk__44765_44959 = G__44983;
count__44766_44960 = G__44984;
i__44767_44961 = G__44985;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_(putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit(putter.handler);
handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);

cljs.core.async.impl.dispatch.run((function (){
return (put_cb.cljs$core$IFn$_invoke$arity$1 ? put_cb.cljs$core$IFn$_invoke$arity$1(true) : put_cb.call(null,true));
}));

return cljs.core.async.impl.channels.box(putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

if(cljs.core.truth_((function (){var and__4174__auto__ = handler.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return handler.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})())){
var has_val = (function (){var and__4174__auto__ = self__.buf;
if(cljs.core.truth_(and__4174__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__4174__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
return cljs.core.async.impl.channels.box(val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
(self__.dirty_takes = (0));

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
(self__.dirty_takes = (self__.dirty_takes + (1)));
}

if(cljs.core.truth_(handler.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1(null))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join(''),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
}));

(cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
(self__.closed = true);

if(cljs.core.truth_((function (){var and__4174__auto__ = self__.buf;
if(cljs.core.truth_(and__4174__auto__)){
return (self__.puts.length === (0));
} else {
return and__4174__auto__;
}
})())){
(self__.add_BANG_.cljs$core$IFn$_invoke$arity$1 ? self__.add_BANG_.cljs$core$IFn$_invoke$arity$1(self__.buf) : self__.add_BANG_.call(null,self__.buf));
} else {
}

while(true){
var taker_45003 = self__.takes.pop();
if((taker_45003 == null)){
} else {
if(taker_45003.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null)){
var take_cb_45005 = taker_45003.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
var val_45006 = (cljs.core.truth_((function (){var and__4174__auto__ = self__.buf;
if(cljs.core.truth_(and__4174__auto__)){
return (cljs.core.count(self__.buf) > (0));
} else {
return and__4174__auto__;
}
})())?self__.buf.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(null):null);
cljs.core.async.impl.dispatch.run(((function (take_cb_45005,val_45006,taker_45003,this$__$1){
return (function (){
return (take_cb_45005.cljs$core$IFn$_invoke$arity$1 ? take_cb_45005.cljs$core$IFn$_invoke$arity$1(val_45006) : take_cb_45005.call(null,val_45006));
});})(take_cb_45005,val_45006,taker_45003,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
self__.buf.cljs$core$async$impl$protocols$Buffer$close_buf_BANG_$arity$1(null);
} else {
}

return null;
}
}));

(cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
}));

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true);

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel");

(cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
}));

/**
 * Positional factory function for cljs.core.async.impl.channels/ManyToManyChannel.
 */
cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var fexpr__44818 = (function (){var or__4185__auto__ = exh;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})();
return (fexpr__44818.cljs$core$IFn$_invoke$arity$1 ? fexpr__44818.cljs$core$IFn$_invoke$arity$1(t) : fexpr__44818.call(null,t));
})();
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2(buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__44843 = arguments.length;
switch (G__44843) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2(buf,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(buf,xform,null);
}));

(cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer((32)),(0),cljs.core.async.impl.buffers.ring_buffer((32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?(xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(cljs.core.async.impl.protocols.add_BANG_) : xform.call(null,cljs.core.async.impl.protocols.add_BANG_)):cljs.core.async.impl.protocols.add_BANG_);
return (function() {
var G__45033 = null;
var G__45033__1 = (function (buf__$1){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$1 ? add_BANG_.cljs$core$IFn$_invoke$arity$1(buf__$1) : add_BANG_.call(null,buf__$1));
}catch (e44854){var t = e44854;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
var G__45033__2 = (function (buf__$1,val){
try{return (add_BANG_.cljs$core$IFn$_invoke$arity$2 ? add_BANG_.cljs$core$IFn$_invoke$arity$2(buf__$1,val) : add_BANG_.call(null,buf__$1,val));
}catch (e44856){var t = e44856;
return cljs.core.async.impl.channels.handle(buf__$1,exh,t);
}});
G__45033 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__45033__1.call(this,buf__$1);
case 2:
return G__45033__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__45033.cljs$core$IFn$_invoke$arity$1 = G__45033__1;
G__45033.cljs$core$IFn$_invoke$arity$2 = G__45033__2;
return G__45033;
})()
})()));
}));

(cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.impl.channels.js.map
