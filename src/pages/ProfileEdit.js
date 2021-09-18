import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Header from '../components/Header';
import { getUser, updateUser } from '../services/userAPI';
import Loading from './Loading';

export default class ProfileEdit extends Component {
  constructor() {
    super();

    this.state = {
      load: true,
      user: {
        name: '',
        email: '',
        description: '',
        image: '',
      },
    };
  }

  componentDidMount() {
    this.handleGetUser();
  }

  handleGetUser = async () => {
    const user = await getUser();
    this.setState({
      load: false,
      user,
    });
  }

  handleChange = ({ target: { name, value } }) => {
    this.setState(({ user }) => ({
      user: {
        ...user,
        [name]: value,
      },
    }));
  }

  enableButton = () => {
    const { user } = this.state;
    const MIN_VALUE = 4;
    const userKeys = Object.values(user);
    if (userKeys.length < MIN_VALUE) return true;
    if (!this.emailValidation()) return true;
    return userKeys.some((userKey) => (!userKey.length));
  }

  emailValidation = () => {
    const { user: { email } } = this.state;
    const emailCheck = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
    // Validação de email retirada de:
    // https://pt.stackoverflow.com/questions/1386/express%C3%A3o-regular-para-valida%C3%A7%C3%A3o-de-e-mail
    return emailCheck.test(email);
  }

  handleClick = async () => {
    const { user } = this.state;
    this.setState({
      load: true,
    });
    await updateUser(user);
    this.setState({
      load: false,
      redirect: true,
    });
  }

  editProfileForm() {
    const { user: { name, email, image, description } } = this.state;
    return (
      <>
        <input
          data-testid="edit-input-name"
          type="text"
          value={ name }
          name="name"
          onChange={ this.handleChange }
        />
        <input
          data-testid="edit-input-email"
          type="text"
          value={ email }
          name="email"
          onChange={ this.handleChange }
        />
        <input
          data-testid="edit-input-description"
          type="text"
          value={ description }
          name="description"
          onChange={ this.handleChange }
        />
        <input
          data-testid="edit-input-image"
          type="text"
          value={ image }
          name="image"
          onChange={ this.handleChange }
        />
        <button
          data-testid="edit-button-save"
          type="button"
          disabled={ this.enableButton() }
          onClick={ this.handleClick }
        >
          {' '}
          Salvar
          {' '}
        </button>
      </>
    );
  }

  render() {
    const { load, redirect } = this.state;
    if (redirect) return <Redirect to="/TrybeTunes/profile" />;
    return (
      <div data-testid="page-profile-edit">
        <Header />
        { load ? <Loading /> : this.editProfileForm() }
      </div>
    );
  }
}
