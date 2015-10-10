// Compiled by ClojureScript 1.7.48 {}
goog.provide('usertest');
goog.require('cljs.core');
goog.require('text');
usertest.new_words = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, ["\u0441\u0445*\u043E\u0434\u0441\u0442\u0432\u043E","\u0433\u043E\u0440\u0448*\u043E\u043A","\u0440\u043E\u0434\u0441\u0442\u0432*\u043E","\u043C\u043E\u0440\u0441\u043A*\u043E\u0439","\u0441\u0442*\u0430\u0440\u0448\u0438\u0439","\u0442\u0440*\u0430\u043D\u0441\u043F\u043E\u0440\u0442","\u043C\u0430\u0440\u0448\u0440*\u0443\u0442","\u0446*\u0430\u0440\u0441\u0442\u0432\u043E","\u0431*\u0443\u0439\u0441\u0442\u0432\u043E","\u0442*\u043E\u043B\u0441\u0442\u044B\u0439","\u0441\u043A*\u043E\u0440\u0431\u043D\u043E","\u0433*\u0430\u043B\u0441\u0442\u0443\u043A","\u0441\u0432*\u043E\u0439\u0441\u0442\u0432\u043E","\u0447*\u0438\u0441\u0442\u043A\u0430","\u0440*\u0430\u0431\u0441\u0442\u0432\u043E"], null);
usertest.eval_user_input = (function usertest$eval_user_input(model_db,a,dk){
var user = cljs.core.val.call(null,dk);
var models = model_db.call(null,cljs.core.key.call(null,dk));
return cljs.core.reduce_kv.call(null,((function (user,models){
return (function (a__$1,i,v){
var newv = ((cljs.core._EQ_.call(null,v.toLowerCase(),user))?(1):(0));
return cljs.core.update_in.call(null,a__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [i], null),((function (newv,user,models){
return (function (oldv){
return (oldv + newv);
});})(newv,user,models))
);
});})(user,models))
,a,models);
});
usertest.calc_stats = (function usertest$calc_stats(stats){
var model_syls = text.set_of_vals.call(null,cljs.core.keys.call(null,stats));
var res = cljs.core.reduce.call(null,cljs.core.partial.call(null,usertest.eval_user_input,model_syls),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(0),(0),(0),(0)], null),stats);
return res;
});
usertest.serve_words_rand = (function usertest$serve_words_rand(){
var randi = cljs.core.rand_int.call(null,cljs.core.count.call(null,usertest.new_words));
return usertest.new_words.call(null,randi);
});

//# sourceMappingURL=usertest.js.map