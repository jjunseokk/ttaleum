"use client";

import Header from "@/components/Header/Header";
import "./heart.scss";
import ItemBox from "@/components/Item/ItemBox";
import upright_triangle from "../../../public/upright-triangle.svg";
import Image from "next/image";

export default function Heart() {
  return (
    <div className="main">
      <div className="main-container">
        <Header title="찜한 상품" />
        <main>
          <section className="item-assistant">
            <p className="item-number">{`상품 ${123}`}</p>
            <p className="item-sort">
              {`${"최근찜한순"} `}
              <Image src={upright_triangle} alt="upright triangle" />
            </p>
          </section>
          <div className="item-container">
            <div className="item-box-margin">
              <ItemBox page={"heart"} />
            </div>
            <div className="item-box-margin">
              <ItemBox page={"heart"} />
            </div>
            <div className="item-box-margin">
              <ItemBox page={"heart"} />
            </div>
            <div className="item-box-margin">
              <ItemBox page={"heart"} />
            </div>
            <div className="item-box-margin">
              <ItemBox page={"heart"} />
            </div>
            <div className="item-box-margin">
              <ItemBox page={"heart"} />
            </div>
            <div className="item-box-margin">
              <ItemBox page={"heart"} />
            </div>
            <div className="item-box-margin">
              <ItemBox page={"heart"} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
