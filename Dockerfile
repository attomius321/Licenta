FROM openjdk:17-jdk-slim
VOLUME /tmp
EXPOSE 8080
COPY target/backend.jar backend.jar
ENTRYPOINT ["java","-jar","/backend.jar"]