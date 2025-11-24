"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import styles from "../styles/Testimonials.module.css";

const testimonials = [
  {
    name: "Aarav Sharma",
    title: "Home Buyer",
    message:
      "The team helped us find our dream home effortlessly. Everything was smooth, professional, and beyond expectations!",
    image: "/images/circle-icon.webp",
  },
  {
    name: "Priya Mehta",
    title: "Investor",
    message:
      "Amazing experience! They understood my investment goals perfectly and found exactly what I was looking for.",
    image: "/images/circle-icon.webp",
  },
  {
    name: "Rohan Verma",
    title: "Luxury Property Owner",
    message:
      "I’m impressed by their market knowledge and attention to detail. Highly recommended!",
    image: "/images/circle-icon.webp",
  },
];

export default function TestimonialsSlider() {
  return (
    <section className={styles.testimonialSection}>
      <div className={styles.container}>
        <h2 className={styles.heading}>What Our Clients Say</h2>

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          loop={true}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          className={styles.swiperContainer}
        >
          {testimonials.map((t, i) => (
            <SwiperSlide key={i}>
              <div className={styles.card}>
                <img
                  src={t.image}
                  alt={t.name}
                  className={styles.image}
                />
                <p className={styles.message}>“{t.message}”</p>
                <h3 className={styles.name}>{t.name}</h3>
                <p className={styles.title}>{t.title}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
