import React from 'react';
import Header from './Header';
import Main from './Main';
import AddCardPopup from './AddCardPopup';
import EditPopup from './EditPopup';
import EditPhotoPopup from './EditPhotoPopup';
import ImagePopup from './ImagePopup';
import Footer from './Footer';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditProfilePopupOpen: false,
            isAddPlacePopupOpen:  false,
            isEditAvatarPopupOpen: false,
            selectedCard: false,
        };
    };
handleCardClick = (card) => {
    this.setState({ selectedCard: card });
}
    
handleAddPlaceClick = () => {
 
    this.setState({ isAddPlacePopupOpen: true });
};

handleEditProfileClick = () => {
    this.setState({ isEditProfilePopupOpen: true });

}; 

handleEditAvatarClick = () => {
    this.setState({ isEditAvatarPopupOpen: true });

};
closeAllPopups = () => {
    this.setState({ isAddPlacePopupOpen: false });
    this.setState({ isEditProfilePopupOpen: false });
    this.setState({ isEditAvatarPopupOpen: false });
    this.setState({ selectedCard: false });

}

    render(){
        return (
            <>
            <Header />
            <Main onEditProfile={this.handleEditProfileClick} onAddPlace={this.handleAddPlaceClick} 
                  onEditAvatar={this.handleEditAvatarClick} onCardClick={this.handleCardClick}/>
            <ImagePopup card={this.state.selectedCard} onClose={this.closeAllPopups}/>
            <AddCardPopup isOpen={this.state.isAddPlacePopupOpen} onClose={this.closeAllPopups}/>
            <EditPopup isOpen={this.state.isEditProfilePopupOpen} onClose={this.closeAllPopups}/>
            <EditPhotoPopup isOpen={this.state.isEditAvatarPopupOpen} onClose={this.closeAllPopups}/>
            <Footer />
            </>
        );
    }
}
export default App;
