import { SET_ANSWERSHR } from '../constants';
import Axios from 'axios';

const setAnsersHR = (answersHR) => ({
  type: SET_ANSWERSHR,
  answersHR

});

export const submitHRAnswers = (answersHR) => dispatch =>
  Axios.post('/api/answers/answersHR', { answersHR })
    .then(() => console.log('dsdsd'))
;
