import React from 'react';

function Card (props){

    const handleClick= () => {
        props.onCardClick(props.card);
    } 
  
    return (
    <div className="place-card" id={props.card._id}>
        <div className="place-card__image" onMouseUp={handleClick} style={{ backgroundImage: 'url(' + props.card.link + ')'}}>
        {/* ${del} */}
        </div>
        <div  className="place-card__description">
            <h3  className="place-card__name">{props.card.name}</h3>
        <div  className="place-card__like-box">
        <button  className="place-card__like-icon ${liked}"></button>
        <span  className="place-card__like-number">{props.card.likes.length}</span>
            </div>
        </div>
    </div>
    )
}
export default Card;