import React from 'react';
// import './App.css';
import Header from './Header';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import Footer from './Footer';

class App extends React.Component {
    constructor(props) {
        super(props);
    };
    render(){
        return (
            <>
            <Header />
            <PopupWithForm />
            <Footer />
            </>
        );
    }
}
export default App;
