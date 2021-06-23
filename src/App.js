import React from 'react';
import './App.css';
import Header from './Header/Header'
import Banner from './Banner/Banner'
import Particles from 'react-particles-js';
import About from './About/About';
import Portfolio from './Portfolio/Portfolio';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
        <section className="sec-one">
          <Particles 
            params={{
                particles: {
                  number: {
                    value: 28,
                    density: {
                      enable: true,
                      value_area: 900
                    }
                  },
                  shape: {
                    type: "circle",
                    stroke: {
                      width: 3, 
                      color: 'rgba(240,240,240,0.5)'
                    }
                  }
                }
            }}
          /> 
          <Header />
          <Banner />
        </section>
        <section className="sec-two" id="sec-two">
          <About /> 
        </section>
        <section className="sec-three" id="sec-three">
            <Portfolio />
        </section>
        <section className="sec-four" id="sec-four">
            <Contact />
        </section>
    </div>
  );
}

export default App;
