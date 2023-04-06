import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './Hero'
import Navbar from './Navbar'
import Cardpanel from './Cardpanel'
import Impactpanel from './Impactpanel'
import Servicespanel from './Servicespanel'
import Footer from './Footer'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Cardpanel />
      <Impactpanel/>
      <Servicespanel />
      <Footer />
    </div>
  );
}

export default App;
