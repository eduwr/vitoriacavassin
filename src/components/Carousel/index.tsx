import Image from "next/image";

export const Carousel = () => {
  return (
    <div className="flex w-full h-1/2-screen relative">
      <Image
        src="/assets/images/yoga.png"
        alt="Yoga"
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};
