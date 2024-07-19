import React from 'react';
import { createRoot } from 'react-dom/client';
import { Navigate, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Lodging from './pages/Lodging';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';
import '@fontsource-variable/montserrat';
import './main.scss';

const domNode = document.getElementById('root');
const root = createRoot(domNode);

root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lodging/:lodgingId" element={<Lodging />} />
        <Route path="/about" element={<About />} />
        <Route path="notfound" element={<NotFound />} />
        <Route path="*" element={<Navigate to="/notfound" replace />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);