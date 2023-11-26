import React from 'react';
import '../components/login.css';
import { Link } from 'react-router-dom';


function Login() {
 
  return (
    <div className='im' >
      <div></div>
    <div >
        
    <div className="logmain" >
      <div className="login">
        <form >
          <label htmlFor="chk" aria-hidden="true">
            Login
          </label>
         
          <input
          className='in'
          style={{padding:'20px 20px'}}
            type="email"
            name="email"
            placeholder="Email"
         
            required
          />
          <input
           className='in'
           style={{padding:'20px 20px'}}
            type="password"
            name="password"
            placeholder="Password"
            required
          />
          <button className="logbut"><Link to='/home' style={{ textDecoration: 'none',color:'whitesmoke' }}>Login</Link></button>
          <h5 className='reg1'>
          <Link to="/" style={{ textDecoration: 'none' }}>
            Don't have an account? Register
          </Link></h5>
          
        </form>
      </div>
    </div>
  </div></div>
  );
}


export default Login;
