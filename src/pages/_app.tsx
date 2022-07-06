import "../styles/globals.css";

import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { TranslateProvider } from "../contexts/TranslateContext";
import { AnimatePresence } from "framer-motion";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence
      exitBeforeEnter
      initial={false}
    >
      <TranslateProvider>
        <Layout>

            <Component {...pageProps} />

        </Layout>
      </TranslateProvider>
    </AnimatePresence>
  );
}

export default MyApp;
