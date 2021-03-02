import React from 'react';
import headerLogo from '../images/logo.svg';


function Header(){

    function handleSignOut(){

    }
        return (
            <header className="header root__section">
                <img src={headerLogo} id='logo' alt="mesto logo" className="logo" />
                <button onSignOut={handleSignOut} className={'button button__signOut'}>Выйти</button>
            </header>
        );
    
}
export default Header;