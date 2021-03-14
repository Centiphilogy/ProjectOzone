import React from 'react'

import Button from './Button'

import '../styles/Menu.css'

const Menu = (props) => {
    return(
        <div className='buttonsWrap'>
            <Button action='login' classType='loginButton' value='Logowanie' isActive={props.activeData.loginActive} changeActive={props.activeData.loginActiveChange} />
            <Button action='register' classType='registerButton' value='Rejestracja' isActive={props.activeData.registerActive} changeActive={props.activeData.registerActiveChange} />
        </div>
    )
}

export default Menu;