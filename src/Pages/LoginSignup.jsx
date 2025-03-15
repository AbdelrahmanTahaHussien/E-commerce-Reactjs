import React from 'react'
import './CSS/LoginSignup.css'

export const LoginSignup = () => {
  return (
    <div className='loginsignup'>
        <div className="loginsignup-container">
          <h1>Sign Up</h1>
          <div className="loginsignup-fields">
            <input type="text" placeholder='Your Name' />
            <input type="email" placeholder='Email Address' />
            <input type="password" placeholder='Password' />
          </div>
          <button>Continue</button>
          <p className="loginsignup-login">
            Already Have an account? <span>Login Here</span>
            <div className="loginsignup-agree">
              <input type="Checkbox" name='' id='' />
              <p>By Continuing, I agree to terms of use & privacy policy.</p>
            </div>
          </p>
        </div>
    </div>
  )
}
