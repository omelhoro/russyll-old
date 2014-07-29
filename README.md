# russyll
This is a Clojure app for dividing Russian words into syllables according to 5 models.

The source files are provided mostly as cljx, because the app should work in Browser and on Desktop.

Results are under: http://ifisher.pythonanywhere.com/projects/sylls

The test-suite is pretty exhaustive.
## Usage
Use the compiled java file like:
```
java -jar russyll-0.1.0-SNAPSHOT-standalone.jar
игорь
(и-гоР и-гоР и-гоР и-гоР и-гоР)
мужской
(муш-ской му-шской му-шской мушс-кой мушс-кой)
лингвиста
(Лин-гВис-та Ли-нгВи-ста Ли-нгВи-ста Линг-Вис-та Лин-гВис-та)
```
Type into terminal the word you want to translate. Reads on standard input.
Accepts Json-String or one word-lines

The other option is the index.html file. You should run a server - no one is included, because I use Pythons SimpleHTTPServer.
## License

Copyright © 2014 FIXME

Distributed under the Eclipse Public License either version 1.0 or (at
your option) any later version.
