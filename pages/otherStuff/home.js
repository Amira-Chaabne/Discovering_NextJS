import Head from "next/head";
import Image from "next/image";
import styles from "../../styles/Home.module.css";
import en from "../../locales/en";
import tr from "../../locales/tr";
import { useRouter } from "next/router";

export default function Home() {
        const router = useRouter();
        const { locale } = router;
        const t = locale === "tr" ? tr : en;
  return (
    <main className={styles.container}>
      <Head>
        <title>Elif Shafak</title>
        <meta name="description" content="Elif Shafak author website Home page" />
      </Head>

      <div className={styles.main}>
        <h1 className="title">
          {t.homePageTitle} <br />
        </h1>
        <div className={styles.coming}>
          <h2>{t.homePageComingSoon}</h2>
        </div>
        <div className={styles.newestOne}>
          <div className="row container d-flex align-items-center">
            <div className="col-md-3 text-center">
              <Image
                src="/newestBook.jpg"
                layout="responsive"
                height={320}
                width={215}
                alt="New book releasing soon"
              />
            </div>
            <div className="col-md-9 mt-4">
              <p>
                <strong>{t.homePageTitlebook} :</strong>{" "}
                {t.homePageTitlebookContent}
              </p>
              <p>
                <strong>{t.homePageAuthor} :</strong> {t.homePageAuthorContent}
              </p>
              <p>
                <strong>'{t.homePageReleasing} :</strong>{" "}
                {t.homePageReleasingContent}
              </p>
              <p className="text-justify">
                <strong>{t.homePageDescription} :</strong>{" "}
                {t.homePageDescriptionContent}
              </p>
              <p>
                <strong>{t.homePagePrice} :</strong> {t.homePagePriceContent}
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
