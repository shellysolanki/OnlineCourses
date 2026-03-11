import React from "react";
import { Modal, Button } from "react-bootstrap";

function CardDetail({ course, onClose }) {
  if (!course) return null;

//   const handlePayment = () => {
//     alert(`Payment done for ${course.title}`);
//     onClose();
//   };

const handlePayment = () => {
  const confirmPayment = window.confirm(`Do you want to pay $100 for ${course.title}?`);
  if (confirmPayment) {
    alert(`Payment successful for ${course.title}!`);
    onClose();
  } else {
           // nothing happened (payment)
  }
};

  return (
    <Modal show={!!course} onHide={onClose} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>{course.title}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <img
          src={course.image}
          alt={course.title}
          style={{ width: "100%", maxHeight: "400px", objectFit: "cover", borderRadius: "8px" }}
        />
        <h5 className="mt-3">Instructor: {course.instructor}</h5>
        <p>Duration: {course.duration}</p>
        <p>Batch: 1st April - 30th April</p>
        <p>Seats Available: 25</p>
        <p>Price: $100</p>

        <div className="d-flex justify-content-between mt-3">
          <Button variant="primary" onClick={() => alert(`Enrolled in ${course.title}`)}>
            Enroll
          </Button>
          <Button variant="success" onClick={handlePayment}>
            Pay & Enroll
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default CardDetail;