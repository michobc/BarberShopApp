import * as React from 'react';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';

export default function DisableElevation() {
  return (
    <ButtonGroup
      disableElevation
      variant="contained"
      aria-label="Disabled elevation buttons"
      color='inherit'
    >
      <Button>Previous</Button>
      <Button>Next</Button>
    </ButtonGroup>
  );
}