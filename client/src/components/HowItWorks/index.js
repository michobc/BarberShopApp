import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardActionArea from '@mui/material/CardActionArea';
import Grid from '@mui/material/Grid';
import PropTypes from 'prop-types';
import './index.css';



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

// const Circle = ({ diameter, color, number }) => {
//   const circleStyle = {
//     width: diameter,
//     height: diameter,
//     borderRadius: '50%',
//     backgroundColor: color,
//     zIndex: 1,
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     position: 'relative',
//     overflow: 'hidden',
//   };

//   const numberStyle = {
//     color: 'white',
//     position: 'relative',
//     zIndex: 2,
//   };

//   const maskStyle = {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     width: '100%',
//     height: '100%',
//     zIndex: 2,
//   };

//   return (
//     <div style={circleStyle}>
//       {number !== undefined && (
//         <>
//           <svg width="0" height="0">
//             <defs>
//               <mask id={`numberMask_${number}`} maskContentUnits="objectBoundingBox">
//                 <rect width="1" height="1" fill="#fff" />
//                 <text x="0.5" y="0.5" fill="#000" textAnchor="middle" alignmentBaseline="middle">
//                   {number}
//                 </text>
//               </mask>
//             </defs>
//           </svg>
//           <div style={{ ...maskStyle, mask: `url(#numberMask_${number})` }}>
//             <span style={numberStyle}>{number}</span>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

export default function ScheduleProcessCards() {
  useEffect(() => {
    const cards = document.querySelectorAll('.slide-up-card');
    cards.forEach((card) => {
      card.style.transform = 'translateY(0)';
    });
  }, []);


  

  return (
    <Grid className='booking' container spacing={3} onClick={() => {window.location.href = '/HowItWorks';}}>
      {steps.map((step, index) => (
        <Grid item xs={12} sm={6} md={3} key={index}>
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
            <CardMedia
                component="div" 
                style={{ position: 'relative' }}
              >
  <img
    src={step.image}
    alt={step.title}
    style={{ width: '100%', height: '100%', objectFit: 'cover',}}
  />
  <span className="transparent-blur-number">{index+1}</span>
  

  {/* <div
    style={{
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
  > */}
   {/* <Circle diameter="136px" color="white" number={index + 1} /> */}

  {/* </div> */}
</CardMedia>
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
