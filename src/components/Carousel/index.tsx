import NextImage from "next/image";
import { useState } from "react";
import resources from "../../data/resources.json";

export const Carousel = () => {
  const [current, setCurrent] = useState(resources.featuredImages[0].id);

  return (
    <section className="flex w-full h-full relative">
      {resources.featuredImages.map(({ id, uri, description }, index) => {
        return (
          <NextImage
            className={
              current === id
                ? "absolute transition-all"
                : "opacity-0 absolute transition-all"
            }
            key={id}
            src={uri}
            alt={description}
            layout="fill"
            objectFit="cover"
          />
        );
      })}
      <div className="z-50">
        {resources.featuredImages.map(({ id }) => {
          return (
            <button key={id} onClick={() => setCurrent(id)}>
              value
            </button>
          );
        })}
      </div>
    </section>
  );
};
