import React from 'react';
import PopupWithForm from './PopupWithForm';


function AddCardPopup (props) {

    const [cardName, setCardName] = React.useState('');
    const [cardLink, setCardLink] = React.useState('');

    const handleChangeCardName = (e) => {
        setCardName(e.target.value)
    }
    const handleChangeCardLink = (e) => {
        setCardLink(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        props.onAddCard({
            cardName,
            cardLink,
        });

    }

        return (
                
        <PopupWithForm onSubmit={handleSubmit} isOpen={props.isOpen} onClose={props.onClose} name="addCardPopup" submitBtnTitle="+" title="Новое место" buttonText={props.buttonText} children={
            <>
                <input id="inputName" type="text" name="name" required minLength="2" maxLength="30" onChange={handleChangeCardName} className="popup__input popup__input_type_name" placeholder="Название"/>
                <span id='error-inputName' className="error"/>

                <input id="inputLink" type="url" name="link" required minLength="2" onChange={handleChangeCardLink} className="popup__input popup__input_type_link-url" placeholder="Ссылка на картинку"/>
                <span id="error-inputLink" className="error"/>
            </>  
        }/>
    );
}
export default AddCardPopup;

