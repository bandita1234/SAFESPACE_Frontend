import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    username: "",
    password: "",
    cpassword: "",
  });

  useEffect(() => {
    if (localStorage.getItem("token")) {
      console.log(localStorage.getItem("token"));
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    const url = `${process.env.REACT_APP_HOST}/user/login`;
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
    console.log(json.token);
    if (response.status === 200) {
      toast.success(json.message, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: "login-success",
      });
      localStorage.setItem("token", json.token);
      navigate("/");
    } else {
      toast.error(json.message, {
        position: "bottom-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        toastId: "login-failure",
      });
    }
  };
  return (
    <div className="signup_main">
      <div className="signup_container">
        <div className="header">LOGIN</div>
        <div className="inputbox">
          <input
            type="text"
            name="username"
            onChange={(e) => handleChange(e)}
            value={form.username}
            autoComplete="off"
          />
          <span>Username</span>
          <hr />
        </div>
        <div className="inputbox">
          <input
            type="password"
            name="password"
            onChange={(e) => handleChange(e)}
            value={form.password}
          />
          <span>Password</span>
          <hr />
        </div>
        <div className="btn_div">
          <button
            style={{ marginTop: "30px" }}
            className="signup_btn"
            onClick={handleSubmit}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
