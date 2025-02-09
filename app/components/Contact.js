"use client";

import React from "react";
import { Box, Typography, Grid, Card, CardContent } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";

export default function Contact() {
  return (
    <Box id="contact" sx={{ py: 10, backgroundColor: "#FAFAFA", textAlign: "center" }}>
      <Typography
        variant="h3"
        fontWeight="bold"
        sx={{ 
          color: "#333", 
          mb: 4, 
          textTransform: "uppercase",
          textShadow: "1px 2px 15px rgba(0, 0, 0, 0.3)"
        }}
      >
        Contact Us
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* Address */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ borderRadius: "15px", boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", background: "#FFF" }}>
            <CardContent>
              <LocationOnIcon sx={{ fontSize: 50, color: "#A57EF5" }} />
              <Typography variant="h6" fontWeight="bold" color="#333">Our Address</Typography>
              <Typography variant="body2" color="text.secondary">
              Ribhya Residency, 103 A, Ved Nagar, Rukanpura, Patna - 800014
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Phone */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ borderRadius: "15px", boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", background: "#FFF" }}>
            <CardContent>
              <PhoneIcon sx={{ fontSize: 50, color: "#FF6B6B" }} />
              <Typography variant="h6" fontWeight="bold" color="#333">Phone</Typography>
              <Typography variant="body2" color="text.secondary">
                +91 99314 95538
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* Email */}
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ borderRadius: "15px", boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)", background: "#FFF" }}>
            <CardContent>
              <EmailIcon sx={{ fontSize: 50, color: "#FFD700" }} />
              <Typography variant="h6" fontWeight="bold" color="#333">Email</Typography>
              <Typography variant="body2" color="text.secondary">
                contact@yourdesign.com
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>

      {/* Google Map */}
      <Box
        sx={{
          mt: 6,
          borderRadius: "15px",
          overflow: "hidden",
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)",
          width: "100%",
          maxWidth: "800px",
          mx: "auto",
        }}
      >
        {/* <iframe
          title="Google Map"
          width="100%"
          height="400px"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/place/25%C2%B036'34.2%22N+85%C2%B004'00.9%22E/@25.6094876,85.0669215,17z/data=!3m1!4b1!4m4!3m3!8m2!3d25.6094876!4d85.0669215?entry=ttu&g_ep=EgoyMDI1MDIwNS4xIKXMDSoASAFQAw%3D%3D"
        ></iframe>z */}

<iframe 
title="Google Map"
width="100%"
height="400px"
style={{ border: 0 }}
loading="lazy"
allowFullScreen
referrerPolicy="no-referrer-when-downgrade"

src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3597.862418820998!2d85.06692149999999!3d25.6094876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjXCsDM2JzM0LjIiTiA4NcKwMDQnMDAuOSJF!5e0!3m2!1sen!2sin!4v1739138877450!5m2!1sen!2sin"   >

</iframe>
      </Box>
    </Box>
  );
}
