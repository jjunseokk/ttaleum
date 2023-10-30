import './Header.scss';

import Image from "next/image";
import Logo from "../../../public/Logo.svg";
import search from '../../../public/search.svg';
import heart from '../../../public/heart.svg';
import cart from '../../../public/cart.svg';

export default function Header() {
    return (
        <div className="header-container">
            <Image src={Logo} alt="Logo" />
            <div className="header-menu">
                <Image src={search} />
                <Image src={heart} />
                <Image src={cart} />
            </div>
        </div>
    )
}