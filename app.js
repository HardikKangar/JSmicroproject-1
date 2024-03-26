// Require the Express framework
const express = require('express');

// Create an Express application instance
const app = express();

// Require JSON data from a file
const data = require('./data/data.json');

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define a route to serve JSON data
app.get('/api/data', (req, res) => {
  // Send the JSON data as a response
  res.json(data);
});

// Start the server and listen on port 3008
app.listen(3008, () => {
  // Log a message to indicate that the server is running
  console.log('Server is running on port 3008');
});
