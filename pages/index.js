import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Home.module.css";
import axios from "axios";
import Navbar from "../components/Navbar";
import Header from "../components/Header";

import Footer from "../components/Footer";

import About from "../components/About";
import Plan from "../components/Plan";
import Announcement from "../components/Announcement";
import { Upcomming } from "../components/Upcomming";
import Gallery from "../components/Gallery";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Avocado</title>
        <meta
          name="description"
          content="Invest for Future in Stable Platform and Make Fast Money"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />{" "}
      </Head>

      <main className={styles.main}>
        <Header />
        <Announcement />
        <About />
        <Plan />
        <Gallery />
        {/* <Upcomming /> */}
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {}, // will be passed to the page component as props
  };
}
