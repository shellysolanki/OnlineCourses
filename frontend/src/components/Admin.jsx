

import React from "react";
import { Link } from "react-router-dom";
import courses from "../pages/Courses.jsx";
import CourseAdminList from "../pages/DisplayCourseAdmin.jsx";

const Admin = () => {
  return (
    <div className="admin-container" style={{ display: "flex", height: "100vh" }}>
      
      <div
        className="sidebar"
        style={{
          width: "320px",
          background: "#2c3e50",
          color: "#fff",
          padding: "50px",
        }}
      ><br/>
        <h2>Admin Panel</h2><br/>
        <ul style={{ listStyle: "none", padding: 0 }}>
          <li style={{ margin: "15px 0" }}>
            <Link to="/courses" style={{ color: "#fff", textDecoration: "none" }}>
              ➕ Add Courses
            </Link>
          </li>
          <li style={{ margin: "15px 0" }}>
            <Link to="/showcourses" style={{ color: "#fff", textDecoration: "none" }}>
              📚 Course List Management
            </Link>
          </li>
          <li style={{ margin: "15px 0" }}>
            <Link to="/lessons" style={{ color: "#fff", textDecoration: "none" }}>
              📝 Add Lessons
            </Link>
          </li>
        </ul>
      </div>

      
      <div className="main-content" style={{ flex: 1, padding: "20px" }}>
        <h1>Welcome to Admin Dashboard</h1>
        <p>Select an option from the sidebar to manage courses and lessons.</p>
      </div>
    </div>
  );
};

export default Admin;