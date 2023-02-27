import React from "react";
import '../../css/SignUp.css'

const Registration = ({formData,setFormData}) => {
  return (
    <div>
      <div className="inputbox">
        <input type="text" name="name" id="" required autoComplete="off"
        // value={FormData.name} onChange={(e)=>setFormData({...formData , name:e.target.value})} 
        />
        <span>Name</span>
        <hr />
      </div>
      <div className="inputbox">
        <input type="text" name="email" id="" required autoComplete="off" />
        <span>Email id</span>
        <hr />
      </div>
      <div className="inputbox">
        <input type="password" name="password" id="" required/>
        <span>Password</span>
        <hr />
      </div>
    </div>
  );
};


export default Registration;
