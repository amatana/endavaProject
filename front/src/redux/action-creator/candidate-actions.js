import { SET_CANDIDATE } from '../constants';
import axios from 'axios';

const setCandidate = (candidate) => ({
  type: SET_CANDIDATE,
  candidate

});

export const createCandidate = (candidate) => dispatch =>
  axios.post('/api/candidate/create', { candidate })
    .then(res => res.data)
    .then(candidate => dispatch(setCandidate(candidate)));
