import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default class MusicCards extends Component {
  render() {
    const { artworkUrl100, collectionName, artistName, collectionId } = this.props;
    return (
      <div className="card" style={{width: "18rem"}}>
        <div key={ artworkUrl100 }>
          <img
            width="150px"
            src={ artworkUrl100 }
            alt={ `${collectionName} de ${artistName}` }
            className="card-img-top"
          />
          <Link
            to={ `/album/${collectionId}` }
            data-testid={ `link-to-album-${collectionId}` }
            className="card-body"
          >
            <p className="card-text">{ collectionName }</p>
          </Link>
        </div>
      </div>
    );
  }
}

MusicCards.propTypes = {
  artworkUrl100: PropTypes.string.isRequired,
  collectionName: PropTypes.string.isRequired,
  artistName: PropTypes.string.isRequired,
  collectionId: PropTypes.number.isRequired,
};