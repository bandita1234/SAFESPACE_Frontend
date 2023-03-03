import React from "react";

const PersonalInfo = ({ formData, handleChange }) => {
  return (
    <div>
      <div className="inputbox">
        <input
          type="text"
          name="speciality"
          id=""
          required
          value={formData.speciality}
          onChange={(e) => handleChange(e)}
        />
        <span>specialities</span>
        <hr />
      </div>
      <div className="inputbox">
        <input
          type="text"
          name="experience"
          id=""
          required
          value={formData.experience}
          onChange={(e) => handleChange(e)}
        />
        <span>Experience</span>
        <hr />
      </div>
      <div className="inputarea">
        <textarea
          name="biography"
          cols="30"
          rows="3"
          value={formData.biography}
          onChange={(e) => handleChange(e)}
        ></textarea>
        <span>Biography</span>
        <hr />
      </div>
    </div>
  );
};

export default PersonalInfo;
