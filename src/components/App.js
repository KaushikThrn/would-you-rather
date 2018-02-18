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
        <li className="unansNav navButton">
          <NavLink
            exact
            to="/"
            activeClassName="current"
            className="navlink">
            Unanswered Questions
          </NavLink>
        </li>
        <li className="ansNav navButton">
          <NavLink
            to="/answered"
            activeClassName="current"
            className="navlink">
            Answered Questions
          </NavLink>
        </li>
        <li className="leadNav navButton">
          <NavLink
            to="/leaderboard"
            activeClassName="current"
            className="navlink">
            Leaderboard
          </NavLink>
        </li>
        <li className="addNav navButton">
          <NavLink
            to="/add"
            activeClassName="current"
            className="navlink">
            Add Question
          </NavLink>
        </li>
      </nav>
      <Switch>
        <Route exact path='/' render={(props) => (
          <div className="unans qblock"><h2>Unanswered</h2></div>
        )}/>
        <Route path='/answered' render={(props) => (
            <div className="ans qblock"><h2>Answered</h2></div>
          )}/>
        <Route path='/leaderboard' render={(props) =>(
            <div className="lead qblock"><h2>Leaderboard</h2></div>
          )}/>
        <Route path='/add' render={(props) => (
            <div className="add qblock"><h2>Add Question</h2></div>
          )}/>
      </Switch>
    </div>)
  }
}

export default App;
