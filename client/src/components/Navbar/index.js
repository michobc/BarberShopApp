import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import InputBase from '@mui/material/InputBase';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import AccountCircle from '@mui/icons-material/AccountCircle';
import { useLogout } from '../../hooks/useLogout';
import { useAuthContext } from '../../hooks/useAuthContext';
import { useLocation } from 'react-router-dom';

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
  const {user} = useAuthContext();
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [input, setInput] = React.useState('');
  const [results, setResults] = React.useState([]);
  //search bar
  const fetchData = (value) => {
    fetch("http://localhost:3001/api/shop")
    .then((response) => response.json())
    .then((json) => {
      const results = json.filter((shop) => {
        //if the value is empty we don't render anything
        return value && shop && shop.name && shop.name.toLowerCase().includes(value) 
      })
      setResults(results)
      console.log(results)
    });
  }
  


  const handleChange = (value) =>{
    setInput(value);
    fetchData(value);
  }

  const { logout }  = useLogout()
  const handleClick = () => {
    window.location.href='/'
    logout()
  }

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setIsDrawerOpen(open);
  };

  return (
    <>
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
            <StyledInputBase value={input} onChange={(e) => handleChange(e.target.value)}
              placeholder="Search BarberShop…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          { input && results.length!=0 && <div className='results-list' style={{
            position: 'absolute',
            top: '100%',
            left: '19%',
            zIndex: 999,
            backgroundColor:'white',
            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', // Adding a subtle shadow
            borderRadius: '4px',
            width: '100%',
            maxWidth: '400px', // Limiting the width
            padding: '8px 0', // Adding padding
          }}>
            {
              results.map((result, id) => {
                return <div key={id} style={{ padding: '8px', cursor: 'pointer', color:'black' }}
                                                                    // href -> `/shop/${result.id}`
                onClick={() => {setInput(result.name); window.location.href = "/ShopProfile?shop_id="+result._id ;}}>{result.name}</div>
              })
            }
          </div>}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <Button
              color="inherit"
              onClick={() => {
                window.location.href = '/Profile';
              }}
              sx={{
                color: 'white', // Change the text color
                '&:hover': {
                  color: 'red', // Change the hover text color
                },
              }}
            >
              Appointments
            </Button>
          </Box>
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
          <IconButton
              sx={{
                color: 'white', // Change the text color
                '&:hover': {
                  color: 'red', // Change the hover text color
                },
              }}
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-haspopup="true"
              onClick={() => {
                window.location.href = '/Profile';
              }}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={isDrawerOpen} onClose={toggleDrawer(false)} >
        <List>
          <ListItem button onClick={() => window.location.href = '/Profile'}>
            <ListItemText primary="Profile" />
          </ListItem>
          <ListItem button onClick={() => window.location.href = '/Shops'}>
            <ListItemText primary="Shops" />
          </ListItem>
          <ListItem button onClick={() => window.location.href = '/Profile'}>
            <ListItemText primary="Appointments" />
          </ListItem>
          <ListItem button onClick={() => window.location.href = '/Contact'}>
            <ListItemText primary="Contact" />
          </ListItem>
          <ListItem button onClick={() => window.location.href = '/About'}>
            <ListItemText primary="About" />
          </ListItem>
          <ListItem button onClick={handleClick}>
            <ListItemText primary="Log Out" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
    </>
  );
}
