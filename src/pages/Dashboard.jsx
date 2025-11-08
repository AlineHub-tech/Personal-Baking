import React, { useState } from "react";
import { formatCurrency } from "../Utils/formatCurrency";
import { FaArrowDown, FaArrowUp, FaWallet, FaChartLine } from "react-icons/fa";
import "../Dashboard.css";

export default function Dashboard({ balance }) {
  // Sample transactions
  const [transactions, setTransactions] = useState([
    { id: 1, type: "deposit", amount: 5000, date: "2025-11-07" },
    { id: 2, type: "withdraw", amount: 2000, date: "2025-11-06" },
    { id: 3, type: "deposit", amount: 3000, date: "2025-11-05" },
  ]);

  return (
    <div className="dashboard-container">
      <h2>Welcome to Personal-Banking Dashboard 💰</h2>
      <p className="dashboard-sub">Here is a summary of your account and activities</p>

      {/* Balance Card */}
      <div className="dashboard-cards">
        <div className="card balance-card">
          <h3>Total Balance</h3>
          <p className="balance">{formatCurrency(balance)}</p>
          <button className="btn primary">Deposit</button>
          <button className="btn secondary">Withdraw</button>
        </div>

        {/* Quick Stats */}
        <div className="card stats-card">
          <h3>Quick Stats</h3>
          <div className="stats">
            <div className="stat-item">
              <FaArrowDown color="green" />
              <span>Deposited</span>
              <p>{formatCurrency(11000)}</p>
            </div>
            <div className="stat-item">
              <FaArrowUp color="red" />
              <span>Withdrawn</span>
              <p>{formatCurrency(2000)}</p>
            </div>
            <div className="stat-item">
              <FaChartLine color="#1a73e8" />
              <span>Net Growth</span>
              <p>{formatCurrency(9000)}</p>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="card quick-links-card">
          <h3>Quick Links</h3>
          <div className="links">
            <button className="btn primary">Deposit Money</button>
            <button className="btn secondary">Withdraw Money</button>
            <button className="btn">Check Balance</button>
            <button className="btn">Profile</button>
          </div>
        </div>
      </div>

      {/* Recent Transactions */}
      <div className="transactions-card card">
        <h3>Recent Transactions</h3>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((tx) => (
              <tr key={tx.id}>
                <td>{tx.date}</td>
                <td className={tx.type}>{tx.type}</td>
                <td>{formatCurrency(tx.amount)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

