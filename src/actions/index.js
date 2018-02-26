import {
  _getCurrentUser,
  _getQuestions,
  _getUsers,
  _saveUser
} from '../utils/_data.js';

export const GET_USER = 'GET_USER';
export const GET_QUESTIONS = 'GET_QUESTIONS';
export const GET_USERS = 'GET_USERS';
export const SAVE_USER = 'SAVE_USER';

// load currentUser
const getUser = currentUser => {
  return {
    type: GET_USER,
    currentUser
  };
};

export const loadUser = () => {
  return dispatch => {
    return _getCurrentUser().then(currentUser =>
      dispatch(getUser(currentUser))
    );
  };
};

// set current user
const setCurrentUser = currentUser => {
  return {
    type: SAVE_USER,
    currentUser
  };
};

export const saveUser = user => {
  return dispatch => {
    return _saveUser(user).then(response => dispatch(setCurrentUser(response)));
  };
};
// load questions
const getQuestions = questions => {
  return {
    type: GET_QUESTIONS,
    questions
  };
};

export const loadQuestions = () => {
  return dispatch => {
    return _getQuestions().then(response => {
      // convert questions to array
      const qIndices = Object.keys(response);
      const questions = qIndices.map(index => response[index]);
      dispatch(getQuestions(questions));
    });
  };
};

// load users
const getUsers = users => {
  return {
    type: GET_USERS,
    users
  };
};

export const loadUsers = () => {
  return dispatch => {
    return _getUsers().then(response => dispatch(getUsers(response)));
  };
};
