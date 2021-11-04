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
    if (loadAPI && !searchAlbuns.length) {
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
      <>
      <Header />
      <div data-testid="page-search" className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div>
            <label htmlFor="searchInput">
              <input
                name="searchInput"
                data-testid="search-artist-input"
                onChange={ this.handleChange }
                value={ searchInput }
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              />
            </label>
          </div>
            <button
              data-testid="search-artist-button"
              type="button"
              disabled={ searchInput.length < MIN_LENGTH }
              onClick={ this.handleClick }
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Pesquisar Albuns
            </button>
          { this.handleStateCondition(this.state) }
        </div>
      </div>
      </>
    );
  }
}
