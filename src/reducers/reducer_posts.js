import _ from 'lodash';
import { FETCH_POSTS } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POSTS:
      // return posts.reduce((acc, val) => Object.assign(acc, {[val['id']] : val}), {})
      return _.mapKeys(action.payload.data, 'id');
      break;
    default:
      return state;
      break;
  }
}
