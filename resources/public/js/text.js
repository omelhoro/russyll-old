// Compiled by ClojureScript 1.7.48 {}
goog.provide('text');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('globals');
goog.require('syllab');
goog.require('orphoep');
goog.require('translit');
text.bef = "\u0431`\u0443\u0431\u043B\u0438\u043A\u0438`> <!(\u0434\u0435\u043A\u0430\u0431\u0440`\u044F,) !+_)\u0432\u0441\u0435\u0433\u0434`\u0430!@#$%^&*()_[\u043F\u0440\u0438`\u044F\u0442\u043D\u043E]; \u043F\u043E\u043B`\u0443\u0447\u0438\u0442 \u043D`\u043E\u0432\u044B\u0439 \u0430\u0432\u0442\u043E\u043C\u043E\u0431`\u0438\u043B\u044C \u0445\u043E\u0442\u044C \u0438 \u043D\u0430\u043D\u0435\u0434`\u0435\u043B\u044E \u0443\u043D`\u043E\u0432\u043E\u0433\u043E.";
text.tok_pat = /([\u2000-\u206F\u2E00-\u2E7F\'!\"#\$%&\(\)\*\+,\-\.\\/:;<=>\?@\[\]\^_`\{\|\}~ ])/;
text.tokenize = (function text$tokenize(t,stress){
var temp_stress = "\u00E5";
var splitted_text = clojure.string.split.call(null,orphoep.__.call(null,t,stress,temp_stress),text.tok_pat);
return cljs.core.map.call(null,((function (temp_stress,splitted_text){
return (function (p1__7666_SHARP_){
return orphoep.__.call(null,p1__7666_SHARP_,temp_stress,"*");
});})(temp_stress,splitted_text))
,cljs.core.filter.call(null,((function (temp_stress,splitted_text){
return (function (p1__7667_SHARP_){
return cljs.core.not_EQ_.call(null,p1__7667_SHARP_,"");
});})(temp_stress,splitted_text))
,splitted_text));
});
text.tokenize.call(null,text.bef,"`");
text.ru_vows = /[иеаоуяюыёэ]/i;
text.set_of_vals = (function text$set_of_vals(t){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.call(null,(function (p1__7668_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__7668_SHARP_,syllab.syll_single.call(null,p1__7668_SHARP_)],null));
}),cljs.core.filter.call(null,(function (p1__7669_SHARP_){
var ar = cljs.core.take.call(null,(1),cljs.core.re_seq.call(null,text.ru_vows,p1__7669_SHARP_));
return (cljs.core.count.call(null,ar) > (0));
}),cljs.core.set.call(null,t))));
});
text.text_by_model = (function text$text_by_model(t,s,m){
return cljs.core.map.call(null,(function (p1__7670_SHARP_){
var map_models = s.call(null,p1__7670_SHARP_,p1__7670_SHARP_);
if(cljs.core.vector_QMARK_.call(null,map_models)){
return map_models.call(null,m);
} else {
return map_models;
}
}),t);
});
text.update_map_r = (function text$update_map_r(d,i,s,n){
return cljs.core.update_in.call(null,d,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [s], null),(function (a){
if((a == null)){
return cljs.core.update_in.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),(function (p1__7671_SHARP_){
return (p1__7671_SHARP_ + n);
}));
} else {
return cljs.core.update_in.call(null,a,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),(function (p1__7672_SHARP_){
return (p1__7672_SHARP_ + n);
}));
}
}));
});
text.text_stats = (function text$text_stats(t,s){
var freq_map = cljs.core.frequencies.call(null,t);
return cljs.core.reduce.call(null,((function (freq_map){
return (function (d,p__7677){
var vec__7678 = p__7677;
var k = cljs.core.nth.call(null,vec__7678,(0),null);
var v = cljs.core.nth.call(null,vec__7678,(1),null);
var freq = freq_map.call(null,k);
return cljs.core.reduce_kv.call(null,((function (freq,vec__7678,k,v,freq_map){
return (function (a,i,w){
return cljs.core.reduce.call(null,((function (freq,vec__7678,k,v,freq_map){
return (function (p1__7673_SHARP_,p2__7674_SHARP_){
return text.update_map_r.call(null,p1__7673_SHARP_,i,p2__7674_SHARP_,freq);
});})(freq,vec__7678,k,v,freq_map))
,a,clojure.string.split.call(null,w,/-/));
});})(freq,vec__7678,k,v,freq_map))
,d,v);
});})(freq_map))
,cljs.core.PersistentArrayMap.EMPTY,s);
});
text.test_text = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a","a","b","b"], null);
text.test_set = new cljs.core.PersistentArrayMap(null, 1, ["a",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["a-c","b-e","a-a"], null)], null);
text.text_stats.call(null,text.test_text,text.test_set);

//# sourceMappingURL=text.js.map