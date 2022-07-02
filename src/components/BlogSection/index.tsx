import { Translated } from "../Translated";
import { Post } from "../../pages";

interface Props {
  posts: Post[]
}

export const BlogSection = ({posts}: Props) => {

  return (
    <section
      className="bg-secondary-content px-8 md:px-24 md:py-10"
    >
      <h2
      className=" text-primary-content text-5xl font-bold uppercase leading-normal"
      >
        <Translated textKey={"home.nav.blog"} />
      </h2>
      {posts.map(post => {
        return <div key={post._id}>{post.title}</div>
      })}
    </section>
  )
}