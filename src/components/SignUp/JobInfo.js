import React from "react";

const JobInfo = ({ formData, handleChange }) => {
  return (
    <div>
      <div className="inputbox">
        <input
          type="text"
          name="jobtitle"
          id=""
          required
          value={formData.jobtitle}
          onChange={(e) => handleChange(e)}
        />
        <span>Job Title</span>
        <hr />
      </div>
      <div className="inputbox">
        <input
          type="text"
          name="hospital"
          id=""
          required
          value={formData.hospital}
          onChange={(e) => handleChange(e)}
        />
        <span>Hospital Name</span>
        <hr />
      </div>
      <div className="inputbox">
        <input
          type="text"
          name="qualification"
          id=""
          required
          value={formData.qualification}
          onChange={(e) => handleChange(e)}
        />
        <span>Qualification</span>
        <hr />
      </div>
    </div>
  );
};

export default JobInfo;
