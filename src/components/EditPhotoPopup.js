import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';


function EditPhotoPopup (props) {

    const currentUser = React.useContext(CurrentUserContext);

    const [avatar, setAvatar] = React.useState('');
    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState('');

    const avatarRef = React.useRef();

    React.useEffect(() => {
        setAvatar(currentUser.avatar);
    }, [currentUser]);

    const handleChange = (e) => {        

        setValue(e.target.value);
        setAvatar(e.target.value)
        setError(handleError(e));

    }
    const handleError = (e) => {
    
        if (e.target.value.length === 0) {
            return 'Это обязательное поле';
        }
        else if (!/^((ftp|http|https):\/\/)?(www\.)?([A-Za-zА-Яа-я0-9]{1}[A-Za-zА-Яа-я0-9\-]*\.?)*\.{1}[A-Za-zА-Яа-я0-9-]{2,8}(\/([\w#!:.?+=&%@!\-\/])*)?/.test(e.target.value)) {
            return 'Здесь должна быть ссылка';
        } else {
            return '';
        }
      }

    const handleSubmit = (e) => {
        e.preventDefault();
      if(!error && value){
        props.onUpdateAvatar({
          avatar: avatarRef.current.value,
        });
      setValue('');

        }
    }
        return (
                
        <PopupWithForm onSubmit={handleSubmit} isOpen={props.isOpen} onClose={props.onClose} name="EditPhotoPopup" submitBtnTitle="Сохранить" title="Обновить аватар"  buttonText={props.buttonText} buttonDisabled={!(!error && value)} children={
            <>             
            <input value={value} ref={avatarRef} onChange={handleChange} avatar={avatar} id="inputLinkPhoto" type="url" name="link" required minLength="2" className="popup__input popup__input_type_link-url_photo" placeholder="Ссылка на аватар"/>
            <span  id="error-inputLinkPhoto" className="error">{error}</span>      
            </>  
        }/>
    );

}
export default EditPhotoPopup;


