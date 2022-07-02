import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { TranslateProvider } from "../contexts/TranslateContext";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_HASHNODE_URL,
  cache: new InMemoryCache(),
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_HASHNODE_API_KEY}`,
  },
});

function MyApp({ Component, pageProps }: AppProps) {

  console.log({key: process.env.NEXT_PUBLIC_HASHNODE_API_KEY})

  return (
    <TranslateProvider>
      <Layout>
        <ApolloProvider client={apolloClient} >
          <Component {...pageProps} />
        </ApolloProvider>
      </Layout>
    </TranslateProvider>
  );
}

export default MyApp;
