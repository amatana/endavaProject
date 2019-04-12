import { SET_QUESTIONS, SET_HRQUESTIONS, DELETE_QUESTION, EDIT_QUESTION } from '../constants';
const initialState = {
  allQuestions: [],
  questId: null,
  questions: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_HRQUESTIONS:
      return Object.assign({}, state, { questions: action.questions });
    case DELETE_QUESTION:
      return Object.assign({}, state, { questId: action.questId });
    case EDIT_QUESTION:
      return Object.assign({}, state, { questId: action.questId });
    case SET_QUESTIONS:
      return Object.assign({}, state, { allQuestions: action.questions });
    default:
      return state;
  }
};
