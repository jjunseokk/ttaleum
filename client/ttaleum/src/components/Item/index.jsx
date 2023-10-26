import React from "react";
import Image from "next/image";
import redWine from "../../../public/red-wine.svg";
import scoreStar from "../../../public/score-star.svg";
import styles from "./index.module.scss";

export default function Item({ img, type, name, volume, price, score }) {
  return (
    <div>
      <Image src={redWine} alt="red wine image" />
      <p className={styles.type_font}>레드 와인</p>
      <p className={styles.name_font}>토토 피에몬테 로쏘</p>
      <p className={styles.volume_font}>750ml</p>
      <p className={styles.price_font}>
        99,999<span className={styles.unit_font}>원</span>
      </p>
      <p className={styles.score_font}>
        <Image src={scoreStar} /> 4.5
      </p>
    </div>
  );
}
