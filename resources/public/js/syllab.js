// Compiled by ClojureScript 1.7.48 {}
goog.provide('syllab');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ling_data');
goog.require('orphoep');
goog.require('globals');
goog.require('translit');
cljs.core.enable_console_print_BANG_.call(null);
syllab.concluster_pat = (function (){var vow_bef_with = globals.sformat.call(null,"(\\**[%s])",orphoep._PLUS__PLUS_.call(null,globals.all_vows));
var non_vows = globals.sformat.call(null,"([^%s*-]+)",orphoep._PLUS__PLUS_.call(null,globals.all_vows));
var vow_after = globals.sformat.call(null,"(?=[%s*-])",orphoep._PLUS__PLUS_.call(null,globals.all_vows));
var merged = orphoep._PLUS__PLUS_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vow_bef_with,non_vows,vow_after], null));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [merged,cljs.core.re_pattern.call(null,merged)], null);
})();
syllab.vowcluster_pat = (function (){var vow = globals.sformat.call(null,"[%s]",orphoep._PLUS__PLUS_.call(null,globals.all_vows));
var vow_aft = globals.sformat.call(null,"(?=\\*?[%s])",orphoep._PLUS__PLUS_.call(null,globals.all_vows));
var merged = orphoep._PLUS__PLUS_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vow,vow_aft], null));
return cljs.core.re_pattern.call(null,merged);
})();
syllab.sm4_dict = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),(1)], null)], null);
syllab.sm1 = (function syllab$sm1(comp_m,p__7632){
var vec__7634 = p__7632;
var v = cljs.core.nth.call(null,vec__7634,(0),null);
var c = cljs.core.nth.call(null,vec__7634,(1),null);
var is_stressed = cljs.core._EQ_.call(null,"*",cljs.core.first.call(null,v));
if((!(is_stressed)) || ((cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,c))) && (is_stressed) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,"\u0440\u0420\u043B\u041B\u0439"),cljs.core.second.call(null,c))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,"-",c], null);
} else {
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,cljs.core.first.call(null,c),"-",orphoep._PLUS__PLUS_.call(null,cljs.core.rest.call(null,c))], null);
}
});
syllab.sm2 = (function syllab$sm2(comp_m,p__7636){
var vec__7638 = p__7636;
var v = cljs.core.nth.call(null,vec__7638,(0),null);
var c = cljs.core.nth.call(null,vec__7638,(1),null);
if((cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,c))) && (cljs.core._EQ_.call(null,c,"\u0440\u0448"))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,c,"-"], null);
} else {
if(cljs.core.every_QMARK_.call(null,((function (vec__7638,v,c){
return (function (p1__7635_SHARP_){
return cljs.core.contains_QMARK_.call(null,globals.rus_sons,p1__7635_SHARP_);
});})(vec__7638,v,c))
,c)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,"-",c], null);
} else {
if((cljs.core.contains_QMARK_.call(null,globals.rus_sons,cljs.core.first.call(null,c))) && (!(cljs.core.contains_QMARK_.call(null,globals.rus_sons,cljs.core.second.call(null,c))))){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,[cljs.core.str(cljs.core.first.call(null,c))].join(''),"-",orphoep._PLUS__PLUS_.call(null,cljs.core.rest.call(null,c))], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,"-",c], null);

}
}
}
});
syllab.sm3 = (function syllab$sm3(comp_m,p__7639){
var vec__7641 = p__7639;
var v = cljs.core.nth.call(null,vec__7641,(0),null);
var c = cljs.core.nth.call(null,vec__7641,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,"-",c], null);
});
syllab.sm4_check_concl = (function syllab$sm4_check_concl(c,o){
var last_let = [cljs.core.str(cljs.core.last.call(null,c))].join('');
var prelast = orphoep._PLUS__PLUS_.call(null,cljs.core.butlast.call(null,c));
var value = ling_data.onset_sm4.call(null,prelast);
var isreg = ((cljs.core.vector_QMARK_.call(null,value))?cljs.core._EQ_.call(null,(2),cljs.core.get.call(null,value,ling_data.onset_index.call(null,last_let,(99)),(0))):false);
if((cljs.core._EQ_.call(null,cljs.core.count.call(null,c),(1))) || (isreg)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [orphoep._PLUS__PLUS_.call(null,o),"-",orphoep._PLUS__PLUS_.call(null,c)], null);
} else {
return syllab$sm4_check_concl.call(null,cljs.core.rest.call(null,c),cljs.core.conj.call(null,o,cljs.core.first.call(null,c)));
}
});
syllab.sm4 = (function syllab$sm4(comp_m,p__7642){
var vec__7644 = p__7642;
var v = cljs.core.nth.call(null,vec__7644,(0),null);
var c = cljs.core.nth.call(null,vec__7644,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,orphoep._PLUS__PLUS_.call(null,syllab.sm4_check_concl.call(null,c,cljs.core.PersistentVector.EMPTY))], null);
});
syllab.son_scale = cljs.core.apply.call(null,cljs.core.merge,cljs.core.map_indexed.call(null,(function (p1__7646_SHARP_,p2__7645_SHARP_){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5279__auto__ = (function syllab$iter__7647(s__7648){
return (new cljs.core.LazySeq(null,(function (){
var s__7648__$1 = s__7648;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__7648__$1);
if(temp__4425__auto__){
var s__7648__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__7648__$2)){
var c__5277__auto__ = cljs.core.chunk_first.call(null,s__7648__$2);
var size__5278__auto__ = cljs.core.count.call(null,c__5277__auto__);
var b__7650 = cljs.core.chunk_buffer.call(null,size__5278__auto__);
if((function (){var i__7649 = (0);
while(true){
if((i__7649 < size__5278__auto__)){
var c = cljs.core._nth.call(null,c__5277__auto__,i__7649);
cljs.core.chunk_append.call(null,b__7650,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,p1__7646_SHARP_], null));

var G__7651 = (i__7649 + (1));
i__7649 = G__7651;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7650),syllab$iter__7647.call(null,cljs.core.chunk_rest.call(null,s__7648__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__7650),null);
}
} else {
var c = cljs.core.first.call(null,s__7648__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,p1__7646_SHARP_], null),syllab$iter__7647.call(null,cljs.core.rest.call(null,s__7648__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5279__auto__.call(null,p2__7645_SHARP_);
})());
}),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u043F\u0442\u043A","\u0431\u0434\u0433","\u0447\u0446","\u0441\u0444\u0448\u0449\u0445","\u0437\u0432\u0436","\u043C\u043D","\u043B","\u0440","\u0439"], null)));
syllab.sm5 = (function syllab$sm5(comp_m,p__7653){
var vec__7655 = p__7653;
var v = cljs.core.nth.call(null,vec__7655,(0),null);
var c = cljs.core.nth.call(null,vec__7655,(1),null);
var son_vals = cljs.core.mapv.call(null,((function (vec__7655,v,c){
return (function (p1__7652_SHARP_){
return syllab.son_scale.call(null,p1__7652_SHARP_,p1__7652_SHARP_);
});})(vec__7655,v,c))
,c.toLowerCase());
var min_ix = cljs.core.into_array.call(null,son_vals).indexOf(cljs.core.apply.call(null,cljs.core.min,son_vals));
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,orphoep._PLUS__PLUS_.call(null,cljs.core.take.call(null,min_ix,c)),"-",orphoep._PLUS__PLUS_.call(null,cljs.core.drop.call(null,min_ix,c))], null);
});
syllab.js_replace = (function syllab$js_replace(fm,v,c,_AMPERSAND_rest){
return orphoep._PLUS__PLUS_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["~",orphoep._PLUS__PLUS_.call(null,"|",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,c], null)),"~"], null));
});
syllab.cluster_find = (function syllab$cluster_find(w){
return orphoep.__.call(null,w,cljs.core.second.call(null,syllab.concluster_pat),syllab.js_replace);
});
syllab.divide_cluster = (function syllab$divide_cluster(w){
return clojure.string.split.call(null,w,/~/);
});
syllab.vow_clusters_sep = (function syllab$vow_clusters_sep(word){
return orphoep.__.call(null,word,syllab.vowcluster_pat,(function (p1__7656_SHARP_){
return orphoep._PLUS__PLUS_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__7656_SHARP_,"-"], null));
}));
});
syllab.syll_s = (function syllab$syll_s(models,w){
var phonw = cljs.core.reduce.call(null,(function (p1__7658_SHARP_,p2__7657_SHARP_){
return p2__7657_SHARP_.call(null,p1__7658_SHARP_);
}),w.toLowerCase(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [orphoep.orpho_single,translit.translit], null));
return cljs.core.map.call(null,((function (phonw){
return (function (p1__7659_SHARP_){
if(cljs.core.not_EQ_.call(null,p1__7659_SHARP_.indexOf("|"),(-1))){
var vec__7661 = clojure.string.split.call(null,p1__7659_SHARP_,/\|/);
var v = cljs.core.nth.call(null,vec__7661,(0),null);
var c = cljs.core.nth.call(null,vec__7661,(1),null);
var comp_m = orphoep._PLUS__PLUS_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,c], null));
if(cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,c))){
return orphoep._PLUS__PLUS_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,"-",c], null));
} else {
return cljs.core.reduce.call(null,((function (vec__7661,v,c,comp_m,phonw){
return (function (a,f){
return cljs.core.conj.call(null,a,orphoep._PLUS__PLUS_.call(null,f.call(null,comp_m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,c], null))));
});})(vec__7661,v,c,comp_m,phonw))
,cljs.core.PersistentVector.EMPTY,models);
}
} else {
return p1__7659_SHARP_;
}
});})(phonw))
,syllab.divide_cluster.call(null,syllab.cluster_find.call(null,syllab.vow_clusters_sep.call(null,phonw))));
});
syllab.syll_single_sys = (function syllab$syll_single_sys(sys,word){

return orphoep._PLUS__PLUS_.call(null,cljs.core.map.call(null,(function (p1__7662_SHARP_){
if(cljs.core.vector_QMARK_.call(null,p1__7662_SHARP_)){
return p1__7662_SHARP_.call(null,(0));
} else {
return p1__7662_SHARP_;
}
}),syllab.syll_s.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sys], null),word)));
});
goog.exportSymbol('syllab.syll_single_sys', syllab.syll_single_sys);
syllab.syll_single = (function syllab$syll_single(word){
return cljs.core.mapv.call(null,(function (i){
return orphoep._PLUS__PLUS_.call(null,cljs.core.mapv.call(null,(function (p1__7663_SHARP_){
if(cljs.core.vector_QMARK_.call(null,p1__7663_SHARP_)){
return p1__7663_SHARP_.call(null,i);
} else {
return p1__7663_SHARP_;
}
}),syllab.syll_s.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [syllab.sm1,syllab.sm2,syllab.sm3,syllab.sm4,syllab.sm5], null),word)));
}),cljs.core.range.call(null,(5)));
});
goog.exportSymbol('syllab.syll_single', syllab.syll_single);

//# sourceMappingURL=syllab.js.map