import './Navigation.scss';

import Image from 'next/image';
import home from '../../../public/home.svg'
import search from '../../../public/search.svg'
import category from '../../../public/category.svg'
import community from '../../../public/community.svg'
import user from '../../../public/user.svg'

export default function Navigation() {
    return (
        <div className="navigation">
            <Image src={home} alt="home" />
            <Image src={search} alt="search" />
            <Image src={category} alt="category" />
            <Image src={community} alt="community" />
            <Image src={user} alt="user" />
        </div>
    )
}