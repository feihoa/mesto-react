import React from 'react';
import closePic from '../images/close.svg';


function  PopupWithForm(props) {
   
  
        return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_is-opened' : ''} ` }>
            <div className="popup__content">
                <img src={closePic} alt="close" className="popup__close" onMouseUp={props.onClose}/>
                <h3 className={`popup__title popup__title_${props.name}`}>{props.title}</h3>
                <form id={`popupForm${props.name}`} className="popup__form" name="form" noValidate>
                    {props.children}  
                <button id={`popupButton${props.name}`} type="submit" className="button popup__button">{props.submitBtnTitle}</button>
                </form>
            </div>
        </div>
        );
    
}
export default PopupWithForm;