import "../styles/globals.css";
import type { AppProps } from "next/app";
import { Layout } from "../components/Layout";
import { useRouter } from "next/router";
import { TranslateProvider } from "../contexts/TranslateContext";

function MyApp({ Component, pageProps }: AppProps) {
  const { asPath } = useRouter();
  return (
    <TranslateProvider>
      <Layout showCarousel={asPath === "/"}>
        <Component {...pageProps} />
      </Layout>
    </TranslateProvider>
  );
}

export default MyApp;
