import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../css/Testimonials.css";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    image: "/images/student.png",
    text: "I love learning new things with EdTech Platform. It has made education fun and interactive!",
  },
  {
    id: 2,
    name: "Jane Smith",
    image: "/images/student.png",
    text: "EdTech Platform has helped me improve my skills and gain confidence in my abilities.",
  },
  {
    id: 3,
    name: "Emily Johnson",
    image: "/images/student.png",
    text: "The programs offered by EdTech Platform are amazing. I have learned so much and enjoyed every moment.",
  },
  {
    id: 4,
    name: "Michael Brown",
    image: "/images/student.png",
    text: "EdTech Platform has been a game-changer for me. The interactive lessons make learning so much easier.",
  },
  {
    id: 5,
    name: "Sarah Davis",
    image: "/images/student.png",
    text: "I highly recommend EdTech Platform to anyone looking to enhance their skills. The content is top-notch.",
  },
  {
    id: 6,
    name: "David Wilson",
    image: "/images/student.png",
    text: "The support and resources provided by EdTech Platform are unmatched. I've made significant progress in my studies.",
  },
  {
    id: 7,
    name: "Emma White",
    image: "/images/student.png",
    text: "EdTech Platform has exceeded my expectations. The variety of courses and the quality of instruction are outstanding.",
  },
];

export default function Testimonials() {
  return (
    <div className="testimonials-section">
      <div className="container">
        <h2 className="section-title fs-1">Testimonials</h2>
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          loop={true}
          slidesPerView={3}
          spaceBetween={30}
          className="testimonial-swiper"
        >
          {testimonials.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="testimonial-card">
                <div className="testimonial-content">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-image hover-3d"
                  />
                  <h3 className="testimonial-name">{testimonial.name}</h3>
                  <p className="testimonial-text">{testimonial.text}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
