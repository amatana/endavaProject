import { SET_ANSWERSHR } from '../constants';
import Axios from 'axios';

const setAnswersHR = (answersHR) => ({
  type: SET_ANSWERSHR,
  answersHR

});

export const submitHRAnswers = (answersHR) => dispatch =>
  Axios.post('/api/answers/answersHR', answersHR)
  // .then((res) => console.log(res))
    .then(() => 'guardado')
;
export const fetchHrAnswers = (interviewID) => dispatch =>
  Axios.get(`/api/answers/getHRAnswers/${interviewID}`)
    // .then((answersHr) => dispatch(setAnswersHR(answersHr.data)));
    .then(answers => dispatch(setAnswersHR(answers.data)));
