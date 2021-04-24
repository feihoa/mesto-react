import React from 'react';
import PopupWithForm from './PopupWithForm';


function AddCardPopup (props) {

    const [cardName, setCardName] = React.useState('');
    const [cardNameValue, setСardNameValue] = React.useState('');
    const [cardNameError, setСardNameError] = React.useState('');
    const [cardLink, setCardLink] = React.useState('');
    const [cardLinkValue, setСardLinkValue] = React.useState('');
    const [cardLinkError, setСardLinkError] = React.useState('');

    const handleChangeCardName = (e) => {
        setСardNameValue(e.target.value);
        setCardName(e.target.value);
        setСardNameError(handleErrorCardName(e));
    }
    const handleChangeCardLink = (e) => {
        setСardLinkValue(e.target.value);
        setCardLink(e.target.value);
        setСardLinkError(handleErrorCardLink(e));
    }
    const handleErrorCardName = (e) => {
     
        if (e.target.value.length === 0) {
            return 'Это обязательное поле';
        }
        else if (e.target.value.length === 1 || e.target.value.length >= 30 ) {
            return 'Должно быть от 2 до 30 символов';
        } else {
            return '';
        }
    };
    const handleErrorCardLink = (e) => {
     
        if (e.target.value.length === 0) {
            return 'Это обязательное поле';
        }
        else if (!/^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/.test(e.target.value)) {
            return'Здесь должна быть ссылка';
        } else {
            return '';
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!cardNameError && !cardLinkError && cardNameValue && cardLinkValue){

            props.onAddCard({
                cardName,
                cardLink,
            });
            setСardNameValue('');
            setСardLinkValue('');
        }
    }

        return (
                
        <PopupWithForm onSubmit={handleSubmit} isOpen={props.isOpen} onClose={props.onClose} name="addCardPopup" submitBtnTitle="+" title="Новое место" buttonText={props.buttonText} buttonDisabled={!(!cardNameError && !cardLinkError && cardNameValue && cardLinkValue)} children={
            <>
                <input id="inputName" type="text" name="name" required minLength="2" maxLength="30" onChange={handleChangeCardName} className="popup__input popup__input_type_name" placeholder="Название"/>
                <span id='error-inputName' className="error">{cardNameError}</span>

                <input id="inputLink" type="url" name="link" required minLength="2" onChange={handleChangeCardLink} className="popup__input popup__input_type_link-url" placeholder="Ссылка на картинку"/>
                <span id="error-inputLink" className="error">{cardLinkError}</span>
            </>  
        }/>
    );
}
export default AddCardPopup;

