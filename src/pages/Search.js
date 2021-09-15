import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      disabled: true,
      searchInput: '',
      load: false,
      searchAlbuns: {},
      loadAPI: false,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    const MIN_LENGTH = 2;
    if (value.length >= MIN_LENGTH) {
      this.setState({
        disabled: false,
        [name]: value,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  handleClick = async () => {
    this.setState({
      load: true,
    });
    const { searchInput } = this.state;
    const AlbunsAPI = await searchAlbumsAPI(searchInput);
    this.setState({
      searchAlbuns: AlbunsAPI,
      loadAPI: true,
      load: false,
    });
  }

  render() {
    const { disabled, searchAlbuns, load, loadAPI, searchInput } = this.state;
    if (load) {
      console.log('carregando');
      return (
        <Loading />
      );
    }
    if (loadAPI) {
      console.log('carregado');
      return (
        <>
          <Header />
          <p>
            {`Exibindo resultados de
          ${searchInput}`}
          </p>
          <ul>
            { searchAlbuns.map((album) => {
              const { collectionId, collectionName, artworkUrl100, artistName } = album;
              return (
                <li key={ artworkUrl100 }>
                  <img
                    width="150px"
                    src={ artworkUrl100 }
                    alt={ `${collectionName} de ${artistName}` }
                  />
                  <Link
                    to={ `/album/${collectionId}` }
                    data-testid={ `link-to-album-${collectionId}` }
                  >
                    { collectionName }
                  </Link>
                </li>
              );
            })}
          </ul>
        </>
      );
    }

    return (
      <div data-testid="page-search">
        <Header />
        <label htmlFor="name">
          <input
            name="searchInput"
            data-testid="search-artist-input"
            onChange={ this.handleChange }
          />
          <button
            data-testid="search-artist-button"
            type="button"
            disabled={ disabled }
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
        </label>
      </div>
    );
  }
}
