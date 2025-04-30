import React from 'react';
import { useSelector } from 'react-redux';


const Transaction = () => {
    const transactions = useSelector((state) => state.balance.transaction);
  return (
    <ul>
      {transactions.length >0  &&transactions.map((transaction) => (
        <p key={Date.now()}>{`$ ${transaction.amount} ${transaction.type} on ${transaction.date}`}</p>
      ))}
    </ul>
  );
}

export default Transaction