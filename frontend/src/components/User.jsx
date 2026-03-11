
import React, { useEffect, useState } from "react";

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);
  const [activePage, setActivePage] = useState("courses");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    setUser(savedUser);

    const savedCourses = JSON.parse(localStorage.getItem("courses")) || [];
    setCourses(savedCourses);
  }, []);

  const sidebar = (
    <div
      style={{
        width: isMobile ? "100%" : "250px",
        background: "#1f2937",
        color: "white",
        padding: "30px",
        position: isMobile ? "absolute" : "relative",
        top: 0,
        left: isMobile ? (showSidebar ? 0 : "-100%") : 0,
        height: "100vh",
        transition: "left 0.3s",
        zIndex: 1000,
      }}
    >
      <h2>User Panel</h2>
      <ul style={{ listStyle: "none", padding: 0, marginTop: "20px" }}>
        <li style={{ cursor: "pointer", margin: "10px 0" }} onClick={() => {setActivePage("courses"); setShowSidebar(false);}}>
          Course Listing
        </li>
        <li style={{ cursor: "pointer", margin: "10px 0" }} onClick={() => {setActivePage("paid"); setShowSidebar(false);}}>
          Paid Courses
        </li>
        <li style={{ cursor: "pointer", margin: "10px 0" }} onClick={() => {setActivePage("details"); setShowSidebar(false);}}>
          Course Details
        </li>
        <li style={{ cursor: "pointer", margin: "10px 0" }} onClick={() => {setActivePage("lessons"); setShowSidebar(false);}}>
          Lesson Videos
        </li>
      </ul>
    </div>
  );

  return (
    <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", minHeight: "100vh", position: "relative" }}>
      
      {isMobile && (
        <button
          onClick={() => setShowSidebar(!showSidebar)}
          style={{
            position: "fixed",
            top: 20,
            left: 20,
            zIndex: 1100,
            background: "#1f2937",
            color: "white",
            border: "none",
            padding: "10px 15px",
            fontSize: "20px",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          ☰
        </button>
      )}

      {sidebar}

      <div style={{ flex: 1, padding: "20px", marginLeft: !isMobile ? 0 : 0 }}><br/><br/><br/>
        <h2>User Dashboard</h2>
        {user ? (
          <p>
            Welcome, <strong>{user.name}</strong>
          </p>
        ) : (
          <p>No user logged in</p>
        )}

        {activePage === "courses" && (
          <>
            <h3>Available Courses</h3>
            {courses.length > 0 ? (
              <ul style={{ padding: 0 }}>
                {courses.map((c, i) => (
                  <li key={i} style={{ marginBottom: "10px" }}>
                    <strong>{c.title}</strong> - {c.description} (${c.price})
                  </li>
                ))}
              </ul>
            ) : (
              <p>No courses available yet.</p>
            )}
          </>
        )}

        {activePage === "paid" && (
          <>
            <h3>Paid Courses</h3>
            <p>No courses purchased yet.</p>
          </>
        )}

        {activePage === "details" && (
          <>
            <h3>Course Details</h3>
            <p>No details</p>
          </>
        )}

        {activePage === "lessons" && (
          <>
            <h3>Lesson Videos</h3>
            <video style={{ width: "100%", maxWidth: "500px" }} controls>
              <source src="/lesson.mp4" type="video/mp4" />
            </video>
          </>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;

