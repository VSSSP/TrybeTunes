import React, { Component } from 'react';
import { Redirect } from 'react-router';
import { createUser } from '../services/userAPI';
import Loading from './Loading';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      disabled: true,
      criarUsuario: {},
      load: false,
      redirect: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange = ({ target }) => {
    const { value } = target;
    const MIN_LENGTH = 3;
    if (value.length >= MIN_LENGTH) {
      this.setState({
        disabled: false,
        criarUsuario: {
          name: value,
        },
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
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
     const { disabled, redirect, load } = this.state;
     if (load) {
       return <Loading />;
     }
     if (redirect) {
       return <Redirect to="/search" />;
     }

     return (
       <div data-testid="page-login">
         <form>
           <label htmlFor="login">
             <input
               name="login"
               data-testid="login-name-input"
               onChange={ this.handleChange }
             />
             <button
               data-testid="login-submit-button"
               type="button"
               disabled={ disabled }
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
