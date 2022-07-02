import type { NextPage } from "next";
import Head from "next/head";

const News: NextPage = (props) => {
  return (
    <div className="container">
      <Head>
        <title>Vitória Cavassin | Novidades</title>
        <meta name="description" content="Vitória Cavassin Arquiteta" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Novidades</h1>
    </div>
  );
};

export default News;
