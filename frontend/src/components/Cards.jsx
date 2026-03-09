

import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

const courses = [
  {
    id: 1,
    title: "React Basics",
    instructor: "Jane Doe",
    duration: "4 weeks",
  },
  {
    id: 2,
    title: "Advanced CSS",
    instructor: "John Smith",
    duration: "6 weeks",
  },
  {
    id: 3,
    title: "Node.js Fundamentals",
    instructor: "Alice Johnson",
    duration: "5 weeks",
  },
  {
    id: 4,
    title: "Node.js Fundamentals",
    instructor: "Alice Johnson",
    duration: "5 weeks",
  },
  {
    id: 5,
    title: "Node.js Fundamentals",
    instructor: "Alice Johnson",
    duration: "5 weeks",
  }
];

function CourseList() {
  return (
    <div>
      <h2>Total Courses: {courses.length}</h2>
      <Row>
        {courses.map((course) => (
          <Col key={course.id} md={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{course.title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Instructor: {course.instructor}
                </Card.Subtitle>
                <Card.Text>Duration: {course.duration}</Card.Text>
                <Button variant="primary">Enroll</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default CourseList;