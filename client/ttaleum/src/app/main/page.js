'use client'

import "./main.scss"
import { useRef, useState } from "react";
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
import bottom from '../../../public/bottom.svg'
import ItemBox from "@/components/Item/ItemBox";
import collection_1 from '../../../public/collection_1.svg'
import collection_2 from '../../../public/collection_2.svg'
import collection_3 from '../../../public/collection_3.svg'
import CollectionBox from "@/components/CollectionBox/CollectionBox";
import event_1 from '../../../public/event_1.svg'
import event_2 from '../../../public/event_2.svg'

export default function Main() {
    const testCategory = [
        { "img": RED, "name": "레드 와인" },
        { "img": WHITE, "name": "화이트 와인" },
        { "img": ROSE, "name": "로제 와인" },
        { "img": SPARKLING, "name": "스파클링 와인" },
        { "img": DESSERT, "name": "디저트 와인" },
        { "img": NON_ALCOHOLIC, "name": "논알코올" },
        { "img": SNACK, "name": "안주" },
    ]
    const testCollection = [
        { "img": collection_1, "text": `이 가격에 와인을? 가성비 좋은 와인 모음집` },
        { "img": collection_2, "text": `이번 주말에는 홈파티다! 홈파티용 추천 와인 5가지` },
        { "img": collection_3, "text": `어떤 와인을 선물하면 좋을까? 따름이 추천하는 선물용 와인` }
    ]
    const categoryScrollRef = useRef(null);
    const bestSellerScrollRef = useRef(null);
    const collectionScrollRef = useRef(null);
    const [categoryIsDrag, setCategoryIsDrag] = useState(false); //드래그 중인지의 상태확인
    const [bestSellerIsDrag, setBestSellerIsDrag] = useState(false); //드래그 중인지의 상태확인
    const [collectionIsDrag, setCollectionIsDrag] = useState(false); //드래그 중인지의 상태확인
    const [categoryStartX, setCategoryStartX] = useState(); //처음 클릭한 좌표
    const [bestSellerStartX, setBestSellerStartX] = useState(); //처음 클릭한 좌표
    const [collectionStartX, setCollectionStartX] = useState(); //처음 클릭한 좌표

    const onCategoryDragStart = (e) => {
        e.preventDefault();
        setCategoryIsDrag(true);
        setCategoryStartX(e.pageX + categoryScrollRef.current.scrollLeft);
    }

    const onBestSellerDragStart = (e) => {
        e.preventDefault();
        setBestSellerIsDrag(true);
        setBestSellerStartX(e.pageX + bestSellerScrollRef.current.scrollLeft);
    }

    const onCollectionDragStart = (e) => {
        e.preventDefault();
        setCollectionIsDrag(true);
        setCollectionStartX(e.pageX + collectionScrollRef.current.scrollLeft);
    }

    const onCategoryDragEnd = () => {
        setCategoryIsDrag(false);
    }

    const onBestSellerDragEnd = () => {
        setBestSellerIsDrag(false);
    }

    const onCollectionDragEnd = () => {
        setCollectionIsDrag(false);
    }

    const onDragMove = (e) => {
        if (categoryIsDrag) {
            categoryScrollRef.current.scrollLeft = categoryStartX - e.pageX;
        }

        if (bestSellerIsDrag) {
            bestSellerScrollRef.current.scrollLeft = bestSellerStartX - e.pageX;
        }

        if (collectionIsDrag) {
            collectionScrollRef.current.scrollLeft = collectionStartX - e.pageX;
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
                onMouseDown={onCategoryDragStart}
                onMouseMove={categoryIsDrag ? onThrottleDragMove : null}
                onMouseUp={onCategoryDragEnd}
                onMouseLeave={onCategoryDragEnd}
                ref={categoryScrollRef}
            >
                {Array.isArray(testCategory) ?
                    testCategory.map((item, idx) => {
                        return (
                            <Category key={idx} img={item.img} title={item.name} />
                        )
                    }) : null}
            </div>
            <div className="main-bestSeller">
                <div className="bestSeller-header">
                    <div className="bestSeller-title">
                        <Image src={bottom} alt="bottom" />
                        <p>
                            <span>이번주</span> 가장 많이 팔렸어요
                        </p>
                    </div>
                    <p className="bestSeller-more">전체보기</p>
                </div>
                <div
                    className="bestSeller-item"
                    onMouseDown={onBestSellerDragStart}
                    onMouseMove={bestSellerIsDrag ? onThrottleDragMove : null}
                    onMouseUp={onBestSellerDragEnd}
                    onMouseLeave={onBestSellerDragEnd}
                    ref={bestSellerScrollRef}
                >
                    <ItemBox page="main" number={1} />
                    <ItemBox page="main" number={2} />
                    <ItemBox page="main" number={3} />
                </div>
            </div>
            <div className="main-collection">
                <div className="collection-header">
                    <p className="collection-title">베스트 추천 컬렉션</p>
                </div>
                <div
                    className="collection-item"
                    onMouseDown={onCollectionDragStart}
                    onMouseMove={collectionIsDrag ? onThrottleDragMove : null}
                    onMouseUp={onCollectionDragEnd}
                    onMouseLeave={onCollectionDragEnd}
                    ref={collectionScrollRef}
                >
                    {Array.isArray(testCollection) ?
                        testCollection.map((item, idx) => {
                            return (
                                <CollectionBox key={idx} img={item.img} text={item.text} />
                            )
                        }) : null}
                </div>
            </div>
            <div className="main-event">
                <div className="event_1">
                    <Image src={event_1} alt="" />
                    <p>
                        와인 입문자를 위한 <br/>
                        <span>추천 와인 컬렉션</span>
                    </p>
                </div>
                <div className="event_2">
                    <Image src={event_2} alt="" />
                    <p>
                        이거 뭐랑 먹으면 맛있어요? <br/>
                        <span>환상의 짝궁 특별전</span>
                    </p>
                </div>
            </div>
        </div>
    )
}