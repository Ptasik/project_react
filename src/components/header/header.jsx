import React from 'react';
import './header.css';
import logo_img from '../.././logo_img.png';


const Header = () => {
    return <header className='header'>
        <img src={logo_img} alt=""/>
    </header>;
}

export default Header;