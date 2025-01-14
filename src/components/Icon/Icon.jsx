import { RxCross2 } from "react-icons/rx";
import {FaRegCircle} from "react-icons/fa";
import { FaPen } from "react-icons/fa6";

function Icon({name}){
    if(name=="circle"){
        return <FaRegCircle/>;
    }else if(name=="cross"){
        return <RxCross2 />;
    }else{
        return <FaPen/>;
    }
}

export default Icon;