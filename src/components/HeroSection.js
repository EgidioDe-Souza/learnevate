import React from 'react';
import { Button } from './Button';
import './HeroSection.css'
import '../App.css'

function HeroSection() {
    return (
      <div className="hero-container">
          <h1>Your Development Starts from here</h1>
          <p>What are you waiting for?</p>
          <div className="hero-btns">
             <Button 
              className="btns" 
              buttonStyle="btn--outline"
              buttonSize="btn--large"
             >
              Get Started
             </Button>
          </div>
        </div>   
    );
}

export default HeroSection
