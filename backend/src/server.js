// imports express
const express = require('express');

// create instance of express
const app = express();

// define server port
const PORT = 3000;

//define route for GET to root URL
app.get('/', (req, res) => {
    // send response when route is accessed
    res.send('Hello world!');
});

// start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});