import Image from "next/image"
import "./Category.scss"

export default function Category({title}){
    return(
        <div className="category-container">
            <div className="category-box">
                <Image src={title} alt={title} />
            </div>
        </div>
    )
}