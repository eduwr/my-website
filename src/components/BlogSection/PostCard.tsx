import advancedFormat from "dayjs/plugin/advancedFormat";
import dayjs from 'dayjs'
import Link from "next/link";
import { use3DTransform } from "../../hooks/use3DTransform";
import { Post } from "../../graphql/types/Post";
import { StyledImage } from "../StyledImage";
import { DateFormats } from "../../utils/dateFormats";

interface Props {
  post: Post;
}

dayjs.extend(advancedFormat);

const MAX_ROTATION = 25;

export const PostCard = ({ post }: Props) => {
  const { cleanup, ref, rotationCoordinates, handleMouseMove, } = use3DTransform(MAX_ROTATION)

  const added = dayjs(post.dateAdded);

  return (
    <Link passHref href={`/posts/${post.slug}`}>
      <a
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={cleanup}
        style={{
          transform: `perspective(900px) rotateY(${-rotationCoordinates[0]}deg) rotateX(${rotationCoordinates[1]}deg)`,
          filter: `drop-shadow(${rotationCoordinates[0]}px ${rotationCoordinates[1]}px 20px rgb(0 0 0 / 0.5))`,
          transformStyle: "preserve-3d"
        }}
      >
        <li
          className={`flex flex-col justify-end w-80 h-80 xl:w-96 xl:h-96 rounded-2xl relative `}>
          <div
            className="absolute flex flex-col justify-end p-3 top-0 left-0 right-0 bottom-0 z-30 rounded-2xl"
            style={{
              transform: `${rotationCoordinates.some(c => c) ? `perspective(900px) translateZ(80px) translateX(20px) translateY(-10px) rotateY(${-rotationCoordinates[0]}deg) rotateX(${rotationCoordinates[1]}deg` : ''}`,
            }}
          >
            <span className="text-secondary font-thin text-sm">{added.format(DateFormats.DEFAULT)}</span>

            <h1 className="z-50 text-secondary font-bold text-xl">{post.title}</h1>
            <p className="text-xs text-tertiary mt-3">{post.brief.split(".")[0]}.</p>
          </div>

          <StyledImage src={post.coverImage} alt={post.title} rounded/>

        </li>
      </a>
    </Link>
  )
}