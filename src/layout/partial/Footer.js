import React, { Component } from 'react';
import intl from 'react-intl-universal';

export class FooterLayout extends Component {
  render() {
    return (
      <div><span role="img" aria-label="blue-hearth">💙</span> <a href="https://h4mit.github.io">{intl.get('APP.ht')}</a></div>
    );
  }
}