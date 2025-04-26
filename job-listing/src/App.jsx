import FilterContainer from './components/FilterContainer/FilterContainer';
import Header from './components/Header/Header';
import JobListingContainer from './components/JobListingContainer/JobListingContainer';
import jobListing from '../data.json';
import { useState } from 'react';

const App = () => {
  const [displayFilter, setDisplayFilter] = useState(true);
  const [filters, setFilters] = useState([
    'frontend',
    'css',
    'Javascript',
    'java',
    'python',
    'junior',
    'spring boot',
  ]);

  const displayFilterHandler = () => {
    setDisplayFilter(!displayFilter);
  };
  const clearFilterHandler = () => {
    setFilters([]);
  };

  const removeFilterHandler = (filt) => {
    console.log(filt)
    const newFilter = filters.filter(
      (e) => e.toLowerCase() !== filt.toLowerCase()
    );
    setFilters(newFilter);
  };

  return (
    <>
      <Header />
      <main>
        {filters.length > 0 && (
          <FilterContainer
            filters={filters}
            clearFilterHandler={clearFilterHandler}
            removeFilterHandler={removeFilterHandler}
          />
        )}
        <JobListingContainer jobListing={jobListing} />
      </main>
    </>
  );
};

export default App;
