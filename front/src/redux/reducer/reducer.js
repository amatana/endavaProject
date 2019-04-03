import { SET_USER, SET_CANDIDATE } from '../constants';

const initialState = {
  user: {},
  candidate: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return Object.assign({}, state, { user: action.user });
    case SET_CANDIDATE:
      return Object.assign({}, state, { candidate: action.candidate });

    default:
      return state;
  }
};
