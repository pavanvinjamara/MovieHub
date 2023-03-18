import { combineReducers } from 'redux';
import movieReducer from './MovieReducer';

const rootReducer = combineReducers({
  // Make sure 'movie' is the key for the movieReducer
  movie: movieReducer,
});

export default rootReducer;
