import { configureStore } from '@reduxjs/toolkit'
import { persistStore } from 'redux-persist';
import filtersReducer from './filterSlice'
import campersReducer from './campersSlice'
import favoritsReducer from './favoritsSlice'

export const store = configureStore({
  reducer: {
    filters: filtersReducer,
    campers: campersReducer,
    favorits: favoritsReducer,
  }
})

export const persistor = persistStore(store)
