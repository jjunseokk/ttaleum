import Header from "@/components/Header/Header"
import "./main.scss"
import Image from "next/image";
import bannerCh from "../../../public/bannerCh.svg"

export default function Main() {
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
                        레드와인부터 논 알코올까지 <br/>
                        한눈에 쉽게 찾아보세요!
                    </p>
                </div>
                <Image className="banner-character" src={bannerCh} alt="bannerCh" />
            </div>
        </div>
    )
}