import './App.css';
import React from "react";
import Home from "../src/components/Home.js";
import About from "../src/components/About.js";
import Contact from "../src/components/Contact.js";
import Footer from "../src/components/Footer.js";
import Header from "../src/components/Header.js";
import Navbar from "../src/components/Navbar.js";
import Projects from "../src/components/Projects.js";
import Resume from "../src/components/Resume.js";
import SidebarToggle from "../src/components/SidebarToggle";
import Sidebar from "../src/components/Sidebar";
import Backdrop from "../src/components/Backdrop";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <div style={{height: '100%'}}>
        <Navbar></Navbar>
        <Sidebar></Sidebar>
        <Backdrop></Backdrop>
        <main style={{marginTop: '64px'}}>
          <p>content</p>
        </main>
      </div>
      <SidebarToggle></SidebarToggle>
      <Home></Home>
      <About></About>
      <Contact></Contact>
      <Projects></Projects>
      <Resume></Resume>
      <Footer></Footer>
    </div>
  );
}

export default App;
