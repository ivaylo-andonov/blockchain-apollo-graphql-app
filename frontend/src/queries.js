import { gql } from '@apollo/client';

const getBlocksFeed = gql`
  query GetBlocksFeed {
    blocksFeed {
      time
    }
  }
`;

const extendGreeting = gql`
  query Greeting($name: String) {
    greeting(name: $name) {
      name
      age
      profession
      text
    }
  }
`

export {
  getBlocksFeed,
  extendGreeting
}
