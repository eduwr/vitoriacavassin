import Image from "next/image";

export const Presentation = () => (
  <section className="flex justify-between items-center py-16 px-40 w-full h-1/2-screen relative bg-light">
    <div className="h-96 w-96 rounded-full relative overflow-hidden">
      <Image
        src="/assets/images/profile.png"
        alt="Yoga"
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="w-1/2 h-full flex flex-col relative">
      <h3 className="text-5xl text-yellow font-bold mb-5 uppercase">
        Quem é Vitória Cavassin?
      </h3>
      <p className="text-2xl text-grey font-thin text-justify">
        Mamãe do Tigue, diva, iluminada, esotérica, aquariana nata e arquiteta
        renomada.
      </p>
      <button className="self-end w-[75%] py-4 px-11 mt-4 text-2xl text-yellow uppercase border-2 border-yellow rounded-lg hover:text-white hover:bg-yellow transition-all duration-300">
        Entre em contato
      </button>
    </div>
  </section>
);
