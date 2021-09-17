import React, { Component } from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import { addSong, getFavoriteSongs, removeSong } from '../services/favoriteSongsAPI';
import Loading from './Loading';

export default class Favorites extends Component {
  constructor() {
    super();

    this.state = {
      load: false,
      favorites: [],
    };
  }

  componentDidMount() {
    this.handleFavoriteSongs();
  }

  handleFavoriteSongs = async () => {
    const favorites = await getFavoriteSongs();
    this.setState({
      favorites,
      load: false,
    });
  }

  handleSection({ favorites }) {
    return (
      <section>
        { favorites.map((music) => (<MusicCard
          checked={ favorites.some((favorite) => music.trackId === favorite.trackId) }
          key={ music.collectionId }
          music={ music }
          removeOrAddSongs={ this.removeOrAddSongs }
        />)) }
      </section>
    );
  }

  removeOrAddSongs = async (id, checkbox) => {
    this.setState({
      load: true,
    });
    await (checkbox ? addSong(id) : removeSong(id));
    this.handleFavoriteSongs();
  }

  render() {
    const { load } = this.state;
    return (
      <div data-testid="page-favorites">
        <Header />
        { load ? <Loading /> : this.handleSection(this.state) }
      </div>
    );
  }
}
