// Compiled by ClojureScript 1.7.48 {}
goog.provide('orphoep');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('ling_data');
orphoep.stress_sign = "*";
orphoep.__ = clojure.string.replace;
orphoep._PLUS__PLUS_ = clojure.string.join;
cljs.core.enable_console_print_BANG_.call(null);
orphoep.replace_patt = (function orphoep$replace_patt(val,p__7601){
var vec__7603 = p__7601;
var pat = cljs.core.nth.call(null,vec__7603,(0),null);
var rep = cljs.core.nth.call(null,vec__7603,(1),null);
if(cljs.core.list_QMARK_.call(null,pat)){
return cljs.core.reduce.call(null,((function (vec__7603,pat,rep){
return (function (p1__7599_SHARP_,p2__7600_SHARP_){
return orphoep.__.call(null,p1__7599_SHARP_,p2__7600_SHARP_,rep);
});})(vec__7603,pat,rep))
,val,pat);
} else {
return orphoep.__.call(null,val,pat,rep);
}
});
/**
 * Cases like [шт*ейгер брет*елька модерн денди дельта]
 */
orphoep.unpal_e = (function orphoep$unpal_e(){
var args__5572__auto__ = [];
var len__5565__auto___7608 = arguments.length;
var i__5566__auto___7609 = (0);
while(true){
if((i__5566__auto___7609 < len__5565__auto___7608)){
args__5572__auto__.push((arguments[i__5566__auto___7609]));

var G__7610 = (i__5566__auto___7609 + (1));
i__5566__auto___7609 = G__7610;
continue;
} else {
}
break;
}

var argseq__5573__auto__ = ((((1) < args__5572__auto__.length))?(new cljs.core.IndexedSeq(args__5572__auto__.slice((1)),(0))):null);
return orphoep.unpal_e.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5573__auto__);
});

orphoep.unpal_e.cljs$core$IFn$_invoke$arity$variadic = (function (word,p__7606){
var vec__7607 = p__7606;
var lemma = cljs.core.nth.call(null,vec__7607,(0),null);
var strd_ix = word.indexOf(orphoep.stress_sign);
var word_unstrd = orphoep.__.call(null,word,orphoep.stress_sign,"");
var lemma__$1 = ((cljs.core._EQ_.call(null,lemma,null))?word_unstrd:lemma);
var patts = cljs.core.get.call(null,ling_data.e_rep_map,lemma__$1,cljs.core.PersistentVector.EMPTY);
var repld = cljs.core.reduce.call(null,orphoep.replace_patt,word_unstrd,patts);
if((strd_ix >= (0))){
return [cljs.core.str(repld.substring((0),strd_ix)),cljs.core.str(orphoep.stress_sign),cljs.core.str(repld.substring(strd_ix))].join('');
} else {
return repld;
}
});

orphoep.unpal_e.cljs$lang$maxFixedArity = (1);

orphoep.unpal_e.cljs$lang$applyTo = (function (seq7604){
var G__7605 = cljs.core.first.call(null,seq7604);
var seq7604__$1 = cljs.core.next.call(null,seq7604);
return orphoep.unpal_e.cljs$core$IFn$_invoke$arity$variadic(G__7605,seq7604__$1);
});
orphoep.hard_pron_patts = cljs.core.list(cljs.core.list("\u0441\u0442\u043D","\u0441\u043D"),cljs.core.list("\u0437\u0434\u043D","\u0437\u043D"),cljs.core.list("\u0441\u0442\u043B","\u0441\u043B"),cljs.core.list(cljs.core.list("\u0441\u0442\u0446","\u0437\u0434\u0446"),"\u0441\u0446"),cljs.core.list(cljs.core.list("\u043D\u0442\u0441\u043A","\u043D\u0434\u0441\u043A"),"\u043D\u0441\u043A"),cljs.core.list("\u0440\u0434\u0446","\u0440\u0446"),cljs.core.list("\u043B\u043D\u0446","\u043D\u0446"),cljs.core.list("\u0441\u0442\u0441\u043A","\u0441\u0441\u043A"),cljs.core.list(cljs.core.list("\u0442\u044C\u0441\u044F","\u0442\u0441\u044F"),"\u0442\u0441\u0430"),cljs.core.list("\u0448\u044C\u0441\u044F","\u0448\u0441\u0430"),cljs.core.list("\u0448\u044C","\u0448"),cljs.core.list("\u0432\u0441\u0442\u0432","\u0441\u0442\u0432"),cljs.core.list("\u043A\u043E\u043D*\u0435\u0447\u043D\u043E","\u043A\u043E\u043D*\u0435\u0448\u043D\u043E"),cljs.core.list("\u0441\u043A*\u0443\u0447\u043D","\u0441\u043A*\u0443\u0448\u043D"),cljs.core.list("\u043D\u0434\u0448","\u043D\u0448"),cljs.core.list("\u0440\u0433\u0441\u043A","\u0440\u0441\u043A"));
/**
 * Cases like [солнце сердце поздно честный]
 */
orphoep.hard_pron = (function orphoep$hard_pron(word){
return cljs.core.reduce.call(null,orphoep.replace_patt,word,orphoep.hard_pron_patts);
});
orphoep.cluster_assim_test = cljs.core.list("\u043B\u0435\u0433\u043A\u043E","\u043C\u044F\u0433\u043A\u043E","\u0441\u0447\u0438\u0442\u0430\u0442\u044C");
orphoep.cluster_assim_patts = cljs.core.list(cljs.core.list(cljs.core.list("\u0441\u0448","\u0437\u0448"),"\u0448\u0448"),cljs.core.list(cljs.core.list("\u0441\u0436","\u0437\u0436"),"\u0436\u0436"),cljs.core.list(cljs.core.list("\u0441\u0447","\u0437\u0447","\u0441\u0449","\u0436\u0447"),"\u0449"),cljs.core.list(cljs.core.list("\u0442\u0447","\u0434\u0447"),"\u0447\u0447"),cljs.core.list(cljs.core.list("\u0442\u0449","\u0434\u0449"),"\u0447\u0449"),cljs.core.list(cljs.core.list("\u0433\u043A\u0438"),"\u0445\u044C\u043A\u0438"),cljs.core.list(cljs.core.list("\u0433\u043A"),"\u0445\u043A"),cljs.core.list(cljs.core.list("\u0445\u0433"),"\u0433"));
orphoep.cluster_assim = (function orphoep$cluster_assim(word){
return cljs.core.reduce.call(null,orphoep.replace_patt,word,orphoep.cluster_assim_patts);
});
orphoep.reg_assim = cljs.core.PersistentHashMap.fromArrays(["\u0448","\u0431","\u0433","\u0437","\u043F","\u0442","\u0432","\u0441","\u0436","\u0434","\u043A"],["\u0436","\u043F","\u043A","\u0441","\u0431","\u0434","\u0444","\u0437","\u0448","\u0442","\u0433"]);
orphoep.cons_2 = "\u043B\u043C\u043D\u0440\u0446\u043A\u0433\u0437\u0432\u043F\u0434\u0436\u0447\u0448\u0441\u0442\u0431\u044C\u044A";
orphoep.vd_cons = cljs.core.set.call(null,"\u0431\u0434\u0433\u0436\u0432\u0437");
orphoep.neutral_cons = cljs.core.set.call(null,"\u0440\u043D\u043C\u043B");
orphoep.vl_cons = cljs.core.set.call(null,"\u043F\u0442\u043A\u0448\u0444\u0441");
orphoep.devoice = (function orphoep$devoice(word,islast){
var pos = (cljs.core.truth_(islast)?(cljs.core.count.call(null,word) - (1)):(cljs.core.count.call(null,word) - (2)));
return cljs.core.assoc.call(null,word,pos,cljs.core.get.call(null,orphoep.reg_assim,[cljs.core.str(cljs.core.nth.call(null,word,pos))].join('')));
});
orphoep.end_assim = (function orphoep$end_assim(word){

var word__$1 = cljs.core.mapv.call(null,cljs.core.char$,word);
var lt = cljs.core.last.call(null,word__$1);
var plt = cljs.core.last.call(null,cljs.core.butlast.call(null,word__$1));
if(cljs.core.truth_((function (){var or__4526__auto__ = orphoep.vd_cons.call(null,lt);
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
var and__4514__auto__ = orphoep.vd_cons.call(null,plt);
if(cljs.core.truth_(and__4514__auto__)){
return cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,"\u044C\u044A"),lt);
} else {
return and__4514__auto__;
}
}
})())){
return orphoep._PLUS__PLUS_.call(null,orphoep.devoice.call(null,word__$1,orphoep.vd_cons.call(null,lt)));
} else {
return orphoep._PLUS__PLUS_.call(null,word__$1);
}
});
orphoep.reg_assim_pat = cljs.core.re_pattern.call(null,orphoep._PLUS__PLUS_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["[",orphoep.cons_2,"]{2,}"], null)));
orphoep.deassim_con = (function orphoep$deassim_con(con,modus){
var new_modus = ((cljs.core._EQ_.call(null,modus,""))?(cljs.core.truth_(orphoep.vl_cons.call(null,con))?"vl":(cljs.core.truth_(orphoep.vd_cons.call(null,con))?"vd":""
)):modus);
if(cljs.core.contains_QMARK_.call(null,orphoep.neutral_cons,con)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [con,""], null);
} else {
if(cljs.core.truth_((function (){var or__4526__auto__ = (function (){var and__4514__auto__ = orphoep.vl_cons.call(null,con);
if(cljs.core.truth_(and__4514__auto__)){
return cljs.core._EQ_.call(null,new_modus,"vd");
} else {
return and__4514__auto__;
}
})();
if(cljs.core.truth_(or__4526__auto__)){
return or__4526__auto__;
} else {
var and__4514__auto__ = orphoep.vd_cons.call(null,con);
if(cljs.core.truth_(and__4514__auto__)){
return cljs.core._EQ_.call(null,new_modus,"vl");
} else {
return and__4514__auto__;
}
}
})())){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.call(null,orphoep.reg_assim,[cljs.core.str(con)].join(''),con),new_modus], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [con,new_modus], null);
}
}
});
orphoep.deassim = (function orphoep$deassim(cons,modus){
if(cljs.core.truth_(cljs.core.not_empty.call(null,cons))){
var vec__7612 = orphoep.deassim_con.call(null,cljs.core.first.call(null,cons),modus);
var cc = cljs.core.nth.call(null,vec__7612,(0),null);
var nmodus = cljs.core.nth.call(null,vec__7612,(1),null);
return cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cc], null),orphoep$deassim.call(null,cljs.core.rest.call(null,cons),nmodus));
} else {
return cljs.core.PersistentVector.EMPTY;
}
});
orphoep.reg_assim_repl = (function orphoep$reg_assim_repl(word){
return orphoep.__.call(null,word,orphoep.reg_assim_pat,(function (p1__7613_SHARP_){
var revd = cljs.core.reverse.call(null,p1__7613_SHARP_);
var vec__7615 = ((cljs.core._EQ_.call(null,cljs.core.first.call(null,revd),"\u0432"))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first.call(null,revd),cljs.core.rest.call(null,revd)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["",revd], null));
var v = cljs.core.nth.call(null,vec__7615,(0),null);
var without_v = cljs.core.nth.call(null,vec__7615,(1),null);
if((cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,revd))) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,revd),"\u0432"))){
return p1__7613_SHARP_;
} else {
return orphoep._PLUS__PLUS_.call(null,cljs.core.reverse.call(null,orphoep._PLUS__PLUS_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [v,orphoep._PLUS__PLUS_.call(null,orphoep.deassim.call(null,without_v,""))], null))));
}
}));
});
orphoep.reg_pal_pat = cljs.core.re_pattern.call(null,"(\u0441\u0442|\u0437\u0434|\u0441\u0434|\u043D\u0434|\u043D\u0447|\u043D\u0442|\u043D\u0441|\u043D\u0437)(?=\\**[\u044E\u0435\u044F\u044C\u0438\u0451])");
/**
 * Words like [здесь, зонтик истинный все творец]
 */
orphoep.reg_pal = (function orphoep$reg_pal(word){
return orphoep.__.call(null,word,orphoep.reg_pal_pat,(function (match){
var res = match;
return orphoep._PLUS__PLUS_.call(null,"\u044C",res);
}));
});
orphoep.excp_ogo = cljs.core.set.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u0434\u043E\u0440\u043E\u0433\u043E","\u043C\u043D\u043E\u0433\u043E","\u0441\u0442\u0440\u043E\u0433\u043E"], null));
orphoep.ogo_pat = cljs.core.re_pattern.call(null,"[\u0435\u043E]\u0433\\**\u043E$");
/**
 * Cases like [дорого, дорогого большого никого строго]. But exceptions like [дорого много строго]
 */
orphoep.ogo_ovo = (function orphoep$ogo_ovo(word){
var lenght = cljs.core.count.call(null,word);
var repfn = ((function (lenght){
return (function (word__$1){
return orphoep.__.call(null,word__$1,orphoep.ogo_pat,((function (lenght){
return (function (p1__7616_SHARP_){
return orphoep.__.call(null,p1__7616_SHARP_,"\u0433","\u0432");
});})(lenght))
);
});})(lenght))
;
if(cljs.core.contains_QMARK_.call(null,orphoep.excp_ogo,word)){
return word;
} else {
return repfn.call(null,word);
}
});
orphoep.chto_trans = (function orphoep$chto_trans(word){
var isstressed = cljs.core.not_EQ_.call(null,(-1),word.indexOf("*"));
if((cljs.core._EQ_.call(null,word,"\u0447\u0442\u043E")) || (cljs.core._EQ_.call(null,word,"\u0447\u0442*\u043E"))){
if(isstressed){
return "\u0448\u0442*\u043E";
} else {
return "\u0448\u0442\u043E";
}
} else {
return word;
}
});
orphoep.dash_rep = (function orphoep$dash_rep(word){
return orphoep.__.call(null,word,/[-’]/,"");
});
orphoep.rus_cons = cljs.core.set.call(null,"\u043B\u043C\u043D\u0440\u0446\u043A\u0433\u0437\u0432\u043F\u0434\u0436\u0447\u0448\u0441\u0442\u0431\u0444\u0449");
orphoep.dubcon_pat = cljs.core.re_pattern.call(null,orphoep._PLUS__PLUS_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["([",orphoep._PLUS__PLUS_.call(null,orphoep.rus_cons),"])\\1"], null)));
orphoep.dubcon_alg = (function orphoep$dubcon_alg(w,p__7617){
var vec__7619 = p__7617;
var m = cljs.core.nth.call(null,vec__7619,(0),null);
var m1 = cljs.core.nth.call(null,vec__7619,(1),null);
var m__$1 = orphoep._PLUS__PLUS_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [m,m1], null));
var ix = w.indexOf(m__$1);
var first_l = cljs.core.first.call(null,m__$1);
var first_s = [cljs.core.str(first_l)].join('');
if(cljs.core._EQ_.call(null,ix,(0))){
return m__$1;
} else {
if(cljs.core._EQ_.call(null,cljs.core.count.call(null,w),(ix + (2)))){
return first_s;
} else {
if(cljs.core.truth_(orphoep.rus_cons.call(null,cljs.core.nth.call(null,w,(ix + (2)))))){
return first_s;
} else {
if(cljs.core.truth_(cljs.core.set.call(null,"\u0431\u0432\u0444\u0440\u043B\u0433").call(null,first_l))){
return first_s;
} else {
if(cljs.core.truth_(cljs.core.set.call(null,"\u0436\u0442\u0434\u0437\u0441").call(null,first_l))){
return m__$1;
} else {
if(cljs.core.truth_((function (){var and__4514__auto__ = ((ix - (2)) >= (0));
if(and__4514__auto__){
var and__4514__auto____$1 = cljs.core._EQ_.call(null,cljs.core.nth.call(null,w,(ix - (2))),"*");
if(and__4514__auto____$1){
return cljs.core.set.call(null,"\u043A\u043D\u043C\u043F").call(null,first_l);
} else {
return and__4514__auto____$1;
}
} else {
return and__4514__auto__;
}
})())){
return m__$1;
} else {
return first_s;

}
}
}
}
}
}
});
/**
 * Cases like [грамм русский аккуратный коммунист рассада]
 */
orphoep.dubcon = (function orphoep$dubcon(word){
return orphoep.__.call(null,word,orphoep.dubcon_pat,cljs.core.partial.call(null,orphoep.dubcon_alg,word));
});
orphoep.fns = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [orphoep.hard_pron,orphoep.unpal_e,orphoep.cluster_assim,orphoep.end_assim,orphoep.reg_assim_repl,orphoep.reg_pal,orphoep.ogo_ovo,orphoep.chto_trans,orphoep.dash_rep,orphoep.dubcon], null);
orphoep.orpho_single = (function orphoep$orpho_single(word){
return cljs.core.reduce.call(null,(function (p1__7621_SHARP_,p2__7620_SHARP_){
return p2__7620_SHARP_.call(null,p1__7621_SHARP_);
}),word,orphoep.fns);
});
goog.exportSymbol('orphoep.orpho_single', orphoep.orpho_single);

//# sourceMappingURL=orphoep.js.map