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

const theme = createTheme();

const boxStyle = {
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: theme.spacing(3),
  border: `1px solid ${theme.palette.primary.main}`,
  borderRadius: theme.spacing(1),
  boxShadow: `0px 0px 5px 0px ${theme.palette.primary.main}`,
  backgroundColor: theme.palette.background.paper,
};


const closeButtonStyle = {
  position: 'relative',
  top: theme.spacing(0),
  left: theme.spacing(17),
};

const avatarStyle = {
  m: 1,
  bgcolor: 'red',
};

const formStyle = {
  width: '100%',
  marginTop: theme.spacing(1),
};

const submitButtonStyle = {
  margin: theme.spacing(3, 0, 2),
  bgcolor:'red',
  '&:hover': {
    bgcolor: 'black',
  },
};

export default function SignIn() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box sx={boxStyle}>

          <IconButton sx={closeButtonStyle} onClick={() => window.location.href = '/'}>
            <CloseIcon />
          </IconButton>

          <Avatar sx={avatarStyle}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h2" variant="h4">
            Sign In
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={formStyle}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              sx={submitButtonStyle}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="../SignUp" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
