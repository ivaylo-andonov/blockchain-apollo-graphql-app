FROM node:14.15-buster

# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./

COPY tsconfig.json ./

RUN yarn install
# Copy app source code
COPY . .

RUN yarn build

#Expose port and start application
EXPOSE 5000
CMD [ "node", "dist/index.js" ]