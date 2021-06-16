import styles from '../../styles/Home.module.css'
import Head from 'next/head'
import Image from "next/image";
import Data from '../../data.json'
export default function Books(){
    return (
      <main className={styles.container}>
        <Head>
          <title>Books</title>
          <meta name="description" content="Elif Shafak author website books" />
        </Head>
        <h1>Elif's Books</h1>
        <div className={styles.contentBooksPage}>
          {Data.map((booksDetails, index) => {
            return (
              <div key={booksDetails.id} className={styles.books}>
                <Image
                  src={booksDetails.image}
                  layout="intrinsic"
                  height={280}
                  width={180}
                  alt="Elif Shafak old books"
                  placeholder="blur"
                />
                <h4>{booksDetails.name}</h4>
                <p>{booksDetails.description} </p>
                <p>Releasing date: {booksDetails.Releasing_Date}</p>
              </div>
            );
          })}
        </div>
      </main>
    );
  }
