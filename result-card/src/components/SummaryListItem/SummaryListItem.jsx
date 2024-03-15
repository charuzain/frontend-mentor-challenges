/* eslint-disable react/prop-types */
import './SummaryListItem.scss';
const SummaryListItem = ({ category, score, icon }) => {
  return (
    <li className="summary">
      <div className="summary__content">
        <img src={icon} alt={category} />
        <p>{category}</p>
      </div>
      <div className="summary__score">
        <p>{score} / 100</p>
      </div>
    </li>
  );
};

export default SummaryListItem;
