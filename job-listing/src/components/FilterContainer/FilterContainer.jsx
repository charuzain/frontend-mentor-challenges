import React from 'react';
import FilterButton from '../FilterButton/FilterButton';
import styles from '../FilterContainer/FilterContainer.module.css';

const FilterContainer = ({
  filters,
  clearFilterHandler,
  removeFilterHandler,
}) => {
  return (
    <section className={styles['filter-container']}>
      <div className={styles['filter-box']}>
        {filters.map((filter, index) => (
          <FilterButton
            key={index}
            filter={filter}
            removeFilterHandler={removeFilterHandler}
          />
        ))}
      </div>
      <button onClick={clearFilterHandler} className={styles['clear-btn']}>
        Clear
      </button>
    </section>
  );
};

export default FilterContainer;
