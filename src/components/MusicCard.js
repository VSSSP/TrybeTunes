import React, { Component } from 'react';
import Loading from '../pages/Loading';
import { addSong, removeSong } from '../services/favoriteSongsAPI';

export default class MusicCard extends Component {
  constructor() {
    super();

    this.state = {
      load: false,
      favorites: false,
    };
  }

  handleCheckbox = async ({ target: { checked } }) => {
    const { removeOrAddSongs, music: { trackId } } = this.props;
    removeOrAddSongs(trackId, checked);
  }

  render() {
    const { music: { trackName, previewUrl, trackId } } = this.props;
    const { checked } = this.props;
    const { load, favorites } = this.state;

    if (load) {
      return <Loading />;
    }

    return (
      <div>
        { trackName }
        <audio data-testid="audio-component" src={ previewUrl } controls>
          <track kind="captions" />
          O seu navegador não suporta o elemento
          {' '}
          <code>audio</code>
          .
        </audio>
        <label htmlFor="favorites">
          <input
            name="favorites"
            type="checkbox"
            data-testid={ `checkbox-music-${trackId}` }
            onChange={ this.handleCheckbox }
            checked={ checked }
          />
        </label>
      </div>
    );
  }
}
