FROM bellsoft/liberica-openjdk-alpine-musl:17
COPY target/backend.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]