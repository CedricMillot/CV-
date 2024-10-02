import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Experience from './pages/Experience';
import './App.css'; 

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </main>
      <Footer /> {/* Utilisation du Footer */}
    </>
  );
};

export default App;