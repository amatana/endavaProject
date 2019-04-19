import { SET_QUESTIONS, SET_HRQUESTIONS, DELETE_QUESTION,
  EDIT_QUESTION, SET_CANDIDATE_QUESTIONS, SET_QUESTIONSIS } from '../constants';

const initialState = {
  allQuestions: [],
  questId: null,
  questions: [],
  candidateQuestions: [],
  questionSIS: []

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
    case SET_QUESTIONSIS:
      return Object.assign({}, state, { questionSIS: action.questionSIS });
    default:
      return state;
  }
};
