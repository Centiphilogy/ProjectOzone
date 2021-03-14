import React from 'react'
import { NavLink } from "react-router-dom";

import '../styles/Button.css'

const Button = ({classType, value, action, isActive, changeActive}) => {
    let menuButtonClasses = 'menuButton ' + classType;
    let navTo = '/' + action;

    const changeStateAndOpenAction = () => {
        changeActive(isActive = !isActive);
    };

    return(
        <NavLink to={navTo}><button className={menuButtonClasses} onClick={changeStateAndOpenAction}>{value}</button></NavLink>
    )
}

export default Button;