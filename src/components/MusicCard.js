import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loading from '../pages/Loading';

export default class MusicCard extends Component {
  constructor() {
    super();

    this.state = {
      load: false,
    };
  }

  handleCheckbox = async ({ target: { checked } }) => {
    const { removeOrAddSongs, music } = this.props;
    removeOrAddSongs(music, checked);
  }

  render() {
    const { music: { trackName, previewUrl, trackId } } = this.props;
    const { checked } = this.props;
    const { load } = this.state;

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
        <label htmlFor={ trackId }>
          Favorita
          <input
            name="input"
            id={ trackId }
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

MusicCard.propTypes = {
  music: PropTypes.shape({
    trackName: PropTypes.string,
    previewUrl: PropTypes.string,
    trackId: PropTypes.string,
  }).isRequired,
  removeOrAddSongs: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
};
