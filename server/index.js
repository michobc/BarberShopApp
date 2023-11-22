const express = require("express");
const app = express(); //create roots , applying middleware, api start...
const mongoose = require('mongoose');
//user
const userRoutes = require('./routes/User');
//shop
const shopRoutes = require('./routes/Shop')
//app
const appRoutes = require('./routes/Appointment')
// used to connect to our react app without any errors
const cors = require("cors");

// any request on the body wont work without it 
app.use(express.json());
app.use(cors());
//connect to DB
app.use('/api/user',userRoutes);
app.use('/api/shop',shopRoutes);
app.use('/api/appointment',appRoutes);
mongoose.connect("mongodb+srv://dbUser:dbUserClusterGBM@cluster0.xgk5bnh.mongodb.net/Barbershopdb?retryWrites=true&w=majority") // connection to the cluster in the database that we created
    .then((result) =>{ console.log("connected to db");//connect to database before listen
                        app.listen(3001, () => {
                            console.log("SERVER RUNS on port 3001")
                        })})
    .catch((err) => console.log(err));


