import React, { useState, useEffect } from "react";

const Lessons = () => {
  const [lessons, setLessons] = useState([]);

  const [formData, setFormData] = useState({
    title: "",
    duration: "",
    video: "",
  });

  useEffect(() => {
    const storedLessons = JSON.parse(localStorage.getItem("lessons")) || [];
    setLessons(storedLessons);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const updatedLessons = [...lessons, formData];

    setLessons(updatedLessons); 

    localStorage.setItem("lessons", JSON.stringify(updatedLessons));

    alert("Lesson added successfully!");

    setFormData({
      title: "",
      duration: "",
      video: "",
    });
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", padding: "20px" }}>
      <h2>Add Lesson</h2>

      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: "15px" }}>
          <label>Lesson Title</label>
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
          <label>Duration</label>
          <input
            type="text"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            placeholder="e.g. 10 minutes"
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label>Video URL</label>
          <input
            type="url"
            name="video"
            value={formData.video}
            onChange={handleChange}
            placeholder="https://youtube.com/..."
            required
            style={{ width: "100%", padding: "8px" }}
          />
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
          Add Lesson
        </button>
      </form>


      {/* <h3 style={{ marginTop: "40px" }}>Lessons List</h3>

      {lessons.map((lesson, index) => (
        <div
          key={index} 
          style={{
            border: "1px solid #ddd",
            padding: "15px",
            marginBottom: "10px",
            borderRadius: "5px",
          }}
        >
          <h4>{lesson.title}</h4>
          <p>Duration: {lesson.duration}</p>
          <a href={lesson.video} target="_blank" rel="noreferrer">
            Watch Video
          </a>
        </div>
      ))} */}



    </div>
  );
};

export default Lessons;