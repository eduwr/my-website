import { Translated } from "../Translated";
import {PostCard} from "./PostCard";
import type { Post } from "../../graphql/types/Post";


interface Props {
  posts: Post[]
}

export const BlogSection = ({posts}: Props) => {
  return (
    <section
      className="bg-secondary-content px-8 pb-10 pt-5 md:py-10"
    >
      <h2
      className="text-primary-content text-5xl font-bold uppercase leading-normal"
      >
        <Translated textKey={"home.nav.blog"} />
      </h2>
      <ul className="flex flex-wrap justify-center gap-5">
        {posts.map((post) =>
          <PostCard key={post._id} post={post}/>)}
      </ul>
    </section>
  )
}