import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { JobPosition } from './JobPosition';

import { addFilter } from '../../store/filter/filter.actions';
import { selectVisiblePositions } from '../../store/positions/positions.selectors';
import { selectFilter } from '../../store/filter/filter.selectors';

function JobList() {
  const dispatch = useDispatch();
  const currentFilters = useSelector(selectFilter);
  const positions = useSelector((state) =>
    selectVisiblePositions(state, currentFilters)
  );

  const handleAddFilter = (filter) => {
    dispatch(addFilter(filter));
  };

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition
          key={item.id}
          handleAddFilter={handleAddFilter}
          {...item}
        />
      ))}
    </div>
  );
}

export { JobList };
