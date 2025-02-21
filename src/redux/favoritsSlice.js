import { createSlice } from '@reduxjs/toolkit';
import persistReducer from 'redux-persist/es/persistReducer'
import storage from 'redux-persist/lib/storage'

const slice = createSlice({
  name: "favorits",
  initialState: {
    campers: []
  },
  reducers: {
    addFavoritCamper(state, action) {
      if (state.campers.indexOf(action.payload) < 0)
        state.campers.push(action.payload)
    },
    deleteFavoritCamper(state, action) {
      return {
        ...state,
        campers: state.campers.filter((id) => id !== action.payload)
      }
    }
  },
  selectors: {
    selectFavorits: (state) => state.campers,
    selectIsFavorits: (state, id) => state.campers.indexOf(id) >= 0
  }
})

export const { addFavoritCamper, deleteFavoritCamper } = slice.actions
export const { selectFavorits, selectIsFavorits } = slice.selectors

const persistConfig = {
  key: 'favoritsCampers',
  storage,
}

export default persistReducer(persistConfig, slice.reducer)
