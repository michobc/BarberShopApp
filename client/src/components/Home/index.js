import React from 'react';
import { useSpring, animated } from 'react-spring';
import NavBarSign from '../NavBarSign';
import Navbar from '../Navbar'
import NavbarBarber from '../NavbarBarber'
import HowItWorks from '../HowItWorks';
import ImagesHome from '../ImagesHome'
import Footer from '../Footer';
import logo from '../../logo.jpg';
import './index.css';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useState,useEffect } from 'react';
import VideoPlayer from '../VideoPlayer';

function Home() {
  // Define the slide-up animation
  const slideUp = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
    config: { duration: 1000 }, // Adjust the duration as needed
  });


  const {user} = useAuthContext()
  const [isUserSignedIn,setIsUserSignedIn] = useState(0);
  useEffect(() => {
    let isAuthenticated = user ? parseInt(user.user.isBarber) : 0;
    setIsUserSignedIn(isAuthenticated)
  }, [user]);
  
  let navbarComponent
  if (isUserSignedIn == 0) {
    navbarComponent = <NavBarSign />;
  } else if (isUserSignedIn == 1) {
    navbarComponent = <Navbar />;
  } else{
    navbarComponent = <NavbarBarber />;
  }

  return (
    <>
      {navbarComponent}
      <div className='intro-logo'>
        <animated.img src={logo} alt="Logo" style={slideUp} />
        <animated.h1 style={slideUp}>Providing top-quality beauty services</animated.h1>
        <animated.button style={slideUp}                                                                                          // take us to search barbers            take us to create barbershop
          className="button" onClick={isUserSignedIn === 0 ? () => window.location.href = '/PickUser' : isUserSignedIn === 1 ? () => window.location.href = '/Shops' : () => window.location.href = '/CreateBarberShop'}>
            {isUserSignedIn === 2 ? 'Create BarberShop' : 'Book Now'}
        </animated.button> 
      </div>

      <div className='comp-wrapper'>
        <ImagesHome></ImagesHome>
      </div>
      
      <div>
        <VideoPlayer></VideoPlayer>
      </div>
      

      {isUserSignedIn === 0 || isUserSignedIn === 1 ?( 
      <div className='comp-wrapper'>
        <animated.h1  className='title1'style={slideUp}>Booking Process</animated.h1>
        <hr className='line1'></hr>
        <HowItWorks />
      </div>):null}

      <Footer />
    </>
  );
}

export default Home;
