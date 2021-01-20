import React from 'react';
import PopupWithForm from './PopupWithForm';


class EditPhotoPopup extends React.Component {
    constructor(props) {
        super(props);
        };


    render(){
        return (
                
        <PopupWithForm isOpen={this.props.isOpen} name="EditPhotoPopup" title="Обновить аватар" children={
            <>             
            <input id="inputLinkPhoto" type="url" name="link" required minLength="2" className="popup__input popup__input_type_link-url_photo" placeholder="Ссылка на аватар"/>
            <span id="error-inputLinkPhoto" className="error"/>      
            </>  
        }/>
    );
}
}
export default EditPhotoPopup;


