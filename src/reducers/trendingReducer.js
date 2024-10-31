// trendingReducer.js
const initialState = { trending: [], error: null };

export const trendingReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_TRENDING_SUCCESS':
      return { ...state, trending: action.payload };
    case 'FETCH_TRENDING_FAILURE':
      return { ...state, error: action.payload };
    case 'CREATE_TRENDING_SUCCESS':
      return { ...state, trending: [...state.trending, action.payload] };
    case 'UPDATE_TRENDING_SUCCESS':
      return {
        ...state,
        trending: state.trending.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
      };
    case 'DELETE_TRENDING_SUCCESS':
      return {
        ...state,
        trending: state.trending.filter((item) => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default trendingReducer;
