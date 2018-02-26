import React, { Component } from 'react';
import { connect } from 'react-redux';
import { loadUser, loadQuestions, loadUsers } from '../actions';
import { withRouter } from 'react-router-dom';
import Question from './Question';
import Spinner from './Spinner';
import UserModal from './UserModal';

class Questions extends Component {
  state = {
    loading: true,
    questions: [],
    users: {},
    currentUser: null
  };

  componentDidMount() {
    const { getCurrentUser, getQuestions, getUsers } = this.props;
    getCurrentUser().then(response => {
      if (response.user) {
        getQuestions()
          .then(getUsers())
          .then(() => this.setState({ loading: false }));
      } else {
        this.setState({ loading: false, modalOpen: true });
        getQuestions().then(() => this.setState({ loading: false }));
      }
    });
  }

  openModal() {
    this.setState({ modalOpen: true });
  }

  render() {
    const { questions, users, currentUser } = this.props;
    const { loading } = this.state;

    if (loading) {
      return <Spinner />;
    }

    if (!currentUser) {
      return (
        <div className="chooser">
          <div>
            <UserModal />
          </div>
        </div>
      );
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
    currentUser: state.currentUser
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
