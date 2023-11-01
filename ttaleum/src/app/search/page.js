import './search.scss'

import Header from "@/components/Header/Header";
import Navigation from "@/components/Navigation/Navigation";
import Image from 'next/image';

import search from '../../../public/search.svg'

export default function Search() {
    return (
        <div className="main">
            <div className="main-container">
                <Header title="검색" />
                <div className='search-container'>
                    <div className="search-searchBar">
                        <input placeholder='검색어를 입력해주세요.' />
                        <Image src={search} alt='search' />
                    </div>
                    <div className='search-recent'>
                        <p className='search-recent-title'>
                            최근 검색어
                        </p>
                        <div className='search-recent-item'>
                            <p>최근 검색어가 없습니다.</p>
                        </div>
                    </div>
                    <div className='search-popular'>
                        <p className='search-popular-title'>
                            인기 검색어
                        </p>
                        <div className='search-popular-item'>
                            <p className='number'>1</p>
                            <p className='text'>칸티나 자카니니</p>
                        </div>
                        <div className='search-popular-item'>
                            <p className='number'>2</p>
                            <p className='text'>토토 피에몬테 로쏘</p>
                        </div>
                    </div>
                </div>
                <Navigation />
            </div>
        </div>
    )
}