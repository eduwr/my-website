import { GetServerSideProps } from "next";
import { getPostBySlug } from "../../graphql/requests/getPostBySlug";
import type { Post } from "../../graphql/types/Post";

interface Props {
  post: Post
}

const PostPage = ({post}: Props) => {
  console.log(post)
  return (
    <div>
      <h1>{post?.title}</h1>
    </div>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const {query: {slug}} = context
  if(typeof slug !== "string") {
    return {
      props: { }
    }
  }

  const post = await getPostBySlug({slug})
  console.log({post})

  return {
    props: {
      post
    }
  }
}

export default PostPage