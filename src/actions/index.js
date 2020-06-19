import axios from 'axios';
import { GET_POSTS } from './types';

export const fetchPosts = () => dispatch => {
  axios('https://jsonplaceholder.typicode.com/posts?_limit=10')
  .then(res => dispatch({ type: GET_POSTS, payload: res.data }))
  .catch(err => {});
}
