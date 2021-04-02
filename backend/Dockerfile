FROM node:14.15-buster

# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./

RUN yarn install && yarn build
# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 5000
CMD [ "yarn", "start" ]