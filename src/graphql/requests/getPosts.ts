

import { apolloClient } from "../../lib/ApolloClient";
import { GET_POSTS_BY_USER } from "../queries/GetPostsByUser";
import { Post } from "../types/Post";


interface GetPostsByUserResponse {
  user: {
    publication: {
      posts: Post[]
    }
  }
}

export const getPosts = async () => {
  const {data} = await apolloClient.query<GetPostsByUserResponse>({
    query: GET_POSTS_BY_USER,
    variables: {
      user: process.env.NEXT_PUBLIC_HASHNODE_USER
    }
  });

  return data.user.publication.posts;
}