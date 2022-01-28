
import './App.css';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import Home from './Home';

import About from './About';
import Projects from './Projects';
import Contact from './Contact';
// import { Link } from 'react-router-dom';

import Navbar from './Navbar';
import React, { Component } from "react";

// import Scrolltotop from './Scrolltotop';
// import { NavHashLink as Link } from "react-router-hash-link"



function App() {
  // var Scroll = require("react-scroll")
  // var Project = Scroll.Projects
  // var scroller = Scroll.scroller
  // scroller.scrollTo('myScrollToProjects', {
  //   duration: 1000,
  //   delay: 100,
  //   smooth: true,
  //   containerId: 'ContainerElementID',
  //   offset: 50, // Scrolls to element + 50 pixels down the page

  // })
  // const contactc = useRef(null);
  // const scrollTo = scrollBy()

  // const gcontact = () => window.scrollTo({
  //   top: contactc.current.offsetTop,
  //   behavior: "smooth"
  // })


  return (
    <BrowserRouter>
      <div>
        <Navbar></Navbar>


        <Home></Home>
        <About></About>
        <Projects></Projects>
        <Contact ></Contact>
      </div>





      {/* <Routes>

        <Route path="/" element={<Home />}></Route>
        <Route path="/About" element={<About />}></Route>
        <Route path="/Projects" element={<Projects />} ></Route>
        <Route path="/Contact" element={<Contact />}></Route>
      </Routes> */}



    </BrowserRouter>

  );
}

export default App;





{/* <Routes>

<Route path="/" element={<Home />}></Route>
<Route path="/About" element={<About />}></Route>
<Route path="/Projects" element={<Projects />} ></Route>
<Route path="/Contact" element={<Contact />}></Route>
</Routes> */}


{/* <li><button class="nav-link scrollto ">Home</button></li>
<li><button class="nav-link scrollto" >About</button></li>
<li><button class="nav-link scrollto" >Projects</button></li>
<li><button class="nav-link scrollto" onClick={gcontact}>Contact</button></li> */}



{/* <li><Link  class="nav-link scrollto " to="/">Home</Link></li>
<li><Link class="nav-link scrollto" to="/About">About</Link></li>
<li><Link class="nav-link scrollto" to="/Projects">Projects</Link></li>
<li><Link class="nav-link scrollto" to="/Contact">Contact</Link></li> */}