import React from "react";

const ContactInfo = ({ formData, handleChange }) => {
  return (
    <div>
      <div className="inputbox">
        <input
          type="text"
          name="mobno"
          id=""
          required
          value={formData.mobno}
          onChange={(e) => handleChange(e)}
        />
        <span>Mobile Number</span>
        <hr />
      </div>
      <div className="inputarea">
        <textarea
          name="address"
          cols="30"
          rows="3"
          value={formData.address}
          onChange={(e) => handleChange(e)}
        ></textarea>
        <span>Address</span>
        <hr />
      </div>
    </div>
  );
};

export default ContactInfo;
