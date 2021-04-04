End-to-end Web Blockchain application powered by http://blockchain.info
# Ivaylo Andonov - Coding Challenge

### End-to-end Web Blockchain application powered by http://blockchain.info
---
### Technologies used
Front-end : [React](https://facebook.github.io/react/), [Babel](http://babeljs.io/), [Webpack](http://webpack.github.io/), [Apollo Client](https://www.apollographql.com/docs/react/)


Back-end : [Nodejs](https://nodejs.org/en/) , [Typescript](https://www.typescriptlang.org/), [GraphQL](https://graphql.org/) , [Apollo Server](https://www.apollographql.com/docs/apollo-server/), [Docker](https://www.docker.com/), [Redis](https://redis.io/)

---
### Pre-requisites

You will need to install the following as pre-requisites to getting started:

- [Node.js](https://nodejs.org/en/download/)
- [Yarn](https://yarnpkg.com/en/docs/install) to install the project dependencies
- Docker for [Mac](https://docs.docker.com/docker-for-mac/install/) or [Windows](https://docs.docker.com/docker-for-windows/install/)

---
### Getting Started with Docker

1. Clone repository from github

Once you have the above installed, run the following command from the root:

```sh
docker-compose up -d
```
2. when the containers are up -> open browser tab with (http://localhost:3000/)

---
### Run it locally
Start GraphQL API (http://localhost:5000/)
```sh
cd backend
yarn install
yarn dev
```
Start React Client App (http://localhost:3000/)
```sh
cd frontend
yarn install
yarn start
```
###### Note: for backend part you should have Redis installed locally [installation guide](https://medium.com/@petehouston/install-and-config-redis-on-mac-os-x-via-homebrew-eb8df9a4f298) or spin up [redis container](https://hub.docker.com/_/redis)

---
### API component details
An GraphQL API providing blockchain public data powered by [https://www.blockchain.com/](https://www.blockchain.com/)
##### Visuals
![alt text](https://i.imgur.com/sd6wiOs.png)


##### Caching strategy
Used 2 layers of caching powered by Redis cache client:
- [GraphQL Automatic Persisted Queries](https://www.apollographql.com/docs/apollo-server/performance/apq/) 
- Full response cache with [response cache plugin](https://www.apollographql.com/docs/apollo-server/performance/caching/#caching-with-responsecacheplugin-advanced)
- Current `@cacheControl` is set to maxAge: 3600 (1 hour)
- Could be used CDN cache sitting in front of the API as well

##### Testing
Built and configured test basis using Jest.
Currently, there are two types of tests - unit and functional ones.
Could be added more unit and integration tests ( client and server ).

---
### UI component details

##### Visuals
Blocks feed page
![alt text](https://i.imgur.com/7sd1ARQ.png)

Block details page
![alt text](https://i.imgur.com/PUcZHAh.png)

##### Testing

The testing strategy could be created with two types of tests:
- test react components with [Enzyme](https://enzymejs.github.io/enzyme/) or [React testing library](https://testing-library.com/docs/react-testing-library/intro/)
- full e2e tests with [Cypress](https://www.cypress.io/)

---
## Deployment
Nowadays, through project containerization, integration with cloud providers and services such as AWS, GCP, Azure becomes really easy.

For example AWS and Docker have collaborated to make a simplified developer experience that enables you to deploy and manage containers on Amazon ECS directly using Docker tools. You can now build and test your containers locally using Docker Desktop and Docker Compose, and then deploy them to Amazon ECS on Fargate.

More details: [here](https://docs.docker.com/cloud/ecs-integration/) and [here](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/docker-basics.html)
