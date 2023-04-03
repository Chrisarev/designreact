import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './Hero'
import Navbar from './Navbar'
import Cardpanel from './Cardpanel'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Cardpanel />
    </div>
  );
}

export default App;
