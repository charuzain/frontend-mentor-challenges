import './App.scss';
import data from '../data.json';
import Result from './components/Result/Result';
import SummaryListItem from './components/SummaryListItem/SummaryListItem';
// import icon from './assets/icons/icon-memory.svg'

function App() {
  console.log(data);

  return (
    <main>
      <Result />
      <section className="summary-card">
        <h2 className="summary-card__heading">Summary</h2>
        <ul className="summary-card__list">
          {data.map((item, index) => {
            return (
              <SummaryListItem
                key={index}
                category={item.category}
                score={item.score}
                icon={item.icon}
                color={item.color}
                backgroundColor={item.backgroundColor}
              />
            );
          })}
        </ul>
        <button className="btn">Continue</button>
      </section>
    </main>
  );
}

export default App;
