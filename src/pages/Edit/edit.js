import React from 'react';
import "../Edit/edit.css"

const StudentEdit = () => {
  return (
    <div className="student-edit-container">
      <h1 className="title">Edit Student</h1>
      <form className="student-edit-form">
        <label htmlFor="rollNo">Roll No</label>
        <input type="text" id="rollNo" name="rollNo" placeholder="Enter Roll No" required />

        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter Name" required />

        <label htmlFor="mobile">Mobile No</label>
        <input type="text" id="mobile" name="mobile" placeholder="Enter Mobile No" required />

        <button type="submit">Update Student</button>
      </form>
    </div>
  );
};

export default StudentEdit;
