import { _getQuestions,  _getUsers } from '../utils/_data.js'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const GET_USERS = 'GET_USERS'

// load questions
const getQuestions = (questions) => {
  return {
    type: GET_QUESTIONS,
    questions
  }
}

export const loadQuestions = () => {
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

// load users
const getUsers = (users) => {
  return {
    type: GET_USERS,
    users
  }
}

export const loadUsers = () => {
  return dispatch => {
    _getUsers()
      .then((response) =>  dispatch(getUsers(response)))
  }
}
