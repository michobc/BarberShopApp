import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';

const steps = [
  {
    title: 'Step 1: Pick a Barber',
    description: 'Choose a barber or stylist from our professional team.',
    image: 'https://bondsbarbershop.co.uk/images/home-hero.jpg', 
  },
  {
    title: 'Step 2: Choose a Service',
    description: 'Select the desired haircut or service from our menu.',
    image: 'https://d3c32wtptb9fw6.cloudfront.net/xp2xs-Mobile-Barbers.png',
  },
  {
    title: 'Step 3: Select Date & Time',
    description: 'Pick a convenient date and time for your appointment.',
    image: 'https://gnbsgy.org/wp-content/uploads/2020/02/1446980068datetime-1024x682.jpg', 
  },
  {
    title: 'Step 4: Confirm Booking',
    description: 'Review your appointment details and confirm your booking.',
    image: 'https://www.apptoto.com/wp-content/uploads/2017/06/calendar-appointment-confirmed.jpg', 
  },
];

export default function ScheduleProcessCards() {
  useEffect(() => {
    const cards = document.querySelectorAll('.slide-up-card');
    cards.forEach((card) => {
      card.style.transform = 'translateY(0)';
    });
  }, []);

  return (
    <Grid className='booking' container spacing={3}>
      {steps.map((step, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
          <Card
            sx={{ maxWidth: 345, height:'100%', display: 'flex', flexDirection: 'column', transition: 'transform 1s ease', transform: 'translateY(100%)' }}
            className="slide-up-card"
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={step.image}
                alt={step.title}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {step.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {step.description}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
