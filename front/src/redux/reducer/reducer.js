import { SET_USER, SET_CANDIDATE, SET_USERS, SET_CANDIDATES } from '../constants';

const initialState = {
  user: {},
  candidate: {},
  users: [],
  candidates: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, { user: action.user });
      case SET_USERS:
      return Object.assign({}, state, { users: action.users });
      case SET_CANDIDATES:
      return Object.assign({}, state, { candidates: action.candidates });
    case SET_CANDIDATE:
      return Object.assign({}, state, { candidate: action.candidate });

    default:
      return state;
  }
};
