import {combineReducers} from 'redux'
import { GET_QUESTIONS, GET_USERS } from '../actions'

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
export default combineReducers({ questions, users })
