import React from 'react';
import { formatCurrency } from '../Utils/formatCurrency';
import '../index.css';
export default function Home({ balance, transactions }) {
  return (
    <div className='home-page'>
      <h2>Welcome to Personal-Bank</h2>
      <div className='cards'>
        <div className='card'>Balance<br/>{formatCurrency(balance)}</div>
        <div className='card'>Recent Deposit<br/>{formatCurrency(transactions.filter(t=>t.type==='Deposit').reduce((a,b)=>a+b.amount,0))}</div>
        <div className='card'>Recent Withdraw<br/>{formatCurrency(transactions.filter(t=>t.type==='Withdraw').reduce((a,b)=>a+b.amount,0))}</div>
      </div>

      <div className='transactions'>
        <h3>Recent Transactions</h3>
        <table>
          <thead><tr><th>Date</th><th>Type</th><th>Amount</th></tr></thead>
          <tbody>
            {transactions.slice(-5).map(tx=>(
              <tr key={tx.id} style={{ color: tx.type==='Withdraw'?'red':'green' }}>
                <td>{tx.date}</td><td>{tx.type}</td><td>{formatCurrency(tx.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
