import React from 'react';


class Footer extends React.Component {
    constructor(props) {
        super(props);
    };
    render(){
        return (
            <footer className="footer root__section">
                <p className="footer__copyright">© 2020 Mesto Russia</p>
            </footer>
        );
    }
}

export default Footer;