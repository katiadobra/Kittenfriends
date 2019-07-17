import {
  CHANGE_SEARCH_FIELD,
  REQUEST_CATS_PENDING,
  REQUEST_CATS_SUCCESS,
  REQUEST_CATS_FAILED
} from './constants';

/**
 * @param {string} text
 * @return {object}
 */
export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
});

/**
 * Download data from the server.
 *
 * For an action is expects to return an object.
 * By adding redux-thunk middleware we're now listening to actions
 * and any time the requests 'cats' action gets triggered,
 * it's going to return a function and trigger redux-thunk, that's going
 * to give us the dispatch and we can call some actions
 * first, just dispatch pending to the reducer, then it let us know when done
 * with the promise and when it returns it's going to dispatch the success,
 * go through reducer, update the store and make changes
 * @async
 * @function requestCats
 * @return {Promise<string>} The data from the URL.
 */
export const requestCats = () => dispatch => {
  dispatch({ type: REQUEST_CATS_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => dispatch({ type: REQUEST_CATS_SUCCESS, payload: data }))
    .catch(error => dispatch({ type: REQUEST_CATS_FAILED, payload: error }));
};
