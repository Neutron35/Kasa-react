import React from 'react';
import { Navigate, Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { createRoot } from 'react-dom/client';
import Home from './pages/Home';
import About from './pages/About';
import Lodging from './pages/Lodging';
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
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lodging/:lodgingId" element={<Lodging />} />
          <Route path="/about" element={<About />} />
          <Route path="notfound" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/notfound" replace />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  </React.StrictMode>
);