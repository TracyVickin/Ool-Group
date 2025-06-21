import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutSection from "./components/AboutSection";
import Faq from "./components/Faq";
import Partners from "./components/Partners";
import ReachOut from './components/ReachOut';
import ContactPage from './components/ContactPage';

const Home = () => (
  <>
    <Hero />
    <AboutSection />
    <Services />
    <Partners />
    <Faq />
    <ReachOut />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
    </Router>
  );
}

export default App;
