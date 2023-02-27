import React from "react";
import "../css/docProfile.css";

const DocProfile = () => {
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
            <h3>Dr. Karen Dawson</h3>
            <p>Psychologist</p>
          </div>
          <div className="bio">
            <h2>BIOGRAPHY</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sapiente
              recusandae hic debitis dolores veritatis? Id sit accusantium
              expedita modi commodi.
            </p>
          </div>
        </div>
        <div className="r_profile">
          <div className="details_div">
            <h2>PROFILE</h2>
            <div className="title">
              <h3>Dr. Karen Dawson</h3>
              <p>Psychologist</p>
            </div>
            <div className="qualification">
              <p>M.S,M.Ch (pSYCHOLOGY)</p>
              <p>Medic General Medical Hospital,Texas,USA</p>
            </div>
          </div>
          <div className="experince">
            <h2>EXPERIENCE</h2>
            <p>22 Years+</p>
          </div>
          <div className="contact">
            <h2>CONTACT</h2>
            <p>Ph- 1234567789</p>
            <p>Email- abc@gmail.com</p>
            <p style={{marginTop:'10px'}}>
              Adress- Lorem, ipsum dolor sit amet consectetur adipisicing elit.{" "}
            </p>
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
