import { SET_INTERVIEW } from '../constants';
import axios from 'axios';

const setInterview = (interview) => ({
  type: SET_INTERVIEW,
  interview
});

export const fetchInterview = (interviewID) => dispatch =>
  axios.get('/api/interview/' + interviewID)
    .then((interview) => {
      console.log("---------------------------------",interview.data);
      dispatch(setInterview(interview.data));
    }
    )
;
