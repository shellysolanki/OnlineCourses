
import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CourseAdminList = () => {
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);
  const [showCourseModal, setShowCourseModal] = useState(false);

  const [lessons, setLessons] = useState([]);
  const [editingLesson, setEditingLesson] = useState(null);
  const [showLessonModal, setShowLessonModal] = useState(false);

  const [courseFormData, setCourseFormData] = useState({
    title: "",
    instructor: "",
    duration: "",
    image: "",
  });

  const [lessonFormData, setLessonFormData] = useState({
    title: "",
    duration: "",
    video: "",
  });

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("courses")) || [];
    setCourses(storedCourses);

    const storedLessons = JSON.parse(localStorage.getItem("lessons")) || [];
    setLessons(storedLessons);
  }, []);

  // Helper functions
  const saveCourses = (updatedCourses) => {
    setCourses(updatedCourses);
    localStorage.setItem("courses", JSON.stringify(updatedCourses));
  };

  const saveLessons = (updatedLessons) => {
    setLessons(updatedLessons);
    localStorage.setItem("lessons", JSON.stringify(updatedLessons));
  };

  // Course handlers
  const handleDeleteCourse = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    saveCourses(updatedCourses);
  };

  const handleEditCourse = (index) => {
    setEditingCourse(index);
    setCourseFormData(courses[index]);
    setShowCourseModal(true);
  };

  const handleUpdateCourse = () => {
    const updatedCourses = courses.map((course, index) =>
      index === editingCourse ? courseFormData : course
    );
    saveCourses(updatedCourses);
    setShowCourseModal(false);
  };

  const handleDeleteLesson = (index) => {
    const updatedLessons = lessons.filter((_, i) => i !== index);
    saveLessons(updatedLessons);
  };

  const handleEditLesson = (index) => {
    setEditingLesson(index);
    setLessonFormData(lessons[index]);
    setShowLessonModal(true);
  };

  const handleUpdateLesson = () => {
    const updatedLessons = lessons.map((lesson, index) =>
      index === editingLesson ? lessonFormData : lesson
    );
    saveLessons(updatedLessons);
    setShowLessonModal(false);
  };

  return (
    <div className="container mt-4">
  {/*Courses Table*/}
      <h2 className="text-center mb-4">Frontend Courses</h2>
      <div className="table-responsive mb-5">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Instructor</th>
              <th>Duration</th>
              <th>Image</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {courses.length === 0 ? (
              <tr>
                <td colSpan="6" className="text-center">
                  No courses available
                </td>
              </tr>
            ) : (
              courses.map((course, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{course.title}</td>
                  <td>{course.instructor}</td>
                  <td>{course.duration}</td>
                  <td>
                    <img
                      src={course.image}
                      alt="course"
                      width="80"
                      height="50"
                    />
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => handleEditCourse(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDeleteCourse(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

{/*lessons table*/}
      <h2 className="text-center mb-4">Lessons</h2>
      <div className="table-responsive mb-5">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Duration</th>
              <th>Video URL</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {lessons.length === 0 ? (
              <tr>
                <td colSpan="5" className="text-center">
                  No lessons available
                </td>
              </tr>
            ) : (
              lessons.map((lesson, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{lesson.title}</td>
                  <td>{lesson.duration}</td>
                  <td style={{
                      maxWidth: "200px",        
                      whiteSpace: "nowrap",     
                      overflow: "hidden",       
                      textOverflow: "ellipsis" 
                    }} >
                    <a href={lesson.video} target="_blank" rel="noreferrer">
                      {lesson.video}
                    </a>
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => handleEditLesson(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDeleteLesson(index)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

 {/* course */}
      <Modal show={showCourseModal} onHide={() => setShowCourseModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={courseFormData.title || ""}
                onChange={(e) =>
                  setCourseFormData({ ...courseFormData, title: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Instructor</Form.Label>
              <Form.Control
                type="text"
                value={courseFormData.instructor || ""}
                onChange={(e) =>
                  setCourseFormData({ ...courseFormData, instructor: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="text"
                value={courseFormData.duration || ""}
                onChange={(e) =>
                  setCourseFormData({ ...courseFormData, duration: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                value={courseFormData.image || ""}
                onChange={(e) =>
                  setCourseFormData({ ...courseFormData, image: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowCourseModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdateCourse}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>

{/* lessons */}
      <Modal show={showLessonModal} onHide={() => setShowLessonModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Lesson</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                value={lessonFormData.title || ""}
                onChange={(e) =>
                  setLessonFormData({ ...lessonFormData, title: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="text"
                value={lessonFormData.duration || ""}
                onChange={(e) =>
                  setLessonFormData({ ...lessonFormData, duration: e.target.value })
                }
              />
            </Form.Group>
            <Form.Group className="mb-2">
              <Form.Label>Video URL</Form.Label>
              <Form.Control
                type="text"
                value={lessonFormData.video || ""}
                onChange={(e) =>
                  setLessonFormData({ ...lessonFormData, video: e.target.value })
                }
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowLessonModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdateLesson}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CourseAdminList;