import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);

    };
  
  
    render(){

    return (
    <div className="place-card" id={this.props.card._id}>
        <div className="place-card__image"  style={{ backgroundImage: 'url(' + this.props.card.link + ')'}}>
        {/* ${del} */}
        </div>
        <div  className="place-card__description">
            <h3  className="place-card__name">{this.props.card.name}</h3>
        <div  className="place-card__like-box">
        <button  className="place-card__like-icon ${liked}"></button>
        <span  className="place-card__like-number">{this.props.card.likes.length}</span>
            </div>
        </div>
    </div>
    )
        
    }
}
export default Card;