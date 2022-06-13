import Image from "next/image";

export const Presentation = () => (
  <section className="flex flex-col md:flex-row justify-center gap-8 items-center py-8 md:py-16 md:px-8 w-full md:h-1/2-screen relative bg-light">
    <div className="h-96 w-96 rounded-full relative overflow-hidden">
      <Image
        src="/assets/images/profile.png"
        alt="Yoga"
        layout="fill"
        objectFit="cover"
      />
    </div>
    <div className="md:w-1/2 px-5 h-full flex flex-col relative">
      <h3 className="lg:text-5xl text-4xl text-center md:text-left text-yellow font-bold mb-5 uppercase">
        Quem é Vitória Cavassin?
      </h3>
      <p className="text-2xl text-grey font-thin text-center md:text-left">
        Mamãe do Tigue, diva, iluminada, esotérica, aquariana nata e arquiteta
        renomada.
      </p>
      <button className="md:self-end py-4 px-8 mt-4 text-2xl text-yellow uppercase border-2 border-yellow rounded-lg hover:text-white hover:bg-yellow transition-all duration-300">
        Entre em contato
      </button>
    </div>
  </section>
);
