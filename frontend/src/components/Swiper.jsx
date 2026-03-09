import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./Swiper.css"; // custom CSS

export default function CourseSlider() {
  return (
    <div className="course-slider-container">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
      >
        <SwiperSlide>
          <img
            src="https://media.istockphoto.com/id/1478962894/photo/e-learning-education-technology-online-course-internet-concept-webinar-online-education-on.jpg?s=612x612&w=0&k=20&c=2OZ3dszx1DdAoGPYZ3_fZvDnGQnriDP6Hfi1LJRovcM="
            alt="Course 1"
            
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://st.depositphotos.com/1009659/2231/i/450/depositphotos_22315815-stock-photo-communication-in-blue-glass-cubes.jpg"
            alt="Course 2"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://img.freepik.com/premium-photo/online-registration-form-modish-form-filling_31965-53194.jpg?semt=ais_hybrid&w=740&q=80"
            alt="Course 3"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}