FROM clojure
RUN git clone -b feature/reagent https://github.com/omelhoro/russyll /russyll
WORKDIR /russyll
RUN lein deps
RUN mv "$(lein uberjar | sed -n 's/^Created \(.*standalone\.jar\)/\1/p')" app-standalone.jar
CMD ["java", "-jar", "app-standalone.jar"]

EXPOSE 5000
