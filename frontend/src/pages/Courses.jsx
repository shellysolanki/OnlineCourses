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

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFormData({ ...formData, image: reader.result }); 
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedCourses = [...courses, formData];
    setCourses(updatedCourses);
    localStorage.setItem("courses", JSON.stringify(updatedCourses));

    alert("Course added successfully!");

    setFormData({
      title: "",
      instructor: "",
      duration: "",
      image: "",
    });
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h2>Add Course</h2>

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
            placeholder="e.g. 2 hours"
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Upload Image</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ width: "100%", padding: "8px" }}
          />
          {formData.image && (
            <img
              src={formData.image}
              alt="Preview"
              style={{ marginTop: "10px", width: "120px", borderRadius: "5px" }}
            />
          )}
        </div>

        <button
          type="submit"
          style={{
            background: "#4CAF50",
            color: "white",
            padding: "10px 20px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Add Course
        </button>
      </form>

      <h3 style={{ marginTop: "40px" }}>Courses List</h3>
      {courses.length === 0 && <p>No courses added yet.</p>}

      {courses.map((course, index) => (
        <div
          key={index}
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "5px",
            display: "flex",
            gap: "15px",
            alignItems: "center",
          }}
        >
          {course.image && (
            <img
              src={course.image}
              alt={course.title}
              style={{ width: "80px", borderRadius: "5px" }}
            />
          )}
          <div>
            <h4>{course.title}</h4>
            <p>Instructor: {course.instructor}</p>
            <p>Duration: {course.duration}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Courses;