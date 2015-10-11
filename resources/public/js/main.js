// Compiled by ClojureScript 1.7.48 {}
goog.provide('main');
goog.require('cljs.core');
goog.require('domina.css');
goog.require('domina');
goog.require('globals');
goog.require('goog.net.XhrIo');
goog.require('text');
goog.require('goog.storage.mechanism.HTML5SessionStorage');
goog.require('reagent.core');
goog.require('orphoep');
goog.require('domina.events');
goog.require('usertest');
goog.require('syllab');
cljs.core.enable_console_print_BANG_.call(null);
main.render_tablerow = (function main$render_tablerow(word,paradigm){
var row = domina.html_to_dom.call(null,globals.sformat.call(null,"<tr class='syll-row'><td class='lemma'>%s</td></tr>",word));
cljs.core.dorun.call(null,cljs.core.map_indexed.call(null,((function (row){
return (function (i,w){
var td = domina.html_to_dom.call(null,globals.sformat.call(null,"<td class='sm%d'></td>",i));
return domina.append_BANG_.call(null,row,domina.set_text_BANG_.call(null,td,w));
});})(row))
,paradigm));

return row;
});
main.ru_vows = (new RegExp("[\u0438\u0435\u0430\u043E\u0443\u044F\u044E\u044B\u0451\u044D]","i"));
main.word_field = domina.css.sel.call(null,".syll-word");
main.tab_field = domina.css.sel.call(null,".syll-content");
main.inp_stress_sign = domina.css.sel.call(null,".stress-sign");
main.sample_text = domina.css.sel.call(null,".sample-text");
main.add_to_table = (function main$add_to_table(tr){
return domina.append_BANG_.call(null,main.tab_field,tr);
});
main.syllaby_words = (function main$syllaby_words(evt){
var stress_sign = domina.value.call(null,main.inp_stress_sign);
var single_word = orphoep.__.call(null,domina.value.call(null,main.word_field),stress_sign,"*");
var splitted_t = text.tokenize.call(null,domina.value.call(null,main.sample_text),stress_sign);
var map_words = text.set_of_vals.call(null,splitted_t);
var text_fn = ((function (stress_sign,single_word,splitted_t,map_words){
return (function (evt__$1){
var model = (domina.value.call(null,domina.css.sel.call(null,"select[name='syl-model']")) | (0));
return domina.set_value_BANG_.call(null,domina.css.sel.call(null,"#text-of-syls"),orphoep._PLUS__PLUS_.call(null,text.text_by_model.call(null,splitted_t,map_words,model)));
});})(stress_sign,single_word,splitted_t,map_words))
;
var model_select = domina.css.sel.call(null,"select[name='syl-model']");
if(cljs.core._EQ_.call(null,"",single_word)){
cljs.core.dorun.call(null,cljs.core.map.call(null,((function (stress_sign,single_word,splitted_t,map_words,text_fn,model_select){
return (function (p1__9019_SHARP_){
return main.add_to_table.call(null,main.render_tablerow.call(null,cljs.core.key.call(null,p1__9019_SHARP_),cljs.core.val.call(null,p1__9019_SHARP_)));
});})(stress_sign,single_word,splitted_t,map_words,text_fn,model_select))
,map_words));

domina.events.listen_BANG_.call(null,model_select,new cljs.core.Keyword(null,"click","click",1912301393),text_fn);

return domina.events.dispatch_BANG_.call(null,model_select,new cljs.core.Keyword(null,"click","click",1912301393),cljs.core.PersistentArrayMap.EMPTY);
} else {
return main.add_to_table.call(null,main.render_tablerow.call(null,single_word,syllab.syll_single.call(null,single_word)));
}
});
main.reset = (function main$reset(evt){
var childs = domina.css.sel.call(null,".syll-content");
return domina.destroy_children_BANG_.call(null,childs);
});
main.udb = cljs.core.PersistentArrayMap.EMPTY;
main.usertest_wrap = (function main$usertest_wrap(is_sess_store,n_test){
var pg_bar = domina.css.sel.call(null,"#usertest-progress");
var user_input_field = domina.css.sel.call(null,"input.usertest");
var usert_tab = domina.css.sel.call(null,".syll-of-user");
var usert_but = domina.css.sel.call(null,"button.usertest");
var multipl = ((100) / n_test);
var user_input_db = (cljs.core.truth_(is_sess_store)?(function (){var db = (new goog.storage.mechanism.HTML5SessionStorage());
db.clear();

return db;
})():cljs.core.PersistentVector.EMPTY);
var word_is_avaible = ((function (pg_bar,user_input_field,usert_tab,usert_but,multipl,user_input_db){
return (function (w){
if(cljs.core.truth_(is_sess_store)){
return (user_input_db.get(w) == null);
} else {
return (main.udb.call(null,w) == null);
}
});})(pg_bar,user_input_field,usert_tab,usert_but,multipl,user_input_db))
;
var len_db = ((function (pg_bar,user_input_field,usert_tab,usert_but,multipl,user_input_db,word_is_avaible){
return (function (){
if(cljs.core.truth_(is_sess_store)){
return user_input_db.getCount();
} else {
return cljs.core.count.call(null,main.udb);
}
});})(pg_bar,user_input_field,usert_tab,usert_but,multipl,user_input_db,word_is_avaible))
;
var update_storage_BANG_ = ((function (pg_bar,user_input_field,usert_tab,usert_but,multipl,user_input_db,word_is_avaible,len_db){
return (function (v){
var k = clojure.string.replace.call(null,v,"-","");
if(cljs.core.truth_(is_sess_store)){
user_input_db.set(k,v);
} else {
}

main.udb = cljs.core.assoc.call(null,main.udb,k,v);
});})(pg_bar,user_input_field,usert_tab,usert_but,multipl,user_input_db,word_is_avaible,len_db))
;
var modify_progress_bar = ((function (pg_bar,user_input_field,usert_tab,usert_but,multipl,user_input_db,word_is_avaible,len_db,update_storage_BANG_){
return (function (i){
var newval = (multipl * (i + (1)));
domina.set_attr_BANG_.call(null,pg_bar,"aria-valuenow",newval);

return domina.set_style_BANG_.call(null,pg_bar,"width",[cljs.core.str(newval),cljs.core.str("%")].join(''));
});})(pg_bar,user_input_field,usert_tab,usert_but,multipl,user_input_db,word_is_avaible,len_db,update_storage_BANG_))
;
var usertest_proceed = ((function (pg_bar,user_input_field,usert_tab,usert_but,multipl,user_input_db,word_is_avaible,len_db,update_storage_BANG_,modify_progress_bar){
return (function (user_input){
var next_input = cljs.core.first.call(null,cljs.core.filter.call(null,word_is_avaible,cljs.core.repeatedly.call(null,usertest.serve_words_rand)));
var n_hist = len_db.call(null);
if(cljs.core._EQ_.call(null,n_hist,n_test)){
cljs.core.println.call(null,main.udb);

domina.append_BANG_.call(null,usert_tab,orphoep._PLUS__PLUS_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<tr>",cljs.core.map.call(null,((function (next_input,n_hist,pg_bar,user_input_field,usert_tab,usert_but,multipl,user_input_db,word_is_avaible,len_db,update_storage_BANG_,modify_progress_bar){
return (function (p1__9020_SHARP_){
return orphoep._PLUS__PLUS_.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["<td>",p1__9020_SHARP_,"-",(((100) * (p1__9020_SHARP_ / n_test)) | (0)),"%","</td>"], null));
});})(next_input,n_hist,pg_bar,user_input_field,usert_tab,usert_but,multipl,user_input_db,word_is_avaible,len_db,update_storage_BANG_,modify_progress_bar))
,usertest.calc_stats.call(null,main.udb)),"</tr>"], null)));

return domina.set_attr_BANG_.call(null,usert_but,"disabled","true");
} else {
cljs.core.println.call(null,usertest.serve_words_rand.call(null),n_hist,next_input,user_input);

modify_progress_bar.call(null,n_hist);

return domina.set_value_BANG_.call(null,user_input_field,next_input);
}
});})(pg_bar,user_input_field,usert_tab,usert_but,multipl,user_input_db,word_is_avaible,len_db,update_storage_BANG_,modify_progress_bar))
;
var usertest_error = ((function (pg_bar,user_input_field,usert_tab,usert_but,multipl,user_input_db,word_is_avaible,len_db,update_storage_BANG_,modify_progress_bar,usertest_proceed){
return (function (a){
return cljs.core.println.call(null,a);
});})(pg_bar,user_input_field,usert_tab,usert_but,multipl,user_input_db,word_is_avaible,len_db,update_storage_BANG_,modify_progress_bar,usertest_proceed))
;
var usertest_val_input = ((function (pg_bar,user_input_field,usert_tab,usert_but,multipl,user_input_db,word_is_avaible,len_db,update_storage_BANG_,modify_progress_bar,usertest_proceed,usertest_error){
return (function (evt){
var user_inp = domina.value.call(null,user_input_field);
if((cljs.core._EQ_.call(null,user_inp,"")) || (cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,cljs.core.filter.call(null,((function (user_inp,pg_bar,user_input_field,usert_tab,usert_but,multipl,user_input_db,word_is_avaible,len_db,update_storage_BANG_,modify_progress_bar,usertest_proceed,usertest_error){
return (function (p1__9021_SHARP_){
return cljs.core._EQ_.call(null,"-",p1__9021_SHARP_);
});})(user_inp,pg_bar,user_input_field,usert_tab,usert_but,multipl,user_input_db,word_is_avaible,len_db,update_storage_BANG_,modify_progress_bar,usertest_proceed,usertest_error))
,user_inp))))){
update_storage_BANG_.call(null,user_inp);

return usertest_proceed.call(null,user_inp);
} else {
return usertest_error.call(null,user_inp);
}
});})(pg_bar,user_input_field,usert_tab,usert_but,multipl,user_input_db,word_is_avaible,len_db,update_storage_BANG_,modify_progress_bar,usertest_proceed,usertest_error))
;
usertest_proceed.call(null,"");

return usertest_val_input;
});
main.tabs = domina.css.sel.call(null,"li > a");
main.tabs_div = domina.nodes.call(null,domina.css.sel.call(null,".tab-content > div"));
main.tab_change = (function main$tab_change(evt){
var href = domina.attr.call(null,domina.events.current_target.call(null,evt),"href");
cljs.core.dorun.call(null,cljs.core.map.call(null,((function (href){
return (function (p1__9022_SHARP_){
return domina.remove_class_BANG_.call(null,p1__9022_SHARP_.parentNode,"active");
});})(href))
,domina.nodes.call(null,main.tabs)));

domina.add_class_BANG_.call(null,domina.events.current_target.call(null,evt).parentNode,"active");

cljs.core.dorun.call(null,cljs.core.map.call(null,((function (href){
return (function (p1__9023_SHARP_){
return domina.remove_class_BANG_.call(null,p1__9023_SHARP_,"active");
});})(href))
,main.tabs_div));

return domina.add_class_BANG_.call(null,domina.css.sel.call(null,href),"active");
});
main.user_history = reagent.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
main.user_progress = reagent.core.atom.call(null,[cljs.core.str((0)),cljs.core.str("%")].join(''));
main.result = reagent.core.atom.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null));
main.how_many = (2);
main.choose_word = (function main$choose_word(){
var choice = usertest.serve_words_rand.call(null);
if(cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,main.user_history),choice)){
return main$choose_word.call(null);
} else {
cljs.core.swap_BANG_.call(null,main.user_history,cljs.core.assoc,choice,choice);

return choice;
}
});
main.current_word = reagent.core.atom.call(null,main.choose_word.call(null));
main.progress_tab = (function main$progress_tab(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress","div.progress",169531213),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.progress-bar.progress-bar-success","div.progress-bar.progress-bar-success",546317099),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.deref.call(null,main.user_progress)], null)], null)], null)], null);
});
main.next_test = (function main$next_test(){
var input = cljs.core.deref.call(null,main.current_word);
var n_of_separations = cljs.core.count.call(null,cljs.core.filter.call(null,((function (input){
return (function (p1__9024_SHARP_){
return cljs.core._EQ_.call(null,"-",p1__9024_SHARP_);
});})(input))
,input));
var k = clojure.string.replace.call(null,input,"-","");
if(cljs.core._EQ_.call(null,n_of_separations,(1))){
cljs.core.swap_BANG_.call(null,main.user_history,cljs.core.assoc,k,input);

cljs.core.swap_BANG_.call(null,main.user_progress,((function (input,n_of_separations,k){
return (function (){
return [cljs.core.str((cljs.core.count.call(null,cljs.core.deref.call(null,main.user_history)) * ((100) / main.how_many))),cljs.core.str("%")].join('');
});})(input,n_of_separations,k))
);

cljs.core.print.call(null,cljs.core.deref.call(null,main.user_history));

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,main.user_history)),main.how_many)){
return cljs.core.swap_BANG_.call(null,main.result,((function (input,n_of_separations,k){
return (function (){
return usertest.calc_stats.call(null,cljs.core.deref.call(null,main.user_history));
});})(input,n_of_separations,k))
);
} else {
return cljs.core.swap_BANG_.call(null,main.current_word,main.choose_word);
}
} else {
return alert("Please set a dash to separate syllables!");
}
});
main.tab1 = (function main$tab1(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.tab-pane.col-lg-6","div.tab-pane.col-lg-6",-282530594),main.progress_tab.call(null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Here you can check yourself: Which model follows your intution?"], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),"Set the division with a dash '-': '\u0438\u0433\u043E\u0440\u044C' -> '\u0438-\u0433\u043E\u0440\u044C'. There will be 10 words to divide.",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strong","strong",269529000),"Important"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group","div.input-group",-2073660476),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input.form-control","input.form-control",-1123419636),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.deref.call(null,main.current_word),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__9025_SHARP_){
return cljs.core.reset_BANG_.call(null,main.current_word,p1__9025_SHARP_.target.value);
})], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.input-group-btn","div.input-group-btn",-1451148673),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button.btn.btn-default","button.btn.btn-default",-991846011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return main.next_test.call(null);
})], null),((cljs.core._EQ_.call(null,cljs.core.count.call(null,cljs.core.deref.call(null,main.user_history)),main.how_many))?"Result":"Next")], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul.list-group","ul.list-group",-1445267512),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-top","margin-top",392161226),"10px"], null)], null),(function (){var iter__5279__auto__ = (function main$tab1_$_iter__9042(s__9043){
return (new cljs.core.LazySeq(null,(function (){
var s__9043__$1 = s__9043;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__9043__$1);
if(temp__4425__auto__){
var s__9043__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9043__$2)){
var c__5277__auto__ = cljs.core.chunk_first.call(null,s__9043__$2);
var size__5278__auto__ = cljs.core.count.call(null,c__5277__auto__);
var b__9045 = cljs.core.chunk_buffer.call(null,size__5278__auto__);
if((function (){var i__9044 = (0);
while(true){
if((i__9044 < size__5278__auto__)){
var vec__9048 = cljs.core._nth.call(null,c__5277__auto__,i__9044);
var k = cljs.core.nth.call(null,vec__9048,(0),null);
var v = cljs.core.nth.call(null,vec__9048,(1),null);
cljs.core.chunk_append.call(null,b__9045,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),[cljs.core.str(k),cljs.core.str(" -> "),cljs.core.str(v)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(v)], null)));

var G__9058 = (i__9044 + (1));
i__9044 = G__9058;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9045),main$tab1_$_iter__9042.call(null,cljs.core.chunk_rest.call(null,s__9043__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9045),null);
}
} else {
var vec__9049 = cljs.core.first.call(null,s__9043__$2);
var k = cljs.core.nth.call(null,vec__9049,(0),null);
var v = cljs.core.nth.call(null,vec__9049,(1),null);
return cljs.core.cons.call(null,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li.list-group-item","li.list-group-item",-843562308),[cljs.core.str(k),cljs.core.str(" -> "),cljs.core.str(v)].join('')], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(v)], null)),main$tab1_$_iter__9042.call(null,cljs.core.rest.call(null,s__9043__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5279__auto__.call(null,cljs.core.deref.call(null,main.user_history));
})()], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"table.table","table.table",-538258781),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5279__auto__ = (function main$tab1_$_iter__9050(s__9051){
return (new cljs.core.LazySeq(null,(function (){
var s__9051__$1 = s__9051;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__9051__$1);
if(temp__4425__auto__){
var s__9051__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9051__$2)){
var c__5277__auto__ = cljs.core.chunk_first.call(null,s__9051__$2);
var size__5278__auto__ = cljs.core.count.call(null,c__5277__auto__);
var b__9053 = cljs.core.chunk_buffer.call(null,size__5278__auto__);
if((function (){var i__9052 = (0);
while(true){
if((i__9052 < size__5278__auto__)){
var i = cljs.core._nth.call(null,c__5277__auto__,i__9052);
cljs.core.chunk_append.call(null,b__9053,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),[cljs.core.str("SM "),cljs.core.str(i)].join('')], null));

var G__9059 = (i__9052 + (1));
i__9052 = G__9059;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9053),main$tab1_$_iter__9050.call(null,cljs.core.chunk_rest.call(null,s__9051__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9053),null);
}
} else {
var i = cljs.core.first.call(null,s__9051__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"th","th",-545608566),[cljs.core.str("SM "),cljs.core.str(i)].join('')], null),main$tab1_$_iter__9050.call(null,cljs.core.rest.call(null,s__9051__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5279__auto__.call(null,cljs.core.range.call(null,(1),(6)));
})()], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tr","tr",-1424774646),(function (){var iter__5279__auto__ = (function main$tab1_$_iter__9054(s__9055){
return (new cljs.core.LazySeq(null,(function (){
var s__9055__$1 = s__9055;
while(true){
var temp__4425__auto__ = cljs.core.seq.call(null,s__9055__$1);
if(temp__4425__auto__){
var s__9055__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__9055__$2)){
var c__5277__auto__ = cljs.core.chunk_first.call(null,s__9055__$2);
var size__5278__auto__ = cljs.core.count.call(null,c__5277__auto__);
var b__9057 = cljs.core.chunk_buffer.call(null,size__5278__auto__);
if((function (){var i__9056 = (0);
while(true){
if((i__9056 < size__5278__auto__)){
var v = cljs.core._nth.call(null,c__5277__auto__,i__9056);
cljs.core.chunk_append.call(null,b__9057,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),v], null));

var G__9060 = (i__9056 + (1));
i__9056 = G__9060;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9057),main$tab1_$_iter__9054.call(null,cljs.core.chunk_rest.call(null,s__9055__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__9057),null);
}
} else {
var v = cljs.core.first.call(null,s__9055__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"td","td",1479933353),v], null),main$tab1_$_iter__9054.call(null,cljs.core.rest.call(null,s__9055__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5279__auto__.call(null,cljs.core.deref.call(null,main.result));
})()], null)], null)], null);
});
main.render_simple = (function main$render_simple(){
return reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main.tab1], null),document.querySelector("#check-yourself"));
});
main._main = (function main$_main(){
main.render_simple.call(null);

domina.events.listen_BANG_.call(null,domina.css.sel.call(null,".syllab"),new cljs.core.Keyword(null,"click","click",1912301393),main.syllaby_words);

domina.events.listen_BANG_.call(null,domina.css.sel.call(null,".reset"),new cljs.core.Keyword(null,"click","click",1912301393),main.reset);

domina.events.listen_BANG_.call(null,domina.css.sel.call(null,"button.usertest"),new cljs.core.Keyword(null,"click","click",1912301393),main.usertest_wrap.call(null,false,(10)));

setTimeout((function (){
return domina.events.dispatch_BANG_.call(null,domina.css.sel.call(null,".syllab"),new cljs.core.Keyword(null,"click","click",1912301393),cljs.core.PersistentArrayMap.EMPTY);
}),(500));

return domina.events.listen_BANG_.call(null,main.tabs,new cljs.core.Keyword(null,"click","click",1912301393),main.tab_change);
});
main._main.call(null);

//# sourceMappingURL=main.js.map