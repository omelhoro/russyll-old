// Compiled by ClojureScript 1.7.48 {}
goog.provide('test_data');
goog.require('cljs.core');
test_data.parser = (function test_data$parser(d){
return cljs.core.js__GT_clj.call(null,JSON.parse(d));
});
test_data.syllabs_test = test_data.parser.call(null,"{\"sm5_test\": {\"\u043A\u043E\u043D\u0446\u0430\": \"\u043A\u043E\u043D-\u0446\u0430\", \"*\u0443\u0441\u0442\u044C\u0435\": \"*\u0443\u0421-\u0422\u0439\u0435\", \"\u043A\u043E\u043D\u0446*\u0430\": \"\u043A\u043E\u043D-\u0446*\u0430\", \"\u0443\u0441\u0442\u044C\u0435\": \"\u0443\u0421-\u0422\u0439\u0435\", \"\u043B*\u0430\u043A\u043E\u043C\u0441\u0442\u0432\u043E\": \"\u043B*\u0430-\u043A\u043E\u043C\u0441-\u0442\u0432\u043E\", \"\u0430\u043C\u0431*\u0430\u0440\": \"\u0430\u043C-\u0431*\u0430\u0440\", \"*\u043E\u0431\u043C\u043E\u0440\u043E\u043A\": \"*\u043E-\u0431\u043C\u043E-\u0440\u043E\u043A\", \"\u0442\u043E\u043B\u043F*\u0430\": \"\u0442\u043E\u043B-\u043F*\u0430\", \"\u043B\u0438\u043D\u0433\u0432*\u0438\u0441\u0442\": \"\u041B\u0438\u043D-\u0433\u0412*\u0438\u0441\u0442\", \"\u043A\u043E\u043B\u044C\u0446*\u0430\": \"\u043A\u043E\u041B-\u0446*\u0430\", \"\u043C\u043E\u0440\u0441\u043A\u043E\u0439\": \"\u043C\u043E\u0440\u0441-\u043A\u043E\u0439\", \"\u043E\u0441\u0442\u0440\u044B\u0439\": \"\u043E\u0441-\u0442\u0440\u044B\u0439\", \"\u043E\u0431\u043C\u043E\u0440\u043E\u043A\": \"\u043E-\u0431\u043C\u043E-\u0440\u043E\u043A\", \"*\u0443\u043C\u0431\u0440\u0441\u043A\u0438\u0439\": \"*\u0443\u043C\u0431\u0440\u0441-\u041A\u0438\u0439\", \"\u0442\u0443\u0441\u043A\u043B\u044B\u0439\": \"\u0442\u0443\u0441-\u043A\u043B\u044B\u0439\", \"\u043B\u0430\u043A\u043E\u043C\u0441\u0442\u0432\u043E\": \"\u043B\u0430-\u043A\u043E\u043C\u0441-\u0442\u0432\u043E\", \"\u043C\u043E\u0440\u0441\u043A*\u043E\u0439\": \"\u043C\u043E\u0440\u0441-\u043A*\u043E\u0439\", \"\u0434\u043E\u043D\u0441\u043A*\u043E\u0439\": \"\u0434\u043E\u043D\u0441-\u043A*\u043E\u0439\", \"\u0430\u043C\u0431\u0430\u0440\": \"\u0430\u043C-\u0431\u0430\u0440\", \"\u0430\u0431\u0441\u0442\u0440*\u0430\u043A\u0442\u043D\u044B\u0439\": \"\u0430-\u043F\u0441\u0442\u0440*\u0430-\u043A\u0442\u043D\u044B\u0439\", \"\u0442*\u0443\u0441\u043A\u043B\u044B\u0439\": \"\u0442*\u0443\u0441-\u043A\u043B\u044B\u0439\", \"\u043A\u043E\u043B\u044C\u0446\u0430\": \"\u043A\u043E\u041B-\u0446\u0430\", \"*\u043E\u0441\u0442\u0440\u044B\u0439\": \"*\u043E\u0441-\u0442\u0440\u044B\u0439\", \"\u0432\u043E\u043D\u0437\u0438\u0442\u044C\": \"\u0432\u043E\u041D-\u0417\u0438\u0422\", \"\u043B\u0438\u043D\u0433\u0432\u0438\u0441\u0442\": \"\u041B\u0438\u043D-\u0433\u0412\u0438\u0441\u0442\", \"\u0434\u043E\u043D\u0441\u043A\u043E\u0439\": \"\u0434\u043E\u043D\u0441-\u043A\u043E\u0439\", \"\u0442\u043E\u043B\u043F\u0430\": \"\u0442\u043E\u043B-\u043F\u0430\", \"\u0430\u0431\u0441\u0442\u0440\u0430\u043A\u0442\u043D\u044B\u0439\": \"\u0430-\u043F\u0441\u0442\u0440\u0430-\u043A\u0442\u043D\u044B\u0439\", \"\u0432\u043E\u043D\u0437*\u0438\u0442\u044C\": \"\u0432\u043E\u041D-\u0417*\u0438\u0422\"}, \"sm2_test\": {\"\u0430\u043C\u0431\u0430\u0440\": \"\u0430\u043C-\u0431\u0430\u0440\", \"\u043C\u043E\u0440\u0441\u043A\u043E\u0439\": \"\u043C\u043E\u0440-\u0441\u043A\u043E\u0439\", \"\u043A\u043E\u043D\u0446\u0430\": \"\u043A\u043E\u043D-\u0446\u0430\", \"\u043E\u0441\u0442\u0440\u044B\u0439\": \"\u043E-\u0441\u0442\u0440\u044B\u0439\", \"\u043E\u0431\u043C\u043E\u0440\u043E\u043A\": \"\u043E-\u0431\u043C\u043E-\u0440\u043E\u043A\", \"\u0442\u043E\u043B\u043F\u0430\": \"\u0442\u043E\u043B-\u043F\u0430\", \"\u043B\u0430\u043A\u043E\u043C\u0441\u0442\u0432\u043E\": \"\u043B\u0430-\u043A\u043E\u043C-\u0441\u0442\u0432\u043E\", \"\u0443\u0441\u0442\u044C\u0435\": \"\u0443-\u0421\u0422\u0439\u0435\", \"\u043A\u043E\u043B\u044C\u0446*\u0430\": \"\u043A\u043E\u041B-\u0446*\u0430\", \"\u0432\u043E\u043D\u0437\u0438\u0442\u044C\": \"\u0432\u043E\u041D-\u0417\u0438\u0422\", \"\u043B\u0438\u043D\u0433\u0432\u0438\u0441\u0442\": \"\u041B\u0438\u043D-\u0433\u0412\u0438\u0441\u0442\", \"\u0434\u043E\u043D\u0441\u043A\u043E\u0439\": \"\u0434\u043E\u043D-\u0441\u043A\u043E\u0439\", \"\u0430\u0431\u0441\u0442\u0440\u0430\u043A\u0442\u043D\u044B\u0439\": \"\u0430-\u043F\u0441\u0442\u0440\u0430-\u043A\u0442\u043D\u044B\u0439\", \"\u0443\u043C\u0431\u0440\u0441\u043A\u0438\u0439\": \"\u0443\u043C-\u0431\u0440\u0441\u041A\u0438\u0439\", \"\u0442\u0443\u0441\u043A\u043B\u044B\u0439\": \"\u0442\u0443-\u0441\u043A\u043B\u044B\u0439\"}, \"sm3_test\": {\"\u043A\u043E\u043D\u0446\u0430\": \"\u043A\u043E-\u043D\u0446\u0430\", \"*\u0443\u0441\u0442\u044C\u0435\": \"*\u0443-\u0421\u0422\u0439\u0435\", \"\u043A\u043E\u043D\u0446*\u0430\": \"\u043A\u043E-\u043D\u0446*\u0430\", \"\u0443\u0441\u0442\u044C\u0435\": \"\u0443-\u0421\u0422\u0439\u0435\", \"\u043B*\u0430\u043A\u043E\u043C\u0441\u0442\u0432\u043E\": \"\u043B*\u0430-\u043A\u043E-\u043C\u0441\u0442\u0432\u043E\", \"\u0443\u0441\u043B\u044B\u0448\u0430\u043B\": \"\u0443-\u0441\u043B\u044B-\u0448\u0430\u043B\", \"\u043A\u0430\u0448\u043B\u044F\u0435\u0442\": \"\u043A\u0430-\u0448\u041B\u044F-\u0435\u0442\", \"\u043F\u0440\u0438\u0435\u0445\u0430\u043B\u0430\": \"\u043F\u0420\u0438-\u0435-\u0445\u0430-\u043B\u0430\", \"\u0430\u043C\u0431*\u0430\u0440\": \"\u0430-\u043C\u0431*\u0430\u0440\", \"*\u043E\u0431\u043C\u043E\u0440\u043E\u043A\": \"*\u043E-\u0431\u043C\u043E-\u0440\u043E\u043A\", \"\u0442\u043E\u043B\u043F*\u0430\": \"\u0442\u043E-\u043B\u043F*\u0430\", \"\u043B\u0438\u043D\u0433\u0432*\u0438\u0441\u0442\": \"\u041B\u0438-\u043D\u0433\u0412*\u0438\u0441\u0442\", \"\u043A\u043E\u043B\u044C\u0446*\u0430\": \"\u043A\u043E-\u041B\u0446*\u0430\", \"\u0432\u043E\u043E\u0431\u0449\u0435\": \"\u0432\u043E-\u043E-\u0431\u0449\u0435\", \"\u043C\u043E\u0440\u0441\u043A\u043E\u0439\": \"\u043C\u043E-\u0440\u0441\u043A\u043E\u0439\", \"\u043E\u0441\u0442\u0440\u044B\u0439\": \"\u043E-\u0441\u0442\u0440\u044B\u0439\", \"\u043E\u0431\u043C\u043E\u0440\u043E\u043A\": \"\u043E-\u0431\u043C\u043E-\u0440\u043E\u043A\", \"*\u0443\u043C\u0431\u0440\u0441\u043A\u0438\u0439\": \"*\u0443-\u043C\u0431\u0440\u0441\u041A\u0438\u0439\", \"\u0442\u0443\u0441\u043A\u043B\u044B\u0439\": \"\u0442\u0443-\u0441\u043A\u043B\u044B\u0439\", \"\u043B\u0430\u043A\u043E\u043C\u0441\u0442\u0432\u043E\": \"\u043B\u0430-\u043A\u043E-\u043C\u0441\u0442\u0432\u043E\", \"\u043C\u043E\u0440\u0441\u043A*\u043E\u0439\": \"\u043C\u043E-\u0440\u0441\u043A*\u043E\u0439\", \"\u0434\u043E\u043D\u0441\u043A*\u043E\u0439\": \"\u0434\u043E-\u043D\u0441\u043A*\u043E\u0439\", \"\u0430\u043C\u0431\u0430\u0440\": \"\u0430-\u043C\u0431\u0430\u0440\", \"\u0430\u0431\u0441\u0442\u0440*\u0430\u043A\u0442\u043D\u044B\u0439\": \"\u0430-\u043F\u0441\u0442\u0440*\u0430-\u043A\u0442\u043D\u044B\u0439\", \"\u0441\u043C\u044B\u0441\u043B\u0430\": \"\u0441\u043C\u044B-\u0441\u043B\u0430\", \"\u0442*\u0443\u0441\u043A\u043B\u044B\u0439\": \"\u0442*\u0443-\u0441\u043A\u043B\u044B\u0439\", \"\u043A\u043E\u043B\u044C\u0446\u0430\": \"\u043A\u043E-\u041B\u0446\u0430\", \"*\u043E\u0441\u0442\u0440\u044B\u0439\": \"*\u043E-\u0441\u0442\u0440\u044B\u0439\", \"\u0432\u043E\u043D\u0437\u0438\u0442\u044C\": \"\u0432\u043E-\u041D\u0417\u0438\u0422\", \"\u043B\u0438\u043D\u0433\u0432\u0438\u0441\u0442\": \"\u041B\u0438-\u043D\u0433\u0412\u0438\u0441\u0442\", \"\u0434\u043E\u043D\u0441\u043A\u043E\u0439\": \"\u0434\u043E-\u043D\u0441\u043A\u043E\u0439\", \"\u0442\u043E\u043B\u043F\u0430\": \"\u0442\u043E-\u043B\u043F\u0430\", \"\u0430\u0431\u0441\u0442\u0440\u0430\u043A\u0442\u043D\u044B\u0439\": \"\u0430-\u043F\u0441\u0442\u0440\u0430-\u043A\u0442\u043D\u044B\u0439\", \"\u0432\u043E\u043D\u0437*\u0438\u0442\u044C\": \"\u0432\u043E-\u041D\u0417*\u0438\u0422\"}, \"cluster_find_test\": {\"b*ubLiKi\": \"b*u[bL]iKi\", \"k*ak\": \"k*ak\", \"n*ovyj\": \"n*ovyj\", \"*i\": \"*i\", \"m*oj\": \"m*oj\", \"6ft@m6B*iL\": \"6[ft]@m6B*iL\", \"*on\": \"*on\", \"m*ass6\": \"m*a[ss]6\", \"Dik6bR*a\": \"Dik6[bR]*a\", \"fSigd*a\": \"fSi[gd]*a\", \"pRij*atn6\": \"pRij*a[tn]6\", \"7t*o\": \"7t*o\", \"un*ov@v6\": \"un*ov@v6\", \"V*iDit\": \"V*iDit\", \"*et6\": \"*et6\", \"pRijim*u3istf\": \"pRijim*u3istf\", \"n@NiD*eLu\": \"n@NiD*eLu\", \"x*oT\": \"x*oT\", \"p@lu4*iT\": \"p@lu4*iT\", \"p6k*azyv@j@t\": \"p6k*azyv@j@t\", \"v6P*ervyx\": \"v6P*e[rv]yx\", \"fS*e\": \"fS*e\", \"L*i4nyj\": \"L*i[4n]yj\"}, \"sm1_test\": {\"\u043A\u043E\u043D\u0446\u0430\": \"\u043A\u043E-\u043D\u0446\u0430\", \"\u043A*\u043E\u043B\u0431\u0430\": \"\u043A*\u043E\u043B-\u0431\u0430\", \"*\u0443\u0441\u0442\u044C\u0435\": \"*\u0443\u0421-\u0422\u0439\u0435\", \"\u043A\u043E\u043D\u0446*\u0430\": \"\u043A\u043E-\u043D\u0446*\u0430\", \"\u0443\u0441\u0442\u044C\u0435\": \"\u0443-\u0421\u0422\u0439\u0435\", \"\u0441\u0442\u0451\u043A\u043B\u0430\": \"\u0421\u0422\u0451-\u043A\u043B\u0430\", \"\u043B*\u0430\u043A\u043E\u043C\u0441\u0442\u0432\u043E\": \"\u043B*\u0430-\u043A\u043E-\u043C\u0441\u0442\u0432\u043E\", \"\u043C*\u0443\u0434\u0440\u044B\u0439\": \"\u043C*\u0443-\u0434\u0440\u044B\u0439\", \"\u0430\u043C\u0431*\u0430\u0440\": \"\u0430-\u043C\u0431*\u0430\u0440\", \"\u043C\u0430\u0439\u043E\u0440\": \"\u043C\u0430-\u0439\u043E\u0440\", \"*\u043E\u0431\u043C\u043E\u0440\u043E\u043A\": \"*\u043E\u0431-\u043C\u043E-\u0440\u043E\u043A\", \"\u0442\u043E\u043B\u043F*\u0430\": \"\u0442\u043E-\u043B\u043F*\u0430\", \"\u043B\u0438\u043D\u0433\u0432*\u0438\u0441\u0442\": \"\u041B\u0438-\u043D\u0433\u0412*\u0438\u0441\u0442\", \"\u043A\u043E\u043B\u044C\u0446*\u0430\": \"\u043A\u043E-\u041B\u0446*\u0430\", \"\u0440\u0430\u0439\u043E\u043D\": \"\u0440\u0430-\u0439\u043E\u043D\", \"\u043A\u043E\u043F\u044C\u044F\": \"\u043A\u043E-\u041F\u0439\u044F\", \"\u043C\u043E\u0440\u0441\u043A\u043E\u0439\": \"\u043C\u043E-\u0440\u0441\u043A\u043E\u0439\", \"\u043E\u0441\u0442\u0440\u044B\u0439\": \"\u043E-\u0441\u0442\u0440\u044B\u0439\", \"\u043E\u0431\u043C\u043E\u0440\u043E\u043A\": \"\u043E-\u0431\u043C\u043E-\u0440\u043E\u043A\", \"\u043F\u043E\u0434\u0440\u0443\u0433\u0430\": \"\u043F\u043E-\u0434\u0440\u0443-\u0433\u0430\", \"\u0432*\u0430\u043D\u043D\u0430\": \"\u0432*\u0430\u043D-\u043D\u0430\", \"*\u0443\u043C\u0431\u0440\u0441\u043A\u0438\u0439\": \"*\u0443\u043C-\u0431\u0440\u0441\u041A\u0438\u0439\", \"\u0442\u0443\u0441\u043A\u043B\u044B\u0439\": \"\u0442\u0443-\u0441\u043A\u043B\u044B\u0439\", \"\u043B\u0430\u043A\u043E\u043C\u0441\u0442\u0432\u043E\": \"\u043B\u0430-\u043A\u043E-\u043C\u0441\u0442\u0432\u043E\", \"\u0437*\u0435\u043B\u044C\u0435\": \"\u0417*\u0435-\u041B\u0439\u0435\", \"\u043C\u0443\u0434\u0440\u044B\u0439\": \"\u043C\u0443-\u0434\u0440\u044B\u0439\", \"\u043C\u043E\u0440\u0441\u043A*\u043E\u0439\": \"\u043C\u043E-\u0440\u0441\u043A*\u043E\u0439\", \"\u043A*\u0430\u043F\u043B\u044F\": \"\u043A*\u0430-\u043F\u041B\u044F\", \"\u0434\u043E\u043D\u0441\u043A*\u043E\u0439\": \"\u0434\u043E-\u043D\u0441\u043A*\u043E\u0439\", \"\u0430\u043C\u0431\u0430\u0440\": \"\u0430-\u043C\u0431\u0430\u0440\", \"\u0430\u0431\u0441\u0442\u0440*\u0430\u043A\u0442\u043D\u044B\u0439\": \"\u0430-\u043F\u0441\u0442\u0440*\u0430\u043A-\u0442\u043D\u044B\u0439\", \"\u0442*\u0443\u0441\u043A\u043B\u044B\u0439\": \"\u0442*\u0443\u0441-\u043A\u043B\u044B\u0439\", \"\u043A\u043E\u043B\u044C\u0446\u0430\": \"\u043A\u043E-\u041B\u0446\u0430\", \"*\u043E\u0441\u0442\u0440\u044B\u0439\": \"*\u043E\u0441-\u0442\u0440\u044B\u0439\", \"\u043F\u043E\u0434\u0432\u0430\u043B\": \"\u043F\u043E-\u0434\u0432\u0430\u043B\", \"\u0432\u043E\u043D\u0437\u0438\u0442\u044C\": \"\u0432\u043E-\u041D\u0417\u0438\u0422\", \"\u043B\u0438\u043D\u0433\u0432\u0438\u0441\u0442\": \"\u041B\u0438-\u043D\u0433\u0412\u0438\u0441\u0442\", \"\u0434\u043E\u043D\u0441\u043A\u043E\u0439\": \"\u0434\u043E-\u043D\u0441\u043A\u043E\u0439\", \"\u0442\u043E\u043B\u043F\u0430\": \"\u0442\u043E-\u043B\u043F\u0430\", \"\u0430\u0431\u0441\u0442\u0440\u0430\u043A\u0442\u043D\u044B\u0439\": \"\u0430-\u043F\u0441\u0442\u0440\u0430-\u043A\u0442\u043D\u044B\u0439\", \"\u0432\u043E\u043D\u0437*\u0438\u0442\u044C\": \"\u0432\u043E-\u041D\u0417*\u0438\u0422\"}, \"sm4_test\": {\"\u0430\u043C\u0431\u0430\u0440\": \"\u0430-\u043C\u0431\u0430\u0440\", \"\u043C\u043E\u0440\u0441\u043A\u043E\u0439\": \"\u043C\u043E\u0440-\u0441\u043A\u043E\u0439\", \"\u043A\u043E\u043D\u0446\u0430\": \"\u043A\u043E\u043D-\u0446\u0430\", \"\u0444\u043B\u0451\u0440-\u0434\u2019\u043E\u0440*\u0430\u043D\u0436\u0435\u043C\": \"\u0444\u041B\u0451\u0440-\u0434\u043E-\u0440*\u0430\u043D-\u0436\u0435\u043C\", \"\u043E\u0441\u0442\u0440\u044B\u0439\": \"\u043E-\u0441\u0442\u0440\u044B\u0439\", \"\u043E\u0431\u043C\u043E\u0440\u043E\u043A\": \"\u043E\u0431-\u043C\u043E-\u0440\u043E\u043A\", \"\u0442\u043E\u043B\u043F\u0430\": \"\u0442\u043E\u043B-\u043F\u0430\", \"\u043B\u0430\u043A\u043E\u043C\u0441\u0442\u0432\u043E\": \"\u043B\u0430-\u043A\u043E\u043C-\u0441\u0442\u0432\u043E\", \"\u0443\u0441\u0442\u044C\u0435\": \"\u0443-\u0421\u0422\u0439\u0435\", \"\u043A\u043E\u043B\u044C\u0446*\u0430\": \"\u043A\u043E-\u041B\u0446*\u0430\", \"\u0432\u043E\u043D\u0437\u0438\u0442\u044C\": \"\u0432\u043E\u041D-\u0417\u0438\u0422\", \"\u043B\u0438\u043D\u0433\u0432\u0438\u0441\u0442\": \"\u041B\u0438\u043D\u0433-\u0412\u0438\u0441\u0442\", \"\u0434\u043E\u043D\u0441\u043A\u043E\u0439\": \"\u0434\u043E\u043D-\u0441\u043A\u043E\u0439\", \"\u0443\u043C\u0431\u0440\u0441\u043A\u0438\u0439\": \"\u0443\u043C\u0431\u0440-\u0441\u041A\u0438\u0439\", \"\u0442\u0443\u0441\u043A\u043B\u044B\u0439\": \"\u0442\u0443-\u0441\u043A\u043B\u044B\u0439\"}}");
test_data.translit_test = test_data.parser.call(null,"{\"j_extr_test\": {}, \"trans_test\": {\"\u0430\u0444\u0442\u043E\u043C\u043E\u0431*\u0438\u043B\u0435\": \"6ft@m6B*iLi\", \"\u043D\u0430\u0434*\u0435\u0436\u0434\u0430\": \"n6D*e5d6\", \"\u0442*\u043E\u0436\u0435\": \"t*o5@\", \"\u0432*\u0438\u0434\u044F\u0442\": \"V*iDit\", \"\u0444\u0441*\u0435\": \"fS*e\", \"\u043C*\u0430\u0441\u0441\u0430\": \"m*ass6\", \"\u0434\u0435\u043A\u0430\u0431\u0440*\u044F\": \"Dik6bR*a\", \"\u043D\u0430\u043D\u0435\u0434*\u0435\u043B\u044E\": \"n@NiD*eLu\", \"\u043D*\u043E\u0432\u044B\u0439\": \"n*ovyj\", \"\u0442*\u0430\u043A\": \"t*ak\", \"*\u043E\u043F\u044B\u0442\": \"*opyt\", \"\u043C*\u043E\u0439\": \"m*oj\", \"\u0444\u0441*\u0451\u0442\u0430\u043A\u0438\": \"fS*ot@Ki\", \"\u043F\u0440\u0435\u0438\u043C*\u0443\u0449\u0435\u0441\u0442\u0444\": \"pRijim*u3istf\", \"\u0432\u043E\u043F*\u0435\u0440\u0432\u044B\u0445\": \"v6P*ervyx\", \"\u0432*\u0430\u0436\u043D\u043E\": \"v*a5n6\", \"\u043F\u043E\u043B\u0443\u0447*\u0438\u0442\u044C\": \"p@lu4*iT\", \"*\u044D\u0442\u043E\": \"*et6\", \"*\u0438\": \"*i\", \"\u0431*\u0443\u0431\u043B\u0438\u043A\u0438\": \"b*ubLiKi\", \"*\u043E\u0447\u0435\u043D\u044C\": \"*o4iN\", \"\u0432\u043D*\u043E\u0432\u043E\u043C\": \"vn*ov@m\", \"\u043A*\u0430\u043A\": \"k*ak\", \"\u0443\u043D*\u043E\u0432\u043E\u0432\u043E\": \"un*ov@v6\", \"\u0432*\u0435\u0442\u044C\": \"V*eT\", \"\u043F\u0440\u0438*\u044F\u0442\u043D\u043E\": \"pRij*atn6\", \"*\u043E\u043D\": \"*on\", \"\u043B*\u0438\u0447\u043D\u044B\u0439\": \"L*i4nyj\", \"\u0444\u0442\u0440*\u0435\u0442\u044C\u0438\u0445\": \"ftR*eTjix\", \"\u0444\u0441\u0435\u0433\u0434*\u0430\": \"fSigd*a\", \"\u0444\u0441*\u0451\": \"fS*o\", \"\u0448\u0442*\u043E\": \"7t*o\", \"*\u0435\u0441\u044C\u0442\u044C\": \"j*eST\", \"\u0437\u0434\u0440\u0443\u0433*\u043E\u0439\": \"zdrug*oj\", \"\u043D\u0435\u0443\u0433*\u043E\u043D\u044F\u0442\": \"Niug*oNit\", \"\u043F\u043E\u043A*\u0430\u0437\u044B\u0432\u0430\u0435\u0442\": \"p6k*azyv@j@t\", \"\u0445*\u043E\u0442\u044C\": \"x*oT\", \"\u0430\u0444\u0442\u043E\u043C\u043E\u0431*\u0438\u043B\u044F\": \"6ft@m6B*iLi\", \"\u0430\u0444\u0442\u043E\u043C\u043E\u0431*\u0438\u043B\u044C\": \"6ft@m6B*iL\", \"\u0430\u043D\u0435\u043D*\u043E\u0432\u044B\u0439\": \"6Nin*ovyj\", \"*\u0438\u043B\u0438\": \"*iLi\"}, \"pal_cons_test\": {}}");
test_data.orphoep_test = test_data.parser.call(null,"{\"doubcon_test\": {\"\u0434\u043B*\u0438\u043D\u043D\u044B\u0439\": \"\u0434\u043B*\u0438\u043D\u043D\u044B\u0439\", \"\u0432\u0432\u043E\u0434\": \"\u0432\u0432\u043E\u0434\", \"\u043F\u0440\u0435\u0434\u0434\u0438\u043F\u043B\u043E\u043C\u043D\u044B\u0439\": \"\u043F\u0440\u0435\u0434\u0434\u0438\u043F\u043B\u043E\u043C\u043D\u044B\u0439\", \"\u0431\u0440\u043E\u0448\u0435\u043D\u043D\u044B\u0439\": \"\u0431\u0440\u043E\u0448\u0435\u043D\u044B\u0439\", \"\u0441\u0443\u0433\u0433\u0435\u0441\u0442\u0438\u0432\u043D\u044B\u0439\": \"\u0441\u0443\u0433\u0435\u0441\u0442\u0438\u0432\u043D\u044B\u0439\", \"\u0440\u0430\u0437\u0437\u0430\u0434\u043E\u0440\u0438\u0442\u044C\": \"\u0440\u0430\u0437\u0437\u0430\u0434\u043E\u0440\u0438\u0442\u044C\", \"\u0430\u043A\u043A\u0443\u0440\u0430\u0442\u043D\u044B\u0439\": \"\u0430\u043A\u0443\u0440\u0430\u0442\u043D\u044B\u0439\", \"\u0433\u0440\u0443\u043F\u043F\u043E\u0432\u043E\u0439\": \"\u0433\u0440\u0443\u043F\u043E\u0432\u043E\u0439\", \"\u0430\u043A\u043A\u043E\u0440\u0434\": \"\u0430\u043A\u043E\u0440\u0434\", \"\u0433\u0440\u0430\u043C\u043C\": \"\u0433\u0440\u0430\u043C\", \"\u0440\u0430\u0441\u0441\u0430\u0434\u0430\": \"\u0440\u0430\u0441\u0441\u0430\u0434\u0430\", \"\u0441*\u0443\u043C\u043C\u0430\": \"\u0441*\u0443\u043C\u043C\u0430\", \"\u0431\u0430\u043B\u043B\": \"\u0431\u0430\u043B\", \"\u043A\u043E\u043B\u043B\u0435\u043A\u0442\u0438\u0432\": \"\u043A\u043E\u043B\u0435\u043A\u0442\u0438\u0432\", \"\u043E\u0442\u0442\u0430\u0449\u0438\u0442\u044C\": \"\u043E\u0442\u0442\u0430\u0449\u0438\u0442\u044C\", \"\u0433\u0440\u0443\u043F\u043F\u043A\u0430\": \"\u0433\u0440\u0443\u043F\u043A\u0430\", \"\u0441\u0443\u0431\u0431\u043E\u0442\u0430\": \"\u0441\u0443\u0431\u043E\u0442\u0430\", \"\u0431\u0430\u0440*\u043E\u043A\u043A\u043E\": \"\u0431\u0430\u0440*\u043E\u043A\u043A\u043E\", \"\u0440\u0430\u0432\u0432\u0438\u043D\": \"\u0440\u0430\u0432\u0438\u043D\", \"\u043A\u043E\u043C\u043C\u0443\u043D\u0438\u0441\u0442\": \"\u043A\u043E\u043C\u0443\u043D\u0438\u0441\u0442\", \"\u043F\u0435\u0440\u0440\u043E\u043D\": \"\u043F\u0435\u0440\u043E\u043D\", \"\u0431\u0430\u043B\u043B\u044C\u043D\u044B\u0439\": \"\u0431\u0430\u043B\u044C\u043D\u044B\u0439\", \"\u0441\u0441\u043E\u0440\u0430\": \"\u0441\u0441\u043E\u0440\u0430\", \"\u0441\u0438\u043C\u043C\u0435\u0442\u0440\u0438\u044F\": \"\u0441\u0438\u043C\u0435\u0442\u0440\u0438\u044F\", \"\u0434\u0438\u0444\u0444\u0443\u0437\u0438\u044F\": \"\u0434\u0438\u0444\u0443\u0437\u0438\u044F\", \"\u0433\u0440*\u0443\u043F\u043F\u0430\": \"\u0433\u0440*\u0443\u043F\u043F\u0430\", \"\u043C*\u043E\u043A\u043A\u043E\": \"\u043C*\u043E\u043A\u043A\u043E\", \"\u0430\u043A\u043A\u0440\u0435\u0434\u0438\u0442\u0438\u0432\": \"\u0430\u043A\u0440\u0435\u0434\u0438\u0442\u0438\u0432\", \"\u043A\u043E\u043D\u0433\u0440\u0435\u0441\u0441\": \"\u043A\u043E\u043D\u0433\u0440\u0435\u0441\", \"\u043E\u0431\u043E\u0436\u0436\u0435\u043D\u043D\u044B\u0439\": \"\u043E\u0431\u043E\u0436\u0436\u0435\u043D\u044B\u0439\", \"\u0440\u0443\u0441\u0441\u043A\u0438\u0439\": \"\u0440\u0443\u0441\u043A\u0438\u0439\"}, \"cluster_assim_test\": {\"\u0441\u0447\u0438\u0442\u0430\u0442\u044C\": \"\u0449\u0438\u0442\u0430\u0442\u044C\", \"\u043B\u0435\u0433\u043A\u043E\": \"\u043B\u0435\u0445\u043A\u043E\", \"\u043C\u044F\u0433\u043A\u043E\": \"\u043C\u044F\u0445\u043A\u043E\"}, \"chto_test\": {\"\u0447\u0442*\u043E\": \"\u0448\u0442*\u043E\", \"\u0447\u0442\u043E\": \"\u0448\u0442\u043E\"}, \"jostress_test\": {\"\u0441\u0442\u0451\u0440\": \"\u0441\u0442*\u0451\u0440\", \"\u0451\u0436\": \"*\u0451\u0436\", \"\u0441\u0442*\u0451\u0440\": \"\u0441\u0442*\u0451\u0440\", \"\u043A\u043E\u0441\u0442\u0451\u0440\": \"\u043A\u043E\u0441\u0442*\u0451\u0440\", \"\u043A\u043E\u0441\u0442*\u0451\u0440\": \"\u043A\u043E\u0441\u0442*\u0451\u0440\", \"*\u0451\u0436\": \"*\u0451\u0436\"}, \"reg_assim_test\": {\"\u0432\u043F\u0440\u0435\u0434\u044C\": \"\u0444\u043F\u0440\u0435\u0434\u044C\", \"\u0441\u0436\u0435\u0447\u044C\": \"\u0437\u0436\u0435\u0447\u044C\", \"\u0441\u0434\u043E\u0431\u0430\": \"\u0437\u0434\u043E\u0431\u0430\", \"\u0441\u0434\u0435\u043B\u0430\u0442\u044C\": \"\u0437\u0434\u0435\u043B\u0430\u0442\u044C\", \"\u043C\u0443\u0436\u0441\u043A\u043E\u0439\": \"\u043C\u0443\u0448\u0441\u043A\u043E\u0439\", \"\u0430\u0432\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\": \"\u0430\u0444\u0442\u043E\u043C\u043E\u0431\u0438\u043B\u044C\", \"\u0432\u0441\u0435\": \"\u0444\u0441\u0435\", \"\u0441\u0445\u043E\u0434\u0441\u0442\u0432\u043E\": \"\u0441\u0445\u043E\u0442\u0441\u0442\u0432\u043E\", \"\u043E\u0442\u0434\u044B\u0445\": \"\u043E\u0434\u0434\u044B\u0445\", \"\u0430\u0432\u0442\u043E\u0440\": \"\u0430\u0444\u0442\u043E\u0440\", \"\u043F\u043E\u0434\u0442\u0435\u043C\u0430\": \"\u043F\u043E\u0442\u0442\u0435\u043C\u0430\", \"\u0432\u043A\u0443\u0441\": \"\u0444\u043A\u0443\u0441\", \"\u0434\u0432\u043E\u0440\u0435\u0446\": \"\u0434\u0432\u043E\u0440\u0435\u0446\", \"\u0440\u043E\u0434\u0441\u0442\u0432\u043E\": \"\u0440\u043E\u0442\u0441\u0442\u0432\u043E\", \"\u0441\u0431\u043E\u043A\u0443\": \"\u0437\u0431\u043E\u043A\u0443\", \"\u0440\u0430\u0431\u0441\u0442\u0432\u043E\": \"\u0440\u0430\u043F\u0441\u0442\u0432\u043E\", \"\u0430\u0431\u0441\u043E\u043B\u044E\u0442\u043D\u043E\": \"\u0430\u043F\u0441\u043E\u043B\u044E\u0442\u043D\u043E\", \"\u0442\u0432\u043E\u0440\u0435\u0446\": \"\u0442\u0432\u043E\u0440\u0435\u0446\"}, \"hard_pron_test\": {\"\u0441\u043E\u043B\u043D\u0446\u0435\": \"\u0441\u043E\u043D\u0446\u0435\", \"\u043B\u0430\u043D\u0434\u0448\u0430\u0444\u0442\": \"\u043B\u0430\u043D\u0448\u0430\u0444\u0442\", \"\u0440\u0430\u0437\u0434\u043D\u0438\u0446\u0430\": \"\u0440\u0430\u0437\u043D\u0438\u0446\u0430\", \"\u043C\u043E\u0435\u0448\u044C\u0441\u044F\": \"\u043C\u043E\u0435\u0448\u0441\u0430\", \"\u043C\u044B\u0442\u044C\u0441\u044F\": \"\u043C\u044B\u0442\u0441\u0430\", \"\u0445\u043E\u0447\u0435\u0448\u044C\": \"\u0445\u043E\u0447\u0435\u0448\", \"\u0441\u0435\u0440\u0434\u0446\u0435\": \"\u0441\u0435\u0440\u0446\u0435\", \"\u043F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0433\u0441\u043A\u0438\u0439\": \"\u043F\u0435\u0442\u0435\u0440\u0431\u0443\u0440\u0441\u043A\u0438\u0439\", \"\u0441\u0442\u043E\u0438\u0442\u0441\u044F\": \"\u0441\u0442\u043E\u0438\u0442\u0441\u0430\", \"\u0441\u043A*\u0443\u0447\u043D\u043E\": \"\u0441\u043A*\u0443\u0448\u043D\u043E\", \"\u0447\u0435\u0441\u0442\u043D\u044B\u0439\": \"\u0447\u0435\u0441\u043D\u044B\u0439\", \"\u0447\u0443\u0432\u0441\u0442\u0432\u043E\": \"\u0447\u0443\u0441\u0442\u0432\u043E\", \"\u043A\u043E\u043D*\u0435\u0447\u043D\u043E\": \"\u043A\u043E\u043D*\u0435\u0448\u043D\u043E\"}, \"reg_pal_test\": {\"\u0437\u043E\u043D\u0442\u0438\u043A\": \"\u0437\u043E\u043D\u044C\u0442\u0438\u043A\", \"\u0441\u0434\u0435\u043B\u0430\u0442\u044C\": \"\u0441\u044C\u0434\u0435\u043B\u0430\u0442\u044C\", \"\u0438\u0441\u0442\u0438\u043D\u043D\u044B\u0439\": \"\u0438\u0441\u044C\u0442\u0438\u043D\u043D\u044B\u0439\", \"\u0443\u0442\u043E\u043D\u044C\u0447\u0435\u043D\u043D\u044B\u0439\": \"\u0443\u0442\u043E\u043D\u044C\u0447\u0435\u043D\u043D\u044B\u0439\", \"\u0437\u0434\u0435\u0441\u044C\": \"\u0437\u044C\u0434\u0435\u0441\u044C\", \"\u0432\u0435\u0441\u0442\u0438\": \"\u0432\u0435\u0441\u044C\u0442\u0438\"}, \"all_orpho_test\": {\"\u0441\u0436\u0435\u0447\u044C\": \"\u0436\u0436\u0435\u0447\u044C\", \"\u0430\u043A\u043A\u043E\u0440\u0434\": \"\u0430\u043A\u043E\u0440\u0442\", \"\u0432\u0432\u043E\u0434\": \"\u0432\u0432\u043E\u0442\", \"\u0430\u043B\u043B\u0435\u0433\u0440*\u0435\u0442\u0442\u043E\": \"\u0430\u043B\u0435\u0433\u0440*\u044D\u0442\u0442\u043E\", \"\u0441\u0434\u0435\u043B\u0430\u0442\u044C\": \"\u0437\u044C\u0434\u0435\u043B\u0430\u0442\u044C\", \"\u0430\u043B\u044C\u0434\u0435\u0433*\u0438\u0434\": \"\u0430\u043B\u044C\u0434\u044D\u0433*\u0438\u0442\", \"\u0438\u0441\u0442\u0438\u043D\u043D\u044B\u0439\": \"\u0438\u0441\u044C\u0442\u0438\u043D\u044B\u0439\", \"\u0430\u0434\u0435\u043A\u0432*\u0430\u0442\u043D\u044B\u0439\": \"\u0430\u0434\u044D\u043A\u0432*\u0430\u0442\u043D\u044B\u0439\", \"\u0441\u0443\u0433\u0433\u0435\u0441\u0442\u0438\u0432\u043D\u044B\u0439\": \"\u0441\u0443\u0433\u0435\u0441\u044C\u0442\u0438\u0432\u043D\u044B\u0439\", \"\u0430\u0431\u0441*\u0435\u043D\u0442\": \"\u0430\u043F\u0441*\u044D\u043D\u0442\", \"\u0430\u043A\u043A\u0440\u0435\u0434\u0438\u0442\u0438\u0432\": \"\u0430\u043A\u0440\u0435\u0434\u0438\u0442\u0438\u0444\", \"\u0430\u0432\u0441\u0442\u0440\u0430\u043B\u043E\u043F\u0438\u0442*\u0435\u043A\": \"\u0430\u0444\u0441\u0442\u0440\u0430\u043B\u043E\u043F\u0438\u0442*\u044D\u043A\", \"\u043C\u044F\u0433\u043A\u043E\": \"\u043C\u044F\u0445\u043A\u043E\", \"\u043B\u0435\u0433\u043A\u043E\": \"\u043B\u0435\u0445\u043A\u043E\", \"\u0430\u0431\u0441\u0435\u043D\u0442*\u0435\u0438\u0437\u043C\": \"\u0430\u043F\u0441\u044D\u043D\u0442*\u044D\u0438\u0437\u043C\", \"\u0443\u0442\u043E\u043D\u044C\u0447\u0435\u043D\u043D\u044B\u0439\": \"\u0443\u0442\u043E\u043D\u044C\u0447\u0435\u043D\u044B\u0439\", \"\u0430\u0434\u0435\u043D\u043E*\u0438\u0434\": \"\u0430\u0434\u044D\u043D\u043E*\u0438\u0442\", \"\u0447\u0443\u0432\u0441\u0442\u0432\u043E\": \"\u0447\u0443\u0441\u0442\u0432\u043E\", \"\u0430\u0432\u0442\u043E\u0433\u0440\u0435\u0439\u0434*\u0435\u0440\": \"\u0430\u0444\u0442\u043E\u0433\u0440\u0435\u0439\u0434*\u044D\u0440\", \"\u043A\u043E\u043B\u043B\u0435\u043A\u0442\u0438\u0432\": \"\u043A\u043E\u043B\u0435\u043A\u0442\u0438\u0444\"}, \"unpale_test\": {\"\u0430\u0432\u0438*\u0435\u0442\u043A\u0430\": \"\u0430\u0432\u0438*\u044D\u0442\u043A\u0430\", \"\u0430\u043B\u0442*\u0435\u0439\": \"\u0430\u043B\u0442*\u044D\u0439\", \"\u0430\u0431\u0438\u0442\u0443\u0440\u0438*\u0435\u043D\u0442\": \"\u0430\u0431\u0438\u0442\u0443\u0440\u0438*\u044D\u043D\u0442\", \"\u0430\u043B\u044C\u0442\u0435\u0440\u043D*\u0438\u0440\u0443\u044E\u0449\u0438\u0439\": \"\u0430\u043B\u044C\u0442\u044D\u0440\u043D*\u0438\u0440\u0443\u044E\u0449\u0438\u0439\", \"\u0430\u043B\u043B\u0435\u0433\u0440*\u0435\u0442\u0442\u043E\": \"\u0430\u043B\u043B\u0435\u0433\u0440*\u044D\u0442\u0442\u043E\", \"\u0430\u0434\u0430\u043F\u0442*\u0435\u0440\": \"\u0430\u0434\u0430\u043F\u0442*\u044D\u0440\", \"\u0430\u0434\u0435\u043A\u0432*\u0430\u0442\u043D\u044B\u0439\": \"\u0430\u0434\u044D\u043A\u0432*\u0430\u0442\u043D\u044B\u0439\", \"\u0430\u0431\u0441*\u0435\u043D\u0442\": \"\u0430\u0431\u0441*\u044D\u043D\u0442\", \"\u0430\u0432\u0441\u0442\u0440\u0430\u043B\u043E\u043F\u0438\u0442*\u0435\u043A\": \"\u0430\u0432\u0441\u0442\u0440\u0430\u043B\u043E\u043F\u0438\u0442*\u044D\u043A\", \"\u0430\u043B\u044C\u0441*\u0435\u043A\u043A\u043E\": \"\u0430\u043B\u044C\u0441*\u044D\u043A\u043A\u043E\", \"\u0430\u043B\u044C\u0442\u0435\u0440\u043D\u0430\u0442*\u0438\u0432\u0430\": \"\u0430\u043B\u044C\u0442\u044D\u0440\u043D\u0430\u0442*\u0438\u0432\u0430\", \"\u0430\u0431\u0441\u0435\u043D\u0442*\u0435\u0438\u0437\u043C\": \"\u0430\u0431\u0441\u044D\u043D\u0442*\u044D\u0438\u0437\u043C\", \"\u0410\u0434*\u0435\u043B\u044C\": \"\u0410\u0434*\u044D\u043B\u044C\", \"\u0430\u0434\u0435\u043D\u043E*\u0438\u0434\": \"\u0430\u0434\u044D\u043D\u043E*\u0438\u0434\", \"\u0430\u0434\u044E\u043B\u044C\u0442*\u0435\u0440\": \"\u0430\u0434\u044E\u043B\u044C\u0442*\u044D\u0440\", \"\u0430\u043B\u044C\u0442\u0435\u0440\u043D*\u0430\u0446\u0438\u044F\": \"\u0430\u043B\u044C\u0442\u044D\u0440\u043D*\u0430\u0446\u0438\u044F\", \"\u0430\u043B\u044C\u0442*\u0435\u0440\u0430\u0446\u0438\u044F\": \"\u0430\u043B\u044C\u0442*\u044D\u0440\u0430\u0446\u0438\u044F\", \"\u0430\u0432\u0442\u043E\u0433\u0440\u0435\u0439\u0434*\u0435\u0440\": \"\u0430\u0432\u0442\u043E\u0433\u0440\u0435\u0439\u0434*\u044D\u0440\", \"\u0430\u0434*\u0435\u043F\u0442\": \"\u0430\u0434*\u044D\u043F\u0442\", \"\u0430\u043B\u044C\u0434\u0435\u0433*\u0438\u0434\": \"\u0430\u043B\u044C\u0434\u044D\u0433*\u0438\u0434\"}, \"ogo_ovo_test\": {\"\u043D\u0438\u043A\u043E\u0433\u043E\": \"\u043D\u0438\u043A\u043E\u0432\u043E\", \"\u0441\u0442\u0440\u043E\u0433\u043E\": \"\u0441\u0442\u0440\u043E\u0433\u043E\", \"\u043C\u0435\u0433\u0430\u0434\u043E\u0440\u043E\u0433\u043E\u0433\u043E\": \"\u043C\u0435\u0433\u0430\u0434\u043E\u0440\u043E\u0433\u043E\u0432\u043E\", \"\u0434\u043E\u0440\u043E\u0433\u043E\u0433\u043E\": \"\u0434\u043E\u0440\u043E\u0433\u043E\u0432\u043E\", \"\u0447\u0435\u0433\u043E\": \"\u0447\u0435\u0432\u043E\", \"\u0434\u043E\u0440\u043E\u0433\u043E\": \"\u0434\u043E\u0440\u043E\u0433\u043E\", \"\u0431\u043E\u043B\u044C\u0448\u043E\u0433\u043E\": \"\u0431\u043E\u043B\u044C\u0448\u043E\u0432\u043E\", \"\u043C\u043D\u043E\u0433\u043E\": \"\u043C\u043D\u043E\u0433\u043E\"}, \"endassim_test\": {\"\u0432\u043F\u0440\u0435\u0434\u044C\": \"\u0432\u043F\u0440\u0435\u0442\u044C\", \"\u0437\u0434\u0435\u043B\u0430\u0442\u044C\": \"\u0437\u0434\u0435\u043B\u0430\u0442\u044C\", \"\u043F\u043E\u0435\u0437\u0434\": \"\u043F\u043E\u0435\u0437\u0442\", \"\u0432\u043D\u043E\u0432\u044C\": \"\u0432\u043D\u043E\u0444\u044C\", \"\u0445\u043E\u0447\u0435\u0448\u044C\": \"\u0445\u043E\u0447\u0435\u0448\u044C\"}}");

//# sourceMappingURL=test_data.js.map