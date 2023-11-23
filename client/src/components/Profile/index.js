import React, { useState ,useEffect} from 'react';
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



  let navbarComponent;
  if (isUserSignedIn == 0) {
    navbarComponent = <NavBarSign />;
  } else if (isUserSignedIn == 1) {
    navbarComponent = <Navbar />;
  } else{
    navbarComponent = <NavbarBarber />;
  }


const UserProfile = ({ user, appointments, pastappointments }) => {
  return (
    <>
    {navbarComponent}
    <Box className='allprofile' sx={{ height:'110vh'}}>
      <Card className='personalinfo' sx={{overflowY:'auto',textAlign: 'center', boxShadow: 20, borderRadius: 6, backgroundColor: 'white' }}>
        <CardContent>
          <div id='pic'>
            <img id='picc' alt='profile_picture' src={avatarpic}/>
          </div>


          <div className='infop'>
  <Typography id="name" variant="h5" component="div">
    {user.name}
  </Typography>

  {/* <div className="list-group"> */}
    <div className="list-group-item item1 nlname">
      <Typography variant="h6" color="text.secondary" sx={{textAlign:'left', fontSize: 30, color: 'black', marginLeft: 10 }}>
        <b>{user.firstName} {user.lastName}</b>
      </Typography>
    </div>
    
    <div className="list-group-item email">
      <Typography variant="h6" color="text.secondary" sx={{ textAlign:'left', margin: 0 }}>
      <i class="fa-solid fa-envelope"></i>
        {user.email}
      </Typography>
    </div>
   
    <div className="list-group-item dob">
      <Typography variant="h6" color="text.secondary" sx={{ textAlign:'left',margin: 0 }}>
      <i class="fa-solid fa-calendar-days"></i>
         {user.dateOfBirth}
      </Typography>
    </div>
   
    <div className="list-group-item address">
      <Typography variant="h6" color="text.secondary" sx={{ textAlign:'left',margin: 0 }}>
      <i class="fa-solid fa-location-dot"></i>
        {user.address}
      </Typography>
    </div>
   
    <div className="list-group-item phonenumber">
      <Typography variant="h6" color="text.secondary" sx={{ textAlign:'left',margin: 0 }}>
        <i class="fa-solid fa-phone"></i>
        {user.phoneNumber}
      </Typography>
    </div>
  </div>
{/* </div> */}


        </CardContent>
      </Card>

      <Card className='appointments' sx={{overflowY: 'auto', textAlign: 'center', boxShadow: 20, borderRadius: 6, backgroundColor: 'white' }}>
  <CardContent>
    <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
      <b>{user.firstName}'s Appointments</b>
    </Typography>
    {appointments.map((appointment, index) => (
      <div key={index} className="appointment-item">
        <Typography variant="h6" color="text.secondary" sx={{ marginBottom: 1 }}>
          Shop: {appointment.shopName}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
          Date: {appointment.date}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
          Time: {appointment.timeSlot}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: {appointment.price}
        </Typography>
        {index < appointments.length - 1 && <hr className="red-hr" />} {/* Add a horizontal line between appointments */}
      </div>
    ))}
  </CardContent>
</Card>


      <Card className='exappointments' sx={{ overflowY:'auto' ,textAlign: 'center', boxShadow: 20, borderRadius: 6, backgroundColor: 'white' }}>
      <CardContent>
            <Typography variant="h5" component="div" sx={{ marginBottom: 2, }}>
              <b>{user.firstName}'s Past Appointments</b>
            </Typography>
            {pastappointments.map((appointment, index) => (
              <div key={index} className="appointment-item">
                <Typography variant="h6" color="text.secondary" sx={{ marginBottom: 1 }}>
                  Shop: {appointment.shopName}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                  Date: {appointment.date}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 1 }}>
                  Time: {appointment.timeSlot}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Price: {appointment.price}
                </Typography>
                {index < pastappointments.length - 1 && <hr className="red-hr"/>} {/* Add a horizontal line between appointments */}
              </div>
            ))}
          </CardContent>
      </Card>



    </Box>
    <Footer/>
    </>
  );
};

export default UserProfile;
