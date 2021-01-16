import React from 'react';
// import headerLogo from '../images/calorieZen.png';
// import './Header.css';
import headerLogo from '../images/logo.svg';


class Header extends React.Component {
    constructor(props) {
        super(props);
        };
    render() {    
        return (
            <header className="header root__section">
                <img src={headerLogo} id='logo' alt="mesto logo" className="logo" />
            </header>
        );
    }
}
export default Header;