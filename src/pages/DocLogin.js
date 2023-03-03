import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const DocLogin = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
    cpassword: "",
  });
  useEffect(() => {
    if (localStorage.getItem("doctoken")) {
      //   console.log(localStorage.getItem("doctoken"));
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    const url = `${process.env.REACT_APP_HOST}/doctor/login`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: form.email,
        password: form.password,
      }),
    });
    const json = await response.json();
    console.log(json);
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
      localStorage.setItem("doctoken", json.token);
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
            type="email"
            name="email"
            onChange={(e) => handleChange(e)}
            value={form.email}
            autoComplete="off"
          />
          <span>Email</span>
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
        <div className="u_signupFooter">
          <p>
            Not registered yet ? <a href="/usersignup/">Register here!</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default DocLogin;
