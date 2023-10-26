import styles from "./page.module.scss";
import Item from "@/components/Item";

export default function Home() {
  return (
    <main className={styles.main}>
      <Item />
    </main>
  );
}
