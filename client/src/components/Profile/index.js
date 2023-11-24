import React, { useState, useEffect } from 'react';
import { Card, CardContent, Avatar, Typography, Button, Input, Box } from '@mui/material';
import NavBarSign from '../NavBarSign';
import Navbar from '../Navbar';
import NavbarBarber from '../NavbarBarber';
import Footer from '../Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import avatarpic from '../../pictures/avatarprofile.png';

import './index.css';
import { red } from '@mui/material/colors';
import { useAuthContext } from '../../hooks/useAuthContext';


const UserProfile = () => {
  const now = new Date();
  const { user } = useAuthContext()
  const [appointments, setState] = useState([]);
  const [isUserSignedIn, setIsUserSignedIn] = useState(0);
  useEffect(() => {
    let isAuthenticated = user ? parseInt(user.user.isBarber) : 0;
    setIsUserSignedIn(isAuthenticated)
  }, [user]);

  let navbarComponent;
  if (isUserSignedIn == 0) {
    navbarComponent = <NavBarSign />;
  } else if (isUserSignedIn == 1) {
    navbarComponent = <Navbar />;
  } else {
    navbarComponent = <NavbarBarber />;
  }

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const [dob, setDob] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  useEffect(() => {
    if (user != null) {
      setEmail(user.user.email)
      setFirstName(user.user.firstName)
      setLastName(user.user.lastName)
      setAddress(user.user.address)
      setDob(user.user.dob)
      setPhoneNumber(user.user.phoneNumber)
    }
  }, [user]);

  useEffect(() => {
    const handleFetch = async () => {
      if (user) {
        const temp = await fetch('/api/appointment/getmyapp/' + user.user._id)
        console.log(temp)
        const response = await temp.json()
        if (response) {
          setState(response)
        }
      }

    }
    handleFetch();
  }, [user])
  console.log(appointments)
  return (
    <>
      {navbarComponent}
      <Box className='allprofile' sx={{ height: '110vh' }}>
        <Card className='personalinfo' sx={{ overflowY: 'auto', textAlign: 'center', boxShadow: 20, borderRadius: 6, backgroundColor: 'white' }}>
          <CardContent>
            <div id='pic'>
              <img id='picc' alt='profile_picture' src={avatarpic} />
            </div>


            <div className='infop'>


              {/* <div className="list-group"> */}
              <div className="list-group-item item1 nlname">
                <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'left', fontSize: 30, color: 'black' }}>
                  <b>{firstName} {lastName}</b>
                </Typography>
              </div>

              <div className="list-group-item email">
                <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'left', margin: 0 }}>
                  <i class="fa-solid fa-envelope"></i>
                  {email}
                </Typography>
              </div>

              <div className="list-group-item dob">
                <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'left', margin: 0 }}>
                  <i class="fa-solid fa-calendar-days"></i>
                  {dob}
                </Typography>
              </div>

              <div className="list-group-item address">
                <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'left', margin: 0 }}>
                  <i class="fa-solid fa-location-dot"></i>
                  {address}
                </Typography>
              </div>

              <div className="list-group-item phonenumber">
                <Typography variant="h6" color="text.secondary" sx={{ textAlign: 'left', margin: 0 }}>
                  <i class="fa-solid fa-phone"></i>
                  {phoneNumber}
                </Typography>
              </div>
            </div>
            {/* </div> */}


          </CardContent>
        </Card>
        <Card className='appointments' sx={{ overflowY: 'auto', textAlign: 'center', boxShadow: 20, borderRadius: 6, backgroundColor: 'white' }}>
          <CardContent>
            <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
              <b>{firstName}'s Appointments</b>
            </Typography>
            {appointments.filter(appointment => {
              const appointmentDate = new Date(appointment.year, appointment.month , appointment.day);
              return appointmentDate >= now;
            })
              .map((appointment, index) => (
                <div key={index} className="appointment-item">
                  {/* <Typography variant="h6" color="text.secondary" sx={{ marginBottom: 1 }}>
                  Shop: {appointment.shopName}
                </Typography> */}
                  <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                    Date: {appointment.day}/ {parseInt(appointment.month)+1}/ {appointment.year}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                    Time: {appointment.time}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: {appointment.price}
                  </Typography>
                  {index < appointments.length - 1 && <hr className="red-hr" />} {/* Add a horizontal line between appointments */}
                </div>
              ))}
          </CardContent>
        </Card>


        <Card className='exappointments' sx={{ overflowY: 'auto', textAlign: 'center', boxShadow: 20, borderRadius: 6, backgroundColor: 'white' }}>
          <CardContent>
            <Typography variant="h5" component="div" sx={{ marginBottom: 2, }}>
              <b>{firstName}'s Past Appointments</b>
            </Typography>
            {appointments.filter(appointment => {
              const appointmentDate = new Date(appointment.year, appointment.month, appointment.day);
              return appointmentDate < now;
            })
              .map((appointment, index) => (
                <div key={index} className="appointment-item">
                  {/* <Typography variant="h6" color="text.secondary" sx={{ marginBottom: 1 }}>
                  Shop: {appointment.shopName}
                </Typography> */}
                  <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                    Date: {appointment.day} /{parseInt(appointment.month)+1} /{appointment.year}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                    Time: {appointment.time}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Price: {appointment.price}
                  </Typography>
                  {index < appointments.length - 1 && <hr className="red-hr" />} {/* Add a horizontal line between appointments */}
                </div>
              ))}
          </CardContent>
        </Card>



      </Box>
      <Footer />
    </>
  );
};

export default UserProfile;
