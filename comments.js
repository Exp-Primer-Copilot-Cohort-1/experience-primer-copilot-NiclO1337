// create web server
const express = require('express');
const app = express();
// create a port
const port = 3000;

// create a route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/comments', (req, res) => {
  res.send('Comments will be here');
});

// start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});