"use client";

import React from "react";
import { Box, Typography, Container } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ py: 3, backgroundColor: "#FFFFFF", borderTop: "1px solid #E0E0E0" }}>
      <Container sx={{ textAlign: "center" }}>
        <Typography variant="body2" sx={{ color: "#777777" }}>
          &copy; {new Date().getFullYear()} Anamya Interior & Constructions Pvt Ltd. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}
