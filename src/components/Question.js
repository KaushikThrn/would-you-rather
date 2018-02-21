import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Question extends Component {

  static propTypes = {
    question: PropTypes.object.isRequired,
    author: PropTypes.object.isRequired
  }

  state = {
    showDetails: false
  }

  showDetails = () => this.setState(() => ({ showDetails: true }))
  hideDetails = () => this.setState(() => ({ showDetails: false }))


  render() {

    const {question, author} = this.props
    const {showDetails} = this.state

    return (<article className="qcontainer" >
      { !showDetails
          ? (<div className="qbox" onClick={this.showDetails}>
            <h2 className="qheader">Would you rather</h2>
            <h3>{question.optionOne.text}</h3>
            or<br/>
            <h3>{question.optionTwo.text}</h3>
          </div>)
          : (<div className="qbox">
            <div className="close-click" onClick={this.hideDetails}>x</div>
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
              <p className="asked">asked by
                <br/> {author.name}
              </p>
              <img className="authorImg" src={author.avatarURL} alt={author.name}/>
            </div>
          </div>)
      }

    </article>)

  }
}

export default Question
