import React, { useEffect, useState } from "react";

const UserDashboard = () => {
  const [user, setUser] = useState(null);
  const [courses, setCourses] = useState([]);

  const [activePage, setActivePage] = useState("courses");

  useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem("user"));
    setUser(savedUser);

    const savedCourses = JSON.parse(localStorage.getItem("courses")) || [];
    setCourses(savedCourses);
  }, []);

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      
      <div
        style={{
          width: "290px",
          background: "#1f2937",
          color: "white",
          padding: "50px",
        }}
      >
        <br/>
        <h2>User Panel</h2><br/>

        <ul style={{ listStyle: "none", padding: 0 }}>
          <li
            style={{ cursor: "pointer", margin: "10px 0" }}
            onClick={() => setActivePage("courses")}
          >
            Course Listing
          </li>

          <li
            style={{ cursor: "pointer", margin: "10px 0" }}
            onClick={() => setActivePage("paid")}
          >
            Paid Courses
          </li>

          <li
            style={{ cursor: "pointer", margin: "10px 0" }}
            onClick={() => setActivePage("details")}
          >
            Course Details
          </li>

          <li
            style={{ cursor: "pointer", margin: "10px 0" }}
            onClick={() => setActivePage("lessons")}
          >
            Lesson Videos
          </li>
        </ul>
      </div>

      <div style={{ flex: 1, padding: "20px" }}>
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
              <ul>
                {courses.map((c, i) => (
                  <li key={i}>
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
            <p>User ke purchased courses yaha show honge.</p>
          </>
        )}

        {activePage === "details" && (
          <>
            <h3>Course Details</h3>
            <p>Kisi course ki detailed information yaha show hogi.</p>
          </>
        )}

        {activePage === "lessons" && (
          <>
            <h3>Lesson Videos</h3>
            <video width="500" controls>
              <source src="/lesson.mp4" type="video/mp4" />
            </video>
          </>
        )}
      </div>
    </div>
  );
};

export default UserDashboard;