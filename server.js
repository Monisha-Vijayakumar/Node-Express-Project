const express = require('express');
const env = require('dotenv').config();

const app = express();

const port = process.env.port || 5000; 

app.listen(port, () => {
    console.log(`express project is running on port ${port}`);
})