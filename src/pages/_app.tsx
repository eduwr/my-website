import "../styles/globals.css";
import "../styles/post-card.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { TranslateProvider } from "../contexts/TranslateContext";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <TranslateProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </TranslateProvider>
  );
}

export default MyApp;
