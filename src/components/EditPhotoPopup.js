import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';


function EditPhotoPopup (props) {

    const currentUser = React.useContext(CurrentUserContext);

    const [avatar, setAvatar] = React.useState('');
    const avatarRef = React.useRef();

    const handleChange = (e) => {
        setAvatar(e.target.value)
    }

    React.useEffect(() => {
        setAvatar(currentUser.avatar);
    }, [currentUser]);

    const handleSubmit = (e) => {
        e.preventDefault();
      
        props.onUpdateAvatar({
          avatar: avatarRef.current.value,
        });
    }
        return (
                
        <PopupWithForm onSubmit={handleSubmit} isOpen={props.isOpen} onClose={props.onClose} name="EditPhotoPopup" submitBtnTitle="Сохранить" title="Обновить аватар" children={
            <>             
            <input ref={avatarRef} onChange={handleChange} avatar={avatar} id="inputLinkPhoto" type="url" name="link" required minLength="2" className="popup__input popup__input_type_link-url_photo" placeholder="Ссылка на аватар"/>
            <span id="error-inputLinkPhoto" className="error"/>      
            </>  
        }/>
    );

}
export default EditPhotoPopup;


