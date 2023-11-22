import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import PickUser from '../PickUser';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: '50%',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

export default function PrimarySearchAppBar() {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: 'black' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={toggleDrawer(true)}
          >
            <MenuIcon />
          </IconButton>
          <IconButton
            variant="h6"
            color="inherit"
            component="div"
            sx={{ display: { xs: 'none', sm: 'block' } }}
            onClick={() => window.location.href = '/'}
          >
            The Barber
          </IconButton>
          <Search>
            <SearchIconWrapper></SearchIconWrapper>
            <StyledInputBase
              placeholder="Search Barber…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              color="inherit"
              onClick={() => {
                window.location.href = '/Shops';
              }}
              sx={{
                color: 'white', // Change the text color
                '&:hover': {
                  color: 'red', // Change the hover text color
                },
              }}
            >
              Shops
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              color="inherit"
              onClick={() => {
                window.location.href = '/About';
              }}
              sx={{
                color: 'white', // Change the text color
                '&:hover': {
                  color: 'red', // Change the hover text color
                },
              }}
            >
              About
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              color="inherit"
              onClick={() => {
                window.location.href = '/Contact';
              }}
              sx={{
                color: 'white', // Change the text color
                '&:hover': {
                  color: 'red', // Change the hover text color
                },
              }}
            >
              Contact
            </Button>
          </Box>
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              // color="inherit"
              onClick={() => {
                window.location.href = '/PickUser';
              }}
              sx={{
                color: 'white', // Change the text color
                backgroundColor: 'red', // Change the background color
                '&:hover': {
                  backgroundColor:'lightpink', // Change the hover background color
                },
                borderRadius: '20px', // Add rounded corners
                padding: '8px 20px', // Adjust padding
                whiteSpace: 'nowrap',
              }}
            >
              Sign Up
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <List>
          <ListItem button onClick={() => window.location.href = '/PickUser'}>
            <ListItemText primary="Sign Up" />
          </ListItem>
          <ListItem button onClick={() => window.location.href = '/Shops'}>
            <ListItemText primary="Shops" />
          </ListItem>
          <ListItem button onClick={() => window.location.href = '/Contact'}>
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem button onClick={() => window.location.href = '/About'}>
            <ListItemText primary="About" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
