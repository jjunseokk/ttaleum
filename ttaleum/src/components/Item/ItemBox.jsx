'use client'

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import redWine from "../../../public/red-wine.svg";
import redWineMain from "../../../public/redWine-main.svg";
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
      <div className="itemBox-container">
        {page === "main" ? (
          <>
            <div className="itemBox-main-number">
              <p>{number}</p>
            </div>
            <div className="itemBox-main-item">
              {/* 지금은 params지만 나중엔 아이템 id로 대체 */}
              <div className="box" onClick={() => { router.push(`/productsDetail/${params}`) }}>
                <div className="itemBox-main-img">
                  <Image
                    objectFit={"cover"}
                    src={redWineMain} alt="red wine image" />
                </div>
                <div className="itemBox-main-contact">
                  <p className="type_font">레드 와인</p>
                  <p className="name_font">토토 피에몬테 로쏘</p>
                  <p className="volume_font">750ml</p>
                  <p style={{ marginTop: '25px' }} className="price_font">99,999원</p>
                </div>
              </div>
              <div>
                <Image onClick={clickHeart} className="itemBox-heart" src={onHeart ? on_heart : heart} alt="heart" />
              </div>
            </div>
          </>
        ) : (
          <div className="itemBox-item" >
            <Image onClick={clickHeart} className="itemBox-heart" src={onHeart ? on_heart : heart} alt="heart" />
            <div className="itemBox-area" onClick={() => { router.push(`/productsDetail/${params}`) }}>
              <div className="itemBox-img">
                {
                  page === "products" ?
                    <Image src={productWind} alt="red wine image" /> : <Image src={redWine} alt="red wine image" />
                }
              </div>

              <div className="itemBox-contact">
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
            </div>

          </div>
        )}
      </div >
    </>

  );
}
