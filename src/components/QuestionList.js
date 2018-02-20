import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadQuestions } from '../actions'
import { withRouter } from 'react-router-dom'
import Question from './Question'

class Questions extends Component {

  state = {
    questions: []
  }

  componentDidMount() {
    console.log("did mount")
    this.props.getQuestions()
  }

  render() {

    const { questions } = this.props

    return (
      <section className="questionList">
        { questions.length > 0 ?
          questions.map((question) => (
            <Question
              question={question}
              key={question.id}
            />
          )) : <div className="not-available">
            No posts are available.  <br/>
            <em>Please start a new conversation.</em>
          </div>}
    </section>
    )

  }
}

  const mapStateToProps = (state) => {
  return {
    questions: state.questions,
  }

}
const mapDispatchToProps = (dispatch) => {
  return {
    getQuestions: () => dispatch(loadQuestions())
  }
}

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(Questions))
