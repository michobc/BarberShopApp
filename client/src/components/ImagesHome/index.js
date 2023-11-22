import React, { useState } from 'react';
import { Box, Typography, Pagination } from '@mui/material';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const ImagesSlider = () => {
  const [activeStep, setActiveStep] = useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  const totalSteps = slideImages.length;
  const intervalDuration = 3000; // Adjust the interval duration as needed

  const imageStyle = {
    maxWidth: '100%',
    maxHeight: '100%',
    objectFit: 'cover',
    borderRadius: '0%' ,
    boxShadow: '20px 20px 20px rgba(0, 0, 0, 0.2)', // Add a box shadow
  };

  return (
    <Box>
      <AutoPlaySwipeableViews
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={intervalDuration}
        resistance
      >
        {slideImages.map((slideImage, index) => (
          <div key={index} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '500px' }}>
            <img
              src={slideImage.url}
              alt={slideImage.caption}
              style={imageStyle} // Apply the imageStyle with a shadow
            />
          </div>
        ))}
      </AutoPlaySwipeableViews>

      <Box display="flex" justifyContent="center">
        <Pagination
          count={totalSteps}
          page={activeStep}
          onChange={(event, newStep) => handleStepChange(newStep)}
          color="secondary"
          style={{ marginTop: '10px' }}
        />
      </Box>
    </Box>
  );
};

export default ImagesSlider;



const slideImages = [
  {
    url: 'https://assets-global.website-files.com/644a9d9ce529ef8812f82a28/647fb85c69e95444243ef9bd_Henley%27s%20Gentlemen%27s%20Grooming%20-%20Barbershop%20and%20Mens%20Grooming.webp',
    caption: 'shop1',
  },
  {
    url: 'https://highendbarbershop.com/wp-content/uploads/2021/02/barbeshop-.jpg',
    caption: 'shop2',
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/5d54d94fb05f400001454be1/1568608791977-G3XJ1VI0BDENMQ1A78VM/CHA02630.jpg?format=2500w',
    caption: 'shop3',
  },
  {
    url: 'https://nationalbarbers.org/wp-content/uploads/2020/09/barber-services-1.png',
    caption: 'shop4',
  },
  {
    url: 'https://thebarbercalgary.com/wp-content/uploads/2019/10/Barbershop-Calgary-se-1024x683.jpg',
    caption: 'shop5',
  },
  {
    url: 'https://images.squarespace-cdn.com/content/v1/575f3f967c65e4c54c1ed5db/1547422410196-ANFIL6FGG648K5JP9JA9/IMG_4805.JPG?format=1000w',
    caption: 'shop6',
  },
];