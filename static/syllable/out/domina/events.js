// Compiled by ClojureScript 0.0-2268
goog.provide('domina.events');
goog.require('cljs.core');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.object');
goog.require('goog.object');
goog.require('domina');
domina.events.Event = (function (){var obj6920 = {};return obj6920;
})();
domina.events.prevent_default = (function prevent_default(evt){if((function (){var and__3547__auto__ = evt;if(and__3547__auto__)
{return evt.domina$events$Event$prevent_default$arity$1;
} else
{return and__3547__auto__;
}
})())
{return evt.domina$events$Event$prevent_default$arity$1(evt);
} else
{var x__4186__auto__ = (((evt == null))?null:evt);return (function (){var or__3559__auto__ = (domina.events.prevent_default[goog.typeOf(x__4186__auto__)]);if(or__3559__auto__)
{return or__3559__auto__;
} else
{var or__3559__auto____$1 = (domina.events.prevent_default["_"]);if(or__3559__auto____$1)
{return or__3559__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.prevent-default",evt);
}
}
})().call(null,evt);
}
});
domina.events.stop_propagation = (function stop_propagation(evt){if((function (){var and__3547__auto__ = evt;if(and__3547__auto__)
{return evt.domina$events$Event$stop_propagation$arity$1;
} else
{return and__3547__auto__;
}
})())
{return evt.domina$events$Event$stop_propagation$arity$1(evt);
} else
{var x__4186__auto__ = (((evt == null))?null:evt);return (function (){var or__3559__auto__ = (domina.events.stop_propagation[goog.typeOf(x__4186__auto__)]);if(or__3559__auto__)
{return or__3559__auto__;
} else
{var or__3559__auto____$1 = (domina.events.stop_propagation["_"]);if(or__3559__auto____$1)
{return or__3559__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.stop-propagation",evt);
}
}
})().call(null,evt);
}
});
domina.events.target = (function target(evt){if((function (){var and__3547__auto__ = evt;if(and__3547__auto__)
{return evt.domina$events$Event$target$arity$1;
} else
{return and__3547__auto__;
}
})())
{return evt.domina$events$Event$target$arity$1(evt);
} else
{var x__4186__auto__ = (((evt == null))?null:evt);return (function (){var or__3559__auto__ = (domina.events.target[goog.typeOf(x__4186__auto__)]);if(or__3559__auto__)
{return or__3559__auto__;
} else
{var or__3559__auto____$1 = (domina.events.target["_"]);if(or__3559__auto____$1)
{return or__3559__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.target",evt);
}
}
})().call(null,evt);
}
});
domina.events.current_target = (function current_target(evt){if((function (){var and__3547__auto__ = evt;if(and__3547__auto__)
{return evt.domina$events$Event$current_target$arity$1;
} else
{return and__3547__auto__;
}
})())
{return evt.domina$events$Event$current_target$arity$1(evt);
} else
{var x__4186__auto__ = (((evt == null))?null:evt);return (function (){var or__3559__auto__ = (domina.events.current_target[goog.typeOf(x__4186__auto__)]);if(or__3559__auto__)
{return or__3559__auto__;
} else
{var or__3559__auto____$1 = (domina.events.current_target["_"]);if(or__3559__auto____$1)
{return or__3559__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.current-target",evt);
}
}
})().call(null,evt);
}
});
domina.events.event_type = (function event_type(evt){if((function (){var and__3547__auto__ = evt;if(and__3547__auto__)
{return evt.domina$events$Event$event_type$arity$1;
} else
{return and__3547__auto__;
}
})())
{return evt.domina$events$Event$event_type$arity$1(evt);
} else
{var x__4186__auto__ = (((evt == null))?null:evt);return (function (){var or__3559__auto__ = (domina.events.event_type[goog.typeOf(x__4186__auto__)]);if(or__3559__auto__)
{return or__3559__auto__;
} else
{var or__3559__auto____$1 = (domina.events.event_type["_"]);if(or__3559__auto____$1)
{return or__3559__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.event-type",evt);
}
}
})().call(null,evt);
}
});
domina.events.raw_event = (function raw_event(evt){if((function (){var and__3547__auto__ = evt;if(and__3547__auto__)
{return evt.domina$events$Event$raw_event$arity$1;
} else
{return and__3547__auto__;
}
})())
{return evt.domina$events$Event$raw_event$arity$1(evt);
} else
{var x__4186__auto__ = (((evt == null))?null:evt);return (function (){var or__3559__auto__ = (domina.events.raw_event[goog.typeOf(x__4186__auto__)]);if(or__3559__auto__)
{return or__3559__auto__;
} else
{var or__3559__auto____$1 = (domina.events.raw_event["_"]);if(or__3559__auto____$1)
{return or__3559__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Event.raw-event",evt);
}
}
})().call(null,evt);
}
});
domina.events.root_element = window.document.documentElement;
domina.events.create_listener_function = (function create_listener_function(f){return (function (evt){f.call(null,(function (){if(typeof domina.events.t6924 !== 'undefined')
{} else
{
/**
* @constructor
*/
domina.events.t6924 = (function (evt,f,create_listener_function,meta6925){
this.evt = evt;
this.f = f;
this.create_listener_function = create_listener_function;
this.meta6925 = meta6925;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393472;
})
domina.events.t6924.cljs$lang$type = true;
domina.events.t6924.cljs$lang$ctorStr = "domina.events/t6924";
domina.events.t6924.cljs$lang$ctorPrWriter = (function (this__4126__auto__,writer__4127__auto__,opt__4128__auto__){return cljs.core._write.call(null,writer__4127__auto__,"domina.events/t6924");
});
domina.events.t6924.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (o,k){var self__ = this;
var o__$1 = this;var temp__4124__auto__ = (self__.evt[k]);if(cljs.core.truth_(temp__4124__auto__))
{var val = temp__4124__auto__;return val;
} else
{return (self__.evt[cljs.core.name.call(null,k)]);
}
});
domina.events.t6924.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (o,k,not_found){var self__ = this;
var o__$1 = this;var or__3559__auto__ = cljs.core._lookup.call(null,o__$1,k);if(cljs.core.truth_(or__3559__auto__))
{return or__3559__auto__;
} else
{return not_found;
}
});
domina.events.t6924.prototype.domina$events$Event$ = true;
domina.events.t6924.prototype.domina$events$Event$prevent_default$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.preventDefault();
});
domina.events.t6924.prototype.domina$events$Event$stop_propagation$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.stopPropagation();
});
domina.events.t6924.prototype.domina$events$Event$target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.target;
});
domina.events.t6924.prototype.domina$events$Event$current_target$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.currentTarget;
});
domina.events.t6924.prototype.domina$events$Event$event_type$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt.type;
});
domina.events.t6924.prototype.domina$events$Event$raw_event$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.evt;
});
domina.events.t6924.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_6926){var self__ = this;
var _6926__$1 = this;return self__.meta6925;
});
domina.events.t6924.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_6926,meta6925__$1){var self__ = this;
var _6926__$1 = this;return (new domina.events.t6924(self__.evt,self__.f,self__.create_listener_function,meta6925__$1));
});
domina.events.__GT_t6924 = (function __GT_t6924(evt__$1,f__$1,create_listener_function__$1,meta6925){return (new domina.events.t6924(evt__$1,f__$1,create_listener_function__$1,meta6925));
});
}
return (new domina.events.t6924(evt,f,create_listener_function,null));
})());
return true;
});
});
domina.events.listen_internal_BANG_ = (function listen_internal_BANG_(content,type,listener,capture,once){var f = domina.events.create_listener_function.call(null,listener);var t = cljs.core.name.call(null,type);return cljs.core.doall.call(null,(function (){var iter__4284__auto__ = ((function (f,t){
return (function iter__6931(s__6932){return (new cljs.core.LazySeq(null,((function (f,t){
return (function (){var s__6932__$1 = s__6932;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__6932__$1);if(temp__4126__auto__)
{var s__6932__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__6932__$2))
{var c__4282__auto__ = cljs.core.chunk_first.call(null,s__6932__$2);var size__4283__auto__ = cljs.core.count.call(null,c__4282__auto__);var b__6934 = cljs.core.chunk_buffer.call(null,size__4283__auto__);if((function (){var i__6933 = (0);while(true){
if((i__6933 < size__4283__auto__))
{var node = cljs.core._nth.call(null,c__4282__auto__,i__6933);cljs.core.chunk_append.call(null,b__6934,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)));
{
var G__6935 = (i__6933 + (1));
i__6933 = G__6935;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6934),iter__6931.call(null,cljs.core.chunk_rest.call(null,s__6932__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__6934),null);
}
} else
{var node = cljs.core.first.call(null,s__6932__$2);return cljs.core.cons.call(null,(cljs.core.truth_(once)?goog.events.listenOnce(node,t,f,capture):goog.events.listen(node,t,f,capture)),iter__6931.call(null,cljs.core.rest.call(null,s__6932__$2)));
}
} else
{return null;
}
break;
}
});})(f,t))
,null,null));
});})(f,t))
;return iter__4284__auto__.call(null,domina.nodes.call(null,content));
})());
});
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_BANG_ = (function() {
var listen_BANG_ = null;
var listen_BANG___2 = (function (type,listener){return listen_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,false);
});
listen_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_BANG___2.call(this,content,type);
case 3:
return listen_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_BANG___2;
listen_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_BANG___3;
return listen_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_BANG_ = (function() {
var capture_BANG_ = null;
var capture_BANG___2 = (function (type,listener){return capture_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,false);
});
capture_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_BANG___2.call(this,content,type);
case 3:
return capture_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_BANG___2;
capture_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_BANG___3;
return capture_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the bubble phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.listen_once_BANG_ = (function() {
var listen_once_BANG_ = null;
var listen_once_BANG___2 = (function (type,listener){return listen_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var listen_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,false,true);
});
listen_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return listen_once_BANG___2.call(this,content,type);
case 3:
return listen_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
listen_once_BANG_.cljs$core$IFn$_invoke$arity$2 = listen_once_BANG___2;
listen_once_BANG_.cljs$core$IFn$_invoke$arity$3 = listen_once_BANG___3;
return listen_once_BANG_;
})()
;
/**
* Add an event listener to each node in a DomContent. Listens for events during the capture phase. De-registers the listener after the first time it is invoked.  Returns a sequence of listener keys (one for each item in the content). If content is omitted, binds a listener to the document's root element.
*/
domina.events.capture_once_BANG_ = (function() {
var capture_once_BANG_ = null;
var capture_once_BANG___2 = (function (type,listener){return capture_once_BANG_.call(null,domina.events.root_element,type,listener);
});
var capture_once_BANG___3 = (function (content,type,listener){return domina.events.listen_internal_BANG_.call(null,content,type,listener,true,true);
});
capture_once_BANG_ = function(content,type,listener){
switch(arguments.length){
case 2:
return capture_once_BANG___2.call(this,content,type);
case 3:
return capture_once_BANG___3.call(this,content,type,listener);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
capture_once_BANG_.cljs$core$IFn$_invoke$arity$2 = capture_once_BANG___2;
capture_once_BANG_.cljs$core$IFn$_invoke$arity$3 = capture_once_BANG___3;
return capture_once_BANG_;
})()
;
/**
* Removes event listeners from each node in the content. If a listener type is supplied, removes only listeners of that type. If content is omitted, it will remove listeners from the document's root element.
*/
domina.events.unlisten_BANG_ = (function() {
var unlisten_BANG_ = null;
var unlisten_BANG___0 = (function (){return unlisten_BANG_.call(null,domina.events.root_element);
});
var unlisten_BANG___1 = (function (content){var seq__6944 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6945 = null;var count__6946 = (0);var i__6947 = (0);while(true){
if((i__6947 < count__6946))
{var node = cljs.core._nth.call(null,chunk__6945,i__6947);goog.events.removeAll(node);
{
var G__6952 = seq__6944;
var G__6953 = chunk__6945;
var G__6954 = count__6946;
var G__6955 = (i__6947 + (1));
seq__6944 = G__6952;
chunk__6945 = G__6953;
count__6946 = G__6954;
i__6947 = G__6955;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6944);if(temp__4126__auto__)
{var seq__6944__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6944__$1))
{var c__4315__auto__ = cljs.core.chunk_first.call(null,seq__6944__$1);{
var G__6956 = cljs.core.chunk_rest.call(null,seq__6944__$1);
var G__6957 = c__4315__auto__;
var G__6958 = cljs.core.count.call(null,c__4315__auto__);
var G__6959 = (0);
seq__6944 = G__6956;
chunk__6945 = G__6957;
count__6946 = G__6958;
i__6947 = G__6959;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__6944__$1);goog.events.removeAll(node);
{
var G__6960 = cljs.core.next.call(null,seq__6944__$1);
var G__6961 = null;
var G__6962 = (0);
var G__6963 = (0);
seq__6944 = G__6960;
chunk__6945 = G__6961;
count__6946 = G__6962;
i__6947 = G__6963;
continue;
}
}
} else
{return null;
}
}
break;
}
});
var unlisten_BANG___2 = (function (content,type){var type__$1 = cljs.core.name.call(null,type);var seq__6948 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6949 = null;var count__6950 = (0);var i__6951 = (0);while(true){
if((i__6951 < count__6950))
{var node = cljs.core._nth.call(null,chunk__6949,i__6951);goog.events.removeAll(node,type__$1);
{
var G__6964 = seq__6948;
var G__6965 = chunk__6949;
var G__6966 = count__6950;
var G__6967 = (i__6951 + (1));
seq__6948 = G__6964;
chunk__6949 = G__6965;
count__6950 = G__6966;
i__6951 = G__6967;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6948);if(temp__4126__auto__)
{var seq__6948__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6948__$1))
{var c__4315__auto__ = cljs.core.chunk_first.call(null,seq__6948__$1);{
var G__6968 = cljs.core.chunk_rest.call(null,seq__6948__$1);
var G__6969 = c__4315__auto__;
var G__6970 = cljs.core.count.call(null,c__4315__auto__);
var G__6971 = (0);
seq__6948 = G__6968;
chunk__6949 = G__6969;
count__6950 = G__6970;
i__6951 = G__6971;
continue;
}
} else
{var node = cljs.core.first.call(null,seq__6948__$1);goog.events.removeAll(node,type__$1);
{
var G__6972 = cljs.core.next.call(null,seq__6948__$1);
var G__6973 = null;
var G__6974 = (0);
var G__6975 = (0);
seq__6948 = G__6972;
chunk__6949 = G__6973;
count__6950 = G__6974;
i__6951 = G__6975;
continue;
}
}
} else
{return null;
}
}
break;
}
});
unlisten_BANG_ = function(content,type){
switch(arguments.length){
case 0:
return unlisten_BANG___0.call(this);
case 1:
return unlisten_BANG___1.call(this,content);
case 2:
return unlisten_BANG___2.call(this,content,type);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unlisten_BANG_.cljs$core$IFn$_invoke$arity$0 = unlisten_BANG___0;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$1 = unlisten_BANG___1;
unlisten_BANG_.cljs$core$IFn$_invoke$arity$2 = unlisten_BANG___2;
return unlisten_BANG_;
})()
;
/**
* Returns a seq of a node and its ancestors, starting with the document root.
*/
domina.events.ancestor_nodes = (function() {
var ancestor_nodes = null;
var ancestor_nodes__1 = (function (n){return ancestor_nodes.call(null,n,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null));
});
var ancestor_nodes__2 = (function (n,so_far){while(true){
var temp__4124__auto__ = n.parentNode;if(cljs.core.truth_(temp__4124__auto__))
{var parent = temp__4124__auto__;{
var G__6976 = parent;
var G__6977 = cljs.core.cons.call(null,parent,so_far);
n = G__6976;
so_far = G__6977;
continue;
}
} else
{return so_far;
}
break;
}
});
ancestor_nodes = function(n,so_far){
switch(arguments.length){
case 1:
return ancestor_nodes__1.call(this,n);
case 2:
return ancestor_nodes__2.call(this,n,so_far);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ancestor_nodes.cljs$core$IFn$_invoke$arity$1 = ancestor_nodes__1;
ancestor_nodes.cljs$core$IFn$_invoke$arity$2 = ancestor_nodes__2;
return ancestor_nodes;
})()
;
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event as a simulated browser event from the given source node. Emulates capture/bubble behavior. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_browser_BANG_ = (function dispatch_browser_BANG_(source,evt){var ancestors = domina.events.ancestor_nodes.call(null,domina.single_node.call(null,source));var seq__6986_6994 = cljs.core.seq.call(null,ancestors);var chunk__6987_6995 = null;var count__6988_6996 = (0);var i__6989_6997 = (0);while(true){
if((i__6989_6997 < count__6988_6996))
{var n_6998 = cljs.core._nth.call(null,chunk__6987_6995,i__6989_6997);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_6998;
goog.events.fireListeners(n_6998,evt.type,true,evt);
}
{
var G__6999 = seq__6986_6994;
var G__7000 = chunk__6987_6995;
var G__7001 = count__6988_6996;
var G__7002 = (i__6989_6997 + (1));
seq__6986_6994 = G__6999;
chunk__6987_6995 = G__7000;
count__6988_6996 = G__7001;
i__6989_6997 = G__7002;
continue;
}
} else
{var temp__4126__auto___7003 = cljs.core.seq.call(null,seq__6986_6994);if(temp__4126__auto___7003)
{var seq__6986_7004__$1 = temp__4126__auto___7003;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6986_7004__$1))
{var c__4315__auto___7005 = cljs.core.chunk_first.call(null,seq__6986_7004__$1);{
var G__7006 = cljs.core.chunk_rest.call(null,seq__6986_7004__$1);
var G__7007 = c__4315__auto___7005;
var G__7008 = cljs.core.count.call(null,c__4315__auto___7005);
var G__7009 = (0);
seq__6986_6994 = G__7006;
chunk__6987_6995 = G__7007;
count__6988_6996 = G__7008;
i__6989_6997 = G__7009;
continue;
}
} else
{var n_7010 = cljs.core.first.call(null,seq__6986_7004__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_7010;
goog.events.fireListeners(n_7010,evt.type,true,evt);
}
{
var G__7011 = cljs.core.next.call(null,seq__6986_7004__$1);
var G__7012 = null;
var G__7013 = (0);
var G__7014 = (0);
seq__6986_6994 = G__7011;
chunk__6987_6995 = G__7012;
count__6988_6996 = G__7013;
i__6989_6997 = G__7014;
continue;
}
}
} else
{}
}
break;
}
var seq__6990_7015 = cljs.core.seq.call(null,cljs.core.reverse.call(null,ancestors));var chunk__6991_7016 = null;var count__6992_7017 = (0);var i__6993_7018 = (0);while(true){
if((i__6993_7018 < count__6992_7017))
{var n_7019 = cljs.core._nth.call(null,chunk__6991_7016,i__6993_7018);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_7019;
goog.events.fireListeners(n_7019,evt.type,false,evt);
}
{
var G__7020 = seq__6990_7015;
var G__7021 = chunk__6991_7016;
var G__7022 = count__6992_7017;
var G__7023 = (i__6993_7018 + (1));
seq__6990_7015 = G__7020;
chunk__6991_7016 = G__7021;
count__6992_7017 = G__7022;
i__6993_7018 = G__7023;
continue;
}
} else
{var temp__4126__auto___7024 = cljs.core.seq.call(null,seq__6990_7015);if(temp__4126__auto___7024)
{var seq__6990_7025__$1 = temp__4126__auto___7024;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6990_7025__$1))
{var c__4315__auto___7026 = cljs.core.chunk_first.call(null,seq__6990_7025__$1);{
var G__7027 = cljs.core.chunk_rest.call(null,seq__6990_7025__$1);
var G__7028 = c__4315__auto___7026;
var G__7029 = cljs.core.count.call(null,c__4315__auto___7026);
var G__7030 = (0);
seq__6990_7015 = G__7027;
chunk__6991_7016 = G__7028;
count__6992_7017 = G__7029;
i__6993_7018 = G__7030;
continue;
}
} else
{var n_7031 = cljs.core.first.call(null,seq__6990_7025__$1);if(cljs.core.truth_(evt.propagationStopped_))
{} else
{evt.currentTarget = n_7031;
goog.events.fireListeners(n_7031,evt.type,false,evt);
}
{
var G__7032 = cljs.core.next.call(null,seq__6990_7025__$1);
var G__7033 = null;
var G__7034 = (0);
var G__7035 = (0);
seq__6990_7015 = G__7032;
chunk__6991_7016 = G__7033;
count__6992_7017 = G__7034;
i__6993_7018 = G__7035;
continue;
}
}
} else
{}
}
break;
}
return evt.returnValue_;
});
/**
* Intended for internal/testing use only. Clients should prefer dispatch!. Dispatches an event using GClosure's event handling. The event source must extend goog.event.EventTarget
*/
domina.events.dispatch_event_target_BANG_ = (function dispatch_event_target_BANG_(source,evt){return goog.events.dispatchEvent(source,evt);
});
/**
* Tests whether the object is a goog.event.EventTarget
*/
domina.events.is_event_target_QMARK_ = (function is_event_target_QMARK_(o){var and__3547__auto__ = o.getParentEventTarget;if(cljs.core.truth_(and__3547__auto__))
{return o.dispatchEvent;
} else
{return and__3547__auto__;
}
});
/**
* Dispatches an event of the given type, adding the values in event map to the event object. Optionally takes an event source. If none is provided, dispatches on the document's root element. Returns false if any handlers called prevent-default, otherwise true.
*/
domina.events.dispatch_BANG_ = (function() {
var dispatch_BANG_ = null;
var dispatch_BANG___2 = (function (type,evt_map){return dispatch_BANG_.call(null,domina.events.root_element,type,evt_map);
});
var dispatch_BANG___3 = (function (source,type,evt_map){var evt = (new goog.events.Event(cljs.core.name.call(null,type)));var seq__7042_7048 = cljs.core.seq.call(null,evt_map);var chunk__7043_7049 = null;var count__7044_7050 = (0);var i__7045_7051 = (0);while(true){
if((i__7045_7051 < count__7044_7050))
{var vec__7046_7052 = cljs.core._nth.call(null,chunk__7043_7049,i__7045_7051);var k_7053 = cljs.core.nth.call(null,vec__7046_7052,(0),null);var v_7054 = cljs.core.nth.call(null,vec__7046_7052,(1),null);(evt[k_7053] = v_7054);
{
var G__7055 = seq__7042_7048;
var G__7056 = chunk__7043_7049;
var G__7057 = count__7044_7050;
var G__7058 = (i__7045_7051 + (1));
seq__7042_7048 = G__7055;
chunk__7043_7049 = G__7056;
count__7044_7050 = G__7057;
i__7045_7051 = G__7058;
continue;
}
} else
{var temp__4126__auto___7059 = cljs.core.seq.call(null,seq__7042_7048);if(temp__4126__auto___7059)
{var seq__7042_7060__$1 = temp__4126__auto___7059;if(cljs.core.chunked_seq_QMARK_.call(null,seq__7042_7060__$1))
{var c__4315__auto___7061 = cljs.core.chunk_first.call(null,seq__7042_7060__$1);{
var G__7062 = cljs.core.chunk_rest.call(null,seq__7042_7060__$1);
var G__7063 = c__4315__auto___7061;
var G__7064 = cljs.core.count.call(null,c__4315__auto___7061);
var G__7065 = (0);
seq__7042_7048 = G__7062;
chunk__7043_7049 = G__7063;
count__7044_7050 = G__7064;
i__7045_7051 = G__7065;
continue;
}
} else
{var vec__7047_7066 = cljs.core.first.call(null,seq__7042_7060__$1);var k_7067 = cljs.core.nth.call(null,vec__7047_7066,(0),null);var v_7068 = cljs.core.nth.call(null,vec__7047_7066,(1),null);(evt[k_7067] = v_7068);
{
var G__7069 = cljs.core.next.call(null,seq__7042_7060__$1);
var G__7070 = null;
var G__7071 = (0);
var G__7072 = (0);
seq__7042_7048 = G__7069;
chunk__7043_7049 = G__7070;
count__7044_7050 = G__7071;
i__7045_7051 = G__7072;
continue;
}
}
} else
{}
}
break;
}
if(cljs.core.truth_(domina.events.is_event_target_QMARK_.call(null,source)))
{return domina.events.dispatch_event_target_BANG_.call(null,source,evt);
} else
{return domina.events.dispatch_browser_BANG_.call(null,source,evt);
}
});
dispatch_BANG_ = function(source,type,evt_map){
switch(arguments.length){
case 2:
return dispatch_BANG___2.call(this,source,type);
case 3:
return dispatch_BANG___3.call(this,source,type,evt_map);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
dispatch_BANG_.cljs$core$IFn$_invoke$arity$2 = dispatch_BANG___2;
dispatch_BANG_.cljs$core$IFn$_invoke$arity$3 = dispatch_BANG___3;
return dispatch_BANG_;
})()
;
/**
* Given a listener key, removes the listener.
*/
domina.events.unlisten_by_key_BANG_ = (function unlisten_by_key_BANG_(key){return goog.events.unlistenByKey(key);
});
/**
* Returns a sequence of event listeners for all the nodes in the
* content of a given type.
*/
domina.events.get_listeners = (function get_listeners(content,type){var type__$1 = cljs.core.name.call(null,type);return cljs.core.mapcat.call(null,((function (type__$1){
return (function (p1__7073_SHARP_){return goog.events.getListeners(p1__7073_SHARP_,type__$1,false);
});})(type__$1))
,domina.nodes.call(null,content));
});
