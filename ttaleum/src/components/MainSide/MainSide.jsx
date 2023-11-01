import "./MainSide.scss";
import Image from "next/image";
import Logo from '../../../public/Logo.svg'

export default function MainSide(){
    return(
        <div className="mainSide-container">
            <Image src={Logo} alt="Logo" className="mainSide-logo" /> 
        </div>
    )
}