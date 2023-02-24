import React from 'react'

const JobInfo = () => {
  return (
    <div>
      <div className="inputbox">
        <input type="text" name="job_title" id="" required />
        <span>Job Title</span>
        <hr />
      </div>
      <div className="inputbox">
        <input type="text" name="hospital_name" id="" required />
        <span>Hospital Name</span>
        <hr />
      </div>
      <div className="inputbox">
        <input type="text" name="qualification" id="" required />
        <span>Qualification</span>
        <hr />
      </div>
    </div>
  )
}

export default JobInfo;