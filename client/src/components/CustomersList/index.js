import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import BreadCrumbCustomers from '../BreadCrumbs/customers';

const customersList = [
  {
    firstName: 'john',
    lastName: 'doe',
    address: 'baabdat street',
    dob: '12/2/2004',
    phoneNumber: '03/121212',
    email: 'john.doe@gmail.com'
  },
  {
    firstName: 'john1',
    lastName: 'doe',
    address: 'baabdat street',
    dob: '12/2/2004',
    phoneNumber: '03/121212',
    email: 'john.doe@gmail.com'
  },
  {
    firstName: 'john2',
    lastName: 'doe',
    address: 'baabdat street',
    dob: '12/2/2004',
    phoneNumber: '03/121212',
    email: 'john.doe@gmail.com'
  },
];

const CustomersList = () => {
  useEffect(() => {
    const cards = document.querySelectorAll('.slide-up-card');
    cards.forEach((card) => {
      card.style.transform = 'translateY(0)';
    });
  }, []);

  return (
    <>
      <BreadCrumbCustomers/>
      <section className='customersCards' style={{ margin: '100px' }}>
        <Typography variant="h4" gutterBottom sx={{color: 'white'}}>
          Total Customers: {customersList.length}
        </Typography>
        <Grid container spacing={3}>
          {customersList.map((step, index) => (
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
                      Date Of Birth: {step.const}
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
