import React from "react";
import '../css/userProfile.css'

const UserProfile = () => {
  return (
    <div className="main_profile">
      <div className="user_details">
        <div className="user_img">
          <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png" alt="user_image" />
        </div>
        <div className="user_name">
          <p>Lorem ipsum.</p>
        </div>
      </div>
      <div className="posts_details">
      <h2>POSTS</h2>
      </div>
    </div>
  );
};

export default UserProfile;
