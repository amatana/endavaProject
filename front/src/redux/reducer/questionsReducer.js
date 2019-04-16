import { SET_QUESTIONS, SET_HRQUESTIONS, DELETE_QUESTION,
  EDIT_QUESTION, SET_CANDIDATE_QUESTIONS } from '../constants';

const initialState = {
  allQuestions: [],
  questId: null,
  questions: [],
  candidateQuestions: []
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
    case SET_CANDIDATE_QUESTIONS:
      return Object.assign({}, state, { candidateQuestions: action.candidateQuestions });
    default:
      return state;
  }
};
