import React from 'react';
import Card from './Card';
import apiParams from './apiParams';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Main(props){
    const api = apiParams.api;
    const currentUser = React.useContext(CurrentUserContext);
    
    
return (
    <>    
        <div id='profileRoot' className="profile root__section">
            <div className="user-info">
                <div id = "userInfoPic" className="user-info__photo" style={{ backgroundImage: 'url(' + currentUser.avatar + ')', cursor: "pointer"}}  onMouseUp={props.onEditAvatar}></div>
                <div id="userInfoData" className="user-info__data">
                <h1 id = "userInfoName" className="user-info__name">{currentUser.name}</h1>
                <p id = "userInfoJob" className="user-info__job">{currentUser.about}</p>
                <button id="userInfoEditButton" className="button user-info-edit__button" onMouseUp={props.onEditProfile}>Edit</button>
                </div>
                <button id="userInfoButton" className="button user-info__button" onMouseUp={props.onAddPlace}>+</button>
            </div>
        </div>
        <div id="placesList" className="places-list root__section">
            {props.cards && props.cards.map((card, key) => {

                return  <Card onCardClick={props.onCardClick} onCardLike={props.onCardLike} onCardDelete={props.onCardDelete} card={card} key={key}/> 
            })}
        </div>
    </>
    );

}
export default Main;