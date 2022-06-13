import Image from "next/image";

export const Carousel = () => {
  return (
    <section className="flex w-full h-full relative">
      <Image
        src="/assets/images/yoga.png"
        alt="Yoga"
        layout="fill"
        objectFit="cover"
      />
    </section>
  );
};
