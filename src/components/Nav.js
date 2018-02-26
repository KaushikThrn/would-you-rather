import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class Nav extends Component {
  render() {
    return (
      <nav className="navList">
        <li className="unansNav navButton">
          <NavLink exact to="/" activeClassName="current" className="navlink">
            Unanswered Questions
          </NavLink>
        </li>
        <li className="ansNav navButton">
          <NavLink to="/answered" activeClassName="current" className="navlink">
            Answered Questions
          </NavLink>
        </li>
        <li className="leadNav navButton">
          <NavLink
            to="/leaderboard"
            activeClassName="current"
            className="navlink"
          >
            Leaderboard
          </NavLink>
        </li>
        <li className="addNav navButton">
          <NavLink to="/add" activeClassName="current" className="navlink">
            Add Question
          </NavLink>
        </li>
      </nav>
    );
  }
}

export default Nav;
