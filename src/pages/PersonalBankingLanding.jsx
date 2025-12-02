import React from "react";
import { Link } from 'react-router-dom';
import {
  FaUserCircle,
  FaPiggyBank,
  FaExchangeAlt,
  FaWallet,
  FaShieldAlt,
} from "react-icons/fa";
// import Dashboard from './pages/Dashboard';
import "../personalBanking.css";

export default function PersonalBankingLanding() {
  return (
    <div className="pb-container">
      {/* NAVBAR */}
      <header className="pb-navbar">
        <div className="pb-logo">
          <FaWallet className="pb-logo-icon" />
          <h1>PersonaltBank</h1>
        </div>

        <nav className="pb-menu">
          <a href="#features">Features</a>
          <a href="#accounts">Accounts</a>
          <a href="#pricing">Pricing</a>
          <a href="#contact">Contact</a>
         
        </nav>

        <div className="pb-mobile-menu">☰</div>
      </header>

      {/* HERO */}
      <section className="pb-hero">
        <div className="pb-hero-left">
          <h2>Personal banking built for your life</h2>
          <p>
            Manage accounts, send money instantly, save automatically and
            protect your finances — all in one beautiful platform.
          </p>

          <div className="pb-hero-buttons">
            <button className="pb-btn-primary">Create free account</button>
             <button className="pb-btn-primary"><Link to='/dashboard'>Get Started</Link></button>
            <button className="pb-btn-outline">Learn more</button>
          </div>

          <div className="pb-feature-badges">
            <div className="pb-badge">
              <FaShieldAlt />
              <div>
                <h4>Bank-level security</h4>
                <span>2FA · Encryption</span>
              </div>
            </div>

            <div className="pb-badge pulse">
              <FaExchangeAlt />
              <div>
                <h4>Instant transfers</h4>
                <span>Fast & reliable</span>
              </div>
            </div>

            <div className="pb-badge">
              <FaPiggyBank />
              <div>
                <h4>Auto-savings</h4>
                <span>Smart goals</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Mockup */}
        <div className="pb-hero-mockup">
          <div className="pb-card-main">
            <div className="pb-card-header">
              <div>
                <span className="pb-label">Primary</span>
                <h3>RWX •••• 1245</h3>
              </div>

              <div className="pb-balance">
                <span className="pb-label">Balance</span>
                <h2>RWF 1,245,600</h2>
              </div>
            </div>

            <div className="pb-transactions">
              <div className="pb-item">
                <span className="pb-label">Recent</span>
                <p>Transfer • RWF 10,000</p>
              </div>

              <div className="pb-item">
                <span className="pb-label">Savings</span>
                <p>Goal • RWF 300,000</p>
              </div>
            </div>

            <div className="pb-actions">
              <button className="pb-btn-primary">Send</button>
              <button className="pb-btn-outline">Request</button>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="pb-features">
        <h2>Why people love SmartBank</h2>
        <p>Clean UX, fast transactions and powerful tools.</p>

        <div className="pb-feature-grid">
          <div className="pb-feature-card">
            <FaUserCircle className="pb-feature-icon" />
            <h4>Personalized Accounts</h4>
            <p>Create multiple smart accounts.</p>
          </div>

          <div className="pb-feature-card">
            <FaExchangeAlt className="pb-feature-icon" />
            <h4>Fast Transfers</h4>
            <p>Send money instantly anywhere.</p>
          </div>

          <div className="pb-feature-card">
            <FaPiggyBank className="pb-feature-icon" />
            <h4>Smart Savings</h4>
            <p>Grow your money automatically.</p>
          </div>

          <div className="pb-feature-card">
            <FaShieldAlt className="pb-feature-icon" />
            <h4>Top Security</h4>
            <p>Encryption & fraud protection.</p>
          </div>
        </div>
      </section>

      {/* ACCOUNTS */}
      <section id="accounts" className="pb-accounts">
        <h2>Accounts & Features</h2>
        <p>Pick an account that fits your needs.</p>

        <div className="pb-card-grid">
          <div className="pb-account-card">
            <FaWallet className="pb-icon-lg" />
            <h3>Everyday Account</h3>
            <p>Perfect for daily spending.</p>
            <button className="pb-btn-primary">Open</button>
          </div>

          <div className="pb-account-card">
            <FaPiggyBank className="pb-icon-lg" />
            <h3>Savings Account</h3>
            <p>Grow money with smart goals.</p>
            <button className="pb-btn-primary">Start Saving</button>
          </div>

          <div className="pb-account-card">
            <FaExchangeAlt className="pb-icon-lg" />
            <h3>Payments & Transfers</h3>
            <p>Fast and secure money movement.</p>
            <button className="pb-btn-primary">Send Money</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contact" className="pb-footer">
        <p>© {new Date().getFullYear()} SmartBank — All rights reserved.</p>
      </footer>
    </div>
  );
}
