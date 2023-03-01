import React, { useEffect, useState } from "react";
import "../css/SignUp.css";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const SignUpUser = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
    cpassword: "",
  });

  // const user = "Anonymous_";
  // const randomUser = Math.floor(100000 + Math.random() * 900000);

  useEffect(() => {
    if (localStorage.getItem("token")) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    const url = `${process.env.REACT_APP_HOST}/user/signup`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: form.username,
        password: form.password,
      }),
    });
    const json = await response.json();
    if (response.status === 200) {
      toast.success(json.message, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: "signup-success",
      });
      navigate("/user/login");
    } else {
      toast.error(json.message, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: "signup-failure",
      });
    }
  };

  return (
    <div className="signup_main">
      <div className="signup_container">
        <div className="header">SIGNUP</div>
        <div className="inputbox">
          <input
            type="text"
            name="username"
            onChange={(e) => handleChange(e)}
            autoComplete="off"
            // onClick={() => {
            //   setUsername(`${user}${randomUser}`);
            // }}
            value={form.username}
          />
          <span>Username</span>
          <hr />
        </div>
        <div className="inputbox">
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={(e) => handleChange(e)}
          />
          <span>Password</span>
          <hr />
        </div>
        <div className="inputbox">
          <input
            type="password"
            name="cpassword"
            value={form.cpassword}
            onChange={(e) => handleChange(e)}
          />
          <span>Confirm Password</span>
          <hr />
        </div>
        <div className="btn_div">
          <button className="signup_btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
        <div className="u_signupFooter">
          <p style={{ color: "#fff" }}>
            Are you a doctor? <a href="docSignup/">Signup as a doctor</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUpUser;
