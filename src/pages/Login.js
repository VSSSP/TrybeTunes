import React, { Component } from 'react';
import { createUser } from '../services/userAPI';

export default class Login extends Component {
  constructor() {
    super();

    this.state = {
      disabled: true,
    };
  }

  handleChange = (event) => {
    const MIN_LENGTH = 3;
    if (event.value.length > MIN_LENGTH) {
      this.setState({
        disabled: false,
      });
    }
  };

  render() {
    const { disabled } = this.state;
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
              createUser={ createUser }
              data-testid="login-submit-button"
              type="submit"
              name={ disabled }
              onChange={ this.handleChange }
            >
              Entrar
            </button>
          </label>
        </form>
      </div>
    );
  }
}
