import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Presentation } from "../components/Presentation";
import { BlogSection } from "../components/BlogSection";
import { Post } from "../graphql/types/Post";
import { getPosts } from "../graphql/requests/getPosts";

interface Props {
  posts: Post[]
}

const Home: NextPage<Props> = (props) => {

  return (
    <div>
      <Head>
        <title>Eduardo Wronscki | Home</title>
        <meta name="description" content="Eduardo Wronscki - Full-Stack Developer"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Presentation/>
      <BlogSection posts={props.posts}/>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts
    }
  }
}

export default Home;
