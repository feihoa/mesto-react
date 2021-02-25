import React, { useState } from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function EditPopup(props){

const currentUser = React.useContext(CurrentUserContext);

    const [name, setName] = React.useState('');
    const [description, setDescription] = React.useState('');


    const handleChangeName = (e) => {
        setName(e.target.value)
    }
    const handleChangeDescription = (e) => {
        setDescription(e.target.value)
    }

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
        // Передаём значения управляемых компонентов во внешний обработчик
        props.onUpdateUser({
          name,
          about: description,
        });
    }

    return (
                
        <PopupWithForm onSubmit={handleSubmit} isOpen={props.isOpen} onClose={props.onClose} name="editPopup" submitBtnTitle="Сохранить" title="Редактировать профиль" buttonText={props.buttonText} children={
            <>
                <input id="inputUserNameEdit" type="text" minLength="2" maxLength="30" onChange={handleChangeName} required name="userName" className="popup__input popup__input_type_userName" placeholder="Имя"/>
                <span id="error-inputUserNameEdit" className="error"/>
                
                <input id="inputUserInfoEdit" type="text" name="userInfo" minLength="2" maxLength="30" onChange={handleChangeDescription} required className="popup__input popup__input_type_userInfo"  placeholder="О себе"/>
                <span  id="error-inputUserInfoEdit" className="error"/>
            </>  
        }/>
    );

}
export default EditPopup;


