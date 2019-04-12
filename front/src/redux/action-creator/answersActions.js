import { SET_ANSWERSHR } from '../constants';
import Axios from 'axios';

const setAnswersHR = (answersHR) => ({
  type: SET_ANSWERSHR,
  answersHR

});

export const submitHRAnswers = (answersHR) => dispatch =>
  Axios.post('/api/answers/answersHR', answersHR)
    .then((res) => dispatch(setAnswersHR(res.data)))
;
