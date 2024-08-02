import React, { useState, useEffect } from 'react';
import './App.css';
// components
import Hero from './components/hero/hero';
import Programs from './components/programs/programs';
import WhyUs from './components/Why us/WhyUs';
import Plans from './components/Plans/Plans';
import Testimonials from './components/Testimonials/Testimonials'; 
import Join from './components/Join/Join';
import Footer from './components/Footer/Footer';

function App() {
    return(
            <div className="App">
                <Hero />
                <Programs />
                <WhyUs />
                <Plans />
                <Testimonials />
                <Join />
                <Footer />
            </div>
    )
}
export default App;
