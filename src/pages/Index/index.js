import React from 'react';
import "../Index/index.css"


const StudentList = () => {
  return (
    <div className="student-list-container">
      <h1 className="title"> MCA Student Data List</h1>
      <div className="button-container">
        <button className="add">Add</button>
      </div>
      <table className="student-list-table">
        <thead>
          <tr>
            <th>Roll No</th>
            <th>Name</th>
            <th>Mobile No</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>23MCA001</td>
            <td>Abisheck Kumar J</td>
            <td>7603984379</td>
            <td>
              <button className="edit">Edit</button>
              <button className="delete">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default StudentList;
