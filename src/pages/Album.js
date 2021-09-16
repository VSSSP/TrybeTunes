import React, { Component } from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import getMusics from '../services/musicsAPI';
import Loading from './Loading';

export default class Album extends Component {
  constructor() {
    super();
    this.state = {
      musics: [],
      load: true,
      favorites: [],
    };
  }

  componentDidMount = () => {
    this.handleIdSongs();
    this.handleFavoriteSongs();
  }

  handleIdSongs = async () => {
    const { match: { params: { id } } } = this.props;
    const musics = await getMusics(id);
    this.setState({
      musics,
      load: false,
    });
  }

  handleFavoriteSongs = async () => {
    const favorites = await getFavoriteSongs();
    this.setState({
      favorites,
    });
  }

  removeOrAddSongs = async (id, checkbox) => {
    this.setState({
      load: true,
    });
    await (checkbox ? addSong(id) : removeSong(id));
    this.handleFavoriteSongs();
    this.setState({
      load: false,
    });
  }

  render() {
    const { load } = this.state;
    if (load) {
      return (
        <Loading />
      );
    }
    const { musics, favorites } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <section>
          <p data-testid="artist-name">{ musics[0].artistName }</p>
          <p data-testid="album-name">{ musics[0].collectionName }</p>
          { musics.slice(1).map((music) => (<MusicCard
            checked={ favorites.some((favorite) => music.trackId === favorite.trackId) }
            key={ music.collectionId }
            music={ music }
            removeOrAddSongs={ this.removeOrAddSongs }
          />)) }
        </section>
      </div>
    );
  }
}
