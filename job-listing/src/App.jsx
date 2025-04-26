import FilterContainer from './components/FilterContainer/FilterContainer';
import Header from './components/Header/Header';
import JobListingContainer from './components/JobListingContainer/JobListingContainer';
import jobListing from '../data.json';
import { useState } from 'react';

const App = () => {
  const [displayFilter, setDisplayFilter] = useState(true);
  const [filters, setFilters] = useState(['frontend', 'css', 'Javascript']);

  const displayFilterHandler = () => {
    setDisplayFilter(!displayFilter);
  };
  const clearFilterHandler = () => {
    setFilters([]);
  };

  return (
    <>
      <Header />
      <main>
        {filters.length > 0 && (
          <FilterContainer
            filters={filters}
            clearFilterHandler={clearFilterHandler}
          />
        )}
        <JobListingContainer jobListing={jobListing} />
      </main>
    </>
  );
};

export default App;
