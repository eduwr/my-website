import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Presentation } from "../components/Presentation";
import { BlogSection } from "../components/BlogSection";
import { Post } from "../graphql/types/Post";
import { getPosts } from "../graphql/requests/getPosts";
import { motion, Variants } from 'framer-motion';

interface Props {
  posts: Post[]
}

const pageAnimation: Variants = {
  hidden: {
    opacity: 0,
    x: "-20vw",
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      // type: "spring",
      ease: "easeInOut"
    }
  },
  out: {
    opacity: 0,
    x: '-100vw'
  },
}

const Home: NextPage<Props> = (props) => {

  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="visible"
      exit="out"
    >
      <Head>
        <title>Eduardo Wronscki | Home</title>
        <meta name="description" content="Eduardo Wronscki - Full-Stack Developer"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
        <Presentation/>
      <BlogSection posts={props.posts}/>
    </motion.div>
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
