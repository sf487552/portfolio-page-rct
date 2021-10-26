import React, { Component } from "react";
import './App.css';
import About from "./components/about/About.js";
import Contact from "./components/contact/Contact.js";
import Footer from "./components/footer/Footer.js";
import Navbar from "../src/components/navbar/Navbar.js";
import Projects from "./components/projects/Projects.js";
import Resume from "./components/resume/Resume.js";
import Backdrop from "../src/components/navbar/Backdrop";
import Sidebar from "./components/navbar/Sidebar";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";


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
        <Router>
        <Navbar sidebarClickHandler={this.sidebarToggleClickHandler}/>
        <Sidebar show={this.state.sidebarOpen}/>
        {backdrop}
        <main style={{ marginTop:'65px'}}>
      <div>
              <Switch>
                <Route exact path="/">
                  <About />
                </Route>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/contact">
                  <Contact />
                </Route>
                <Route path="/projects">
                  <Projects />
                </Route>
                <Route path="/resume">
                  <Resume />
                </Route>
              </Switch>
            </div>
    
        </main>
        <Footer></Footer>
        </Router>
      </div>
    );
  }
}


export default App;
