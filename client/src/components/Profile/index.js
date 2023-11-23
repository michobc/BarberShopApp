import React, { useState } from 'react';
import { Card, CardContent, Avatar, Typography, Button, Input, Box } from '@mui/material';
import NavBarSign from '../NavBarSign';
import Navbar from '../Navbar';
import NavbarBarber from '../NavbarBarber';
import isAuthenticated from '../../UserAuth';
import Footer from '../Footer';
import avatarpic from '../../pictures/avatarprofile.png';
import './index.css';
import BreadCrumbProfile from '../BreadCrumbs/profile';



let navbarComponent;
  const isUserSignedIn = isAuthenticated;
  if (isUserSignedIn == 0) {
    navbarComponent = <NavBarSign />;
  } else if (isUserSignedIn == 1) {
    navbarComponent = <Navbar />;
  } else{
    navbarComponent = <NavbarBarber />;
  }


const UserProfile = ({ user }) => {
  return (
    <>
    {navbarComponent}
    <BreadCrumbProfile/>
    <Box className='allprofile'>
      <Card className='personalinfo' sx={{padding: 10, textAlign: 'center', boxShadow: 20, borderRadius: 12, backgroundColor: 'white' }}>
        <CardContent>
          <div id='pic'>
            <img id='picc' alt='profile_picture' src={avatarpic}/>
          </div>
          

          {/* <Avatar alt='avatar'  sx={{ width: 150, height: 150, marginBottom: 2 }} />
          <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
            {user.name}
          </Typography>
          <Typography variant="h2" color="text.secondary" sx={{ marginBottom: 2, fontSize: 30, color: 'black' }}>
            {user.firstName} {user.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
            {user.email}
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
            Date of Birth: {user.dateOfBirth}
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
            Address: {user.address}
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
            Phone Number: {user.phoneNumber}
          </Typography> */}
        </CardContent>
      </Card>


      <Card className='appointments' sx={{padding: 10, textAlign: 'center', boxShadow: 20, borderRadius: 12, backgroundColor: 'white' }}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
            {user.name}
          </Typography>
          <Typography variant="h2" color="text.secondary" sx={{ marginBottom: 2, fontSize: 30, color: 'black' }}>
            {user.firstName} {user.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
            {user.email}
          </Typography>
        </CardContent>
      </Card>



      <Card className='exappointments' sx={{padding: 10, textAlign: 'center', boxShadow: 20, borderRadius: 12, backgroundColor: 'white' }}>
        <CardContent>
          <Typography variant="h5" component="div" sx={{ marginBottom: 2 }}>
            {user.name}
          </Typography>
          <Typography variant="h2" color="text.secondary" sx={{ marginBottom: 2, fontSize: 30, color: 'black' }}>
            {user.firstName} {user.lastName}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
            {user.email}
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
            Date of Birth: {user.dateOfBirth}
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
            Address: {user.address}
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
            Phone Number: {user.phoneNumber}
          </Typography>
        </CardContent>
      </Card>



    </Box>
    <Footer/>
    </>
  );
};

export default UserProfile;
