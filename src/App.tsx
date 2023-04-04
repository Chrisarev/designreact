import React from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './Hero'
import Navbar from './Navbar'
import Cardpanel from './Cardpanel'
import Servicespanel from './Servicespanel'
import Endsection from './Endsection'
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Cardpanel />
      <Servicespanel />
      <Endsection />
    </div>
  );
}

export default App;
