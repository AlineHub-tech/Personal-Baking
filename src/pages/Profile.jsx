import React, { useState } from "react";
import "../Profile.css";

export default function Profile() {
  const [name, setName] = useState("Aline Umugwaneza");
  const [email, setEmail] = useState("aline@example.com");
  const [phone, setPhone] = useState("+250 785 123 456");
  const [bio, setBio] = useState("Frontend Developer & Designer passionate about tech and innovation.");

  const handleUpdate = () => {
    alert("✅ Profile updated successfully!");
  };

  return (
    <div className="profile-page">
      <h2>👤 My Profile</h2>
      <p className="profile-sub">View and update your personal information.</p>

      <div className="profile-card">
        <div className="profile-header">
          <img
            src="https://www.w3schools.com/howto/img_avatar.png"
            alt="Profile Avatar"
            className="profile-avatar"
          />
          <div>
            <h3>{name}</h3>
            <p className="profile-email">{email}</p>
          </div>
        </div>

        <div className="profile-section">
          <label>Full Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </div>

        <div className="profile-section">
          <label>Email Address:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>

        <div className="profile-section">
          <label>Phone Number:</label>
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>

        <div className="profile-section">
          <label>Bio:</label>
          <textarea rows="3" value={bio} onChange={(e) => setBio(e.target.value)} />
        </div>

        <button className="btn primary" onClick={handleUpdate}>💾 Update Profile</button>
      </div>
    </div>
  );
}

