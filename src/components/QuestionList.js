import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadQuestions, loadUsers } from '../actions'
import { withRouter } from 'react-router-dom'
import Question from './Question'
import Spinner from './Spinner'

class Questions extends Component {

  state = {
    loading: true,
    questions: [],
    users: {},
    user: null
  }

  componentDidMount() {
    this.props.getQuestions()
    .then(this.props.getUsers())
    .then( () => this.setState({loading:false}))
  }

  render() {

    const { questions, users, user } = this.props
    const { loading } = this.state

    if (loading) {
      return (
      <Spinner />
      )
    }

    return (
      <section className="questionList">
        {
          Object.keys(users).length > 0 &&  questions.length > 0 ?
          questions.map((question) => (
            <Question
              question={question}
              key={question.id}
              author={users[question.author]}
            />
          )) : <div className="not-available">
            No questions are available.  <br/>
            <em>Please ask a new question.</em>
          </div>}
      </section>
    )

  }
}

  const mapStateToProps = (state) => {
    return {
      questions: state.questions,
      users: state.users,
      user:  state.user
    }

}
const mapDispatchToProps = (dispatch) => {
  return {
    getQuestions: () => dispatch(loadQuestions()),
    getUsers: () => dispatch(loadUsers())
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions))
