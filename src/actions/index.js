import { _getQuestions } from '../utils/_data.js'

export const GET_QUESTIONS = 'GET_QUESTIONS'

/* API request error handling */
const showError = (error) =>
  console.log('fetch failed: ' , error.statusText);


// load posts
const getQuestions = (questions) => {
  return {
    type: GET_QUESTIONS,
    questions
  }
}

export const loadQuestions = () => {
  console.log("Load")
  return dispatch => {
    _getQuestions()
      .then((response) => {
        // convert questions to array
        const qIndices = Object.keys(response)
        const questions = qIndices.map(index =>  response[index] )
        dispatch(getQuestions(questions))
      })
  }
}
