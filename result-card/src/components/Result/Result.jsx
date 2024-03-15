import './Result.scss';
const Result = () => {
  return (
    <div className="result">
      <div className="result__wrapper">
        <h2 className="result__title">Your result</h2>
        <div className="result__container">
          <h1 className="result__score">76</h1>
          <p className="result__outof">of 100</p>
        </div>
        <p className="result__remarks">Great</p>
        <p className="result__summary">
          Your performance exceed 65% of the people conducting the test here!
        </p>
      </div>
    </div>
  );
};

export default Result;
