import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class MusicCard extends Component {
  render() {
    const { artworkUrl100, collectionName, artistName, collectionId } = this.props;
    return (
      <div>
        <div key={ artworkUrl100 }>
          <img
            width="150px"
            src={ artworkUrl100 }
            alt={ `${collectionName} de ${artistName}` }
          />
          <Link
            to={ `/album/${collectionId}` }
            data-testid={ `link-to-album-${collectionId}` }
          >
            { collectionName }
          </Link>
        </div>
      </div>
    );
  }
}

MusicCard.propTypes = {
  artworkUrl100: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  collectionId: PropTypes.number.isRequired,
};
