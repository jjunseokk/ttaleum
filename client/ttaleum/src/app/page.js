import Main from "./main/page";
import styles from "./page.module.scss";
import Image from "next/image";

import home from '../../public/home.svg'
import search from '../../public/search.svg'
import category from '../../public/category.svg'
import community from '../../public/community.svg'
import user from '../../public/user.svg'

export default function Home() {
  return (
    <main className={styles.main}>
      <Main/>
      <div className={styles.navigation}>
        <Image src={home} alt="home"/>
        <Image src={search} alt="search"/>
        <Image src={category} alt="category"/>
        <Image src={community} alt="community"/>
        <Image src={user} alt="user"/>
      </div>
    </main>
  );
}
