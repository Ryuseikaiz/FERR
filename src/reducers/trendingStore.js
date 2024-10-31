// trendingStore.js
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import trendingReducer from './trendingReducer';

export const store = configureStore({
  reducer: {
    trending: trendingReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(), // or any other middlewares you need
});

export default store;
