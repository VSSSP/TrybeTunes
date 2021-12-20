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
      user: {
        image: "https://res.cloudinary.com/teepublic/image/private/s--UymRXkch--/t_Resized%20Artwork/c_fit,g_north_west,h_1054,w_1054/co_ffffff,e_outline:53/co_ffffff,e_outline:inner_fill:53/co_bbbbbb,e_outline:3:1000/c_mpad,g_center,h_1260,w_1260/b_rgb:eeeeee/c_limit,f_auto,h_630,q_90,w_630/v1570281377/production/designs/6215195_0.jpg",
      },
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
    this.setState({
      load: false,
      user,
    });
  }

  userProfile = () => {
    const { user: { name, email, image, description } } = this.state;
    return (
      <div>
        <p>Nome: { name }</p>
        <p>E-mail: { email }</p>
        Foto:
        <img src={ image } style={ {width: "50px", marginLeft: "15px"} } alt="Profile" />
        <p>Descrição: { description }</p>
      </div>
    );
  }

  render() {
    const { load } = this.state;
    return (
      <>
      <Header />
      <div className="profile-page-box">
        <div data-testid="page-profile" className="profile-page">
          { load ? <Loading /> : this.userProfile() }
          
            <Link to="/profile/edit">
              <button type="button" className="btn btn-primary">
                Editar Perfil
              </button>
            </Link>
          
        </div>
      </div>
      </>
    );
  }
}
