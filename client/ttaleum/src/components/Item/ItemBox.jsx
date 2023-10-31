import React from "react";
import Image from "next/image";
import redWine from "../../../public/red-wine.svg";
import scoreStar from "../../../public/score-star.svg";
import "./ItemBox.scss";

export default function ItemBox({ img, type, name, volume, price, score, page, number }) {
  return (
    <>
      {page === "main" ? (
        <div className="itemBox-container">
          <div className="itemBox-number">
            <p>{number}</p>
          </div>
          <div>
            <Image src={redWine} alt="red wine image" />
            <p className="type_font">레드 와인</p>
            <p className="name_font">토토 피에몬테 로쏘</p>
            <p className="volume_font">750ml</p>
          </div>
        </div>
      ) : (
        <div>
          <Image src={redWine} alt="red wine image" />
          <p className="type_font">레드 와인</p>
          <p className="name_font">토토 피에몬테 로쏘</p>
          <p className="volume_font">750ml</p>
          <p className="price_font">
            99,999<span className="unit_font">원</span>
          </p>
          <p className="score_font">
            <Image src={scoreStar} alt="score" /> 4.5
          </p>
        </div>
      )}

    </>

  );
}
