import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
  render() {
    return (
        <header className="App-header">
          <h1 className="App-title">{this.props.title}</h1>
        </header>
    );
  }
}

export default Header;
