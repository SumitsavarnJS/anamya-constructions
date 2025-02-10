"use client";

import React, { useState } from "react";
import { Box, Typography, Grid, Dialog, IconButton, Tooltip } from "@mui/material";
import Image from "next/image";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

const projects = [
  { id: 1, image: "/logo/office2.jpeg", title: "Office" },
  { id: 2, image: "/logo/Bedroom.jpeg", title: "Luxury Bedroom" },
  { id: 3, image: "/logo/kitchen.jpeg", title: "Elegant Kitchen" },
  { id: 4, image: "/logo/Poooja2.jpeg", title: "Pooja Room" },
  { id: 5, image: "/logo/officenew.jpeg", title: "Office" },
  { id: 6, image: "/logo/study.jpg", title: "Cozy Study Room" },
  { id: 7, image: "/logo/washroom.jpg", title: "Classic Bathroom" },
  { id: 8, image: "/logo/tvroom.webp", title: "Modern Living Room" },


];

const whatsappNumber = "919931495538"; // Replace with your actual number

export default function Projects() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleWhatsAppClick = () => {
    const mobileLink = `https://wa.me/${whatsappNumber}`;
    window.open(mobileLink, "_blank");
  };

  return (
    <Box id="projects" sx={{ py: 12, backgroundColor: "#F8F9FA", textAlign: "center" }}>
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ color: "#2C3E50", mb: 4, textTransform: "capitalize" }}
      >
        Our Projects
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {projects.map((project) => (
          <Grid item key={project.id} xs={12} sm={6} md={4} lg={3}>
            <motion.div whileHover={{ scale: 1.05 }}>
              <Box
                sx={{
                  position: "relative",
                  cursor: "pointer",
                  borderRadius: "10px",
                  overflow: "hidden",
                  boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: 250,
                }}
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  width={300}
                  height={200}
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "10px" }}
                  onClick={() => setSelectedImage(project.image)}
                />
                <Tooltip title="Get a Reasonable Quote" arrow>
                  <Box
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      backgroundColor: "#25D366",
                      color: "white",
                      borderRadius: "50px",
                      padding: "5px 10px",
                      display: "flex",
                      alignItems: "center",
                      gap: 1,
                      cursor: "pointer",
                    }}
                    onClick={handleWhatsAppClick}
                  >
                    <WhatsAppIcon />
                  </Box>
                </Tooltip>
              </Box>
            </motion.div>
          </Grid>
        ))}
      </Grid>

      {/* Image Modal */}
      <Dialog open={!!selectedImage} onClose={() => setSelectedImage(null)}>
        <Box sx={{ position: "relative" }}>
          <IconButton
            sx={{ position: "absolute", top: 10, right: 10, color: "white" }}
            onClick={() => setSelectedImage(null)}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <Image
              src={selectedImage}
              alt="Selected Project"
              width={600}
              height={400}
              style={{ width: "100%", height: "auto", maxHeight: "80vh", objectFit: "contain" }}
            />
          )}
        </Box>
      </Dialog>
    </Box>
  );
}
