import { FETCH_LATEST_REQUEST, FETCH_LATEST_SUCCESS, FETCH_LATEST_FAILURE } from '../services/latestServices';

const initialState = { loading: false, movies: [], error: '' };

const latestReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_LATEST_REQUEST:
      return { ...state, loading: true };
    case FETCH_LATEST_SUCCESS:
      console.log("Reducer success payload:", action.payload); // Log to verify data reaching the reducer
      return { ...state, loading: false, movies: action.payload, error: '' };
    case FETCH_LATEST_FAILURE:
      return { ...state, loading: false, movies: [], error: action.error };
    default:
      return state;
  }
};

export default latestReducer;
