import type { NextPage } from "next";
import Head from "next/head";

import { Carousel } from "../components/Carousel";
import { Presentation } from "../components/Presentation";

const Home: NextPage = (props) => {
  return (
    <div className="">
      <Head>
        <title>Vitória Cavassin | Home</title>
        <meta name="description" content="Vitória Cavassin Arquiteta" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />
      <Presentation />
    </div>
  );
};

export default Home;
