import { createSlice } from '@reduxjs/toolkit';

const positionsSlice = createSlice({
  name: '@@positions',
  initialState: [],
  reducers: {
    addPositions: (_, action) => action.payload,
  },
});

export const { addPositions } = positionsSlice.actions;

export const positionsReducer = positionsSlice.reducer;

// Selectors
export const selectVisiblePositions = (state, filters = []) => {
  if (!filters.length) return state.positions;

  return state.positions.filter((p) => {
    const positionFilters = [].concat(
      p.role,
      p.level,
      ...p.languages,
      ...p.tools
    );

    return filters.every((f) => positionFilters.includes(f));
  });
};
