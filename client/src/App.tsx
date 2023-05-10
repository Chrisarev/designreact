import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'
import Contact from './Contact'
import AnimatedRoutes from './AnimatedRoutes';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          {/*<Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>*/}
          <AnimatedRoutes />
      </div>
    </Router>
  );
}

export default App;
