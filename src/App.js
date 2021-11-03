import React, { Component } from "react";
import './App.css';
import About from './components/about/About';
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
import Home from "./components/home/Home";
import TagManager from 'react-gtm-module'
const tagManagerArgs = {
  gtmId: 'GTM-5J74PFD'
}
TagManager.initialize(tagManagerArgs)


class App extends Component {
  state = {
      data: null
    };
  
    componentDidMount() {
      this.callBackendAPI()
        .then(res => this.setState({ data: res.express }))
        .catch(err => console.log(err));
    }
      // fetching the GET route from the Express server which matches the GET route from server.js
    callBackendAPI = async () => {
      const response = await fetch('/express_backend');
      const body = await response.json();
  
      if (response.status !== 200) {
        throw Error(body.message) 
      }
      return body;
    };
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
        <main className="topMarg">
          <div className="mainSection">
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/home">
                <Home />
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
            <Footer/>
          </div>
        </main>
        
        </Router>
      </div>
    );
  }
}


export default App;
