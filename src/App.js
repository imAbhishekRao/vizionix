// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ContactForm from './components/contactus'; // Import the ContactForm component
import AboutUs from './components/aboutus';
import Services from './components/services';
import PrivacyPolicy from './components/privacypolicy';
import Projects from './components/Projects';
import Marketing from './components/Marketing';


function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/about" element={<AboutUs />}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/privacypolicy" element={<PrivacyPolicy/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/marketing" element={<Marketing/>}/>
        
        </Routes>
      </div>
    </Router>
  );
}

export default App;
