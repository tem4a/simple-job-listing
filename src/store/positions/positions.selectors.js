export const selectAllPositions = (state) => state.positions;

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
