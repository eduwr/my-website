import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { Presentation } from "../components/Presentation";
import { BlogSection } from "../components/BlogSection";
import { gql } from '@apollo/client';
import { apolloClient } from "../lib/ApolloClient";

export interface Post {
  _id: string;
  title: string;
  coverImage: string;
  totalReactions: number;
  popularity: number
  brief: string;
  dateAdded: Date;
  dateFeatured: Date;
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
          totalReactions
          popularity
          brief
          dateAdded
          dateFeatured
        }
      }
    }
  }
`;

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

  console.log({props})

  return {
    props
  }
}

export default Home;
