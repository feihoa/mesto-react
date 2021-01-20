import React from 'react';


class Main extends React.Component {
    constructor(props) {
        super(props);
        };
    
render() {
return (
    <>    
    <div id='profileRoot' className="profile root__section">
        <div className="user-info">
            <div id = "userInfoPic" className="user-info__photo" onMouseUp={this.props.onEditAvatar}></div>
            <div id="userInfoData" className="user-info__data">
            <h1 id = "userInfoName" className="user-info__name">Имя</h1>
            <p id = "userInfoJob" className="user-info__job">Профессия</p>
            <button id="userInfoEditButton" className="button user-info-edit__button" onMouseUp={this.props.onEditProfile}>Edit</button>
            </div>
            <button id="userInfoButton" className="button user-info__button" onMouseUp={this.props.onAddPlace}>+</button>
        </div>
    </div> 
    <div id="placesList" className="places-list root__section"/>
</>
    );
}
}
export default Main;