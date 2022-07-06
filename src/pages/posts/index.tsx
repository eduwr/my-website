import { BlogSection } from "../../components/BlogSection";
import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";
import { getPosts } from "../../graphql/requests/getPosts";
import { Post } from "../../graphql/types/Post";
import { Variants, motion } from "framer-motion";

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
      when: "beforeChildren",
      ease: "easeInOut"
    }
  },
  exit: {
    opacity: 0,
    x: '-100vw',
    transition: {
      ease: 'easeInOut'
    }
  },
}


const Posts: NextPage<Props>= (props) => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="visible"
      exit="exit"
    >

      <Head>
        <title>Eduardo Wronscki | Blog</title>
        <meta name="description" content="Eduardo Wronscki - Blog"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <BlogSection posts={props.posts}/>
    </motion.div>
  )
}

export const getServerSideProps: GetServerSideProps = async () => {
  const posts = await getPosts();

  return {
    props: {
      posts
    }
  }
}



export default Posts;