import React, { useState, useEffect } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const CourseTable = () => {
  const [courses, setCourses] = useState([]);
  const [editingCourse, setEditingCourse] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [courseDetails, setCourseDetails] = useState({ name: '', description: '', duration: '', level: '' });

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem('courses')) || [];
    setCourses(storedCourses);
  }, []);

  const saveCourses = (updatedCourses) => {
    setCourses(updatedCourses);
    localStorage.setItem('courses', JSON.stringify(updatedCourses));
  };

  const handleDelete = (index) => {
    const updatedCourses = courses.filter((_, i) => i !== index);
    saveCourses(updatedCourses);
  };

  const handleEdit = (index) => {
    setEditingCourse(index);
    setCourseDetails(courses[index]); // populate all details
    setShowModal(true);
  };

  const handleUpdate = () => {
    const updatedCourses = courses.map((course, index) =>
      index === editingCourse ? courseDetails : course
    );
    saveCourses(updatedCourses);
    setShowModal(false);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">Frontend Courses</h2>

      <div className="table-responsive">
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>#</th>
              <th>Course Name</th>
              <th>Duration</th>
              <th>Level</th>
              <th>Description</th>
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
                  <td>{course.name}</td>
                  <td>{course.duration}</td>
                  <td>{course.level}</td>
                  <td>{course.description}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => handleEdit(index)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(index)}
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

      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-2">
              <Form.Label>Course Name</Form.Label>
              <Form.Control
                type="text"
                value={courseDetails.name || ''}
                onChange={(e) => setCourseDetails({ ...courseDetails, name: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Duration</Form.Label>
              <Form.Control
                type="text"
                value={courseDetails.duration || ''}
                onChange={(e) => setCourseDetails({ ...courseDetails, duration: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Level</Form.Label>
              <Form.Control
                type="text"
                value={courseDetails.level || ''}
                onChange={(e) => setCourseDetails({ ...courseDetails, level: e.target.value })}
              />
            </Form.Group>

            <Form.Group className="mb-2">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                value={courseDetails.description || ''}
                onChange={(e) => setCourseDetails({ ...courseDetails, description: e.target.value })}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleUpdate}>
            Update
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CourseTable;