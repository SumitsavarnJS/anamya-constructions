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
        background: "rgba(255, 255, 255, 0.95)",
        backdropFilter: "blur(10px)",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        borderBottom: "1px solid rgba(0, 0, 0, 0.1)",
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", padding: { xs: "8px 15px", sm: "12px 30px" } }}>
        {/* Logo Section */}
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Image src="/logo/Logo.jpeg" alt="Logo" width={60} height={40} />
          <Typography
            variant="h6"
            sx={{
              fontWeight: "500",
              color: "#333",
              ml: 1.5,
              display: { xs: "none", md: "block" },
            }}
          >
            Anamya Interiors & Constructions
          </Typography>
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
                  backgroundColor: "#f0f0f0",
                  borderRadius: "6px",
                  padding: "6px 14px",
                  transition: "all 0.3s ease",
                  "&:hover": { backgroundColor: "#FF6B6B", color: "#fff" },
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
        <List sx={{ width: "220px", padding: "20px" }}>
          {["projects", "about", "contact"].map((section) => (
            <ListItem
              button
              key={section}
              onClick={() => handleScroll(section)}
              sx={{
                textAlign: "center",
                backgroundColor: "#f0f0f0",
                margin: "10px 0",
                borderRadius: "6px",
                transition: "all 0.3s ease",
                "&:hover": { backgroundColor: "#FF6B6B", color: "#fff" },
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
