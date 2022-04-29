import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllPositions } from '../store/positions/positions.selectors';
import { JobPosition } from './JobPosition';

function JobList() {
  const positions = useSelector(selectAllPositions);

  return (
    <div className="job-list">
      {positions.map((item) => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  );
}

export { JobList };
