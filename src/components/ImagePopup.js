import React from 'react';
import closePic from '../images/close.svg';


class ImagePopup extends React.Component {
    constructor(props) {
        super(props);
        };
    render() {    
        return (

            <div id="popupPic" className="popup popup__pic">
                <div className="popup__content popup__content_pic">
                    <img id="popupPicOpen" className ="popup-pic__open" alt=""/>
                    <img src={closePic} alt="" id="popupClosePic" className="popup__close"/>
                </div>
            </div>
        );
    }
}
export default ImagePopup;