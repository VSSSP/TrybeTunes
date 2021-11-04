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
      <nav className="bg-blue-600">
        <h1>Trybetunes</h1>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center">
              <p className="text-gray-100 block px-3 py-2 rounded-md text-base font-medium" data-testid="header-user-name">Usuário: {user.name}</p>
              <Link to="/TrybeTunes/search" data-testid="link-to-search" className="text-gray-100 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Search</Link>
              <Link
                to="/TrybeTunes/favorites"
                data-testid="link-to-favorites"
                className="text-gray-100 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                Favorites
                {' '}
              </Link>
              <Link to="/TrybeTunes/profile" data-testid="link-to-profile" className="text-gray-100 hover:bg-blue-400 hover:text-white block px-3 py-2 rounded-md text-base font-medium"> Profile </Link>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}
