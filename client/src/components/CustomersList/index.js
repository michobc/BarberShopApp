import React, { useEffect, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import BreadCrumbCustomers from '../BreadCrumbs/customers';
import { useLocation } from 'react-router-dom';
import { useAuthContext } from '../../hooks/useAuthContext';
import './index.css';



const CustomersList = () => {
  const {user} = useAuthContext()
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const value = queryParams.get('value');
  useEffect(() => {
    const cards = document.querySelectorAll('.slide-up-card');
    cards.forEach((card) => {
      card.style.transform = 'translateY(0)';
    });
  }, []);
  const [customer, setCustomer] = useState([]);

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const appointmentResponse = await fetch('/api/appointment/getownerapp/' + value);
        const appointments = await appointmentResponse.json();
  
        if (appointmentResponse.ok) {
          const customerMap = new Map();
  
          for (const appointment of appointments) {
            console.log(appointment.user_ID);
            // Only fetch if the customer hasn't been fetched yet
            if (!customerMap.has(appointment.user_ID)) {
              const userResponse = await fetch('/api/user/' + appointment.user_ID);
              const user = await userResponse.json();
              if (userResponse.ok) {
                customerMap.set(appointment.user_ID, user);
              }
            }
          }
  
          // Convert the Map values to an array and update the state
          setCustomer(Array.from(customerMap.values()));
        }
      } catch (error) {
        console.error('Fetch error:', error);
      }
    };
  
    handleFetch();
  }, [ user]); // Ensure these are the correct dependencies
  
  console.log(customer)
  return (
    <>
      <BreadCrumbCustomers />
      <section className='customersCards' style={{ margin: '100px' }}>
        <Typography variant="h4" gutterBottom sx={{ color: 'white' }}>
          Total Customers: {customer.length}
        </Typography>
        <Grid container spacing={3}>
          {customer.map((step, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  maxWidth: 345,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  transition: 'transform 1s ease',
                  transform: 'translateY(100%)',
                }}
                className="slide-up-card"
              >
                <CardActionArea>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {step.firstName} {step.lastName}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Address: {step.address}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Date Of Birth: {step.dob}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Phone: {step.phoneNumber}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Email: {step.email}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
        <br></br>
        <div className='intro-logo21'>
          <button className="buttonn1" onClick={() => window.location.href = '/Dashboard'}>
            Return
          </button>
        </div>
      </section>
    </>
  );
}

export default CustomersList;
