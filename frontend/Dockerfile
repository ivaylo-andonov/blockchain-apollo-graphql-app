FROM node:14.15-buster

WORKDIR /app

COPY package.json ./

RUN yarn install --silent

COPY . .

EXPOSE 3000

CMD ["yarn", "start"]
