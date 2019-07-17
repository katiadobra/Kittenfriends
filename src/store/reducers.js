import {
  CHANGE_SEARCH_FIELD,
  REQUEST_CATS_PENDING,
  REQUEST_CATS_SUCCESS,
  REQUEST_CATS_FAILED
} from './constants';

const initialState = {
  searchField: ''
};

export const searchCats = (state = initialState, action = {}) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ...state, searchField: action.payload };

    default:
      return state;
  }
};

const initialStateCats = {
  isPending: false,
  cats: [],
  error: ''
};

export const requestCats = (state = initialStateCats, action = {}) => {
  switch (action.type) {
    case REQUEST_CATS_PENDING:
      return { ...state, isPending: true };

    case REQUEST_CATS_SUCCESS:
      return { ...state, cats: action.payload, isPending: true };

    case REQUEST_CATS_FAILED:
      return { ...state, error: action.payload, isPending: true };

    default:
      return state;
  }
};
