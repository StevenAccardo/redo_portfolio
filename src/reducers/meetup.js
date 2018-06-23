import { FETCH_MEETUPS } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case FETCH_MEETUPS:
      return action.payload;
    default:
      return state;
  }
};
