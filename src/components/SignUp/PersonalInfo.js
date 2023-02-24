import React from 'react'

const PersonalInfo = () => {
  return (
    <div>
      <div className="inputbox">
        <input type="text" name="specialities" id="" required/>
        <span>specialities</span>
        <hr />
      </div>
      <div className="inputbox">
        <input type="text" name="experience" id="" required/>
        <span>Experience</span>
        <hr />
      </div>
      <div className="inputarea">
      <textarea name="bio" id="" cols="30" rows="3"></textarea>
        <span>Biography</span>
        <hr />
      </div>
    </div>
  )
}

export default PersonalInfo