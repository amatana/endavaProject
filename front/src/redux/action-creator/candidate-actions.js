import { SET_CANDIDATE, SET_CANDIDATES } from '../constants';
import axios from 'axios';

const setCandidate = (candidate) => ({
  type: SET_CANDIDATE,
  candidate

});

const setCandidates = (candidates) => ({
  type: SET_CANDIDATES,
  candidates
});

export const createCandidate = (candidate) => dispatch =>
  axios.post('/api/candidate/create', { candidate })
    .then(res => res.data)
    .then(respuesta => {
      if (respuesta.error) return respuesta.error;
      else dispatch(setCandidate(respuesta));
    });

export const getAllCandidates = () => dispatch =>
  axios.get('/api/candidate/getAll')
    .then(res => res.data)
    .then(candidates => dispatch(setCandidates(candidates)));

export const fetchCandidate = (id) => dispatch =>
  axios.get(`/api/candidate/getOne/${id}`)
    .then(candidate => dispatch(setCandidate(candidate.data)));

