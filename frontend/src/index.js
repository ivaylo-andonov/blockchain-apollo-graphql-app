import React from 'react'
import { render } from 'react-dom'
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery, HttpLink } from "@apollo/client";
import { createPersistedQueryLink } from "@apollo/client/link/persisted-queries";
import sha256 from 'sha256';

const httpLink = new HttpLink({ uri: "http://localhost:5000/graphql" });
const persistedQueriesLink = createPersistedQueryLink({ sha256 }).concat(httpLink);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: persistedQueriesLink
});

const GET_BLOCKS = gql`
  query GetBlocksFeed {
    blocksFeed {
      time
      hash
      height
    }
  }
`;

function Feed() {
  const { loading, error, data } = useQuery(GET_BLOCKS);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      {data.blocksFeed.map((block, i) => (
        <div key={i} value={block.hash}>
          {block.hash}
        </div>
      ))}
    </div>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <Feed />
    </ApolloProvider>
  );
}

render(<App />, document.getElementById('root'));
