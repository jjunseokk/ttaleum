'use client'

import './Header.scss';

import Image from "next/image";
import Link from 'next/link';
import Logo from "../../../public/Logo.svg";
import search from '../../../public/search.svg';
import heart from '../../../public/heart.svg';
import cart from '../../../public/cart.svg';
import back from '../../../public/backBtn.svg'

export default function Header({ title }) {
    return (
        <>
            {title ? (
                <div className="header-container">
                    <p>{title}</p>
                    <div className="header-menu">
                        <Image src={heart} alt='heart' />
                        <Image src={cart} alt='cart' />
                        <Image onClick={()=>{window.history.back()}} src={back} alt='back' />
                    </div>
                </div>
            ) : (
                <div className="header-container">
                    <Link href={'/'}>
                        <Image src={Logo} alt="Logo" />
                    </Link>
                    <div className="header-menu">
                        <Link href={'/search'}>
                            <Image src={search} alt='search' />
                        </Link>
                        <Image src={heart} alt='heart' />
                        <Image src={cart} alt='cart' />
                    </div>
                </div>
            )}
        </>

    )
}