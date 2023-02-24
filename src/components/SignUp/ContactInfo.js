import React from 'react'

const ContactInfo = () => {
  return (
    <div>
      <div className="inputbox">
        <input type="text" name="mob_no" id="" required />
        <span>Mobile Number</span>
        <hr />
      </div>
      <div className="inputarea">
        <textarea name="addr" id="" cols="30" rows="3"></textarea>
        <span>Address</span>
        <hr />
      </div>
    </div>
  )
}

export default ContactInfo