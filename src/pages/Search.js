import React, { Component } from 'react';
import Header from '../components/Header';
import MusicCards from '../components/MusicCards';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      searchInput: '',
      load: false,
      searchAlbuns: {},
      loadAPI: false,
    };
  }

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick = async () => {
    const { searchInput } = this.state;
    this.setState({
      load: true,
      artistName: searchInput,
    });
    const AlbunsAPI = await searchAlbumsAPI(searchInput);
    this.setState({
      searchAlbuns: AlbunsAPI,
      loadAPI: true,
      load: false,
      searchInput: '',
    });
  }

  handleAlbumMap(search) {
    return search.map((album) => <MusicCards { ...album } key={ album.trackId } />);
  }

  handleStateCondition = ({ loadAPI, searchAlbuns, load, artistName }) => {
    if (load) {
      return (
        <Loading />
      );
    }
    if (loadAPI && searchAlbuns.length === 0) {
      return <p>Nenhum álbum foi encontrado</p>;
    }
    if (loadAPI) {
      return (
        <div key="a">
          <p>
            {`Resultado de álbuns de: ${artistName}`}
          </p>
          { this.handleAlbumMap(searchAlbuns) }
        </div>
      );
    }
  }

  render() {
    const { searchInput } = this.state;
    const MIN_LENGTH = 2;
    return (
      <div data-testid="page-search">
        <Header />
        <label htmlFor="searchInput">
          <input
            name="searchInput"
            data-testid="search-artist-input"
            onChange={ this.handleChange }
            value={ searchInput }
          />
          <button
            data-testid="search-artist-button"
            type="button"
            disabled={ searchInput.length < MIN_LENGTH }
            onClick={ this.handleClick }
          >
            Pesquisar
          </button>
        </label>
        { this.handleStateCondition(this.state) }
      </div>
    );
  }
}
