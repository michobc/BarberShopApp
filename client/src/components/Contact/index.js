import { useState } from "react";
import axios from 'axios'
import isAuthenticated from '../../UserAuth'
import { TextField, Button, Typography, Box } from "@mui/material";
import NavBarSign from '../NavBarSign'
import NavbarBarber from '../NavbarBarber'
import Navbar from '../Navbar'
import Footer from '../Footer'
import BreadCrumbContact from "../BreadCrumbs/contact";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e){
    e.preventDefault();
    // try{
    //   await axios.post("http://localhost:3000/", {name, email, message})
    // }catch(e){
    //   console.log(e);
    // }
  };

  let navbarComponent;
  const isUserSignedIn = isAuthenticated;
  if (isUserSignedIn == 0) {
    navbarComponent = <NavBarSign />;
  } else if (isUserSignedIn == 1) {
    navbarComponent = <Navbar />;
  } else{
    navbarComponent = <NavbarBarber />;
  }

  return (
    <div>
      {navbarComponent}
      <BreadCrumbContact/>
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Box sx={{ maxWidth: 600, mx: "auto", p: 2 , backgroundColor: 'white', padding: 5, borderRadius: 5}}>
        <Typography variant="h4" align="center" mb={2}>
          Contact Us
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            margin="normal"
            required
          />
          <TextField
            fullWidth
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            margin="normal"
            required
            type="email"
          />
          <TextField
            fullWidth
            label="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            margin="normal"
            required
            multiline
            rows={4}
          />
          <Button variant="contained" type="submit" sx={{ mt: 2,
            backgroundColor:'red', width:'100%',
            '&:hover': {
              bgcolor: 'lightpink',
            },}}>
            Submit
          </Button>
        </form>
      </Box>
    </Box>
      <Footer></Footer>
    </div>
  );
}