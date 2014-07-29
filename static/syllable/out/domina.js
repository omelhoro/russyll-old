// Compiled by ClojureScript 0.0-2268
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.forms');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.string');
goog.require('domina.support');
goog.require('goog.style');
goog.require('goog.style');
goog.require('clojure.string');
goog.require('clojure.string');
goog.require('goog.events');
goog.require('goog.dom.xml');
goog.require('cljs.core');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_6467 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);var table_section_wrapper_6468 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);var cell_wrapper_6469 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_6469,opt_wrapper_6467,table_section_wrapper_6468,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_6467,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_6468,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_6468,cell_wrapper_6469,table_section_wrapper_6468,table_section_wrapper_6468]);
domina.remove_extraneous_tbody_BANG_ = (function remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__3547__auto__ = div.firstChild;if(cljs.core.truth_(and__3547__auto__))
{return div.firstChild.childNodes;
} else
{return and__3547__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?divchildNodes:cljs.core.PersistentVector.EMPTY));var seq__6474 = cljs.core.seq.call(null,tbody);var chunk__6475 = null;var count__6476 = (0);var i__6477 = (0);while(true){
if((i__6477 < count__6476))
{var child = cljs.core._nth.call(null,chunk__6475,i__6477);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__6478 = seq__6474;
var G__6479 = chunk__6475;
var G__6480 = count__6476;
var G__6481 = (i__6477 + (1));
seq__6474 = G__6478;
chunk__6475 = G__6479;
count__6476 = G__6480;
i__6477 = G__6481;
continue;
}
} else
{var temp__4126__auto__ = cljs.core.seq.call(null,seq__6474);if(temp__4126__auto__)
{var seq__6474__$1 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6474__$1))
{var c__4315__auto__ = cljs.core.chunk_first.call(null,seq__6474__$1);{
var G__6482 = cljs.core.chunk_rest.call(null,seq__6474__$1);
var G__6483 = c__4315__auto__;
var G__6484 = cljs.core.count.call(null,c__4315__auto__);
var G__6485 = (0);
seq__6474 = G__6482;
chunk__6475 = G__6483;
count__6476 = G__6484;
i__6477 = G__6485;
continue;
}
} else
{var child = cljs.core.first.call(null,seq__6474__$1);if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0))))
{child.parentNode.removeChild(child);
} else
{}
{
var G__6486 = cljs.core.next.call(null,seq__6474__$1);
var G__6487 = null;
var G__6488 = (0);
var G__6489 = (0);
seq__6474 = G__6486;
chunk__6475 = G__6487;
count__6476 = G__6488;
i__6477 = G__6489;
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
domina.restore_leading_whitespace_BANG_ = (function restore_leading_whitespace_BANG_(div,html){return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
* takes an string of html and returns a NodeList of dom fragments
*/
domina.html_to_dom = (function html_to_dom(html){var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))).toLowerCase();var vec__6491 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));var depth = cljs.core.nth.call(null,vec__6491,(0),null);var start_wrap = cljs.core.nth.call(null,vec__6491,(1),null);var end_wrap = cljs.core.nth.call(null,vec__6491,(2),null);var div = (function (){var wrapper = (function (){var div = document.createElement("div");div.innerHTML = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(start_wrap)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(html__$1)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(end_wrap));
return div;
})();var level = depth;while(true){
if((level > (0)))
{{
var G__6492 = wrapper.lastChild;
var G__6493 = (level - (1));
wrapper = G__6492;
level = G__6493;
continue;
}
} else
{return wrapper;
}
break;
}
})();if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_))
{domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else
{}
if(cljs.core.truth_((function (){var and__3547__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);if(and__3547__auto__)
{return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else
{return and__3547__auto__;
}
})()))
{domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else
{}
return div.childNodes;
});
domina.string_to_dom = (function string_to_dom(s){if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s)))
{return domina.html_to_dom.call(null,s);
} else
{return document.createTextNode(s);
}
});
domina.DomContent = (function (){var obj6495 = {};return obj6495;
})();
domina.nodes = (function nodes(content){if((function (){var and__3547__auto__ = content;if(and__3547__auto__)
{return content.domina$DomContent$nodes$arity$1;
} else
{return and__3547__auto__;
}
})())
{return content.domina$DomContent$nodes$arity$1(content);
} else
{var x__4186__auto__ = (((content == null))?null:content);return (function (){var or__3559__auto__ = (domina.nodes[goog.typeOf(x__4186__auto__)]);if(or__3559__auto__)
{return or__3559__auto__;
} else
{var or__3559__auto____$1 = (domina.nodes["_"]);if(or__3559__auto____$1)
{return or__3559__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
})().call(null,content);
}
});
domina.single_node = (function single_node(nodeseq){if((function (){var and__3547__auto__ = nodeseq;if(and__3547__auto__)
{return nodeseq.domina$DomContent$single_node$arity$1;
} else
{return and__3547__auto__;
}
})())
{return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else
{var x__4186__auto__ = (((nodeseq == null))?null:nodeseq);return (function (){var or__3559__auto__ = (domina.single_node[goog.typeOf(x__4186__auto__)]);if(or__3559__auto__)
{return or__3559__auto__;
} else
{var or__3559__auto____$1 = (domina.single_node["_"]);if(or__3559__auto____$1)
{return or__3559__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
})().call(null,nodeseq);
}
});
domina._STAR_debug_STAR_ = true;
/**
* @param {...*} var_args
*/
domina.log_debug = (function() { 
var log_debug__delegate = function (mesg){if(cljs.core.truth_((function (){var and__3547__auto__ = domina._STAR_debug_STAR_;if(cljs.core.truth_(and__3547__auto__))
{return !(cljs.core._EQ_.call(null,window.console,undefined));
} else
{return and__3547__auto__;
}
})()))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log_debug = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log_debug__delegate.call(this,mesg);};
log_debug.cljs$lang$maxFixedArity = 0;
log_debug.cljs$lang$applyTo = (function (arglist__6496){
var mesg = cljs.core.seq(arglist__6496);
return log_debug__delegate(mesg);
});
log_debug.cljs$core$IFn$_invoke$arity$variadic = log_debug__delegate;
return log_debug;
})()
;
/**
* @param {...*} var_args
*/
domina.log = (function() { 
var log__delegate = function (mesg){if(cljs.core.truth_(window.console))
{return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else
{return null;
}
};
var log = function (var_args){
var mesg = null;if (arguments.length > 0) {
  mesg = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return log__delegate.call(this,mesg);};
log.cljs$lang$maxFixedArity = 0;
log.cljs$lang$applyTo = (function (arglist__6497){
var mesg = cljs.core.seq(arglist__6497);
return log__delegate(mesg);
});
log.cljs$core$IFn$_invoke$arity$variadic = log__delegate;
return log;
})()
;
/**
* Returns content containing a single node by looking up the given ID
*/
domina.by_id = (function by_id(id){return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
* Returns content containing nodes which have the specified CSS class.
*/
domina.by_class = (function by_class(class_name){return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
* Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
*/
domina.children = (function children(content){return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
* Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
* @param {...*} var_args
*/
domina.common_ancestor = (function() { 
var common_ancestor__delegate = function (contents){return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
};
var common_ancestor = function (var_args){
var contents = null;if (arguments.length > 0) {
  contents = cljs.core.array_seq(Array.prototype.slice.call(arguments, 0),0);} 
return common_ancestor__delegate.call(this,contents);};
common_ancestor.cljs$lang$maxFixedArity = 0;
common_ancestor.cljs$lang$applyTo = (function (arglist__6498){
var contents = cljs.core.seq(arglist__6498);
return common_ancestor__delegate(contents);
});
common_ancestor.cljs$core$IFn$_invoke$arity$variadic = common_ancestor__delegate;
return common_ancestor;
})()
;
/**
* Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
*/
domina.ancestor_QMARK_ = (function ancestor_QMARK_(ancestor_content,descendant_content){return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
* Returns a deep clone of content.
*/
domina.clone = (function clone(content){return cljs.core.map.call(null,(function (p1__6499_SHARP_){return p1__6499_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
* Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.append_BANG_ = (function append_BANG_(parent_content,child_content){domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.insert_BANG_ = (function insert_BANG_(parent_content,child_content,idx){domina.apply_with_cloning.call(null,(function (p1__6500_SHARP_,p2__6501_SHARP_){return goog.dom.insertChildAt(p1__6500_SHARP_,p2__6501_SHARP_,idx);
}),parent_content,child_content);
return parent_content;
});
/**
* Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
*/
domina.prepend_BANG_ = (function prepend_BANG_(parent_content,child_content){domina.insert_BANG_.call(null,parent_content,child_content,(0));
return parent_content;
});
/**
* Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_before_BANG_ = (function insert_before_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__6503_SHARP_,p2__6502_SHARP_){return goog.dom.insertSiblingBefore(p2__6502_SHARP_,p1__6503_SHARP_);
}),content,new_content);
return content;
});
/**
* Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
*/
domina.insert_after_BANG_ = (function insert_after_BANG_(content,new_content){domina.apply_with_cloning.call(null,(function (p1__6505_SHARP_,p2__6504_SHARP_){return goog.dom.insertSiblingAfter(p2__6504_SHARP_,p1__6505_SHARP_);
}),content,new_content);
return content;
});
/**
* Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
*/
domina.swap_content_BANG_ = (function swap_content_BANG_(old_content,new_content){domina.apply_with_cloning.call(null,(function (p1__6507_SHARP_,p2__6506_SHARP_){return goog.dom.replaceNode(p2__6506_SHARP_,p1__6507_SHARP_);
}),old_content,new_content);
return old_content;
});
/**
* Removes all the nodes in a content from the DOM and returns them.
*/
domina.detach_BANG_ = (function detach_BANG_(content){return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the nodes in a content from the DOM. Returns nil.
*/
domina.destroy_BANG_ = (function destroy_BANG_(content){return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
* Removes all the child nodes in a content from the DOM. Returns the original content.
*/
domina.destroy_children_BANG_ = (function destroy_children_BANG_(content){cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));
return content;
});
/**
* Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
*/
domina.style = (function style(content,name){var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s)))
{return null;
} else
{return s;
}
});
/**
* Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
*/
domina.attr = (function attr(content,name){return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
* Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_style_BANG_ = (function() { 
var set_style_BANG___delegate = function (content,name,value){var seq__6512_6516 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6513_6517 = null;var count__6514_6518 = (0);var i__6515_6519 = (0);while(true){
if((i__6515_6519 < count__6514_6518))
{var n_6520 = cljs.core._nth.call(null,chunk__6513_6517,i__6515_6519);goog.style.setStyle(n_6520,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__6521 = seq__6512_6516;
var G__6522 = chunk__6513_6517;
var G__6523 = count__6514_6518;
var G__6524 = (i__6515_6519 + (1));
seq__6512_6516 = G__6521;
chunk__6513_6517 = G__6522;
count__6514_6518 = G__6523;
i__6515_6519 = G__6524;
continue;
}
} else
{var temp__4126__auto___6525 = cljs.core.seq.call(null,seq__6512_6516);if(temp__4126__auto___6525)
{var seq__6512_6526__$1 = temp__4126__auto___6525;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6512_6526__$1))
{var c__4315__auto___6527 = cljs.core.chunk_first.call(null,seq__6512_6526__$1);{
var G__6528 = cljs.core.chunk_rest.call(null,seq__6512_6526__$1);
var G__6529 = c__4315__auto___6527;
var G__6530 = cljs.core.count.call(null,c__4315__auto___6527);
var G__6531 = (0);
seq__6512_6516 = G__6528;
chunk__6513_6517 = G__6529;
count__6514_6518 = G__6530;
i__6515_6519 = G__6531;
continue;
}
} else
{var n_6532 = cljs.core.first.call(null,seq__6512_6526__$1);goog.style.setStyle(n_6532,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__6533 = cljs.core.next.call(null,seq__6512_6526__$1);
var G__6534 = null;
var G__6535 = (0);
var G__6536 = (0);
seq__6512_6516 = G__6533;
chunk__6513_6517 = G__6534;
count__6514_6518 = G__6535;
i__6515_6519 = G__6536;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_style_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_style_BANG___delegate.call(this,content,name,value);};
set_style_BANG_.cljs$lang$maxFixedArity = 2;
set_style_BANG_.cljs$lang$applyTo = (function (arglist__6537){
var content = cljs.core.first(arglist__6537);
arglist__6537 = cljs.core.next(arglist__6537);
var name = cljs.core.first(arglist__6537);
var value = cljs.core.rest(arglist__6537);
return set_style_BANG___delegate(content,name,value);
});
set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_style_BANG___delegate;
return set_style_BANG_;
})()
;
/**
* Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
* @param {...*} var_args
*/
domina.set_attr_BANG_ = (function() { 
var set_attr_BANG___delegate = function (content,name,value){var seq__6542_6546 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6543_6547 = null;var count__6544_6548 = (0);var i__6545_6549 = (0);while(true){
if((i__6545_6549 < count__6544_6548))
{var n_6550 = cljs.core._nth.call(null,chunk__6543_6547,i__6545_6549);n_6550.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__6551 = seq__6542_6546;
var G__6552 = chunk__6543_6547;
var G__6553 = count__6544_6548;
var G__6554 = (i__6545_6549 + (1));
seq__6542_6546 = G__6551;
chunk__6543_6547 = G__6552;
count__6544_6548 = G__6553;
i__6545_6549 = G__6554;
continue;
}
} else
{var temp__4126__auto___6555 = cljs.core.seq.call(null,seq__6542_6546);if(temp__4126__auto___6555)
{var seq__6542_6556__$1 = temp__4126__auto___6555;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6542_6556__$1))
{var c__4315__auto___6557 = cljs.core.chunk_first.call(null,seq__6542_6556__$1);{
var G__6558 = cljs.core.chunk_rest.call(null,seq__6542_6556__$1);
var G__6559 = c__4315__auto___6557;
var G__6560 = cljs.core.count.call(null,c__4315__auto___6557);
var G__6561 = (0);
seq__6542_6546 = G__6558;
chunk__6543_6547 = G__6559;
count__6544_6548 = G__6560;
i__6545_6549 = G__6561;
continue;
}
} else
{var n_6562 = cljs.core.first.call(null,seq__6542_6556__$1);n_6562.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));
{
var G__6563 = cljs.core.next.call(null,seq__6542_6556__$1);
var G__6564 = null;
var G__6565 = (0);
var G__6566 = (0);
seq__6542_6546 = G__6563;
chunk__6543_6547 = G__6564;
count__6544_6548 = G__6565;
i__6545_6549 = G__6566;
continue;
}
}
} else
{}
}
break;
}
return content;
};
var set_attr_BANG_ = function (content,name,var_args){
var value = null;if (arguments.length > 2) {
  value = cljs.core.array_seq(Array.prototype.slice.call(arguments, 2),0);} 
return set_attr_BANG___delegate.call(this,content,name,value);};
set_attr_BANG_.cljs$lang$maxFixedArity = 2;
set_attr_BANG_.cljs$lang$applyTo = (function (arglist__6567){
var content = cljs.core.first(arglist__6567);
arglist__6567 = cljs.core.next(arglist__6567);
var name = cljs.core.first(arglist__6567);
var value = cljs.core.rest(arglist__6567);
return set_attr_BANG___delegate(content,name,value);
});
set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = set_attr_BANG___delegate;
return set_attr_BANG_;
})()
;
/**
* Removes the specified HTML property for each node in the content. Name may be a string or keyword.
*/
domina.remove_attr_BANG_ = (function remove_attr_BANG_(content,name){var seq__6572_6576 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6573_6577 = null;var count__6574_6578 = (0);var i__6575_6579 = (0);while(true){
if((i__6575_6579 < count__6574_6578))
{var n_6580 = cljs.core._nth.call(null,chunk__6573_6577,i__6575_6579);n_6580.removeAttribute(cljs.core.name.call(null,name));
{
var G__6581 = seq__6572_6576;
var G__6582 = chunk__6573_6577;
var G__6583 = count__6574_6578;
var G__6584 = (i__6575_6579 + (1));
seq__6572_6576 = G__6581;
chunk__6573_6577 = G__6582;
count__6574_6578 = G__6583;
i__6575_6579 = G__6584;
continue;
}
} else
{var temp__4126__auto___6585 = cljs.core.seq.call(null,seq__6572_6576);if(temp__4126__auto___6585)
{var seq__6572_6586__$1 = temp__4126__auto___6585;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6572_6586__$1))
{var c__4315__auto___6587 = cljs.core.chunk_first.call(null,seq__6572_6586__$1);{
var G__6588 = cljs.core.chunk_rest.call(null,seq__6572_6586__$1);
var G__6589 = c__4315__auto___6587;
var G__6590 = cljs.core.count.call(null,c__4315__auto___6587);
var G__6591 = (0);
seq__6572_6576 = G__6588;
chunk__6573_6577 = G__6589;
count__6574_6578 = G__6590;
i__6575_6579 = G__6591;
continue;
}
} else
{var n_6592 = cljs.core.first.call(null,seq__6572_6586__$1);n_6592.removeAttribute(cljs.core.name.call(null,name));
{
var G__6593 = cljs.core.next.call(null,seq__6572_6586__$1);
var G__6594 = null;
var G__6595 = (0);
var G__6596 = (0);
seq__6572_6576 = G__6593;
chunk__6573_6577 = G__6594;
count__6574_6578 = G__6595;
i__6575_6579 = G__6596;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Parses a CSS style string and returns the properties as a map.
*/
domina.parse_style_attributes = (function parse_style_attributes(style){return cljs.core.reduce.call(null,(function (acc,pair){var vec__6598 = pair.split(/\s*:\s*/);var k = cljs.core.nth.call(null,vec__6598,(0),null);var v = cljs.core.nth.call(null,vec__6598,(1),null);if(cljs.core.truth_((function (){var and__3547__auto__ = k;if(cljs.core.truth_(and__3547__auto__))
{return v;
} else
{return and__3547__auto__;
}
})()))
{return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else
{return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
* Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
*/
domina.styles = (function styles(content){var style = domina.attr.call(null,content,"style");if(typeof style === 'string')
{return domina.parse_style_attributes.call(null,style);
} else
{if((style == null))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{if(cljs.core.truth_(style.cssText))
{return domina.parse_style_attributes.call(null,style.cssText);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return cljs.core.PersistentArrayMap.EMPTY;
} else
{return null;
}
}
}
}
});
/**
* Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
*/
domina.attrs = (function attrs(content){var node = domina.single_node.call(null,content);var attrs__$1 = node.attributes;return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__6599_SHARP_){var attr = attrs__$1.item(p1__6599_SHARP_);var value = attr.nodeValue;if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value)))
{return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else
{return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
* Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
*/
domina.set_styles_BANG_ = (function set_styles_BANG_(content,styles){var seq__6606_6612 = cljs.core.seq.call(null,styles);var chunk__6607_6613 = null;var count__6608_6614 = (0);var i__6609_6615 = (0);while(true){
if((i__6609_6615 < count__6608_6614))
{var vec__6610_6616 = cljs.core._nth.call(null,chunk__6607_6613,i__6609_6615);var name_6617 = cljs.core.nth.call(null,vec__6610_6616,(0),null);var value_6618 = cljs.core.nth.call(null,vec__6610_6616,(1),null);domina.set_style_BANG_.call(null,content,name_6617,value_6618);
{
var G__6619 = seq__6606_6612;
var G__6620 = chunk__6607_6613;
var G__6621 = count__6608_6614;
var G__6622 = (i__6609_6615 + (1));
seq__6606_6612 = G__6619;
chunk__6607_6613 = G__6620;
count__6608_6614 = G__6621;
i__6609_6615 = G__6622;
continue;
}
} else
{var temp__4126__auto___6623 = cljs.core.seq.call(null,seq__6606_6612);if(temp__4126__auto___6623)
{var seq__6606_6624__$1 = temp__4126__auto___6623;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6606_6624__$1))
{var c__4315__auto___6625 = cljs.core.chunk_first.call(null,seq__6606_6624__$1);{
var G__6626 = cljs.core.chunk_rest.call(null,seq__6606_6624__$1);
var G__6627 = c__4315__auto___6625;
var G__6628 = cljs.core.count.call(null,c__4315__auto___6625);
var G__6629 = (0);
seq__6606_6612 = G__6626;
chunk__6607_6613 = G__6627;
count__6608_6614 = G__6628;
i__6609_6615 = G__6629;
continue;
}
} else
{var vec__6611_6630 = cljs.core.first.call(null,seq__6606_6624__$1);var name_6631 = cljs.core.nth.call(null,vec__6611_6630,(0),null);var value_6632 = cljs.core.nth.call(null,vec__6611_6630,(1),null);domina.set_style_BANG_.call(null,content,name_6631,value_6632);
{
var G__6633 = cljs.core.next.call(null,seq__6606_6624__$1);
var G__6634 = null;
var G__6635 = (0);
var G__6636 = (0);
seq__6606_6612 = G__6633;
chunk__6607_6613 = G__6634;
count__6608_6614 = G__6635;
i__6609_6615 = G__6636;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
*/
domina.set_attrs_BANG_ = (function set_attrs_BANG_(content,attrs){var seq__6643_6649 = cljs.core.seq.call(null,attrs);var chunk__6644_6650 = null;var count__6645_6651 = (0);var i__6646_6652 = (0);while(true){
if((i__6646_6652 < count__6645_6651))
{var vec__6647_6653 = cljs.core._nth.call(null,chunk__6644_6650,i__6646_6652);var name_6654 = cljs.core.nth.call(null,vec__6647_6653,(0),null);var value_6655 = cljs.core.nth.call(null,vec__6647_6653,(1),null);domina.set_attr_BANG_.call(null,content,name_6654,value_6655);
{
var G__6656 = seq__6643_6649;
var G__6657 = chunk__6644_6650;
var G__6658 = count__6645_6651;
var G__6659 = (i__6646_6652 + (1));
seq__6643_6649 = G__6656;
chunk__6644_6650 = G__6657;
count__6645_6651 = G__6658;
i__6646_6652 = G__6659;
continue;
}
} else
{var temp__4126__auto___6660 = cljs.core.seq.call(null,seq__6643_6649);if(temp__4126__auto___6660)
{var seq__6643_6661__$1 = temp__4126__auto___6660;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6643_6661__$1))
{var c__4315__auto___6662 = cljs.core.chunk_first.call(null,seq__6643_6661__$1);{
var G__6663 = cljs.core.chunk_rest.call(null,seq__6643_6661__$1);
var G__6664 = c__4315__auto___6662;
var G__6665 = cljs.core.count.call(null,c__4315__auto___6662);
var G__6666 = (0);
seq__6643_6649 = G__6663;
chunk__6644_6650 = G__6664;
count__6645_6651 = G__6665;
i__6646_6652 = G__6666;
continue;
}
} else
{var vec__6648_6667 = cljs.core.first.call(null,seq__6643_6661__$1);var name_6668 = cljs.core.nth.call(null,vec__6648_6667,(0),null);var value_6669 = cljs.core.nth.call(null,vec__6648_6667,(1),null);domina.set_attr_BANG_.call(null,content,name_6668,value_6669);
{
var G__6670 = cljs.core.next.call(null,seq__6643_6661__$1);
var G__6671 = null;
var G__6672 = (0);
var G__6673 = (0);
seq__6643_6649 = G__6670;
chunk__6644_6650 = G__6671;
count__6645_6651 = G__6672;
i__6646_6652 = G__6673;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns true if the node has the specified CSS class. Assumes content is a single node.
*/
domina.has_class_QMARK_ = (function has_class_QMARK_(content,class$){return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
* Adds the specified CSS class to each node in the content.
*/
domina.add_class_BANG_ = (function add_class_BANG_(content,class$){var seq__6678_6682 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6679_6683 = null;var count__6680_6684 = (0);var i__6681_6685 = (0);while(true){
if((i__6681_6685 < count__6680_6684))
{var node_6686 = cljs.core._nth.call(null,chunk__6679_6683,i__6681_6685);goog.dom.classes.add(node_6686,class$);
{
var G__6687 = seq__6678_6682;
var G__6688 = chunk__6679_6683;
var G__6689 = count__6680_6684;
var G__6690 = (i__6681_6685 + (1));
seq__6678_6682 = G__6687;
chunk__6679_6683 = G__6688;
count__6680_6684 = G__6689;
i__6681_6685 = G__6690;
continue;
}
} else
{var temp__4126__auto___6691 = cljs.core.seq.call(null,seq__6678_6682);if(temp__4126__auto___6691)
{var seq__6678_6692__$1 = temp__4126__auto___6691;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6678_6692__$1))
{var c__4315__auto___6693 = cljs.core.chunk_first.call(null,seq__6678_6692__$1);{
var G__6694 = cljs.core.chunk_rest.call(null,seq__6678_6692__$1);
var G__6695 = c__4315__auto___6693;
var G__6696 = cljs.core.count.call(null,c__4315__auto___6693);
var G__6697 = (0);
seq__6678_6682 = G__6694;
chunk__6679_6683 = G__6695;
count__6680_6684 = G__6696;
i__6681_6685 = G__6697;
continue;
}
} else
{var node_6698 = cljs.core.first.call(null,seq__6678_6692__$1);goog.dom.classes.add(node_6698,class$);
{
var G__6699 = cljs.core.next.call(null,seq__6678_6692__$1);
var G__6700 = null;
var G__6701 = (0);
var G__6702 = (0);
seq__6678_6682 = G__6699;
chunk__6679_6683 = G__6700;
count__6680_6684 = G__6701;
i__6681_6685 = G__6702;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Removes the specified CSS class from each node in the content.
*/
domina.remove_class_BANG_ = (function remove_class_BANG_(content,class$){var seq__6707_6711 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6708_6712 = null;var count__6709_6713 = (0);var i__6710_6714 = (0);while(true){
if((i__6710_6714 < count__6709_6713))
{var node_6715 = cljs.core._nth.call(null,chunk__6708_6712,i__6710_6714);goog.dom.classes.remove(node_6715,class$);
{
var G__6716 = seq__6707_6711;
var G__6717 = chunk__6708_6712;
var G__6718 = count__6709_6713;
var G__6719 = (i__6710_6714 + (1));
seq__6707_6711 = G__6716;
chunk__6708_6712 = G__6717;
count__6709_6713 = G__6718;
i__6710_6714 = G__6719;
continue;
}
} else
{var temp__4126__auto___6720 = cljs.core.seq.call(null,seq__6707_6711);if(temp__4126__auto___6720)
{var seq__6707_6721__$1 = temp__4126__auto___6720;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6707_6721__$1))
{var c__4315__auto___6722 = cljs.core.chunk_first.call(null,seq__6707_6721__$1);{
var G__6723 = cljs.core.chunk_rest.call(null,seq__6707_6721__$1);
var G__6724 = c__4315__auto___6722;
var G__6725 = cljs.core.count.call(null,c__4315__auto___6722);
var G__6726 = (0);
seq__6707_6711 = G__6723;
chunk__6708_6712 = G__6724;
count__6709_6713 = G__6725;
i__6710_6714 = G__6726;
continue;
}
} else
{var node_6727 = cljs.core.first.call(null,seq__6707_6721__$1);goog.dom.classes.remove(node_6727,class$);
{
var G__6728 = cljs.core.next.call(null,seq__6707_6721__$1);
var G__6729 = null;
var G__6730 = (0);
var G__6731 = (0);
seq__6707_6711 = G__6728;
chunk__6708_6712 = G__6729;
count__6709_6713 = G__6730;
i__6710_6714 = G__6731;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Toggles the specified CSS class from each node in the content.
*/
domina.toggle_class_BANG_ = (function toggle_class_BANG_(content,class$){var seq__6736_6740 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6737_6741 = null;var count__6738_6742 = (0);var i__6739_6743 = (0);while(true){
if((i__6739_6743 < count__6738_6742))
{var node_6744 = cljs.core._nth.call(null,chunk__6737_6741,i__6739_6743);goog.dom.classes.toggle(node_6744,class$);
{
var G__6745 = seq__6736_6740;
var G__6746 = chunk__6737_6741;
var G__6747 = count__6738_6742;
var G__6748 = (i__6739_6743 + (1));
seq__6736_6740 = G__6745;
chunk__6737_6741 = G__6746;
count__6738_6742 = G__6747;
i__6739_6743 = G__6748;
continue;
}
} else
{var temp__4126__auto___6749 = cljs.core.seq.call(null,seq__6736_6740);if(temp__4126__auto___6749)
{var seq__6736_6750__$1 = temp__4126__auto___6749;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6736_6750__$1))
{var c__4315__auto___6751 = cljs.core.chunk_first.call(null,seq__6736_6750__$1);{
var G__6752 = cljs.core.chunk_rest.call(null,seq__6736_6750__$1);
var G__6753 = c__4315__auto___6751;
var G__6754 = cljs.core.count.call(null,c__4315__auto___6751);
var G__6755 = (0);
seq__6736_6740 = G__6752;
chunk__6737_6741 = G__6753;
count__6738_6742 = G__6754;
i__6739_6743 = G__6755;
continue;
}
} else
{var node_6756 = cljs.core.first.call(null,seq__6736_6750__$1);goog.dom.classes.toggle(node_6756,class$);
{
var G__6757 = cljs.core.next.call(null,seq__6736_6750__$1);
var G__6758 = null;
var G__6759 = (0);
var G__6760 = (0);
seq__6736_6740 = G__6757;
chunk__6737_6741 = G__6758;
count__6738_6742 = G__6759;
i__6739_6743 = G__6760;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
*/
domina.classes = (function classes(content){return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
* Sets the class attribute of the content nodes to classes, which can
* be either a class attribute string or a seq of classname strings.
*/
domina.set_classes_BANG_ = (function set_classes_BANG_(content,classes){var classes_6769__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);var seq__6765_6770 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6766_6771 = null;var count__6767_6772 = (0);var i__6768_6773 = (0);while(true){
if((i__6768_6773 < count__6767_6772))
{var node_6774 = cljs.core._nth.call(null,chunk__6766_6771,i__6768_6773);goog.dom.classes.set(node_6774,classes_6769__$1);
{
var G__6775 = seq__6765_6770;
var G__6776 = chunk__6766_6771;
var G__6777 = count__6767_6772;
var G__6778 = (i__6768_6773 + (1));
seq__6765_6770 = G__6775;
chunk__6766_6771 = G__6776;
count__6767_6772 = G__6777;
i__6768_6773 = G__6778;
continue;
}
} else
{var temp__4126__auto___6779 = cljs.core.seq.call(null,seq__6765_6770);if(temp__4126__auto___6779)
{var seq__6765_6780__$1 = temp__4126__auto___6779;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6765_6780__$1))
{var c__4315__auto___6781 = cljs.core.chunk_first.call(null,seq__6765_6780__$1);{
var G__6782 = cljs.core.chunk_rest.call(null,seq__6765_6780__$1);
var G__6783 = c__4315__auto___6781;
var G__6784 = cljs.core.count.call(null,c__4315__auto___6781);
var G__6785 = (0);
seq__6765_6770 = G__6782;
chunk__6766_6771 = G__6783;
count__6767_6772 = G__6784;
i__6768_6773 = G__6785;
continue;
}
} else
{var node_6786 = cljs.core.first.call(null,seq__6765_6780__$1);goog.dom.classes.set(node_6786,classes_6769__$1);
{
var G__6787 = cljs.core.next.call(null,seq__6765_6780__$1);
var G__6788 = null;
var G__6789 = (0);
var G__6790 = (0);
seq__6765_6770 = G__6787;
chunk__6766_6771 = G__6788;
count__6767_6772 = G__6789;
i__6768_6773 = G__6790;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
*/
domina.text = (function text(content){return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
* Sets the text value of all the nodes in the given content.
*/
domina.set_text_BANG_ = (function set_text_BANG_(content,value){var seq__6795_6799 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6796_6800 = null;var count__6797_6801 = (0);var i__6798_6802 = (0);while(true){
if((i__6798_6802 < count__6797_6801))
{var node_6803 = cljs.core._nth.call(null,chunk__6796_6800,i__6798_6802);goog.dom.setTextContent(node_6803,value);
{
var G__6804 = seq__6795_6799;
var G__6805 = chunk__6796_6800;
var G__6806 = count__6797_6801;
var G__6807 = (i__6798_6802 + (1));
seq__6795_6799 = G__6804;
chunk__6796_6800 = G__6805;
count__6797_6801 = G__6806;
i__6798_6802 = G__6807;
continue;
}
} else
{var temp__4126__auto___6808 = cljs.core.seq.call(null,seq__6795_6799);if(temp__4126__auto___6808)
{var seq__6795_6809__$1 = temp__4126__auto___6808;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6795_6809__$1))
{var c__4315__auto___6810 = cljs.core.chunk_first.call(null,seq__6795_6809__$1);{
var G__6811 = cljs.core.chunk_rest.call(null,seq__6795_6809__$1);
var G__6812 = c__4315__auto___6810;
var G__6813 = cljs.core.count.call(null,c__4315__auto___6810);
var G__6814 = (0);
seq__6795_6799 = G__6811;
chunk__6796_6800 = G__6812;
count__6797_6801 = G__6813;
i__6798_6802 = G__6814;
continue;
}
} else
{var node_6815 = cljs.core.first.call(null,seq__6795_6809__$1);goog.dom.setTextContent(node_6815,value);
{
var G__6816 = cljs.core.next.call(null,seq__6795_6809__$1);
var G__6817 = null;
var G__6818 = (0);
var G__6819 = (0);
seq__6795_6799 = G__6816;
chunk__6796_6800 = G__6817;
count__6797_6801 = G__6818;
i__6798_6802 = G__6819;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the value of a node (presumably a form field). Assumes content is a single node.
*/
domina.value = (function value(content){return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
* Sets the value of all the nodes (presumably form fields) in the given content.
*/
domina.set_value_BANG_ = (function set_value_BANG_(content,value){var seq__6824_6828 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6825_6829 = null;var count__6826_6830 = (0);var i__6827_6831 = (0);while(true){
if((i__6827_6831 < count__6826_6830))
{var node_6832 = cljs.core._nth.call(null,chunk__6825_6829,i__6827_6831);goog.dom.forms.setValue(node_6832,value);
{
var G__6833 = seq__6824_6828;
var G__6834 = chunk__6825_6829;
var G__6835 = count__6826_6830;
var G__6836 = (i__6827_6831 + (1));
seq__6824_6828 = G__6833;
chunk__6825_6829 = G__6834;
count__6826_6830 = G__6835;
i__6827_6831 = G__6836;
continue;
}
} else
{var temp__4126__auto___6837 = cljs.core.seq.call(null,seq__6824_6828);if(temp__4126__auto___6837)
{var seq__6824_6838__$1 = temp__4126__auto___6837;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6824_6838__$1))
{var c__4315__auto___6839 = cljs.core.chunk_first.call(null,seq__6824_6838__$1);{
var G__6840 = cljs.core.chunk_rest.call(null,seq__6824_6838__$1);
var G__6841 = c__4315__auto___6839;
var G__6842 = cljs.core.count.call(null,c__4315__auto___6839);
var G__6843 = (0);
seq__6824_6828 = G__6840;
chunk__6825_6829 = G__6841;
count__6826_6830 = G__6842;
i__6827_6831 = G__6843;
continue;
}
} else
{var node_6844 = cljs.core.first.call(null,seq__6824_6838__$1);goog.dom.forms.setValue(node_6844,value);
{
var G__6845 = cljs.core.next.call(null,seq__6824_6838__$1);
var G__6846 = null;
var G__6847 = (0);
var G__6848 = (0);
seq__6824_6828 = G__6845;
chunk__6825_6829 = G__6846;
count__6826_6830 = G__6847;
i__6827_6831 = G__6848;
continue;
}
}
} else
{}
}
break;
}
return content;
});
/**
* Returns the innerHTML of a node. Assumes content is a single node.
*/
domina.html = (function html(content){return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function replace_children_BANG_(content,inner_content){return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function set_inner_html_BANG_(content,html_string){var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);var tag_name = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))).toLowerCase();var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);if(cljs.core.truth_((function (){var and__3547__auto__ = allows_inner_html_QMARK_;if(and__3547__auto__)
{var and__3547__auto____$1 = (function (){var or__3559__auto__ = domina.support.leading_whitespace_QMARK_;if(cljs.core.truth_(or__3559__auto__))
{return or__3559__auto__;
} else
{return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();if(cljs.core.truth_(and__3547__auto____$1))
{return !(special_tag_QMARK_);
} else
{return and__3547__auto____$1;
}
} else
{return and__3547__auto__;
}
})()))
{var value_6859 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");try{var seq__6855_6860 = cljs.core.seq.call(null,domina.nodes.call(null,content));var chunk__6856_6861 = null;var count__6857_6862 = (0);var i__6858_6863 = (0);while(true){
if((i__6858_6863 < count__6857_6862))
{var node_6864 = cljs.core._nth.call(null,chunk__6856_6861,i__6858_6863);node_6864.innerHTML = value_6859;
{
var G__6865 = seq__6855_6860;
var G__6866 = chunk__6856_6861;
var G__6867 = count__6857_6862;
var G__6868 = (i__6858_6863 + (1));
seq__6855_6860 = G__6865;
chunk__6856_6861 = G__6866;
count__6857_6862 = G__6867;
i__6858_6863 = G__6868;
continue;
}
} else
{var temp__4126__auto___6869 = cljs.core.seq.call(null,seq__6855_6860);if(temp__4126__auto___6869)
{var seq__6855_6870__$1 = temp__4126__auto___6869;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6855_6870__$1))
{var c__4315__auto___6871 = cljs.core.chunk_first.call(null,seq__6855_6870__$1);{
var G__6872 = cljs.core.chunk_rest.call(null,seq__6855_6870__$1);
var G__6873 = c__4315__auto___6871;
var G__6874 = cljs.core.count.call(null,c__4315__auto___6871);
var G__6875 = (0);
seq__6855_6860 = G__6872;
chunk__6856_6861 = G__6873;
count__6857_6862 = G__6874;
i__6858_6863 = G__6875;
continue;
}
} else
{var node_6876 = cljs.core.first.call(null,seq__6855_6870__$1);node_6876.innerHTML = value_6859;
{
var G__6877 = cljs.core.next.call(null,seq__6855_6870__$1);
var G__6878 = null;
var G__6879 = (0);
var G__6880 = (0);
seq__6855_6860 = G__6877;
chunk__6856_6861 = G__6878;
count__6857_6862 = G__6879;
i__6858_6863 = G__6880;
continue;
}
}
} else
{}
}
break;
}
}catch (e6854){if((e6854 instanceof Error))
{var e_6881 = e6854;domina.replace_children_BANG_.call(null,content,value_6859);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{throw e6854;
} else
{}
}
}} else
{domina.replace_children_BANG_.call(null,content,html_string);
}
return content;
});
/**
* Sets the innerHTML value for all the nodes in the given content.
*/
domina.set_html_BANG_ = (function set_html_BANG_(content,inner_content){if(typeof inner_content === 'string')
{return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else
{return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
* Returns data associated with a node for a given key. Assumes
* content is a single node. If the bubble parameter is set to true,
* will search parent nodes if the key is not found.
*/
domina.get_data = (function() {
var get_data = null;
var get_data__2 = (function (node,key){return get_data.call(null,node,key,false);
});
var get_data__3 = (function (node,key,bubble){var m = domina.single_node.call(null,node).__domina_data;var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);if(cljs.core.truth_((function (){var and__3547__auto__ = bubble;if(cljs.core.truth_(and__3547__auto__))
{return (value == null);
} else
{return and__3547__auto__;
}
})()))
{var temp__4126__auto__ = domina.single_node.call(null,node).parentNode;if(cljs.core.truth_(temp__4126__auto__))
{var parent = temp__4126__auto__;return get_data.call(null,parent,key,true);
} else
{return null;
}
} else
{return value;
}
});
get_data = function(node,key,bubble){
switch(arguments.length){
case 2:
return get_data__2.call(this,node,key);
case 3:
return get_data__3.call(this,node,key,bubble);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
get_data.cljs$core$IFn$_invoke$arity$2 = get_data__2;
get_data.cljs$core$IFn$_invoke$arity$3 = get_data__3;
return get_data;
})()
;
/**
* Sets a data on the node for a given key. Assumes content is a
* single node. Data should be ClojureScript values and data structures
* only; using other objects as data may result in memory leaks on some
* browsers.
*/
domina.set_data_BANG_ = (function set_data_BANG_(node,key,value){var m = (function (){var or__3559__auto__ = domina.single_node.call(null,node).__domina_data;if(cljs.core.truth_(or__3559__auto__))
{return or__3559__auto__;
} else
{return cljs.core.PersistentArrayMap.EMPTY;
}
})();return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
* Takes a two-arg function, a reference DomContent and new
* DomContent. Applies the function for each reference / content
* combination. Uses clones of the new content for each additional
* parent after the first.
*/
domina.apply_with_cloning = (function apply_with_cloning(f,parent_content,child_content){var parents = domina.nodes.call(null,parent_content);var children = domina.nodes.call(null,child_content);var first_child = (function (){var frag = document.createDocumentFragment();var seq__6888_6892 = cljs.core.seq.call(null,children);var chunk__6889_6893 = null;var count__6890_6894 = (0);var i__6891_6895 = (0);while(true){
if((i__6891_6895 < count__6890_6894))
{var child_6896 = cljs.core._nth.call(null,chunk__6889_6893,i__6891_6895);frag.appendChild(child_6896);
{
var G__6897 = seq__6888_6892;
var G__6898 = chunk__6889_6893;
var G__6899 = count__6890_6894;
var G__6900 = (i__6891_6895 + (1));
seq__6888_6892 = G__6897;
chunk__6889_6893 = G__6898;
count__6890_6894 = G__6899;
i__6891_6895 = G__6900;
continue;
}
} else
{var temp__4126__auto___6901 = cljs.core.seq.call(null,seq__6888_6892);if(temp__4126__auto___6901)
{var seq__6888_6902__$1 = temp__4126__auto___6901;if(cljs.core.chunked_seq_QMARK_.call(null,seq__6888_6902__$1))
{var c__4315__auto___6903 = cljs.core.chunk_first.call(null,seq__6888_6902__$1);{
var G__6904 = cljs.core.chunk_rest.call(null,seq__6888_6902__$1);
var G__6905 = c__4315__auto___6903;
var G__6906 = cljs.core.count.call(null,c__4315__auto___6903);
var G__6907 = (0);
seq__6888_6892 = G__6904;
chunk__6889_6893 = G__6905;
count__6890_6894 = G__6906;
i__6891_6895 = G__6907;
continue;
}
} else
{var child_6908 = cljs.core.first.call(null,seq__6888_6902__$1);frag.appendChild(child_6908);
{
var G__6909 = cljs.core.next.call(null,seq__6888_6902__$1);
var G__6910 = null;
var G__6911 = (0);
var G__6912 = (0);
seq__6888_6892 = G__6909;
chunk__6889_6893 = G__6910;
count__6890_6894 = G__6911;
i__6891_6895 = G__6912;
continue;
}
}
} else
{}
}
break;
}
return frag;
})();var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){return first_child.cloneNode(true);
});})(parents,children,first_child))
));if(cljs.core.seq.call(null,parents))
{f.call(null,cljs.core.first.call(null,parents),first_child);
return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__6882_SHARP_,p2__6883_SHARP_){return f.call(null,p1__6882_SHARP_,p2__6883_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else
{return null;
}
});
domina.lazy_nl_via_item = (function() {
var lazy_nl_via_item = null;
var lazy_nl_via_item__1 = (function (nl){return lazy_nl_via_item.call(null,nl,(0));
});
var lazy_nl_via_item__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,nl.item(n),lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_item = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_item__1.call(this,nl);
case 2:
return lazy_nl_via_item__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_item__1;
lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_item__2;
return lazy_nl_via_item;
})()
;
domina.lazy_nl_via_array_ref = (function() {
var lazy_nl_via_array_ref = null;
var lazy_nl_via_array_ref__1 = (function (nl){return lazy_nl_via_array_ref.call(null,nl,(0));
});
var lazy_nl_via_array_ref__2 = (function (nl,n){if((n < nl.length))
{return (new cljs.core.LazySeq(null,(function (){return cljs.core.cons.call(null,(nl[n]),lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else
{return null;
}
});
lazy_nl_via_array_ref = function(nl,n){
switch(arguments.length){
case 1:
return lazy_nl_via_array_ref__1.call(this,nl);
case 2:
return lazy_nl_via_array_ref__2.call(this,nl,n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = lazy_nl_via_array_ref__1;
lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = lazy_nl_via_array_ref__2;
return lazy_nl_via_array_ref;
})()
;
/**
* A lazy seq view of a js/NodeList, or other array-like javascript things
*/
domina.lazy_nodelist = (function lazy_nodelist(nl){if(cljs.core.truth_(nl.item))
{return domina.lazy_nl_via_item.call(null,nl);
} else
{return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function array_like_QMARK_(obj){var and__3547__auto__ = obj;if(cljs.core.truth_(and__3547__auto__))
{var and__3547__auto____$1 = cljs.core.not.call(null,obj.nodeName);if(and__3547__auto____$1)
{return obj.length;
} else
{return and__3547__auto____$1;
}
} else
{return and__3547__auto__;
}
});
/**
* Some versions of IE have things that are like arrays in that they
* respond to .length, but are not arrays nor NodeSets. This returns a
* real sequence view of such objects. If passed an object that is not
* a logical sequence at all, returns a single-item seq containing the
* object.
*/
domina.normalize_seq = (function normalize_seq(list_thing){if((list_thing == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__6914 = list_thing;if(G__6914)
{var bit__4209__auto__ = (G__6914.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4209__auto__) || (G__6914.cljs$core$ISeqable$))
{return true;
} else
{if((!G__6914.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__6914);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__6914);
}
})())
{return cljs.core.seq.call(null,list_thing);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing)))
{return domina.lazy_nodelist.call(null,list_thing);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));
} else
{return null;
}
}
}
}
});
(domina.DomContent["_"] = true);
(domina.nodes["_"] = (function (content){if((content == null))
{return cljs.core.List.EMPTY;
} else
{if((function (){var G__6915 = content;if(G__6915)
{var bit__4209__auto__ = (G__6915.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4209__auto__) || (G__6915.cljs$core$ISeqable$))
{return true;
} else
{if((!G__6915.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__6915);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__6915);
}
})())
{return cljs.core.seq.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return domina.lazy_nodelist.call(null,content);
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));
} else
{return null;
}
}
}
}
}));
(domina.single_node["_"] = (function (content){if((content == null))
{return null;
} else
{if((function (){var G__6916 = content;if(G__6916)
{var bit__4209__auto__ = (G__6916.cljs$lang$protocol_mask$partition0$ & (8388608));if((bit__4209__auto__) || (G__6916.cljs$core$ISeqable$))
{return true;
} else
{if((!G__6916.cljs$lang$protocol_mask$partition0$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__6916);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,G__6916);
}
})())
{return cljs.core.first.call(null,content);
} else
{if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content)))
{return content.item((0));
} else
{if(new cljs.core.Keyword(null,"default","default",-1987822328))
{return content;
} else
{return null;
}
}
}
}
}));
(domina.DomContent["string"] = true);
(domina.nodes["string"] = (function (s){return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));
(domina.single_node["string"] = (function (s){return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));
if(cljs.core.truth_((typeof NodeList != 'undefined')))
{NodeList.prototype.cljs$core$ISeqable$ = true;
NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
NodeList.prototype.cljs$core$IIndexed$ = true;
NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
NodeList.prototype.cljs$core$ICounted$ = true;
NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined')))
{StaticNodeList.prototype.cljs$core$ISeqable$ = true;
StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){var nodelist__$1 = this;return domina.lazy_nodelist.call(null,nodelist__$1);
});
StaticNodeList.prototype.cljs$core$IIndexed$ = true;
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){var nodelist__$1 = this;return nodelist__$1.item(n);
});
StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){var nodelist__$1 = this;if((nodelist__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,nodelist__$1,n);
}
});
StaticNodeList.prototype.cljs$core$ICounted$ = true;
StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){var nodelist__$1 = this;return nodelist__$1.length;
});
} else
{}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined')))
{HTMLCollection.prototype.cljs$core$ISeqable$ = true;
HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){var coll__$1 = this;return domina.lazy_nodelist.call(null,coll__$1);
});
HTMLCollection.prototype.cljs$core$IIndexed$ = true;
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){var coll__$1 = this;return coll__$1.item(n);
});
HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){var coll__$1 = this;if((coll__$1.length <= n))
{return not_found;
} else
{return cljs.core.nth.call(null,coll__$1,n);
}
});
HTMLCollection.prototype.cljs$core$ICounted$ = true;
HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){var coll__$1 = this;return coll__$1.length;
});
} else
{}
