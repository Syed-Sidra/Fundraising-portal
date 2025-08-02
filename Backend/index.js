// import required modules

const express = require('express');
const cors = require('cors');

// creating an express app

const app = express();
const PORT = 5000;

// enable cors so frontend can access backend 

app.use(cors());

//User data

const userData = {
   name: "Mohan",
   referral: "mohan2025",
   donation:"1000"


};

// API route to get user data

app.get('/api/user',(req,res) => {
    res.json(userData);
});

// starting the server

app.listen(PORT, () => {
    console.log("Backend server is running at http://localhost:${PORT}")
});