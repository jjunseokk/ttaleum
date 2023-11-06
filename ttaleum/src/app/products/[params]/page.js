'use client'

import "./products.scss"
import Header from "@/components/Header/Header";
import ItemBox from "@/components/Item/ItemBox";

export default function Products({params}) {

    return (
        <div className="main">
            <div className="main-container">
                <Header title={params.params} />
                <div className="products-container">
                    <ItemBox page="products" params={params.params}/>
                    <ItemBox page="products" params={params.params}/>
                    <ItemBox page="products" params={params.params}/>
                </div>
            </div>
        </div>
    )
}