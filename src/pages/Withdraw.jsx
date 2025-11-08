import React, { useState } from 'react';
import { formatCurrency } from '../Utils/formatCurrency';
import '../index.css';
export default function Withdraw({ onWithdraw, balance, transactions }) {
  const [amount, setAmount] = useState(0);
  const [error, setError] = useState('');

  const handleWithdraw = () => {
    if(amount <= 0) setError('Amount must be greater than 0');
    else if(amount > balance) setError('Insufficient balance');
    else {
      onWithdraw(amount);
      setAmount(0);
      setError('');
    }
  };

  const totalWithdraw = transactions
    .filter(t => t.type === 'Withdraw')
    .reduce((acc, t) => acc + t.amount, 0);

  return (
    <div style={{padding:20}}>
      <h2>Withdraw Money</h2>
      <div className='cards'>
        <div className='card'>Total Withdraw<br/>{formatCurrency(totalWithdraw)}</div>
        <div className='card'>Current Balance<br/>{formatCurrency(balance)}</div>
      </div>

      <div style={{marginTop:20}}>
        <input type='number' value={amount} onChange={e => setAmount(Number(e.target.value))} placeholder='Enter amount'/>
        <button className='btn' onClick={handleWithdraw}>Withdraw</button>
        {error && <p style={{color:'crimson'}}>{error}</p>}
      </div>

      <div className='transactions'>
        <h3>Recent Withdrawals</h3>
        <table>
          <thead><tr><th>Date</th><th>Amount</th></tr></thead>
          <tbody>
            {transactions.filter(t => t.type==='Withdraw').slice(-5).map(tx=>(
              <tr key={tx.id}><td>{tx.date}</td><td>{formatCurrency(tx.amount)}</td></tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
