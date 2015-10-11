// Compiled by ClojureScript 1.7.48 {}
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('domina');
goog.require('goog.object');
goog.require('goog.events');

domina.events.Event = {};

/**
 * Prevents the default action, for example a link redirecting to a URL
 */
domina.events.prevent_default = (function domina$events$prevent_default(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$prevent_default$arity$1 == null)))){
return evt.domina$events$Event$prevent_default$arity$1(evt);
} else {
var x__5162__auto__ = (((evt == null))?null:evt);
var m__5163__auto__ = (domina.events.prevent_default[goog.typeOf(x__5162__auto__)]);
if(!((m__5163__auto__ == null))){
return m__5163__auto__.call(null,evt);
} else {
var m__5163__auto____$1 = (domina.events.prevent_default["_"]);
if(!((m__5163__auto____$1 == null))){
return m__5163__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
}
});

/**
 * Stops event propagation
 */
domina.events.stop_propagation = (function domina$events$stop_propagation(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$stop_propagation$arity$1 == null)))){
return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else {
var x__5162__auto__ = (((evt == null))?null:evt);
var m__5163__auto__ = (domina.events.stop_propagation[goog.typeOf(x__5162__auto__)]);
if(!((m__5163__auto__ == null))){
return m__5163__auto__.call(null,evt);
} else {
var m__5163__auto____$1 = (domina.events.stop_propagation["_"]);
if(!((m__5163__auto____$1 == null))){
return m__5163__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
}
});

/**
 * Returns the target of the event
 */
domina.events.target = (function domina$events$target(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$target$arity$1 == null)))){
return evt.domina$events$Event$target$arity$1(evt);
} else {
var x__5162__auto__ = (((evt == null))?null:evt);
var m__5163__auto__ = (domina.events.target[goog.typeOf(x__5162__auto__)]);
if(!((m__5163__auto__ == null))){
return m__5163__auto__.call(null,evt);
} else {
var m__5163__auto____$1 = (domina.events.target["_"]);
if(!((m__5163__auto____$1 == null))){
return m__5163__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
}
});

/**
 * Returns the object that had the listener attached
 */
domina.events.current_target = (function domina$events$current_target(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$current_target$arity$1 == null)))){
return evt.domina$events$Event$current_target$arity$1(evt);
} else {
var x__5162__auto__ = (((evt == null))?null:evt);
var m__5163__auto__ = (domina.events.current_target[goog.typeOf(x__5162__auto__)]);
if(!((m__5163__auto__ == null))){
return m__5163__auto__.call(null,evt);
} else {
var m__5163__auto____$1 = (domina.events.current_target["_"]);
if(!((m__5163__auto____$1 == null))){
return m__5163__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
}
});

/**
 * Returns the type of the the event
 */
domina.events.event_type = (function domina$events$event_type(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$event_type$arity$1 == null)))){
return evt.domina$events$Event$event_type$arity$1(evt);
} else {
var x__5162__auto__ = (((evt == null))?null:evt);
var m__5163__auto__ = (domina.events.event_type[goog.typeOf(x__5162__auto__)]);
if(!((m__5163__auto__ == null))){
return m__5163__auto__.call(null,evt);
} else {
var m__5163__auto____$1 = (domina.events.event_type["_"]);
if(!((m__5163__auto____$1 == null))){
return m__5163__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
}
});

/**
 * Returns the original GClosure event
 */
domina.events.raw_event = (function domina$events$raw_event(evt){
if((!((evt == null))) && (!((evt.domina$events$Event$raw_event$arity$1 == null)))){
return evt.domina$events$Event$raw_event$arity$1(evt);
} else {
var x__5162__auto__ = (((evt == null))?null:evt);
var m__5163__auto__ = (domina.events.raw_event[goog.typeOf(x__5162__auto__)]);
if(!((m__5163__auto__ == null))){
return m__5163__auto__.call(null,evt);
} else {
var m__5163__auto____$1 = (domina.events.raw_event["_"]);
if(!((m__5163__auto____$1 == null))){
return m__5163__auto____$1.call(null,evt);
} else {
throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
}
});

domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function domina$events$create_listener_function(f){
return (function (evt){
f.call(null,(function (){
if(typeof domina.events.t7268 !== 'undefined'){
} else {

/**
* @constructor
*/
domina.events.t7268 = (function (create_listener_function,f,evt,meta7269){
this.create_listener_function = create_listener_function;
this.f = f;
this.evt = evt;
this.meta7269 = meta7269;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
domina.events.t7268.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_7270,meta7269__$1){
var self__ = this;
var _7270__$1 = this;
return (new domina.events.t7268(self__.create_listener_function,self__.f,self__.evt,meta7269__$1));
});

domina.events.t7268.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_7270){
var self__ = this;
var _7270__$1 = this;
return self__.meta7269;
});

domina.events.t7268.prototype.domina$events$Event$ = true;

domina.events.t7268.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.preventDefault();
});

domina.events.t7268.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.stopPropagation();
});

domina.events.t7268.prototype.domina$events$Event$target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.target;
});

domina.events.t7268.prototype.domina$events$Event$current_target$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.currentTarget;
});

domina.events.t7268.prototype.domina$events$Event$event_type$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt.type;
});

domina.events.t7268.prototype.domina$events$Event$raw_event$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.evt;
});

domina.events.t7268.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){
var self__ = this;
var o__$1 = this;
var temp__4423__auto__ = (self__.evt[k]);
if(cljs.core.truth_(temp__4423__auto__)){
var val = temp__4423__auto__;
return val;
} else {
return (self__.evt[cljs.core.name.call(null,k)]);
}
});

domina.events.t7268.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){
var self__ = this;
var o__$1 = this;
var or__4526__auto__ = cljs.core._lookup.call(null,o__$1,k);
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return not_found;
}
});

domina.events.t7268.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"create-listener-function","create-listener-function",1582593782,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"evt","evt",388964660,null),new cljs.core.Symbol(null,"meta7269","meta7269",590646277,null)], null);
});

domina.events.t7268.cljs$lang$type = true;

domina.events.t7268.cljs$lang$ctorStr = "domina.events/t7268";

domina.events.t7268.cljs$lang$ctorPrWriter = (function (this__5105__auto__,writer__5106__auto__,opt__5107__auto__){
return cljs.core._write.call(null,writer__5106__auto__,"domina.events/t7268");
});

domina.events.__GT_t7268 = (function domina$events$create_listener_function_$___GT_t7268(create_listener_function__$1,f__$1,evt__$1,meta7269){
return (new domina.events.t7268(create_listener_function__$1,f__$1,evt__$1,meta7269));
});

}

return (new domina.events.t7268(domina$events$create_listener_function,f,evt,cljs.core.PersistentArrayMap.EMPTY));
})()
);

return true;
});
});
domina.events.listen_internal_BANG_ = (function domina$events$listen_internal_BANG_(content,type,listener,capture,once){
var f = domina.events.create_listener_function.call(null,listener);
var t = cljs.core.name.call(null,type);
return cljs.core.doall.call(null,(function (){var iter__5279__auto__ = ((function (f,t){
return (function domina$events$listen_internal_BANG__$_iter__7275(s__7276){
return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){
var s__7276__$1 = s__7276;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7276__$1);
if(temp__4425__auto__){
var s__7276__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7276__$2)){
var c__5277__auto__ = cljs.core.chunk_first.call(null,s__7276__$2);
var size__5278__auto__ = cljs.core.count.call(null,c__5277__auto__);
var b__7278 = cljs.core.chunk_buffer.call(null,size__5278__auto__);
if((function (){var i__7277 = (0);
while(true){
if((i__7277 < size__5278__auto__)){
var node = cljs.core._nth.call(null,c__5277__auto__,i__7277);
cljs.core.chunk_append.call(null,b__7278,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));

var G__7279 = (i__7277 + (1));
i__7277 = G__7279;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7278),domina$events$listen_internal_BANG__$_iter__7275.call(null,cljs.core.chunk_rest.call(null,s__7276__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7278),null);
}
} else {
var node = cljs.core.first.call(null,s__7276__$2);
return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),domina$events$listen_internal_BANG__$_iter__7275.call(null,cljs.core.rest.call(null,s__7276__$2)));
}
} else {
return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;
return iter__5279__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_BANG_ = (function domina$events$listen_BANG_(){
var args7280 = [];
var len__5565__auto___7283 = arguments.length;
var i__5566__auto___7284 = (0);
while(true){
if((i__5566__auto___7284 < len__5565__auto___7283)){
args7280.push((arguments[i__5566__auto___7284]));

var G__7285 = (i__5566__auto___7284 + (1));
i__5566__auto___7284 = G__7285;
continue;
} else {
}
break;
}

var G__7282 = args7280.length;
switch (G__7282) {
case 2:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7280.length)].join('')));

}
});

domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.listen_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.listen_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});

domina.events.listen_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.capture_BANG_ = (function domina$events$capture_BANG_(){
var args7287 = [];
var len__5565__auto___7290 = arguments.length;
var i__5566__auto___7291 = (0);
while(true){
if((i__5566__auto___7291 < len__5565__auto___7290)){
args7287.push((arguments[i__5566__auto___7291]));

var G__7292 = (i__5566__auto___7291 + (1));
i__5566__auto___7291 = G__7292;
continue;
} else {
}
break;
}

var G__7289 = args7287.length;
switch (G__7289) {
case 2:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7287.length)].join('')));

}
});

domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.capture_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.capture_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});

domina.events.capture_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.listen_once_BANG_ = (function domina$events$listen_once_BANG_(){
var args7294 = [];
var len__5565__auto___7297 = arguments.length;
var i__5566__auto___7298 = (0);
while(true){
if((i__5566__auto___7298 < len__5565__auto___7297)){
args7294.push((arguments[i__5566__auto___7298]));

var G__7299 = (i__5566__auto___7298 + (1));
i__5566__auto___7298 = G__7299;
continue;
} else {
}
break;
}

var G__7296 = args7294.length;
switch (G__7296) {
case 2:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7294.length)].join('')));

}
});

domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});

domina.events.listen_once_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
 */
domina.events.capture_once_BANG_ = (function domina$events$capture_once_BANG_(){
var args7301 = [];
var len__5565__auto___7304 = arguments.length;
var i__5566__auto___7305 = (0);
while(true){
if((i__5566__auto___7305 < len__5565__auto___7304)){
args7301.push((arguments[i__5566__auto___7305]));

var G__7306 = (i__5566__auto___7305 + (1));
i__5566__auto___7305 = G__7306;
continue;
} else {
}
break;
}

var G__7303 = args7301.length;
switch (G__7303) {
case 2:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7301.length)].join('')));

}
});

domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,listener){
return domina.events.capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});

domina.events.capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (content,type,listener){
return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});

domina.events.capture_once_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
 */
domina.events.unlisten_BANG_ = (function domina$events$unlisten_BANG_(){
var args7308 = [];
var len__5565__auto___7319 = arguments.length;
var i__5566__auto___7320 = (0);
while(true){
if((i__5566__auto___7320 < len__5565__auto___7319)){
args7308.push((arguments[i__5566__auto___7320]));

var G__7321 = (i__5566__auto___7320 + (1));
i__5566__auto___7320 = G__7321;
continue;
} else {
}
break;
}

var G__7310 = args7308.length;
switch (G__7310) {
case 0:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7308.length)].join('')));

}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return domina.events.unlisten_BANG_.call(null,domina.events.root_element);
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (content){
var seq__7311 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__7312 = null;
var count__7313 = (0);
var i__7314 = (0);
while(true){
if((i__7314 < count__7313)){
var node = cljs.core._nth.call(null,chunk__7312,i__7314);
goog.events.removeAll(node);

var G__7323 = seq__7311;
var G__7324 = chunk__7312;
var G__7325 = count__7313;
var G__7326 = (i__7314 + (1));
seq__7311 = G__7323;
chunk__7312 = G__7324;
count__7313 = G__7325;
i__7314 = G__7326;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7311);
if(temp__4425__auto__){
var seq__7311__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7311__$1)){
var c__5310__auto__ = cljs.core.chunk_first.call(null,seq__7311__$1);
var G__7327 = cljs.core.chunk_rest.call(null,seq__7311__$1);
var G__7328 = c__5310__auto__;
var G__7329 = cljs.core.count.call(null,c__5310__auto__);
var G__7330 = (0);
seq__7311 = G__7327;
chunk__7312 = G__7328;
count__7313 = G__7329;
i__7314 = G__7330;
continue;
} else {
var node = cljs.core.first.call(null,seq__7311__$1);
goog.events.removeAll(node);

var G__7331 = cljs.core.next.call(null,seq__7311__$1);
var G__7332 = null;
var G__7333 = (0);
var G__7334 = (0);
seq__7311 = G__7331;
chunk__7312 = G__7332;
count__7313 = G__7333;
i__7314 = G__7334;
continue;
}
} else {
return null;
}
}
break;
}
});

domina.events.unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (content,type){
var type__$1 = cljs.core.name.call(null,type);
var seq__7315 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__7316 = null;
var count__7317 = (0);
var i__7318 = (0);
while(true){
if((i__7318 < count__7317)){
var node = cljs.core._nth.call(null,chunk__7316,i__7318);
goog.events.removeAll(node,type__$1);

var G__7335 = seq__7315;
var G__7336 = chunk__7316;
var G__7337 = count__7317;
var G__7338 = (i__7318 + (1));
seq__7315 = G__7335;
chunk__7316 = G__7336;
count__7317 = G__7337;
i__7318 = G__7338;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__7315);
if(temp__4425__auto__){
var seq__7315__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7315__$1)){
var c__5310__auto__ = cljs.core.chunk_first.call(null,seq__7315__$1);
var G__7339 = cljs.core.chunk_rest.call(null,seq__7315__$1);
var G__7340 = c__5310__auto__;
var G__7341 = cljs.core.count.call(null,c__5310__auto__);
var G__7342 = (0);
seq__7315 = G__7339;
chunk__7316 = G__7340;
count__7317 = G__7341;
i__7318 = G__7342;
continue;
} else {
var node = cljs.core.first.call(null,seq__7315__$1);
goog.events.removeAll(node,type__$1);

var G__7343 = cljs.core.next.call(null,seq__7315__$1);
var G__7344 = null;
var G__7345 = (0);
var G__7346 = (0);
seq__7315 = G__7343;
chunk__7316 = G__7344;
count__7317 = G__7345;
i__7318 = G__7346;
continue;
}
} else {
return null;
}
}
break;
}
});

domina.events.unlisten_BANG_.cljs$lang$maxFixedArity = 2;
/**
 * Returns a seq of a node and its ancestors, starting with the document root.
 */
domina.events.ancestor_nodes = (function domina$events$ancestor_nodes(){
var args7347 = [];
var len__5565__auto___7350 = arguments.length;
var i__5566__auto___7351 = (0);
while(true){
if((i__5566__auto___7351 < len__5565__auto___7350)){
args7347.push((arguments[i__5566__auto___7351]));

var G__7352 = (i__5566__auto___7351 + (1));
i__5566__auto___7351 = G__7352;
continue;
} else {
}
break;
}

var G__7349 = args7347.length;
switch (G__7349) {
case 1:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7347.length)].join('')));

}
});

domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = (function (n){
return domina.events.ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});

domina.events.ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = (function (n,so_far){
while(true){
var temp__4423__auto__ = n.parentNode;
if(cljs.core.truth_(temp__4423__auto__)){
var parent = temp__4423__auto__;
var G__7354 = parent;
var G__7355 = cljs.core.cons.call(null,parent,so_far);
n = G__7354;
so_far = G__7355;
continue;
} else {
return so_far;
}
break;
}
});

domina.events.ancestor_nodes.cljs$lang$maxFixedArity = 2;
/**
 * Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_browser_BANG_ = (function domina$events$dispatch_browser_BANG_(source,evt){
var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));
var seq__7364_7372 = cljs.core.seq.call(null,ancestors);
var chunk__7365_7373 = null;
var count__7366_7374 = (0);
var i__7367_7375 = (0);
while(true){
if((i__7367_7375 < count__7366_7374)){
var n_7376 = cljs.core._nth.call(null,chunk__7365_7373,i__7367_7375);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_7376;

goog.events.fireListeners(n_7376,evt.type,true,evt);
}

var G__7377 = seq__7364_7372;
var G__7378 = chunk__7365_7373;
var G__7379 = count__7366_7374;
var G__7380 = (i__7367_7375 + (1));
seq__7364_7372 = G__7377;
chunk__7365_7373 = G__7378;
count__7366_7374 = G__7379;
i__7367_7375 = G__7380;
continue;
} else {
var temp__4425__auto___7381 = cljs.core.seq.call(null,seq__7364_7372);
if(temp__4425__auto___7381){
var seq__7364_7382__$1 = temp__4425__auto___7381;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7364_7382__$1)){
var c__5310__auto___7383 = cljs.core.chunk_first.call(null,seq__7364_7382__$1);
var G__7384 = cljs.core.chunk_rest.call(null,seq__7364_7382__$1);
var G__7385 = c__5310__auto___7383;
var G__7386 = cljs.core.count.call(null,c__5310__auto___7383);
var G__7387 = (0);
seq__7364_7372 = G__7384;
chunk__7365_7373 = G__7385;
count__7366_7374 = G__7386;
i__7367_7375 = G__7387;
continue;
} else {
var n_7388 = cljs.core.first.call(null,seq__7364_7382__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_7388;

goog.events.fireListeners(n_7388,evt.type,true,evt);
}

var G__7389 = cljs.core.next.call(null,seq__7364_7382__$1);
var G__7390 = null;
var G__7391 = (0);
var G__7392 = (0);
seq__7364_7372 = G__7389;
chunk__7365_7373 = G__7390;
count__7366_7374 = G__7391;
i__7367_7375 = G__7392;
continue;
}
} else {
}
}
break;
}

var seq__7368_7393 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));
var chunk__7369_7394 = null;
var count__7370_7395 = (0);
var i__7371_7396 = (0);
while(true){
if((i__7371_7396 < count__7370_7395)){
var n_7397 = cljs.core._nth.call(null,chunk__7369_7394,i__7371_7396);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_7397;

goog.events.fireListeners(n_7397,evt.type,false,evt);
}

var G__7398 = seq__7368_7393;
var G__7399 = chunk__7369_7394;
var G__7400 = count__7370_7395;
var G__7401 = (i__7371_7396 + (1));
seq__7368_7393 = G__7398;
chunk__7369_7394 = G__7399;
count__7370_7395 = G__7400;
i__7371_7396 = G__7401;
continue;
} else {
var temp__4425__auto___7402 = cljs.core.seq.call(null,seq__7368_7393);
if(temp__4425__auto___7402){
var seq__7368_7403__$1 = temp__4425__auto___7402;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7368_7403__$1)){
var c__5310__auto___7404 = cljs.core.chunk_first.call(null,seq__7368_7403__$1);
var G__7405 = cljs.core.chunk_rest.call(null,seq__7368_7403__$1);
var G__7406 = c__5310__auto___7404;
var G__7407 = cljs.core.count.call(null,c__5310__auto___7404);
var G__7408 = (0);
seq__7368_7393 = G__7405;
chunk__7369_7394 = G__7406;
count__7370_7395 = G__7407;
i__7371_7396 = G__7408;
continue;
} else {
var n_7409 = cljs.core.first.call(null,seq__7368_7403__$1);
if(cljs.core.truth_(evt.propagationStopped_)){
} else {
evt.currentTarget = n_7409;

goog.events.fireListeners(n_7409,evt.type,false,evt);
}

var G__7410 = cljs.core.next.call(null,seq__7368_7403__$1);
var G__7411 = null;
var G__7412 = (0);
var G__7413 = (0);
seq__7368_7393 = G__7410;
chunk__7369_7394 = G__7411;
count__7370_7395 = G__7412;
i__7371_7396 = G__7413;
continue;
}
} else {
}
}
break;
}

return evt.returnValue_;
});
/**
 * Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
 */
domina.events.dispatch_event_target_BANG_ = (function domina$events$dispatch_event_target_BANG_(source,evt){
return goog.events.dispatchEvent(source,evt);
});
/**
 * Tests whether the object is a goog.event.EventTarget
 */
domina.events.is_event_target_QMARK_ = (function domina$events$is_event_target_QMARK_(o){
var and__4514__auto__ = o.getParentEventTarget;
if(cljs.core.truth_(and__4514__auto__)){
return o.dispatchEvent;
} else {
return and__4514__auto__;
}
});
/**
 * Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
 */
domina.events.dispatch_BANG_ = (function domina$events$dispatch_BANG_(){
var args7414 = [];
var len__5565__auto___7423 = arguments.length;
var i__5566__auto___7424 = (0);
while(true){
if((i__5566__auto___7424 < len__5565__auto___7423)){
args7414.push((arguments[i__5566__auto___7424]));

var G__7425 = (i__5566__auto___7424 + (1));
i__5566__auto___7424 = G__7425;
continue;
} else {
}
break;
}

var G__7416 = args7414.length;
switch (G__7416) {
case 2:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7414.length)].join('')));

}
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,evt_map){
return domina.events.dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});

domina.events.dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (source,type,evt_map){
var evt = (new goog.events.Event(cljs.core.name.call(null,type)));
var seq__7417_7427 = cljs.core.seq.call(null,evt_map);
var chunk__7418_7428 = null;
var count__7419_7429 = (0);
var i__7420_7430 = (0);
while(true){
if((i__7420_7430 < count__7419_7429)){
var vec__7421_7431 = cljs.core._nth.call(null,chunk__7418_7428,i__7420_7430);
var k_7432 = cljs.core.nth.call(null,vec__7421_7431,(0),null);
var v_7433 = cljs.core.nth.call(null,vec__7421_7431,(1),null);
(evt[k_7432] = v_7433);

var G__7434 = seq__7417_7427;
var G__7435 = chunk__7418_7428;
var G__7436 = count__7419_7429;
var G__7437 = (i__7420_7430 + (1));
seq__7417_7427 = G__7434;
chunk__7418_7428 = G__7435;
count__7419_7429 = G__7436;
i__7420_7430 = G__7437;
continue;
} else {
var temp__4425__auto___7438 = cljs.core.seq.call(null,seq__7417_7427);
if(temp__4425__auto___7438){
var seq__7417_7439__$1 = temp__4425__auto___7438;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7417_7439__$1)){
var c__5310__auto___7440 = cljs.core.chunk_first.call(null,seq__7417_7439__$1);
var G__7441 = cljs.core.chunk_rest.call(null,seq__7417_7439__$1);
var G__7442 = c__5310__auto___7440;
var G__7443 = cljs.core.count.call(null,c__5310__auto___7440);
var G__7444 = (0);
seq__7417_7427 = G__7441;
chunk__7418_7428 = G__7442;
count__7419_7429 = G__7443;
i__7420_7430 = G__7444;
continue;
} else {
var vec__7422_7445 = cljs.core.first.call(null,seq__7417_7439__$1);
var k_7446 = cljs.core.nth.call(null,vec__7422_7445,(0),null);
var v_7447 = cljs.core.nth.call(null,vec__7422_7445,(1),null);
(evt[k_7446] = v_7447);

var G__7448 = cljs.core.next.call(null,seq__7417_7439__$1);
var G__7449 = null;
var G__7450 = (0);
var G__7451 = (0);
seq__7417_7427 = G__7448;
chunk__7418_7428 = G__7449;
count__7419_7429 = G__7450;
i__7420_7430 = G__7451;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source))){
return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else {
return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});

domina.events.dispatch_BANG_.cljs$lang$maxFixedArity = 3;
/**
 * Given a listener key, removes the listener.
 */
domina.events.unlisten_by_key_BANG_ = (function domina$events$unlisten_by_key_BANG_(key){
return goog.events.unlistenByKey(key);
});
/**
 * Returns a sequence of event listeners for all the nodes in the
 * content of a given type.
 */
domina.events.get_listeners = (function domina$events$get_listeners(content,type){
var type__$1 = cljs.core.name.call(null,type);
return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__7452_SHARP_){
return goog.events.getListeners(p1__7452_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});

//# sourceMappingURL=events.js.map