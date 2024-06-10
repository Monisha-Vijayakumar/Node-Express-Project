const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConnection');
const env = require('dotenv').config();

connectDb();
const app = express();

const port = process.env.port || 5000; 

app.use(express.json()); //to get the data from client to controller
app.use('/api/contacts', require('./routes/contactRoutes')); //prefix for all the routes
app.use('/api/user', require('./routes/userRoutes'));
app.use(errorHandler);

app.listen(port, () => {
    console.log(`express project is running on port ${port}`);
})