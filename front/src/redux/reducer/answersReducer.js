import { SET_ANSWERSHR } from '../constants';

const initialState = {
  answersHR: []

};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_ANSWERSHR:
      return Object.assign({}, state, { answersHR: action.answersHR });
    default:
      return state;
  }
};
