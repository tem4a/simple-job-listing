import { combineReducers } from 'redux';
import { positionsReducer } from './positions/positions.reducer';
import { filterReducer } from './filter/filter.reducer';

export const rootReducer = combineReducers({
  positions: positionsReducer,
  filter: filterReducer,
});
