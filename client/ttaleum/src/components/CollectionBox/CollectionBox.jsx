import Image from "next/image";
import "./CollectionBox.scss";

export default function CollectionBox({ img, text }) {
    return (
        <div className="collection-box">
            <Image src={img} alt="collection_1" />
            <p>{text}</p>
        </div>
    )
}