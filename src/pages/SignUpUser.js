import React, { useState } from "react";
import "../css/SignUp.css";


const SignUpUser = () => {

  const [username, setUsername] = useState("");

  const user = "Anonymous_";
  const randomUser = Math.floor(100000+Math.random()*900000);

  return (
    <div className="signup_main">
      <div className="signup_container">
      <div className="header">SIGNUP</div>
        <div className="inputbox">
          <input
            type="text"
            name="u_name"
            id=""
            required
            autoComplete="off"
            onClick={()=>{setUsername(`${user}${randomUser}`)}}

            value= {username}

            // value={FormData.name} onChange={(e)=>setFormData({...formData , name:e.target.value})}
          />
          <span>Username(Randomly generated)</span>
          <hr />
        </div>
        <div className="inputbox">
          <input type="password" name="password" id="" required />
          <span>Password</span>
          <hr />
        </div>
        <div className="inputbox">
          <input type="password" name="conf_password" id="" required />
          <span>Confirm Password</span>
          <hr />
        </div>
        <div className="btn_div">
        <button className="signup_btn" type="submit">
          Submit
        </button>
        </div>
        <div className="u_signupFooter">
        <p style={{color: '#fff'}}>Are you a doctor? <a href="docSignup/">Signup as a doctor</a></p>
        </div>
      </div>
    </div>
  );
};

export default SignUpUser;
