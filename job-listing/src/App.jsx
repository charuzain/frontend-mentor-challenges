import FilterContainer from './components/FilterContainer/FilterContainer';
import Header from './components/Header/Header';
import JobListingContainer from './components/JobListingContainer/JobListingContainer';
import jobListing from '../data.json';
import { useEffect, useState } from 'react';

const App = () => {
  const [filters, setFilters] = useState([]);
  const [listings, setListings] = useState(jobListing);

  useEffect(() => {
    const filteredJobs = jobListing.filter((listing) => {
      const filterTags = [
        ...listing.languages,
        ...listing.tools,
        listing.level,
        listing.role,
      ];
      return filters.every((filter) => filterTags.includes(filter));
    });
    setListings(filteredJobs);
  }, [filters]);

  const addFilterHandler = (selectedFilter) => {
    const filtersCopy = filters.map((elem) => elem.toLowerCase());
    if (filtersCopy.includes(selectedFilter.toLowerCase())) {
      return;
    }
    const newFilters = [...filters, selectedFilter];
    setFilters(newFilters);
  };
  const clearFilterHandler = () => {
    setFilters([]);
  };

  const removeFilterHandler = (filt) => {
    console.log(filt);
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
        <JobListingContainer
          listings={listings}
          addFilterHandler={addFilterHandler}
          filters={filters}
        />
      </main>
    </>
  );
};

export default App;
