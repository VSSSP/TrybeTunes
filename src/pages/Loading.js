import React, { Component } from 'react';

export default class Loading extends Component {
  render() {
    return (
      <div>
        <p animate-pulse flex space-x-4>Carregando...</p>
      </div>
    );
  }
}
