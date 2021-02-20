import React, { useState } from 'react';
import apiParams from './apiParams';
import {CurrentUserContext} from '../contexts/CurrentUserContext'
import {CardsContext} from '../contexts/CardsContext'
import Header from './Header';
import Main from './Main';
import AddCardPopup from './AddCardPopup';
import EditPopup from './EditPopup';
import EditPhotoPopup from './EditPhotoPopup';
import ImagePopup from './ImagePopup';
import Footer from './Footer';

function App()  {
 const api = apiParams.api;
 const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
 const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
 const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
 const [selectedCard, setSelectedCard] = React.useState(false);

 const [currentUser, setCurrentUser] = React.useState('');
 const [cards, setCards] = React.useState('');

 React.useEffect(() => {
    api.getUserInfo().then(data => {
        setCurrentUser(data);
    });

    api.getInitialCards().then(data => {
        console.log(data)

        setCards(data)
    });
    }, []);

    
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
            <CurrentUserContext.Provider value={currentUser}>
            <CardsContext.Provider value={cards}>
            <Header />
            <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} 
                  onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} setCards={setCards}/>
            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
            <AddCardPopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
            <EditPopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
            <EditPhotoPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
            <Footer />
            </CardsContext.Provider>
            </CurrentUserContext.Provider>
            </>
        );
}
export default App;
