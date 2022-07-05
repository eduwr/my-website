import { BlogSection } from "../../components/BlogSection";
import Head from "next/head";
import { GetServerSideProps, NextPage } from "next";
import { apolloClient } from "../../lib/ApolloClient";
import { gql } from "@apollo/client";

export interface Post {
  _id: string;
  title: string;
  coverImage: string;
  brief: string;
  dateAdded: Date;
  slug: string;
}

interface GetPostsByUserResponse {
  user: {
    publication: {
      posts: Post[]
    }
  }
}

interface Props {
  posts: Post[]
}


const GET_POSTS_BY_USER = gql`
  query GetPostsByUser($user: String!) {
    user(username:$user) {
      publication {
        posts {
            _id
            title
            coverImage
            brief
            dateAdded
            slug
        }
      }
    }
  }
`;


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
  const {data} = await apolloClient.query<GetPostsByUserResponse>({
    query: GET_POSTS_BY_USER,
    variables: {
      user: process.env.NEXT_PUBLIC_HASHNODE_USER
    }
  });

  const props = {} as Props

  if(data) {
    props.posts = data.user.publication.posts
  }

  return {
    props
  }
}



export default Posts;