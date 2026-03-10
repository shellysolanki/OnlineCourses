
import React, { useState, useEffect } from "react";

const Courses = () => {
  const [courses, setCourses] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    instructor: "",
    duration: "",
    image: "",
  });

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
    setCourses(storedCourses);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedCourses = [...courses, formData];

    setCourses(updatedCourses);
    
    localStorage.setItem("courses", JSON.stringify(updatedCourses));

    alert("Course submitted successfully!");

    setFormData({
      title: "",
      instructor: "",
      duration: "",
      image: "",
    });
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <h2>Add New Course</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Course Title</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Instructor</label>
          <input
            type="text"
            name="instructor"
            value={formData.instructor}
            onChange={handleChange}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Duration</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
            placeholder="e.g. 5 weeks"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Image URL</label>
          <input
            type="url"
            name="image"
            value={formData.image}
            onChange={handleChange}
            required
            placeholder="https://example.com/image.jpg"
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <button
          type="submit"
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Save Course
        </button>
      </form>
    </div>
  );
};

export default Courses;