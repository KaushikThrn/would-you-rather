import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUser } from '../actions';
import { Link } from 'react-router-dom';

class Header extends Component {
  state = {
    currentUser: null
  };

  componentDidMount() {
    this.props.getCurrentUser();
  }

  render() {
    const { currentUser } = this.props;
    console.log('current  user', currentUser);
    return (
      <header className="app-header">
        {currentUser && (
          <div className="user">
            <img
              className="userImg"
              alt={currentUser.name}
              src={currentUser.avatarURL}
            />
            <p className="userName">{currentUser.name}</p>
          </div>
        )}
        <Link className="home-link" to="/">
          <h1 className="app-title">Would You Rather????</h1>
        </Link>
      </header>
    );
  }
}

const mapStateToProps = state => {
  return {
    currentUser: state.currentUser
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getCurrentUser: () => dispatch(loadUser())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
