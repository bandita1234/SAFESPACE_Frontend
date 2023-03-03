import React, { useContext, useEffect } from "react";
import "../css/docProfile.css";
import { UserContext } from "../context/userState";

const DocProfile = () => {
  const userCtx = useContext(UserContext);
  useEffect(() => {
    if (localStorage.getItem("token")) userCtx.fetchUser();
    else if (localStorage.getItem("doctoken")) userCtx.fetchDoc();
  }, []);
  console.log(userCtx.doc);
  return (
    <div className="main_profile">
      <div className="profile_details">
        <div className="l_profile">
          <div className="img_div">
            <img
              src="https://images.unsplash.com/photo-1619895862022-09114b41f16f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZmlsZSUyMHBpY3R1cmV8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
              alt=""
            />
          </div>
          <div className="name_title">
            <h3>{userCtx.doc.name}</h3>
            <p>{userCtx.doc.jobtitle}</p>
          </div>
          <div className="bio">
            <h2>BIOGRAPHY</h2>
            <p>{userCtx.doc.biography}</p>
          </div>
        </div>
        <div className="r_profile">
          <div className="details_div">
            <h2>PROFILE</h2>
            <div className="title">
              <h3>{userCtx.doc.name}</h3>
              <p>{userCtx.doc.jobtitle}</p>
            </div>
            <div className="qualification">
              <p>{userCtx.doc.qualification}</p>
              <p>{userCtx.doc.hospital}</p>
            </div>
          </div>
          <div className="experince">
            <h2>EXPERIENCE</h2>
            <p>{userCtx.doc.experience} years</p>
          </div>
          <div className="contact">
            <h2>CONTACT</h2>
            <p>Ph- {userCtx.doc.mobno}</p>
            <p>Email- {userCtx.doc.email}</p>
            <p style={{ marginTop: "10px" }}>Adress- {userCtx.doc.address}</p>
          </div>
        </div>
      </div>
      <div className="posts_details">
        <h2>POSTS</h2>
      </div>
    </div>
  );
};

export default DocProfile;
