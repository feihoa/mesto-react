import React, { useState } from 'react';
import Header from './Header';
import Main from './Main';
import AddCardPopup from './AddCardPopup';
import EditPopup from './EditPopup';
import EditPhotoPopup from './EditPhotoPopup';
import ImagePopup from './ImagePopup';
import Footer from './Footer';

function App()  {
    
 const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
 const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
 const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
 const [selectedCard, setSelectedCard] = React.useState(false);

    
const handleCardClick = (card) => {
    setSelectedCard(card);
}
    
const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
 };

const handleEditProfileClick = () => {
   setIsEditProfilePopupOpen(true);

}; 

const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);


};
const closeAllPopups = () => {
    setSelectedCard(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
}

        return (
            <>
            <Header />
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} 
                  onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
            <AddCardPopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
            <EditPopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
            <EditPhotoPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
            <Footer />
            </>
        );
}
export default App;
