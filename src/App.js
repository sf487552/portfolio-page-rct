import React, { Component } from "react";
import './App.css';
import About from "../src/components/About.js";
import Contact from "../src/components/Contact.js";
import Footer from "../src/components/Footer.js";
import Navbar from "../src/components/Navbar.js";
import Projects from "../src/components/Projects.js";
import Resume from "../src/components/Resume.js";
import Backdrop from "../src/components/Backdrop";
import Sidebar from "./components/Sidebar";


class App extends Component {
  state = {
    sidebarOpen: false
  };
  
  sidebarToggleClickHandler = () => {
    this.setState((prevState) => {
      return {sidebarOpen: !prevState.sidebarOpen};
    });
  };

  backdropClickHandler = () => {
    this.setState({sidebarOpen: false});
  }

  render() {
    let backdrop;

    if (this.state.sidebarOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />
    }
    return (
        <div style={{ height: '100%' }}>
          <Navbar sidebarClickHandler={this.sidebarToggleClickHandler}/>
          <Sidebar show={this.state.sidebarOpen}/>
          {backdrop}
          <main style={{ marginTop:'65px'}}>
            <p></p>
          </main>

          <About></About>
          <Contact></Contact>
          <Projects></Projects>
          <Resume></Resume>
          <Footer></Footer>
        </div>
    );
  }
}


export default App;
