// import _ from 'lodash';
// with lodash: return _.mapKeys(action.payload.data, 'id');
import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      return action.payload.data.reduce(
        (acc, val) => Object.assign(acc, { [val['id']]: val }),
        {}
      );
    default:
      return state;
  }
}
