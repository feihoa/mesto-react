import React from 'react';
import PopupWithForm from './PopupWithForm';


function EditPopup(props){

        return (
                
        <PopupWithForm isOpen={props.isOpen} onClose={props.onClose} name="editPopup" submitBtnTitle="Сохранить" title="Редактировать профиль" children={
               <>
                <input id="inputUserNameEdit" type="text" minLength="2" maxLength="30"  required name="userName" className="popup__input popup__input_type_userName" placeholder="Имя"/>
                <span id="error-inputUserNameEdit" className="error"/>
                
                <input id="inputUserInfoEdit" type="text" name="userInfo" minLength="2" maxLength="30" required className="popup__input popup__input_type_userInfo"  placeholder="О себе"/>
                <span  id="error-inputUserInfoEdit" className="error"/>
            </>  
        }/>
    );

}
export default EditPopup;

