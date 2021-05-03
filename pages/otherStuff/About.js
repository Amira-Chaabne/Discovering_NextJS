import Link from "next/link";
import React from "react";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Image from "next/image";

class About extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <Head>
          <title>About the Author</title>
        </Head>
        <main className={styles.main}>
          <Image
            src="/picture.jpg"
            layout="intrinsic"
            height={450}
            width={800}
            alt="Elif Shafak Author"
          />
          <h1 className="mt-3">Elif Shafak</h1>
          <p className="container text-center">
            Elif Shafak is an award-winning British-Turkish novelist. She writes
            in both Turkish and English, and has published 18 books, 11 of which
            are novels. Her work has been translated into 55 languages. Her
            latest novel 10 Minutes 38 Seconds in This Strange World was
            shortlisted for the Booker Prize and RSL Ondaatje Prize; and chosen
            Blackwell’s Book of the Year. Her previous novel, The Forty Rules of
            Love was chosen by BBC among 100 Novels that Shaped Our World.
            Shafak holds a PhD in political science and she has taught at
            various universities in Turkey, the US and the UK, including St
            Anne's College, Oxford University, where she is an honorary fellow.
          </p>
        </main>
      </div>
    );
  }
}


export default About;
