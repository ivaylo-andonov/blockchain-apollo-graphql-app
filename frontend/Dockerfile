FROM node:15.13-alpine

WORKDIR /usr/app

COPY package.json ./

RUN yarn install --silent

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
