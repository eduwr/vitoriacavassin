import Image from "next/image";

export const Carousel = () => {
  return (
    <section className="flex w-full h-section relative">
      <Image
        src="/assets/images/yoga.png"
        alt="Yoga"
        layout="fill"
        objectFit="cover"
      />
    </section>
  );
};
