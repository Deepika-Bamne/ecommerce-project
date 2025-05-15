import React from 'react';
import InputField from './InputField';

const AuthForm = ({ isSignup, formData, setFormData, onSubmit, toggleForm }) => {
  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>{isSignup ? 'Sign Up' : 'Login'}</h2>
        <form className="auth-form" onSubmit={onSubmit}>
          <InputField
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />
          <InputField
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />
          {isSignup && (
            <InputField
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          )}
          <button type="submit" className="submit-btn">
            {isSignup ? 'Sign Up' : 'Login'}
          </button>
        </form>
        <p>
          <button type="button" className="toggle-btn" onClick={toggleForm}>
            {isSignup ? 'Already have an account? Login' : "Don't have an account? Sign Up"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default AuthForm;
