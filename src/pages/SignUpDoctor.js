import React, { useEffect, useState } from "react";
import ContactInfo from "../components/SignUp/ContactInfo";
import JobInfo from "../components/SignUp/JobInfo";
import PersonalInfo from "../components/SignUp/PersonalInfo";
import Registration from "../components/SignUp/Registration";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import "../css/SignUp.css";

const SignUpDoctor = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState(0);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    jobtitle: "",
    hospital: "",
    qualification: "",
    speciality: "",
    experience: "",
    biography: "",
    mobno: "",
    address: "",
  });

  useEffect(() => {
    if (localStorage.getItem("doctoken")) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    console.log(formData);
    const url = `${process.env.REACT_APP_HOST}/doctor/signup`;
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
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

  const FormTitles = ["SignUp", "Job Info", "Personal Info", "Contact Info"];

  const displayContents = () => {
    if (page === 0) {
      return <Registration formData={formData} handleChange={handleChange} />;
    }
    if (page === 1) {
      return <JobInfo formData={formData} handleChange={handleChange} />;
    }
    if (page === 2) {
      return <PersonalInfo formData={formData} handleChange={handleChange} />;
    } else {
      return <ContactInfo formData={formData} handleChange={handleChange} />;
    }
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        backgroundColor: "#23242a",
      }}
    >
      <div className="form">
        <div className="progressbar">
          <div
            style={{
              width:
                page === 0
                  ? "25%"
                  : page === 1
                  ? "50%"
                  : page === 2
                  ? "75%"
                  : "100%",
            }}
          ></div>
        </div>
        <div className="form_container">
          <div className="header">{FormTitles[page]}</div>
          <div className="body">{displayContents()}</div>
          <div className="footer">
            <button
              className="btn"
              disabled={page === 0}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              Prev
            </button>
            <button
              className="btn"
              // disabled={page === FormTitles.length - 1}
              onClick={() => {
                if (page === FormTitles.length - 1) {
                  handleSubmit();
                } else {
                  setPage((currPage) => currPage + 1);
                }
              }}
            >
              {page === FormTitles.length - 1 ? "Submit" : "Next"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpDoctor;
