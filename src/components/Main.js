import React from 'react';
import Card from './Card';
import apiParams from './apiParams';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { CardsContext } from '../contexts/CardsContext';

function Main(props){
    const api = apiParams.api;
    const currentUser = React.useContext(CurrentUserContext);
    const cards = React.useContext(CardsContext);


    
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
            {cards && cards.map((card, key) => {
                const isOwn = card.owner._id === currentUser._id;
                const isLiked = card.likes.some(i => i._id === currentUser._id);

                const handleCardLike = (card) => {
                    // Снова проверяем, есть ли уже лайк на этой карточке
                    const isLiked = card.likes.some(i => i._id === currentUser._id);
                    
                    // Отправляем запрос в API и получаем обновлённые данные карточки
                    api.likeCard(card._id, !isLiked).then((newCard) => {
                        // Формируем новый массив на основе имеющегося, подставляя в него новую карточку
                      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
                      // Обновляем стейт
                      props.setCards(newCards);
                    });
                }
                const handleCardDelete = (card) => {
                    if(card.owner._id === currentUser._id){
                        api.deleteCard(card._id).then(() => {
                        const newCards = cards.filter((c) => c._id !== card._id );
                        props.setCards(newCards);
                        });  
                    }            
                }
                return  <Card onCardClick={props.onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} card={card} key={key} isOwn={isOwn} isLiked={isLiked} /> 
            })}
        </div>
    </>
    );

}
export default Main;