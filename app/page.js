"use client";

import React from "react";
import Head from "next/head";
import Header from "./components/Header";
import Hero from "./components/Hero.js";
import Projects from "./components/Projects.js";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer.js";
import { Container, CssBaseline } from "@mui/material";


export default function Page() {
  return (
    <div >
      <Head>
        <title>Interior Design Portfolio</title>
        <meta name="description" content="Showcasing elegant interior designs." />
      </Head>
      <CssBaseline />
      <Container maxWidth="lg">
        <Header />
        <Hero />
        <Projects />
        <About />
        <Contact />
        <Footer />
      </Container>
    </div>
  );
}
