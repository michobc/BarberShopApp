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

export default function SignUpBarber() {
    const [errors, setErrors] = React.useState({});
    const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(true);

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };
    
    const validatePassword = (password) => {
        const passwordMinLength = 8;
        return password.length >= passwordMinLength;
    };
  
    const handleInputChange = (event) => {
      const { name, value } = event.target;
  
      // Validate input fields on change and update the errors state
      if (name === 'email') {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: !validateEmail(value) ? 'Please enter a valid email address' : '',
        }));
      } else if (name === 'password') {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: !validatePassword(value) ? 'Password must be at least 8 characters long' : '',
        }));
      }
    };
  
    React.useEffect(() => {
      // Check if email and password errors are empty to enable/disable the submit button
      setIsSubmitDisabled(!!errors.email || !!errors.password);
    }, [errors.email, errors.password]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const { firstName, lastName, email, password, address, dob, phoneNumber } = Object.fromEntries(data);
  
      const isEmailValid = validateEmail(email);
      const isPasswordValid = validatePassword(password);
  
      if (!isEmailValid) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: 'Please enter a valid email address',
        }));
        return;
      }
  
      if (!isPasswordValid) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          password: 'Password must be at least 8 characters long',
        }));
        return;
      }
  
      // Reset any previous errors if validations pass
      setErrors({});
  
      // Continue with form submission if validations succeed
      console.log({
        firstName,
        lastName,
        email,
        password,
        address,
        dob,
        phoneNumber,
      });
    };

  return (
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
                            onClick={() => window.location.href = '/PickUser'}>
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
                    error={!!errors.email}
                    helperText={errors.email}
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    onChange={handleInputChange}
                    />
                </Grid>
                <Grid item xs={12}>
                    <TextField
                    error={!!errors.password}
                    helperText={errors.password}
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="new-password"
                    onChange={handleInputChange}
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
                    label="Date of Birth"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    fullWidth
                    required
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
                disabled={isSubmitDisabled}
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
  );
}
