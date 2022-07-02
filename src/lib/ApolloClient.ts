import { ApolloClient, InMemoryCache } from "@apollo/client";


export const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_HASHNODE_URL,
  cache: new InMemoryCache(),
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_HASHNODE_API_KEY}`,
  },
});
