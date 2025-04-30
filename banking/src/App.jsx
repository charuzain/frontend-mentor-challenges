import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { deposit, withdraw } from './slice';
import Transaction from './Transaction';

function App() {
  const [amount, setAmount] = useState('');
  const balance = useSelector((state) => state.balance.value);
  const transaction = useSelector((state) => state.balance.transaction);
  const dispatch = useDispatch();
  console.log(balance);
  console.log(transaction)

  return (
    <>
      <h1>Bank account</h1>
      <h2>Balance is ${balance}</h2>
      <div>
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          min={0}
          value={amount}
          onChange={(e) => setAmount(Number(e.target.value))}
        />
      </div>
      <div>
        <button onClick={() => dispatch(deposit(amount))}>Desposit</button>
        <button onClick={() => dispatch(withdraw(amount))}>Withdraw</button>
      </div>
      <Transaction/>
    </>
  );
}

export default App;
