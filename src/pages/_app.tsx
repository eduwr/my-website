import "../styles/globals.css";

import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { TranslateProvider } from "../contexts/TranslateContext";
import { AnimatePresence } from "framer-motion";


function MyApp({ Component, pageProps, router }: AppProps) {

  return (
    <TranslateProvider>
      <AnimatePresence
        exitBeforeEnter
        onExitComplete={() => window.scrollTo(0, 0)}
      >
        <Layout key={router.route}>
          <Component router={router} {...pageProps} />
        </Layout>
      </AnimatePresence>
    </TranslateProvider>
  );
}

export default MyApp;
