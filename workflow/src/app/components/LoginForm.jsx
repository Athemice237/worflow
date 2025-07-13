// src/components/LoginForm.jsx (ou .tsx)
'use client'
import React, { useState } from 'react';
import './LoginForm.css'; 
function LoginForm () {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError('');
    setLoading(true);

    
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Connexion</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="form-label">Nom d'utilisateur</label>
            <input
              type="text"
              placeholder=" Votre nom d'utilisateur "
              className="form-input"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label className="form-label">Mot de passe</label>
            <input
              type="password"
              placeholder="Votre mot de passe"
              className="form-input"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {error && <div className="error-message">{error}</div>}

          <div className="form-group"> 
            <button
              type="submit"
              className="login-button" 
              disabled={loading}
            >
             Se connecter
            </button>
          </div>
        </form>
        <p className="register-link">
          Pas encore de compte ?{' '}
          <a href="#">S'inscrire</a>
        </p>
      </div>
    </div>
  );
};

export default LoginForm;