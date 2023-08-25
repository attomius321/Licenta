In order to start the project using docker, we need to build the .jar file from the project

From root:
```a
./mvnw clean package
```
From /client:
```
nvm use
npm i
npm run build
```

From root:

```
docker-compose up -d
```

Check with 'docker-compose ps' if the containers are running.

Type ```http://localhost:8080``` in browser.
