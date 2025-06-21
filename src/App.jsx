import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Hero from "./components/Hero";
import Services from "./components/Services";
import AboutSection from "./components/AboutSection";
import Portfolio from "./components/Portfolio";
import Faq from "./components/Faq";
import Partners from "./components/Partners";
import ReachOut from './components/ReachOut';
import ContactPage from './components/ContactPage';
import Footer from "./components/Footer";
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Disclaimer from './components/Disclaimer';

const Home = () => (
  <>
    <Hero />
    <AboutSection />
    <Services />
    <Portfolio />
    <Partners />
    <Faq />
    <ReachOut />
    <Footer />
  </>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>
    </Router>
  );
}

export default App;
