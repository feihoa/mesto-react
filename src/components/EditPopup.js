import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext';


function EditPopup(props){

const currentUser = React.useContext(CurrentUserContext);

    const [name, setName] = React.useState('');
    const [nameValue, setNameValue] = React.useState('');
    const [nameError, setNameError] = React.useState('');
    const [description, setDescription] = React.useState('');
    const [descriptionValue, setDescriptionValue] = React.useState('');
    const [descriptionError, setDescriptionError] = React.useState('');

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    const handleChangeName = (e) => {
        setNameValue(e.target.value);
        setName(e.target.value);
        setNameError(handleError(e));
    }
    const handleChangeDescription = (e) => {
        setDescriptionValue(e.target.value);
        setDescription(e.target.value);
        setDescriptionError(handleError(e));
    }

    const handleError = (e) => {
     
        if (e.target.value.length === 0) {
            return 'Это обязательное поле';
        }
        else if (e.target.value.length === 1) {
            return 'Должно быть от 2 до 30 символов';
        } else {
            return '';
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!nameError && !descriptionError && nameValue && descriptionValue){
        // Передаём значения управляемых компонентов во внешний обработчик
            props.onUpdateUser({
            name,
            about: description,
            });
            setNameValue('');
            setDescriptionValue('');
        }
    }

    return (
                
        <PopupWithForm onSubmit={handleSubmit} isOpen={props.isOpen} onClose={props.onClose} name="editPopup" submitBtnTitle="Сохранить" title="Редактировать профиль" buttonText={props.buttonText} buttonDisabled={!(!nameError && !descriptionError && nameValue && descriptionValue)} children={
            <>
                <input id="inputUserNameEdit" type="text" minLength="2" maxLength="30" value={nameValue} onChange={handleChangeName} required name="userName" className="popup__input popup__input_type_userName" placeholder="Имя"/>
                <span id="error-inputUserNameEdit" className="error">{nameError}</span>
                
                <input id="inputUserInfoEdit" type="text" name="userInfo" minLength="2" value={descriptionValue} onChange={handleChangeDescription} required className="popup__input popup__input_type_userInfo"  placeholder="О себе"/>
                <span  id="error-inputUserInfoEdit" className="error">{descriptionError}</span>
            </>  
        }/>
    );

}
export default EditPopup;


