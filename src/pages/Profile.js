import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { getUser } from '../services/userAPI';
import Loading from './Loading';

export default class Profile extends Component {
  constructor() {
    super();

    this.state = {
      load: false,
      user: {},
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

  userProfile = () => {
    const { user: { name, email, image, description } } = this.state;
    return (
      <>
        <p>{ name }</p>
        <p>{ email }</p>
        <img src={ image } alt="Profile" data-testid="profile-image" />
        <p>{ description }</p>
      </>
    );
  }

  render() {
    const { load } = this.state;
    return (
      <div data-testid="page-profile">
        <Header />
        { load ? <Loading /> : this.userProfile() }
        <Link to="/profile/edit"> Editar perfil </Link>
      </div>
    );
  }
}
