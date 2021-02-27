import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card (props){
    const currentUser = React.useContext(CurrentUserContext);


    const handleClick = (e) => {
        if (e.target.classList.contains('place-card__image')) {
            props.onCardClick(props.card);
          }
      
        }
    
    const handleLikeClick = () => {
        props.onCardLike(props.card);
    }

    const handleDeleteClick = () => {
        if(window.confirm("Вы действительно хотите удалить карточку?")){
            props.onCardDelete(props.card);
        }
    }
  
    return (
    <div className="place-card" id={props.card._id}>
        <div className="place-card__image" onMouseUp={handleClick} style={{ backgroundImage: 'url(' + props.card.link + ')'}}>
        {props.card.owner._id === currentUser._id ? <button className="place-card__delete-icon" onMouseUp={handleDeleteClick}></button> : ''}
        </div>
        <div  className="place-card__description">
            <h3  className="place-card__name">{props.card.name}</h3>
        <div  className="place-card__like-box">
        <button  className={`place-card__like-icon ${props.card.likes.some(i => i._id === currentUser._id) ? 'place-card__like-icon_liked' : ''}`} onMouseUp={handleLikeClick}></button>
        <span  className="place-card__like-number">{props.card.likes.length}</span>
            </div>
        </div>
    </div>
    )
}
export default Card;