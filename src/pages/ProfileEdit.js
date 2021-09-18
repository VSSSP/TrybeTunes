import React, { Component } from 'react';
import { Redirect } from 'react-router';
import Header from '../components/Header';
import { getUser, updateUser } from '../services/userAPI';
import Loading from './Loading';

export default class ProfileEdit extends Component {
  constructor() {
    super();

    this.state = {
      load: false,
      user: {
        name: '',
        email: '',
        description: '',
        image: '',
      },
      // redirect: false,
    };
  }

  componentDidMount() {
    this.handleGetUser();
  }

  handleGetUser = async () => {
    this.setState({
      load: true,
    });
    const user = await getUser();
    console.log(user);
    this.setState({
      load: false,
      user,
    });
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
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
    return userKeys.some((userKey) => (!userKey.length));
  }

  handleClick = async () => {
    const { user } = this.state;
    this.setState({
      load: true,
    });
    await updateUser(user);
    console.log('WHY?');
    this.setState({
      load: false,
      redirect: true,
    });
  }

  editProfileForm() {
    const { name, email, image, description } = this.state;
    return (
      <>
        <input
          data-testid="edit-input-name"
          type="text"
          placeholder={ name }
          name="name"
          onChange={ this.handleChange }
        />
        <input
          data-testid="edit-input-email"
          type="email"
          placeholder={ email }
          name="email"
          onChange={ this.handleChange }
        />
        <input
          data-testid="edit-input-description"
          type="text"
          placeholder={ description }
          name="description"
          onChange={ this.handleChange }
        />
        <input
          data-testid="edit-input-image"
          type="text"
          placeholder={ image }
          name="image"
          onChange={ this.handleChange }
        />
        <button
          data-testid="edit-button-save"
          type="button"
          disabled={ this.enableButton() }
          onClick={ this.handleClick() }
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
    // if (redirect) return <Redirect to="/profile" />;
    return (
      <div data-testid="page-profile-edit">
        <Header />
        { load ? <Loading /> : this.editProfileForm() }
      </div>
    );
  }
}
