# build environment
FROM node:12.2.0-alpine as build
WORKDIR /app1
ENV PATH /app1/node_modules/.bin:$PATH
COPY package.json /app1/package.json
RUN npm install --silent
COPY . /app1

RUN npm run build

# production environment
FROM nginx:1.16.0-alpine

RUN rm -v /etc/nginx/conf.d/default.conf
ADD nginx/nginx.conf /etc/nginx/conf.d/
COPY --from=build /app1/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
