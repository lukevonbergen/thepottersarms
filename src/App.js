import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import BookARoom from './pages/BookARoom';
import ComedyNights from './pages/ComedyNights';
import SpecialEvents from './pages/SpecialEvents';
import Wakes from './pages/Wakes';
import Gallery from './pages/Gallery';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/book-a-room" element={<BookARoom />} />
        <Route path="/comedy-nights" element={<ComedyNights />} />
        <Route path="/special-events" element={<SpecialEvents />} />
        <Route path="/wakes" element={<Wakes />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
