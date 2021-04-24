import React from 'react';
import closePic from '../images/close.svg';


function ImagePopup(props) {
  
        return (

            <div id="popupPic" className={`popup popup__pic ${props.card !== false ? 'popup_is-opened' : ''}`}>
                <div className="popup__content popup__content_pic">
                    <img id="popupPicOpen" src={props.card.link} className ="popup-pic__open" alt=""/>
                    <img src={closePic} onMouseUp={props.onClose} alt="" id="popupClosePic" className="popup__close"/>
                </div>
            </div>
        );
    
}
export default ImagePopup;