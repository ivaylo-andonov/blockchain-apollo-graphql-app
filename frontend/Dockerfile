FROM node:14.15-buster

# Create app directory
WORKDIR /usr/src/app
# Install app dependencies
COPY package*.json ./

RUN yarn install --silent
# Copy app source code
COPY . .

#Expose port and start application
EXPOSE 3000
CMD ["yarn", "start"]
