# build environment
FROM node:12.2.0-alpine as build
WORKDIR /dashboard
ENV PATH /dashboard/node_modules/.bin:$PATH
COPY package.json /dashboard/package.json
RUN npm install --silent
COPY . /dashboard

RUN npm run build

# production environment
FROM nginx:1.16.0-alpine

RUN rm -v /etc/nginx/conf.d/default.conf
ADD nginx/nginx.conf /etc/nginx/conf.d/
COPY --from=build /dashboard/dist /usr/share/nginx/html
CMD ["nginx", "-g", "daemon off;"]
