import React from 'react';
import PopupWithForm from './PopupWithForm';


class AddCardPopup extends React.Component {
    constructor(props) {
        super(props);
        };


    render(){
        return (
                
        <PopupWithForm isOpen={this.props.isOpen} name="addCardPopup" title="Новое место" children={
            <>
                <input id="inputName" type="text" name="name" required minLength="2" maxLength="30" className="popup__input popup__input_type_name" placeholder="Название"/>
                <span id='error-inputName' className="error"/>

                <input id="inputLink" type="url" name="link" required minLength="2" className="popup__input popup__input_type_link-url" placeholder="Ссылка на картинку"/>
                <span id="error-inputLink" className="error"/>
            </>  
        }/>
    );
}
}
export default AddCardPopup;

