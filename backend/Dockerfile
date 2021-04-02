FROM node:14.15-buster

WORKDIR /app

COPY package.json ./

RUN yarn install

COPY . .

RUN yarn build

EXPOSE 5000

CMD [ "yarn", "start" ]