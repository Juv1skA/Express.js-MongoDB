// imports express, mongoose, cors
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

// create instance of express
const app = express();

// define server port and middleware
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/your_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});

// Define Mongoose schema and model (as shown in the previous answer)

// routes
app.use(express.json());
app.use('/contactRoutes.js', async (req, res) => {
    console.log('test')
});
app.use(cors());

// Create a new user
app.post('/api/users', async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all users
app.get('/api/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get a specific user by ID
app.get('/api/users/:id', async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//define route for GET to root URL
app.get('/', (req, res) => {
    // send response when route is accessed
    res.send('Hello world!');
});


// start server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});