import React from 'react';
import "../Add/add.css"

const StudentAdd = () => {
  return (
    <div className="student-add-container">
      <h1 className="title">Add Student</h1>
      <form className="student-add-form">
        <label htmlFor="rollNo">Roll No</label>
        <input type="text" id="rollNo" name="rollNo" placeholder="Enter Roll No" required />

        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" placeholder="Enter Name" required />

        <label htmlFor="mobile">Mobile No</label>
        <input type="text" id="mobile" name="mobile" placeholder="Enter Mobile No" required />

        <button type="submit">Add Student</button>
      </form>
    </div>
  );
};

export default StudentAdd;
