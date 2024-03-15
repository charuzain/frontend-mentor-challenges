/* eslint-disable react/prop-types */
import './SummaryListItem.scss';

const SummaryListItem = ({ category, score, icon, color, backgroundColor }) => {
  return (
    <li className="summary" style={{ background: color }}>
      <div className="summary__content">
        <img src={icon} alt={category} />
        <p style={{ color: backgroundColor }} className="summary__category">
          {category}
        </p>
      </div>
      <div className="summary__score">
        <p className="summary__marks">
          {score} <span className="summary__total"> /100</span>{' '}
        </p>
      </div>
    </li>
  );
};

export default SummaryListItem;
