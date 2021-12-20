import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { createUser } from '../services/userAPI';
import Loading from './Loading';
import logo from '../images/Logo.png';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      criarUsuario: {
        name: '',
      },
      load: false,
      redirect: false,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      criarUsuario: {
        [name]: value,
      },
    });
  };

   handleClick = async () => {
     const { criarUsuario } = this.state;
     this.setState({
       load: true,
       redirect: false,
     });
     await createUser(criarUsuario);
     this.setState({
       load: false,
       redirect: true,
     });
   }

   render() {
     const { redirect, load, criarUsuario } = this.state;
     const MIN_LENGTH = 3;
     if (load) {
       return <Loading />;
     }
     if (redirect) {
       return <Redirect to="/search" />;
     }

     return (
      <div className="background-login">
      <div className="wrapper fadeInDown">
        <div id="formContent">
      <div className="fadeIn first">
        <img src={logo} id="icon" alt="User Icon" />
      </div>
      <form>
        <input onChange={ this.handleChange } name="name" type="text" id="login" className="fadeIn second input-login" placeholder="Nome"/>
        <button disabled={ criarUsuario.name.length < MIN_LENGTH } onClick={ this.handleClick } type="button" className="fadeIn fourth btn-primary btn-login">Entrar</button>
      </form>
        </div>
      </div>
      </div>
     );
   }
}