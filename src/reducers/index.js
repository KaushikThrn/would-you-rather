import {combineReducers} from 'redux'
import { GET_USER, GET_QUESTIONS, GET_USERS } from '../actions'

function user(state = null, action) {

  switch (action.type) {
    case GET_USER:
      return action.user

    default:
      return state

  }
}
function questions(state = [], action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return action.questions

    default:
      return state

  }
}

function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return action.users

    default:
      return state

  }
}
export default combineReducers({ user, questions, users })
