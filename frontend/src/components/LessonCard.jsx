import React, { useEffect, useState } from "react";

const getYouTubeThumbnail = (url) => {
  try {
    const urlObj = new URL(url);
    const videoId = urlObj.searchParams.get("v");
    if (videoId) {
      return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
    }
    return null;
  } catch (err) {
    return null;
  }
};

const LessonsCard = () => {
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    const storedLessons = JSON.parse(localStorage.getItem("lessons")) || [];
    setLessons(storedLessons);
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center", marginTop: "20px" }}>
      {lessons.length === 0 ? (
        <p>No lessons available.</p>
      ) : (
        lessons.map((lesson, index) => {
          const thumbnail = getYouTubeThumbnail(lesson.video);

          return (
            <div
              key={index}
              style={{
                border: "1px solid #ddd",
                borderRadius: "8px",
                padding: "15px",
                width: "300px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              {thumbnail ? (
                <img
                  src={thumbnail}
                  alt={lesson.title}
                  style={{ width: "100%", borderRadius: "5px", marginBottom: "10px" }}
                />
              ) : (
                <div style={{ width: "100%", height: "180px", backgroundColor: "#eee", marginBottom: "10px" }}></div>
              )}
              <h3 style={{ marginBottom: "10px" }}>{lesson.title}</h3>
              <p style={{ marginBottom: "10px" }}>Duration: {lesson.duration}</p>
              <a
                href={lesson.video}
                target="_blank"
                rel="noreferrer"
                style={{
                  backgroundColor: "#4CAF50",
                  color: "white",
                  padding: "8px 12px",
                  borderRadius: "5px",
                  textDecoration: "none",
                }}
              >
                Watch Video
              </a>
            </div>
          );
        })
      )}
    </div>
  );
};

export default LessonsCard;