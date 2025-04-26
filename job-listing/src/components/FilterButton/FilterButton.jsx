import React from 'react';
// import { removeIcon } from '../../../images/icon-remove.svg';
import removeIcon from '../../../images/icon-remove.svg';

const FilterButton = ({ filter }) => {
  return (
    <button>
      <span> {filter}</span>
      <img src={removeIcon} alt="Remove Icon" className="remove-icon" />

    </button>
  );
};

export default FilterButton;
