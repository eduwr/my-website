import { GetServerSideProps } from "next";
import { getPostBySlug } from "../../graphql/requests/getPostBySlug";
import type { Post } from "../../graphql/types/Post";
import Head from "next/head";
import { StyledImage } from "../../components/StyledImage";
import advancedFormat from "dayjs/plugin/advancedFormat";
import dayjs from 'dayjs'
import { DateFormats } from "../../utils/dateFormats";


interface Props {
  post: Post
}
dayjs.extend(advancedFormat);

const PostPage = ({ post }: Props) => {
  const dateAdded = dayjs(post.dateAdded);
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
          className="absolute flex flex-col-reverse z-30 left-0 right-0 bottom-[-5px] bg-gradient-to-t from-primary-content via-primary-content px-5 py-3"
        >
          <h3 className="text-tertiary text-xl font-bold">{post.title}</h3>
        </div>
        <StyledImage src={post.coverImage} alt={post.title} />
      </div>
      {/* Description */}
      <div className="px-5">
        <span className="text-secondary-content">{dateAdded.format(DateFormats.DEFAULT)}</span>
        <div className="flex flex-wrap">
          {post.tags.map(tag => (
            <span className="text-secondary mr-2" key={tag._id}>#{tag.name}</span>
          ))}
        </div>
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