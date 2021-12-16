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
       <div data-testid="page-login" className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
         <div className="max-w-md w-full space-y-8">
             <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900"
             >
               Digite seu nome
             </h2>
           <form className="mt-8 space-y-6">
           <label htmlFor="name">
            <div className="rounded-md shadow-sm -space-y-px">
             <input
               className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-600 focus:border-blue-600 focus:z-10 sm:text-sm" placeholder="Nome"
               name="name"
               data-testid="login-name-input"
               onChange={ this.handleChange }
             />
            </div>
            <br />
             <button
               data-testid="login-submit-button"
               type="button"
               disabled={ criarUsuario.name.length < MIN_LENGTH }
               onClick={ this.handleClick }
               className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
             >
               Entrar
             </button>
           </label>
          </form>
         </div>
       </div>
     );
   }
}
