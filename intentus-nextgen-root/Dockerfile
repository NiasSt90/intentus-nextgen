FROM node:12.2.0-alpine as build
WORKDIR /root
COPY package.json /root/package.json
RUN npm install --silent
COPY . /root

RUN npm run build

FROM nginx:stable-alpine

#temporary
COPY importmap.json /usr/share/nginx/html
COPY src/store.js /usr/share/nginx/html

RUN rm -v /etc/nginx/conf.d/default.conf
ADD nginx/nginx.conf /etc/nginx/conf.d/
COPY --from=build /root/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
