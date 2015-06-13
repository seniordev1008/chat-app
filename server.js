const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const app = express();

// Body Parser middleware to parse request bodies
app.use(
    bodyParser.urlencoded({
        extended: false
    })
);
app.use(bodyParser.json())


// Database configuration
const db = require('./config/keys').mongoURI;

mongoose
    .connect(
        db,
        { useNewUrlParser: true }
    )
    .then(() => console.log('MongoDB Successfully Connected'))
    .catch(err => console.log(err));

// Port that the webserver listens to
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server running on port ${port}`));