FROM node:12-alpine as builder

RUN apk update && apk add build-base autoconf automake libtool pkgconfig nasm

WORKDIR /app
COPY ./package*.json ./
RUN mkdir node_modules && npm install

FROM node:12-alpine
RUN npm install --global gatsby-cli && gatsby telemetry --disable && mkdir /save
COPY --from=builder /app/node_modules /save/node_modules

COPY entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/entrypoint.sh

ENTRYPOINT ["entrypoint.sh"]