import type { NextPage } from "next";
import Head from "next/head";

import { Carousel } from "../components/Carousel";
import { Presentation } from "../components/Presentation";
import { ProjectSection } from "../components/ProjectSection";

const Home: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Vitória Cavassin | Home</title>
        <meta name="description" content="Vitória Cavassin Arquiteta" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />
      <Presentation />
      <ProjectSection />
    </div>
  );
};

export default Home;
