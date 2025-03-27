const express = require('express');
const mongoose = require('mongoose');
const user = require('./routes/user');

require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5001;

mongoose
    .connect(
        process.env.mongoURI,
        { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB successfully connected'))
    .catch(error => console.log('Connection error', error))

app.use('/users', user);

app.listen(PORT, () => console.log(`Server up and running on port ${PORT} !`));
