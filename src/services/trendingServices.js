// trendingServices.js
import axios from "axios";

const baseUrl = 'https://my-json-server.typicode.com/nomsociuu/FERR/trending';

export const fetchTrending = () => async (dispatch) => {
  try {
    const response = await axios.get(baseUrl);
    dispatch({ type: 'FETCH_TRENDING_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'FETCH_TRENDING_FAILURE', payload: error.message });
  }
};

// Thêm CRUD actions
export const createTrendingItem = (newItem) => async (dispatch) => {
  try {
    const response = await axios.post(baseUrl, newItem);
    dispatch({ type: 'CREATE_TRENDING_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'CREATE_TRENDING_FAILURE', payload: error.message });
  }
};

export const updateTrendingItem = (id, updatedItem) => async (dispatch) => {
  try {
    const response = await axios.put(`${baseUrl}/${id}`, updatedItem);
    dispatch({ type: 'UPDATE_TRENDING_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'UPDATE_TRENDING_FAILURE', payload: error.message });
  }
};

export const deleteTrendingItem = (id) => async (dispatch) => {
  try {
    await axios.delete(`${baseUrl}/${id}`);
    dispatch({ type: 'DELETE_TRENDING_SUCCESS', payload: id });
  } catch (error) {
    dispatch({ type: 'DELETE_TRENDING_FAILURE', payload: error.message });

  }
};
