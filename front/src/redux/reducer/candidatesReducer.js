import { SET_CANDIDATE, SET_CANDIDATES, SET_MYCANDIDATES } from '../constants';
const initialState = {
  candidate: {},
  candidates: [],
  myCandidates: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_CANDIDATES:
      return Object.assign({}, state, { candidates: action.candidates });
    case SET_CANDIDATE:
      return Object.assign({}, state, { candidate: action.candidate });
    case SET_MYCANDIDATES:
      return Object.assign({}, state, { myCandidates: action.candidates });
    default:
      return state;
  }
};
