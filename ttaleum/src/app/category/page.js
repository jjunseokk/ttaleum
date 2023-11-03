
'use client'

import "./category.scss";
import { useRouter } from "next/navigation";
import Header from "@/components/Header/Header";
import allBg from '../../../public/allBg.svg';
import redWineBg from '../../../public/redWineBg.svg';
import whiteWineBg from '../../../public/whiteWineBg.svg';
import roseWineBG from '../../../public/roseWineBG.svg';
import sparklingWineBg from '../../../public/sparklingWineBg.svg';
import dessertWineBg from '../../../public/dessertWineBg.svg';
import nonAlcoholBg from '../../../public/nonAlcoholBg.svg';
import snackBg from '../../../public/snackBg.svg';
import Image from "next/image";

export default function Category() {

    const router = useRouter();

    const testBox = [
        { "img": allBg, "name": "전체보기", id: 1 },
        { "img": redWineBg, "name": "레드 와인", id: 2 },
        { "img": whiteWineBg, "name": "화이트 와인", id: 3 },
        { "img": roseWineBG, "name": "로제 와인", id: 4 },
        { "img": sparklingWineBg, "name": "스파클링 와인", id: 5 },
        { "img": dessertWineBg, "name": "디저트 와인", id: 6 },
        { "img": nonAlcoholBg, "name": "논알코올", id: 7 },
        { "img": snackBg, "name": "안주", id: 8 },
    ]

    return (
        <div className="main">
            <div className="main-container">
                <Header title="카테고리" />
                <div className="category-container">
                    {testBox?.map((item, idx) => {
                        return (
                            <div
                                style={{ background: `${item.name === "전체보기" ? "#FF6135" : "black"}` }}
                                key={idx}
                                className="category-itemBox"
                                onClick={() => { router.push(`/products/${item.id}`) }}
                            >
                                <p>{item.name}</p>
                                <Image src={item.img} alt={item.name} />
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}