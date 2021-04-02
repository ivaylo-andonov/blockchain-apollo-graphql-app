const { GRAPHQL_API_URL } = process.env;

const config = {
    graphqlApiUrl: "http://localhost:5000/graphql" || GRAPHQL_API_URL
};

export default config;
