import React from 'react';
import closePic from '../images/close.svg';



class Main extends React.Component {
    constructor(props) {
        super(props);
        };
    

handleAddPlaceClick = () => {
    document.querySelector('#formCard').classList.add('popup_is-opened');

    // this.setState({ clicked: true });
};

handleEditProfileClick = () => {
    document.querySelector('#formEdit').classList.add('popup_is-opened');

// this.setState({ clicked: true });
}; 

handleEditAvatarClick = () => {
    document.querySelector('#photoEdit').classList.add('popup_is-opened');

    // this.setState({ clicked: true }); 
};
render() {
return (
    <>    
     
    <div id='profileRoot' className="profile root__section">
        <div className="user-info">
            <div id = "userInfoPic" className="user-info__photo" onClick={this.handleEditAvatarClick}></div>
            <div id="userInfoData" className="user-info__data">
            <h1 id = "userInfoName" className="user-info__name">Имя</h1>
            <p id = "userInfoJob" className="user-info__job">Профессия</p>
            <button id="userInfoEditButton" className="button user-info-edit__button" onClick={this.handleEditProfileClick}>Edit</button>
            </div>
            <button id="userInfoButton" className="button user-info__button" onClick={this.handleAddPlaceClick}>+</button>
        </div>
    </div> 
    <div id="placesList" className="places-list root__section"/>

{/* handleAddPlaceClick */}
    <div className="popup" id="formCard">
        <div className="popup__content">
        <img src={closePic} alt="" id="popupCloseCard" className="popup__close"/>
            <h3 className="popup__title">Новое место</h3>
            <form className="popup__form" name="new" noValidate>

                <input id="inputName" type="text" name="name" required minLength="2" maxLength="30" className="popup__input popup__input_type_name" placeholder="Название"/>
                <span id='error-inputName' className="error"/>

                <input id="inputLink" type="url" name="link" required minLength="2" className="popup__input popup__input_type_link-url" placeholder="Ссылка на картинку"/>
                <span id="error-inputLink" className="error"/>

                <button id="popupSubmit" type="submit" className="button popup__button" >+</button>
            </form>
        </div>
    </div>

{/* handleEditProfileClick */}


        <div id="formEdit" className="popup popup__edit" >
            <div className="popup__content popup__content_edit">
                <img src={closePic} alt="" id="closeEdit" className="popup__close"/>
                <h3 className="popup__title popup__title_edit">Редактировать профиль</h3>
                <form id = "popupFormEdit" className="popup__form popup__form_edit" name="edit" noValidate>
                    
                    <input id="inputUserNameEdit" type="text" minLength="2" maxLength="30"  required name="userName" className="popup__input popup__input_type_userName" placeholder="Имя"/>
                    <span id="error-inputUserNameEdit" className="error"/>
                    
                    <input id="inputUserInfoEdit" type="text" name="userInfo" minLength="2" maxLength="30" required className="popup__input popup__input_type_userInfo"  placeholder="О себе"/>
                    <span  id="error-inputUserInfoEdit" className="error"/>
                    
                    <button id="submitEdit" type="submit" className="button popup__button popup__button_edit">Сохранить</button>
                </form>
            </div>
        </div>



        <div id="popupPic" className="popup popup__pic">
        <div className="popup__content popup__content_pic">
            <img id="popupPicOpen" className ="popup-pic__open" alt=""/>
            <img src="" alt="" id="popupClosePic" className="popup__close"/>
        </div>
        </div>



{/* handleEditAvatarClick */}


        <div id="photoEdit" className="popup popup__editPhoto" >
        <div className="popup__content popup__content_editPhoto">
            <img src={closePic} alt="" id="closeEditPhoto" className="popup__close"/>
            <h3 className="popup__title popup__title_editPhoto">Обновить аватар</h3>
            <form id = "popupFormEditPhoto" className="popup__form popup__form_editPhoto" name="editPhoto" noValidate>
                
            <input id="inputLinkPhoto" type="url" name="link" required minLength="2" className="popup__input popup__input_type_link-url_photo" placeholder="Ссылка на аватар"/>
            <span id="error-inputLinkPhoto" className="error"/>
                
            <button id="submitEditPhoto" type="submit" className="button popup__button popup__button_editPhoto">Сохранить</button>
            </form>
        </div>
    </div>
</>
    );
}
}
export default Main;