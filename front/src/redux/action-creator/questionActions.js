import { SET_QUESTIONS, DELETE_QUESTION } from '../constants';
import axios from 'axios';

const setQuestions = (questions) => ({
  type: SET_QUESTIONS,
  questions

});

// const setDeletedQuestion = (questId) => ({
//   type: DELETE_QUESTION,
//   questId

// });

export const searchAllQuestions = (area) => dispatch =>
  axios.get('/api/questions/reqAllQuestions/' + area)
    .then(res => dispatch(setQuestions(res.data)));

export const deleteQuestion = (questId, area) => dispatch =>
  axios.get('/api/questions/delete/' + questId)
    .then(() => dispatch(searchAllQuestions(area)));

export const editQuestion = (questId, modifiedQuestion, area) => dispatch =>
  axios.post(`/api/questions/edit/${questId}`, {
    content: modifiedQuestion
  })
    .then(() => dispatch(searchAllQuestions(area)));

export const saveQuestionsFromFile = (questionsArray) => dispatch =>
  axios.post('/api/questions/saveFromFile', { questions: questionsArray })
    .then(() => dispatch(searchAllQuestions('Sistemas')));
