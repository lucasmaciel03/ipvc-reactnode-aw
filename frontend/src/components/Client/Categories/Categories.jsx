import React from "react";
import "./categories.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { FreeMode, Pagination } from "swiper";

function Categories() {
  return (
    // Temos de adicionar uma lista de Categorias na horizontal aqui em baixo
    <div className="slide-categories">
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        freeMode={true}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        modules={[FreeMode, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide className="swiperslide">
          <h1>Action</h1>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <h1>Adventure</h1>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <h1>Comedy</h1>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <h1>Drama</h1>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <h1>Fantasy</h1>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <h1>Horror</h1>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <h1>Romance</h1>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <h1>Science</h1>
        </SwiperSlide>
        <SwiperSlide className="swiperslide">
          <h1>Thriller</h1>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </div>
  );
}

export default Categories;
