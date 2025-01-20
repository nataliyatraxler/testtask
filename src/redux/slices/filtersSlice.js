import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: "",
  equipment: [],
  type: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    toggleEquipment: (state, action) => {
      const index = state.equipment.indexOf(action.payload);
      if (index === -1) {
        state.equipment.push(action.payload);
      } else {
        state.equipment.splice(index, 1);
      }
    },
    setType: (state, action) => {
      state.type = action.payload;
    },
    resetFilters: () => initialState,
  },
});

export const { setLocation, toggleEquipment, setType, resetFilters } = filtersSlice.actions;
export default filtersSlice.reducer;
