import React from 'react';
import { useDispatch } from 'react-redux';

import { JobPosition } from './JobPosition';

import { addFilter } from '../filter/filter.slice';
import { usePositions } from './use-positions.hook';
import { useFetchPositions } from './use-fetch-positions.hook';

function JobList() {
  useFetchPositions();

  const dispatch = useDispatch();
  const positions = usePositions();

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
