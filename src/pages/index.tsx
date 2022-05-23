import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Carousel } from "../components/Carousel";
import styles from "../styles/Home.module.css";

const Home: NextPage = (props) => {
  return (
    <div className="">
      <Head>
        <title>Vitória Cavassin | Home</title>
        <meta name="description" content="Vitória Cavassin Arquiteta" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Carousel />
    </div>
  );
};

export default Home;
