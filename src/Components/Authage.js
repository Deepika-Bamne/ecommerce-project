import React, { useState } from 'react';
import AuthForm from './AuthForm';

function Authage() {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({ username: '', password: '', email: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignup) {
      console.log('Signing up with data:', formData);
      alert('Sign Up successful!');
    } else {
      console.log('Logging in with data:', formData);
      alert('Login successful!');
    }
    setFormData({ username: '', password: '', email: '' });
  };

  const toggleForm = () => {
    setIsSignup(!isSignup);
    setFormData({ username: '', password: '', email: '' });
  };

  return (
    <AuthForm
      isSignup={isSignup}
      formData={formData}
      setFormData={setFormData}
      onSubmit={handleSubmit}
      toggleForm={toggleForm}
    />
  );
}

export default Authage;
