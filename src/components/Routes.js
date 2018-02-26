import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import QuestionList from './QuestionList';

class Routes extends Component {
  render() {
    return (
      <Switch>
        <Route
          exact
          path="/"
          render={props => (
            <div className="unans qblock">
              <QuestionList />
            </div>
          )}
        />
        <Route
          path="/answered"
          render={props => (
            <div className="ans qblock">
              <h2>Answered</h2>
            </div>
          )}
        />
        <Route
          path="/leaderboard"
          render={props => (
            <div className="lead qblock">
              <h2>Leaderboard</h2>
            </div>
          )}
        />
        <Route
          path="/add"
          render={props => (
            <div className="add qblock">
              <h2>Add Question</h2>
            </div>
          )}
        />
      </Switch>
    );
  }
}

export default Routes;
