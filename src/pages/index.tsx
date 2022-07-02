import type { NextPage } from "next";
import Head from "next/head";
import { Presentation } from "../components/Presentation";
import { BlogSection } from "../components/BlogSection";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Eduardo Wronscki | Home</title>
        <meta name="description" content="Eduardo Wronscki - Full-Stack Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Presentation />
      <BlogSection />
    </div>
  );
};

export default Home;
