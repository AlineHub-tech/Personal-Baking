import React, { useState } from "react";
import "../Settings.css"; // optional extra css for styling

export default function Settings() {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState("English");
  const [privacy, setPrivacy] = useState("Private");

  const handleSave = () => {
    alert("✅ Settings saved successfully!");
  };

  return (
    <div className="settings-page">
      <h2>⚙ Account Settings</h2>
      <p className="settings-sub">Manage your Personal-Bank preferences and privacy settings.</p>

      <div className="settings-section">
        <h4>🌓 Appearance</h4>
        <div className="setting-item">
          <label>Theme Mode:</label>
          <select value={darkMode ? "Dark" : "Light"} onChange={(e) => setDarkMode(e.target.value === "Dark")}>
            <option>Light</option>
            <option>Dark</option>
          </select>
        </div>
      </div>

      <div className="settings-section">
        <h4>🔔 Notifications</h4>
        <div className="setting-item">
          <label>Allow Notifications:</label>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
          />
        </div>
      </div>

      <div className="settings-section">
        <h4>🌐 Language</h4>
        <div className="setting-item">
          <label>Preferred Language:</label>
          <select value={language} onChange={(e) => setLanguage(e.target.value)}>
            <option>English</option>
            <option>Kinyarwanda</option>
            <option>French</option>
          </select>
        </div>
      </div>

      <div className="settings-section">
        <h4>🔒 Privacy</h4>
        <div className="setting-item">
          <label>Account Visibility:</label>
          <select value={privacy} onChange={(e) => setPrivacy(e.target.value)}>
            <option>Private</option>
            <option>Public</option>
            <option>Friends Only</option>
          </select>
        </div>
      </div>

      <button className="btn primary" onClick={handleSave}>💾 Save Settings</button>
    </div>
  );
}
