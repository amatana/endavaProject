import { SET_INTERVIEW } from '../constants';
import axios from 'axios';
import { bindActionCreators } from '../../../../../Library/Caches/typescript/3.4.3/node_modules/@types/redux-logger/node_modules/redux';

const setInterview = (interview) => ({
  type: SET_INTERVIEW,
  interview
});

export const fetchInterview = (interviewID) => dispatch =>
  axios.get('/api/interview/getInterview/' + interviewID)
    .then((interview) => dispatch(setInterview(interview.data)));
;

export const setInterviewCandidate = (obj) => dispatch =>
  axios.post('/api/interview/candidateInt', obj)
    .then(res => console.log(res));
