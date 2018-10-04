// import _ from 'lodash';
// with lodash: return _.mapKeys(action.payload.data, 'id');
import { FETCH_POSTS } from '../actions';
import { FETCH_POST } from '../actions';

export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_POST:
      // const post = action.payload.data;
      // const newState = { ...state };
      // newState[post.id] = post;
      // return newState;
      return { ...state, [action.payload.data.id]: action.payload.data };
    case FETCH_POSTS:
      return action.payload.data.reduce(
        (id, post) => Object.assign(id, { [post['id']]: post }),
        {}
      );
    default:
      return state;
  }
}
