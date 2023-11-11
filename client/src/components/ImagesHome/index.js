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
    url: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    caption: 'Bed',
  },
  {
    url: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    caption: 'Books',
  },
  {
    url: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    caption: 'Sink',
  },
  {
    url: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    caption: 'Kitchen',
  },
  {
    url: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    caption: 'Blinds',
  },
  {
    url: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    caption: 'Chairs',
  },
  {
    url: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    caption: 'Laptop',
  },
  {
    url: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    caption: 'Doors',
  },
  {
    url: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    caption: 'Coffee',
  },
  {
    url: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    caption: 'Storage',
  },
  {
    url: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    caption: 'Candle',
  },
  {
    url: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    caption: 'Coffee table',
  },
];