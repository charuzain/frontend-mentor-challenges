import './App.scss';
import data from '../data.json';
import Result from './components/Result/Result';
import SummaryListItem from './components/SummaryListItem/SummaryListItem';
import icon from './assets/icons/icon-memory.svg'

function App() {
  console.log(data);

  return (
    <main>
      <Result />
      <h2>Summary</h2>
      {data.map((item , index) => {
        return <SummaryListItem key={index} category={item.category} score={item.score} icon={item.icon}/>;
      })}
      <button>Continue</button>
    </main>
  );
}

export default App;
