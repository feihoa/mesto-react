import React from 'react';
import consts from './consts';
import Api from './Api';

class Main extends React.Component {
    constructor(props) {
        super(props);
 

        this.state = {
            userName: "Имя",
            userDescription:  "Описание",
            userAvatar: '../images/avatar.jpg',
        };
        };

        componentDidMount() {
            consts.api.getUserInfo().then(data => { console.log(data)
                this.setState({ 
                    userName: data.name,
                    userDescription: data.about,
                    userAvatar: data.avatar,
                });

            });

        }

    
render() {
return (
    <>    
    <div id='profileRoot' className="profile root__section">
        <div className="user-info">
            <div id = "userInfoPic" className="user-info__photo" style={{ backgroundImage: 'url(' + this.state.userAvatar + ')', cursor: "pointer"}}  onMouseUp={this.props.onEditAvatar}></div>
            <div id="userInfoData" className="user-info__data">
            <h1 id = "userInfoName" className="user-info__name">{this.state.userName}</h1>
            <p id = "userInfoJob" className="user-info__job">{this.state.userDescription}</p>
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