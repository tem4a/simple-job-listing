import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { addPostions } from './store/positions/positions.actions';

import { FilterPanel } from './features/filter/FilterPanel';
import { JobList } from './features/positions/JobList';
import { TheHeader } from './components/TheHeader';

import data from './mock/data.json';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPostions(data));
  }, []);

  return (
    <>
      <TheHeader />
      <div className="container">
        <FilterPanel />
        <JobList />
      </div>
    </>
  );
}

export default App;
