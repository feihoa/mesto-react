import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';


function EditPhotoPopup (props) {

    const currentUser = React.useContext(CurrentUserContext);

    const [avatar, setAvatar] = React.useState('');
    const [value, setValue] = React.useState('');

    const avatarRef = React.useRef();

    React.useEffect(() => {
        setAvatar(currentUser.avatar);
    }, [currentUser]);

    const handleChange = (e) => {
        setValue(e.target.value);
        setAvatar(e.target.value)

    }

    const handleSubmit = (e) => {
        e.preventDefault();
      
        props.onUpdateAvatar({
          avatar: avatarRef.current.value,
        });
      setValue('');
    }
        return (
                
        <PopupWithForm onSubmit={handleSubmit} isOpen={props.isOpen} onClose={props.onClose} name="EditPhotoPopup" submitBtnTitle="Сохранить" title="Обновить аватар"  buttonText={props.buttonText} children={
            <>             
            <input value={value} ref={avatarRef} onChange={handleChange} avatar={avatar} id="inputLinkPhoto" type="url" name="link" required minLength="2" className="popup__input popup__input_type_link-url_photo" placeholder="Ссылка на аватар"/>
            <span id="error-inputLinkPhoto" className="error"/>      
            </>  
        }/>
    );

}
export default EditPhotoPopup;


