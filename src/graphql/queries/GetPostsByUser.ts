import { gql } from "@apollo/client";

export const GET_POSTS_BY_USER = gql`
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