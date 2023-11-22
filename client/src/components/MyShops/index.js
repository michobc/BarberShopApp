import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import NavBarSign from '../NavBarSign';
import Navbar from '../Navbar'
import NavbarBarber from '../NavbarBarber'
import Footer from '../Footer'
import isAuthenticated from '../../UserAuth';
import Dashboard from '../Dashboard';

const steps = [
  {
    name: 'chez faysal',
    address: 'bsalim streets',
    telephone: '01/111111',
    image: 'https://bondsbarbershop.co.uk/images/home-hero.jpg',
  },
  {
    name: 'chez faysal',
    address: 'bsalim streets',
    telephone: '01/111111',
    image: 'https://bondsbarbershop.co.uk/images/home-hero.jpg',
  },
];

let navbarComponent;
const isUserSignedIn = isAuthenticated;
if (isUserSignedIn == 0) {
  navbarComponent = <NavBarSign />;
} else if (isUserSignedIn == 1) {
  navbarComponent = <Navbar />;
} else{
  navbarComponent = <NavbarBarber />;
}

export default function MyShops() {
  useEffect(() => {
    const cards = document.querySelectorAll('.slide-up-card');
    cards.forEach((card) => {
      card.style.transform = 'translateY(0)';
    });
  }, []);

  return (
    <>
    {navbarComponent}
    <section className='shopsCards' style={{ margin: '100px' }}>
    <Grid container spacing={3}>
      {steps.map((step, index) => (
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
            onClick={() => {window.location.href = '/Dashboard';}}
          >
            <CardActionArea>
            <CardMedia
                component="div" 
                style={{ position: 'relative' }}
                >
                <img
                    src={step.image}
                    alt={step.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', }}
                />
            </CardMedia>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {step.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Address: {step.address}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Telephone: {step.telephone}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
    </section>
    <Footer></Footer>
    </>
  );
}
