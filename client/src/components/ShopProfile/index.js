import React, { useState,useEffect } from 'react';
import { useAuthContext } from '../../hooks/useAuthContext';
import { 
    Card, 
    CardContent, 
    Avatar, 
    Typography,
    Box, 
    Select, 
    MenuItem,  
    Radio,
    RadioGroup,
    FormControl,
    FormControlLabel, } from '@mui/material';

import { DatePicker } from '@mui/lab';
import { TextField } from '@mui/material';
import isAuthenticated from '../../UserAuth';
import NavBarSign from '../NavBarSign';
import Navbar from '../Navbar'
import NavbarBarber from '../NavbarBarber'
import Footer from '../Footer'



const generateTimeSlots = () => {
    const startTime = 7 * 60; // 7 am in minutes
    const endTime = 17 * 60; // 5 pm in minutes
    const interval = 20; // 20 minutes interval
    const timeSlots = [];

  
    for (let i = startTime; i < endTime; i += interval) {
      const hours = Math.floor(i / 60);
      const minutes = i % 60;
      const time = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
      timeSlots.push(time);
    }
  
    return timeSlots;
  };

const ShopProfile = ({ shop }) => {
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const timeSlots = generateTimeSlots();
    const {user} = useAuthContext()
    const [isUserSignedIn,setIsUserSignedIn] = useState(0);
    useEffect(() => {
      let isAuthenticated = user ? parseInt(user.user.isBarber) : 0;
      setIsUserSignedIn(isAuthenticated)
    }, [user]);

    let navbarComponent;

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
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh', // Center vertically on the page
      }}
    >
      <Card sx={{ width: 1000, padding: 10, textAlign: 'center', boxShadow: 20, borderRadius: 2, backgroundColor: 'white' }}>
        <CardContent>
          <Avatar alt='avatar' sx={{ width: 150, height: 150, marginBottom: 2 }} />
          <Typography variant="h2" color="text.secondary" sx={{ marginBottom: 2, fontSize: 30, color: 'black' }}>
            {shop.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
            Address: {shop.address}
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
            Telephone: {shop.telephone}
          </Typography>

          <Typography variant="h2" color="text.secondary" sx={{ marginBottom: 2, fontSize: 30, color: 'black' }}>
            BOOK APPOINTMENT
          </Typography>

          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
              Select Date:
              <DatePicker
                  label="Date"
                  value={selectedDate}
                  onChange={handleDateChange}
                  renderInput={(params) => <TextField {...params} />}
                  style={{ marginLeft: '10px' }}
              />
          </Typography>

          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
              Select Time:
              <Select value={selectedTime} onChange={handleTimeChange}  style={{ minWidth: '120px', marginLeft: '10px' }}>
                {timeSlots.map((time, index) => (
                  <MenuItem key={index} value={time} style={{ minWidth: '200px'}}>
                    {time}
                  </MenuItem>
                ))}
              </Select>
            </Typography>

            <FormControl component="fieldset" sx={{ marginBottom: 2 }}>
              <Typography variant="body2" color="textSecondary">
                Select Option:
              </Typography>
              <RadioGroup
                aria-label="option"
                name="option"
                value={selectedOption}
                onChange={handleOptionChange}
                row
              >
                <FormControlLabel value="trim" control={<Radio />} label="Trim" />
                <FormControlLabel value="beard" control={<Radio />} label="Beard" />
                <FormControlLabel value="trim&beard" control={<Radio />} label="Trim & Beard" />
              </RadioGroup>
            </FormControl>


        </CardContent>
      </Card>
    </Box>
    <Footer></Footer>
    </>
  );
};

export default ShopProfile;
