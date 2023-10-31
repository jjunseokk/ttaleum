import Image from "next/image"
import "./Category.scss"

export default function Category({ img, title }) {
    return (
        <div className="category-container">
            <div className="category-box">
                <Image src={img} alt={img} />
            </div>
            <p>{title}</p>
        </div>
    )
}