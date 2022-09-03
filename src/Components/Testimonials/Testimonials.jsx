import "./testimonials.css";
import avatar1 from "../../assets/avatar1.jpg";
import avatar2 from "../../assets/avatar2.jpg";
import avatar3 from "../../assets/avatar3.jpg";
import avatar4 from "../../assets/avatar4.jpg";

import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

const data = [
  {
    avatar: avatar1,
    name: "Ana",
    review:
      "Lorem ipsum dolor sit, amet consectetu adipisicing elit. Animi  mollitia laudantium libero in odio, ugiat, voluptatum saepe et  deleniti vitae consequatur cupiditate x facere! Vero itaque dicta  dolorum soluta ipsum.",
  },
  {
    avatar: avatar2,
    name: "David",
    review:
      "Lorem ipsum dolor sit, amet consectetu adipisicing elit. Animi  mollitia laudantium libero in odio, ugiat, voluptatum saepe et  deleniti vitae consequatur cupiditate x facere! Vero itaque dicta  dolorum soluta ipsum.",
  },
  {
    avatar: avatar3,
    name: "Luffy",
    review:
      "Lorem ipsum dolor sit, amet consectetu adipisicing elit. Animi  mollitia laudantium libero in odio, ugiat, voluptatum saepe et  deleniti vitae consequatur cupiditate x facere! Vero itaque dicta  dolorum soluta ipsum.",
  },
  {
    avatar: avatar4,
    name: "Tachigi",
    review:
      "Lorem ipsum dolor sit, amet consectetu adipisicing elit. Animi  mollitia laudantium libero in odio, ugiat, voluptatum saepe et  deleniti vitae consequatur cupiditate x facere! Vero itaque dicta  dolorum soluta ipsum.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        className="container testimonials__container"
        // install Swiper modules
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <div className="client__avatar">
                <img src={avatar} alt={name} />
              </div>
              <h5 className="client__name">{name}</h5>
              <small className="client__review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
