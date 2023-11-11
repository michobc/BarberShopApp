const express = require("express");
const app = express(); //create roots , applying middleware, api start...
const mongoose = require('mongoose');
const UserModel = require('./models/Users');


// used to connect to our react app without any errors
const cors = require("cors");

// any request on the body wont work without it 
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://dbUser:dbUserClusterGBM@cluster0.xgk5bnh.mongodb.net/Barbershopdb?retryWrites=true&w=majority") // connection to the cluster in the database that we created


app.get("/getUsers", (req, res) => {
    // {} means to retrieve everything in the collection
    UserModel.find({})
        .then((result) => {
            res.json(result); // send back JSON data to the frontend
        })
        .catch((err) => {
            res.json(err);
        });
});

// async to add or update or delete -> we can use await
// Use app.post for creating a user
app.post("/createUser", async (req, res) => {
    const user = req.body; // Assuming you send user data in the request body
    const newUser = new UserModel(user);

    try {
        await newUser.save();
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ error: 'Error creating user' });
    }
});


// for the api to start with the port 
// and a function to run when the server is running
// we added "start": "nodemon index.js" in package.json it will run the server when we do npm start
// when we save the file it will restart the server
app.listen(3001, () => {
    console.log("SERVER RUNS")
});

