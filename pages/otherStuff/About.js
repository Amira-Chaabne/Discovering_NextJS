import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Image from "next/image";
import en from "../../locales/en"
import tr from "../../locales/tr"
import { useRouter } from "next/router";

  export default function About() {
      const router = useRouter();
      const { locale } = router;
      const t = locale === "tr" ? tr : en;
    return (
      <main className={styles.container}>
        <Head>
          <title>About the Author</title>
          <meta name="description" content="Elif Shafak author website About Biography" />
        </Head>
        <div className={styles.main}>
          <Image
            src="/picture.jpg"
            layout="intrinsic"
            height={450}
            width={800}
            alt="picture of Elif Shafak"
          />
          <h1 className="mt-3">{t.AboutPageName}</h1>
          <p className="container text-center">{t.AboutPageBiography}</p>
        </div>
      </main>
    );
  }
