goog.provide('kee_frame.state');
goog.require('cljs.core');
kee_frame.state.controllers = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
kee_frame.state.router = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
kee_frame.state.navigator = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
kee_frame.state.app_db_spec = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
kee_frame.state.debug_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
kee_frame.state.debug_config = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
kee_frame.state.breakpoints_initialized_QMARK_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
kee_frame.state.reset_state_BANG_ = (function kee_frame$state$reset_state_BANG_(){
cljs.core.reset_BANG_(kee_frame.state.controllers,cljs.core.PersistentArrayMap.EMPTY);

cljs.core.reset_BANG_(kee_frame.state.router,null);

return cljs.core.reset_BANG_(kee_frame.state.navigator,null);
});

//# sourceMappingURL=kee_frame.state.js.map
