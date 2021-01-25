import React from 'react';
import closePic from '../images/close.svg';


class ImagePopup extends React.Component {
    constructor(props) {
        super(props);
        };
    render() {    
        return (

            <div id="popupPic" className={`popup popup__pic ${this.props.card !== false ? 'popup_is-opened' : ''}`}>
                <div className="popup__content popup__content_pic">
                    <img id="popupPicOpen" src={this.props.card.link} className ="popup-pic__open" alt=""/>
                    <img src={closePic} onMouseUp={this.props.onClose} alt="" id="popupClosePic" className="popup__close"/>
                </div>
            </div>
        );
    }
}
export default ImagePopup;