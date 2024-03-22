import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from './Pages/Home';
import ProductsPage from './Pages/Products';
import AboutUs from './Pages/AboutUs';
import Contact from './Pages/Contact';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        </Routes>
    </Router>
  );
}

export default App;
