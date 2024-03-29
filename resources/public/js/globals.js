// Compiled by ClojureScript 1.7.48 {}
goog.provide('globals');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.string.format');
goog.require('clojure.set');
globals.sformat = goog.string.format;
goog.exportSymbol('globals.sformat', globals.sformat);
globals.rus_cons = cljs.core.set.call(null,"\u043B\u043C\u043D\u0440\u0446\u043A\u0433\u0437\u0432\u043F\u0434\u0436\u0447\u0448\u0441\u0442\u0431\u0444\u0449");
goog.exportSymbol('globals.rus_cons', globals.rus_cons);
globals.pals_vows = cljs.core.set.call(null,"\u0435\u044F\u044E\u0438\u0451");
goog.exportSymbol('globals.pals_vows', globals.pals_vows);
globals.hard_vows = cljs.core.set.call(null,"\u044D\u044B\u0430\u0443\u043E");
goog.exportSymbol('globals.hard_vows', globals.hard_vows);
globals.rus_sons = cljs.core.set.call(null,"\u043B\u043C\u043D\u0440\u041B\u041C\u041D\u0420");
goog.exportSymbol('globals.rus_sons', globals.rus_sons);
globals.all_vows = clojure.set.union.call(null,globals.pals_vows,globals.hard_vows);
goog.exportSymbol('globals.all_vows', globals.all_vows);

//# sourceMappingURL=globals.js.map