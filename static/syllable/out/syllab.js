// Compiled by ClojureScript 0.0-2268
goog.provide('syllab');
goog.require('cljs.core');
goog.require('globals');
goog.require('translit');
goog.require('orphoep');
goog.require('translit');
goog.require('globals');
goog.require('orphoep');
cljs.core.enable_console_print_BANG_.call(null);
syllab.concluster_pat = (function (){var vow_bef_with = globals.sformat.call(null,"(\\**[%s])",orphoep._PLUS__PLUS_.call(null,globals.all_vows));var non_vows = globals.sformat.call(null,"([^%s*-]+)",orphoep._PLUS__PLUS_.call(null,globals.all_vows));var vow_after = globals.sformat.call(null,"(?=[%s*-])",orphoep._PLUS__PLUS_.call(null,globals.all_vows));return cljs.core.re_pattern.call(null,orphoep._PLUS__PLUS_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vow_bef_with,non_vows,vow_after], null)));
})();
syllab.vowcluster_pat = (function (){var vow = globals.sformat.call(null,"[%s]",orphoep._PLUS__PLUS_.call(null,globals.all_vows));var vow_aft = globals.sformat.call(null,"(?=\\*?[%s])",orphoep._PLUS__PLUS_.call(null,globals.all_vows));cljs.core.println.call(null,orphoep._PLUS__PLUS_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vow,vow_aft], null)));
return cljs.core.re_pattern.call(null,orphoep._PLUS__PLUS_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vow,vow_aft], null)));
})();
syllab.sm4_dict = (function (){var url = "/static/syllable/kemp_data_on_rep.json";var callback = ((function (url){
return (function (reply){var v = cljs.core.js__GT_clj.call(null,reply.target.getResponseJson());syllab.sm4_dict = v;
return syllab.sm4_dict;
});})(url))
;return goog.net.XhrIo.send(url,callback);
})();
syllab.sm1 = (function sm1(m){var vec__11497 = m;var comp_m = cljs.core.nth.call(null,vec__11497,(0),null);var vm = cljs.core.nth.call(null,vec__11497,(1),null);var cm = cljs.core.nthnext.call(null,vec__11497,(2));var cm__$1 = orphoep._PLUS__PLUS_.call(null,cm);if((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,cm__$1))) || ((cljs.core.not_EQ_.call(null,cljs.core.first.call(null,vm),"*")) || ((cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,cm__$1))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,vm),"*")) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,"\u0440\u0420\u043B\u041B\u0439"),cljs.core.second.call(null,cm__$1))))))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vm,"-",cm__$1], null);
} else
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vm,cljs.core.first.call(null,cm__$1),"-",orphoep._PLUS__PLUS_.call(null,cljs.core.rest.call(null,cm__$1))], null);
}
});
syllab.sm2 = (function sm2(m){var vec__11500 = m;var comp_m = cljs.core.nth.call(null,vec__11500,(0),null);var vm = cljs.core.nth.call(null,vec__11500,(1),null);var cm = cljs.core.nthnext.call(null,vec__11500,(2));var cm__$1 = orphoep._PLUS__PLUS_.call(null,cm);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cm__$1),(1)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vm,"-",cm__$1], null);
} else
{if((cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,cm__$1))) && (cljs.core._EQ_.call(null,cm__$1,"\u0440\u0448")))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vm,cm__$1,"-"], null);
} else
{if(cljs.core.every_QMARK_.call(null,((function (vec__11500,comp_m,vm,cm,cm__$1){
return (function (p1__11498_SHARP_){return cljs.core.contains_QMARK_.call(null,globals.rus_sons,p1__11498_SHARP_);
});})(vec__11500,comp_m,vm,cm,cm__$1))
,cm__$1))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vm,"-",cm__$1], null);
} else
{if((cljs.core.contains_QMARK_.call(null,globals.rus_sons,cljs.core.first.call(null,cm__$1))) && (!(cljs.core.contains_QMARK_.call(null,globals.rus_sons,cljs.core.second.call(null,cm__$1)))))
{return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vm,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cm__$1))),"-",orphoep._PLUS__PLUS_.call(null,cljs.core.rest.call(null,cm__$1))], null);
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vm,"-",cm__$1], null);
} else
{return null;
}
}
}
}
}
});
syllab.sm3 = (function sm3(m){var vec__11502 = m;var comp_m = cljs.core.nth.call(null,vec__11502,(0),null);var vm = cljs.core.nth.call(null,vec__11502,(1),null);var cm = cljs.core.nthnext.call(null,vec__11502,(2));var cm__$1 = orphoep._PLUS__PLUS_.call(null,cm);return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vm,"-",cm__$1], null);
});
syllab.sm4_check_concl = (function sm4_check_concl(c,o){var last_let = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last.call(null,c)));var prelast = orphoep._PLUS__PLUS_.call(null,cljs.core.butlast.call(null,c));var isreg = cljs.core._EQ_.call(null,"R",cljs.core.get.call(null,cljs.core.get.call(null,syllab.sm4_dict,prelast,""),last_let,""));if((cljs.core._EQ_.call(null,cljs.core.count.call(null,c),(1))) || (isreg))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [orphoep._PLUS__PLUS_.call(null,o),"-",orphoep._PLUS__PLUS_.call(null,c)], null);
} else
{return sm4_check_concl.call(null,cljs.core.rest.call(null,c),cljs.core.conj.call(null,o,cljs.core.first.call(null,c)));
}
});
syllab.sm4 = (function sm4(m){var vec__11504 = m;var comp_m = cljs.core.nth.call(null,vec__11504,(0),null);var vm = cljs.core.nth.call(null,vec__11504,(1),null);var cm = cljs.core.nthnext.call(null,vec__11504,(2));var cm__$1 = orphoep._PLUS__PLUS_.call(null,cm);if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cm__$1),(1)))
{return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [vm,"-",cm__$1], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [vm,orphoep._PLUS__PLUS_.call(null,syllab.sm4_check_concl.call(null,cm__$1,cljs.core.PersistentVector.EMPTY))], null);
}
});
syllab.son_scale = cljs.core.apply.call(null,cljs.core.merge,cljs.core.map_indexed.call(null,(function (p1__11506_SHARP_,p2__11505_SHARP_){return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4284__auto__ = (function iter__11507(s__11508){return (new cljs.core.LazySeq(null,(function (){var s__11508__$1 = s__11508;while(true){
var temp__4126__auto__ = cljs.core.seq.call(null,s__11508__$1);if(temp__4126__auto__)
{var s__11508__$2 = temp__4126__auto__;if(cljs.core.chunked_seq_QMARK_.call(null,s__11508__$2))
{var c__4282__auto__ = cljs.core.chunk_first.call(null,s__11508__$2);var size__4283__auto__ = cljs.core.count.call(null,c__4282__auto__);var b__11510 = cljs.core.chunk_buffer.call(null,size__4283__auto__);if((function (){var i__11509 = (0);while(true){
if((i__11509 < size__4283__auto__))
{var c = cljs.core._nth.call(null,c__4282__auto__,i__11509);cljs.core.chunk_append.call(null,b__11510,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,p1__11506_SHARP_], null));
{
var G__11511 = (i__11509 + (1));
i__11509 = G__11511;
continue;
}
} else
{return true;
}
break;
}
})())
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11510),iter__11507.call(null,cljs.core.chunk_rest.call(null,s__11508__$2)));
} else
{return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__11510),null);
}
} else
{var c = cljs.core.first.call(null,s__11508__$2);return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,p1__11506_SHARP_], null),iter__11507.call(null,cljs.core.rest.call(null,s__11508__$2)));
}
} else
{return null;
}
break;
}
}),null,null));
});return iter__4284__auto__.call(null,p2__11505_SHARP_);
})());
}),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u043F\u0442\u043A","\u0431\u0434\u0433","\u0447\u0446","\u0441\u0444\u0448\u0449\u0445","\u0437\u0432\u0436","\u043C\u043D","\u043B","\u0440","\u0439"], null)));
syllab.sm5 = (function sm5(m){var vec__11514 = m;var comp_m = cljs.core.nth.call(null,vec__11514,(0),null);var vm = cljs.core.nth.call(null,vec__11514,(1),null);var cm = cljs.core.nthnext.call(null,vec__11514,(2));var cm__$1 = orphoep._PLUS__PLUS_.call(null,cm);var son_vals = cljs.core.mapv.call(null,((function (vec__11514,comp_m,vm,cm,cm__$1){
return (function (p1__11512_SHARP_){return cljs.core.get.call(null,syllab.son_scale,p1__11512_SHARP_,p1__11512_SHARP_);
});})(vec__11514,comp_m,vm,cm,cm__$1))
,orphoep._PLUS__PLUS_.call(null,cm__$1).toLowerCase());var min_ix = cljs.core.into_array.call(null,son_vals).indexOf(cljs.core.apply.call(null,cljs.core.min,son_vals));return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [vm,orphoep._PLUS__PLUS_.call(null,cljs.core.take.call(null,min_ix,cm__$1)),"-",orphoep._PLUS__PLUS_.call(null,cljs.core.drop.call(null,min_ix,cm__$1))], null);
});
syllab.cluster_find = (function cluster_find(mod,word){return orphoep.__.call(null,word,syllab.concluster_pat,(function (p1__11515_SHARP_,p2__11516_SHARP_,p3__11517_SHARP_){return orphoep._PLUS__PLUS_.call(null,mod.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11515_SHARP_,p2__11516_SHARP_,p3__11517_SHARP_], null)));
}));
});
syllab.vow_clusters_sep = (function vow_clusters_sep(word){return orphoep.__.call(null,word,syllab.vowcluster_pat,(function (p1__11518_SHARP_){return orphoep._PLUS__PLUS_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__11518_SHARP_,"-"], null));
}));
});
syllab.syll_single_sys = (function syll_single_sys(sys,word){return cljs.core.reduce.call(null,(function (p1__11520_SHARP_,p2__11519_SHARP_){return p2__11519_SHARP_.call(null,p1__11520_SHARP_);
}),word,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [orphoep.orpho_single,translit.translit,cljs.core.partial.call(null,syllab.cluster_find,sys),syllab.vow_clusters_sep], null));
});
syllab.syll_single = (function syll_single(word){return cljs.core.map.call(null,(function (m){return cljs.core.reduce.call(null,(function (p1__11522_SHARP_,p2__11521_SHARP_){return p2__11521_SHARP_.call(null,p1__11522_SHARP_);
}),word.toLowerCase(),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [orphoep.orpho_single,translit.translit,cljs.core.partial.call(null,syllab.cluster_find,m),syllab.vow_clusters_sep], null));
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [syllab.sm1,syllab.sm2,syllab.sm3,syllab.sm4,syllab.sm5], null));
});
goog.exportSymbol('syllab.syll_single', syllab.syll_single);
