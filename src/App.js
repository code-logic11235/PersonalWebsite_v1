import React, { useRef, useEffect } from 'react';
import './App.css';
import HomePage from './components/HomePage/homePage.js';
import ContactMe from './components/ContactMe/contactMe.js';
import AboutMe from './components/AboutMe/aboutMe.js';
import NavBar from './components/NavBar/NavBar';

function App() {
  const homePageRef = useRef(null); // Create refs

  // useEffect(() => {
  //   // Programmatically scroll to the HomePage section when the component mounts
  //   if (homePageRef.current) {
  //     console.log(homePageRef)
  //     const topPos = homePageRef.current.offsetTop; 
  //     window.scrollTo({
  //       top: topPos,
  //       behavior: 'instant'
  //     });
  //   }
  // }, []);

  return (
    <div className="App">
      <NavBar />
      <HomePage />
      <AboutMe />
      {/* <div ref={homePageRef}><HomePage /></div>  */}
      {/* <ContactMe /> */}
    </div>
  );
}

export default App;