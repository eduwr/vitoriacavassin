import NextImage from "next/image";
import { useEffect, useState } from "react";
import resources from "../../data/resources.json";

export const Carousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const next = () => {
      const rollback = current + 1 >= resources.featuredImages.length;

      if (rollback) {
        return setCurrent(0);
      }

      setCurrent((prev) => prev + 1);
    };

    setTimeout(() => {
      next();
    }, 8000);
  }, [current]);

  const previous = () => {
    setCurrent((prev) => prev - 1);
  };

  return (
    <div className="flex flex-col-reverse relative h-3/4-screen w-full">
      <div className="z-40 overflow-hidden border-4 border-black ">
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
              onClick={() => setCurrent(id)}
            />
          );
        })}
      </div>
    </div>
  );
};
