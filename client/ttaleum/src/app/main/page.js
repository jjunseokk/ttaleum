'use client'

import "./main.scss"
import Image from "next/image";
import Header from "@/components/Header/Header"
import Category from "@/components/CategoryItem/Category";
import bannerCh from "../../../public/bannerCh.svg"
import RED from '../../../public/RED.svg';
import WHITE from '../../../public/WHITE.svg';
import ROSE from '../../../public/ROSE.svg';
import SPARKLING from '../../../public/SPARKLING.svg';
import DESSERT from '../../../public/DESSERT.svg';
import NON_ALCOHOLIC from '../../../public/NON_ALCOHOLIC.svg'
import SNACK from '../../../public/SNACK.svg';
import { useRef, useState } from "react";

export default function Main() {
    const testCategory = [RED, WHITE, ROSE, SPARKLING, DESSERT, NON_ALCOHOLIC, SNACK]

    const scrollRef = useRef(null);
    const [isDrag, setIsDrag] = useState(false); //드래그 중인지의 상태확인
    const [startX, setStartX] = useState(); //처음 클릭한 좌표

    const onDragStart = (e) => {
        e.preventDefault();
        setIsDrag(true);
        setStartX(e.pageX + scrollRef.current.scrollLeft);
    }

    const onDragEnd = () => {
        setIsDrag(false);
    }

    const onDragMove = (e) => {
        if (isDrag) {
            scrollRef.current.scrollLeft = startX - e.pageX;
        }
    }

    const throttle = (func, ms) => {
        let throttled = false;
        return (...args) => {
          if (!throttled) {
            throttled = true;
            setTimeout(() => {
              func(...args);
              throttled = false;
            }, ms);
          }
        };
      };

    const delay = 50;
    const onThrottleDragMove = throttle(onDragMove, delay);

    return (
        <div className="main-container">
            <Header />
            <div className="main-banner">
                <div className="title">
                    <p className="first-title">와인 어디서 사지? 고민될 땐</p>
                    <p className="second-title">와인 커머스 '띠름'</p>
                </div>
                <div className="sub-title">
                    <p>
                        레드와인부터 논 알코올까지 <br />
                        한눈에 쉽게 찾아보세요!
                    </p>
                </div>
                <Image className="banner-character" src={bannerCh} alt="bannerCh" />
            </div>
            <div
                className="main-category"
                onMouseDown={onDragStart}
                onMouseMove={isDrag ? onThrottleDragMove : null}
                onMouseUp={onDragEnd}
                onMouseLeave={onDragEnd}
                ref={scrollRef}
            >
                {Array.isArray(testCategory) ?
                    testCategory.map((item, idx) => {
                        return (
                            <Category title={item} />
                        )
                    }) : null}
            </div>


        </div>
    )
}