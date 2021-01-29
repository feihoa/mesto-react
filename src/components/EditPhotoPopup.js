import React from 'react';
import PopupWithForm from './PopupWithForm';


function EditPhotoPopup (props) {

        return (
                
        <PopupWithForm isOpen={props.isOpen} onClose={props.onClose} name="EditPhotoPopup" submitBtnTitle="Сохранить" title="Обновить аватар" children={
            <>             
            <input id="inputLinkPhoto" type="url" name="link" required minLength="2" className="popup__input popup__input_type_link-url_photo" placeholder="Ссылка на аватар"/>
            <span id="error-inputLinkPhoto" className="error"/>      
            </>  
        }/>
    );

}
export default EditPhotoPopup;


