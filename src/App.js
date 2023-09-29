import React from 'react';
import Hero from './components/Hero/Hero';
import Services from './components/Servicess/Services';
import Emergency from './components/Emergency/Emergency';
import Feature from './components/Features/Feature';
import Expertice from './components/Expertice/Expertice';
import Testimonial from './components/Testimonial/Testimonial';
import Blogs from './components/Blogs/Blogs';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';

const App = () => {
  return(
    <>
    <Hero />

    <div className="section-text">
      <h1>Dentalist is re-imagining what the dental experience can be and proudly setting a new standard for patient care.</h1>
      <span></span>
    </div>

    <Services />
    <Emergency />
    <Feature />
    <Expertice />
    <Testimonial />
    <Blogs />
    <Contact />
    <Footer />
    </>
  )
}
export default App;