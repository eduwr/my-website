import type {Post} from "../../pages";
import Image from "next/image";

interface Props {
  post: Post
}


export const PostCard = ({post}: Props) => {
  return (
    <li className="flex flex-col w-96">
      <div className="w-full relative w-full h-32 md:h-40 lg:h-80 my-6 overflow-hidden rounded-lg">
        <Image
          src={post.coverImage}
          layout="fill"
          objectFit="cover"
          alt={post.title}
        />
      </div>
      <p className="text-base lg:text-2xl text-secondary font-thin line-clamp-5">
        {post.brief}
      </p>
    </li>
  )
}