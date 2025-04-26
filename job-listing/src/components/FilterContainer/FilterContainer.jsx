import React from 'react';
import FilterButton from '../FilterButton/FilterButton';

const FilterContainer = ({ filters, clearFilterHandler }) => {
  return (
    <>
      <div>
        {filters.map((filter, index) => (
          <FilterButton key={index} filter={filter} />
        ))}
      </div>
      <button onClick={clearFilterHandler}>Clear</button>
    </>
  );
};

export default FilterContainer;
