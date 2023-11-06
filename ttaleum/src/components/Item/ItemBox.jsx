'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import redWine from "../../../public/red-wine.svg";
import productWind from '../../../public/products-wine.svg'
import heart from "../../../public/heart.svg";
import on_heart from "../../../public/on-heart.svg";
import scoreStar from "../../../public/score-star.svg";
import "./ItemBox.scss";

export default function ItemBox({ img, type, name, volume, price, score, page, number, params }) {
  const [onHeart, setOnHeart] = useState(false);
  const router = useRouter();

  const clickHeart = () => {
    setOnHeart(!onHeart);
  }

  return (
    <>
      <div onClick={()=>{router.push(`/productsDetail/${params}`)}} className="itemBox-container">
        {page === "main" ? (
          <>
            <div className="itemBox-number">
              <p>{number}</p>
            </div>
            <div className="itemBox-item">
              <Image onClick={clickHeart} className="itemBox-heart" src={onHeart ? on_heart : heart} alt="heart" />
              <Image src={redWine} alt="red wine image" />
              <p className="type_font">레드 와인</p>
              <p className="name_font">토토 피에몬테 로쏘</p>
              <p className="volume_font">750ml</p>
            </div>
          </>
        ) : (
          <div className="itemBox-item">
        {
          page === "products" ?
            <Image src={productWind} alt="red wine image" /> : <Image src={redWine} alt="red wine image" />
        }
        <Image onClick={clickHeart} className="itemBox-heart" src={onHeart ? on_heart : heart} alt="heart" />
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
    </div >
    </>

  );
}
