import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AuthForm from './AuthForm';

function AuthPage() {
  const navigate = useNavigate();
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignup) {
      localStorage.setItem(
        'user',
        JSON.stringify({
          username: formData.username,
          password: formData.password,
          email: formData.email,
        })
      );
      alert('Signup successful! Please login.');
      setIsSignup(false);
    } else {
      const storedUser = JSON.parse(localStorage.getItem('user'));
      if (
        storedUser &&
        storedUser.username === formData.username &&
        storedUser.password === formData.password
      ) {
        alert('Login successful!');
        navigate('/home');
      } else {
        alert('Invalid username or password');
      }
    }

    setFormData({ username: '', password: '', email: '' });
  };

  const toggleForm = () => {
    setIsSignup(!isSignup);
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

export default AuthPage;
