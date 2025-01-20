import { configureStore } from '@reduxjs/toolkit';
import filtersReducer from './slices/filtersSlice';
import campersReducer from './slices/campersSlice';

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    campers: campersReducer,
  },
});

export default store;
