import { SET_ANSWERSHR, SET_ANSWERS_SIST } from '../constants';
import Axios from 'axios';

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
  // .then((res) => console.log(res))
    .then(() => 'guardado')
;
export const fetchHrAnswers = (interviewID) => dispatch =>
  Axios.get(`/api/answers/getHRAnswers/${interviewID}`)
    // .then((answersHr) => dispatch(setAnswersHR(answersHr.data)));
    .then(answers => dispatch(setAnswersHR(answers.data)));

export const answerSystems = (answersSis) => dispatch =>
  Axios.post('/api/answers/postAnswersSIS', answersSis)
    // .then((res) => console.log('===========================================', res));
    .then(res => res.data)
    .then(respuesta => {
      if (respuesta.error) return respuesta.error;
      else return '200';
    });

export const fetchSistAnswers = (interviewID) => dispatch =>
  Axios.get(`/api/answers/getSistAnswers/${interviewID}`)
    .then(answers => dispatch(setAnswersSIST(answers.data)));
