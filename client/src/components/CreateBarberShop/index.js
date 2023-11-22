import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      &copy; {new Date().getFullYear()} BarberShop. All rights reserved.
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function CreateBarberShop() {
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const { barberShopName, address, telephone, barbers } = Object.fromEntries(data);
  
      // Continue with form submission if validations succeed
      console.log({
        barberShopName,
        address,
        telephone,
        barbers,
      });
    };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              bgcolor: 'white',
              borderRadius: '4px',
              padding: '20px',
              boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >

            <IconButton sx={{position: 'relative',
                            top: 0,
                            left: '160px',}} 
                            onClick={() => window.location.href = '/'}>
              <CloseIcon />
            </IconButton>

            <Avatar
              sx={{
                m: 1,
                bgcolor: 'red',
                color: 'white',
              }}
            >
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="v1" variant="h4">
              Create BarberShop
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                    <TextField
                    fullWidth
                    required
                    name="barberShopName"
                    label="BarberShop Name"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    name="address"
                    label="Address"
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    required
                    fullWidth
                    name="telephone"
                    label="Telephone"
                    />
                </Grid>
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  bgcolor: 'red',
                  '&:hover': {
                    bgcolor: 'black',
                  },
                }}
              >
                Create
              </Button>
            </Box>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
