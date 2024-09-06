import React, { useState, useEffect } from 'react';
import "./App.css";
import Slider from './components/Slider.jsx';
import BuildAssistance from './components/BuildAssistance.jsx';
import Milestone from './components/Milestone.jsx';
import Form from './components/Form.jsx';
import Copyright from './components/Copyright.jsx';
import Navigation from './components/Navigation.jsx';


function App() {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 600);

  useEffect(() => {
      const handleResize = () => setIsMobile(window.innerWidth <= 600);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
  }, []);
  
  return (
      <>
          <Navigation />
          <div style={{ marginTop: '65px' }}>
              {isMobile && (
                  <div className="mobile-search">
                      <input type="text" id="search-input" placeholder="Search..." />
                      <span><button id="search-button">Search</button></span>
                  </div>
              )}
              <section id="home">
                  <Slider />
              </section>
              <section id="build-assistance">
                  <BuildAssistance />
              </section>
              <section id="milestone">
                  <Milestone />
              </section>
              <section id="contact">
                  <Form />
              </section>
              <Copyright/>
              
          </div>
      </>
  );
}

export default App;
