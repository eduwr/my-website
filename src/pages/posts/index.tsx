import { BlogSection } from "../../components/BlogSection";
import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";
import { getPosts } from "../../graphql/requests/getPosts";
import { Post } from "../../graphql/types/Post";

interface Props {
  posts: Post[]
}

const Posts: NextPage<Props>= (props) => {
  return (
    <div>
      <Head>
        <title>Eduardo Wronscki | Blog</title>
        <meta name="description" content="Eduardo Wronscki - Blog"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      <BlogSection posts={props.posts}/>
    </div>
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