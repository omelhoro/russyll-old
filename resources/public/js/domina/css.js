// Compiled by ClojureScript 1.7.48 {}
goog.provide('domina.css');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.dom');
goog.require('goog.dom.query');
domina.css.root_element = (function domina$css$root_element(){
return (goog.dom.getElementsByTagNameAndClass("html")[(0)]);
});
/**
 * Returns content based on a css selector expression. Takes an optional content as a base; if none is given, uses the HTML element as a base.
 */
domina.css.sel = (function domina$css$sel(){
var args6400 = [];
var len__5565__auto___6406 = arguments.length;
var i__5566__auto___6407 = (0);
while(true){
if((i__5566__auto___6407 < len__5565__auto___6406)){
args6400.push((arguments[i__5566__auto___6407]));

var G__6408 = (i__5566__auto___6407 + (1));
i__5566__auto___6407 = G__6408;
continue;
} else {
}
break;
}

var G__6402 = args6400.length;
switch (G__6402) {
case 1:
return domina.css.sel.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.css.sel.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args6400.length)].join('')));

}
});

domina.css.sel.cljs$core$IFn$_invoke$arity$1 = (function (expr){
return domina.css.sel.call(null,domina.css.root_element.call(null),expr);
});

domina.css.sel.cljs$core$IFn$_invoke$arity$2 = (function (base,expr){
if(typeof domina.css.t6403 !== 'undefined'){
} else {

/**
* @constructor
*/
domina.css.t6403 = (function (base,expr,meta6404){
this.base = base;
this.expr = expr;
this.meta6404 = meta6404;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.css.t6403.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6405,meta6404__$1){
var self__ = this;
var _6405__$1 = this;
return (new domina.css.t6403(self__.base,self__.expr,meta6404__$1));
});

domina.css.t6403.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6405){
var self__ = this;
var _6405__$1 = this;
return self__.meta6404;
});

domina.css.t6403.prototype.domina$DomContent$ = true;

domina.css.t6403.prototype.domina$DomContent$nodes$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__6398_SHARP_){
return domina.normalize_seq.call(null,goog.dom.query(self__.expr,p1__6398_SHARP_));
});})(___$1))
,domina.nodes.call(null,self__.base));
});

domina.css.t6403.prototype.domina$DomContent$single_node$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.first.call(null,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.mapcat.call(null,((function (___$1){
return (function (p1__6399_SHARP_){
return domina.normalize_seq.call(null,goog.dom.query(self__.expr,p1__6399_SHARP_));
});})(___$1))
,domina.nodes.call(null,self__.base))));
});

domina.css.t6403.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"base","base",1825810849,null),new cljs.core.Symbol(null,"expr","expr",-1908713478,null),new cljs.core.Symbol(null,"meta6404","meta6404",-262537158,null)], null);
});

domina.css.t6403.cljs$lang$type = true;

domina.css.t6403.cljs$lang$ctorStr = "domina.css/t6403";

domina.css.t6403.cljs$lang$ctorPrWriter = (function (this__5105__auto__,writer__5106__auto__,opt__5107__auto__){
return cljs.core._write.call(null,writer__5106__auto__,"domina.css/t6403");
});

domina.css.__GT_t6403 = (function domina$css$__GT_t6403(base__$1,expr__$1,meta6404){
return (new domina.css.t6403(base__$1,expr__$1,meta6404));
});

}

return (new domina.css.t6403(base,expr,cljs.core.PersistentArrayMap.EMPTY));
});

domina.css.sel.cljs$lang$maxFixedArity = 2;

//# sourceMappingURL=css.js.map