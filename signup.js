import React from 'react';
import '../components/signup.css';
import { Link } from 'react-router-dom';
function Registration() {
 
  return (
    <>    
    <div className="logmain">
      <div className="login">
        <form >
          <label htmlFor="chk" aria-hidden="true">
            Register
          </label>
          <input
              style={{padding:'20px 20px'}}
            type="text"
            name="name"
            placeholder="Username"
           
            required
          />
          <input
            style={{padding:'20px 20px'}}
            type="email"
            name="email"
            placeholder="Email"
         
            required
          />
          <input
            type="password"
            style={{padding:'20px 20px'}}
            name="password"
            placeholder="Password"
            required
          />
          <button className="logbut">Register Now</button>
              

          <Link to="/login"  style={{ textDecoration:'none' }}>
              <h5 className='reg'>Already have an account? Click on login</h5>
            </Link>
          
        </form>
      </div>
    </div>
  </>
  );
}


export default Registration;
