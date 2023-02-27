import React from 'react'

const Login = () => {
  return (
    <div className="signup_main">
      <div className="signup_container">
      <div className="header">LOGIN</div>
        <div className="inputbox">
          <input
            type="text"
            name="u_name"
            id=""
            required
            autoComplete="off"
          />
          <span>Username</span>
          <hr />
        </div>
        <div className="inputbox">
          <input type="password" name="password" id="" required />
          <span>Password</span>
          <hr />
        </div>
        <div className="btn_div">
        <button style={{marginTop:'30px'}} className="signup_btn" type="submit">
          Submit
        </button>
        </div>
      </div>
    </div>
  )
}

export default Login