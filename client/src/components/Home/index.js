import React from 'react';
import { useSpring, animated } from 'react-spring';
import NavBarSign from '../NavBarSign'
import HowItWorks from '../HowItWorks';
import ImagesHome from '../ImagesHome'
import Footer from '../Footer';
import logo from '../../logo.jpg';
import './index.css';

function Home() {
  // Define the slide-up animation
  const slideUp = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 }, // Adjust the duration as needed
  });

  return (
    <>
      <NavBarSign />
      <div className='intro-logo'>
        <animated.img src={logo} alt="Logo" style={slideUp} />
        <animated.h1 style={slideUp}>Providing top-quality beauty services</animated.h1>
        <animated.button style={slideUp} 
          className="button" onClick={() => window.location.href = '/SignUp'}>
            Book Now</animated.button> 
      </div>

      <div className='comp-wrapper'>
        <ImagesHome></ImagesHome>
      </div>
      
      <div className='comp-wrapper'>
        <HowItWorks />
      </div>

      <Footer />
    </>
  );
}

export default Home;
