import React from 'react';
import { formatCurrency } from '../Utils/formatCurrency';
import '../index.css';
export default function CheckBalance({ balance, transactions }) {
  return (
    <div style={{padding:20}}>
      <h2>Check Balance</h2>
      <div className='cards'>
        <div className='card'>Current Balance<br/>{formatCurrency(balance)}</div>
        <div className='card'>Total Transactions<br/>{transactions.length}</div>
      </div>

      <div className='transactions'>
        <h3>Last 5 Transactions</h3>
        <table>
          <thead><tr><th>Date</th><th>Type</th><th>Amount</th></tr></thead>
          <tbody>
            {transactions.slice(-5).map(tx=>(
              <tr key={tx.id} style={{color: tx.type==='Withdraw'?'red':'green'}}>
                <td>{tx.date}</td><td>{tx.type}</td><td>{formatCurrency(tx.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

