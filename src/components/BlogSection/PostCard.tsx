import type { Post } from "../../pages";
import Image from "next/image";
import advancedFormat from "dayjs/plugin/advancedFormat";
import dayjs from 'dayjs'
import Link from "next/link";
import { MouseEventHandler, useRef, useState } from "react";

interface Props {
  post: Post;
  inverted?: boolean;
}

dayjs.extend(advancedFormat);

type Coordinates<T = number> = [T, T];

interface Position {
  centerCoordinates: Coordinates;
  left: number;
  right: number;
  top: number;
  bottom: number;
}

type GetRelativeCoordinatesParams = {
  centerCoordinates: Coordinates,
  pointCoordinates: Coordinates,
  maxCoordinates: Coordinates
}

const MAX_ROTATION = 25;
const getMiddlePoint = (P0: number, P1: number) => (P0 + P1) / 2
const getCenterCoordinates = ({ left, right, top, bottom }: Omit<Position, "centerCoordinates">): [ number, number ] =>
  [ getMiddlePoint(left, right), getMiddlePoint(top, bottom) ]
// Returns a relative position from the middle of the element
const getRelativePosition = ({ point, center, max }: { point: number, center: number, max: number }) =>
  (point - center) / (max - center)


const getRelativeCoordinates = (args: GetRelativeCoordinatesParams) => {
  const { centerCoordinates, pointCoordinates, maxCoordinates } = args
  return pointCoordinates.map((point, index) =>
    getRelativePosition({
      point,
      max: maxCoordinates[index],
      center: centerCoordinates[index]
    })) as Coordinates
}

const getRotationCoordinates = (relativeCoordinates: Coordinates) =>
  relativeCoordinates.map(coordinate => `${coordinate * MAX_ROTATION}deg`) as Coordinates<string>

export const PostCard = ({ post }: Props) => {
  const ref = useRef<HTMLAnchorElement>(null)
  const added = dayjs(post.dateAdded);
  const [ rotationCoordinates, setRotationCoordinates ] = useState<Coordinates<string>>(["0", "0"])


  const handleMouseMove: MouseEventHandler<HTMLAnchorElement> = ({ clientX, clientY }) => {
    if (!ref.current) return;

    const { left, top, right, bottom } = ref.current.getBoundingClientRect();
    const centerCoordinates = getCenterCoordinates({ left, right, top, bottom })

    if (centerCoordinates && right && bottom) {
      const relativeCoordinates = getRelativeCoordinates({centerCoordinates, pointCoordinates: [clientX, clientY], maxCoordinates: [right, bottom]});
      setRotationCoordinates(getRotationCoordinates(relativeCoordinates))
    }
  }


  return (
    <Link passHref href={`https://eduardowronscki.hashnode.dev/${post.slug}`}>
      <a
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {}}
        style={{
          transform: `perspective(1000px) rotateY(${rotationCoordinates[0]}) rotateX(${rotationCoordinates[1]})`,
        }}
        target="_blank">
        <li
          className={`flex flex-col justify-end w-80 h-80 xl:w-96 xl:h-96 rounded-2xl bg-primary-focus relative overflow-hidden`}>
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
      </a>
    </Link>
  )
}