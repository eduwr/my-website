import { GetServerSideProps } from "next";
import { getPostBySlug } from "../../graphql/requests/getPostBySlug";
import type { Post } from "../../graphql/types/Post";
import Head from "next/head";
import { StyledImage } from "../../components/StyledImage";
import advancedFormat from "dayjs/plugin/advancedFormat";
import dayjs from 'dayjs'
import { DateFormats } from "../../utils/dateFormats";
import { ArrowBackIcon } from "../../components/Icons/ArrowBackIcon";
import { VisuallyHidden } from "../../components/VisuallyHidden/VisuallyHidden";
import { useRouter } from "next/router";
import { MouseEventHandler } from "react";


interface Props {
  post: Post
}
dayjs.extend(advancedFormat);

const PostPage = ({ post }: Props) => {
  const dateAdded = dayjs(post.dateAdded);
  const { back } = useRouter()
  const handleBackButton: MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault()
    back();
  }

  return (
    <div className="flex flex-col">
      <Head>
        <title>Eduardo Wronscki | {post.title}</title>
        <meta name="description" content="Eduardo Wronscki - Blog"/>
        <link rel="icon" href="/favicon.ico"/>
      </Head>
      {/* Feature Image */}
      <div className="self-center relative w-full h-64 md:h-1/2-screen lg:max-w-1/2">
        <button
          type="submit"
          className="absolute top-3 left-3 z-50 block lg:hidden"
          onClick={handleBackButton}
        >
          <VisuallyHidden>Go back</VisuallyHidden>
          <ArrowBackIcon />
        </button>
        <div
          className={`
          absolute flex flex-col-reverse left-0 right-0 z-30 bottom-[-5px] px-5 py-3
          bg-gradient-to-t from-primary-content via-primary-content
          `}
        >
          <h3 className="text-tertiary text-xl font-bold lg:text-3xl">{post.title}</h3>
        </div>
        <StyledImage src={post.coverImage} alt={post.title} />
      </div>
      {/* Description */}
      <div className="px-5 lg:self-center lg:flex lg:flex-col lg:items-center">
        <span className="text-secondary-content lg:text-xl">{dateAdded.format(DateFormats.DEFAULT)}</span>
        <div className="flex flex-wrap">
          {post.tags.map(tag => (
            <span className="text-secondary mr-2 lg:text-lg" key={tag._id}>#{tag.name}</span>
          ))}
        </div>
      </div>
      <div
        className="post-content"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
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

  return {
    props: {
      post,
    }
  }
}

export default PostPage