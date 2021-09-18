import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

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

     if (load) return <Loading />;
     if (redirect) return <Redirect to="/search" />;

     return (
       <div data-testid="page-login">
         <form>
           <label htmlFor="name">
             <input
               name="name"
               data-testid="login-name-input"
               onChange={ this.handleChange }
             />
             <button
               data-testid="login-submit-button"
               type="button"
               disabled={ criarUsuario.name.length < MIN_LENGTH }
               onClick={ this.handleClick }
             >
               Entrar
             </button>
           </label>
         </form>
       </div>
     );
   }
}
