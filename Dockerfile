FROM node:latest as builder

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

EXPOSE 4200

CMD [ "yarn", "start" ]