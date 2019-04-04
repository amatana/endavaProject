import { SET_QUESTIONS } from '../constants';
import axios from 'axios';

const setQuestions = (questions) => ({
  type: SET_QUESTIONS,
  questions

});

export const searchAllQuestions = (area) => dispatch =>
  axios.get("/api/questions/reqAllQuestions/"+area)
    .then(res => dispatch(setQuestions(res.data)));
