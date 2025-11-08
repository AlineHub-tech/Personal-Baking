import React from 'react';
import '../index.css';
export default function ThemeToggle({ dark, setDark }) {
  return (
    <div style={{ display: 'flex', gap: 8 }}>
      <button className='btn' onClick={() => setDark(false)}>Light</button>
      <button className='btn' onClick={() => setDark(true)}>Dark</button>
    </div>
  );
}