import React from 'react';
import consts from './consts';
import Card from './Card';

function Main(props){

    const [userName, setUserName] = React.useState("");
    const [userDescription, setUserDescription] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");
    const [cards, setCards] = React.useState([]);


    React.useEffect(() => {
        consts.api.getUserInfo().then(data => {
                setUserName(data.name);
                setUserDescription(data.about);
                setUserAvatar(data.avatar)
            });
            consts.api.getInitialCards().then(data => {
                setCards(data)
            })

        }, []);

    
return (
    <>    
        <div id='profileRoot' className="profile root__section">
            <div className="user-info">
                <div id = "userInfoPic" className="user-info__photo" style={{ backgroundImage: 'url(' + userAvatar + ')', cursor: "pointer"}}  onMouseUp={props.onEditAvatar}></div>
                <div id="userInfoData" className="user-info__data">
                <h1 id = "userInfoName" className="user-info__name">{userName}</h1>
                <p id = "userInfoJob" className="user-info__job">{userDescription}</p>
                <button id="userInfoEditButton" className="button user-info-edit__button" onMouseUp={props.onEditProfile}>Edit</button>
                </div>
                <button id="userInfoButton" className="button user-info__button" onMouseUp={props.onAddPlace}>+</button>
            </div>
        </div>
        <div id="placesList" className="places-list root__section">
            {cards.map((card, key) => {
              return  <Card onCardClick={props.onCardClick} card={card} key={key}/> 
            })}
        </div>
    </>
    );

}
export default Main;