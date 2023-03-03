import React from "react";
import "../../css/SignUp.css";

const Registration = ({ formData, handleChange }) => {
  return (
    <div>
      <div className="inputbox">
        <input
          type="text"
          name="name"
          required
          autoComplete="off"
          value={formData.name}
          onChange={(e) => handleChange(e)}
        />
        <span>Name</span>
        <hr />
      </div>
      <div className="inputbox">
        <input
          type="text"
          name="email"
          required
          autoComplete="off"
          value={formData.email}
          onChange={(e) => handleChange(e)}
        />
        <span>Email id</span>
        <hr />
      </div>
      <div className="inputbox">
        <input
          type="password"
          name="password"
          required
          value={formData.password}
          onChange={(e) => handleChange(e)}
        />
        <span>Password</span>
        <hr />
      </div>
    </div>
  );
};

export default Registration;
