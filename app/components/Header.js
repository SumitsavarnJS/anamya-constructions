"use client";

import React from "react";
import { AppBar, Toolbar, Typography, Box, Button } from "@mui/material";
import DesignServicesOutlinedIcon from "@mui/icons-material/DesignServicesOutlined";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", padding: "10px 20px" }}>
        {/* Logo Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Image src="/logo/Logo.jpeg" alt="Logo" width={100} height={70} />
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              color: "#2E2E2E",
              letterSpacing: "1px",
              textTransform: "uppercase",
              ml: 1.5,
            }}
          >
            Anamya Interior & Constructions Pvt Ltd
          </Typography>
        </Box>

        {/* Navigation Links */}
        <Box>
          {["projects", "about", "contact"].map((section) => (
            <motion.div
              key={section}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              style={{ display: "inline-block", margin: "0 10px" }}
            >
              <Button
                onClick={() => handleScroll(section)}
                sx={{
                  color: "#333",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  textTransform: "capitalize",
                  transition: "color 0.3s ease",
                  "&:hover": { color: "#FF6B6B" },
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            </motion.div>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}
