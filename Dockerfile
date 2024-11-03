FROM node:latest

WORKDIR /usr/src/app

COPY package.json yarn.lock ./

RUN yarn install

COPY . .

CMD ["yarn", "run", "ng", "serve", "--", "--host", "0.0.0.0", "--port", "3000"]