import React from 'react';
import closePic from '../images/close.svg';


class PopupWithForm extends React.Component {
    constructor(props) {
        super(props);
        };
    render() {    
  
        return (
        <div className={`popup popup_type_${this.props.name} ${this.props.isOpen ? 'popup_is-opened' : ''} ` }>
            <div className="popup__content">
                <img src={closePic} alt="close" className="popup__close" onMouseUp={this.props.onClose}/>
                <h3 className={`popup__title popup__title_${this.props.name}`}>{this.props.title}</h3>
                <form id={`popupForm${this.props.name}`} className="popup__form" name="form" noValidate>
                    {this.props.children}  
                <button id={`popupButton${this.props.name}`} type="submit" className="button popup__button">{this.props.submitBtnTitle}</button>
                </form>
            </div>
        </div>
        );
    }
}
export default PopupWithForm;