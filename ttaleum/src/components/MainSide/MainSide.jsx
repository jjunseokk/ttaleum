import "./MainSide.scss";
import Image from "next/image";
import Logo2 from '../../../public/Logo2.svg';
import mascot from '../../../public/sideMascot.svg';

export default function MainSide(){
    return(
        <div className="mainSide-container">
            <Image src={Logo2} alt="Logo" className="mainSide-logo" /> 
            <p>
                와인 어디서 사지? 고민될 땐 <br/>
                <span>와인 커머스 '따름'</span>
            </p>
            <Image className="mainSide-mascot" src={mascot} alt="mascot"/>
        </div>
    )
}