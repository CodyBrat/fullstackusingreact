"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const slides = [
  {
    id: 1,
    title: "DESIGN SLIDER",
    topic: "Airpod",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, laborum cumque dignissimos quidem atque et eligendi aperiam voluptates beatae maxime.",
    image:
      "https://i.pinimg.com/originals/6f/02/17/6f0217fef9f9941b7c5ce600b64d84d3.gif",
  },
  {
    id: 2,
    title: "DESIGN SLIDER",
    topic: "Smart Watch",
    desc: "Accusamus earum voluptatibus repellendus, dignissimos laudantium quidem odit saepe amet optio!",
    image:
      "https://i.pinimg.com/originals/73/85/2c/73852c60d7fc6c659bac25075cc8b8d4.gif",
  },
  {
    id: 3,
    title: "DESIGN SLIDER",
    topic: "Headphones",
    desc: "Distinctio recusandae cupiditate magnam, blanditiis amet, suscipit quod rerum saepe minima.",
    image:
      "https://i.pinimg.com/originals/f3/3d/05/f33d05ca42e5d1934b120279e1a1c12b.gif",
  },
];

const Carousel = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const nextSlide = () => setIndex((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setIndex((prev) => (prev - 1 + slides.length) % slides.length);

  useEffect(() => {
    timeoutRef.current = setInterval(nextSlide, 5000);
    return () => clearInterval(timeoutRef.current);
  }, []);

  const slide = slides[index];

  return (
    <div
      className="relative w-full h-[100vh] flex items-center justify-center overflow-hidden bg-transparent font-[Stack Sans Headline]"
      style={{
        fontFamily: '"Stack Sans Headline", sans-serif',
      }}
    >
      {/* Content Wrapper */}
      <div className="flex items-center justify-between w-[90%] max-w-[1600px] gap-40">
        {/* Text Section */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 80 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-lg text-white z-20"
          >
            <h3 className="text-2xl font-light tracking-widest text-[#cfcfd8] mb-2">
              {slide.title}
            </h3>
            <h1 className="text-7xl font-extrabold text-white drop-shadow-[0_4px_20px_rgba(255,255,255,0.2)] mb-6 leading-tight">
              {slide.topic}
            </h1>
            <p className="text-lg text-[#e0e0e0] leading-relaxed mb-8">
              {slide.desc}
            </p>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-white/20 bg-white/10 rounded-full 
                         text-white text-base font-medium backdrop-blur-md 
                         hover:bg-white/20 transition duration-300"
            >
              SEE MORE →
            </motion.button>
          </motion.div>
        </AnimatePresence>

        {/* Image Section */}
        <div className="relative w-[750px] h-[650px]">
          {/* Depth images */}
          {slides.map((s, i) => {
            const offset = (i - index + slides.length) % slides.length;
            if (offset === 0) return null;
            const opacity = offset === 1 ? 0.25 : offset === 2 ? 0.1 : 0;
            const blur = offset === 1 ? "blur-lg" : offset === 2 ? "blur-2xl" : "";
            const translate = offset * 220;

            return (
              <motion.img
                key={s.id}
                src={s.image}
                alt={s.topic}
                className={`absolute top-1/2 left-1/2 object-contain transition-all duration-700 ease-out ${blur}`}
                style={{
                  opacity,
                  transform: `translate(-50%, -50%) translateX(${translate}px) scale(${1 - offset * 0.1})`,
                }}
              />
            );
          })}

          {/* Main Image */}
          <AnimatePresence mode="wait">
            <motion.img
              key={slide.id}
              src={slide.image}
              alt={slide.topic}
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.1, y: -40 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 
                         object-contain w-[520px] h-[520px] drop-shadow-[0_0_50px_rgba(255,255,255,0.1)]"
            />
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute bottom-16 flex gap-12">
        {[{ dir: "left", fn: prevSlide, Icon: FaArrowLeftLong },
          { dir: "right", fn: nextSlide, Icon: FaArrowRightLong }].map(({ dir, fn, Icon }) => (
          <motion.button
            key={dir}
            whileHover={{ scale: 1.15, y: -4 }}
            whileTap={{ scale: 0.9 }}
            onClick={fn}
            className="w-14 h-14 rounded-full bg-white/10 border border-white/20 
                       backdrop-blur-lg text-white shadow-[0_0_20px_rgba(255,255,255,0.1)]
                       hover:bg-white/20 hover:border-white/30 hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]
                       flex items-center justify-center transition-all duration-300"
          >
            <Icon className="text-2xl" />
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
