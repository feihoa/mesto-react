import React from 'react';
import closePic from '../images/close.svg';


function  PopupWithForm(props) {
   
  
        return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_is-opened' : ''} ` }>
            <div className="popup__content">
                <img src={closePic} alt="close" className="popup__close" onMouseUp={props.onClose}/>
                <h3 className={`popup__title popup__title_${props.name}`}>{props.title}</h3>
                <form id={`popupForm${props.name}`} className="popup__form" name="form" noValidate onSubmit={props.onSubmit}>
                    {props.children}  
                <button id={`popupButton${props.name}`} disabled={props.buttonDisabled} type="submit" className="button popup__button">{props.buttonText === '' ? props.submitBtnTitle : props.buttonText}</button>
                </form>
            </div>
        </div>
        );
    
}
export default PopupWithForm;