import './productsDetail.scss';

import Header from '@/components/Header/Header';
import Image from 'next/image';
import detail from '../../../../public/detail.svg';


export default function ProductsDetail({ params }) {

    return (
        <div className="main">
            <div className="main-container">
                <Header title="상세보기" />
                <Image className='detail' src={detail} alt='detail' />
                <div className='detail-container'>
                    <p className='detail-title'>
                        <span>Christmas Rose</span> <br/>
                        모젤 크리스마스, 로제
                    </p>
                    <p className='detail-text'>
                        영롱한 핑크빛 색감, 산뜻한 과일 아로마와 가벼운 바디감으로 연인이나 가족들과 함께 즐기기 좋은 와인입니다.
                    </p>
                </div>
            </div>
        </div>
    )
}