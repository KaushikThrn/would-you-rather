import {combineReducers} from 'redux'
import { GET_QUESTIONS } from '../actions'

function questions(state = [], action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return action.questions

    default:
      return state

  }
}


export default combineReducers({ questions })
