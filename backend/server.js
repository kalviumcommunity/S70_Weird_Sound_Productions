const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose')
const connectDatabase = require('./db/Database'); 
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

connectDatabase();

app.get('/', (req, res) => {
    res.send('Welcome to the MongoDB connection server!');
});
app.get('/status', (req, res) => {
    if (mongoose.connection.readyState === 1) {
        res.send('MongoDB connected successfully!');
    } else {
        res.status(500).send('MongoDB connection failed!');
    }
});
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});