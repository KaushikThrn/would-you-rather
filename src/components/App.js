import React, {Component} from 'react'
import {Link, NavLink, Route, Switch} from 'react-router-dom'

class App extends Component {
  render() {
    return (<div className="App">
      <header className="app-header">
        <Link className="home-link" to="/">
          <h1 className="app-title">Would You Rather????</h1>
        </Link>
      </header>
      <nav className="navList">
        <NavLink
          to="/"
          activeClassName="current"
          className="unNav navButton">
          Unanswered Questions
        </NavLink>
        <NavLink
          to="/answered"
          activeClassName="current"
          className="ansNav navButton">
          Answered Questions
        </NavLink>
        <NavLink
          to="/leaderboard"
          activeClassName="current"
          className="leadNav navButton">
          Leaderboard
        </NavLink>
        <NavLink
          to="/add"
          activeClassName="current"
          className="newNav navButton">
          Add Question
        </NavLink>
      </nav>
    </div>)
  }
}

export default App;
