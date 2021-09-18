import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';

export default class Header extends Component {
  constructor() {
    super();
    this.state = {
      load: false,
      user: {},
    };
  }

  componentDidMount() {
    this.getUser();
  }

  getUser = async () => {
    this.setState({
      load: true,
    });
    const user = await getUser();
    this.setState({
      user,
      load: false,
    });
  }

  render() {
    const { load, user } = this.state;
    if (load) {
      return <Loading />;
    }
    return (
      <header data-testid="header-component">
        <h1>Trybetunes</h1>
        <p data-testid="header-user-name">{user.name}</p>
        <Link to="/TrybeTunes/search" data-testid="link-to-search">Search</Link>
        <Link
          to="/TrybeTunes/favorites"
          data-testid="link-to-favorites"
        >
          Favorites
          {' '}
        </Link>
        <Link to="/TrybeTunes/profile" data-testid="link-to-profile"> Profile </Link>
      </header>
    );
  }
}
