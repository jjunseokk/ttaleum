'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import "./Category.scss";

export default function Category({ img, title, id }) {
    const router = useRouter();
    return (
        <div className="category-area" onClick={() => { router.push(`/products/${id}`) }}>
            <div className="category-box">
                <Image src={img} alt={img} />
            </div>
            <p>{title}</p>
        </div>
    )
}