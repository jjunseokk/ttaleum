'use client'

import './Header.scss';

import Image from "next/image";
import { useRouter } from 'next/navigation';

import Logo from "../../../public/Logo.svg";
import search from '../../../public/search.svg';
import heart from '../../../public/heart.svg';
import cart from '../../../public/cart.svg';
import back from '../../../public/backBtn.svg';

export default function Header({ title }) {
    const router = useRouter();
    var titleName; // titleName 변수를 선언합니다.

    switch (title) {
        case "1":
            titleName = "전체보기";
            break; // 각 case 끝에 break를 추가합니다.
        case "2":
            titleName = "레드 와인";
            break;
        case "3":
            titleName = "화이트 와인";
            break;
        case "4":
            titleName = "로제 와인";
            break;
        case "5":
            titleName = "스파클링 와인";
            break;
        case "6":
            titleName = "디저트 와인";
            break;
        case "7":
            titleName = "논알코올";
            break;
        case "8":
            titleName = "안주";
            break;
        case "상세보기":
            titleName = "상세보기"
            break;
        default:
            titleName = "기본값"; // 필요에 따라 기본값을 처리할 수 있습니다.
    }

    return (
        <>
            {title ? titleName === "상세보기" ? (
                <div className="header-container">
                    <Image onClick={() => { window.history.back() }} src={back} alt='back' />
                    <p>{titleName}</p>
                    <div className="header-menu">
                        <Image src={heart} alt='heart' />
                        <Image src={cart} alt='cart' />
                    </div>
                </div>
            ) : (
                <div className="header-container">
                    <p>{titleName}</p>
                    <div className="header-menu">
                        <Image src={heart} alt='heart' />
                        <Image src={cart} alt='cart' />
                        <Image onClick={() => { window.history.back() }} src={back} alt='back' />
                    </div>
                </div>
            ) : (
                <div className="header-container">
                    <Image onClick={() => { router.push('/') }} src={Logo} alt="Logo" />
                    <div className="header-menu">
                        <Image onClick={() => { router.push('/search') }} src={search} alt='search' />
                        <Image onClick={() => { router.push('/') }} src={heart} alt='heart' />
                        <Image onClick={() => { router.push('/') }} src={cart} alt='cart' />
                    </div>
                </div>
            )}
        </>

    )
}