"use client"

import './Navigation.scss';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

import home from '../../../public/home.svg';
import search from '../../../public/search.svg';
import category from '../../../public/category.svg';
import community from '../../../public/community.svg';
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

    return (
        <div className="navigation">
            <Image onClick={() => { routerNavigation('/') }} src={onItem === '/' ? onHome : home} alt="home" />
            <Image onClick={() => { routerNavigation('/search') }} src={onItem === '/search' ? onSearch : search} alt="search" />
            <Image onClick={() => { routerNavigation('/category') }} src={onItem === '/category' ? onCategory : category} alt="category" />
            <Image onClick={() => { routerNavigation('/community') }} src={onItem === '/community' ? onCommunity : community} alt="community" />
            <Image onClick={() => { routerNavigation('/user') }} src={onItem === '/user' ? onUser : user} alt="user" />
        </div>
    )
}