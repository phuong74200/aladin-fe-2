FROM node:18-alpine as build
WORKDIR /app
COPY . .
RUN yarn
RUN yarn build

FROM nginx
COPY --from=build /app/dist /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf

CMD ["nginx", "-g", "daemon off;"]