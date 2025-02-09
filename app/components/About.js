"use client";

import React, { useState } from "react";
import { Box, Typography, IconButton } from "@mui/material";
import Image from "next/image";
import { motion } from "framer-motion";

const testimonials = [
  { id: 1, image: "/testimonials/actor.jpeg", text: "Amazing service! My home looks stunning now." },
  { id: 2, image: "/testimonials/actress.jpeg", text: "Highly professional and creative team." },
  { id: 3, image: "/testimonials/khesari.jpeg", text: "Quality Work and Reasonable Rate" },
  { id: 4, image: "/testimonials/khesari1.jpeg", text: "They turned my vision into reality!" }

];

export default function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Box id="about" sx={{ py: 12, backgroundColor: "#FAFAFA", textAlign: "center" }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h3"
          fontWeight="bold"
          sx={{
            color: "#2C3E50",
            mb: 4,
            textTransform: "uppercase",
            textShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
            letterSpacing: "2px",
          }}
        >
          About Us
        </Typography>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Typography
          variant="h6"
          sx={{ maxWidth: "800px", mx: "auto", color: "#555", mb: 6 }}
        >
          Our expert team blends creativity and expertise to craft exquisite interior spaces that inspire and captivate.
        </Typography>
      </motion.div>
      
      {/* Testimonial Carousel */}
      <Box sx={{ position: "relative", width: "80%", mx: "auto", overflow: "hidden", mt: 6 }}>
        <motion.div key={currentIndex} initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
          <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <Image
              src={testimonials[currentIndex].image}
              alt="Testimonial"
              width={200}
              height={200}
              style={{ borderRadius: "50%", marginBottom: "20px" }}
            />
            <Typography variant="h6" sx={{ maxWidth: "600px", color: "#333" }}>
              "{testimonials[currentIndex].text}"
            </Typography>
          </Box>
        </motion.div>
        <IconButton sx={{ position: "absolute", left: 10, top: "50%", transform: "translateY(-50%)", background: "rgba(0, 0, 0, 0.5)", color: "white" }} onClick={prevSlide}>
          ❮
        </IconButton>
        <IconButton sx={{ position: "absolute", right: 10, top: "50%", transform: "translateY(-50%)", background: "rgba(0, 0, 0, 0.5)", color: "white" }} onClick={nextSlide}>
          ❯
        </IconButton>
      </Box>
    </Box>
  );
}
