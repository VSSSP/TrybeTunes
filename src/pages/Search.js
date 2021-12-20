import React, { Component } from 'react';
import Header from '../components/Header';
import MusicCards from '../components/MusicCards';
import searchAlbumsAPI from '../services/searchAlbumsAPI';
import Loading from './Loading';
import { BsSearch} from 'react-icons/bs';

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
          <p className="album-results">
            {`Resultado de álbuns de: ${artistName}`}
          </p>
          <div className="albuns-card">
          { this.handleAlbumMap(searchAlbuns) }
          </div>
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
      <form>
        <div className="input-group">
        <input
        name="searchInput"
        data-testid="search-artist-input"
        onChange={ this.handleChange }
        value={ searchInput }
        />
        <div className="input-group-btn">
          <button className="search-button" type="button" disabled={ searchInput.length < MIN_LENGTH } onClick={ this.handleClick }>
            <BsSearch />
          </button>
        </div>
        </div>
      </form>
      <div className="fadeIn first">
      { this.handleStateCondition(this.state) }
      </div>
      </>
    );
  }
}