import React from 'react';
import headerLogo from '../images/logo.svg';




function Header(props){

    const handleSubmit = (e) => {
        e.preventDefault();
        props.onLogOut()
        
    }
        return (
            <header className="header root__section">
                <img src={headerLogo} id='logo' alt="mesto logo" className="logo" />
               {props.isLoggedIn && <button className={'button button__signOut'} type='submit' onClick={handleSubmit} >Выйти</button>}
            </header> 
        );
    
}
export default Header;