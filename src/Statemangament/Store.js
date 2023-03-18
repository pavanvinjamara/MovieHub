// src/store.js

import { createStore } from 'redux';

const initialState = {
  selectedMovie: null
};

function movieReducer(state = initialState, action) {
  switch (action.type) {
    case 'SET_MOVIE':
      return {
        selectedMovie: action.payload
      };
    default:
      return state;
  }
}

const store = createStore(movieReducer);

export default store;
