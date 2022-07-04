import { MouseEventHandler, useRef, useState } from "react";

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

enum TransitionStyles {
  FAST_LINEAR = "transform 100ms linear",
  SLOW_EASE = "transform filter 800ms ease"
}


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


export const use3DTransform = (MAX_ROTATION = 25) => {
  const getRotationCoordinates = (relativeCoordinates: Coordinates) =>
    relativeCoordinates.map(coordinate => coordinate * MAX_ROTATION) as Coordinates

  const ref = useRef<HTMLAnchorElement>(null);
  const [ rotationCoordinates, setRotationCoordinates ] = useState<Coordinates>([0, 0])
  const [transition, setTransition] = useState<TransitionStyles>(TransitionStyles.SLOW_EASE)

  const handleMouseMove: MouseEventHandler<HTMLAnchorElement> = ({ clientX, clientY }) => {
    if (!ref.current) return;
    setTransition(TransitionStyles.FAST_LINEAR);
    const { left, top, right, bottom } = ref.current.getBoundingClientRect();
    const centerCoordinates = getCenterCoordinates({ left, right, top, bottom })

    if (centerCoordinates && right && bottom) {
      const relativeCoordinates = getRelativeCoordinates({centerCoordinates, pointCoordinates: [clientX, clientY], maxCoordinates: [right, bottom]});
      setRotationCoordinates(getRotationCoordinates(relativeCoordinates))
    }
  }

  const cleanup = () => {
    setRotationCoordinates([0, 0])
    setTransition(TransitionStyles.SLOW_EASE);
  }

  return {
    ref,
    handleMouseMove,
    cleanup,
    rotationCoordinates,
    transition
  }

}