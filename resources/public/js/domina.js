// Compiled by ClojureScript 1.7.48 {}
goog.provide('domina');
goog.require('cljs.core');
goog.require('goog.dom.forms');
goog.require('goog.dom');
goog.require('goog.dom.classes');
goog.require('goog.dom.xml');
goog.require('goog.string');
goog.require('cljs.core');
goog.require('domina.support');
goog.require('goog.events');
goog.require('goog.style');
goog.require('clojure.string');
domina.re_html = /<|&#?\w+;/;
domina.re_leading_whitespace = /^\s+/;
domina.re_xhtml_tag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/i;
domina.re_tag_name = /<([\w:]+)/;
domina.re_no_inner_html = /<(?:script|style)/i;
domina.re_tbody = /<tbody/i;
var opt_wrapper_6743 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<select multiple='multiple'>","</select>"], null);
var table_section_wrapper_6744 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<table>","</table>"], null);
var cell_wrapper_6745 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),"<table><tbody><tr>","</tr></tbody></table>"], null);
domina.wrap_map = cljs.core.PersistentHashMap.fromArrays(["td","optgroup","tfoot","tr","area",new cljs.core.Keyword(null,"default","default",-1987822328),"option","legend","thead","col","caption","th","colgroup","tbody"],[cell_wrapper_6745,opt_wrapper_6743,table_section_wrapper_6744,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody>","</tbody></table>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<map>","</map>"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),"",""], null),opt_wrapper_6743,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),"<fieldset>","</fieldset>"], null),table_section_wrapper_6744,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),"<table><tbody></tbody><colgroup>","</colgroup></table>"], null),table_section_wrapper_6744,cell_wrapper_6745,table_section_wrapper_6744,table_section_wrapper_6744]);
domina.remove_extraneous_tbody_BANG_ = (function domina$remove_extraneous_tbody_BANG_(div,html,tag_name,start_wrap){
var no_tbody_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_tbody,html));
var tbody = (((cljs.core._EQ_.call(null,tag_name,"table")) && (no_tbody_QMARK_))?(function (){var and__4514__auto__ = div.firstChild;
if(cljs.core.truth_(and__4514__auto__)){
return div.firstChild.childNodes;
} else {
return and__4514__auto__;
}
})():(((cljs.core._EQ_.call(null,start_wrap,"<table>")) && (no_tbody_QMARK_))?div.childNodes:cljs.core.PersistentVector.EMPTY));
var seq__6750 = cljs.core.seq.call(null,tbody);
var chunk__6751 = null;
var count__6752 = (0);
var i__6753 = (0);
while(true){
if((i__6753 < count__6752)){
var child = cljs.core._nth.call(null,chunk__6751,i__6753);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__6754 = seq__6750;
var G__6755 = chunk__6751;
var G__6756 = count__6752;
var G__6757 = (i__6753 + (1));
seq__6750 = G__6754;
chunk__6751 = G__6755;
count__6752 = G__6756;
i__6753 = G__6757;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__6750);
if(temp__4425__auto__){
var seq__6750__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6750__$1)){
var c__5310__auto__ = cljs.core.chunk_first.call(null,seq__6750__$1);
var G__6758 = cljs.core.chunk_rest.call(null,seq__6750__$1);
var G__6759 = c__5310__auto__;
var G__6760 = cljs.core.count.call(null,c__5310__auto__);
var G__6761 = (0);
seq__6750 = G__6758;
chunk__6751 = G__6759;
count__6752 = G__6760;
i__6753 = G__6761;
continue;
} else {
var child = cljs.core.first.call(null,seq__6750__$1);
if((cljs.core._EQ_.call(null,child.nodeName,"tbody")) && (cljs.core._EQ_.call(null,child.childNodes.length,(0)))){
child.parentNode.removeChild(child);
} else {
}

var G__6762 = cljs.core.next.call(null,seq__6750__$1);
var G__6763 = null;
var G__6764 = (0);
var G__6765 = (0);
seq__6750 = G__6762;
chunk__6751 = G__6763;
count__6752 = G__6764;
i__6753 = G__6765;
continue;
}
} else {
return null;
}
}
break;
}
});
domina.restore_leading_whitespace_BANG_ = (function domina$restore_leading_whitespace_BANG_(div,html){
return div.insertBefore(document.createTextNode(cljs.core.first.call(null,cljs.core.re_find.call(null,domina.re_leading_whitespace,html))),div.firstChild);
});
/**
 * takes an string of html and returns a NodeList of dom fragments
 */
domina.html_to_dom = (function domina$html_to_dom(html){
var html__$1 = clojure.string.replace.call(null,html,domina.re_xhtml_tag,"<$1></$2>");
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html__$1)))].join('').toLowerCase();
var vec__6767 = cljs.core.get.call(null,domina.wrap_map,tag_name,new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(domina.wrap_map));
var depth = cljs.core.nth.call(null,vec__6767,(0),null);
var start_wrap = cljs.core.nth.call(null,vec__6767,(1),null);
var end_wrap = cljs.core.nth.call(null,vec__6767,(2),null);
var div = (function (){var wrapper = (function (){var div = document.createElement("div");
div.innerHTML = [cljs.core.str(start_wrap),cljs.core.str(html__$1),cljs.core.str(end_wrap)].join('');

return div;
})();
var level = depth;
while(true){
if((level > (0))){
var G__6768 = wrapper.lastChild;
var G__6769 = (level - (1));
wrapper = G__6768;
level = G__6769;
continue;
} else {
return wrapper;
}
break;
}
})();
if(cljs.core.truth_(domina.support.extraneous_tbody_QMARK_)){
domina.remove_extraneous_tbody_BANG_.call(null,div,html__$1,tag_name,start_wrap);
} else {
}

if(cljs.core.truth_((function (){var and__4514__auto__ = cljs.core.not.call(null,domina.support.leading_whitespace_QMARK_);
if(and__4514__auto__){
return cljs.core.re_find.call(null,domina.re_leading_whitespace,html__$1);
} else {
return and__4514__auto__;
}
})())){
domina.restore_leading_whitespace_BANG_.call(null,div,html__$1);
} else {
}

return div.childNodes;
});
domina.string_to_dom = (function domina$string_to_dom(s){
if(cljs.core.truth_(cljs.core.re_find.call(null,domina.re_html,s))){
return domina.html_to_dom.call(null,s);
} else {
return document.createTextNode(s);
}
});

domina.DomContent = {};

/**
 * Returns the content as a sequence of nodes.
 */
domina.nodes = (function domina$nodes(content){
if((!((content == null))) && (!((content.domina$DomContent$nodes$arity$1 == null)))){
return content.domina$DomContent$nodes$arity$1(content);
} else {
var x__5162__auto__ = (((content == null))?null:content);
var m__5163__auto__ = (domina.nodes[goog.typeOf(x__5162__auto__)]);
if(!((m__5163__auto__ == null))){
return m__5163__auto__.call(null,content);
} else {
var m__5163__auto____$1 = (domina.nodes["_"]);
if(!((m__5163__auto____$1 == null))){
return m__5163__auto____$1.call(null,content);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.nodes",content);
}
}
}
});

/**
 * Returns the content as a single node (the first node, if the content contains more than one
 */
domina.single_node = (function domina$single_node(nodeseq){
if((!((nodeseq == null))) && (!((nodeseq.domina$DomContent$single_node$arity$1 == null)))){
return nodeseq.domina$DomContent$single_node$arity$1(nodeseq);
} else {
var x__5162__auto__ = (((nodeseq == null))?null:nodeseq);
var m__5163__auto__ = (domina.single_node[goog.typeOf(x__5162__auto__)]);
if(!((m__5163__auto__ == null))){
return m__5163__auto__.call(null,nodeseq);
} else {
var m__5163__auto____$1 = (domina.single_node["_"]);
if(!((m__5163__auto____$1 == null))){
return m__5163__auto____$1.call(null,nodeseq);
} else {
throw cljs.core.missing_protocol.call(null,"DomContent.single-node",nodeseq);
}
}
}
});

domina._STAR_debug_STAR_ = true;
domina.log_debug = (function domina$log_debug(){
var args__5572__auto__ = [];
var len__5565__auto___6773 = arguments.length;
var i__5566__auto___6774 = (0);
while(true){
if((i__5566__auto___6774 < len__5565__auto___6773)){
args__5572__auto__.push((arguments[i__5566__auto___6774]));

var G__6775 = (i__5566__auto___6774 + (1));
i__5566__auto___6774 = G__6775;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((0) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((0)),(0))):null);
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(argseq__5573__auto__);
});

domina.log_debug.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_((function (){var and__4514__auto__ = domina._STAR_debug_STAR_;
if(cljs.core.truth_(and__4514__auto__)){
return !(cljs.core._EQ_.call(null,window.console,undefined));
} else {
return and__4514__auto__;
}
})())){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log_debug.cljs$lang$maxFixedArity = (0);

domina.log_debug.cljs$lang$applyTo = (function (seq6772){
return domina.log_debug.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6772));
});
domina.log = (function domina$log(){
var args__5572__auto__ = [];
var len__5565__auto___6777 = arguments.length;
var i__5566__auto___6778 = (0);
while(true){
if((i__5566__auto___6778 < len__5565__auto___6777)){
args__5572__auto__.push((arguments[i__5566__auto___6778]));

var G__6779 = (i__5566__auto___6778 + (1));
i__5566__auto___6778 = G__6779;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((0) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((0)),(0))):null);
return domina.log.cljs$core$IFn$_invoke$arity$variadic(argseq__5573__auto__);
});

domina.log.cljs$core$IFn$_invoke$arity$variadic = (function (mesg){
if(cljs.core.truth_(window.console)){
return console.log(cljs.core.apply.call(null,cljs.core.str,mesg));
} else {
return null;
}
});

domina.log.cljs$lang$maxFixedArity = (0);

domina.log.cljs$lang$applyTo = (function (seq6776){
return domina.log.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6776));
});
/**
 * Returns content containing a single node by looking up the given ID
 */
domina.by_id = (function domina$by_id(id){
return goog.dom.getElement(cljs.core.name.call(null,id));
});
/**
 * Returns content containing nodes which have the specified CSS class.
 */
domina.by_class = (function domina$by_class(class_name){
return domina.normalize_seq.call(null,goog.dom.getElementsByClass(cljs.core.name.call(null,class_name)));
});
/**
 * Gets all the child nodes of the elements in a content. Same as (xpath content '*') but more efficient.
 */
domina.children = (function domina$children(content){
return cljs.core.doall.call(null,cljs.core.mapcat.call(null,goog.dom.getChildren,domina.nodes.call(null,content)));
});
/**
 * Returns the deepest common ancestor of the argument contents (which are presumed to be single nodes), or nil if they are from different documents.
 */
domina.common_ancestor = (function domina$common_ancestor(){
var args__5572__auto__ = [];
var len__5565__auto___6781 = arguments.length;
var i__5566__auto___6782 = (0);
while(true){
if((i__5566__auto___6782 < len__5565__auto___6781)){
args__5572__auto__.push((arguments[i__5566__auto___6782]));

var G__6783 = (i__5566__auto___6782 + (1));
i__5566__auto___6782 = G__6783;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((0) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((0)),(0))):null);
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(argseq__5573__auto__);
});

domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return cljs.core.apply.call(null,goog.dom.findCommonAncestor,cljs.core.map.call(null,domina.single_node,contents));
});

domina.common_ancestor.cljs$lang$maxFixedArity = (0);

domina.common_ancestor.cljs$lang$applyTo = (function (seq6780){
return domina.common_ancestor.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq6780));
});
/**
 * Returns true if the first argument is an ancestor of the second argument. Presumes both arguments are single-node contents.
 */
domina.ancestor_QMARK_ = (function domina$ancestor_QMARK_(ancestor_content,descendant_content){
return cljs.core._EQ_.call(null,domina.common_ancestor.call(null,ancestor_content,descendant_content),domina.single_node.call(null,ancestor_content));
});
/**
 * Returns a deep clone of content.
 */
domina.clone = (function domina$clone(content){
return cljs.core.map.call(null,(function (p1__6784_SHARP_){
return p1__6784_SHARP_.cloneNode(true);
}),domina.nodes.call(null,content));
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.append_BANG_ = (function domina$append_BANG_(parent_content,child_content){
domina.apply_with_cloning.call(null,goog.dom.appendChild,parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, appends each of the children to all of the parents at the specified index. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.insert_BANG_ = (function domina$insert_BANG_(parent_content,child_content,idx){
domina.apply_with_cloning.call(null,(function (p1__6785_SHARP_,p2__6786_SHARP_){
return goog.dom.insertChildAt(p1__6785_SHARP_,p2__6786_SHARP_,idx);
}),parent_content,child_content);

return parent_content;
});
/**
 * Given a parent and child contents, prepends each of the children to all of the parents. If there is more than one node in the parent content, clones the children for the additional parents. Returns the parent content.
 */
domina.prepend_BANG_ = (function domina$prepend_BANG_(parent_content,child_content){
domina.insert_BANG_.call(null,parent_content,child_content,(0));

return parent_content;
});
/**
 * Given a content and some new content, inserts the new content immediately before the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_before_BANG_ = (function domina$insert_before_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__6788_SHARP_,p2__6787_SHARP_){
return goog.dom.insertSiblingBefore(p2__6787_SHARP_,p1__6788_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given a content and some new content, inserts the new content immediately after the reference content. If there is more than one node in the reference content, clones the new content for each one.
 */
domina.insert_after_BANG_ = (function domina$insert_after_BANG_(content,new_content){
domina.apply_with_cloning.call(null,(function (p1__6790_SHARP_,p2__6789_SHARP_){
return goog.dom.insertSiblingAfter(p2__6789_SHARP_,p1__6790_SHARP_);
}),content,new_content);

return content;
});
/**
 * Given some old content and some new content, replaces the old content with new content. If there are multiple nodes in the old content, replaces each of them and clones the new content as necessary.
 */
domina.swap_content_BANG_ = (function domina$swap_content_BANG_(old_content,new_content){
domina.apply_with_cloning.call(null,(function (p1__6792_SHARP_,p2__6791_SHARP_){
return goog.dom.replaceNode(p2__6791_SHARP_,p1__6792_SHARP_);
}),old_content,new_content);

return old_content;
});
/**
 * Removes all the nodes in a content from the DOM and returns them.
 */
domina.detach_BANG_ = (function domina$detach_BANG_(content){
return cljs.core.doall.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the nodes in a content from the DOM. Returns nil.
 */
domina.destroy_BANG_ = (function domina$destroy_BANG_(content){
return cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeNode,domina.nodes.call(null,content)));
});
/**
 * Removes all the child nodes in a content from the DOM. Returns the original content.
 */
domina.destroy_children_BANG_ = (function domina$destroy_children_BANG_(content){
cljs.core.dorun.call(null,cljs.core.map.call(null,goog.dom.removeChildren,domina.nodes.call(null,content)));

return content;
});
/**
 * Gets the value of a CSS property. Assumes content will be a single node. Name may be a string or keyword. Returns nil if there is no value set for the style.
 */
domina.style = (function domina$style(content,name){
var s = goog.style.getStyle(domina.single_node.call(null,content),cljs.core.name.call(null,name));
if(cljs.core.truth_(clojure.string.blank_QMARK_.call(null,s))){
return null;
} else {
return s;
}
});
/**
 * Gets the value of an HTML attribute. Assumes content will be a single node. Name may be a stirng or keyword. Returns nil if there is no value set for the style.
 */
domina.attr = (function domina$attr(content,name){
return domina.single_node.call(null,content).getAttribute(cljs.core.name.call(null,name));
});
/**
 * Sets the value of a CSS property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_style_BANG_ = (function domina$set_style_BANG_(){
var args__5572__auto__ = [];
var len__5565__auto___6800 = arguments.length;
var i__5566__auto___6801 = (0);
while(true){
if((i__5566__auto___6801 < len__5565__auto___6800)){
args__5572__auto__.push((arguments[i__5566__auto___6801]));

var G__6802 = (i__5566__auto___6801 + (1));
i__5566__auto___6801 = G__6802;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((2) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((2)),(0))):null);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5573__auto__);
});

domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__6796_6803 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6797_6804 = null;
var count__6798_6805 = (0);
var i__6799_6806 = (0);
while(true){
if((i__6799_6806 < count__6798_6805)){
var n_6807 = cljs.core._nth.call(null,chunk__6797_6804,i__6799_6806);
goog.style.setStyle(n_6807,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__6808 = seq__6796_6803;
var G__6809 = chunk__6797_6804;
var G__6810 = count__6798_6805;
var G__6811 = (i__6799_6806 + (1));
seq__6796_6803 = G__6808;
chunk__6797_6804 = G__6809;
count__6798_6805 = G__6810;
i__6799_6806 = G__6811;
continue;
} else {
var temp__4425__auto___6812 = cljs.core.seq.call(null,seq__6796_6803);
if(temp__4425__auto___6812){
var seq__6796_6813__$1 = temp__4425__auto___6812;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6796_6813__$1)){
var c__5310__auto___6814 = cljs.core.chunk_first.call(null,seq__6796_6813__$1);
var G__6815 = cljs.core.chunk_rest.call(null,seq__6796_6813__$1);
var G__6816 = c__5310__auto___6814;
var G__6817 = cljs.core.count.call(null,c__5310__auto___6814);
var G__6818 = (0);
seq__6796_6803 = G__6815;
chunk__6797_6804 = G__6816;
count__6798_6805 = G__6817;
i__6799_6806 = G__6818;
continue;
} else {
var n_6819 = cljs.core.first.call(null,seq__6796_6813__$1);
goog.style.setStyle(n_6819,cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__6820 = cljs.core.next.call(null,seq__6796_6813__$1);
var G__6821 = null;
var G__6822 = (0);
var G__6823 = (0);
seq__6796_6803 = G__6820;
chunk__6797_6804 = G__6821;
count__6798_6805 = G__6822;
i__6799_6806 = G__6823;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.set_style_BANG_.cljs$lang$maxFixedArity = (2);

domina.set_style_BANG_.cljs$lang$applyTo = (function (seq6793){
var G__6794 = cljs.core.first.call(null,seq6793);
var seq6793__$1 = cljs.core.next.call(null,seq6793);
var G__6795 = cljs.core.first.call(null,seq6793__$1);
var seq6793__$2 = cljs.core.next.call(null,seq6793__$1);
return domina.set_style_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6794,G__6795,seq6793__$2);
});
/**
 * Sets the value of an HTML property for each node in the content. Name may be a string or keyword. Value will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attr_BANG_ = (function domina$set_attr_BANG_(){
var args__5572__auto__ = [];
var len__5565__auto___6831 = arguments.length;
var i__5566__auto___6832 = (0);
while(true){
if((i__5566__auto___6832 < len__5565__auto___6831)){
args__5572__auto__.push((arguments[i__5566__auto___6832]));

var G__6833 = (i__5566__auto___6832 + (1));
i__5566__auto___6832 = G__6833;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((2) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((2)),(0))):null);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5573__auto__);
});

domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (content,name,value){
var seq__6827_6834 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6828_6835 = null;
var count__6829_6836 = (0);
var i__6830_6837 = (0);
while(true){
if((i__6830_6837 < count__6829_6836)){
var n_6838 = cljs.core._nth.call(null,chunk__6828_6835,i__6830_6837);
n_6838.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__6839 = seq__6827_6834;
var G__6840 = chunk__6828_6835;
var G__6841 = count__6829_6836;
var G__6842 = (i__6830_6837 + (1));
seq__6827_6834 = G__6839;
chunk__6828_6835 = G__6840;
count__6829_6836 = G__6841;
i__6830_6837 = G__6842;
continue;
} else {
var temp__4425__auto___6843 = cljs.core.seq.call(null,seq__6827_6834);
if(temp__4425__auto___6843){
var seq__6827_6844__$1 = temp__4425__auto___6843;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6827_6844__$1)){
var c__5310__auto___6845 = cljs.core.chunk_first.call(null,seq__6827_6844__$1);
var G__6846 = cljs.core.chunk_rest.call(null,seq__6827_6844__$1);
var G__6847 = c__5310__auto___6845;
var G__6848 = cljs.core.count.call(null,c__5310__auto___6845);
var G__6849 = (0);
seq__6827_6834 = G__6846;
chunk__6828_6835 = G__6847;
count__6829_6836 = G__6848;
i__6830_6837 = G__6849;
continue;
} else {
var n_6850 = cljs.core.first.call(null,seq__6827_6844__$1);
n_6850.setAttribute(cljs.core.name.call(null,name),cljs.core.apply.call(null,cljs.core.str,value));

var G__6851 = cljs.core.next.call(null,seq__6827_6844__$1);
var G__6852 = null;
var G__6853 = (0);
var G__6854 = (0);
seq__6827_6834 = G__6851;
chunk__6828_6835 = G__6852;
count__6829_6836 = G__6853;
i__6830_6837 = G__6854;
continue;
}
} else {
}
}
break;
}

return content;
});

domina.set_attr_BANG_.cljs$lang$maxFixedArity = (2);

domina.set_attr_BANG_.cljs$lang$applyTo = (function (seq6824){
var G__6825 = cljs.core.first.call(null,seq6824);
var seq6824__$1 = cljs.core.next.call(null,seq6824);
var G__6826 = cljs.core.first.call(null,seq6824__$1);
var seq6824__$2 = cljs.core.next.call(null,seq6824__$1);
return domina.set_attr_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__6825,G__6826,seq6824__$2);
});
/**
 * Removes the specified HTML property for each node in the content. Name may be a string or keyword.
 */
domina.remove_attr_BANG_ = (function domina$remove_attr_BANG_(content,name){
var seq__6859_6863 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6860_6864 = null;
var count__6861_6865 = (0);
var i__6862_6866 = (0);
while(true){
if((i__6862_6866 < count__6861_6865)){
var n_6867 = cljs.core._nth.call(null,chunk__6860_6864,i__6862_6866);
n_6867.removeAttribute(cljs.core.name.call(null,name));

var G__6868 = seq__6859_6863;
var G__6869 = chunk__6860_6864;
var G__6870 = count__6861_6865;
var G__6871 = (i__6862_6866 + (1));
seq__6859_6863 = G__6868;
chunk__6860_6864 = G__6869;
count__6861_6865 = G__6870;
i__6862_6866 = G__6871;
continue;
} else {
var temp__4425__auto___6872 = cljs.core.seq.call(null,seq__6859_6863);
if(temp__4425__auto___6872){
var seq__6859_6873__$1 = temp__4425__auto___6872;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6859_6873__$1)){
var c__5310__auto___6874 = cljs.core.chunk_first.call(null,seq__6859_6873__$1);
var G__6875 = cljs.core.chunk_rest.call(null,seq__6859_6873__$1);
var G__6876 = c__5310__auto___6874;
var G__6877 = cljs.core.count.call(null,c__5310__auto___6874);
var G__6878 = (0);
seq__6859_6863 = G__6875;
chunk__6860_6864 = G__6876;
count__6861_6865 = G__6877;
i__6862_6866 = G__6878;
continue;
} else {
var n_6879 = cljs.core.first.call(null,seq__6859_6873__$1);
n_6879.removeAttribute(cljs.core.name.call(null,name));

var G__6880 = cljs.core.next.call(null,seq__6859_6873__$1);
var G__6881 = null;
var G__6882 = (0);
var G__6883 = (0);
seq__6859_6863 = G__6880;
chunk__6860_6864 = G__6881;
count__6861_6865 = G__6882;
i__6862_6866 = G__6883;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Parses a CSS style string and returns the properties as a map.
 */
domina.parse_style_attributes = (function domina$parse_style_attributes(style){
return cljs.core.reduce.call(null,(function (acc,pair){
var vec__6885 = pair.split(/\s*:\s*/);
var k = cljs.core.nth.call(null,vec__6885,(0),null);
var v = cljs.core.nth.call(null,vec__6885,(1),null);
if(cljs.core.truth_((function (){var and__4514__auto__ = k;
if(cljs.core.truth_(and__4514__auto__)){
return v;
} else {
return and__4514__auto__;
}
})())){
return cljs.core.assoc.call(null,acc,cljs.core.keyword.call(null,k.toLowerCase()),v);
} else {
return acc;
}
}),cljs.core.PersistentArrayMap.EMPTY,style.split(/\s*;\s*/));
});
/**
 * Returns a map of the CSS styles/values. Assumes content will be a single node. Style names are returned as keywords.
 */
domina.styles = (function domina$styles(content){
var style = domina.attr.call(null,content,"style");
if(typeof style === 'string'){
return domina.parse_style_attributes.call(null,style);
} else {
if((style == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
if(cljs.core.truth_(style.cssText)){
return domina.parse_style_attributes.call(null,style.cssText);
} else {
return cljs.core.PersistentArrayMap.EMPTY;

}
}
}
});
/**
 * Returns a map of the HTML attributes/values. Assumes content will be a single node. Attribute names are returned as keywords.
 */
domina.attrs = (function domina$attrs(content){
var node = domina.single_node.call(null,content);
var attrs__$1 = node.attributes;
return cljs.core.reduce.call(null,cljs.core.conj,cljs.core.filter.call(null,cljs.core.complement.call(null,cljs.core.nil_QMARK_),cljs.core.map.call(null,((function (node,attrs__$1){
return (function (p1__6886_SHARP_){
var attr = attrs__$1.item(p1__6886_SHARP_);
var value = attr.nodeValue;
if((cljs.core.not_EQ_.call(null,null,value)) && (cljs.core.not_EQ_.call(null,"",value))){
return new cljs.core.PersistentArrayMap.fromArray([cljs.core.keyword.call(null,attr.nodeName.toLowerCase()),attr.nodeValue], true, false);
} else {
return null;
}
});})(node,attrs__$1))
,cljs.core.range.call(null,attrs__$1.length))));
});
/**
 * Sets the specified CSS styles for each node in the content, given a map of names and values. Style names may be keywords or strings.
 */
domina.set_styles_BANG_ = (function domina$set_styles_BANG_(content,styles){
var seq__6893_6899 = cljs.core.seq.call(null,styles);
var chunk__6894_6900 = null;
var count__6895_6901 = (0);
var i__6896_6902 = (0);
while(true){
if((i__6896_6902 < count__6895_6901)){
var vec__6897_6903 = cljs.core._nth.call(null,chunk__6894_6900,i__6896_6902);
var name_6904 = cljs.core.nth.call(null,vec__6897_6903,(0),null);
var value_6905 = cljs.core.nth.call(null,vec__6897_6903,(1),null);
domina.set_style_BANG_.call(null,content,name_6904,value_6905);

var G__6906 = seq__6893_6899;
var G__6907 = chunk__6894_6900;
var G__6908 = count__6895_6901;
var G__6909 = (i__6896_6902 + (1));
seq__6893_6899 = G__6906;
chunk__6894_6900 = G__6907;
count__6895_6901 = G__6908;
i__6896_6902 = G__6909;
continue;
} else {
var temp__4425__auto___6910 = cljs.core.seq.call(null,seq__6893_6899);
if(temp__4425__auto___6910){
var seq__6893_6911__$1 = temp__4425__auto___6910;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6893_6911__$1)){
var c__5310__auto___6912 = cljs.core.chunk_first.call(null,seq__6893_6911__$1);
var G__6913 = cljs.core.chunk_rest.call(null,seq__6893_6911__$1);
var G__6914 = c__5310__auto___6912;
var G__6915 = cljs.core.count.call(null,c__5310__auto___6912);
var G__6916 = (0);
seq__6893_6899 = G__6913;
chunk__6894_6900 = G__6914;
count__6895_6901 = G__6915;
i__6896_6902 = G__6916;
continue;
} else {
var vec__6898_6917 = cljs.core.first.call(null,seq__6893_6911__$1);
var name_6918 = cljs.core.nth.call(null,vec__6898_6917,(0),null);
var value_6919 = cljs.core.nth.call(null,vec__6898_6917,(1),null);
domina.set_style_BANG_.call(null,content,name_6918,value_6919);

var G__6920 = cljs.core.next.call(null,seq__6893_6911__$1);
var G__6921 = null;
var G__6922 = (0);
var G__6923 = (0);
seq__6893_6899 = G__6920;
chunk__6894_6900 = G__6921;
count__6895_6901 = G__6922;
i__6896_6902 = G__6923;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Sets the specified attributes for each node in the content, given a map of names and values. Names may be a string or keyword. Values will be cast to a string, multiple values wil be concatenated.
 */
domina.set_attrs_BANG_ = (function domina$set_attrs_BANG_(content,attrs){
var seq__6930_6936 = cljs.core.seq.call(null,attrs);
var chunk__6931_6937 = null;
var count__6932_6938 = (0);
var i__6933_6939 = (0);
while(true){
if((i__6933_6939 < count__6932_6938)){
var vec__6934_6940 = cljs.core._nth.call(null,chunk__6931_6937,i__6933_6939);
var name_6941 = cljs.core.nth.call(null,vec__6934_6940,(0),null);
var value_6942 = cljs.core.nth.call(null,vec__6934_6940,(1),null);
domina.set_attr_BANG_.call(null,content,name_6941,value_6942);

var G__6943 = seq__6930_6936;
var G__6944 = chunk__6931_6937;
var G__6945 = count__6932_6938;
var G__6946 = (i__6933_6939 + (1));
seq__6930_6936 = G__6943;
chunk__6931_6937 = G__6944;
count__6932_6938 = G__6945;
i__6933_6939 = G__6946;
continue;
} else {
var temp__4425__auto___6947 = cljs.core.seq.call(null,seq__6930_6936);
if(temp__4425__auto___6947){
var seq__6930_6948__$1 = temp__4425__auto___6947;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6930_6948__$1)){
var c__5310__auto___6949 = cljs.core.chunk_first.call(null,seq__6930_6948__$1);
var G__6950 = cljs.core.chunk_rest.call(null,seq__6930_6948__$1);
var G__6951 = c__5310__auto___6949;
var G__6952 = cljs.core.count.call(null,c__5310__auto___6949);
var G__6953 = (0);
seq__6930_6936 = G__6950;
chunk__6931_6937 = G__6951;
count__6932_6938 = G__6952;
i__6933_6939 = G__6953;
continue;
} else {
var vec__6935_6954 = cljs.core.first.call(null,seq__6930_6948__$1);
var name_6955 = cljs.core.nth.call(null,vec__6935_6954,(0),null);
var value_6956 = cljs.core.nth.call(null,vec__6935_6954,(1),null);
domina.set_attr_BANG_.call(null,content,name_6955,value_6956);

var G__6957 = cljs.core.next.call(null,seq__6930_6948__$1);
var G__6958 = null;
var G__6959 = (0);
var G__6960 = (0);
seq__6930_6936 = G__6957;
chunk__6931_6937 = G__6958;
count__6932_6938 = G__6959;
i__6933_6939 = G__6960;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns true if the node has the specified CSS class. Assumes content is a single node.
 */
domina.has_class_QMARK_ = (function domina$has_class_QMARK_(content,class$){
return goog.dom.classes.has(domina.single_node.call(null,content),class$);
});
/**
 * Adds the specified CSS class to each node in the content.
 */
domina.add_class_BANG_ = (function domina$add_class_BANG_(content,class$){
var seq__6965_6969 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6966_6970 = null;
var count__6967_6971 = (0);
var i__6968_6972 = (0);
while(true){
if((i__6968_6972 < count__6967_6971)){
var node_6973 = cljs.core._nth.call(null,chunk__6966_6970,i__6968_6972);
goog.dom.classes.add(node_6973,class$);

var G__6974 = seq__6965_6969;
var G__6975 = chunk__6966_6970;
var G__6976 = count__6967_6971;
var G__6977 = (i__6968_6972 + (1));
seq__6965_6969 = G__6974;
chunk__6966_6970 = G__6975;
count__6967_6971 = G__6976;
i__6968_6972 = G__6977;
continue;
} else {
var temp__4425__auto___6978 = cljs.core.seq.call(null,seq__6965_6969);
if(temp__4425__auto___6978){
var seq__6965_6979__$1 = temp__4425__auto___6978;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6965_6979__$1)){
var c__5310__auto___6980 = cljs.core.chunk_first.call(null,seq__6965_6979__$1);
var G__6981 = cljs.core.chunk_rest.call(null,seq__6965_6979__$1);
var G__6982 = c__5310__auto___6980;
var G__6983 = cljs.core.count.call(null,c__5310__auto___6980);
var G__6984 = (0);
seq__6965_6969 = G__6981;
chunk__6966_6970 = G__6982;
count__6967_6971 = G__6983;
i__6968_6972 = G__6984;
continue;
} else {
var node_6985 = cljs.core.first.call(null,seq__6965_6979__$1);
goog.dom.classes.add(node_6985,class$);

var G__6986 = cljs.core.next.call(null,seq__6965_6979__$1);
var G__6987 = null;
var G__6988 = (0);
var G__6989 = (0);
seq__6965_6969 = G__6986;
chunk__6966_6970 = G__6987;
count__6967_6971 = G__6988;
i__6968_6972 = G__6989;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Removes the specified CSS class from each node in the content.
 */
domina.remove_class_BANG_ = (function domina$remove_class_BANG_(content,class$){
var seq__6994_6998 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__6995_6999 = null;
var count__6996_7000 = (0);
var i__6997_7001 = (0);
while(true){
if((i__6997_7001 < count__6996_7000)){
var node_7002 = cljs.core._nth.call(null,chunk__6995_6999,i__6997_7001);
goog.dom.classes.remove(node_7002,class$);

var G__7003 = seq__6994_6998;
var G__7004 = chunk__6995_6999;
var G__7005 = count__6996_7000;
var G__7006 = (i__6997_7001 + (1));
seq__6994_6998 = G__7003;
chunk__6995_6999 = G__7004;
count__6996_7000 = G__7005;
i__6997_7001 = G__7006;
continue;
} else {
var temp__4425__auto___7007 = cljs.core.seq.call(null,seq__6994_6998);
if(temp__4425__auto___7007){
var seq__6994_7008__$1 = temp__4425__auto___7007;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__6994_7008__$1)){
var c__5310__auto___7009 = cljs.core.chunk_first.call(null,seq__6994_7008__$1);
var G__7010 = cljs.core.chunk_rest.call(null,seq__6994_7008__$1);
var G__7011 = c__5310__auto___7009;
var G__7012 = cljs.core.count.call(null,c__5310__auto___7009);
var G__7013 = (0);
seq__6994_6998 = G__7010;
chunk__6995_6999 = G__7011;
count__6996_7000 = G__7012;
i__6997_7001 = G__7013;
continue;
} else {
var node_7014 = cljs.core.first.call(null,seq__6994_7008__$1);
goog.dom.classes.remove(node_7014,class$);

var G__7015 = cljs.core.next.call(null,seq__6994_7008__$1);
var G__7016 = null;
var G__7017 = (0);
var G__7018 = (0);
seq__6994_6998 = G__7015;
chunk__6995_6999 = G__7016;
count__6996_7000 = G__7017;
i__6997_7001 = G__7018;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Toggles the specified CSS class from each node in the content.
 */
domina.toggle_class_BANG_ = (function domina$toggle_class_BANG_(content,class$){
var seq__7023_7027 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__7024_7028 = null;
var count__7025_7029 = (0);
var i__7026_7030 = (0);
while(true){
if((i__7026_7030 < count__7025_7029)){
var node_7031 = cljs.core._nth.call(null,chunk__7024_7028,i__7026_7030);
goog.dom.classes.toggle(node_7031,class$);

var G__7032 = seq__7023_7027;
var G__7033 = chunk__7024_7028;
var G__7034 = count__7025_7029;
var G__7035 = (i__7026_7030 + (1));
seq__7023_7027 = G__7032;
chunk__7024_7028 = G__7033;
count__7025_7029 = G__7034;
i__7026_7030 = G__7035;
continue;
} else {
var temp__4425__auto___7036 = cljs.core.seq.call(null,seq__7023_7027);
if(temp__4425__auto___7036){
var seq__7023_7037__$1 = temp__4425__auto___7036;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7023_7037__$1)){
var c__5310__auto___7038 = cljs.core.chunk_first.call(null,seq__7023_7037__$1);
var G__7039 = cljs.core.chunk_rest.call(null,seq__7023_7037__$1);
var G__7040 = c__5310__auto___7038;
var G__7041 = cljs.core.count.call(null,c__5310__auto___7038);
var G__7042 = (0);
seq__7023_7027 = G__7039;
chunk__7024_7028 = G__7040;
count__7025_7029 = G__7041;
i__7026_7030 = G__7042;
continue;
} else {
var node_7043 = cljs.core.first.call(null,seq__7023_7037__$1);
goog.dom.classes.toggle(node_7043,class$);

var G__7044 = cljs.core.next.call(null,seq__7023_7037__$1);
var G__7045 = null;
var G__7046 = (0);
var G__7047 = (0);
seq__7023_7027 = G__7044;
chunk__7024_7028 = G__7045;
count__7025_7029 = G__7046;
i__7026_7030 = G__7047;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns a seq of all the CSS classes currently applied to a node. Assumes content is a single node.
 */
domina.classes = (function domina$classes(content){
return cljs.core.seq.call(null,goog.dom.classes.get(domina.single_node.call(null,content)));
});
/**
 * Sets the class attribute of the content nodes to classes, which can
 * be either a class attribute string or a seq of classname strings.
 */
domina.set_classes_BANG_ = (function domina$set_classes_BANG_(content,classes){
var classes_7056__$1 = ((cljs.core.coll_QMARK_.call(null,classes))?clojure.string.join.call(null," ",classes):classes);
var seq__7052_7057 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__7053_7058 = null;
var count__7054_7059 = (0);
var i__7055_7060 = (0);
while(true){
if((i__7055_7060 < count__7054_7059)){
var node_7061 = cljs.core._nth.call(null,chunk__7053_7058,i__7055_7060);
goog.dom.classes.set(node_7061,classes_7056__$1);

var G__7062 = seq__7052_7057;
var G__7063 = chunk__7053_7058;
var G__7064 = count__7054_7059;
var G__7065 = (i__7055_7060 + (1));
seq__7052_7057 = G__7062;
chunk__7053_7058 = G__7063;
count__7054_7059 = G__7064;
i__7055_7060 = G__7065;
continue;
} else {
var temp__4425__auto___7066 = cljs.core.seq.call(null,seq__7052_7057);
if(temp__4425__auto___7066){
var seq__7052_7067__$1 = temp__4425__auto___7066;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7052_7067__$1)){
var c__5310__auto___7068 = cljs.core.chunk_first.call(null,seq__7052_7067__$1);
var G__7069 = cljs.core.chunk_rest.call(null,seq__7052_7067__$1);
var G__7070 = c__5310__auto___7068;
var G__7071 = cljs.core.count.call(null,c__5310__auto___7068);
var G__7072 = (0);
seq__7052_7057 = G__7069;
chunk__7053_7058 = G__7070;
count__7054_7059 = G__7071;
i__7055_7060 = G__7072;
continue;
} else {
var node_7073 = cljs.core.first.call(null,seq__7052_7067__$1);
goog.dom.classes.set(node_7073,classes_7056__$1);

var G__7074 = cljs.core.next.call(null,seq__7052_7067__$1);
var G__7075 = null;
var G__7076 = (0);
var G__7077 = (0);
seq__7052_7057 = G__7074;
chunk__7053_7058 = G__7075;
count__7054_7059 = G__7076;
i__7055_7060 = G__7077;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the text of a node. Assumes content is a single node. For consistency across browsers, will always trim whitespace of the beginning and end of the returned text.
 */
domina.text = (function domina$text(content){
return goog.string.trim(goog.dom.getTextContent(domina.single_node.call(null,content)));
});
/**
 * Sets the text value of all the nodes in the given content.
 */
domina.set_text_BANG_ = (function domina$set_text_BANG_(content,value){
var seq__7082_7086 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__7083_7087 = null;
var count__7084_7088 = (0);
var i__7085_7089 = (0);
while(true){
if((i__7085_7089 < count__7084_7088)){
var node_7090 = cljs.core._nth.call(null,chunk__7083_7087,i__7085_7089);
goog.dom.setTextContent(node_7090,value);

var G__7091 = seq__7082_7086;
var G__7092 = chunk__7083_7087;
var G__7093 = count__7084_7088;
var G__7094 = (i__7085_7089 + (1));
seq__7082_7086 = G__7091;
chunk__7083_7087 = G__7092;
count__7084_7088 = G__7093;
i__7085_7089 = G__7094;
continue;
} else {
var temp__4425__auto___7095 = cljs.core.seq.call(null,seq__7082_7086);
if(temp__4425__auto___7095){
var seq__7082_7096__$1 = temp__4425__auto___7095;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7082_7096__$1)){
var c__5310__auto___7097 = cljs.core.chunk_first.call(null,seq__7082_7096__$1);
var G__7098 = cljs.core.chunk_rest.call(null,seq__7082_7096__$1);
var G__7099 = c__5310__auto___7097;
var G__7100 = cljs.core.count.call(null,c__5310__auto___7097);
var G__7101 = (0);
seq__7082_7086 = G__7098;
chunk__7083_7087 = G__7099;
count__7084_7088 = G__7100;
i__7085_7089 = G__7101;
continue;
} else {
var node_7102 = cljs.core.first.call(null,seq__7082_7096__$1);
goog.dom.setTextContent(node_7102,value);

var G__7103 = cljs.core.next.call(null,seq__7082_7096__$1);
var G__7104 = null;
var G__7105 = (0);
var G__7106 = (0);
seq__7082_7086 = G__7103;
chunk__7083_7087 = G__7104;
count__7084_7088 = G__7105;
i__7085_7089 = G__7106;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the value of a node (presumably a form field). Assumes content is a single node.
 */
domina.value = (function domina$value(content){
return goog.dom.forms.getValue(domina.single_node.call(null,content));
});
/**
 * Sets the value of all the nodes (presumably form fields) in the given content.
 */
domina.set_value_BANG_ = (function domina$set_value_BANG_(content,value){
var seq__7111_7115 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__7112_7116 = null;
var count__7113_7117 = (0);
var i__7114_7118 = (0);
while(true){
if((i__7114_7118 < count__7113_7117)){
var node_7119 = cljs.core._nth.call(null,chunk__7112_7116,i__7114_7118);
goog.dom.forms.setValue(node_7119,value);

var G__7120 = seq__7111_7115;
var G__7121 = chunk__7112_7116;
var G__7122 = count__7113_7117;
var G__7123 = (i__7114_7118 + (1));
seq__7111_7115 = G__7120;
chunk__7112_7116 = G__7121;
count__7113_7117 = G__7122;
i__7114_7118 = G__7123;
continue;
} else {
var temp__4425__auto___7124 = cljs.core.seq.call(null,seq__7111_7115);
if(temp__4425__auto___7124){
var seq__7111_7125__$1 = temp__4425__auto___7124;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7111_7125__$1)){
var c__5310__auto___7126 = cljs.core.chunk_first.call(null,seq__7111_7125__$1);
var G__7127 = cljs.core.chunk_rest.call(null,seq__7111_7125__$1);
var G__7128 = c__5310__auto___7126;
var G__7129 = cljs.core.count.call(null,c__5310__auto___7126);
var G__7130 = (0);
seq__7111_7115 = G__7127;
chunk__7112_7116 = G__7128;
count__7113_7117 = G__7129;
i__7114_7118 = G__7130;
continue;
} else {
var node_7131 = cljs.core.first.call(null,seq__7111_7125__$1);
goog.dom.forms.setValue(node_7131,value);

var G__7132 = cljs.core.next.call(null,seq__7111_7125__$1);
var G__7133 = null;
var G__7134 = (0);
var G__7135 = (0);
seq__7111_7115 = G__7132;
chunk__7112_7116 = G__7133;
count__7113_7117 = G__7134;
i__7114_7118 = G__7135;
continue;
}
} else {
}
}
break;
}

return content;
});
/**
 * Returns the innerHTML of a node. Assumes content is a single node.
 */
domina.html = (function domina$html(content){
return domina.single_node.call(null,content).innerHTML;
});
domina.replace_children_BANG_ = (function domina$replace_children_BANG_(content,inner_content){
return domina.append_BANG_.call(null,domina.destroy_children_BANG_.call(null,content),inner_content);
});
domina.set_inner_html_BANG_ = (function domina$set_inner_html_BANG_(content,html_string){
var allows_inner_html_QMARK_ = cljs.core.not.call(null,cljs.core.re_find.call(null,domina.re_no_inner_html,html_string));
var leading_whitespace_QMARK_ = cljs.core.re_find.call(null,domina.re_leading_whitespace,html_string);
var tag_name = [cljs.core.str(cljs.core.second.call(null,cljs.core.re_find.call(null,domina.re_tag_name,html_string)))].join('').toLowerCase();
var special_tag_QMARK_ = cljs.core.contains_QMARK_.call(null,domina.wrap_map,tag_name);
if(cljs.core.truth_((function (){var and__4514__auto__ = allows_inner_html_QMARK_;
if(and__4514__auto__){
var and__4514__auto____$1 = (function (){var or__4526__auto__ = domina.support.leading_whitespace_QMARK_;
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return cljs.core.not.call(null,leading_whitespace_QMARK_);
}
})();
if(cljs.core.truth_(and__4514__auto____$1)){
return !(special_tag_QMARK_);
} else {
return and__4514__auto____$1;
}
} else {
return and__4514__auto__;
}
})())){
var value_7146 = clojure.string.replace.call(null,html_string,domina.re_xhtml_tag,"<$1></$2>");
try{var seq__7142_7147 = cljs.core.seq.call(null,domina.nodes.call(null,content));
var chunk__7143_7148 = null;
var count__7144_7149 = (0);
var i__7145_7150 = (0);
while(true){
if((i__7145_7150 < count__7144_7149)){
var node_7151 = cljs.core._nth.call(null,chunk__7143_7148,i__7145_7150);
node_7151.innerHTML = value_7146;

var G__7152 = seq__7142_7147;
var G__7153 = chunk__7143_7148;
var G__7154 = count__7144_7149;
var G__7155 = (i__7145_7150 + (1));
seq__7142_7147 = G__7152;
chunk__7143_7148 = G__7153;
count__7144_7149 = G__7154;
i__7145_7150 = G__7155;
continue;
} else {
var temp__4425__auto___7156 = cljs.core.seq.call(null,seq__7142_7147);
if(temp__4425__auto___7156){
var seq__7142_7157__$1 = temp__4425__auto___7156;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7142_7157__$1)){
var c__5310__auto___7158 = cljs.core.chunk_first.call(null,seq__7142_7157__$1);
var G__7159 = cljs.core.chunk_rest.call(null,seq__7142_7157__$1);
var G__7160 = c__5310__auto___7158;
var G__7161 = cljs.core.count.call(null,c__5310__auto___7158);
var G__7162 = (0);
seq__7142_7147 = G__7159;
chunk__7143_7148 = G__7160;
count__7144_7149 = G__7161;
i__7145_7150 = G__7162;
continue;
} else {
var node_7163 = cljs.core.first.call(null,seq__7142_7157__$1);
node_7163.innerHTML = value_7146;

var G__7164 = cljs.core.next.call(null,seq__7142_7157__$1);
var G__7165 = null;
var G__7166 = (0);
var G__7167 = (0);
seq__7142_7147 = G__7164;
chunk__7143_7148 = G__7165;
count__7144_7149 = G__7166;
i__7145_7150 = G__7167;
continue;
}
} else {
}
}
break;
}
}catch (e7141){if((e7141 instanceof Error)){
var e_7168 = e7141;
domina.replace_children_BANG_.call(null,content,value_7146);
} else {
throw e7141;

}
}} else {
domina.replace_children_BANG_.call(null,content,html_string);
}

return content;
});
/**
 * Sets the innerHTML value for all the nodes in the given content.
 */
domina.set_html_BANG_ = (function domina$set_html_BANG_(content,inner_content){
if(typeof inner_content === 'string'){
return domina.set_inner_html_BANG_.call(null,content,inner_content);
} else {
return domina.replace_children_BANG_.call(null,content,inner_content);
}
});
/**
 * Returns data associated with a node for a given key. Assumes
 * content is a single node. If the bubble parameter is set to true,
 * will search parent nodes if the key is not found.
 */
domina.get_data = (function domina$get_data(){
var args7169 = [];
var len__5565__auto___7172 = arguments.length;
var i__5566__auto___7173 = (0);
while(true){
if((i__5566__auto___7173 < len__5565__auto___7172)){
args7169.push((arguments[i__5566__auto___7173]));

var G__7174 = (i__5566__auto___7173 + (1));
i__5566__auto___7173 = G__7174;
continue;
} else {
}
break;
}

var G__7171 = args7169.length;
switch (G__7171) {
case 2:
return domina.get_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return domina.get_data.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7169.length)].join('')));

}
});

domina.get_data.cljs$core$IFn$_invoke$arity$2 = (function (node,key){
return domina.get_data.call(null,node,key,false);
});

domina.get_data.cljs$core$IFn$_invoke$arity$3 = (function (node,key,bubble){
var m = domina.single_node.call(null,node).__domina_data;
var value = (cljs.core.truth_(m)?cljs.core.get.call(null,m,key):null);
if(cljs.core.truth_((function (){var and__4514__auto__ = bubble;
if(cljs.core.truth_(and__4514__auto__)){
return (value == null);
} else {
return and__4514__auto__;
}
})())){
var temp__4425__auto__ = domina.single_node.call(null,node).parentNode;
if(cljs.core.truth_(temp__4425__auto__)){
var parent = temp__4425__auto__;
return domina.get_data.call(null,parent,key,true);
} else {
return null;
}
} else {
return value;
}
});

domina.get_data.cljs$lang$maxFixedArity = 3;
/**
 * Sets a data on the node for a given key. Assumes content is a
 * single node. Data should be ClojureScript values and data structures
 * only; using other objects as data may result in memory leaks on some
 * browsers.
 */
domina.set_data_BANG_ = (function domina$set_data_BANG_(node,key,value){
var m = (function (){var or__4526__auto__ = domina.single_node.call(null,node).__domina_data;
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})();
return domina.single_node.call(null,node).__domina_data = cljs.core.assoc.call(null,m,key,value);
});
/**
 * Takes a two-arg function, a reference DomContent and new
 * DomContent. Applies the function for each reference / content
 * combination. Uses clones of the new content for each additional
 * parent after the first.
 */
domina.apply_with_cloning = (function domina$apply_with_cloning(f,parent_content,child_content){
var parents = domina.nodes.call(null,parent_content);
var children = domina.nodes.call(null,child_content);
var first_child = (function (){var frag = document.createDocumentFragment();
var seq__7182_7186 = cljs.core.seq.call(null,children);
var chunk__7183_7187 = null;
var count__7184_7188 = (0);
var i__7185_7189 = (0);
while(true){
if((i__7185_7189 < count__7184_7188)){
var child_7190 = cljs.core._nth.call(null,chunk__7183_7187,i__7185_7189);
frag.appendChild(child_7190);

var G__7191 = seq__7182_7186;
var G__7192 = chunk__7183_7187;
var G__7193 = count__7184_7188;
var G__7194 = (i__7185_7189 + (1));
seq__7182_7186 = G__7191;
chunk__7183_7187 = G__7192;
count__7184_7188 = G__7193;
i__7185_7189 = G__7194;
continue;
} else {
var temp__4425__auto___7195 = cljs.core.seq.call(null,seq__7182_7186);
if(temp__4425__auto___7195){
var seq__7182_7196__$1 = temp__4425__auto___7195;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__7182_7196__$1)){
var c__5310__auto___7197 = cljs.core.chunk_first.call(null,seq__7182_7196__$1);
var G__7198 = cljs.core.chunk_rest.call(null,seq__7182_7196__$1);
var G__7199 = c__5310__auto___7197;
var G__7200 = cljs.core.count.call(null,c__5310__auto___7197);
var G__7201 = (0);
seq__7182_7186 = G__7198;
chunk__7183_7187 = G__7199;
count__7184_7188 = G__7200;
i__7185_7189 = G__7201;
continue;
} else {
var child_7202 = cljs.core.first.call(null,seq__7182_7196__$1);
frag.appendChild(child_7202);

var G__7203 = cljs.core.next.call(null,seq__7182_7196__$1);
var G__7204 = null;
var G__7205 = (0);
var G__7206 = (0);
seq__7182_7186 = G__7203;
chunk__7183_7187 = G__7204;
count__7184_7188 = G__7205;
i__7185_7189 = G__7206;
continue;
}
} else {
}
}
break;
}

return frag;
})();
var other_children = cljs.core.doall.call(null,cljs.core.repeatedly.call(null,(cljs.core.count.call(null,parents) - (1)),((function (parents,children,first_child){
return (function (){
return first_child.cloneNode(true);
});})(parents,children,first_child))
));
if(cljs.core.seq.call(null,parents)){
f.call(null,cljs.core.first.call(null,parents),first_child);

return cljs.core.doall.call(null,cljs.core.map.call(null,((function (parents,children,first_child,other_children){
return (function (p1__7176_SHARP_,p2__7177_SHARP_){
return f.call(null,p1__7176_SHARP_,p2__7177_SHARP_);
});})(parents,children,first_child,other_children))
,cljs.core.rest.call(null,parents),other_children));
} else {
return null;
}
});
domina.lazy_nl_via_item = (function domina$lazy_nl_via_item(){
var args7207 = [];
var len__5565__auto___7210 = arguments.length;
var i__5566__auto___7211 = (0);
while(true){
if((i__5566__auto___7211 < len__5565__auto___7210)){
args7207.push((arguments[i__5566__auto___7211]));

var G__7212 = (i__5566__auto___7211 + (1));
i__5566__auto___7211 = G__7212;
continue;
} else {
}
break;
}

var G__7209 = args7207.length;
switch (G__7209) {
case 1:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7207.length)].join('')));

}
});

domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_item.call(null,nl,(0));
});

domina.lazy_nl_via_item.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,nl.item(n),domina.lazy_nl_via_item.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.lazy_nl_via_item.cljs$lang$maxFixedArity = 2;
domina.lazy_nl_via_array_ref = (function domina$lazy_nl_via_array_ref(){
var args7214 = [];
var len__5565__auto___7217 = arguments.length;
var i__5566__auto___7218 = (0);
while(true){
if((i__5566__auto___7218 < len__5565__auto___7217)){
args7214.push((arguments[i__5566__auto___7218]));

var G__7219 = (i__5566__auto___7218 + (1));
i__5566__auto___7218 = G__7219;
continue;
} else {
}
break;
}

var G__7216 = args7214.length;
switch (G__7216) {
case 1:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args7214.length)].join('')));

}
});

domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$1 = (function (nl){
return domina.lazy_nl_via_array_ref.call(null,nl,(0));
});

domina.lazy_nl_via_array_ref.cljs$core$IFn$_invoke$arity$2 = (function (nl,n){
if((n < nl.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons.call(null,(nl[n]),domina.lazy_nl_via_array_ref.call(null,nl,(n + (1))));
}),null,null));
} else {
return null;
}
});

domina.lazy_nl_via_array_ref.cljs$lang$maxFixedArity = 2;
/**
 * A lazy seq view of a js/NodeList, or other array-like javascript things
 */
domina.lazy_nodelist = (function domina$lazy_nodelist(nl){
if(cljs.core.truth_(nl.item)){
return domina.lazy_nl_via_item.call(null,nl);
} else {
return domina.lazy_nl_via_array_ref.call(null,nl);
}
});
domina.array_like_QMARK_ = (function domina$array_like_QMARK_(obj){
var and__4514__auto__ = obj;
if(cljs.core.truth_(and__4514__auto__)){
var and__4514__auto____$1 = cljs.core.not.call(null,obj.nodeName);
if(and__4514__auto____$1){
return obj.length;
} else {
return and__4514__auto____$1;
}
} else {
return and__4514__auto__;
}
});
/**
 * Some versions of IE have things that are like arrays in that they
 * respond to .length, but are not arrays nor NodeSets. This returns a
 * real sequence view of such objects. If passed an object that is not
 * a logical sequence at all, returns a single-item seq containing the
 * object.
 */
domina.normalize_seq = (function domina$normalize_seq(list_thing){
if((list_thing == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((list_thing == null)))?((((list_thing.cljs$lang$protocol_mask$partition0$ & (8388608))) || (list_thing.cljs$core$ISeqable$))?true:(((!list_thing.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,list_thing))){
return cljs.core.seq.call(null,list_thing);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,list_thing))){
return domina.lazy_nodelist.call(null,list_thing);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [list_thing], null));

}
}
}
});
(domina.DomContent["string"] = true);

(domina.nodes["string"] = (function (s){
return cljs.core.doall.call(null,domina.nodes.call(null,domina.string_to_dom.call(null,s)));
}));

(domina.single_node["string"] = (function (s){
return domina.single_node.call(null,domina.string_to_dom.call(null,s));
}));

(domina.DomContent["_"] = true);

(domina.nodes["_"] = (function (content){
if((content == null)){
return cljs.core.List.EMPTY;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || (content.cljs$core$ISeqable$))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.seq.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return domina.lazy_nodelist.call(null,content);
} else {
return cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [content], null));

}
}
}
}));

(domina.single_node["_"] = (function (content){
if((content == null)){
return null;
} else {
if(((!((content == null)))?((((content.cljs$lang$protocol_mask$partition0$ & (8388608))) || (content.cljs$core$ISeqable$))?true:(((!content.cljs$lang$protocol_mask$partition0$))?cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content):false)):cljs.core.native_satisfies_QMARK_.call(null,cljs.core.ISeqable,content))){
return cljs.core.first.call(null,content);
} else {
if(cljs.core.truth_(domina.array_like_QMARK_.call(null,content))){
return content.item((0));
} else {
return content;

}
}
}
}));
if(cljs.core.truth_((typeof NodeList != 'undefined'))){
NodeList.prototype.cljs$core$ICounted$ = true;

NodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

NodeList.prototype.cljs$core$IIndexed$ = true;

NodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

NodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

NodeList.prototype.cljs$core$ISeqable$ = true;

NodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof StaticNodeList != 'undefined'))){
StaticNodeList.prototype.cljs$core$ICounted$ = true;

StaticNodeList.prototype.cljs$core$ICounted$_count$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return nodelist__$1.length;
});

StaticNodeList.prototype.cljs$core$IIndexed$ = true;

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (nodelist,n){
var nodelist__$1 = this;
return nodelist__$1.item(n);
});

StaticNodeList.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (nodelist,n,not_found){
var nodelist__$1 = this;
if((nodelist__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,nodelist__$1,n);
}
});

StaticNodeList.prototype.cljs$core$ISeqable$ = true;

StaticNodeList.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (nodelist){
var nodelist__$1 = this;
return domina.lazy_nodelist.call(null,nodelist__$1);
});
} else {
}
if(cljs.core.truth_((typeof HTMLCollection != 'undefined'))){
HTMLCollection.prototype.cljs$core$ICounted$ = true;

HTMLCollection.prototype.cljs$core$ICounted$_count$arity$1 = (function (coll){
var coll__$1 = this;
return coll__$1.length;
});

HTMLCollection.prototype.cljs$core$IIndexed$ = true;

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (coll,n){
var coll__$1 = this;
return coll__$1.item(n);
});

HTMLCollection.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (coll,n,not_found){
var coll__$1 = this;
if((coll__$1.length <= n)){
return not_found;
} else {
return cljs.core.nth.call(null,coll__$1,n);
}
});

HTMLCollection.prototype.cljs$core$ISeqable$ = true;

HTMLCollection.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (coll){
var coll__$1 = this;
return domina.lazy_nodelist.call(null,coll__$1);
});
} else {
}

//# sourceMappingURL=domina.js.map