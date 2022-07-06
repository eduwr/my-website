import "../styles/globals.css";

import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { TranslateProvider } from "../contexts/TranslateContext";
import { AnimatePresence } from "framer-motion";


function MyApp({ Component, pageProps, router }: AppProps) {

  return (
    <AnimatePresence
      exitBeforeEnter
      onExitComplete={() => window.scrollTo(0, 0)}
    >
      <TranslateProvider key={router.route}>
        <Layout>
            <Component router={router} {...pageProps} />
        </Layout>
      </TranslateProvider>
    </AnimatePresence>
  );
}

export default MyApp;
