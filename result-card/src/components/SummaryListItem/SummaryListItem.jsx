/* eslint-disable react/prop-types */
const SummaryListItem = ({category , score , icon}) => {
  return (
    <div>
      <img src={icon} alt={category} />
      <p>{category}</p>
      <p>{score} / 100</p>
    </div>
  );
};

export default SummaryListItem;
