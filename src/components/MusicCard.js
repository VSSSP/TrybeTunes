import React, { Component } from 'react';
import Loading from '../pages/Loading';
import { addSong } from '../services/favoriteSongsAPI';

export default class MusicCard extends Component {
  constructor() {
    super();

    this.state = {
      load: false,
      checkboxStatus: false,
    };
  }

  handleCheckBoxChange = async () => {
    const { music } = this.props;
    this.setState({
      load: true,
    });
    await addSong(music);
    this.setState({
      load: false,
      checkboxStatus: true,
    });
  }

  // handleCheckboxClick = () => {

  // }

  render() {
    console.log(this.props);
    const { music: { trackName, previewUrl, trackId } } = this.props;
    const { load, checkboxStatus } = this.state;

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
            onChange={ this.handleCheckBoxChange }
            checked={ checkboxStatus }
          />
        </label>
      </div>
    );
  }
}
