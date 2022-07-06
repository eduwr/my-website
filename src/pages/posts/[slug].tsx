import { GetServerSideProps } from "next";
import { getPostBySlug } from "../../graphql/requests/getPostBySlug";
import type { Post } from "../../graphql/types/Post";
import Head from "next/head";
import { StyledImage } from "../../components/StyledImage";

interface Props {
  post: Post
}

const PostPage = ({ post }: Props) => {
  console.log(post)
  return (
    <div>
      <Head>
        <title>Eduardo Wronscki | {post.title}</title>
        <meta name="description" content="Eduardo Wronscki - Blog"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      {/* Feature Image */}
      <div className="relative w-full h-64">
        <div
          className="absolute flex flex-col-reverse z-30 left-0 right-0 bottom-[-5px] bg-gradient-to-t from-primary-content px-5 py-3"
        >
          <h3 className="text-tertiary text-xl font-bold">{post.title}</h3>
        </div>
        <StyledImage src={post.coverImage} alt={post.title} />
      </div>
      {/* Description */}
      <div className="">

      </div>
    </div>
  )
}


export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query: { slug } } = context
  if (typeof slug !== "string") {
    return {
      notFound: true,
    }
  }

  const post = await getPostBySlug({ slug })
  console.log({ post })

  return {
    props: {
      post,
    }
  }
}

export default PostPage