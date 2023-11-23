import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import './index.css'
import BreadCrumbAppointments from '../BreadCrumbs/appointments';

const appointmentsList = [
  {
    name: 'faysal',
    time: '9:20',
    price: '5$',
  },
  {
    name: 'sdn',
    time: '7:40',
    price: '10$',
  },
  {
    name: 'asd',
    time: '8:00',
    price: '3$',
  },
];

const Appointments = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.slide-up-card');
    cards.forEach((card) => {
      card.style.transform = 'translateY(0)';
    });
  }, []);

  // Sort appointmentsList based on time
  const sortedAppointments = appointmentsList.sort((a, b) => {
    // Assuming time is in HH:MM format, compare the times as strings
    return a.time.localeCompare(b.time);
  });

  return (
    <>
      <BreadCrumbAppointments/>
      <section className='AppointmentCards' style={{ margin: '100px' }}>
        <Grid container spacing={3}>
          {sortedAppointments.map((step, index) => (
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
                      {step.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Time: {step.time}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Price: {step.price}
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

export default Appointments;
