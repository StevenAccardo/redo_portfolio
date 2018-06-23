import axios from 'axios';
import { FETCH_MEETUPS } from './types';

let ROOT_URL;

process.env.NODE_ENV === 'production' ? (ROOT_URL = 'www.stevensccardo.com') : (ROOT_URL = 'http://localhost:3000');

export const fetchMeetups = () => async dispatch => {
  try {
    const res = await axios.get(`${ROOT_URL}/meetups/api`);
    dispatch({ type: FETCH_MEETUPS, payload: res.data });
  } catch (e) {
    console.log('There was an error');
  }
};
