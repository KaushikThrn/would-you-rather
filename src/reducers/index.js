import { combineReducers } from 'redux';
import { GET_USER, GET_QUESTIONS, GET_USERS, SAVE_USER } from '../actions';

function currentUser(state = null, action) {
  switch (action.type) {
    case GET_USER:
      return action.currentUser;

    case SAVE_USER:
      return action.currentUser;

    default:
      return state;
  }
}
function questions(state = [], action) {
  switch (action.type) {
    case GET_QUESTIONS:
      return action.questions;

    default:
      return state;
  }
}

function users(state = {}, action) {
  switch (action.type) {
    case GET_USERS:
      return action.users;

    default:
      return state;
  }
}
export default combineReducers({ currentUser, questions, users });
