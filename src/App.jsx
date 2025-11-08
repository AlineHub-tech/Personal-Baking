import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import ThemeToggle from './components/ThemeToggle';
import './index.css';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Deposit from './pages/Deposit';
import Withdraw from './pages/Withdraw';
import CheckBalance from './pages/CheckBalance';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
// import { formatCurrency } from '../Utils/formatCurrency';

export default function App() {
  const [balance, setBalance] = useState(1000);
  const [transactions, setTransactions] = useState([
    {id:1,type:'Deposit',amount:500,date:'2025-11-01'},
    {id:2,type:'Withdraw',amount:200,date:'2025-11-02'},
    {id:3,type:'Deposit',amount:300,date:'2025-11-03'},
  ]);
  const [dark, setDark] = useState(false);

  useEffect(()=>{ document.body.classList.toggle('dark',dark); }, [dark]);

  const addTransaction = (type, amount) => {
    const newTx = {id:transactions.length+1,type,amount,date:new Date().toISOString().slice(0,10)};
    setTransactions([...transactions, newTx]);
    if(type==='Deposit') setBalance(b=>b+amount);
    else setBalance(b=>b-amount);
  };

  return (
    <Router>
      <div className='app'>
        <Sidebar />
        <div className='content-area'>
          <Topbar balance={balance} />
          <div style={{padding:10}}>
            <ThemeToggle dark={dark} setDark={setDark} />
          </div>
          <main>
            <Routes>
              <Route path='/' element={<Dashboard balance={balance} transactions={transactions}/>} />
              <Route path='/home' element={<Home balance={balance} transactions={transactions}/>} />
              <Route path='/deposit' element={<Deposit onDeposit={(amount)=>addTransaction('Deposit',amount)} transactions={transactions}/>} />
              <Route path='/withdraw' element={<Withdraw onWithdraw={(amount)=>addTransaction('Withdraw',amount)} balance={balance} transactions={transactions}/>} />
              <Route path='/balance' element={<CheckBalance balance={balance} transactions={transactions}/>} />
              <Route path='/settings' element={<Settings />} />
              <Route path='/profile' element={<Profile />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  )
}