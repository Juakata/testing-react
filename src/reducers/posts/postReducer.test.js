import { GET_POSTS } from '../../actions/types';
import postReducer from './reducer';

describe('Posts Reducer', () => {
    it('Should return default state', () => {
      const newState = postReducer(undefined, {});
      expect(newState).toEqual([]);
    });

    it('Should return the new state', () => {
      const posts = [{ title: 'title 1' }, { title: 'title 2' }];
      const newState = postReducer(undefined, {
        type: GET_POSTS,
        payload: posts,
      });
      expect(newState).toEqual(posts);
    });
});
