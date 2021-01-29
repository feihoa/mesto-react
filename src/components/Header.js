import React from 'react';
import headerLogo from '../images/logo.svg';


function Header(){
        return (
            <header className="header root__section">
                <img src={headerLogo} id='logo' alt="mesto logo" className="logo" />
            </header>
        );
    
}
export default Header;