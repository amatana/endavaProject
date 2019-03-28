import { SET_USERS } from '../constants';
import axios from 'axios';

const setUser = (user) => ({
  type: SET_USERS,
  user
});

export const checkUserLogin = (data) => dispatch =>
  axios.post('/api/usuarios/login', data)
    .then(res => {
      return res.data;
    })
    .then(data => dispatch(setUser(data)));
