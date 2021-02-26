import React from 'react';
import apiParams from './apiParams';
import {CurrentUserContext} from '../contexts/CurrentUserContext'
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

 const [buttonText, setButtonText] = React.useState('');


 React.useEffect(() => {
    api.getUserInfo().then(data => {
        setCurrentUser(data);
    });

    api.getInitialCards().then(data => {
        console.log(data)
        setCards(data)
    });

}, []);


const handleCardLike = (card) => {

    const isLiked = card.likes.some(i => i._id === currentUser._id);
    !isLiked ?  api.likeCard(card._id).then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    })
    :
    api.deleteLike(card._id).then((newCard) => {
        const newCards = cards.map((c) => c._id === card._id ? newCard : c);
        setCards(newCards);
      });

}
const handleCardDelete = (card) => {
    if(card.owner._id === currentUser._id){
        api.deleteCard(card._id).then(() => {
        const newCards = cards.filter((c) => c._id !== card._id );
        setCards(newCards);
        });  
    }            
}
    
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
    //смена надписи на кнопке
    setButtonText('');

    setSelectedCard(false);
    setIsAddPlacePopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
}

const handleUpdateUser = (data) => {
    setButtonText('Загрузка...');
    api.editProfile(data.name, data.about).then(data => {
        setCurrentUser(data);

        closeAllPopups();
        
    });
}
const handleUpdateAvatar = (data) => {
    setButtonText('Загрузка...');

    api.updateAvatar(data.avatar).then(data => {
        
        setCurrentUser(data);

        closeAllPopups();
    })
}
const handleAddPlaceSubmit = (data) => {
    setButtonText('Загрузка...');

    api.addCard(data.cardName, data.cardLink).then((newCard) => {
        setCards([...cards, newCard]);

        closeAllPopups();
    }); 
    

}

        return (
            <>
                <CurrentUserContext.Provider value={currentUser}>
                <Header />
                <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} 
                    onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete}/>
                <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
                <AddCardPopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddCard={handleAddPlaceSubmit} buttonText={buttonText}/>
                <EditPopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} buttonText={buttonText}/>
                <EditPhotoPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} buttonText={buttonText}/>
                <Footer />
                </CurrentUserContext.Provider>
            </>
        );
}
export default App;
