import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import AdSpaceListing from './pages/AdSpaceListing';
import AdSpacePage from './pages/AdSpacePage';
import ScrollToTop from './components/ScrollToTop'; // Add this import

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Add this component inside Router but outside Routes */}
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ad-spaces" element={<AdSpaceListing />} />
            <Route path="/ad-space/:id" element={<AdSpacePage />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </Router>
  );
}

export default App;
