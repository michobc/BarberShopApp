import React, { useEffect, useState } from 'react';
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
import BreadCrumbMyShops from '../BreadCrumbs/myshops';
import { useAuthContext } from '../../hooks/useAuthContext';


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


export default function MyShops() {
  const [steps,setState] = useState([])
  const {user} = useAuthContext()
  const [isUserSignedIn,setIsUserSignedIn] = useState(0);
  useEffect( () => {
    let isAuthenticated = user ? parseInt(user.user.isBarber) : 0;
    setIsUserSignedIn(isAuthenticated)
   }, [user]);
  useEffect(()=>{
    const handleFetch=async () =>{
      if(user){
      const temp = await fetch ('/api/shop/myshops/'+user.user._id)
      const response = await temp.json()
      if (response){
        setState(response)
      }
      }
      
    }
    handleFetch();
  },[user])
  console.log(steps);
 
  let navbarComponent;
  if (isUserSignedIn == 0) {
    navbarComponent = <NavBarSign />;
  } else if (isUserSignedIn == 1) {
    navbarComponent = <Navbar />;
  } else{
    navbarComponent = <NavbarBarber />;
  }

  useEffect(() => {
    const cards = document.querySelectorAll('.slide-up-card');
    cards.forEach((card) => {
      card.style.transform = 'translateY(0)';
    });
  }, []);

  return (
    <>
    {navbarComponent}
    <BreadCrumbMyShops/>
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
                    src={'https://bondsbarbershop.co.uk/images/home-hero.jpg'}
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
                    Telephone: {step.phoneNumber}
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
