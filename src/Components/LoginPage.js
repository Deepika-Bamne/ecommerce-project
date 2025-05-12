import React, { useState } from 'react';

function AuthPage() {
  const [isSignup, setIsSignup] = useState(false); 
  const [getsignin, setgetsignin] = useState([]);


  return (
    <div className="auth-container">
      <div className="auth-box">
       
        {!isSignup && (
          <>
            <h2>Login</h2>
            <form className="auth-form" method="POST">
              <input onChange={(e)=>setgetsignin(e.target.value)} type="text" name="username" placeholder="Username" required />
              <input onChange={(e)=>setgetsignin(e.target.value)} type="password" name="password" placeholder="Password" required />
              <button onClick={()=>{}} type="submit">Login</button>
            </form>
            <p>
             
              <button className="toggle-btn" onClick={() => setIsSignup(true)}>
                Sign Up
              </button>
            </p>
          </>
        )}

        
        {isSignup && (
          <>
            <h2>Sign Up</h2>
            <form className="auth-form" method="POST">
              <input type="text" name="username" placeholder="Username" required />
              <input type="password" name="password" placeholder="Password" required />
              <input type="email" name="email" placeholder="Email" required />
              <button type="submit">Sign Up</button>
            </form>
            <p>
            
              <button className="toggle-btn" onClick={() => setIsSignup(false)}>
                Login
              </button>
            </p>
          </>
        )}

        
        <form method="POST">
          <button type="submit" className="logout-btn">Logout</button>
        </form>
      </div>
    </div>
  );
}

export default AuthPage;
