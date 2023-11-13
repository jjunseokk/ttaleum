"use client"

import './Navigation.scss';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import home from '../../../public/home.svg';
import search from '../../../public/search.svg';
import category from '../../../public/category.svg';
import heart from '../../../public/heart.svg';
import onHeart from '../../../public/onHeart.svg';
import onUser from '../../../public/onUser.svg';
import onHome from '../../../public/onHome.svg';
import onSearch from '../../../public/onSearch.svg';
import onCategory from '../../../public/onCategory.svg';
import onCommunity from '../../../public/onCommunity.svg';
import user from '../../../public/user.svg';

export default function Navigation() {

    const router = useRouter();
    const [onItem, setOnItem] = useState(false);

    const routerNavigation = (e) => {
        router.push(e);
        setOnItem(e);
    }
    console.log(onItem);

    return (
        <div className="navigation">
            <div>
                <Image onClick={() => { routerNavigation('/') }} src={onItem === '/' ? onHome : home} alt="home" />
                <p className={onItem === '/' ? 'active' : ''}>홈</p>
            </div>
            <div>
                <Image onClick={() => { routerNavigation('/search') }} src={onItem === '/search' ? onSearch : search} alt="search" />
                <p className={onItem === '/search' ? 'active' : ''}>검색</p>
            </div>
            <div>
                <Image onClick={() => { routerNavigation('/category') }} src={onItem === '/category' ? onCategory : category} alt="category" />
                <p className={onItem === '/category' ? 'active' : ''}>카테고리</p>
            </div>
            <div>
                <Image onClick={() => { routerNavigation('/heart') }} src={onItem === '/heart' ? onHeart : heart} alt="community" />
                <p className={onItem === '/heart' ? 'active' : ''}>찜한상품</p>
            </div>
            <div>
                <Image onClick={() => { routerNavigation('/user') }} src={onItem === '/user' ? onUser : user} alt="user" />
                <p className={onItem === '/user' ? 'active' : ''}>마이페이지</p>
            </div>
        </div>
    )
}