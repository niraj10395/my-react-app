import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Header from './Components/header'; 
import Contact from './Components/contact/contact';
import About from './Components/about/about'; // Assuming you have an About component

function App() {
  return (
    <BrowserRouter> 
      <Header /> {/* Your header with navigation links */}
      <Routes>
        <Route path="/" element={<header />} /> {/* Route for the home page */}
        <Route path="/about" element={<About />} /> {/* Route for the About page */}
        <Route path="/contact" element={<Contact />} /> {/* Route for the Contact page */}
      </Routes>
    </BrowserRouter>
  );
}


export default App;
