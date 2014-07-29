// Compiled by ClojureScript 0.0-2268
goog.provide('orphoep');
goog.require('cljs.core');
goog.require('goog.net.XhrIo');
goog.require('clojure.string');
orphoep.stress_sign = "*";
orphoep.__ = clojure.string.replace;
orphoep._PLUS__PLUS_ = clojure.string.join;
cljs.core.enable_console_print_BANG_.call(null);
orphoep.replace_patt = (function replace_patt(val,p__11479){var vec__11481 = p__11479;var pat = cljs.core.nth.call(null,vec__11481,(0),null);var rep = cljs.core.nth.call(null,vec__11481,(1),null);if(cljs.core.list_QMARK_.call(null,pat))
{return cljs.core.reduce.call(null,((function (vec__11481,pat,rep){
return (function (p1__11477_SHARP_,p2__11478_SHARP_){return orphoep.__.call(null,p1__11477_SHARP_,p2__11478_SHARP_,rep);
});})(vec__11481,pat,rep))
,val,pat);
} else
{return orphoep.__.call(null,val,pat,rep);
}
});
orphoep.unpal_e_test = cljs.core.list("\u0448\u0442*\u0435\u0439\u0433\u0435\u0440","\u0431\u0440\u0435\u0442*\u0435\u043B\u044C\u043A\u0430","\u043C\u043E\u0434\u0435\u0440\u043D","\u0434\u0435\u043D\u0434\u0438","\u0434\u0435\u043B\u044C\u0442\u0430");
orphoep.e_dict = (function (){var url = "/static/syllable/e_rep.json";var callback = ((function (url){
return (function (reply){var v = cljs.core.js__GT_clj.call(null,reply.target.getResponseJson());orphoep.e_dict = v;
return orphoep.e_dict;
});})(url))
;return goog.net.XhrIo.send(url,callback);
})();
/**
* @param {...*} var_args
*/
orphoep.unpal_e = (function() { 
var unpal_e__delegate = function (word,p__11482){var vec__11484 = p__11482;var lemma = cljs.core.nth.call(null,vec__11484,(0),null);var strd_ix = word.indexOf(orphoep.stress_sign);var word_unstrd = orphoep.__.call(null,word,orphoep.stress_sign,"");var lemma__$1 = ((cljs.core._EQ_.call(null,lemma,null))?word_unstrd:lemma);var patts = cljs.core.get.call(null,orphoep.e_dict,lemma__$1,cljs.core.PersistentVector.EMPTY);var repld = cljs.core.reduce.call(null,orphoep.replace_patt,word_unstrd,patts);if((strd_ix >= (0)))
{return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(repld.substring((0),strd_ix))+cljs.core.str.cljs$core$IFn$_invoke$arity$1(orphoep.stress_sign)+cljs.core.str.cljs$core$IFn$_invoke$arity$1(repld.substring(strd_ix)));
} else
{return repld;
}
};
var unpal_e = function (word,var_args){
var p__11482 = null;if (arguments.length > 1) {
  p__11482 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return unpal_e__delegate.call(this,word,p__11482);};
unpal_e.cljs$lang$maxFixedArity = 1;
unpal_e.cljs$lang$applyTo = (function (arglist__11485){
var word = cljs.core.first(arglist__11485);
var p__11482 = cljs.core.rest(arglist__11485);
return unpal_e__delegate(word,p__11482);
});
unpal_e.cljs$core$IFn$_invoke$arity$variadic = unpal_e__delegate;
return unpal_e;
})()
;
orphoep.hp_test = cljs.core.list("\u0441\u043E\u043B\u043D\u0446\u0435","\u0441\u0435\u0440\u0434\u0446\u0435","\u0440\u0430\u0437\u0434\u043D\u0438\u0446\u0430","\u0447\u0435\u0441\u0442\u043D\u044B\u0439");
orphoep.hard_pron_patts = cljs.core.list(cljs.core.list("\u0441\u0442\u043D","\u0441\u043D"),cljs.core.list("\u0437\u0434\u043D","\u0437\u043D"),cljs.core.list("\u0441\u0442\u043B","\u0441\u043B"),cljs.core.list(cljs.core.list("\u0441\u0442\u0446","\u0437\u0434\u0446"),"\u0441\u0446"),cljs.core.list(cljs.core.list("\u043D\u0442\u0441\u043A","\u043D\u0434\u0441\u043A"),"\u043D\u0441\u043A"),cljs.core.list("\u0440\u0434\u0446","\u0440\u0446"),cljs.core.list("\u043B\u043D\u0446","\u043D\u0446"),cljs.core.list("\u0441\u0442\u0441\u043A","\u0441\u0441\u043A"),cljs.core.list(cljs.core.list("\u0442\u044C\u0441\u044F","\u0442\u0441\u044F"),"\u0442\u0441\u0430"),cljs.core.list("\u0448\u044C\u0441\u044F","\u0448\u0441\u0430"),cljs.core.list("\u0448\u044C","\u0448"),cljs.core.list("\u0432\u0441\u0442\u0432","\u0441\u0442\u0432"),cljs.core.list("\u043A\u043E\u043D*\u0435\u0447\u043D\u043E","\u043A\u043E\u043D*\u0435\u0448\u043D\u043E"),cljs.core.list("\u0441\u043A*\u0443\u0447\u043D","\u0441\u043A*\u0443\u0448\u043D"),cljs.core.list("\u043D\u0434\u0448","\u043D\u0448"),cljs.core.list("\u0440\u0433\u0441\u043A","\u0440\u0441\u043A"));
orphoep.hard_pron = (function hard_pron(word){return cljs.core.reduce.call(null,orphoep.replace_patt,word,orphoep.hard_pron_patts);
});
orphoep.cluster_assim_test = cljs.core.list("\u043B\u0435\u0433\u043A\u043E","\u043C\u044F\u0433\u043A\u043E","\u0441\u0447\u0438\u0442\u0430\u0442\u044C");
orphoep.cluster_assim_patts = cljs.core.list(cljs.core.list(cljs.core.list("\u0441\u0448","\u0437\u0448"),"\u0448\u0448"),cljs.core.list(cljs.core.list("\u0441\u0436","\u0437\u0436"),"\u0436\u0436"),cljs.core.list(cljs.core.list("\u0441\u0447","\u0437\u0447","\u0441\u0449","\u0436\u0447"),"\u0449"),cljs.core.list(cljs.core.list("\u0442\u0447","\u0434\u0447"),"\u0447\u0447"),cljs.core.list(cljs.core.list("\u0442\u0449","\u0434\u0449"),"\u0447\u0449"),cljs.core.list(cljs.core.list("\u0433\u043A\u0438"),"\u0445\u044C\u043A\u0438"),cljs.core.list(cljs.core.list("\u0433\u043A"),"\u0445\u043A"),cljs.core.list(cljs.core.list("\u0445\u0433"),"\u0433"));
orphoep.cluster_assim = (function cluster_assim(word){return cljs.core.reduce.call(null,orphoep.replace_patt,word,orphoep.cluster_assim_patts);
});
orphoep.reg_assim = cljs.core.PersistentHashMap.fromArrays(["\u0448","\u0431","\u0433","\u0437","\u043F","\u0442","\u0432","\u0441","\u0436","\u0434","\u043A"],["\u0436","\u043F","\u043A","\u0441","\u0431","\u0434","\u0444","\u0437","\u0448","\u0442","\u0433"]);
orphoep.cons_2 = "\u043B\u043C\u043D\u0440\u0446\u043A\u0433\u0437\u0432\u043F\u0434\u0436\u0447\u0448\u0441\u0442\u0431\u044C\u044A";
orphoep.vd_cons = (function() {
var vd_cons = null;
var vd_cons__0 = (function (){return cljs.core.set.call(null,"\u0431\u0434\u0433\u0436\u0432\u0437");
});
var vd_cons__1 = (function (itm){return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,"\u0431\u0434\u0433\u0436\u0432\u0437"),itm);
});
vd_cons = function(itm){
switch(arguments.length){
case 0:
return vd_cons__0.call(this);
case 1:
return vd_cons__1.call(this,itm);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vd_cons.cljs$core$IFn$_invoke$arity$0 = vd_cons__0;
vd_cons.cljs$core$IFn$_invoke$arity$1 = vd_cons__1;
return vd_cons;
})()
;
orphoep.neutral_cons = cljs.core.set.call(null,"\u0440\u043D\u043C\u043B");
orphoep.vl_cons = (function() {
var vl_cons = null;
var vl_cons__0 = (function (){return cljs.core.set.call(null,"\u043F\u0442\u043A\u0448\u0444\u0441");
});
var vl_cons__1 = (function (itm){return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,"\u043F\u0442\u043A\u0448\u0444\u0441"),itm);
});
vl_cons = function(itm){
switch(arguments.length){
case 0:
return vl_cons__0.call(this);
case 1:
return vl_cons__1.call(this,itm);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
vl_cons.cljs$core$IFn$_invoke$arity$0 = vl_cons__0;
vl_cons.cljs$core$IFn$_invoke$arity$1 = vl_cons__1;
return vl_cons;
})()
;
orphoep.devoice = (function devoice(word,islast){var pos = (cljs.core.truth_(islast)?(cljs.core.count.call(null,word) - (1)):(cljs.core.count.call(null,word) - (2)));return cljs.core.assoc.call(null,word,pos,cljs.core.get.call(null,orphoep.reg_assim,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.call(null,word,pos)))));
});
orphoep.end_assim_test = cljs.core.mapv.call(null,(function (x){return cljs.core.mapv.call(null,cljs.core.char$,x);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u043F\u043E\u0435\u0437\u0434","\u0432\u043D\u043E\u0432\u044C"], null));
orphoep.end_assim = (function end_assim(word){var word__$1 = cljs.core.mapv.call(null,cljs.core.char$,word);var lt = cljs.core.last.call(null,word__$1);var plt = cljs.core.last.call(null,cljs.core.butlast.call(null,word__$1));if((orphoep.vd_cons.call(null,lt)) || ((orphoep.vd_cons.call(null,plt)) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,"\u044C\u044A"),lt))))
{return orphoep._PLUS__PLUS_.call(null,orphoep.devoice.call(null,word__$1,orphoep.vd_cons.call(null,lt)));
} else
{return orphoep._PLUS__PLUS_.call(null,word__$1);
}
});
orphoep.reg_assim_pat = cljs.core.re_pattern.call(null,orphoep._PLUS__PLUS_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[",orphoep.cons_2,"]{2,}"], null)));
orphoep.deassim_con = (function deassim_con(con,modus){var new_modus = ((cljs.core._EQ_.call(null,modus,""))?((orphoep.vl_cons.call(null,con))?"vl":((orphoep.vd_cons.call(null,con))?"vd":((new cljs.core.Keyword(null,"else","else",-1508377146))?"":null))):modus);if(cljs.core.contains_QMARK_.call(null,orphoep.neutral_cons,con))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [con,""], null);
} else
{if(((orphoep.vl_cons.call(null,con)) && (cljs.core._EQ_.call(null,new_modus,"vd"))) || ((orphoep.vd_cons.call(null,con)) && (cljs.core._EQ_.call(null,new_modus,"vl"))))
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,orphoep.reg_assim,(''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(con)),con),new_modus], null);
} else
{return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [con,new_modus], null);
}
}
});
orphoep.deassim = (function deassim(cons,modus){if(cljs.core.truth_(cljs.core.not_empty.call(null,cons)))
{var vec__11487 = orphoep.deassim_con.call(null,cljs.core.first.call(null,cons),modus);var cc = cljs.core.nth.call(null,vec__11487,(0),null);var nmodus = cljs.core.nth.call(null,vec__11487,(1),null);return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cc], null),deassim.call(null,cljs.core.rest.call(null,cons),nmodus));
} else
{return cljs.core.PersistentVector.EMPTY;
}
});
orphoep.reg_assim_repl = (function reg_assim_repl(word){return orphoep.__.call(null,word,orphoep.reg_assim_pat,(function (p1__11488_SHARP_){var revd = cljs.core.reverse.call(null,p1__11488_SHARP_);if(cljs.core._EQ_.call(null,cljs.core.first.call(null,revd),"\u0432"))
{return p1__11488_SHARP_;
} else
{return orphoep._PLUS__PLUS_.call(null,cljs.core.reverse.call(null,orphoep.deassim.call(null,revd,"")));
}
}));
});
orphoep.reg_assim_test = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u043C\u0443\u0436\u0441\u043A\u043E\u0439","\u043E\u0442\u0434\u044B\u0445","\u0441\u0431\u043E\u043A\u0443","\u0432\u0441\u0435","\u0442\u0432\u043E\u0440\u0435\u0446","\u0441\u0434\u0435\u043B\u0430\u0442\u044C"], null);
cljs.core.map.call(null,orphoep.reg_assim_repl,orphoep.reg_assim_test);
orphoep.reg_pal_test = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u0437\u0434\u0435\u0441\u044C,","\u0437\u043E\u043D\u0442\u0438\u043A","\u0438\u0441\u0442\u0438\u043D\u043D\u044B\u0439","\u0432\u0441\u0435","\u0442\u0432\u043E\u0440\u0435\u0446"], null);
orphoep.reg_pal_pat = cljs.core.re_pattern.call(null,"(\u0441\u0442|\u0437\u0434|\u0441\u0434|\u043D\u0434|\u043D\u0447|\u043D\u0442|\u043D\u0441|\u043D\u0437)\\**[\u044E\u0435\u044F\u044C\u0438\u0451]");
orphoep.reg_pal = (function reg_pal(word){return orphoep.__.call(null,word,orphoep.reg_pal_pat,(function (p1__11489_SHARP_){return (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,cljs.core.first.call(null,p1__11489_SHARP_)))+"\u044C"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,p1__11489_SHARP_).substring((1))));
}));
});
orphoep.excp_ogo = cljs.core.set.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u0434\u043E\u0440\u043E\u0433\u043E","\u043C\u043D\u043E\u0433\u043E","\u0441\u0442\u0440\u043E\u0433\u043E"], null));
orphoep.ogo_pat = cljs.core.re_pattern.call(null,"[\u0435\u043E]\u0433\\**\u043E$");
orphoep.ogo_ovo_test = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u0434\u043E\u0440\u043E\u0433\u043E,","\u0434\u043E\u0440\u043E\u0433\u043E\u0433\u043E","\u0431\u043E\u043B\u044C\u0448\u043E\u0433\u043E","\u043D\u0438\u043A\u043E\u0433\u043E","\u0441\u0442\u0440\u043E\u0433\u043E"], null);
orphoep.ogo_ovo = (function ogo_ovo(word){var lenght = cljs.core.count.call(null,word);var repfn = ((function (lenght){
return (function (word__$1){return orphoep.__.call(null,word__$1,orphoep.ogo_pat,((function (lenght){
return (function (p1__11490_SHARP_){return orphoep.__.call(null,p1__11490_SHARP_,"\u0433","\u0432");
});})(lenght))
);
});})(lenght))
;if(cljs.core.contains_QMARK_.call(null,orphoep.excp_ogo,word))
{return word;
} else
{return repfn.call(null,word);
}
});
orphoep.chto_trans = (function chto_trans(word){var isstressed = cljs.core.not_EQ_.call(null,(-1),word.indexOf("*"));if((cljs.core._EQ_.call(null,word,"\u0447\u0442\u043E")) || (cljs.core._EQ_.call(null,word,"\u0447\u0442*\u043E")))
{if(isstressed)
{return "\u0448\u0442*\u043E";
} else
{return "\u0448\u0442\u043E";
}
} else
{return word;
}
});
orphoep.dash_rep = (function dash_rep(word){return orphoep.__.call(null,word,"-","");
});
orphoep.rus_cons = cljs.core.set.call(null,"\u043B\u043C\u043D\u0440\u0446\u043A\u0433\u0437\u0432\u043F\u0434\u0436\u0447\u0448\u0441\u0442\u0431\u0444\u0449");
orphoep.dubcon_pat = cljs.core.re_pattern.call(null,orphoep._PLUS__PLUS_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["([",orphoep._PLUS__PLUS_.call(null,orphoep.rus_cons),"])\\1"], null)));
orphoep.dubcon_alg = (function dubcon_alg(w,p__11491){var vec__11493 = p__11491;var m = cljs.core.nth.call(null,vec__11493,(0),null);var m1 = cljs.core.nth.call(null,vec__11493,(1),null);var ix = w.indexOf(m);var first_l = cljs.core.first.call(null,m);var first_s = (''+cljs.core.str.cljs$core$IFn$_invoke$arity$1(first_l));if(cljs.core._EQ_.call(null,ix,(0)))
{return m;
} else
{if(cljs.core._EQ_.call(null,cljs.core.count.call(null,w),(ix + (2))))
{return first_s;
} else
{if(cljs.core.contains_QMARK_.call(null,orphoep.rus_cons,cljs.core.nth.call(null,w,(ix + (2)))))
{return first_s;
} else
{if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,"\u0431\u0432\u0444\u0440\u043B\u0433"),first_l))
{return first_s;
} else
{if(cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,"\u0436\u0442\u0434\u0437\u0441"),first_l))
{return m;
} else
{if((((ix - (2)) >= (0))) && (cljs.core._EQ_.call(null,cljs.core.nth.call(null,w,(ix - (2))),"*")) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,"\u043A\u043D\u043C\u043F"),first_l)))
{return m;
} else
{if(new cljs.core.Keyword(null,"else","else",-1508377146))
{return first_s;
} else
{return null;
}
}
}
}
}
}
}
});
orphoep.dubcon = (function dubcon(word){return orphoep.__.call(null,word,orphoep.dubcon_pat,cljs.core.partial.call(null,orphoep.dubcon_alg,word));
});
orphoep.dubcon_test = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u0433\u0440\u0430\u043C\u043C","\u0440\u0443\u0441\u0441\u043A\u0438\u0439","\u0430\u043A\u043A\u0443\u0440\u0430\u0442\u043D\u044B\u0439","\u043A\u043E\u043C\u043C\u0443\u043D\u0438\u0441\u0442","\u0440\u0430\u0441\u0441\u0430\u0434\u0430"], null);
orphoep.fns = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [orphoep.hard_pron,orphoep.unpal_e,orphoep.cluster_assim,orphoep.end_assim,orphoep.reg_assim_repl,orphoep.reg_pal,orphoep.ogo_ovo,orphoep.chto_trans,orphoep.dash_rep,orphoep.dubcon], null);
orphoep.orpho_single = (function orpho_single(word){return cljs.core.reduce.call(null,(function (p1__11495_SHARP_,p2__11494_SHARP_){return p2__11494_SHARP_.call(null,p1__11495_SHARP_);
}),word,orphoep.fns);
});
goog.exportSymbol('orphoep.orpho_single', orphoep.orpho_single);
