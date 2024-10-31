import axios from 'axios';

export const FETCH_LATEST_REQUEST = 'FETCH_LATEST_REQUEST';
export const FETCH_LATEST_SUCCESS = 'FETCH_LATEST_SUCCESS';
export const FETCH_LATEST_FAILURE = 'FETCH_LATEST_FAILURE';

export const fetchLatestMovies = () => async (dispatch) => {
  dispatch({ type: FETCH_LATEST_REQUEST });
  try {
    const response = await axios.get('https://my-json-server.typicode.com/nomsociuu/FERR/latest');
    console.log("Fetched data:", response.data); // Log to check fetched data
    dispatch({ type: FETCH_LATEST_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_LATEST_FAILURE, error: error.message });
  }
};
