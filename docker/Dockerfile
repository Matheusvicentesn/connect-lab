FROM node:14.15.4-alpine3.12

RUN apk add --no-cache bash

USER node

RUN npm install -g @nestjs/cli && npm link webpack

WORKDIR /home/node/app

