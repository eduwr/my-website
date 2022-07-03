import type {Post} from "../../pages";
import Image from "next/image";
import advancedFormat from "dayjs/plugin/advancedFormat";
import dayjs from 'dayjs'

dayjs.extend(advancedFormat);

interface Props {
  post: Post;
  inverted?: boolean;
}


export const PostCard = ({post}: Props) => {

  const added = dayjs(post.dateAdded)

  return (
    <li className={`flex flex-col w-96 justify-end bg-primary-focus relative h-96 rounded-2xl overflow-hidden`}>
      <div
        className="absolute flex flex-col justify-end p-3 top-0 left-0 right-0 bottom-0 z-50"
      >
        <span className="text-secondary font-thin text-sm">{added.format("Do MMMM YYYY")}</span>

        <h1 className="text-secondary font-bold text-xl">{post.title}</h1>
        <p className="text-xs text-tertiary mt-3">{post.brief.split(".")[0]}.</p>
      </div>

        <div
          style={{
            background: "radial-gradient(#2b2b2b22, #2b2b2b)"
          }}
          className="absolute top-0 bottom-0 left-0 right-0 z-20"
        />
        <Image
          src={post.coverImage}
          layout="fill"
          objectFit="cover"
          alt={post.title}
        />

    </li>
  )
}