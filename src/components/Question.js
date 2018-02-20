import React, { Component } from 'react'
import PropTypes from 'prop-types'


class Question extends Component {

  static propTypes = {
    question: PropTypes.object.isRequired,
  }

  render() {

    const { question } = this.props

    return (
      <article className="qbox">
        <h2 className="qheader">Would you rather</h2>
          <div className="options">
            <div className="opt1">
              {question.optionOne.text}
            </div>
            <div className="opt2">
              {question.optionTwo.text}
            </div>
          </div>
          <div className="qfooter">
            asked by {question.author}
        </div>
      </article>
    )

  }
}

export default Question
