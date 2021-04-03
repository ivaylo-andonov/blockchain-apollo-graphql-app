FROM node:15.13-alpine

WORKDIR /usr/app

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 5000

CMD [ "yarn", "start" ]