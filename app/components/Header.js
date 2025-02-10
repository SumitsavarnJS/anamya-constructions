"use client";

import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, Button, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setMobileOpen(false);
    }
  };

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar
      position="fixed"
      sx={{
        background: "linear-gradient(135deg, #f8f9fa, #e9ecef)",
        backdropFilter: "blur(10px)",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", padding: { xs: "8px 15px", sm: "12px 30px" } }}>
        {/* Logo Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Image src="/logo/Logo.jpeg" alt="Logo" width={100} height={60} />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: "600",
                color: "transparent",
                ml: 1.5,
                fontFamily: "'Playfair Display', serif",
                letterSpacing: "1px",
                fontSize: { xs: "1.1rem", sm: "1.4rem", md: "1.6rem" },
                textShadow: "2px 2px 8px rgba(0, 0, 0, 0.2)",
                background: "linear-gradient(90deg, #FFD700, #000000, #FFD700)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                animation: "shimmer 2s infinite linear",
              }}
            >
              Anamya Interiors & Constructions
            </Typography>
          </motion.div>
        </Box>

        {/* Desktop Navigation */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: "15px" }}>
          {["projects", "about", "contact"].map((section) => (
            <motion.div key={section} whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }}>
              <Button
                onClick={() => handleScroll(section)}
                sx={{
                  color: "#333",
                  fontWeight: "500",
                  fontSize: "0.9rem",
                  textTransform: "none",
                  backgroundColor: "#ffffff",
                  borderRadius: "6px",
                  padding: "8px 16px",
                  transition: "all 0.3s ease",
                  boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.1)",
                  "&:hover": { backgroundColor: "#FF6B6B", color: "#fff", boxShadow: "4px 4px 15px rgba(255, 107, 107, 0.5)" },
                }}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Button>
            </motion.div>
          ))}
        </Box>

        {/* Mobile Menu */}
        <IconButton edge="end" sx={{ display: { xs: "block", md: "none" } }} onClick={toggleDrawer}>
          <MenuIcon sx={{ color: "#333" }} />
        </IconButton>
      </Toolbar>

      {/* Mobile Drawer */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
        <List sx={{ width: "220px", padding: "20px", background: "#f8f9fa" }}>
          {["projects", "about", "contact"].map((section) => (
            <ListItem
              button
              key={section}
              onClick={() => handleScroll(section)}
              sx={{
                textAlign: "center",
                backgroundColor: "#ffffff",
                margin: "10px 0",
                borderRadius: "6px",
                transition: "all 0.3s ease",
                boxShadow: "2px 2px 8px rgba(0, 0, 0, 0.1)",
                "&:hover": { backgroundColor: "#FF6B6B", color: "#fff", boxShadow: "4px 4px 12px rgba(255, 107, 107, 0.5)" },
              }}
            >
              <ListItemText primary={section.charAt(0).toUpperCase() + section.slice(1)} sx={{ textAlign: "center" }} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </AppBar>
  );
}
