import React, { Component } from 'react';

export default class MusicCard extends Component {
  render() {
    console.log(this.props);
    const { trackName, previewUrl } = this.props;
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
      </div>
    );
  }
}
