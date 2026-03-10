import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import "./Swiper.css";

export default function CarouselSlider() {
  return (
    <div
      id="courseCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000"   
    >
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="https://media.istockphoto.com/id/1478962894/photo/e-learning-education-technology-online-course-internet-concept-webinar-online-education-on.jpg?s=612x612&w=0&k=20&c=2OZ3dszx1DdAoGPYZ3_fZvDnGQnriDP6Hfi1LJRovcM="
            className="d-block w-100"
            alt="Course 1"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://st.depositphotos.com/1009659/2231/i/450/depositphotos_22315815-stock-photo-communication-in-blue-glass-cubes.jpg"
            className="d-block w-100"
            alt="Course 2"
          />
        </div>
        <div className="carousel-item">
          <img
            src="https://img.freepik.com/premium-photo/online-registration-form-modish-form-filling_31965-53194.jpg?semt=ais_hybrid&w=740&q=80"
            className="d-block w-100"
            alt="Course 3"
          />
        </div>
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#courseCarousel"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon"></span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#courseCarousel"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon"></span>
      </button>

      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#courseCarousel"
          data-bs-slide-to="0"
          className="active"
        ></button>
        <button
          type="button"
          data-bs-target="#courseCarousel"
          data-bs-slide-to="1"
        ></button>
        <button
          type="button"
          data-bs-target="#courseCarousel"
          data-bs-slide-to="2"
        ></button>
      </div>
    </div>
  );
}