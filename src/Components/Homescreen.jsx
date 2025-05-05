import React from 'react';

function Homescreen(){
  return(
    <div>
      <div className="login-main">
        <h1>LOGIN</h1>
          <label>Username</label>
          <input placeholder="Enter username"></input>
          <label>Password</label>
          <input placeholder="Enter password"></input>
          <button>Login</button>
      </div>
    </div>
  )
}

export default Homescreen;