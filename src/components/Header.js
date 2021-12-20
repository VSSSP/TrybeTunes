import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Loading from '../pages/Loading';
import { getUser } from '../services/userAPI';
import logo from '../images/Logo.png';
import { BsFillPersonFill, BsFillHeartFill, BsSearch } from "react-icons/bs";

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
      <>
      <div className="head1-background">
        <ul className="nav nav-tabs md-tabs nav-justified indigo" data-testid="header-component">
          <li data-testid="header-user-name" className="nav-item header-user">
            Usuário: {user.name}
          </li>
          <li data-testid="header-user-name" className="nav-item">
            <img src={logo} alt="trybetunes" max-width={"10px"} className="header-icon"/>
          </li>
        </ul>
      </div>
      <div className="head2-background">
        <ul className="nav nav-tabs md-tabs nav-justified" data-testid="header-component">
          <li className="nav-item">
            <Link to="/search" data-testid="link-to-search"><BsSearch /> Search</Link>
          </li>
          <li className="nav-item">
            <Link to="/favorites" data-testid="link-to-favorites"><BsFillHeartFill /> Favorites </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" data-testid="link-to-profile"><BsFillPersonFill /> Profile </Link>
          </li>
        </ul>
      </div>
      </>
    );
  }
}