import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: '@@filter',
  initialState: [],
  reducers: {
    addFilter: (state, action) => {
      if (!state.includes(action.filter)) {
        state.push(action.payload);
      }
    },
  },
  removeFilter: (state, action) => state.filter((f) => f !== action.payload),
  clearFilter: () => [],
});

export const { addFilter, removeFilter, clearFilter } = filterSlice.actions;

export const filterReducer = filterSlice.reducer;

// Selectors
export const selectFilter = (state) => state.filter;
