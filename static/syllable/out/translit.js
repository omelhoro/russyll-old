// Compiled by ClojureScript 0.0-2268
goog.provide('translit');
goog.require('cljs.core');
goog.require('orphoep');
goog.require('orphoep');
goog.require('globals');
cljs.core.enable_console_print_BANG_.call(null);
translit.palat_pat = cljs.core.re_pattern.call(null,globals.sformat.call(null,"[%s](?=\\**[%s])",orphoep._PLUS__PLUS_.call(null,clojure.set.difference.call(null,globals.rus_cons,cljs.core.set.call(null,"\u0436\u0446\u0448\u0447\u0449"))),orphoep._PLUS__PLUS_.call(null,globals.pals_vows)));
translit.j_extract_pat = cljs.core.re_pattern.call(null,globals.sformat.call(null,"([%s])([\u044A\u044C])([%s])?",orphoep._PLUS__PLUS_.call(null,globals.rus_cons),orphoep._PLUS__PLUS_.call(null,globals.all_vows)));
translit.j_test = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u043E\u0431\u044A\u044F\u0432\u0438\u0442\u044C","\u043D\u044C\u044E","\u043E\u0431\u044A\u0435\u043C"], null);
translit.j_extract_fn = (function j_extract_fn(m){var vec__11524 = m;var comp = cljs.core.nth.call(null,vec__11524,(0),null);var cm = cljs.core.nth.call(null,vec__11524,(1),null);var sg = cljs.core.nth.call(null,vec__11524,(2),null);var vm = cljs.core.nth.call(null,vec__11524,(3),null);var j = (((vm == null))?"":"\u0439");if((cljs.core._EQ_.call(null,cljs.core.count.call(null,m),(2))) && (cljs.core._EQ_.call(null,"\u044C",cljs.core.last.call(null,m))))
{return cljs.core.first.call(null,m).toUpperCase();
} else
{if(cljs.core._EQ_.call(null,sg,"\u044C"))
{return orphoep._PLUS__PLUS_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cm.toUpperCase(),j,vm], null));
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return orphoep._PLUS__PLUS_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cm,j,vm], null));
} else
{return null;
}
}
}
});
translit.j_extract = (function j_extract(word){return orphoep.__.call(null,word,translit.j_extract_pat,(function (p1__11525_SHARP_){return translit.j_extract_fn.call(null,p1__11525_SHARP_);
}));
});
cljs.core.map.call(null,translit.j_extract,translit.j_test);
translit.palat_extract = (function palat_extract(word){return orphoep.__.call(null,word,translit.palat_pat,(function (p1__11526_SHARP_){return p1__11526_SHARP_.toUpperCase();
}));
});
translit.translit = (function translit__$1(word){return cljs.core.reduce.call(null,(function (p1__11528_SHARP_,p2__11527_SHARP_){return p2__11527_SHARP_.call(null,p1__11528_SHARP_);
}),word,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [translit.j_extract,translit.palat_extract], null));
});
goog.exportSymbol('translit.translit', translit.translit);
