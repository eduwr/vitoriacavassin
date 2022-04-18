import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vitória Cavassin - Home</title>
        <meta name="description" content="Vitória Cavassin Arquiteta" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  );
};

export default Home;
