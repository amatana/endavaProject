import { SET_CANDIDATE, SET_CANDIDATES } from '../constants';
const initialState = {
  candidate: {},
  candidates: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CANDIDATES:
      return Object.assign({}, state, { candidates: action.candidates });
    case SET_CANDIDATE:
      return Object.assign({}, state, { candidate: action.candidate });
    default:
      return state;
  }
};
