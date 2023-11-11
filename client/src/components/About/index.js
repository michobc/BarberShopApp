import React, { useState, useEffect } from 'react';
import { Typography, Container, Paper, Grid, Box } from '@mui/material';
import { useSpring, animated, config } from 'react-spring';
import NavBarSign from '../NavBarSign'
import Footer from '../Footer'

const teamMembers = [
  {
    "first name": "Berna",
    "last name": "Zib",
    "title": "Co-founder",
    "location": "Lebanon, Jdeide",
    "locationCountry": "Ar",
    "github": "BernaZib"
  },
  {
    "first name": "Michel",
    "last name": "Bou Chahine",
    "title": "Co-founder",
    "location": "Lebanon, Baabdat",
    "locationCountry": "Ar",
    "github": "michobc"
  },
  {
    "first name": "Georges",
    "last name": "Faysal",
    "title": "Co-founder",
    "location": "Lebanon, Bsalim",
    "locationCountry": "Ar",
    "github": "george-10"
  }
];

const About = () => {
  const fadeInProps = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    config: config.molasses, // Adjust the animation configuration as needed
  });

  return (
    <div>
      <NavBarSign />
    <animated.div style={fadeInProps}>
      <Container maxWidth="md" id="aboutUs" sx={{ backgroundColor: 'white', padding: 3, marginTop:10, borderRadius: 5,}}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Box p={2}>
            <Typography variant="h5" gutterTop>
              Our Mission
            </Typography>
            <Typography variant="body1" gutterBottom>
              Our mission is to provide the ultimate grooming experience by seamlessly managing appointments
              and payments. We believe in the core values of precision, reliability, and customer satisfaction.
            </Typography>
            <Typography variant="h5" gutterTop>
              Our History
            </Typography>
            <Typography variant="body1" gutterBottom>
              Since our inception, we've been committed to revolutionizing the way you schedule and pay for your barber appointments. 
              We've reached significant milestones in our journey and are proud of the trust we've built with our clients.
            </Typography>
            <Typography variant="h5" gutterTop>
              Meet the Team
            </Typography>
            <Grid container spacing={5} sx={{ marginBottom: 10, marginTop: 0.01 }}>
              {teamMembers.map((member, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <Paper elevation={3} style={{ padding: '20px', height: '100%'}}>
                    <Typography variant="h6">{member["first name"]} {member["last name"]}</Typography>
                    <Typography variant="subtitle1" color="textSecondary">{member.title}</Typography>
                    <Typography variant="body2" color="textSecondary">{member.location}, {member.locationCountry}</Typography>
                    <Typography variant="body2" component="a" href={`https://github.com/${member.github}`} target="_blank" rel="noopener noreferrer">
                      GitHub: {member.github}
                    </Typography>
                  </Paper>
                </Grid>
              ))}
            </Grid>
            <Typography variant="body1" gutterBottom>
              Get to know the talented professionals behind the scenes who've combined their expertise in barbering and technology to 
              bring you the best services. Our team is dedicated to making your grooming experience exceptional.
            </Typography>
            <Typography variant="h5" gutterTop>
              Company Culture
            </Typography>
            <Typography variant="body1" gutterBottom>
              We foster a culture of excellence, continuous improvement, and customer-centricity. Our work environment promotes innovation 
              and teamwork to ensure that every aspect of your grooming experience is exceptional.
            </Typography>
            <Typography variant="h5" gutterTop>
              Testimonials
            </Typography>
            <Typography variant="body1" gutterBottom>
              Don't just take our word for it. Hear what our satisfied customers have to say about their experiences with us. Their feedback
              and reviews speak volumes about our commitment to quality and convenience.
            </Typography>
          </Box>
        {/* Add more sections for other elements as needed */}
      </Container>
    </animated.div>
    <Footer></Footer>
    </div>
  );
};

export default About;
