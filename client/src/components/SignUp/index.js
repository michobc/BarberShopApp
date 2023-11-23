import * as React from 'react';
import { Navigate } from 'react-router';
import { useState,useEffect } from 'react';
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
import { useSignup } from '../../hooks/useSignup';
import { useAuthContext } from '../../hooks/useAuthContext';

function Copyright(props) {
  return (
    <Typography variant="body2" color="white" align="center" {...props}>
      &copy; {new Date().getFullYear()} BarberShop. All rights reserved.
    </Typography>
  );
}

const defaultTheme = createTheme();

export default function SignUp() {
  const {user} = useAuthContext()
  const [isUserSignedIn,setIsUserSignedIn] = useState(0);
  useEffect(() => {
    let isAuthenticated = user ? parseInt(user.user.isBarber) : 0;
    setIsUserSignedIn(isAuthenticated)
  }, [user]);
  
  const [firsName,setFirstName] = useState('')
  const [lastName,setLastName] = useState('')
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const [address,setAddress] = useState('')
  const [dob,setDob] = useState('')
  const [phoneNumber,setPhoneNumber] = useState('')
  const [isBarber,setIsBarber] = useState('')

  const {signup,error,isLoading} = useSignup()
  const handleSubmit = async (event) => {
    event.preventDefault();

    await signup(email,password)
  };

  if(isUserSignedIn!=0){
    return <Navigate to="/" replace />
  } else(
    <>

    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="sm">
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
                            left: '200px',}} 
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
              Sign up
            </Typography>
            <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstName"
                    required
                    fullWidth
                    id="firstName"
                    label="First Name"
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastName"
                    label="Last Name"
                    name="lastName"
                    autoComplete="family-name"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="address"
                    label="Address"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="dob"
                    label="Date of Birth (optional)"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    name="phoneNumber"
                    label="Phone Number"
                  />
                </Grid>
                <Grid item xs={12}>
                  <FormControlLabel
                    control={<Checkbox value="allowExtraEmails" color="primary" />}
                    label="I want to receive inspiration, marketing promotions and updates via email."
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
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    href="/SignIn"
                    variant="body2"
                    sx={{
                      color: 'primary.main',
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                  >
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
    </>
  );
}
