import NextImage from "next/image";
import { useState } from "react";
import resources from "../../data/resources.json";

export const Carousel = () => {
  const [current, setCurrent] = useState(resources.featuredImages[0].id);

  return (
    <div className="relative h-3/4-screen w-full">
      <div className="z-40 overflow-hidden border-4 border-black ">
        {resources.featuredImages.map(({ id, uri, description }) => {
          return (
            <NextImage
              className={
                current === id ? "transition-all" : "opacity-0 transition-all"
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
      <div className="z-50 self-end">
        {resources.featuredImages.map(({ id }) => {
          return (
            <button key={id} onClick={() => setCurrent(id)}>
              value
            </button>
          );
        })}
      </div>
    </div>
  );
};
