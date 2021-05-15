import styles from '../styles/Home.module.css'
import en from "../locales/en";
import tr from "../locales/tr";
import { useRouter } from "next/router";

export default function Footer() {
        const router = useRouter();
        const { locale } = router;
        const t = locale === "en" ? en : tr;
  return (
    <div className="footer">
      <div className={styles.footer}>{t.footer}</div>
    </div>
  );
}