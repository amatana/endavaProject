import { SET_USER } from '../constants';
import axios from 'axios';

const setUser = (user) => ({
  type: SET_USER,
  user
});

export const checkUserLogin = (data) => dispatch =>
  axios.post('/api/users/login', data)
    .then(res => {
      return res.data;
    })
    .then(usuario => dispatch(setUser(usuario)));

export const createUser = (user) => dispatch =>
  axios.post('/api/users/create', { user })
    .then(res => res.data)
    .then(user => dispatch(setUser(user)))
  ;

export const fetchUser = () => dispatch =>
  axios.get('/api/users/user')
    .then(res => res.data)
    .then(user => dispatch(setUser(user)))

export const logOut = () => dispatch =>
  axios.get('/api/users/logOut')
    .then(res => res.data)
    .then(user => dispatch(setUser(user)))