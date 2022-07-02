import type { NextPage } from "next";
import Head from "next/head";
import { Presentation } from "../components/Presentation";
import { BlogSection } from "../components/BlogSection";
import { useQuery, gql } from '@apollo/client';

const GET_ARTICLES = gql`
  query {
    user(username:"eduwr") {
      name
      numFollowing
      numFollowers
      publication {
        title
        posts {
          title
          coverImage
          totalReactions
          popularity
          brief
        }
      }
    }
  }
`;

const Home: NextPage = (props) => {
  const { data, error, loading } = useQuery(GET_ARTICLES)

  console.log({data, error, loading})

  return (
    <div>
      <Head>
        <title>Eduardo Wronscki | Home</title>
        <meta name="description" content="Eduardo Wronscki - Full-Stack Developer"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>

      <Presentation/>
      <BlogSection/>
    </div>
  );
};

export default Home;
