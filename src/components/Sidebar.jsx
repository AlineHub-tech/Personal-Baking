import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Icon } from './Icons';
import '../index.css';
export default function Sidebar() {
  const [open, setOpen] = useState(true);
  const links = [
    { to: '/', label: 'Dashboard', icon: <Icon.Home /> },
    { to: '/home', label: 'Home', icon: <Icon.Wallet /> },
    { to: '/deposit', label: 'Deposit', icon: <Icon.Upload /> },
    { to: '/withdraw', label: 'Withdraw', icon: <Icon.Download /> },
    { to: '/balance', label: 'Check Balance', icon: <Icon.check /> },
    { to: '/settings', label: 'Settings', icon: <Icon.Settings /> },
    { to: '/profile', label: 'Profile', icon: <Icon.User /> },
  ];

  return (
    <aside className={`sidebar ${open ? 'open' : 'collapsed'}`}>
      <div className='sidebar-header'>
        <div className='logo'>SB</div>
        {open && <h3>Personal-Bank</h3>}
        <button className='toggle-btn' onClick={()=>setOpen(!open)}>{open ? '⬅' : '➡'}</button>
      </div>
      <nav className='nav-links'>
        {links.map(l => (
          <NavLink key={l.to} to={l.to} className={({isActive})=>'nav-link'+(isActive?' active':'')}>
            <div className='icon'>{l.icon}</div>
            {open && <span>{l.label}</span>}
          </NavLink>
        ))}
      </nav>
    </aside>
  );
}