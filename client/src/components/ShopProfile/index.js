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
    FormControlLabel, 
    Button
} from '@mui/material';
import { DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Alert from '@mui/material/Alert';

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
    const {user} = useAuthContext();
    const [selectedTime, setSelectedTime] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [cleared, setCleared] = useState(false);
    const [calendarDate, setCalendarDate] = useState(null);

    //adding to database
    const handleSubmit = async (event) => {
      event.preventDefault();
      if(user && calendarDate){
      const response = await fetch('/api/appointment/create',{
      method:'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({ time: selectedTime, user_ID: user.user._id, price: selectedOption, day:calendarDate.$D, month:calendarDate.$M,year:calendarDate.$y })

      });
      if (!response.ok){
        console.log('error')
      }
      if (response.ok){
        window.location.href='/'
        console.log('added to database')
      }
    }
      
    }


    useEffect(() => {
      if (cleared) {
        const timeout = setTimeout(() => {
          setCleared(false);
        }, 1500);

        return () => clearTimeout(timeout);
      }
      return () => {};
    }, [cleared]);

    const handleTimeChange = (event) => {
        setSelectedTime(event.target.value);
    };

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };



    const [timeSlots,setTimeSlot]=useState([])
    useEffect(()=>{
      setTimeSlot(generateTimeSlots())
    },[])
    


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
          <Typography variant="h2" color="text.secondary" sx={{ marginBottom: 2, fontSize: 90, color: 'black' }}>
            {shop.name}
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ marginBottom: 2 }}>
            Address: {shop.address}
          </Typography>
          <Typography variant="body2" color="textSecondary" sx={{ marginBottom: 2 }}>
            Telephone: {shop.telephone}
          </Typography>

          <Typography variant="h2" color="text.secondary" sx={{ marginBottom: 2, fontSize: 20, color: 'black' }}>
            BOOK APPOINTMENT
          </Typography>
          
          <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box
        sx={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <DemoItem label="DatePicker">
          <DatePicker
            sx={{ width: 260 }}
            slotProps={{
              field: { clearable: true, onClear: () => setCleared(true) },
            }}
            value={calendarDate}  // Set the value prop to reflect the state value
            onChange={(newValue) => setCalendarDate(newValue)}
          />
        </DemoItem>

        {cleared && (
          <Alert
            sx={{ position: 'absolute', bottom: 0, right: 0 }}
            severity="success"
          >
            Field cleared!
          </Alert>
        )}
      </Box>
    </LocalizationProvider>

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
                <FormControlLabel value="20$" control={<Radio />} label="Trim" />
                <FormControlLabel value="10$" control={<Radio />} label="Beard" />
                <FormControlLabel value="25$" control={<Radio />} label="Trim & Beard" />
              </RadioGroup>
            </FormControl>
        </CardContent>
        <Button variant="contained" color='error' onClick={handleSubmit}>Submit</Button>
      </Card>
    </Box>
    <Footer></Footer>
    </>
  );
};

export default ShopProfile;
