import "../src/App.css";
import React, { useState } from "react";
import About from "../src/components/About.js";
import Contact from "../src/components/Contact.js";
import Footer from "../src/components/Footer.js";
import Header from "../src/components/Header.js";
import Navbar from "../src/components/Navbar.js";
import Projects from "../src/components/Projects.js";
import Resume from "../src/components/Resume.js";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Navbar></Navbar>
      <About></About>
      <Contact></Contact>
      <Projects></Projects>
      <Resume></Resume>
      <Footer></Footer>
    </div>
  );
}

export default App;
