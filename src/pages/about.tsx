import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";

const About: NextPage = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vitória Cavassin | Sobre</title>
        <meta name="description" content="Vitória Cavassin Arquiteta" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Sobre</h1>
    </div>
  );
};

export default About;
