import { SET_USER, SET_CANDIDATE, SET_USERS } from '../constants';

const initialState = {
  user: {},
  candidate: {},
  users: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, { user: action.user });
      case SET_USERS:
      return Object.assign({}, state, { users: action.users });
    case SET_CANDIDATE:
      return Object.assign({}, state, { candidate: action.candidate });

    default:
      return state;
  }
};
