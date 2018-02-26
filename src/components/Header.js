import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <header className="app-header">
        <Link className="home-link" to="/">
          <h1 className="app-title">Would You Rather????</h1>
        </Link>
      </header>
    );
  }
}

export default Header;
