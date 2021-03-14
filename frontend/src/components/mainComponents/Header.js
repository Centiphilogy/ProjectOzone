import React from 'react'
import { NavLink } from 'react-router-dom'

import Menu from '../Menu'

import '../../styles/Header.css'

const Header = (props) => {
    return(
        <header>
            <div className='logo'>
                <NavLink to='/'><p>LOGO</p></NavLink>
            </div>
            <div className='menuWrap'>
                <Menu activeData={props}/>
            </div>
        </header>
    )
}

export default Header;