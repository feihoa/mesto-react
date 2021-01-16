import React from 'react';
import closePic from '../images/close.svg';


class PopupWithForm extends React.Component {
    constructor(props) {
        super(props);

        };
    render() {    
  
        return (
        <div id="photoEdit" className={`popup popup_type_${this.props.name}`}>
            <div className="popup__content">
                <img src={closePic} alt="" className="popup__close"/>
                <h3 className={`popup__title popup popup__title_${this.props.name}`}>${this.props.name}</h3>
                <form id={`popupForm${this.props.form}`} className="popup__form" name="form" noValidate>
                    ${this.props.children}  
                <button id={`popupButton${this.props.form}`} type="submit" className="button popup__button">Сохранить</button>
                </form>
            </div>
        </div>
        );
    }
}
export default PopupWithForm;