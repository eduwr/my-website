import { Translated } from "../Translated";
import {PostCard} from "./PostCard";
import type { Post } from "../../graphql/types/Post";
import { Variants, motion } from "framer-motion";


interface Props {
  posts: Post[]
}

const variants: Variants = {
  hidden: {
    opacity: 0,
    x: "-50px",
    y: "-25px"
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: {
      duration: 0.7,
    }
  }
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
      <motion.ul
        className="flex flex-wrap justify-center gap-5"
        variants={variants}
        initial="hidden"
        // animate="visible"
        whileInView="visible"
      >
        {posts.map((post) =>
          <PostCard key={post._id} post={post}/>)}
      </motion.ul>
    </section>
  )
}