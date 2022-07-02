import type { NextPage } from "next";
import Head from "next/head";
import { Presentation } from "../components/Presentation";
import { ProjectSection } from "../components/ProjectSection";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Vitória Cavassin | Home</title>
        <meta name="description" content="Vitória Cavassin Arquiteta" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Presentation />
      <ProjectSection />
    </div>
  );
};

export default Home;
