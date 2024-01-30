import React from "react";
import {useNavigate} from 'react-router-dom';
const NavButton = ({text, style, dest}) => {

    const navigate = useNavigate();

    const handleButtonClick = () =>{
        navigate(dest)
    }

    return (
        <button className={style} onClick={handleButtonClick}>
            {text}
        </button>
    )
}

export default NavButton;