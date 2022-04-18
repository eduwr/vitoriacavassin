import type { NextPage } from "next";
import Head from "next/head";

import styles from "../styles/Home.module.css";

const Contact: NextPage = (props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Vitória Cavassin | Contato</title>
        <meta name="description" content="Vitória Cavassin Arquiteta" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1>Contact</h1>
    </div>
  );
};

export default Contact;
