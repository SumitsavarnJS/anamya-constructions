"use client";

import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { motion } from "framer-motion";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";

export default function Hero() {
  const handleExploreClick = () => {
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      sx={{
        height: "90vh",
        backgroundColor: "#F5F5F5", // clean, light background
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container
        component={motion.div}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        sx={{
          position: "relative",
          zIndex: 2,
          background: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(5px)",
          borderRadius: "20px",
          padding: "40px",
          boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.1)",
          maxWidth: "700px",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Typography
            variant="h2"
            fontWeight="bold"
            gutterBottom
            sx={{
              color: "#333333",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              letterSpacing: "1.5px",
              mb: 2,
            }}
          >
            <DesignServicesOutlinedIcon
              sx={{ fontSize: 60, mr: 2, color: "#DAA520" }}
            />
            Crafting Elegant Spaces
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Typography
            variant="h5"
            sx={{
              color: "#666666",
              mb: 3,
            }}
          >
            Discover modern interior design that blends timeless elegance with
            contemporary flair.
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Button
            variant="contained"
            onClick={handleExploreClick}
            sx={{
              mt: 2,
              backgroundColor: "#DAA520", // elegant gold accent
              color: "#FFFFFF",
              fontWeight: "bold",
              padding: "12px 30px",
              fontSize: "1rem",
              borderRadius: "30px",
              boxShadow: "0px 4px 15px rgba(218, 165, 32, 0.4)",
              textTransform: "uppercase",
              "&:hover": {
                backgroundColor: "#C99B2E",
                transform: "scale(1.05)",
                boxShadow: "0px 6px 20px rgba(218, 165, 32, 0.6)",
              },
            }}
          >
            Explore Now
          </Button>
        </motion.div>
      </Container>
    </Box>
  );
}
