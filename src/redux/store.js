import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './Newslice';

export const store = configureStore({
  reducer: {
    news: newsReducer,
  },
});
