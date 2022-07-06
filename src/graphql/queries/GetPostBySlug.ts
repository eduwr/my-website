import { gql } from "@apollo/client";

export const GET_POST_BY_SLUG = gql`
  query GetPostsByUser($slug: String!, $host:String!) {
    post(slug:$slug, hostname: $host) {
      _id
      title
      totalReactions
      coverImage
      dateAdded
      content
      tags{
        _id
        name
      }
    }
  }
`;