import type { Post } from "../../pages";
import Image from "next/image";
import advancedFormat from "dayjs/plugin/advancedFormat";
import dayjs from 'dayjs'
import Link from "next/link";
import { use3DTransform } from "../../hooks/use3DTransform";

interface Props {
  post: Post;
}

dayjs.extend(advancedFormat);

const MAX_ROTATION = 25;

export const PostCard = ({ post }: Props) => {
  const {cleanup, ref, rotationCoordinates, handleMouseMove, transition} = use3DTransform(MAX_ROTATION)

  const added = dayjs(post.dateAdded);

  return (
    <Link passHref href={`https://eduardowronscki.hashnode.dev/${post.slug}`}>
      <a
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={cleanup}
        target="_blank"
        style={{
          transform: `perspective(900px) rotateY(${-rotationCoordinates[0]}deg) rotateX(${rotationCoordinates[1]}deg)`,
          transition,
          filter: `drop-shadow(${rotationCoordinates[0]}px ${rotationCoordinates[1]}px 20px rgb(0 0 0 / 0.5))`
        }}
        >
        <li
          className={`flex flex-col justify-end w-80 h-80 xl:w-96 xl:h-96 rounded-2xl relative overflow-hidden`}>
          <div
            className="absolute flex flex-col justify-end p-3 top-0 left-0 right-0 bottom-0 z-30"
          >
            <span className="text-secondary font-thin text-sm">{added.format("Do MMMM YYYY")}</span>

            <h1 className="z-50 text-secondary font-bold text-xl">{post.title}</h1>
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
      </a>
    </Link>
  )
}