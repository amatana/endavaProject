
import Axios from 'axios';
import { SET_ANSWERSHR, SET_ANSWERS_SIST } from '../constants';

const setAnswersHR = (answersHR) => ({
  type: SET_ANSWERSHR,
  answersHR

});

const setAnswersSIST = (answersSIST) => ({
  type: SET_ANSWERS_SIST,
  answersSIST

});

export const submitHRAnswers = (answersHR) => dispatch =>
  Axios.post('/api/answers/answersHR', answersHR)
    .then(() => 'guardado')
;
export const fetchHrAnswers = (interviewID) => dispatch =>
  Axios.get(`/api/answers/getHRAnswers/${interviewID}`)
    .then(answers => {
      dispatch(setAnswersHR(answers.data));
    });

export const answerSystems = (answersSis) => dispatch =>
  Axios.post('/api/answers/postAnswersSIS', answersSis);

export const fetchSistAnswers = (interviewID) => dispatch =>
  Axios.get(`/api/answers/getSistAnswers/${interviewID}`)
    .then(answers => dispatch(setAnswersSIST(answers.data)));
