import React, { Component } from 'react';
import Header from '../components/Header';
import MusicCard from '../components/MusicCard';
import getMusics from '../services/musicsAPI';
import Loading from './Loading';

export default class Album extends Component {
  constructor() {
    super();
    this.state = {
      musics: [],
      load: true,
    };
  }

  componentDidMount = () => {
    this.handleIdSongs();
  }

  handleIdSongs = async () => {
    const { match: { params: { id } } } = this.props;
    const musics = await getMusics(id);
    this.setState({
      musics,
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
    const { musics } = this.state;
    return (
      <div data-testid="page-album">
        <Header />
        <section>
          <p data-testid="artist-name">{ musics[0].artistName }</p>
          <p data-testid="album-name">{ musics[0].collectionName }</p>
          { musics.slice(1).map((music) => (<MusicCard
            key={ music.collectionId }
            music={ music }
          />)) }
        </section>
      </div>
    );
  }
}
