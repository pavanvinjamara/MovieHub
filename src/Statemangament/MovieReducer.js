const initialState = {
    selectedMovie: null,
  };
  
  const MovieReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_MOVIE':
        return {
          ...state,
          selectedMovie: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default MovieReducer;
  