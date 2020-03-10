goog.provide('zanychords.views');
goog.require('cljs.core');
goog.require('re_frame.core');
goog.require('reagent.core');
goog.require('zanychords.subs');
goog.require('zanychords.events');
goog.require('clojure.string');
var module$node_modules$$material_ui$core$AppBar$index=shadow.js.require("module$node_modules$$material_ui$core$AppBar$index", {});
var module$node_modules$$material_ui$core$Tabs$index=shadow.js.require("module$node_modules$$material_ui$core$Tabs$index", {});
var module$node_modules$$material_ui$core$Tab$index=shadow.js.require("module$node_modules$$material_ui$core$Tab$index", {});
var module$node_modules$$material_ui$core$Fab$index=shadow.js.require("module$node_modules$$material_ui$core$Fab$index", {});
var module$node_modules$$material_ui$core$Dialog$index=shadow.js.require("module$node_modules$$material_ui$core$Dialog$index", {});
var module$node_modules$$material_ui$core$DialogTitle$index=shadow.js.require("module$node_modules$$material_ui$core$DialogTitle$index", {});
var module$node_modules$$material_ui$core$List$index=shadow.js.require("module$node_modules$$material_ui$core$List$index", {});
var module$node_modules$$material_ui$core$ListItem$index=shadow.js.require("module$node_modules$$material_ui$core$ListItem$index", {});
var module$node_modules$$material_ui$core$ListItemText$index=shadow.js.require("module$node_modules$$material_ui$core$ListItemText$index", {});
var module$node_modules$$material_ui$core$Divider$index=shadow.js.require("module$node_modules$$material_ui$core$Divider$index", {});
var module$node_modules$$material_ui$core$Paper$index=shadow.js.require("module$node_modules$$material_ui$core$Paper$index", {});
var module$node_modules$$material_ui$core$Card$index=shadow.js.require("module$node_modules$$material_ui$core$Card$index", {});
var module$node_modules$$material_ui$core$CardContent$index=shadow.js.require("module$node_modules$$material_ui$core$CardContent$index", {});
var module$node_modules$$material_ui$core$TextField$index=shadow.js.require("module$node_modules$$material_ui$core$TextField$index", {});
var module$node_modules$$material_ui$core$Button$index=shadow.js.require("module$node_modules$$material_ui$core$Button$index", {});
var module$node_modules$$material_ui$core$MenuItem$index=shadow.js.require("module$node_modules$$material_ui$core$MenuItem$index", {});
var module$node_modules$$material_ui$lab$ToggleButton$index=shadow.js.require("module$node_modules$$material_ui$lab$ToggleButton$index", {});
var module$node_modules$$material_ui$core$Grid$index=shadow.js.require("module$node_modules$$material_ui$core$Grid$index", {});
var module$node_modules$$material_ui$icons$Add=shadow.js.require("module$node_modules$$material_ui$icons$Add", {});
var module$node_modules$$material_ui$icons$Delete=shadow.js.require("module$node_modules$$material_ui$icons$Delete", {});
var module$node_modules$$material_ui$icons$Shuffle=shadow.js.require("module$node_modules$$material_ui$icons$Shuffle", {});
var module$node_modules$react_select$dist$react_select_browser_cjs=shadow.js.require("module$node_modules$react_select$dist$react_select_browser_cjs", {});
goog.require('kee_frame.core');
zanychords.views.arc = reagent.core.adapt_react_class;
zanychords.views.add_progression_dlg = (function zanychords$views$add_progression_dlg(is_open,on_close,on_progression_added){
var progression = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"chords","chords",234981817),""], null));
return (function (is_open__$1,on_close__$1,on_progression_added__$1){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Dialog$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open","open",-1763596448),is_open__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394),on_close__$1,new cljs.core.Keyword(null,"full-width","full-width",1911330562),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$DialogTitle$index.default,"Add Progression"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Grid$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"spacing","spacing",204422175),(2),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"margin","margin",-995903681),"0px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Grid$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"xs","xs",649443341),(12)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$TextField$index.default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Progression Title",new cljs.core.Keyword(null,"class","class",-2030961996),"gridchild",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__43653_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(progression,cljs.core.assoc,new cljs.core.Keyword(null,"title","title",636505583),p1__43653_SHARP_.target.value);
}),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(progression))], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Grid$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"xs","xs",649443341),(12)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$TextField$index.default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Chords (Comma Separated)",new cljs.core.Keyword(null,"class","class",-2030961996),"gridchild",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__43654_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(progression,cljs.core.assoc,new cljs.core.Keyword(null,"chords","chords",234981817),p1__43654_SHARP_.target.value);
}),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"chords","chords",234981817).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(progression))], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Grid$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"xs","xs",649443341),(4),new cljs.core.Keyword(null,"sm","sm",-1402575065),(8)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Grid$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"xs","xs",649443341),(4),new cljs.core.Keyword(null,"sm","sm",-1402575065),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Button$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"primary",new cljs.core.Keyword(null,"class","class",-2030961996),"gridchild",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(on_close__$1.cljs$core$IFn$_invoke$arity$0 ? on_close__$1.cljs$core$IFn$_invoke$arity$0() : on_close__$1.call(null));

var G__43655_43705 = cljs.core.deref(progression);
(on_progression_added__$1.cljs$core$IFn$_invoke$arity$1 ? on_progression_added__$1.cljs$core$IFn$_invoke$arity$1(G__43655_43705) : on_progression_added__$1.call(null,G__43655_43705));

return cljs.core.reset_BANG_(progression,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"chords","chords",234981817),""], null));
})], null),"OK"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Grid$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"xs","xs",649443341),(4),new cljs.core.Keyword(null,"sm","sm",-1402575065),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Button$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"default",new cljs.core.Keyword(null,"class","class",-2030961996),"gridchild",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(on_close__$1.cljs$core$IFn$_invoke$arity$0 ? on_close__$1.cljs$core$IFn$_invoke$arity$0() : on_close__$1.call(null));

return cljs.core.reset_BANG_(progression,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"",new cljs.core.Keyword(null,"chords","chords",234981817),""], null));
})], null),"Cancel"], null)], null)], null)], null);
});
});
zanychords.views.add_session_dlg = (function zanychords$views$add_session_dlg(is_open,on_close,on_progression_added){
var session_title = reagent.core.atom.cljs$core$IFn$_invoke$arity$1("");
var selected_progression_titles = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var progressions = (function (){var G__43660 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zanychords.subs","progressions","zanychords.subs/progressions",484532488)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43660) : re_frame.core.subscribe.call(null,G__43660));
})();
return (function (is_open__$1,on_close__$1,on_session_added){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Dialog$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open","open",-1763596448),is_open__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394),on_close__$1,new cljs.core.Keyword(null,"full-width","full-width",1911330562),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$DialogTitle$index.default,"Add Session"], null),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Grid$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"spacing","spacing",204422175),(2),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),"100%",new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),(1),new cljs.core.Keyword(null,"margin","margin",-995903681),"0px"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Grid$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"xs","xs",649443341),(12)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$TextField$index.default,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),"Session Title",new cljs.core.Keyword(null,"class","class",-2030961996),"gridchild",new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__43656_SHARP_){
return cljs.core.reset_BANG_(session_title,p1__43656_SHARP_.target.value);
}),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(session_title)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Grid$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"xs","xs",649443341),(12)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_select$dist$react_select_browser_cjs.default,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"menu-portal-target","menu-portal-target",848861802),new cljs.core.Keyword(null,"menu-placement","menu-placement",2114538220),new cljs.core.Keyword(null,"is-multi","is-multi",-472152492),new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"menu-position","menu-position",-1067744485)],["Select Progressions",cljs.core.deref(selected_progression_titles),document.body,"auto",true,"gridchild",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-portal","menu-portal",-1507227766),(function (p1__43658_SHARP_){
return cljs.core.clj__GT_js(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(p1__43658_SHARP_),new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),(9999)));
})], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p),new cljs.core.Keyword(null,"value","value",305978217),p], null);
}),cljs.core.deref(progressions)),(function (p1__43657_SHARP_){
return cljs.core.reset_BANG_(selected_progression_titles,p1__43657_SHARP_);
}),"fixed"])], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Grid$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"xs","xs",649443341),(4),new cljs.core.Keyword(null,"sm","sm",-1402575065),(8)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Grid$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"xs","xs",649443341),(4),new cljs.core.Keyword(null,"sm","sm",-1402575065),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Button$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"primary",new cljs.core.Keyword(null,"class","class",-2030961996),"gridchild",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(on_close__$1.cljs$core$IFn$_invoke$arity$0 ? on_close__$1.cljs$core$IFn$_invoke$arity$0() : on_close__$1.call(null));

var G__43661_43708 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),cljs.core.deref(session_title),new cljs.core.Keyword(null,"progressions","progressions",-1495103424),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__43659_SHARP_){
return cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__43659_SHARP_.value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0));
}),cljs.core.deref(selected_progression_titles))], null);
(on_progression_added.cljs$core$IFn$_invoke$arity$1 ? on_progression_added.cljs$core$IFn$_invoke$arity$1(G__43661_43708) : on_progression_added.call(null,G__43661_43708));

cljs.core.reset_BANG_(selected_progression_titles,cljs.core.PersistentVector.EMPTY);

return cljs.core.reset_BANG_(session_title,"");
})], null),"OK"], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Grid$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"xs","xs",649443341),(4),new cljs.core.Keyword(null,"sm","sm",-1402575065),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Button$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),"default",new cljs.core.Keyword(null,"class","class",-2030961996),"gridchild",new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
(on_close__$1.cljs$core$IFn$_invoke$arity$0 ? on_close__$1.cljs$core$IFn$_invoke$arity$0() : on_close__$1.call(null));

cljs.core.reset_BANG_(selected_progression_titles,cljs.core.PersistentVector.EMPTY);

return cljs.core.reset_BANG_(session_title,"");
})], null),"Cancel"], null)], null)], null)], null);
});
});
zanychords.views.progressions = (function zanychords$views$progressions(){
var add_dlg_open = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var progressions = (function (){var G__43663 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zanychords.subs","progressions","zanychords.subs/progressions",484532488)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43663) : re_frame.core.subscribe.call(null,G__43663));
})();
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hideoverflow"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Grid$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"spacing","spacing",204422175),(3),new cljs.core.Keyword(null,"justify","justify",-722524056),"center"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Grid$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"xs","xs",649443341),(12),new cljs.core.Keyword(null,"sm","sm",-1402575065),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Card$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"margin10"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$CardContent$index.default,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$List$index.default,(function (){var iter__4582__auto__ = (function zanychords$views$progressions_$_iter__43664(s__43665){
return (new cljs.core.LazySeq(null,(function (){
var s__43665__$1 = s__43665;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43665__$1);
if(temp__5735__auto__){
var s__43665__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43665__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__43665__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__43667 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__43666 = (0);
while(true){
if((i__43666 < size__4581__auto__)){
var vec__43668 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__43666);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43668,(0),null);
var progression = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43668,(1),null);
cljs.core.chunk_append(b__43667,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zanychords.views.arc.cljs$core$IFn$_invoke$arity$1 ? zanychords.views.arc.cljs$core$IFn$_invoke$arity$1(module$node_modules$$material_ui$core$ListItem$index.default) : zanychords.views.arc.call(null,module$node_modules$$material_ui$core$ListItem$index.default)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zanychords.views.arc.cljs$core$IFn$_invoke$arity$1 ? zanychords.views.arc.cljs$core$IFn$_invoke$arity$1(module$node_modules$$material_ui$core$ListItemText$index.default) : zanychords.views.arc.call(null,module$node_modules$$material_ui$core$ListItemText$index.default)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(progression),new cljs.core.Keyword(null,"secondary","secondary",-669381460),clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",new cljs.core.Keyword(null,"chords","chords",234981817).cljs$core$IFn$_invoke$arity$1(progression))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zanychords.views.arc.cljs$core$IFn$_invoke$arity$1 ? zanychords.views.arc.cljs$core$IFn$_invoke$arity$1(module$node_modules$$material_ui$core$Button$index.default) : zanychords.views.arc.call(null,module$node_modules$$material_ui$core$Button$index.default)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__43666,vec__43668,i,progression,c__4580__auto__,size__4581__auto__,b__43667,s__43665__$2,temp__5735__auto__,add_dlg_open,progressions){
return (function (){
var G__43671 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zanychords.events","delete-progression","zanychords.events/delete-progression",-1672731664),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(progression)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43671) : re_frame.core.dispatch.call(null,G__43671));
});})(i__43666,vec__43668,i,progression,c__4580__auto__,size__4581__auto__,b__43667,s__43665__$2,temp__5735__auto__,add_dlg_open,progressions))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zanychords.views.arc.cljs$core$IFn$_invoke$arity$1 ? zanychords.views.arc.cljs$core$IFn$_invoke$arity$1(module$node_modules$$material_ui$icons$Delete.default) : zanychords.views.arc.call(null,module$node_modules$$material_ui$icons$Delete.default))], null)], null)], null));

var G__43709 = (i__43666 + (1));
i__43666 = G__43709;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43667),zanychords$views$progressions_$_iter__43664(cljs.core.chunk_rest(s__43665__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43667),null);
}
} else {
var vec__43672 = cljs.core.first(s__43665__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43672,(0),null);
var progression = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43672,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zanychords.views.arc.cljs$core$IFn$_invoke$arity$1 ? zanychords.views.arc.cljs$core$IFn$_invoke$arity$1(module$node_modules$$material_ui$core$ListItem$index.default) : zanychords.views.arc.call(null,module$node_modules$$material_ui$core$ListItem$index.default)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zanychords.views.arc.cljs$core$IFn$_invoke$arity$1 ? zanychords.views.arc.cljs$core$IFn$_invoke$arity$1(module$node_modules$$material_ui$core$ListItemText$index.default) : zanychords.views.arc.call(null,module$node_modules$$material_ui$core$ListItemText$index.default)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(progression),new cljs.core.Keyword(null,"secondary","secondary",-669381460),clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",new cljs.core.Keyword(null,"chords","chords",234981817).cljs$core$IFn$_invoke$arity$1(progression))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zanychords.views.arc.cljs$core$IFn$_invoke$arity$1 ? zanychords.views.arc.cljs$core$IFn$_invoke$arity$1(module$node_modules$$material_ui$core$Button$index.default) : zanychords.views.arc.call(null,module$node_modules$$material_ui$core$Button$index.default)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__43672,i,progression,s__43665__$2,temp__5735__auto__,add_dlg_open,progressions){
return (function (){
var G__43675 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zanychords.events","delete-progression","zanychords.events/delete-progression",-1672731664),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(progression)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43675) : re_frame.core.dispatch.call(null,G__43675));
});})(vec__43672,i,progression,s__43665__$2,temp__5735__auto__,add_dlg_open,progressions))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zanychords.views.arc.cljs$core$IFn$_invoke$arity$1 ? zanychords.views.arc.cljs$core$IFn$_invoke$arity$1(module$node_modules$$material_ui$icons$Delete.default) : zanychords.views.arc.call(null,module$node_modules$$material_ui$icons$Delete.default))], null)], null)], null),zanychords$views$progressions_$_iter__43664(cljs.core.rest(s__43665__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.deref(progressions)));
})()], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Fab$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(add_dlg_open,true);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"floatrightbottom"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$Add.default], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zanychords.views.add_progression_dlg,cljs.core.deref(add_dlg_open),(function (){
return cljs.core.reset_BANG_(add_dlg_open,false);
}),(function (p1__43662_SHARP_){
var G__43676 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zanychords.events","add-progression","zanychords.events/add-progression",-531465776),p1__43662_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43676) : re_frame.core.dispatch.call(null,G__43676));
})], null)], null);
});
});
zanychords.views.sesssions = (function zanychords$views$sesssions(){
var add_dlg_open = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(false);
var sessions = (function (){var G__43679 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zanychords.subs","sessions","zanychords.subs/sessions",1884245728)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43679) : re_frame.core.subscribe.call(null,G__43679));
})();
return (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hideoverflow"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Grid$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"spacing","spacing",204422175),(3),new cljs.core.Keyword(null,"justify","justify",-722524056),"center"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Grid$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"xs","xs",649443341),(12),new cljs.core.Keyword(null,"sm","sm",-1402575065),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Card$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"margin10"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$CardContent$index.default,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$List$index.default,(function (){var iter__4582__auto__ = (function zanychords$views$sesssions_$_iter__43680(s__43681){
return (new cljs.core.LazySeq(null,(function (){
var s__43681__$1 = s__43681;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43681__$1);
if(temp__5735__auto__){
var s__43681__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43681__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__43681__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__43683 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__43682 = (0);
while(true){
if((i__43682 < size__4581__auto__)){
var vec__43684 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__43682);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43684,(0),null);
var session = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43684,(1),null);
cljs.core.chunk_append(b__43683,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zanychords.views.arc.cljs$core$IFn$_invoke$arity$1 ? zanychords.views.arc.cljs$core$IFn$_invoke$arity$1(module$node_modules$$material_ui$core$ListItem$index.default) : zanychords.views.arc.call(null,module$node_modules$$material_ui$core$ListItem$index.default)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zanychords.views.arc.cljs$core$IFn$_invoke$arity$1 ? zanychords.views.arc.cljs$core$IFn$_invoke$arity$1(module$node_modules$$material_ui$core$ListItemText$index.default) : zanychords.views.arc.call(null,module$node_modules$$material_ui$core$ListItemText$index.default)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(session),new cljs.core.Keyword(null,"secondary","secondary",-669381460),(function (){var x = session;
var x__$1 = new cljs.core.Keyword(null,"progressions","progressions",-1495103424).cljs$core$IFn$_invoke$arity$1(x);
var x__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__43682,x,x__$1,vec__43684,i,session,c__4580__auto__,size__4581__auto__,b__43683,s__43681__$2,temp__5735__auto__,add_dlg_open,sessions){
return (function (p1__43677_SHARP_){
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__43677_SHARP_);
});})(i__43682,x,x__$1,vec__43684,i,session,c__4580__auto__,size__4581__auto__,b__43683,s__43681__$2,temp__5735__auto__,add_dlg_open,sessions))
,x__$1);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",x__$2);
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zanychords.views.arc.cljs$core$IFn$_invoke$arity$1 ? zanychords.views.arc.cljs$core$IFn$_invoke$arity$1(module$node_modules$$material_ui$core$Button$index.default) : zanychords.views.arc.call(null,module$node_modules$$material_ui$core$Button$index.default)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (i__43682,vec__43684,i,session,c__4580__auto__,size__4581__auto__,b__43683,s__43681__$2,temp__5735__auto__,add_dlg_open,sessions){
return (function (){
var G__43687 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zanychords.events","delete-session","zanychords.events/delete-session",30737953),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(session)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43687) : re_frame.core.dispatch.call(null,G__43687));
});})(i__43682,vec__43684,i,session,c__4580__auto__,size__4581__auto__,b__43683,s__43681__$2,temp__5735__auto__,add_dlg_open,sessions))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zanychords.views.arc.cljs$core$IFn$_invoke$arity$1 ? zanychords.views.arc.cljs$core$IFn$_invoke$arity$1(module$node_modules$$material_ui$icons$Delete.default) : zanychords.views.arc.call(null,module$node_modules$$material_ui$icons$Delete.default))], null)], null)], null));

var G__43710 = (i__43682 + (1));
i__43682 = G__43710;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43683),zanychords$views$sesssions_$_iter__43680(cljs.core.chunk_rest(s__43681__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43683),null);
}
} else {
var vec__43688 = cljs.core.first(s__43681__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43688,(0),null);
var session = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43688,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zanychords.views.arc.cljs$core$IFn$_invoke$arity$1 ? zanychords.views.arc.cljs$core$IFn$_invoke$arity$1(module$node_modules$$material_ui$core$ListItem$index.default) : zanychords.views.arc.call(null,module$node_modules$$material_ui$core$ListItem$index.default)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zanychords.views.arc.cljs$core$IFn$_invoke$arity$1 ? zanychords.views.arc.cljs$core$IFn$_invoke$arity$1(module$node_modules$$material_ui$core$ListItemText$index.default) : zanychords.views.arc.call(null,module$node_modules$$material_ui$core$ListItemText$index.default)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(session),new cljs.core.Keyword(null,"secondary","secondary",-669381460),(function (){var x = session;
var x__$1 = new cljs.core.Keyword(null,"progressions","progressions",-1495103424).cljs$core$IFn$_invoke$arity$1(x);
var x__$2 = cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (x,x__$1,vec__43688,i,session,s__43681__$2,temp__5735__auto__,add_dlg_open,sessions){
return (function (p1__43677_SHARP_){
return new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(p1__43677_SHARP_);
});})(x,x__$1,vec__43688,i,session,s__43681__$2,temp__5735__auto__,add_dlg_open,sessions))
,x__$1);
return clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",x__$2);
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zanychords.views.arc.cljs$core$IFn$_invoke$arity$1 ? zanychords.views.arc.cljs$core$IFn$_invoke$arity$1(module$node_modules$$material_ui$core$Button$index.default) : zanychords.views.arc.call(null,module$node_modules$$material_ui$core$Button$index.default)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),((function (vec__43688,i,session,s__43681__$2,temp__5735__auto__,add_dlg_open,sessions){
return (function (){
var G__43691 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zanychords.events","delete-session","zanychords.events/delete-session",30737953),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(session)], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43691) : re_frame.core.dispatch.call(null,G__43691));
});})(vec__43688,i,session,s__43681__$2,temp__5735__auto__,add_dlg_open,sessions))
], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zanychords.views.arc.cljs$core$IFn$_invoke$arity$1 ? zanychords.views.arc.cljs$core$IFn$_invoke$arity$1(module$node_modules$$material_ui$icons$Delete.default) : zanychords.views.arc.call(null,module$node_modules$$material_ui$icons$Delete.default))], null)], null)], null),zanychords$views$sesssions_$_iter__43680(cljs.core.rest(s__43681__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.deref(sessions)));
})()], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Fab$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.reset_BANG_(add_dlg_open,true);
}),new cljs.core.Keyword(null,"class","class",-2030961996),"floatrightbottom"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$Add.default], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [zanychords.views.add_session_dlg,cljs.core.deref(add_dlg_open),(function (){
return cljs.core.reset_BANG_(add_dlg_open,false);
}),(function (p1__43678_SHARP_){
var G__43692 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zanychords.events","add-session","zanychords.events/add-session",-79915587),p1__43678_SHARP_], null);
return (re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.dispatch.cljs$core$IFn$_invoke$arity$1(G__43692) : re_frame.core.dispatch.call(null,G__43692));
})], null)], null);
});
});
zanychords.views.practice = (function zanychords$views$practice(){
var sessions = (function (){var G__43694 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("zanychords.subs","sessions","zanychords.subs/sessions",1884245728)], null);
return (re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1 ? re_frame.core.subscribe.cljs$core$IFn$_invoke$arity$1(G__43694) : re_frame.core.subscribe.call(null,G__43694));
})();
var selected_session = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.deref(sessions)));
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"hideoverflow"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Grid$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"spacing","spacing",204422175),(3),new cljs.core.Keyword(null,"justify","justify",-722524056),"center"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Grid$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"xs","xs",649443341),(12),new cljs.core.Keyword(null,"sm","sm",-1402575065),(6)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Card$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"margin10"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$CardContent$index.default,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Grid$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"container","container",-1736937707),true,new cljs.core.Keyword(null,"class","class",-2030961996),"gridchild",new cljs.core.Keyword(null,"spacing","spacing",204422175),(3)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Grid$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"class","class",-2030961996),"gridchild",new cljs.core.Keyword(null,"xs","xs",649443341),(10)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$react_select$dist$react_select_browser_cjs.default,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"options","options",99638489),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (s){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(s),new cljs.core.Keyword(null,"value","value",305978217),s], null);
}),cljs.core.deref(sessions)),new cljs.core.Keyword(null,"menu-portal-target","menu-portal-target",848861802),document.body,new cljs.core.Keyword(null,"menu-position","menu-position",-1067744485),"fixed",new cljs.core.Keyword(null,"menu-placement","menu-placement",2114538220),"auto",new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(selected_session)),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref(selected_session)], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__43693_SHARP_){
return cljs.core.reset_BANG_(selected_session,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(p1__43693_SHARP_.value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),true], 0)));
})], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Grid$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"class","class",-2030961996),"gridchild",new cljs.core.Keyword(null,"xs","xs",649443341),(2)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$lab$ToggleButton$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"class","class",-2030961996),"gridchild"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$icons$Shuffle.default], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Grid$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"item","item",249373802),true,new cljs.core.Keyword(null,"xs","xs",649443341),(12),new cljs.core.Keyword(null,"class","class",-2030961996),"gridchild"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$List$index.default,(function (){var iter__4582__auto__ = (function zanychords$views$practice_$_iter__43695(s__43696){
return (new cljs.core.LazySeq(null,(function (){
var s__43696__$1 = s__43696;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__43696__$1);
if(temp__5735__auto__){
var s__43696__$2 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(s__43696__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__43696__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__43698 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__43697 = (0);
while(true){
if((i__43697 < size__4581__auto__)){
var vec__43699 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__43697);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43699,(0),null);
var progression = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43699,(1),null);
cljs.core.chunk_append(b__43698,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zanychords.views.arc.cljs$core$IFn$_invoke$arity$1 ? zanychords.views.arc.cljs$core$IFn$_invoke$arity$1(module$node_modules$$material_ui$core$ListItem$index.default) : zanychords.views.arc.call(null,module$node_modules$$material_ui$core$ListItem$index.default)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zanychords.views.arc.cljs$core$IFn$_invoke$arity$1 ? zanychords.views.arc.cljs$core$IFn$_invoke$arity$1(module$node_modules$$material_ui$core$ListItemText$index.default) : zanychords.views.arc.call(null,module$node_modules$$material_ui$core$ListItemText$index.default)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(progression),new cljs.core.Keyword(null,"secondary","secondary",-669381460),clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",new cljs.core.Keyword(null,"chords","chords",234981817).cljs$core$IFn$_invoke$arity$1(progression))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zanychords.views.arc.cljs$core$IFn$_invoke$arity$1 ? zanychords.views.arc.cljs$core$IFn$_invoke$arity$1(module$node_modules$$material_ui$lab$ToggleButton$index.default) : zanychords.views.arc.call(null,module$node_modules$$material_ui$lab$ToggleButton$index.default)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zanychords.views.arc.cljs$core$IFn$_invoke$arity$1 ? zanychords.views.arc.cljs$core$IFn$_invoke$arity$1(module$node_modules$$material_ui$icons$Shuffle.default) : zanychords.views.arc.call(null,module$node_modules$$material_ui$icons$Shuffle.default))], null)], null)], null));

var G__43711 = (i__43697 + (1));
i__43697 = G__43711;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__43698),zanychords$views$practice_$_iter__43695(cljs.core.chunk_rest(s__43696__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__43698),null);
}
} else {
var vec__43702 = cljs.core.first(s__43696__$2);
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43702,(0),null);
var progression = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43702,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zanychords.views.arc.cljs$core$IFn$_invoke$arity$1 ? zanychords.views.arc.cljs$core$IFn$_invoke$arity$1(module$node_modules$$material_ui$core$ListItem$index.default) : zanychords.views.arc.call(null,module$node_modules$$material_ui$core$ListItem$index.default)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),i], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zanychords.views.arc.cljs$core$IFn$_invoke$arity$1 ? zanychords.views.arc.cljs$core$IFn$_invoke$arity$1(module$node_modules$$material_ui$core$ListItemText$index.default) : zanychords.views.arc.call(null,module$node_modules$$material_ui$core$ListItemText$index.default)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"title","title",636505583).cljs$core$IFn$_invoke$arity$1(progression),new cljs.core.Keyword(null,"secondary","secondary",-669381460),clojure.string.join.cljs$core$IFn$_invoke$arity$2(",",new cljs.core.Keyword(null,"chords","chords",234981817).cljs$core$IFn$_invoke$arity$1(progression))], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zanychords.views.arc.cljs$core$IFn$_invoke$arity$1 ? zanychords.views.arc.cljs$core$IFn$_invoke$arity$1(module$node_modules$$material_ui$lab$ToggleButton$index.default) : zanychords.views.arc.call(null,module$node_modules$$material_ui$lab$ToggleButton$index.default)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(zanychords.views.arc.cljs$core$IFn$_invoke$arity$1 ? zanychords.views.arc.cljs$core$IFn$_invoke$arity$1(module$node_modules$$material_ui$icons$Shuffle.default) : zanychords.views.arc.call(null,module$node_modules$$material_ui$icons$Shuffle.default))], null)], null)], null),zanychords$views$practice_$_iter__43695(cljs.core.rest(s__43696__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,new cljs.core.Keyword(null,"progressions","progressions",-1495103424).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(selected_session))));
})()], null)], null)], null)], null)], null)], null)], null)], null);
});
});
zanychords.views.main_panel = (function zanychords$views$main_panel(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$AppBar$index.default,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"static"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Tabs$index.default,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),kee_frame.core.switch_route.cljs$core$IFn$_invoke$arity$variadic((function (route){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([null,(0),new cljs.core.Keyword(null,"main","main",-2117802661),(0),new cljs.core.Keyword(null,"progressions","progressions",-1495103424),(0),new cljs.core.Keyword(null,"sessions","sessions",-699316392),(1),new cljs.core.Keyword(null,"practice","practice",-1441219048),(2)], 0)),new cljs.core.Keyword(null,"centered","centered",-515171141),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Tab$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Progressions",new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"href","href",-793805698),kee_frame.core.path_for(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"progressions","progressions",-1495103424)], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Tab$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Sessions",new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"href","href",-793805698),kee_frame.core.path_for(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sessions","sessions",-699316392)], null))], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,">",">",-555517146),module$node_modules$$material_ui$core$Tab$index.default,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),"Practice",new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"href","href",-793805698),kee_frame.core.path_for(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"practice","practice",-1441219048)], null))], null)], null)], null)], null),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [kee_frame.core.switch_route,(function (route){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(route));
}),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"INVALID ROUTE"], null),new cljs.core.Keyword(null,"main","main",-2117802661),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),"main"], null),new cljs.core.Keyword(null,"progressions","progressions",-1495103424),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zanychords.views.progressions], null),new cljs.core.Keyword(null,"sessions","sessions",-699316392),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zanychords.views.sesssions], null),new cljs.core.Keyword(null,"practice","practice",-1441219048),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [zanychords.views.practice], null)], null)], null);
});

//# sourceMappingURL=zanychords.views.js.map
