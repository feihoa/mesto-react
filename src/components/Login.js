import React from 'react';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleChange(e) {
    const {name, value} = e.target;
    this.setState({
      [name]: value
    });
  }
  handleSubmit(e){
    e.preventDefault();
    if (!this.state.username || !this.state.password){
      return;
    }
    this.props.history.push('/user');
    this.props.onLogIn();

  }
  render(){
    return(
      <div className="login">
        <h3 className="login__welcome">
          Добро пожаловать!
        </h3>
        <form onSubmit={this.handleSubmit} className="login__form">
          <label  htmlhtmlFor="username">
            Логин:
          </label>
          <input className=" popup__input login__input" required id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange} placeholder='Любой логин'/>
          <label  htmlhtmlFor="password">
            Пароль:
          </label>
          <input  required id="password" name="password" className="popup__input login__input" type="password" value={this.state.password} onChange={this.handleChange} placeholder='Любой пароль'/>
          <div className="login__button-container button__submit">
            <button type="submit" onSubmit={this.handleSubmit} className="login__link">Войти</button>
          </div>
        </form>

        <div className="login__signup">
          <p>Ещё не зарегистрированы?</p>
          <p>Регистрация недоступна</p>
        </div>
      </div>
    )
  }
}

export default withRouter(Login);
