import FilterContainer from './components/FilterContainer/FilterContainer';
import Header from './components/Header/Header';
import JobListingContainer from './components/JobListingContainer/JobListingContainer';
import jobListing from '../data.json';

const App = () => {
  return (
    <>
      <Header />
      <main>
        <FilterContainer />
        <JobListingContainer jobListing={jobListing} />
      </main>
    </>
  );
};

export default App;
