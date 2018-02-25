import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUser, loadQuestions, loadUsers } from '../actions';
import { withRouter } from 'react-router-dom';
import Question from './Question';
import Spinner from './Spinner';

class Questions extends Component {
  state = {
    loading: true,
    questions: [],
    users: {},
    user: null
  };

  componentDidMount() {
    this.props.getCurrentUser().then(response => {
      if (response.user) {
        this.setState((user: user));
        this.props
          .getQuestions()
          .then(this.props.getUsers())
          .then(() => this.setState({ loading: false }));
      } else {
        this.props.getUsers().then(users => this.setState({ users: users }));
      }
    });
  }

  render() {
    const { questions, users, user } = this.props;
    const { loading } = this.state;

    if (!user) {
      return (
        <div className="chooser">
          {Object.keys(users).map(user => (
            <li key={users[user].id}>
              {users[user].name}
              <img src={users[user].avatarURL} alt={users[user].name} />
            </li>
          ))}
        </div>
      );
    }

    if (loading) {
      return <Spinner />;
    }

    return (
      <section className="questionList">
        {Object.keys(users).length > 0 && questions.length > 0 ? (
          questions.map(question => (
            <Question
              question={question}
              key={question.id}
              author={users[question.author]}
            />
          ))
        ) : (
          <div className="not-available">
            No questions are available. <br />
            <em>Please ask a new question.</em>
          </div>
        )}
      </section>
    );
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questions,
    users: state.users,
    user: state.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    getCurrentUser: () => dispatch(loadUser()),
    getQuestions: () => dispatch(loadQuestions()),
    getUsers: () => dispatch(loadUsers())
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Questions)
);
