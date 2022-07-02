import type { NextPage } from "next";
import Head from "next/head";
import { Presentation } from "../components/Presentation";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Eduardo Wronscki | Home</title>
        <meta name="description" content="Eduardo Wronscki - Full-Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Presentation />
    </div>
  );
};

export default Home;
