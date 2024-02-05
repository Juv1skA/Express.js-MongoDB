// imports express
const express = require('express');

//imports cors
const cors = require('cors');

// use CORS middleware
app.use(cors());

// create instance of express
const app = express();

// define server port and middleware
const PORT = process.env.PORT || 3000;

//define route for GET to root URL
app.get('/', (req, res) => {
    // send response when route is accessed
    res.send('Hello world!');
});

// start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});