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

    return (
        <>
            {title ? (
                <div className="header-container">
                    <p>{title}</p>
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