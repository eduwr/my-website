import { apolloClient } from "../../lib/ApolloClient";
import { Post } from "../types/Post";
import { GET_POST_BY_SLUG } from "../queries/GetPostBySlug";


interface GetPostBySlugResponse {
  post: Post;
}

interface Props {
  slug: string;
}

export const getPostBySlug = async ({ slug }: Props) => {
  const { data } = await apolloClient.query<GetPostBySlugResponse>({
    query: GET_POST_BY_SLUG,
    variables: {
      host: process.env.NEXT_PUBLIC_HASHNODE_HOST,
      slug: slug
    }
  });

  return data.post;
}