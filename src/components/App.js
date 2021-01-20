import React from 'react';
// import './App.css';
import Header from './Header';
import Main from './Main';
import AddCardPopup from './AddCardPopup';
import EditPopup from './EditPopup';
import EditPhotoPopup from './EditPhotoPopup';

import Footer from './Footer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditProfilePopupOpen: false,
            isAddPlacePopupOpen:  false,
            isEditAvatarPopupOpen: false,
        };
    };

    
handleAddPlaceClick = () => {
 
    this.setState({ isAddPlacePopupOpen: true });
};

handleEditProfileClick = () => {
    this.setState({ isEditProfilePopupOpen: true });

}; 

handleEditAvatarClick = () => {
    this.setState({ isEditAvatarPopupOpen: true });

};

    render(){
        return (
            <>
            <Header />
            <Main onEditProfile={this.handleEditProfileClick} onAddPlace={this.handleAddPlaceClick} onEditAvatar={this.handleEditAvatarClick}/>
            <AddCardPopup isOpen={this.state.isAddPlacePopupOpen}/>
            <EditPopup isOpen={this.state.isEditProfilePopupOpen}/>
            <EditPhotoPopup isOpen={this.state.isEditAvatarPopupOpen}/>
            <Footer />
            </>
        );
    }
}
export default App;
