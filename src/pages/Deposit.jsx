import React, { useState } from 'react';
import { formatCurrency } from '../Utils/formatCurrency';
import '../index.css';
export default function Deposit({ onDeposit, transactions }) {
  const [amount, setAmount] = useState(0);
  const handleDeposit = () => {
    if(amount > 0) {
      onDeposit(amount);
      setAmount(0);
    }
  };

  const totalDeposit = transactions
    .filter(t => t.type === 'Deposit')
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <div style={{padding:20}}>
      <h2>Deposit Money</h2>
      <div className='cards'>
        <div className='card'>Total Deposits<br/>{formatCurrency(totalDeposit)}</div>
      </div>

      <div style={{marginTop:20}}>
        <input type='number' value={amount} onChange={e => setAmount(Number(e.target.value))} placeholder='Enter amount' />
        <button className='btn primary' onClick={handleDeposit}>Deposit</button>
      </div>

      <div className='transactions'>
        <h3>Recent Deposits</h3>
        <table>
          <thead><tr><th>Date</th><th>Amount</th></tr></thead>
          <tbody>
            {transactions.filter(t => t.type==='Deposit').slice(-5).map(tx=>(
              <tr key={tx.id}><td>{tx.date}</td><td>{formatCurrency(tx.amount)}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
