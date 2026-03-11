
import React, { useState, useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./Cards.css";
import CardDetail from "../pages/CardDetail.jsx";

const defaultCourses = [
  {
    id: 1,
    title: "React Basics",
    instructor: "Jane Doe",
    duration: "4 weeks",
    image: "https://miro.medium.com/1*WfhViON2evomOK2tw09AuQ.jpeg",
  },
  {
    id: 2,
    title: "Advanced CSS",
    instructor: "John Smith",
    duration: "6 weeks",
    image: "https://www.thatsoftwaredude.com/images/post/titles/41a043a5-c505-455d-ae09-4d4c5a689c3a.jpg",
  },
  {
    id: 3,
    title: "Node.js Fundamentals",
    instructor: "Alice Johnson",
    duration: "5 weeks",
    image: "https://nodejs.org/static/images/logo.svg",
  },
  {
    id: 4,
    title: "Express Fundamentals",
    instructor: "Alice Johnson",
    duration: "7 weeks",
    image: "https://i.ytimg.com/vi/yB79hoL7svQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBeaU0GAnZFIYuDMKHjERuUay7qXQ",
  },
  {
    id: 5,
    title: "Javascript Fundamentals",
    instructor: "Alice Johnson",
    duration: "5 weeks",
    image: "https://i.ytimg.com/vi/XL9Ri8pO68w/maxresdefault.jpg",
  },
];

function CourseList() {
  const [courses, setCourses] = useState([]);
  const [selectedCourse, setSelectedCourse] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];   
    const mergedCourses = [...defaultCourses, ...storedCourses];
    setCourses(mergedCourses);
  }, []);

  const handleEnroll = (course) => {
    const user = localStorage.getItem("user");
    if (user) {
      setSelectedCourse(course);
    } else {
      alert("please login to enroll");
      navigate("/login");
    }
  };

  return (
    <div className="container mt-4">
      <Row>
        {courses.map((course, index) => (
          <Col key={course.id || index} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card>
              <Card.Img variant="top" src={course.image} className="course-img" />
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Instructor: {course.instructor}
                </Card.Subtitle>
                <Card.Text>Duration: {course.duration}</Card.Text>
                <Button variant="primary" onClick={() => handleEnroll(course)}>Enroll</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      {selectedCourse && (
        <CardDetail course={selectedCourse} onClose={() => setSelectedCourse(null)} />
      )}
    </div>
  );
}

export default CourseList;