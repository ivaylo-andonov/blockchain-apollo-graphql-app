import React from 'react'
import { render } from 'react-dom'
import sha256 from 'sha256';
import config from "./config"
import { ApolloClient, InMemoryCache, ApolloProvider, gql, useQuery, HttpLink } from "@apollo/client";
import { createPersistedQueryLink } from "@apollo/client/link/persisted-queries";

const httpLink = new HttpLink({ uri: config.graphqlApiUrl });

const persistedQueriesLink = createPersistedQueryLink({ sha256, useGETForHashedQueries: true }).concat(httpLink);

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: persistedQueriesLink
});

const GET_BLOCKS_SUMMARY = gql`
  query GetBlocksFeed {
    blocksFeed {
      time
      hash
      height
    }
  }
`;

const GET_BLOCK_DETAILS = gql`
  query GetBlockDetails($hash: ID!) {
    blockDetails(hash: $hash) {
      blockIndex
      fee
      hash
      size
      transactions{
        hash
      }
    }
  }
`;

function Feed() {
  const { loading, error, data } = useQuery(GET_BLOCKS_SUMMARY);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div> Blocks FEED:
      {data.blocksFeed.map((block, i) => (
        <div key={i}> {block.hash} </div>
      ))}
    </div>
  );
}

function BlockDetails({ hash }) {
  const { loading, error, data } = useQuery(GET_BLOCK_DETAILS, { variables: { hash } });

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  return (
    <div>
      <h2>Block {data.blockDetails.blockIndex}</h2>
      <h5>Hash: {data.blockDetails.hash}</h5>
      <h5>Index: {data.blockDetails.blockIndex}</h5>
      <h5>Fee:{data.blockDetails.fee}</h5>
      <h5>Size:{data.blockDetails.size}</h5>
      <h5>Block Transactions:
        {data.blockDetails.transactions.map((tx, i) => (
        <div key={i}>{tx.hash}</div>
      ))}
      </h5>
    </div>
  );
}

function App() {
  return (
    <ApolloProvider client={client}>
      <div>-----------</div>
      <Feed />
      <div>-----------</div>
      <Feed />
      <div>-----------</div>
      <Feed />
      <BlockDetails hash={"0000000000000000001261c0960066324c189fc83df5080d161be0849a98a4a8"} />
    </ApolloProvider>
  );
}

render(<App />, document.getElementById('root'));
