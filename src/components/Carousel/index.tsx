import NextImage from "next/image";
import { useEffect, useState } from "react";
import resources from "../../utils/resources.json";

export const Carousel = () => {
  const [ current, setCurrent ] = useState(0);
  const [ timer, setTimer ] = useState<NodeJS.Timer>();

  useEffect(() => {
    const next = () => {
      const rollback = current + 1 >= resources.featuredImages.length;

      if (rollback) {
        return setCurrent(0);
      }

      setCurrent((prev) => prev + 1);
    };

    const interval = setInterval(next, 8000);
    setTimer(interval);

    return () => clearInterval(interval);
  }, [ current ]);

  return (
    <div className="flex flex-col-reverse relative h-3/4-screen w-full overflow-hidden">
      <div>
        {resources.featuredImages.map(({ id, uri, description }, index) => {
          return (
            <NextImage
              className={
                current === index
                  ? "transition-all duration-1000"
                  : "opacity-0 transition-all duration-1000"
              }
              key={id}
              src={uri}
              alt={description}
              layout="fill"
              objectFit="cover"
            />
          );
        })}
      </div>
      <div className="flex justify-center z-50">
        {resources.featuredImages.map(({ id }, index) => {
          const selected = current === index;
          return (
            <button
              className={
                selected
                  ? "rounded-full h-10 w-10 bg-yellow m-4 border-2 border-white opacity-95 transition-all duration-1000"
                  : "rounded-full h-10 w-10 m-4 border-2 border-white opacity-95 transition-all duration-1000"
              }
              key={id}
              onClick={() => {
                timer && clearInterval(timer);
                setCurrent(index);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
