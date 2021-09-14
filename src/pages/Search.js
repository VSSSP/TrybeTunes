import React, { Component } from 'react';
import Header from '../components/Header';

export default class Search extends Component {
  constructor() {
    super();
    this.state = {
      disabled: true,
    };
  }

  handleChange = ({ target }) => {
    const { value } = target;
    const MIN_LENGTH = 2;
    if (value.length >= MIN_LENGTH) {
      this.setState({
        disabled: false,
      });
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  render() {
    const { disabled } = this.state;
    return (
      <div data-testid="page-search">
        <Header />
        <label htmlFor="name">
          <input
            name="search"
            data-testid="search-artist-input"
            onChange={ this.handleChange }
          />
          <button
            data-testid="search-artist-button"
            type="button"
            disabled={ disabled }
          >
            Pesquisar
          </button>
        </label>
      </div>
    );
  }
}
