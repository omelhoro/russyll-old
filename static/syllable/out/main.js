// Compiled by ClojureScript 0.0-2268
goog.provide('main');
goog.require('cljs.core');
goog.require('globals');
goog.require('translit');
goog.require('domina.css');
goog.require('orphoep');
goog.require('syllab');
goog.require('domina');
goog.require('domina.events');
goog.require('domina');
goog.require('domina.events');
goog.require('domina.css');
goog.require('translit');
goog.require('orphoep');
goog.require('syllab');
goog.require('globals');
goog.require('goog.net.XhrIo');
cljs.core.enable_console_print_BANG_.call(null);
main.syllaby = (function syllaby(word){var sylls = syllab.syll_single.call(null,word);var row = domina.html_to_dom.call(null,globals.sformat.call(null,"<tr class='syll-row'><td class='lemma'>%s</td></tr>",word));cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,((function (sylls,row){
return (function (i,w){var td = domina.html_to_dom.call(null,globals.sformat.call(null,"<td class='sm%d'></td>",i));return domina.append_BANG_.call(null,row,domina.set_text_BANG_.call(null,td,w));
});})(sylls,row))
,sylls));
return row;
});
main.word_field = domina.css.sel.call(null,".syll-word");
main.tab_field = domina.css.sel.call(null,".syll-content");
main.inp_stress_sign = domina.css.sel.call(null,".stress-sign");
main.sample_text = domina.css.sel.call(null,".sample-text");
main.add_to_table = (function add_to_table(tr){return domina.append_BANG_.call(null,main.tab_field,tr);
});
main.syllaby_words = (function syllaby_words(evt){var stress_sign = domina.value.call(null,main.inp_stress_sign);var regex_s = cljs.core.re_pattern.call(null,orphoep.__.call(null,"[.,;:'\"!? ]",stress_sign,""));var single_word = domina.value.call(null,main.word_field);if(cljs.core._EQ_.call(null,"",single_word))
{return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (stress_sign,regex_s,single_word){
return (function (p1__11530_SHARP_){return main.add_to_table.call(null,main.syllaby.call(null,orphoep.__.call(null,p1__11530_SHARP_,stress_sign,"*")));
});})(stress_sign,regex_s,single_word))
,cljs.core.filter.call(null,cljs.core.not_empty,domina.text.call(null,main.sample_text).split(regex_s))));
} else
{return main.add_to_table.call(null,main.syllaby.call(null,orphoep.__.call(null,single_word,stress_sign,"*")));
}
});
main.reset = (function reset(evt){var childs = domina.css.sel.call(null,".syll-content");return domina.destroy_children_BANG_.call(null,childs);
});
setTimeout((function (){return domina.events.dispatch_BANG_.call(null,domina.css.sel.call(null,".syllab"),new cljs.core.Keyword(null,"click","click",1912301393),cljs.core.PersistentArrayMap.EMPTY);
}),(1500));
main._main = (function _main(){domina.events.listen_BANG_.call(null,domina.css.sel.call(null,".syllab"),new cljs.core.Keyword(null,"click","click",1912301393),main.syllaby_words);
return domina.events.listen_BANG_.call(null,domina.css.sel.call(null,".reset"),new cljs.core.Keyword(null,"click","click",1912301393),main.reset);
});
main._main.call(null);
