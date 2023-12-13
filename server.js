const express = require('express');
// import express from 'express';
const cors = require('cors');
const app = express();
const path = require('path');
app.use(cors());
const PORT = 3000;

// app.get('/',(req,res)=>{
//     res.send("<h1>misbah<h1>");
// })
app.use('/',express.static(path.join(__dirname, 'public')));

// building first Api
app.get('/weather/:cityName', (req,res) => {
    //API 
    let weatherData = {
        karachi: {
            city: "Karachi",
            temperature: "24.6 C",
            humidity: 56,
            hight: 32,
            low: 18
        }
    }
    let  usercityname = req.params.cityName.toLowerCase();
    let weatherDatatosend = weatherData[usercityname];
    if (weatherDatatosend) {
        res.send(weatherDatatosend);
    }
    else{
        res.status(404).send(`Data not found`);
    }
})

app.listen(PORT, () => {
    console.log("hii this is me kjjsddj");

})



