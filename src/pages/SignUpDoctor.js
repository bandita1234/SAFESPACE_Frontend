import React, { useState } from "react";
import ContactInfo from "../components/SignUp/ContactInfo";
import JobInfo from "../components/SignUp/JobInfo";
import PersonalInfo from "../components/SignUp/PersonalInfo";
import Registration from "../components/SignUp/Registration";

import '../css/SignUp.css'

const SignUpDoctor = () => {
  const [page, setPage] = useState(0);

  // const [formData, setFormData] = useState({
  //   name : "",
  //   email : "",
  //   password : "",
  //   job_title : "",
  //   hospital_name : "",
  //   qualification : "",
  //   specialities : "",
  //   experience : "",
  //   bio : "",
  //   mob_no : "",
  //   addr : ""
  // })

  const FormTitles = [
    "SignUp",
    "Job Info",
    "Personal Info",
    "Contact Info",
  ];

  const displayContents = () => {
    if (page === 0) {
      return <Registration/>;
    }
    if (page === 1) {
      return <JobInfo/>;
    }
    if (page === 2) {
      return <PersonalInfo/>;
    } else {
      return <ContactInfo/>;
    }
  };
  return (
    <div style={{display:'flex',
      justifyContent:'center',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#23242a'}} >

    <div className="form">
      <div className="progressbar">
      <div style={{ width: page===0 ?'25%' : page===1 ?'50%' : page===2 ?'75%':'100%' }}></div>
      </div>
      <div className="form_container">
        <div className="header">{FormTitles[page]}</div>
        <div className="body">{displayContents()}</div>
        <div className="footer">
          <button className="btn"
            disabled={page === 0}
            onClick={() => {
              setPage((currPage) => currPage - 1);
            }}
          >
            Prev
          </button>
          <button className="btn"
            // disabled={page === FormTitles.length - 1}
            onClick={() => {
              if(page === FormTitles.length - 1){
                alert("Registration Successful!");
              }else{
                setPage((currPage) => currPage + 1);
              }
            }}
          >
           {page === FormTitles.length - 1 ? "Submit" : "Next" }
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default SignUpDoctor;
