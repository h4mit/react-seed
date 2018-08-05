import React, { Component } from 'react';
import logo from '../../logo.svg';
import './Header.css';

class HeaderLayout extends Component {
  render() {
    return (
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to H4mit - React Seed</h1>
        </header>
    );
  }
}

export default HeaderLayout;
