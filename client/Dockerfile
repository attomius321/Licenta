FROM node:alpine AS builder
WORKDIR /app
COPY . .
RUN npm install && \
    npm run build
FROM nginx:alpine
RUN rm /etc/nginx/conf.d/default.conf
COPY /nginx.conf /etc/nginx/conf.d
COPY --from=builder /app/dist/client /usr/share/nginx/html/

ENTRYPOINT ["nginx", "-g", "daemon off;"]
EXPOSE 80
