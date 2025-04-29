import styles from '../FilterButton/FilterButton.module.css';
import removeIcon from '../../../images/icon-remove.svg';

const FilterButton = ({ filter, removeFilterHandler }) => {
  return (
    <button className={styles['filter-btn']}>
      <span className={styles['filter-name']}> {filter}</span>
      <div
        className={styles['icon-box']}
        onClick={() => removeFilterHandler(filter)}
      >
        <img src={removeIcon} alt="Remove Icon" className={styles['icon']} />
      </div>
    </button>
  );
  
};

export default FilterButton;
