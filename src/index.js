import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Lodging from './pages/Lodging';
import About from './pages/About';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import './assets/Montserrat-VariableFont_wght.ttf';
import './main.scss';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lodging" element={<Lodging />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);